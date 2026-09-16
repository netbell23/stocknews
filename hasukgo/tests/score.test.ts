import { describe, expect, it } from 'vitest';
import { baseDeck } from '../src/engine/cards';
import { gwangScore, piScore, scorePlayer, settle, ttiScore, yeolScore } from '../src/engine/score';
import { DEFAULT_RULES, type Card, type PlayerState, type RuleOptions } from '../src/engine/types';

const deck = baseDeck();
const byName = (name: string): Card => {
  const c = deck.find((x) => x.name === name);
  if (!c) throw new Error(`no card: ${name}`);
  return c;
};
const allOf = (pred: (c: Card) => boolean): Card[] => deck.filter(pred);

function player(cards: Card[], overrides: Partial<PlayerState> = {}): PlayerState {
  const p: PlayerState = {
    hand: [],
    captured: { gwang: [], yeol: [], tti: [], pi: [] },
    goCount: 0,
    shaken: [],
    bombCount: 0,
    gukjinUse: 'yeol',
    scoreAtLastGo: 0,
    ...overrides,
  };
  for (const c of cards) {
    if (c.isGukjin) p.captured.yeol.push(c);
    else if (c.kind === 'gwang') p.captured.gwang.push(c);
    else if (c.kind === 'yeol') p.captured.yeol.push(c);
    else if (c.kind === 'tti') p.captured.tti.push(c);
    else p.captured.pi.push(c);
  }
  return p;
}

describe('광 점수', () => {
  const gwangs = allOf((c) => c.kind === 'gwang');
  const nonBi = gwangs.filter((c) => !c.isBiGwang);
  const bi = gwangs.find((c) => c.isBiGwang)!;

  it('2광 이하는 0점', () => {
    expect(gwangScore(nonBi.slice(0, 2), DEFAULT_RULES).score).toBe(0);
  });
  it('3광 3점', () => {
    expect(gwangScore(nonBi.slice(0, 3), DEFAULT_RULES).score).toBe(3);
  });
  it('비광 낀 3광은 2점', () => {
    const r = gwangScore([nonBi[0], nonBi[1], bi], DEFAULT_RULES);
    expect(r.score).toBe(2);
    expect(r.label).toBe('비삼광');
  });
  it('비광 페널티를 끄면 3점', () => {
    expect(gwangScore([nonBi[0], nonBi[1], bi], { ...DEFAULT_RULES, biGwangPenalty: false }).score).toBe(3);
  });
  it('4광 4점 / 5광 15점', () => {
    expect(gwangScore([...nonBi, bi].slice(0, 4), DEFAULT_RULES).score).toBe(4);
    expect(gwangScore(gwangs, DEFAULT_RULES).score).toBe(15);
  });
});

describe('띠 점수', () => {
  const hong = allOf((c) => c.tti === 'hong');
  const cheong = allOf((c) => c.tti === 'cheong');
  const cho = allOf((c) => c.tti === 'cho');
  const biTti = allOf((c) => c.tti === 'bi');

  it('표준: 홍단 3장이면 3점 (5장 미만이라 장수 점수 없음)', () => {
    expect(ttiScore(hong, DEFAULT_RULES).score).toBe(3);
  });
  it('표준: 띠 5장은 1점', () => {
    expect(ttiScore([...hong, ...cho.slice(0, 2)], DEFAULT_RULES).score).toBe(3 + 1);
  });
  it('표준: 띠 7장이면 3점', () => {
    const seven = [...hong, ...cho, ...biTti];
    expect(ttiScore(seven, DEFAULT_RULES).score).toBe(3 + 3 + 3); // 홍단 + 초단 + 7장(3점)
  });
  it('홍청초 전부 모으면 각 3점씩 가산', () => {
    const r = ttiScore([...hong, ...cheong, ...cho], DEFAULT_RULES);
    expect(r.labels).toContain('홍단');
    expect(r.labels).toContain('청단');
    expect(r.labels).toContain('초단');
    expect(r.score).toBe(3 + 3 + 3 + (9 - 4));
  });
  it('specSheet 옵션: 띠 5장이 5점', () => {
    const opts: RuleOptions = { ...DEFAULT_RULES, ttiScoring: 'specSheet' };
    const five = [...hong, ...cho.slice(0, 2)];
    expect(ttiScore(five, opts).score).toBe(3 + 5);
    expect(ttiScore([...hong, ...cho], opts).score).toBe(3 + 3 + 6);
  });
});

describe('열끗 점수', () => {
  const yeols = allOf((c) => c.kind === 'yeol');
  const godori = allOf((c) => !!c.isGodori);

  it('4장 이하는 0점', () => {
    expect(yeolScore(yeols.filter((c) => !c.isGodori).slice(0, 4)).score).toBe(0);
  });
  it('5장 1점, 7장 3점', () => {
    const nonGodori = yeols.filter((c) => !c.isGodori);
    expect(yeolScore(nonGodori.slice(0, 5)).score).toBe(1);
    expect(yeolScore([...nonGodori.slice(0, 5), ...godori.slice(0, 2)]).score).toBe(3);
  });
  it('고도리 3장이면 5점 (장수와 무관하게 가산)', () => {
    expect(yeolScore(godori).score).toBe(5);
  });
});

