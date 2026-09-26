import { describe, expect, it } from 'vitest';
import { baseDeck } from '../src/engine/cards';
import { createRng } from '../src/engine/rng';
import {
  chooseMatch,
  createGame,
  declareGo,
  declareStop,
  playCard,
} from '../src/engine/game';
import {
  DEFAULT_RULES,
  type Card,
  type GameState,
  type PlayerId,
  type RuleOptions,
} from '../src/engine/types';

const deck = baseDeck();
const card = (name: string): Card => {
  const c = deck.find((x) => x.name === name);
  if (!c) throw new Error(`no card: ${name}`);
  return c;
};
/** 같은 이름이 2장인 피를 구분해서 가져온다 */
const piOf = (month: number, i = 0): Card => deck.filter((c) => c.month === month && c.kind === 'pi')[i];

function makeState(opts: {
  hand0?: Card[];
  hand1?: Card[];
  field?: Card[];
  deck?: Card[];
  turn?: PlayerId;
  captured0?: Card[];
  captured1?: Card[];
  rules?: Partial<RuleOptions>;
}): GameState {
  const mk = (cards: Card[] = []) => {
    const cap = { gwang: [] as Card[], yeol: [] as Card[], tti: [] as Card[], pi: [] as Card[] };
    for (const c of cards) {
      if (c.kind === 'gwang') cap.gwang.push(c);
      else if (c.kind === 'yeol') cap.yeol.push(c);
      else if (c.kind === 'tti') cap.tti.push(c);
      else cap.pi.push(c);
    }
    return cap;
  };
  return {
    rules: { ...DEFAULT_RULES, ...(opts.rules ?? {}) },
    deck: opts.deck ?? [],
    field: opts.field ?? [],
    players: [
      {
        hand: opts.hand0 ?? [],
        captured: mk(opts.captured0),
        goCount: 0,
        shaken: [],
        bombCount: 0,
        gukjinUse: 'yeol',
        scoreAtLastGo: 0,
      },
      {
        hand: opts.hand1 ?? [],
        captured: mk(opts.captured1),
        goCount: 0,
        shaken: [],
        bombCount: 0,
        gukjinUse: 'yeol',
        scoreAtLastGo: 0,
      },
    ],
    turn: opts.turn ?? 0,
    phase: 'awaitPlay',
    events: [],
    ppeokPiles: {},
    pendingChoice: null,
    turnCtx: null,
    settlement: null,
    roundMultiplier: 1,
    turnCount: 0,
    log: [],
  };
}

const allCaptured = (s: GameState, p: PlayerId): Card[] => [
  ...s.players[p].captured.gwang,
  ...s.players[p].captured.yeol,
  ...s.players[p].captured.tti,
  ...s.players[p].captured.pi,
];

describe('배분', () => {
  it('각 10장, 바닥 8장, 나머지는 덱', () => {
    const s = createGame({ seed: 1 });
    expect(s.players[0].hand).toHaveLength(10);
    expect(s.players[1].hand).toHaveLength(10);
    expect(s.field).toHaveLength(8);
    expect(s.deck).toHaveLength(50 - 28);
  });

  it('보너스패는 초기 바닥에 깔리지 않는다', () => {
    for (let seed = 0; seed < 50; seed++) {
      const s = createGame({ seed });
      expect(s.field.some((c) => c.isBonus)).toBe(false);
    }
  });

  it('같은 시드는 같은 배분을 만든다', () => {
    const a = createGame({ seed: 777 });
    const b = createGame({ seed: 777 });
    expect(a.players[0].hand.map((c) => c.id)).toEqual(b.players[0].hand.map((c) => c.id));
  });
});

