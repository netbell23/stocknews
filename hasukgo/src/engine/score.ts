/**
 * 점수 계산. 순수 함수만 둔다.
 */
import type { Card, Captured, PlayerState, RuleOptions, ScoreBreakdown, Settlement, PlayerId } from './types';

/** 먹은 패를 분류별로 정리. 국진 용도 선택을 반영한다. */
export function classify(cards: Card[], gukjinAsSsangpi: boolean): Captured {
  const out: Captured = { gwang: [], yeol: [], tti: [], pi: [] };
  for (const c of cards) {
    if (c.isGukjin && gukjinAsSsangpi) {
      out.pi.push(c);
      continue;
    }
    switch (c.kind) {
      case 'gwang':
        out.gwang.push(c);
        break;
      case 'yeol':
        out.yeol.push(c);
        break;
      case 'tti':
        out.tti.push(c);
        break;
      case 'pi':
        out.pi.push(c);
        break;
    }
  }
  return out;
}

/** 피 환산 점수 합 (쌍피 2, 보너스 2~3) */
export function piTotal(pi: Card[], gukjinAsSsangpi: boolean): number {
  return pi.reduce((sum, c) => {
    if (c.isGukjin) return sum + (gukjinAsSsangpi ? 2 : 0);
    return sum + (c.piValue ?? 1);
  }, 0);
}

export function gwangScore(gwang: Card[], rules: RuleOptions): { score: number; label: string | null } {
  const n = gwang.length;
  if (n >= 5) return { score: 15, label: '오광' };
  if (n === 4) return { score: 4, label: '사광' };
  if (n === 3) {
    const hasBi = gwang.some((c) => c.isBiGwang);
    if (hasBi && rules.biGwangPenalty) return { score: 2, label: '비삼광' };
    return { score: 3, label: '삼광' };
  }
  return { score: 0, label: null };
}

export function ttiScore(tti: Card[], rules: RuleOptions): { score: number; labels: string[] } {
  const labels: string[] = [];
  let score = 0;
  const hong = tti.filter((c) => c.tti === 'hong').length;
  const cheong = tti.filter((c) => c.tti === 'cheong').length;
  const cho = tti.filter((c) => c.tti === 'cho').length;
  if (hong >= 3) {
    score += 3;
    labels.push('홍단');
  }
  if (cheong >= 3) {
    score += 3;
    labels.push('청단');
  }
  if (cho >= 3) {
    score += 3;
    labels.push('초단');
  }
  const n = tti.length;
  if (rules.ttiScoring === 'standard') {
    // 5장 1점, 이후 1장당 +1점
    if (n >= 5) {
      score += n - 4;
      labels.push(`띠 ${n}장`);
    }
  } else {
    // 기획서 표기: 5장 5점, 이후 1장당 +1점
    if (n >= 5) {
      score += 5 + (n - 5);
      labels.push(`띠 ${n}장`);
    }
  }
  return { score, labels };
}

export function yeolScore(yeol: Card[]): { score: number; labels: string[] } {
  const labels: string[] = [];
  let score = 0;
  const godori = yeol.filter((c) => c.isGodori).length;
  if (godori >= 3) {
    score += 5;
    labels.push('고도리');
  }
  const n = yeol.length;
  if (n >= 5) {
    score += n - 4;
    labels.push(`열끗 ${n}장`);
  }
  return { score, labels };
}

export function piScore(pi: Card[], gukjinAsSsangpi: boolean): { score: number; count: number } {
  const count = piTotal(pi, gukjinAsSsangpi);
  return { score: count >= 10 ? count - 9 : 0, count };
}

/** 같은 월 4장을 손에 들었는가 (총통) */
export function findChongtong(hand: Card[]): number | null {
  const byMonth = new Map<number, number>();
  for (const c of hand) {
    if (c.month === 0) continue;
    byMonth.set(c.month, (byMonth.get(c.month) ?? 0) + 1);
  }
  for (const [m, n] of byMonth) if (n >= 4) return m;
  return null;
}

/** 손에 같은 월 3장 (흔들기 / 폭탄 후보) */
export function findTriples(hand: Card[]): number[] {
  const byMonth = new Map<number, number>();
  for (const c of hand) {
    if (c.month === 0) continue;
    byMonth.set(c.month, (byMonth.get(c.month) ?? 0) + 1);
  }
  return [...byMonth.entries()].filter(([, n]) => n === 3).map(([m]) => m);
}