describe('피 점수', () => {
  it('9점 이하는 0점, 10점부터 1점씩', () => {
    const pis = allOf((c) => c.kind === 'pi' && c.piValue === 1);
    expect(piScore(pis.slice(0, 9), false).score).toBe(0);
    expect(piScore(pis.slice(0, 10), false).score).toBe(1);
    expect(piScore(pis.slice(0, 12), false).score).toBe(3);
  });
  it('쌍피는 2로 계산된다', () => {
    const pis = allOf((c) => c.kind === 'pi' && c.piValue === 1).slice(0, 8);
    const ssang = allOf((c) => c.kind === 'pi' && c.piValue === 2);
    expect(piScore([...pis, ...ssang], false).count).toBe(12);
    expect(piScore([...pis, ...ssang], false).score).toBe(3);
  });
  it('국진을 쌍피로 쓰면 피 2점이 더해진다', () => {
    const pis = allOf((c) => c.kind === 'pi' && c.piValue === 1).slice(0, 9);
    const gukjin = byName('국화 국진');
    expect(piScore([...pis, gukjin], true).count).toBe(11);
    expect(piScore([...pis, gukjin], false).count).toBe(9);
  });
});

describe('국진 선택', () => {
  const pis = allOf((c) => c.kind === 'pi' && c.piValue === 1).slice(0, 9);
  const yeol4 = allOf((c) => c.kind === 'yeol' && !c.isGukjin).slice(0, 4);
  const gukjin = byName('국화 국진');

  it('열끗으로 쓰면 열끗 5장이 되어 1점', () => {
    const p = player([...pis, ...yeol4, gukjin], { gukjinUse: 'yeol' });
    const bd = scorePlayer(p, DEFAULT_RULES);
    expect(bd.yeolScore).toBe(1);
    expect(bd.piScore).toBe(0);
  });
  it('쌍피로 쓰면 피 11점이 되어 2점', () => {
    const p = player([...pis, ...yeol4, gukjin], { gukjinUse: 'ssangpi' });
    const bd = scorePlayer(p, DEFAULT_RULES);
    expect(bd.yeolScore).toBe(0);
    expect(bd.piScore).toBe(2);
  });
});

describe('정산: 고/박/배수', () => {
  const gwangs = allOf((c) => c.kind === 'gwang' && !c.isBiGwang);
  const pis = allOf((c) => c.kind === 'pi' && c.piValue === 1);

  /** 3광(3점) + 피 12점(3점) = 6점짜리 손 */
  const winnerCards = [...gwangs.slice(0, 3), ...pis.slice(0, 12)];

  // 박(2배)이 섞이면 고 가산만 따로 보기 어려우므로, 고 검증은 박을 끈 규칙으로 격리한다
  const noBak: RuleOptions = {
    ...DEFAULT_RULES,
    piBak: false,
    gwangBak: false,
    mengBak: false,
    goBak: false,
  };

  it('고 1회 +1, 2회 +2', () => {
    const w0 = settle([player(winnerCards), player(pis.slice(12, 18))], 0, noBak);
    const w1 = settle([player(winnerCards, { goCount: 1 }), player(pis.slice(12, 18))], 0, noBak);
    const w2 = settle([player(winnerCards, { goCount: 2 }), player(pis.slice(12, 18))], 0, noBak);
    expect(w0.total).toBe(w0.base);
    expect(w1.total).toBe(w0.base + 1);
    expect(w2.total).toBe(w0.base + 2);
  });

  it('고 3회부터 곱셈 배수 (3고 x2, 4고 x4)', () => {
    const w3 = settle([player(winnerCards, { goCount: 3 }), player(pis.slice(12, 18))], 0, noBak);
    const w4 = settle([player(winnerCards, { goCount: 4 }), player(pis.slice(12, 18))], 0, noBak);
    expect(w3.multiplier).toBe(2);
    expect(w3.total).toBe((w3.base + 2) * 2);
    expect(w4.multiplier).toBe(4);
  });

  it('고 배수는 박 배수와 곱해진다 (3고 + 광박 = x4)', () => {
    const r = settle([player(winnerCards, { goCount: 3 }), player(pis.slice(12, 18))], 0, DEFAULT_RULES);
    expect(r.reasons).toContain('광박');
    expect(r.multiplier).toBe(4);
  });

  it('피박: 상대 피가 5점 이하면 2배', () => {
    const r = settle([player(winnerCards), player(pis.slice(12, 16))], 0, DEFAULT_RULES);
    expect(r.reasons).toContain('피박');
  });

  it('상대 피가 6점이면 피박이 아니다', () => {
    const r = settle([player(winnerCards), player(pis.slice(12, 18))], 0, DEFAULT_RULES);
    expect(r.reasons).not.toContain('피박');
  });

  it('광박: 상대 광 0장 + 내가 광으로 득점하면 2배', () => {
    const r = settle([player(winnerCards), player(pis.slice(12, 18))], 0, DEFAULT_RULES);
    expect(r.reasons).toContain('광박');
  });

  it('흔들기 1회는 2배, 2회는 4배', () => {
    const one = settle([player(winnerCards, { shaken: [5] }), player(pis.slice(12, 18))], 0, DEFAULT_RULES);
    const two = settle([player(winnerCards, { shaken: [5, 6] }), player(pis.slice(12, 18))], 0, DEFAULT_RULES);
    expect(two.multiplier).toBe(one.multiplier * 2);
  });

  it('옵션을 끄면 박이 적용되지 않는다', () => {
    const r = settle([player(winnerCards), player(pis.slice(12, 16))], 0, noBak);
    expect(r.multiplier).toBe(1);
    expect(r.total).toBe(r.base);
  });
});
