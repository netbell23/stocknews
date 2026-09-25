/**
 * 맞고 AI.
 * 규칙 엔진의 순수 함수만 사용하며, 상태를 직접 조작하지 않는다.
 * 난이도는 (a) 실수 확률, (b) 추론 강도, (c) 성향 가중치 세 축으로 만들어진다.
 */
import { bombableMonths, currentScore, fieldMatches, shakeableMonths } from '../engine/game';
import { scorePlayer } from '../engine/score';
import type { Card, GameState, PlayerId } from '../engine/types';
import type { AiParams } from './params';
import type { Rng } from '../engine/rng';

/** 플레이어 습관 통계. 최상위 난이도에서만 쓰인다. */
export interface PlayerProfile {
  /** 최근 판에서 플레이어가 고를 선언한 비율 */
  goRate: number;
  /** 플레이어가 선호한 점수 항목 (합이 1이 되도록 정규화) */
  preference: { gwang: number; yeol: number; tti: number; pi: number };
  /** 표본 수 */
  samples: number;
}

export const EMPTY_PROFILE: PlayerProfile = {
  goRate: 0.3,
  preference: { gwang: 0.25, yeol: 0.25, tti: 0.25, pi: 0.25 },
  samples: 0,
};

/** 카드 한 장의 기본 가치 (점수 기여도 근사) */
export function cardValue(c: Card, p: AiParams): number {
  const w = p.weights;
  if (c.kind === 'gwang') return (c.isBiGwang ? 7 : 10) * w.gwang;
  if (c.isGukjin) return 4.5 * Math.max(w.yeol, w.pi);
  if (c.kind === 'yeol') return (c.isGodori ? 5.5 * w.godori : 3) * w.yeol;
  if (c.kind === 'tti') {
    const bonus =
      c.tti === 'hong' ? w.hongdan : c.tti === 'cheong' ? w.cheongdan : c.tti === 'cho' ? w.chodan : 0.6;
    return 3.5 * w.tti * bonus;
  }
  return (c.piValue ?? 1) * 1.2 * w.pi;
}

/** 이미 모은 패를 반영한 한계 가치 (거의 다 모은 조합은 더 값지다) */
export function marginalValue(s: GameState, p: PlayerId, c: Card, params: AiParams): number {
  const cap = s.players[p].captured;
  let v = cardValue(c, params);

  if (c.kind === 'gwang') {
    const n = cap.gwang.length;
    if (n === 2) v += 12; // 3광 완성 직전
    if (n >= 3) v += 8;
  }
  if (c.isGodori) {
    const g = cap.yeol.filter((x) => x.isGodori).length;
    if (g === 2) v += 10;
  }
  if (c.kind === 'tti' && c.tti && c.tti !== 'bi') {
    const same = cap.tti.filter((x) => x.tti === c.tti).length;
    if (same === 2) v += 9; // 단 완성 직전
    else if (same === 1) v += 2;
  }
  // 피 9점 근처는 1장이 곧 1점
  if (c.kind === 'pi') {
    const piPts = cap.pi.reduce((a, x) => a + (x.piValue ?? 1), 0);
    if (piPts >= 8) v += 3 * (c.piValue ?? 1);
  }
  // 열끗 4장에서 1장 더하면 점수
  if (c.kind === 'yeol' && cap.yeol.length >= 4) v += 3;
  return v;
}

/**
 * 바닥에 남겨두면 상대가 가져갈 위험도.
 * 상대가 그 월을 들고 있어야 가져간다 — 이미 넉 장이 다 드러난 월을 깔아도 아무 일 없다.
 * 추론이 약하면 이 계산 자체를 못 하고 패의 값만 본다.
 */
function fieldRisk(s: GameState, opp: PlayerId, c: Card, params: AiParams): number {
  const seen = params.inference;
  if (seen <= 0) return 0;
  const oppValue = marginalValue(s, opp, c, params);
  const unseen = countUnseen(s, opp === 0 ? 1 : 0);
  const live = remainingOfMonth(s, opp === 0 ? 1 : 0, c.month);
  // 상대 손에 그 월이 있을 확률 (못 본 패 중 상대 손패가 차지하는 비율)
  const inOppHand = unseen === 0 ? 0 : (live / unseen) * s.players[opp].hand.length;
  return oppValue * seen * Math.min(1, inOppHand) * 0.8;
}

export interface PlayDecision {
  cardId: string;
  bomb: boolean;
  /** 디버그/연출용 평가 점수 */
  score: number;
}

/**
 * 손패 한 장을 고른다.
 * 평가 = (내가 즉시 먹는 가치) - (바닥에 남기는 위험) - (뻑 위험) + (손패 정리 이득)
 */
