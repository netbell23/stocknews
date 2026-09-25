/**
 * 맞고 게임 상태 머신.
 * 모든 함수는 상태를 in-place 로 바꾸지 않고 새 객체를 반환한다.
 * UI/AI 는 반드시 이 API 를 통해서만 게임을 진행한다.
 */
import { fullDeck } from './cards';
import { createRng } from './rng';
import {
  findChongtong,
  findTriples,
  scorePlayer,
  settle,
  settleChongtong,
  settleNagari,
} from './score';
import {
  DEFAULT_RULES,
  type Card,
  type GameState,
  type PlayerId,
  type PlayerState,
  type RuleOptions,
  type TurnContext,
} from './types';

const other = (p: PlayerId): PlayerId => (p === 0 ? 1 : 0);

/**
 * 턴을 넘긴다.
 * 폭탄은 손패를 한 번에 3장 소모하므로 두 사람의 손패 수가 어긋날 수 있다.
 * 손이 빈 쪽으로 턴이 가면 낼 패가 없어 판이 멈추므로, 패가 남은 쪽에게 턴을 준다.
 */
function passTurn(n: GameState, from: PlayerId): void {
  const opp = other(from);
  if (n.players[opp].hand.length > 0) n.turn = opp;
  else if (n.players[from].hand.length > 0) n.turn = from;
  else n.turn = opp;
  n.phase = 'awaitPlay';
  n.turnCtx = null;
}

function emptyPlayer(): PlayerState {
  return {
    hand: [],
    captured: { gwang: [], yeol: [], tti: [], pi: [] },
    goCount: 0,
    shaken: [],
    bombCount: 0,
    gukjinUse: 'yeol',
    scoreAtLastGo: 0,
  };
}

function clonePlayer(p: PlayerState): PlayerState {
  return {
    ...p,
    hand: [...p.hand],
    captured: {
      gwang: [...p.captured.gwang],
      yeol: [...p.captured.yeol],
      tti: [...p.captured.tti],
      pi: [...p.captured.pi],
    },
    shaken: [...p.shaken],
  };
}

export function clone(s: GameState): GameState {
  return {
    ...s,
    deck: [...s.deck],
    field: [...s.field],
    players: [clonePlayer(s.players[0]), clonePlayer(s.players[1])],
    events: [...s.events],
    ppeokPiles: { ...s.ppeokPiles },
    turnCtx: s.turnCtx ? { ...s.turnCtx } : null,
    log: [...s.log],
  };
}

function addCaptured(p: PlayerState, cards: Card[]): void {
  for (const c of cards) {
    if (c.isGukjin) {
      // 국진은 정산 시 용도에 따라 재분류되므로 일단 열끗 자리에 둔다
      p.captured.yeol.push(c);
      continue;
    }
    switch (c.kind) {
      case 'gwang':
        p.captured.gwang.push(c);
        break;
      case 'yeol':
        p.captured.yeol.push(c);
        break;
      case 'tti':
        p.captured.tti.push(c);
        break;
      case 'pi':
        p.captured.pi.push(c);
        break;
    }
  }
}

/**
 * 상대에게서 피 1장 상납받기. 가치가 낮은 피부터 가져온다.
 * 상대가 피가 없어 실제 상납이 일어나지 않아도 사유는 항상 기록한다
 * (UI 연출과 하숙생 대사 트리거가 이 로그/이벤트를 본다).
 */
function stealPi(s: GameState, taker: PlayerId, reason: string): void {
  const victim = s.players[other(taker)];
  if (victim.captured.pi.length === 0) {
    s.log.push(`P${taker} ${reason} (상대 피 없음)`);
    return;
  }
  const sorted = [...victim.captured.pi].sort((a, b) => (a.piValue ?? 1) - (b.piValue ?? 1));
  const target = sorted[0];
  victim.captured.pi = victim.captured.pi.filter((c) => c.id !== target.id);
  s.players[taker].captured.pi.push(target);
  s.events.push({ type: 'steal', player: taker, detail: reason });
  s.log.push(`P${taker} ${reason} -> 피 1장 상납`);
}