describe('기본 먹기', () => {
  it('바닥에 같은 월이 1장이면 2장을 먹는다', () => {
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('송학 광')],
      deck: [piOf(5, 0), piOf(6, 0)],
    });
    const n = playCard(s, piOf(1, 0).id);
    const got = allCaptured(n, 0);
    expect(got.map((c) => c.id).sort()).toEqual([piOf(1, 0).id, card('송학 광').id].sort());
    // 뒤집은 5월 피는 짝이 없어 바닥에 깔린다
    expect(n.field.map((c) => c.id)).toContain(piOf(5, 0).id);
    expect(n.turn).toBe(1);
  });

  it('바닥에 짝이 없으면 낸 패가 바닥에 깔린다', () => {
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('모란 나비')],
      deck: [piOf(5, 0), piOf(6, 0)],
    });
    const n = playCard(s, piOf(1, 0).id);
    expect(allCaptured(n, 0)).toHaveLength(0);
    expect(n.field.map((c) => c.id)).toContain(piOf(1, 0).id);
    expect(n.field).toHaveLength(3);
  });
});

describe('쪽', () => {
  it('낸 패가 깔린 뒤 같은 월을 뒤집으면 쪽 + 피 상납', () => {
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('모란 나비')],
      deck: [card('송학 광'), piOf(6, 0)],
      captured1: [piOf(3, 0), piOf(3, 1)],
    });
    const n = playCard(s, piOf(1, 0).id);
    expect(n.events.some((e) => e.type === 'jjok')).toBe(true);
    expect(n.events.some((e) => e.type === 'steal')).toBe(true);
    expect(allCaptured(n, 0).map((c) => c.id)).toContain(card('송학 광').id);
    expect(allCaptured(n, 0).map((c) => c.id)).toContain(piOf(1, 0).id);
    expect(n.players[1].captured.pi).toHaveLength(1); // 1장 상납
  });
});

describe('뻑', () => {
  it('먹으려던 월을 뒤집으면 3장이 바닥에 묶인다', () => {
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('송학 광')],
      deck: [card('송학 홍단'), piOf(6, 0)],
    });
    const n = playCard(s, piOf(1, 0).id);
    expect(n.events.some((e) => e.type === 'ppeok')).toBe(true);
    expect(allCaptured(n, 0)).toHaveLength(0);
    expect(n.field.filter((c) => c.month === 1)).toHaveLength(3);
    expect(n.ppeokPiles[1]).toBe(0);
  });

  it('바닥에 같은 월이 더 남아 있으면 뻑이 아니다', () => {
    // 바닥에 1월 2장 -> 손패 1월을 내면 선택, 하나 먹고 1장 남음. 뒤집은 1월은 남은 1장과 매칭.
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('송학 광'), card('송학 홍단')],
      deck: [piOf(1, 1), piOf(6, 0)],
    });
    const mid = playCard(s, piOf(1, 0).id);
    expect(mid.phase).toBe('awaitChoice');
    const n = chooseMatch(mid, card('송학 광').id);
    expect(n.events.some((e) => e.type === 'ppeok')).toBe(false);
    // 4장 전부 획득 -> 따닥
    expect(allCaptured(n, 0)).toHaveLength(4);
    expect(n.events.some((e) => e.type === 'ttadak')).toBe(true);
  });

  it('묶인 3장은 나중에 같은 월을 내면 4장 전부 회수한다', () => {
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('송학 광')],
      deck: [card('송학 홍단'), piOf(6, 0), piOf(9, 0), piOf(10, 0)],
    });
    const afterPpeok = playCard(s, piOf(1, 0).id);
    expect(afterPpeok.turn).toBe(1);

    // P1 이 1월 마지막 장을 가지고 있다고 가정하고 상태를 이어붙인다
    const s2: GameState = {
      ...afterPpeok,
      players: [
        afterPpeok.players[0],
        { ...afterPpeok.players[1], hand: [piOf(1, 1)] },
      ],
      phase: 'awaitPlay',
      turnCtx: null,
      events: [],
    };
    const n = playCard(s2, piOf(1, 1).id);
    expect(allCaptured(n, 1).filter((c) => c.month === 1)).toHaveLength(4);
    expect(n.ppeokPiles[1]).toBeUndefined();
    expect(n.log.some((l) => l.includes('뻑 회수'))).toBe(true);
  });
});