export function chooseCard(
  s: GameState,
  params: AiParams,
  rng: Rng,
  profile: PlayerProfile = EMPTY_PROFILE,
): PlayDecision {
  const me = s.turn;
  const opp: PlayerId = me === 0 ? 1 : 0;
  const hand = s.players[me].hand;
  if (hand.length === 0) return { cardId: '', bomb: false, score: 0 };

  // 실수: 확률적으로 아무 패나 낸다
  if (rng.next() < params.mistakeRate) {
    const c = rng.pick(hand);
    return { cardId: c.id, bomb: false, score: 0 };
  }

  const bombs = params.aggression > 0.45 ? bombableMonths(s, me) : [];
  const unseen = countUnseen(s, me);

  let best: PlayDecision = { cardId: hand[0].id, bomb: false, score: -Infinity };
  for (const c of hand) {
    const matches = fieldMatches(s, c.month);
    let v = 0;

    if (matches.length === 0) {
      // 바닥에 깔린다 -> 상대에게 먹힐 위험 + 내 패를 버리는 손실
      v -= fieldRisk(s, opp, c, params);
      v -= marginalValue(s, me, c, params) * 0.25;
      // 쪽 기대값: 같은 월이 아직 덱/상대 손에 남아있을 확률
      const remaining = remainingOfMonth(s, me, c.month);
      v += (remaining / Math.max(1, unseen)) * 3 * params.inference;
    } else if (matches.length === 1) {
      v += marginalValue(s, me, c, params) + marginalValue(s, me, matches[0], params);
      // 견제: 상대가 그 패로 조합을 완성할 참이었다면 끊는 가치가 크다
      v += marginalValue(s, opp, matches[0], params) * params.inference * 0.5;
      /*
       * 뻑 위험. 짝을 맞춰 내는데 하필 뒤집은 패가 같은 월이면 셋이 묶인다.
       * 다만 그건 덱에서 바로 그 한 장이 나와야 하는 일이라 확률이 작다 —
       * 여기서 크게 겁을 주면 먹을 수 있는 짝도 안 먹는 AI 가 된다.
       */
      const remaining = remainingOfMonth(s, me, c.month);
      const inDeck = s.deck.length === 0 ? 0 : Math.min(1, remaining / Math.max(1, unseen));
      v -= inDeck * 2.5 * params.inference;
    } else {
      // 2장 이상 -> 가장 값진 것을 먹는다
      const sorted = [...matches].sort(
        (a, b) => marginalValue(s, me, b, params) - marginalValue(s, me, a, params),
      );
      v += marginalValue(s, me, c, params) + marginalValue(s, me, sorted[0], params);
      v += marginalValue(s, opp, sorted[0], params) * params.inference * 0.5;
      if (matches.length >= 3) v += 8; // 뻑 회수 = 피 상납까지
    }

    // 상대가 노리는 항목을 견제 (추론 + 패턴 학습)
    if (params.patternLearning > 0) {
      v -= counterBonus(c, profile) * params.patternLearning * 4;
    }

    if (v > best.score) best = { cardId: c.id, bomb: false, score: v };
  }

  // 폭탄은 바닥 회수 가치가 충분할 때만
  for (const m of bombs) {
    const matches = fieldMatches(s, m);
    const gain =
      matches.reduce((a, c) => a + marginalValue(s, me, c, params), 0) + 10 * params.aggression;
    if (gain > best.score) {
      const c = s.players[me].hand.find((x) => x.month === m)!;
      best = { cardId: c.id, bomb: true, score: gain };
    }
  }
  return best;
}

/** 아직 보지 못한 패 수 (덱 + 상대 손패) */
function countUnseen(s: GameState, me: PlayerId): number {
  const opp: PlayerId = me === 0 ? 1 : 0;
  return s.deck.length + s.players[opp].hand.length;
}

/** 해당 월 중 내가 못 본 장수 */
function remainingOfMonth(s: GameState, me: PlayerId, month: number): number {
  if (month === 0) return 0;
  const seen =
    s.players[me].hand.filter((c) => c.month === month).length +
    s.field.filter((c) => c.month === month).length +
    [
      ...s.players[0].captured.gwang,
      ...s.players[0].captured.yeol,
      ...s.players[0].captured.tti,
      ...s.players[0].captured.pi,
      ...s.players[1].captured.gwang,
      ...s.players[1].captured.yeol,
      ...s.players[1].captured.tti,
      ...s.players[1].captured.pi,
    ].filter((c) => c.month === month).length;
  return Math.max(0, 4 - seen);
}

/** 플레이어가 선호하는 항목의 패는 먼저 끊는다 */
function counterBonus(c: Card, profile: PlayerProfile): number {
  if (profile.samples < 3) return 0;
  const p = profile.preference;
  if (c.kind === 'gwang') return p.gwang;
  if (c.kind === 'yeol') return p.yeol;
  if (c.kind === 'tti') return p.tti;
  return p.pi;
}

/** awaitChoice 상태에서 먹을 패 고르기 */
export function chooseCapture(s: GameState, params: AiParams, rng: Rng): string {
  const cands = s.pendingChoice?.candidates ?? [];
  if (cands.length === 0) return '';
  if (rng.next() < params.mistakeRate) return rng.pick(cands).id;
  const me = s.turn;
  return [...cands].sort((a, b) => marginalValue(s, me, b, params) - marginalValue(s, me, a, params))[0]
    .id;
}