/** 새 판 시작 */
export function createGame(opts?: {
  rules?: Partial<RuleOptions>;
  seed?: number;
  firstPlayer?: PlayerId;
  roundMultiplier?: number;
}): GameState {
  const rules: RuleOptions = { ...DEFAULT_RULES, ...(opts?.rules ?? {}) };
  const rng = createRng(opts?.seed ?? 12345);
  let deck: Card[] = rng.shuffle(fullDeck(rules));

  const draw = (n: number, avoidBonus: boolean): Card[] => {
    const out: Card[] = [];
    const rejected: Card[] = [];
    while (out.length < n && deck.length > 0) {
      const c = deck.shift()!;
      if (avoidBonus && c.isBonus) {
        rejected.push(c);
        continue;
      }
      out.push(c);
    }
    if (rejected.length) deck = rng.shuffle([...deck, ...rejected]);
    return out;
  };
  const p0 = draw(10, false);
  const p1 = draw(10, false);
  const field = draw(8, true);

  const state: GameState = {
    rules,
    deck,
    field,
    players: [emptyPlayer(), emptyPlayer()],
    turn: opts?.firstPlayer ?? 0,
    phase: 'awaitPlay',
    events: [],
    ppeokPiles: {},
    pendingChoice: null,
    turnCtx: null,
    settlement: null,
    roundMultiplier: opts?.roundMultiplier ?? 1,
    turnCount: 0,
    log: [],
  };
  state.players[0].hand = p0;
  state.players[1].hand = p1;

  if (rules.chongtong) {
    for (const pid of [0, 1] as PlayerId[]) {
      const m = findChongtong(state.players[pid].hand);
      if (m !== null) {
        state.phase = 'ended';
        state.settlement = settleChongtong(pid, m, rules, state.roundMultiplier);
        state.events.push({ type: 'chongtong', player: pid, detail: `${m}월` });
        state.log.push(`P${pid} 총통 (${m}월)`);
        return state;
      }
    }
  }
  return state;
}

/** 흔들기 가능한 월 목록 */
export function shakeableMonths(s: GameState, p: PlayerId): number[] {
  if (!s.rules.heundeulgi) return [];
  return findTriples(s.players[p].hand).filter((m) => !s.players[p].shaken.includes(m));
}

/** 흔들기 선언 */
export function declareShake(s: GameState, p: PlayerId, month: number): GameState {
  if (!shakeableMonths(s, p).includes(month)) return s;
  const n = clone(s);
  n.players[p].shaken.push(month);
  n.events.push({ type: 'heundeulgi', player: p, detail: `${month}월` });
  n.log.push(`P${p} 흔들기 (${month}월)`);
  return n;
}

/** 폭탄 가능한 월 (손에 3장 + 바닥에 같은 월 1장 이상) */
export function bombableMonths(s: GameState, p: PlayerId): number[] {
  if (!s.rules.bomb) return [];
  return findTriples(s.players[p].hand).filter((m) => s.field.some((c) => c.month === m));
}

/** 바닥에서 해당 월과 매칭되는 패 */
export function fieldMatches(s: GameState, month: number): Card[] {
  if (month === 0) return [];
  return s.field.filter((c) => c.month === month);
}

/**
 * 손패에서 한 장 낸다.
 * @param bomb true 면 같은 월 3장을 폭탄으로 함께 낸다.
 */
export function playCard(s: GameState, cardId: string, bomb = false): GameState {
  if (s.phase !== 'awaitPlay') return s;
  const n = clone(s);
  const p = n.turn;
  const me = n.players[p];
  const idx = me.hand.findIndex((c) => c.id === cardId);
  if (idx < 0) return s;
  const card = me.hand[idx];
  n.events = [];

  const ctx: TurnContext = {
    player: p,
    playedCard: card,
    bombCards: [],
    playedWentToField: false,
    fromHandCapture: [],
    flipCard: null,
    fromFlipCapture: [],
    ppeok: false,
    bonusFlips: [],
    stage: 'hand',
  };
  n.turnCtx = ctx;
  n.turnCount++;

  if (bomb && n.rules.bomb && bombableMonths(n, p).includes(card.month)) {
    const same = me.hand.filter((c) => c.month === card.month);
    me.hand = me.hand.filter((c) => c.month !== card.month);
    ctx.playedCard = same[0];
    ctx.bombCards = same.slice(1);
    me.bombCount++;
    n.events.push({ type: 'bomb', player: p, detail: `${card.month}월` });
    n.log.push(`P${p} 폭탄 (${card.month}월)`);
    const matches = n.field.filter((c) => c.month === card.month);
    n.field = n.field.filter((c) => c.month !== card.month);
    ctx.fromHandCapture = [...same, ...matches];
    delete n.ppeokPiles[card.month];
    stealPi(n, p, '폭탄');
    return doFlip(n);
  }

  me.hand.splice(idx, 1);

  /*
   * 보너스패는 바닥에 깔리는 패가 아니다. 월이 없어서 아무것과도 맞지 않기 때문에
   * 그냥 두면 바닥에 쌓여 영원히 남는다.
   * 내는 즉시 내 먹은 패로 가고, 줄어든 손패를 덱에서 한 장 채운 뒤 같은 사람이 이어서 낸다.
   */
  if (card.isBonus) {
    const taken: Card[] = [card];
    let refill = n.deck.shift();
    while (refill?.isBonus) {
      taken.push(refill);
      refill = n.deck.shift();
    }
    if (refill) me.hand.push(refill);
    ctx.bonusFlips = taken;
    n.events.push({ type: 'bonus', player: p, detail: `${taken.length}장` });
    n.log.push(`P${p} 보너스패 ${taken.length}장`);
    // 낼 패가 없거나 덱이 비면 평소대로 턴을 마무리한다 (나가리·고스톱 판정 포함)
    if (me.hand.length === 0 || n.deck.length === 0) return finishTurn(n);
    addCaptured(me, taken);
    n.turnCtx = null;
    n.phase = 'awaitPlay';
    n.turn = p;
    return n;
  }

  const matches = fieldMatches(n, card.month);

  if (matches.length === 0) {
    n.field.push(card);
    ctx.playedWentToField = true;
    return doFlip(n);
  }
  if (matches.length === 1) {
    n.field = n.field.filter((c) => c.id !== matches[0].id);
    ctx.fromHandCapture = [card, matches[0]];
    return doFlip(n);
  }
  if (matches.length === 2) {
    n.phase = 'awaitChoice';
    n.pendingChoice = { played: card, candidates: matches, source: 'hand' };
    return n;
  }
  // 3장 = 뻑 더미 회수
  n.field = n.field.filter((c) => c.month !== card.month);
  ctx.fromHandCapture = [card, ...matches];
  const ppeokOwner = n.ppeokPiles[card.month];
  if (ppeokOwner !== undefined) {
    delete n.ppeokPiles[card.month];
    stealPi(n, p, ppeokOwner === p ? '자뻑 회수' : '뻑 회수');
  }
  return doFlip(n);
}