export function scorePlayer(p: PlayerState, rules: RuleOptions): ScoreBreakdown {
  const asSsangpi = rules.gukjinOption && p.gukjinUse === 'ssangpi';
  const cap = classify(
    [...p.captured.gwang, ...p.captured.yeol, ...p.captured.tti, ...p.captured.pi],
    asSsangpi,
  );
  const g = gwangScore(cap.gwang, rules);
  const t = ttiScore(cap.tti, rules);
  const y = yeolScore(cap.yeol);
  const pi = piScore(cap.pi, asSsangpi);
  const base = g.score + t.score + y.score + pi.score;
  return {
    gwangScore: g.score,
    gwangLabel: g.label,
    ttiScore: t.score,
    ttiLabels: t.labels,
    yeolScore: y.score,
    yeolLabels: y.labels,
    piScore: pi.score,
    piCount: pi.count,
    base,
    chongtong: null,
  };
}

/**
 * 최종 정산. 박/배수/고 가산을 모두 적용한다.
 * @param stopper 스톱을 선언해 이긴 쪽
 */
export function settle(
  players: [PlayerState, PlayerState],
  stopper: PlayerId,
  rules: RuleOptions,
  roundMultiplier = 1,
): Settlement {
  const me = players[stopper];
  const opp = players[stopper === 0 ? 1 : 0];
  const bd = scorePlayer(me, rules);
  const oppBd = scorePlayer(opp, rules);
  const reasons: string[] = [];

  // 고 가산: 1회 +1, 2회 +2, 3회부터 배수
  let goBonus = 0;
  let multiplier = 1;
  const go = me.goCount;
  if (go >= 1) goBonus += 1;
  if (go >= 2) goBonus += 1;
  if (go >= 1) reasons.push(`${go}고`);
  if (rules.goMultiplierFrom3 && go >= 3) {
    multiplier *= Math.pow(2, go - 2);
    reasons.push(`고 배수 x${Math.pow(2, go - 2)}`);
  }

  let total = bd.base + goBonus;

  // 피박: 상대 피 점수가 기준 이하 & 내가 피 점수로 득점
  const oppAsSsangpi = rules.gukjinOption && opp.gukjinUse === 'ssangpi';
  const oppPi = piTotal(classify([...opp.captured.pi], oppAsSsangpi).pi, oppAsSsangpi);
  if (rules.piBak && bd.piScore > 0 && oppPi <= rules.piBakThreshold) {
    multiplier *= 2;
    reasons.push('피박');
  }
  // 광박: 상대 광 0장 & 내가 광 점수로 득점
  if (rules.gwangBak && bd.gwangScore > 0 && opp.captured.gwang.length === 0) {
    multiplier *= 2;
    reasons.push('광박');
  }
  // 멍박: 내 열끗이 기준 이상 & 상대 열끗 0장
  if (
    rules.mengBak &&
    me.captured.yeol.length >= rules.mengBakYeolThreshold &&
    opp.captured.yeol.length === 0
  ) {
    multiplier *= 2;
    reasons.push('멍박');
  }
  // 흔들기 / 폭탄
  if (rules.heundeulgi && me.shaken.length > 0) {
    multiplier *= Math.pow(2, me.shaken.length);
    reasons.push(`흔들기 x${Math.pow(2, me.shaken.length)}`);
  }
  if (rules.bomb && me.bombCount > 0) {
    multiplier *= Math.pow(2, me.bombCount);
    reasons.push(`폭탄 x${Math.pow(2, me.bombCount)}`);
  }
  // 고박: 상대가 고를 했는데 내가 이겼다 → 상대 부담 2배 (여기서는 승자 점수 2배로 표현)
  if (rules.goBak && opp.goCount > 0) {
    multiplier *= 2;
    reasons.push('고박');
  }
  if (roundMultiplier > 1) {
    multiplier *= roundMultiplier;
    reasons.push(`나가리 x${roundMultiplier}`);
  }

  total = total * multiplier;
  void oppBd;

  return {
    winner: stopper,
    breakdown: bd,
    base: bd.base,
    goCount: go,
    goBonus,
    multiplier,
    reasons,
    total,
  };
}

/** 총통 승리 정산 */
export function settleChongtong(
  stopper: PlayerId,
  month: number,
  rules: RuleOptions,
  roundMultiplier = 1,
): Settlement {
  void rules;
  return {
    winner: stopper,
    breakdown: null,
    base: 10,
    goCount: 0,
    goBonus: 0,
    multiplier: roundMultiplier,
    reasons: [`총통 (${month}월)`],
    total: 10 * roundMultiplier,
  };
}

/** 나가리 */
export function settleNagari(): Settlement {
  return {
    winner: null,
    breakdown: null,
    base: 0,
    goCount: 0,
    goBonus: 0,
    multiplier: 1,
    reasons: ['나가리'],
    total: 0,
  };
}