describe('따닥', () => {
  it('같은 월 4장을 한 턴에 쓸면 따닥, 바닥까지 비면 쓸도 함께 성립한다', () => {
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      // 바닥에 1월 두 장 → 손에서 1월을 내면 어느 것을 먹을지 고른다
      field: [card('송학 광'), card('송학 홍단')],
      deck: [piOf(1, 1), piOf(9, 0)],
      captured1: [piOf(3, 0), piOf(3, 1)],
    });
    const mid = playCard(s, piOf(1, 0).id);
    expect(mid.phase).toBe('awaitChoice');
    // 한 장을 먹고, 뒤집은 1월이 남은 한 장을 먹어 4장을 쓸어간다
    const n = chooseMatch(mid, card('송학 광').id);
    const ev = n.events.find((e) => e.type === 'ttadak');
    expect(ev).toBeTruthy();
    // 화면에 "무엇이 일어났는지" 를 띄워야 하므로 설명이 실려 있어야 한다
    expect(ev!.detail, '따닥 설명').toBe('1월 4장을 한 턴에');
    expect(n.events.some((e) => e.type === 'sseul')).toBe(true);
    expect(allCaptured(n, 0)).toHaveLength(4 + 2);
    expect(n.players[1].captured.pi).toHaveLength(0);
  });
});

describe('쓸', () => {
  it('바닥을 싹 비우면 쓸 + 피 상납', () => {
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('송학 광')],
      deck: [card('모란 나비'), piOf(9, 0)],
      captured1: [piOf(3, 0), piOf(3, 1)],
    });
    // 1월 2장 먹고, 뒤집은 6월은 짝이 없어 바닥에 깔린다 -> 바닥 1장이므로 쓸 아님
    const notSseul = playCard(s, piOf(1, 0).id);
    expect(notSseul.events.some((e) => e.type === 'sseul')).toBe(false);

    // 덱이 비어 뒤집을 패가 없으면 바닥이 완전히 비어 쓸
    const s2 = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('송학 광')],
      deck: [],
      captured1: [piOf(3, 0), piOf(3, 1)],
    });
    const n = playCard(s2, piOf(1, 0).id);
    expect(n.events.some((e) => e.type === 'sseul')).toBe(true);
  });
});

describe('폭탄 / 총통 / 흔들기', () => {
  it('총통(같은 월 4장)이면 판이 즉시 끝난다', () => {
    let found = false;
    for (let seed = 0; seed < 4000 && !found; seed++) {
      const s = createGame({ seed });
      if (s.phase === 'ended' && s.settlement?.reasons[0]?.startsWith('총통')) {
        found = true;
        expect(s.settlement.total).toBeGreaterThan(0);
      }
    }
    expect(found).toBe(true);
  });

  it('폭탄은 같은 월 3장을 한 번에 내고 피를 상납받는다', () => {
    const s = makeState({
      hand0: [piOf(1, 0), piOf(1, 1), card('송학 홍단')],
      hand1: [piOf(7, 0)],
      field: [card('송학 광'), card('모란 나비')],
      deck: [piOf(9, 0), piOf(10, 0)],
      captured1: [piOf(3, 0), piOf(3, 1)],
    });
    const n = playCard(s, piOf(1, 0).id, true);
    expect(n.events.some((e) => e.type === 'bomb')).toBe(true);
    expect(n.players[0].bombCount).toBe(1);
    expect(n.players[0].hand.filter((c) => c.month === 1)).toHaveLength(0);
    expect(allCaptured(n, 0).filter((c) => c.month === 1)).toHaveLength(4);
  });
});