/** awaitChoice 상태에서 먹을 패를 고른다 */
export function chooseMatch(s: GameState, cardId: string): GameState {
  if (s.phase !== 'awaitChoice' || !s.pendingChoice || !s.turnCtx) return s;
  const n = clone(s);
  const pc = n.pendingChoice!;
  const chosen = pc.candidates.find((c) => c.id === cardId) ?? pc.candidates[0];
  n.field = n.field.filter((c) => c.id !== chosen.id);
  n.pendingChoice = null;
  n.phase = 'awaitPlay';
  if (pc.source === 'hand') {
    n.turnCtx!.fromHandCapture = [pc.played, chosen];
    return doFlip(n);
  }
  n.turnCtx!.fromFlipCapture = [pc.played, chosen];
  return finishTurn(n);
}

/** 덱에서 한 장 뒤집는다 */
function doFlip(n: GameState): GameState {
  const ctx = n.turnCtx!;
  ctx.stage = 'flip';
  const p = ctx.player;

  // 보너스패는 즉시 내 것이 되고 다시 뒤집는다
  let flip: Card | undefined;
  for (;;) {
    flip = n.deck.shift();
    if (!flip) break;
    if (flip.isBonus) {
      ctx.bonusFlips.push(flip);
      continue;
    }
    break;
  }
  if (!flip) {
    ctx.flipCard = null;
    return finishTurn(n);
  }
  const flipped: Card = flip;
  ctx.flipCard = flipped;

  // 뻑: 손패가 바닥 1장과 매칭돼 먹기 직전인데 뒤집은 패가 같은 월
  if (
    ctx.fromHandCapture.length === 2 &&
    ctx.fromHandCapture[0].month === flipped.month &&
    ctx.bombCards.length === 0 &&
    // 같은 월이 바닥에 더 남아 있으면 3장으로 묶이지 않으므로 뻑이 아니다
    n.field.every((c) => c.month !== flipped.month)
  ) {
    n.field.push(...ctx.fromHandCapture, flipped);
    ctx.fromHandCapture = [];
    ctx.ppeok = true;
    const prevOwner = n.ppeokPiles[flipped.month];
    n.ppeokPiles[flipped.month] = p;
    n.events.push({
      type: prevOwner === p ? 'jappeok' : 'ppeok',
      player: p,
      detail: `${flipped.month}월`,
    });
    n.log.push(`P${p} ${prevOwner === p ? '자뻑' : '뻑'} (${flipped.month}월)`);
    return finishTurn(n);
  }

  // 쪽: 낸 패가 바닥에 깔렸는데 뒤집은 패가 그 패와 같은 월
  if (ctx.playedWentToField && ctx.playedCard && ctx.playedCard.month === flipped.month) {
    const same = n.field.filter((c) => c.month === flipped.month);
    n.field = n.field.filter((c) => c.month !== flipped.month);
    ctx.fromFlipCapture = [flipped, ...same];
    ctx.playedWentToField = false;
    n.events.push({ type: 'jjok', player: p, detail: `${flipped.month}월` });
    n.log.push(`P${p} 쪽 (${flipped.month}월)`);
    stealPi(n, p, '쪽');
    return finishTurn(n);
  }

  const matches = n.field.filter((c) => c.month === flipped.month);
  if (matches.length === 0) {
    n.field.push(flipped);
    return finishTurn(n);
  }
  if (matches.length === 1) {
    n.field = n.field.filter((c) => c.id !== matches[0].id);
    ctx.fromFlipCapture = [flipped, matches[0]];
    return finishTurn(n);
  }
  if (matches.length === 2) {
    n.phase = 'awaitChoice';
    n.pendingChoice = { played: flipped, candidates: matches, source: 'deck' };
    return n;
  }
  // 3장 = 뻑 더미 회수
  n.field = n.field.filter((c) => c.month !== flipped.month);
  ctx.fromFlipCapture = [flipped, ...matches];
  const owner = n.ppeokPiles[flipped.month];
  if (owner !== undefined) {
    delete n.ppeokPiles[flipped.month];
    stealPi(n, p, owner === p ? '자뻑 회수' : '뻑 회수');
  }
  return finishTurn(n);
}