export interface GoStopDecision {
  action: 'go' | 'stop';
  /** 0~1, 얼마나 확신하는지 (대사 톤 선택에 쓰인다) */
  confidence: number;
}

/**
 * 고/스톱 판단.
 *
 * 고는 점수를 걸고 하는 거래다. 지금 접으면 확실한 승리고,
 * 한 번 더 가면 점수는 오르지만 뒤집히면 고박으로 두 배를 문다.
 * 그래서 이 판단이 곧 실력이다 — 잘 두는 사람은 이겼을 때 접고,
 * 서툰 사람은 판이 뒤집힐 수 있다는 걸 못 보고 지른다.
 *
 * 위험을 얼마나 보는지는 inference 가 정한다. 추론이 0 이면
 * 상대가 코앞까지 온 것이 아예 안 보여서, 남은 패가 있는 한 계속 간다.
 */
export function decideGoStop(
  s: GameState,
  params: AiParams,
  rng: Rng,
  profile: PlayerProfile = EMPTY_PROFILE,
): GoStopDecision {
  const me = s.turn;
  const opp: PlayerId = me === 0 ? 1 : 0;
  const myScore = currentScore(s, me);
  const oppScore = scorePlayer(s.players[opp], s.rules).base;
  const cardsLeft = s.players[me].hand.length;

  // 실수 구간: 판을 보지 않고 성향대로 지른다
  if (rng.next() < params.mistakeRate) {
    return { action: rng.next() < params.greed ? 'go' : 'stop', confidence: 0.2 };
  }

  // 칠 패가 없으면 고는 그냥 손해다
  if (cardsLeft <= 1) return { action: 'stop', confidence: 0.85 };
  // 이미 충분히 크면 접는다
  if (myScore >= params.stopScore) return { action: 'stop', confidence: 0.9 };

  // 한 번 더 가서 벌어들일 몫. 고 한 번이 +1 점이고, 세 번 가면 판돈이 두 배다.
  const gain = Math.min(4.5, 0.6 + cardsLeft * 0.5) * (0.7 + 0.7 * params.greed);

  /*
   * 뒤집힐 확률. 상대에게 아직 칠 패가 남아 있고 점수가 붙어 있을수록 높다.
   * 거의 다 온 조합(3광 직전 · 단 두 장 · 피 8점)이 있으면 한 번에 넘어간다.
   */
  const oppCards = s.players[opp].hand.length;
  const gapToWin = Math.max(0, s.rules.minScoreToStop - oppScore);
  const oppCap = s.players[opp].captured;
  const oppPi = oppCap.pi.reduce((a, c) => a + (c.piValue ?? 1), 0);
  let brewing = 0;
  if (oppCap.gwang.length >= 2) brewing += 0.16;
  if (oppCap.yeol.filter((c) => c.isGodori).length >= 2) brewing += 0.1;
  for (const kind of ['hong', 'cheong', 'cho'] as const) {
    if (oppCap.tti.filter((c) => c.tti === kind).length >= 2) brewing += 0.1;
  }
  if (oppPi >= 8) brewing += 0.12;
  const overturn = clamp01(0.06 + (oppCards / 10) * Math.max(0, 1 - gapToWin / 9) * 1.1 + brewing);

  // 고박이면 내가 물어줄 점수가 두 배가 된다 — 걸려 있는 판돈 자체가 위험의 크기다
  const risk = overturn * (myScore * (s.rules.goBak ? 2 : 1) + 3);

  // 플레이어가 고를 자주 하는 타입이면 판이 길어질 것을 감안
  const playerGoBias = (profile.goRate - 0.3) * params.patternLearning;

  // 위험이 얼마나 보이는가. 이게 곧 난이도다.
  const net = gain - risk * params.inference + playerGoBias;
  const go = net > 0;
  return { action: go ? 'go' : 'stop', confidence: Math.min(1, Math.abs(net) / 3) };
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

/** 흔들기 선언 여부 */
export function decideShake(s: GameState, params: AiParams, rng: Rng): number | null {
  const me = s.turn;
  const months = shakeableMonths(s, me);
  if (months.length === 0) return null;
  if (rng.next() > params.aggression) return null;
  return months[0];
}

/** 국진을 열끗/쌍피 중 무엇으로 쓸지 */
export function decideGukjin(s: GameState, params: AiParams): 'yeol' | 'ssangpi' {
  const me = s.turn;
  const cap = s.players[me].captured;
  const yeolCount = cap.yeol.length;
  const piPts = cap.pi.reduce((a, c) => a + (c.piValue ?? 1), 0);
  // 열끗으로 5장을 채울 수 있으면 열끗, 피 8점 이상이면 쌍피
  const asYeol = yeolCount >= 5 ? 1 + (yeolCount - 5) : 0;
  const asPi = piPts + 2 >= 10 ? piPts + 2 - 9 : 0;
  if (asPi > asYeol) return 'ssangpi';
  if (asYeol > asPi) return 'yeol';
  return params.weights.pi >= params.weights.yeol ? 'ssangpi' : 'yeol';
}
