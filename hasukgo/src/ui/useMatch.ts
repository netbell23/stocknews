/**
 * 대전 진행 컨트롤러.
 * 규칙 엔진은 동기 순수 함수이므로, 여기서 "연출을 위한 지연"만 얹는다.
 */
import type React from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { chooseCapture, chooseCard, decideGoStop, decideGukjin, EMPTY_PROFILE, type PlayerProfile } from '../ai/ai';
import {
  bombableMonths,
  chooseMatch,
  createGame,
  currentScore,
  declareGo,
  declareShake,
  declareStop,
  playCard,
  setGukjinUse,
  shakeableMonths,
} from '../engine/game';
import { createRng, randomSeed } from '../engine/rng';
import { scorePlayer } from '../engine/score';
import type { Card, GameEvent, GameState, PlayerId, RuleOptions } from '../engine/types';
import { paramsFor, toneOf } from '../data/tenants';
import type { Tenant, Tone } from '../data/types';
import type { Expression } from '../scenario/types';

const HUMAN: PlayerId = 0;
const AI: PlayerId = 1;

export interface MatchOptions {
  tenant: Tenant;
  stage: number;
  affection: number;
  rules?: Partial<RuleOptions>;
  profile?: PlayerProfile;
  /** 3연패 중이면 힌트 대사를 띄운다 */
  losingStreak: number;
  seed?: number;
  /**
   * 화면 연출이 끝나는 시각(performance.now 기준)을 담은 ref.
   * 하숙생은 이 시각 뒤에 움직인다 — 내가 먹는 중에 상대가 내려치면
   * 무슨 일이 일어났는지 읽을 수가 없다.
   */
  busyUntil?: React.MutableRefObject<number>;
}

export interface Shout {
  key: number;
  text: string;
  /** 누가 냈는가. 내가 냈으면 상대가 놀라야 한다. */
  by: PlayerId;
  /** "3월 4장" 처럼 무슨 일이 일어났는지 한 줄 */
  detail?: string;
}

/** 하숙생이 낼 패. 연출이 끝나면 그때 실제로 반영된다. */
export interface AiThrow {
  key: number;
  card: Card;
  bomb: boolean;
}

export interface MatchView {
  state: GameState;
  /** 하숙생이 지금 하는 말 */
  line: string;
  expression: Expression;
  /** 화면 중앙에 터지는 연출 문구 */
  shout: Shout | null;
  /** 고/스톱 오버레이 (플레이어 차례) */
  askGoStop: boolean;
  /** AI 가 고를 외쳤을 때 띄우는 압박 연출 */
  aiGoStop: { action: 'go' | 'stop'; line: string } | null;
  /** 3연패 힌트 */
  hint: string | null;
  /** 하숙생이 지금 던지는 중인 패 (연출용) */
  aiThrow: AiThrow | null;
  myScore: number;
  oppScore: number;
  busy: boolean;
}

/**
 * 하숙생이 패를 띄웠다 꽂는 데 걸리는 시간. 화면 연출과 같은 값이어야 한다.
 * 상대가 뭘 내는지 눈으로 따라갈 수 있어야 해서 넉넉히 잡았다.
 */
export const AI_THROW_MS = 1550;

/** 하숙생이 패를 고르는 데 쓰는 최소한의 뜸 */
const AI_THINK_MS = 420;

/** 연출 밑에 붙는 설명. 무슨 일이 왜 일어났는지 한 줄로 알려준다. */
const EVENT_NOTE: Partial<Record<GameEvent['type'], string>> = {
  jjok: '낸 패가 깔리자마자 뒤집은 패가 같은 월 — 둘 다 가져갑니다',
  ttadak: '같은 월 네 장을 한 턴에 — 상대 피 한 장을 받습니다',
  ppeok: '세 장이 묶여 바닥에 남습니다. 나중에 먹는 사람이 임자',
  jappeok: '내가 깔아둔 뻑을 내가 또 만들었습니다',
  sseul: '바닥을 싹 비웠습니다 — 상대 피 한 장을 받습니다',
  bomb: '같은 월을 한 번에 몰아냈습니다',
  chongtong: '한 월 네 장이 처음부터 손에 있었습니다',
};

