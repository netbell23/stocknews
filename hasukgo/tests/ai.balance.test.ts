import { describe, expect, it } from 'vitest';
import { curveParams } from '../src/ai/params';
import { playSeries, type Seat } from '../src/ai/runner';

const GAMES = 400;

const seat = (order: number, stage: number): Seat => ({ params: curveParams(order, stage) });

describe('난이도 곡선 파라미터', () => {
  it('1번 1단계는 실수율 70%, 10번 10단계는 0%', () => {
    expect(curveParams(1, 1).mistakeRate).toBeCloseTo(0.7, 5);
    expect(curveParams(10, 10).mistakeRate).toBeCloseTo(0, 5);
  });

  it('욕심은 실력과 반대로 간다 — 초보가 지르고 고수가 접는다', () => {
    expect(curveParams(1, 1).greed).toBeGreaterThan(curveParams(5, 5).greed);
    expect(curveParams(5, 5).greed).toBeGreaterThan(curveParams(10, 10).greed);
  });

  it('두 축의 무게가 같다 — 1번 10단계와 10번 1단계는 같은 실력', () => {
    expect(curveParams(1, 10).mistakeRate).toBeCloseTo(curveParams(10, 1).mistakeRate, 5);
    expect(curveParams(1, 10).inference).toBeCloseTo(curveParams(10, 1).inference, 5);
  });

  it('순번이 올라가면 실수가 줄고 추론이 강해진다', () => {
    const a = curveParams(1, 1);
    const b = curveParams(5, 5);
    const c = curveParams(10, 10);
    expect(a.mistakeRate).toBeGreaterThan(b.mistakeRate);
    expect(b.mistakeRate).toBeGreaterThan(c.mistakeRate);
    expect(a.inference).toBeLessThan(b.inference);
    expect(b.inference).toBeLessThan(c.inference);
  });

  it('같은 하숙생이라도 단계가 오르면 강해진다', () => {
    expect(curveParams(3, 1).mistakeRate).toBeGreaterThan(curveParams(3, 10).mistakeRate);
  });

  it('패턴 학습은 최상위 구간에서만 켜진다', () => {
    expect(curveParams(1, 1).patternLearning).toBe(0);
    expect(curveParams(5, 5).patternLearning).toBe(0);
    expect(curveParams(10, 10).patternLearning).toBeGreaterThan(0);
  });
});

describe('난이도 차이가 실제 승률로 나타난다', () => {
  it('10번 10단계는 1번 1단계를 크게 이긴다', () => {
    const r = playSeries([seat(1, 1), seat(10, 10)], GAMES, 1000);
    const strongWinRate = 1 - r.winRate0;
    expect(strongWinRate).toBeGreaterThan(0.7);
  });

  it('5번 5단계는 1번 1단계보다 강하고 10번 10단계보다 약하다', () => {
    const vsWeak = playSeries([seat(5, 5), seat(1, 1)], GAMES, 2000);
    const vsStrong = playSeries([seat(5, 5), seat(10, 10)], GAMES, 3000);
    expect(vsWeak.winRate0).toBeGreaterThan(0.5);
    expect(vsStrong.winRate0).toBeLessThan(0.5);
    expect(vsWeak.winRate0).toBeGreaterThan(vsStrong.winRate0);
  });

  it('같은 난이도끼리는 대등하다 (45~55%)', () => {
    const r = playSeries([seat(5, 5), seat(5, 5)], GAMES, 4000);
    expect(r.winRate0).toBeGreaterThan(0.42);
    expect(r.winRate0).toBeLessThan(0.58);
  });
});

describe('대국이 정상 종료된다', () => {
  it('모든 판이 승패 또는 나가리로 끝난다 (무한루프 없음)', () => {
    const r = playSeries([seat(1, 1), seat(10, 10)], 200, 9000);
    expect(r.wins[0] + r.wins[1] + r.draws).toBe(200);
    expect(r.avgTurns).toBeGreaterThan(3);
    expect(r.avgTurns).toBeLessThan(40);
  });
});