describe('고 / 스톱', () => {
  it('7점이 되면 고스톱 선택 국면으로 간다', () => {
    const gwangs = deck.filter((c) => c.kind === 'gwang' && !c.isBiGwang).slice(0, 3);
    const pis = deck.filter((c) => c.kind === 'pi' && c.piValue === 1 && c.month !== 1).slice(0, 13);
    const s = makeState({
      // 고를 물으려면 손에 낼 패가 남아 있어야 한다
      hand0: [piOf(1, 0), piOf(12, 0)],
      hand1: [piOf(7, 0)],
      field: [card('송학 홍단')],
      deck: [card('모란 나비'), piOf(9, 0)],
      captured0: [...gwangs, ...pis],
    });
    const n = playCard(s, piOf(1, 0).id);
    expect(n.phase).toBe('awaitGoStop');

    const stopped = declareStop(n);
    expect(stopped.phase).toBe('ended');
    expect(stopped.settlement?.winner).toBe(0);
    expect(stopped.settlement!.total).toBeGreaterThanOrEqual(7);
  });

  /*
   * 고는 "한 바퀴 더 돌겠다"는 선언이다. 돌 패가 없는데 물어보면
   * 고를 누른 사람이 이겨 놓은 판을 나가리로 날린다.
   */
  it('마지막 패로 점수를 냈으면 고를 묻지 않고 스톱으로 닫는다', () => {
    const gwangs = deck.filter((c) => c.kind === 'gwang' && !c.isBiGwang).slice(0, 3);
    const pis = deck.filter((c) => c.kind === 'pi' && c.piValue === 1 && c.month !== 1).slice(0, 13);
    const s = makeState({
      hand0: [piOf(1, 0)],
      hand1: [piOf(7, 0)],
      field: [card('송학 홍단')],
      deck: [card('모란 나비'), piOf(9, 0)],
      captured0: [...gwangs, ...pis],
    });
    const n = playCard(s, piOf(1, 0).id);
    expect(n.phase).toBe('ended');
    expect(n.settlement?.winner).toBe(0);
    expect(n.settlement!.total).toBeGreaterThanOrEqual(7);
    expect(n.events.some((e) => e.type === 'nagari')).toBe(false);
  });

  it('고가 들어와도 낼 패가 없으면 나가리 대신 스톱이 된다', () => {
    const gwangs = deck.filter((c) => c.kind === 'gwang' && !c.isBiGwang).slice(0, 3);
    const pis = deck.filter((c) => c.kind === 'pi' && c.piValue === 1 && c.month !== 1).slice(0, 13);
    const s = makeState({
      hand0: [],
      hand1: [piOf(7, 0)],
      field: [card('송학 홍단')],
      deck: [card('모란 나비')],
      captured0: [...gwangs, ...pis],
    });
    const forced = declareGo({ ...s, phase: 'awaitGoStop', turn: 0 });
    expect(forced.phase).toBe('ended');
    expect(forced.settlement?.winner).toBe(0);
  });

  it('고를 선언하면 턴이 넘어가고 goCount가 오른다', () => {
    const gwangs = deck.filter((c) => c.kind === 'gwang' && !c.isBiGwang).slice(0, 3);
    const pis = deck.filter((c) => c.kind === 'pi' && c.piValue === 1 && c.month !== 1).slice(0, 13);
    const s = makeState({
      hand0: [piOf(1, 0), piOf(12, 0)],
      hand1: [piOf(7, 0), piOf(8, 0)],
      field: [card('송학 홍단')],
      deck: [card('모란 나비'), piOf(9, 0), piOf(10, 0)],
      captured0: [...gwangs, ...pis],
    });
    const n = declareGo(playCard(s, piOf(1, 0).id));
    expect(n.players[0].goCount).toBe(1);
    expect(n.turn).toBe(1);
    expect(n.phase).toBe('awaitPlay');
    expect(n.players[0].scoreAtLastGo).toBeGreaterThanOrEqual(7);
  });
});