const EVENT_SHOUT: Partial<Record<GameEvent['type'], string>> = {
  jjok: '쪽!',
  ttadak: '따닥!',
  ppeok: '뻑!',
  jappeok: '자뻑!',
  sseul: '쓸!',
  bomb: '폭탄!',
  heundeulgi: '흔들기!',
  chongtong: '총통!',
  go: '고!',
  stop: '스톱!',
};

/*
 * 뒤집은 패가 내려앉아야 비로소 성립하는 것들.
 * 상태에는 패를 내는 순간 이미 적히지만, 화면에서는 아직 뒷장이 날아오는
 * 중이라 곧바로 외치면 「뻑!」 하고 나서 세 번째 장이 붙는 꼴이 된다.
 * 뒷장이 붙는 시각에 맞춰 늦춘다.
 */
const AFTER_FLIP: ReadonlySet<GameEvent['type']> = new Set(['ppeok', 'jappeok', 'jjok', 'ttadak', 'sseul']);
const FLIP_LANDS_MS = 980;

/*
 * 판이 도는 동안 주고받는 잔말.
 *
 * 하숙생마다 제 대사를 갖는 게 제일 좋지만 아직 안 쓰인 사람도 있으므로,
 * 공용 대사를 깔아 두고 가진 사람은 제 것을 쓰게 한다.
 */
const GOT_LINES: Record<Tone, string[]> = {
  low: ['이건 제가 가져갈게요.', '어, 이거 제 거죠?', '가져갑니다.'],
  mid: ['이건 놓칠 수 없죠.', '아, 이거 기다렸어요.', '잘 들어왔네요.'],
  high: ['이거 가져가도 안 삐질 거죠?', '오늘은 제가 좀 잘되네요.', '봤어요? 방금.'],
};
const BIG_GOT_LINES: Record<Tone, string[]> = {
  low: ['어! 이거 큰 거 아니에요?', '이게 오네요.', '와, 이건 좋은데요.'],
  mid: ['이건 진짜 큰 거예요.', '미안해요, 이건 못 양보해요.', '오늘 이거 하나로 끝날지도.'],
  high: ['이건 자랑해도 되죠?', '놀란 표정 좀 보여줘요.', '이건 제가 가져갈게요. 나중에 갚을게요.'],
};
const LOST_LINES: Record<Tone, string[]> = {
  low: ['아, 그건 제가 보고 있었는데.', '그거 가져가시네요.', '음...'],
  mid: ['그건 좀 아픈데요.', '아까워라. 그거 노리고 있었어요.', '다음 판에 돌려받을 거예요.'],
  high: ['그거 알고 가져간 거죠?', '치사해요. 그거 제 거였는데.', '그렇게 가져가면 삐질 거예요.'],
};
const BIG_LOST_LINES: Record<Tone, string[]> = {
  low: ['어... 그건 큰 건데.', '그걸 가져가시는구나.', '아.'],
  mid: ['그건 진짜 아파요.', '거기서 그게 나오다니.', '한 판 뒤집혔네요.'],
  high: ['그건 좀 너무해요.', '그거 가져갈 줄 알았으면 안 뒀죠.', '오늘은 제가 지겠네요.'],
};

/** 먹은 패 장수. 직전 판과 견줘서 무슨 일이 있었는지 알아낸다 */
function capturedCount(p: { captured: { gwang: Card[]; yeol: Card[]; tti: Card[]; pi: Card[] } }): {
  total: number;
  big: number;
} {
  const c = p.captured;
  return {
    total: c.gwang.length + c.yeol.length + c.tti.length + c.pi.length,
    // 광과 열끗은 한 장이 판을 가른다 — 크게 반응해야 하는 것들
    big: c.gwang.length + c.yeol.length,
  };
}

/** 이벤트에 어울리는 표정 */
function expressionFor(events: GameEvent[], who: PlayerId): Expression {
  for (const e of events) {
    if (e.type === 'ppeok' || e.type === 'jappeok') return e.player === who ? 'sulk' : 'smile';
    if (e.type === 'sseul' || e.type === 'ttadak' || e.type === 'jjok') {
      return e.player === who ? 'smile' : 'surprise';
    }
    if (e.type === 'bomb' || e.type === 'heundeulgi') return e.player === who ? 'serious' : 'surprise';
  }
  return 'normal';
}