/** 턴 마무리: 획득 반영, 따닥/쓸 판정, 고스톱 판정 */
function finishTurn(n: GameState): GameState {
  const ctx = n.turnCtx!;
  const p = ctx.player;
  const me = n.players[p];

  const gained = [...ctx.fromHandCapture, ...ctx.fromFlipCapture, ...ctx.bonusFlips];
  addCaptured(me, gained);

  // 따닥: 손패로도 먹고 뒤집어서도 먹어 한 턴에 4장 이상을 가져온 경우
  const ttadak =
    ctx.bombCards.length === 0 &&
    ctx.fromHandCapture.length >= 2 &&
    ctx.fromFlipCapture.length >= 2;
  if (ttadak) {
    n.events.push({ type: 'ttadak', player: p });
    n.log.push(`P${p} 따닥`);
    stealPi(n, p, '따닥');
  }

  // 쓸: 바닥이 비었다
  if (n.field.length === 0 && gained.length > 0) {
    n.events.push({ type: 'sseul', player: p });
    n.log.push(`P${p} 쓸`);
    stealPi(n, p, '쓸');
  }

  ctx.stage = 'done';

  const bd = scorePlayer(me, n.rules);
  const canStop = bd.base >= n.rules.minScoreToStop && bd.base > me.scoreAtLastGo;
  const handsEmpty = n.players[0].hand.length === 0 && n.players[1].hand.length === 0;

  if (canStop) {
    n.phase = 'awaitGoStop';
    return n;
  }
  if (handsEmpty || n.deck.length === 0) {
    n.phase = 'ended';
    n.settlement = settleNagari();
    n.events.push({ type: 'nagari', player: p });
    n.log.push('나가리');
    return n;
  }
  passTurn(n, p);
  return n;
}

/** 고 선언 */
export function declareGo(s: GameState): GameState {
  if (s.phase !== 'awaitGoStop') return s;
  const n = clone(s);
  const p = n.turn;
  const me = n.players[p];
  me.goCount++;
  me.scoreAtLastGo = scorePlayer(me, n.rules).base;
  n.events.push({ type: 'go', player: p, detail: `${me.goCount}고` });
  n.log.push(`P${p} ${me.goCount}고`);

  const handsEmpty = n.players[0].hand.length === 0 && n.players[1].hand.length === 0;
  if (handsEmpty || n.deck.length === 0) {
    n.phase = 'ended';
    n.settlement = settleNagari();
    n.log.push('나가리 (고 후 패 소진)');
    return n;
  }
  passTurn(n, p);
  return n;
}

/** 스톱 선언 */
export function declareStop(s: GameState): GameState {
  if (s.phase !== 'awaitGoStop') return s;
  const n = clone(s);
  const p = n.turn;
  n.phase = 'ended';
  n.settlement = settle(n.players, p, n.rules, n.roundMultiplier);
  n.events.push({ type: 'stop', player: p });
  n.log.push(`P${p} 스톱 -> ${n.settlement.total}점`);
  return n;
}

/** 국진 용도 설정 */
export function setGukjinUse(s: GameState, p: PlayerId, use: 'yeol' | 'ssangpi'): GameState {
  const n = clone(s);
  n.players[p].gukjinUse = use;
  return n;
}

/** 현재 점수 */
export function currentScore(s: GameState, p: PlayerId): number {
  return scorePlayer(s.players[p], s.rules).base;
}