describe('손패 수가 어긋나도 판이 멈추지 않는다', () => {
  it('상대 손이 비면 패가 남은 쪽이 계속 낸다', () => {
    const s = makeState({
      hand0: [piOf(1, 0), piOf(12, 0)],
      hand1: [], // 폭탄 등으로 이미 손이 빈 상태
      field: [card('모란 나비')],
      deck: [piOf(9, 0), piOf(10, 0), piOf(5, 0)],
    });
    const n = playCard(s, piOf(1, 0).id);
    expect(n.phase).not.toBe('ended');
    // 상대는 낼 패가 없으므로 턴이 나에게 돌아와야 한다
    expect(n.turn).toBe(0);
    expect(n.players[0].hand.length).toBeGreaterThan(0);
  });

  it('폭탄으로 손이 먼저 비어도 남은 쪽이 패를 다 소진할 수 있다', () => {
    let s = makeState({
      hand0: [piOf(1, 0), piOf(1, 1), card('송학 홍단')],
      hand1: [piOf(7, 0), piOf(8, 0), piOf(9, 0)],
      field: [card('송학 광'), card('모란 나비')],
      deck: [piOf(10, 0), piOf(12, 0), piOf(5, 0), piOf(6, 0), card('난초 초단'), card('모란 청단')],
    });
    s = playCard(s, piOf(1, 0).id, true); // 폭탄 -> 손패 3장 소진
    expect(s.players[0].hand).toHaveLength(0);

    // 남은 상대가 계속 낼 수 있어야 하고, 어느 시점에도 "낼 패 없는 사람 차례"가 되면 안 된다
    let guard = 0;
    while (s.phase !== 'ended' && guard++ < 30) {
      if (s.phase === 'awaitGoStop') {
        s = declareStop(s);
        break;
      }
      if (s.phase === 'awaitChoice') {
        s = chooseMatch(s, s.pendingChoice!.candidates[0].id);
        continue;
      }
      const hand = s.players[s.turn].hand;
      expect(hand.length, `P${s.turn} 차례인데 손패가 없다`).toBeGreaterThan(0);
      s = playCard(s, hand[0].id);
    }
    expect(s.phase).toBe('ended');
  });
});

describe('패는 사라지지도 복제되지도 않는다', () => {
  /** 판 어딘가에 있는 카드 id 를 전부 모은다 */
  function allCardIds(s: GameState): string[] {
    const ids: string[] = [];
    ids.push(...s.deck.map((c) => c.id));
    ids.push(...s.field.map((c) => c.id));
    for (const p of s.players) {
      ids.push(...p.hand.map((c) => c.id));
      ids.push(...p.captured.gwang.map((c) => c.id));
      ids.push(...p.captured.yeol.map((c) => c.id));
      ids.push(...p.captured.tti.map((c) => c.id));
      ids.push(...p.captured.pi.map((c) => c.id));
    }
    if (s.pendingChoice) ids.push(s.pendingChoice.played.id);
    // 턴 중간에는 먹은 패가 아직 더미로 안 가고 turnCtx 에 들려 있다.
    // stage 가 done 이면 이미 더미로 옮겨진 뒤라 세면 중복이 된다.
    if (s.turnCtx && s.turnCtx.stage !== 'done') {
      ids.push(...s.turnCtx.fromHandCapture.map((c) => c.id));
      ids.push(...s.turnCtx.fromFlipCapture.map((c) => c.id));
      ids.push(...s.turnCtx.bonusFlips.map((c) => c.id));
    }
    return ids;
  }

  it('무작위 200판을 끝까지 둬도 카드 총수와 소유가 어긋나지 않는다', () => {
    for (let seed = 1; seed <= 200; seed += 1) {
      const rng = createRng(seed * 7919);
      let s = createGame({ seed });
      const total = allCardIds(s).length;

      for (let step = 0; step < 400 && s.phase !== 'ended'; step += 1) {
        if (s.phase === 'awaitPlay') {
          const hand = s.players[s.turn].hand;
          if (hand.length === 0) break;
          s = playCard(s, hand[Math.floor(rng.next() * hand.length)].id);
        } else if (s.phase === 'awaitChoice') {
          const cands = s.pendingChoice!.candidates;
          s = chooseMatch(s, cands[Math.floor(rng.next() * cands.length)].id);
        } else if (s.phase === 'awaitGoStop') {
          s = rng.next() < 0.5 ? declareGo(s) : declareStop(s);
        } else {
          break;
        }

        const ids = allCardIds(s);
        const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
        expect(dup, `seed ${seed} step ${step}: 중복 ${dup.join(',')}`).toEqual([]);
        expect(ids.length, `seed ${seed} step ${step}: 카드 수`).toBe(total);
      }
    }
  });

  it('보너스패는 바닥에 깔리지 않고 낸 사람이 가져간다', () => {
    let found = 0;
    for (let seed = 1; seed <= 300 && found < 12; seed += 1) {
      const rng = createRng(seed * 104729);
      let s = createGame({ seed });
      for (let step = 0; step < 400 && s.phase !== 'ended'; step += 1) {
        if (s.phase === 'awaitPlay') {
          const me = s.turn;
          const hand = s.players[me].hand;
          if (hand.length === 0) break;
          const bonus = hand.find((c) => c.isBonus);
          const before = s.players[me].captured.pi.length;
          if (bonus) {
            const handBefore = hand.length;
            s = playCard(s, bonus.id);
            found += 1;
            expect(s.field.some((c) => c.isBonus), '보너스패가 바닥에 남았다').toBe(false);
            expect(s.players[me].captured.pi.length, '낸 사람이 가져가야 한다').toBeGreaterThan(before);
            // 덱이 남아 있으면 손패를 한 장 채워 같은 사람이 이어서 낸다
            if (s.phase === 'awaitPlay' && s.deck.length > 0) {
              expect(s.turn, '보너스를 내면 턴이 이어진다').toBe(me);
              expect(s.players[me].hand.length).toBe(handBefore);
            }
            continue;
          }
          s = playCard(s, hand[Math.floor(rng.next() * hand.length)].id);
        } else if (s.phase === 'awaitChoice') {
          const c = s.pendingChoice!.candidates;
          s = chooseMatch(s, c[0].id);
        } else if (s.phase === 'awaitGoStop') {
          s = declareStop(s);
        } else break;
      }
    }
    expect(found, '보너스패를 내는 경우가 한 번도 안 나왔다').toBeGreaterThan(0);
  });
});