function pick<T>(arr: T[], rnd: () => number): T {
  return arr[Math.floor(rnd() * arr.length)] ?? arr[0];
}

export function useMatch(opts: MatchOptions) {
  const { tenant, stage, affection, losingStreak } = opts;
  const tone: Tone = toneOf(affection);
  const params = useMemo(() => paramsFor(tenant, stage), [tenant, stage]);
  const seed = useMemo(() => opts.seed ?? randomSeed(), [opts.seed]);
  const rngRef = useRef(createRng(seed ^ 0x9e3779b9));
  const rnd = useCallback(() => rngRef.current.next(), []);

  const [state, setState] = useState<GameState>(() =>
    createGame({ rules: opts.rules, seed, firstPlayer: HUMAN }),
  );
  const [line, setLine] = useState(() => pick(tenant.lines.matchStart[tone], Math.random));
  const [expression, setExpression] = useState<Expression>('normal');
  const [shout, setShout] = useState<Shout | null>(null);
  const [aiGoStop, setAiGoStop] = useState<MatchView['aiGoStop']>(null);
  const [aiThrow, setAiThrow] = useState<AiThrow | null>(null);
  const throwKey = useRef(0);
  const [busy, setBusy] = useState(false);
  /*
   * 고/스톱을 물어봐도 되는 시점인가.
   *
   * 엔진은 마지막 패를 가져간 그 즉시 awaitGoStop 으로 넘어간다. 그런데
   * 화면에서는 아직 먹은 패가 더미로 날아가는 중이다. 그 위에 창을 띄우면
   * 몇 점이 됐는지 세어보기도 전에 고를 누르게 된다 — 그러라고 만든 창이 아니다.
   * 패가 다 들어간 뒤에 연다.
   */
  const [goStopReady, setGoStopReady] = useState(false);
  const shoutKey = useRef(0);
  const timers = useRef<number[]>([]);

  const profile = opts.profile ?? EMPTY_PROFILE;

  const later = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
  }, []);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    },
    [],
  );

  const fireShout = useCallback((text: string, by: PlayerId, detail?: string) => {
    shoutKey.current++;
    setShout({ key: shoutKey.current, text, by, detail });
  }, []);

  /** 이벤트에 맞춰 연출과 대사를 갱신 */
  /** 직전 판의 먹은 패 장수. 이번 판과 견줘 누가 무엇을 가져갔는지 안다 */
  const lastCount = useRef({ me: { total: 0, big: 0 }, ai: { total: 0, big: 0 } });

  const reactTo = useCallback(
    (next: GameState) => {
      const events = next.events;

      /*
       * 패를 주고받을 때마다 얼굴이 바뀌어야 판이 살아난다.
       * 특별한 수(뻑·쓸·따닥)가 있으면 그쪽이 우선이고, 평범하게 주고받은
       * 턴에는 누가 무엇을 가져갔는지로 표정과 잔말을 고른다.
       * 광·열끗은 한 장이 판을 가르므로 크게 반응한다.
       */
      const now = { me: capturedCount(next.players[HUMAN]), ai: capturedCount(next.players[AI]) };
      const prev = lastCount.current;
      const aiGot = now.ai.total - prev.ai.total;
      const meGot = now.me.total - prev.me.total;
      const aiGotBig = now.ai.big > prev.ai.big;
      const meGotBig = now.me.big > prev.me.big;
      lastCount.current = now;

      const special = expressionFor(events, AI);
      if (special !== 'normal') {
        setExpression(special);
      } else if (aiGot > 0) {
        // 내가(하숙생이) 먹었다 — 기쁨, 크게 먹었으면 놀리는 얼굴
        setExpression(aiGotBig ? 'win' : 'smile');
        setLine(pick(aiGotBig ? BIG_GOT_LINES[tone] : GOT_LINES[tone], rnd));
      } else if (meGot > 0) {
        // 상대(플레이어)가 가져갔다 — 크면 놀랐다가 시무룩, 작으면 뾰로통
        setExpression(meGotBig ? 'lose' : 'sulk');
        setLine(pick(meGotBig ? BIG_LOST_LINES[tone] : LOST_LINES[tone], rnd));
      } else {
        setExpression('normal');
      }
      for (const e of events) {
        const text = EVENT_SHOUT[e.type];
        if (text) {
          const say = () => fireShout(text, e.player, e.detail ?? EVENT_NOTE[e.type]);
          if (AFTER_FLIP.has(e.type)) later(say, FLIP_LANDS_MS);
          else say();
          break;
        }
      }
      // 하숙생이 뻑을 냈거나 쓸을 당했으면 그에 맞는 대사
      const ppeok = events.find((e) => (e.type === 'ppeok' || e.type === 'jappeok') && e.player === AI);
      const sseul = events.find((e) => e.type === 'sseul' && e.player === HUMAN);
      if (ppeok) setLine(pick(tenant.lines.ppeok[tone], rnd));
      else if (sseul) setLine(pick(tenant.lines.sseulVictim[tone], rnd));
    },
    [fireShout, later, rnd, tenant, tone],
  );

  // 판이 새로 시작하면 기준도 새로 잡는다
  useEffect(() => {
    lastCount.current = { me: { total: 0, big: 0 }, ai: { total: 0, big: 0 } };
  }, [seed]);

  /** 화면 연출이 끝날 때까지 기다렸다가 움직인다 */
  const pacedDelay = useCallback(
    (base: number) => {
      const until = opts.busyUntil?.current ?? 0;
      return Math.max(base, until - performance.now() + base * 0.35);
    },
    [opts.busyUntil],
  );

  /** 연출이 끝나야 고/스톱 창이 열린다 */
  useEffect(() => {
    const asking = state.phase === 'awaitGoStop' && state.turn === HUMAN;
    if (!asking) {
      setGoStopReady(false);
      return;
    }
    setGoStopReady(false);
    // later() 는 취소가 없어서, 국면이 바뀐 뒤에 늦게 켜지지 않도록 직접 건다
    const id = window.setTimeout(() => setGoStopReady(true), pacedDelay(260));
    return () => window.clearTimeout(id);
  }, [state, pacedDelay]);

  /** AI 턴 자동 진행 */
  useEffect(() => {
    if (state.phase === 'ended') return;
    const isAiTurn = state.turn === AI;
    if (!isAiTurn) {
      // 플레이어가 선택해야 하는 국면이면 멈춘다
      setBusy(false);
      return;
    }
    setBusy(true);

    if (state.phase === 'awaitPlay') {
      later(() => {
        let s = state;
        const shake = shakeableMonths(s, AI);
        if (shake.length > 0 && rnd() < params.aggression) {
          s = declareShake(s, AI, shake[0]);
          fireShout('흔들기!', AI);
        }
        s = setGukjinUse(s, AI, decideGukjin(s, params));
        const d = chooseCard(s, params, rngRef.current, profile);
        if (!d.cardId) return;
        const card = s.players[AI].hand.find((c) => c.id === d.cardId);
        if (!card) return;
        /*
         * 하숙생 패도 내가 눈으로 따라갈 수 있어야 한다. 낼 패를 먼저 알려
         * 화면이 띄웠다 꽂는 연출을 돌리고, 그게 끝나는 시점에 실제로 반영한다.
         */
        throwKey.current += 1;
        setAiThrow({ key: throwKey.current, card, bomb: d.bomb });
        later(() => {
          const next = playCard(s, d.cardId!, d.bomb);
          reactTo(next);
          setAiThrow(null);
          setState(next);
        }, AI_THROW_MS);
      }, pacedDelay(AI_THINK_MS));
      return;
    }

    if (state.phase === 'awaitChoice') {
      later(() => {
        const next = chooseMatch(state, chooseCapture(state, params, rngRef.current));
        reactTo(next);
        setState(next);
      }, pacedDelay(AI_THINK_MS));
      return;
    }

    if (state.phase === 'awaitGoStop') {
      later(() => {
        const d = decideGoStop(state, params, rngRef.current, profile);
        const lines = d.action === 'go' ? tenant.lines.go[tone] : tenant.lines.stop[tone];
        const spoken = pick(lines, rnd);
        setAiGoStop({ action: d.action, line: spoken });
        setExpression(d.action === 'go' ? 'serious' : 'win');
        later(() => {
          setAiGoStop(null);
          const next = d.action === 'go' ? declareGo(state) : declareStop(state);
          fireShout(d.action === 'go' ? '고!' : '스톱!', AI);
          setState(next);
        }, 1600);
      }, pacedDelay(500));
    }
  }, [state, params, profile, tenant, tone, later, reactTo, fireShout, rnd, pacedDelay]);

  /** 판이 끝나면 승패 대사 */
  useEffect(() => {
    if (state.phase !== 'ended' || !state.settlement) return;
    const w = state.settlement.winner;
    if (w === AI) {
      setLine(pick(tenant.lines.win[tone], rnd));
      setExpression('win');
    } else if (w === HUMAN) {
      setLine(pick(tenant.lines.lose[tone], rnd));
      setExpression('lose');
    } else {
      setLine('나가리네. 다시 하자.');
      setExpression('normal');
    }
  }, [state.phase, state.settlement, tenant, tone, rnd]);

  // ── 플레이어 조작 ────────────────────────
  const play = useCallback(
    (cardId: string, bomb = false) => {
      if (state.turn !== HUMAN || state.phase !== 'awaitPlay') return;
      const next = playCard(state, cardId, bomb);
      reactTo(next);
      setState(next);
    },
    [state, reactTo],
  );

  const choose = useCallback(
    (cardId: string) => {
      if (state.phase !== 'awaitChoice' || state.turn !== HUMAN) return;
      const next = chooseMatch(state, cardId);
      reactTo(next);
      setState(next);
    },
    [state, reactTo],
  );

  const goStop = useCallback(
    (action: 'go' | 'stop') => {
      if (state.phase !== 'awaitGoStop' || state.turn !== HUMAN) return;
      fireShout(action === 'go' ? '고!' : '스톱!', HUMAN);
      setState(action === 'go' ? declareGo(state) : declareStop(state));
    },
    [state, fireShout],
  );

  const shake = useCallback(
    (month: number) => {
      setState(declareShake(state, HUMAN, month));
      fireShout('흔들기!', HUMAN);
    },
    [state, fireShout],
  );

  const setGukjin = useCallback(
    (use: 'yeol' | 'ssangpi') => setState(setGukjinUse(state, HUMAN, use)),
    [state],
  );

  const view: MatchView = {
    state,
    line,
    expression,
    shout,
    askGoStop: state.phase === 'awaitGoStop' && state.turn === HUMAN && goStopReady,
    aiGoStop,
    hint: losingStreak >= 3 ? pick(tenant.lines.hints, () => 0.5) : null,
    aiThrow,
    myScore: currentScore(state, HUMAN),
    oppScore: scorePlayer(state.players[AI], state.rules).base,
    busy,
  };

  /**
   * 내 차례를 대신 둔다.
   *
   * 자동치기와 시간 초과가 같은 손을 쓴다 — 시간이 다 됐을 때 아무 패나
   * 던지면 판이 망가지므로, 하숙생을 움직이는 그 판단을 그대로 빌려 쓴다.
   * 다만 고/스톱만은 늘 스톱이다. 남이 대신 지르는 고는 억울하다.
   */
  const autoMove = useCallback(() => {
    if (state.turn !== HUMAN && state.phase !== 'awaitGoStop') return;
    if (state.phase === 'awaitPlay') {
      const d = chooseCard(state, params, rngRef.current, EMPTY_PROFILE);
      if (d.cardId) play(d.cardId, d.bomb);
      return;
    }
    if (state.phase === 'awaitChoice') {
      choose(chooseCapture(state, params, rngRef.current));
      return;
    }
    if (state.phase === 'awaitGoStop') goStop('stop');
  }, [state, params, play, choose, goStop]);

  return {
    view,
    play,
    choose,
    goStop,
    shake,
    setGukjin,
    autoMove,
    shakeable: shakeableMonths(state, HUMAN),
    bombable: bombableMonths(state, HUMAN),
  };
}