describe('따닥은 같은 월 4장을 쓸었을 때만', () => {
  it('낸 패로 2월을 먹고 뒤집어서 3월을 먹으면 따닥이 아니다', () => {
    const s = makeState({
      hand0: [piOf(2, 0)],
      hand1: [piOf(7, 0)],
      field: [piOf(2, 1), piOf(3, 1)],
      deck: [piOf(3, 0), piOf(6, 0)],
    });
    const n = playCard(s, piOf(2, 0).id);
    // 네 장을 가져오긴 한다
    expect(allCaptured(n, 0)).toHaveLength(4);
    expect(n.events.some((e) => e.type === 'ttadak')).toBe(false);
    // 따닥이 아니니 상납도 없다
    expect(n.events.some((e) => e.type === 'steal' && e.detail === '따닥')).toBe(false);
  });

  it('낸 패와 뒤집은 패가 같은 월이면 따닥이다', () => {
    const s = makeState({
      hand0: [piOf(2, 0)],
      hand1: [piOf(7, 0)],
      field: [piOf(2, 1), card('매조 홍단')],
      deck: [card('매조 휘파람새'), piOf(6, 0)],
    });
    const n = playCard(s, piOf(2, 0).id);
    // 바닥에 2월이 두 장이라 먼저 고르게 한다
    expect(n.phase).toBe('awaitChoice');
    const done = chooseMatch(n, piOf(2, 1).id);
    expect(allCaptured(done, 0)).toHaveLength(4);
    expect(done.events.some((e) => e.type === 'ttadak')).toBe(true);
  });

  it('옵션을 끄면 월이 달라도 따닥으로 친다', () => {
    const s = makeState({
      rules: { ttadakSameMonth: false },
      hand0: [piOf(2, 0)],
      hand1: [piOf(7, 0)],
      field: [piOf(2, 1), piOf(3, 1)],
      deck: [piOf(3, 0), piOf(6, 0)],
    });
    const n = playCard(s, piOf(2, 0).id);
    expect(n.events.some((e) => e.type === 'ttadak')).toBe(true);
  });
});
