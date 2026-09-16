/**
 * AI 대 AI 자동 대국 러너.
 * 밸런스 테스트와 시뮬레이션에 쓰이고, UI 는 여기서 한 턴씩만 꺼내 쓴다.
 */
import {
  chooseMatch,
  createGame,
  declareGo,
  declareShake,
  declareStop,
  playCard,
  setGukjinUse,
} from '../engine/game';
import { createRng, type Rng } from '../engine/rng';
import type { GameState, PlayerId } from '../engine/types';
import {
  chooseCapture,
  chooseCard,
  decideGoStop,
  decideGukjin,
  decideShake,
  EMPTY_PROFILE,
  type PlayerProfile,
} from './ai';
import type { AiParams } from './params';

export interface Seat {
  params: AiParams;
  profile?: PlayerProfile;
}

/** 현재 턴 플레이어가 한 번 행동한다. phase 에 맞는 단 하나의 동작만 수행한다. */
export function aiStep(s: GameState, seat: Seat, rng: Rng): GameState {
  const profile = seat.profile ?? EMPTY_PROFILE;
  switch (s.phase) {
    case 'awaitPlay': {
      const p = s.turn;
      let next = s;
      const shake = decideShake(next, seat.params, rng);
      if (shake !== null) next = declareShake(next, p, shake);
      next = setGukjinUse(next, p, decideGukjin(next, seat.params));
      const d = chooseCard(next, seat.params, rng, profile);
      if (!d.cardId) return next;
      return playCard(next, d.cardId, d.bomb);
    }
    case 'awaitChoice':
      return chooseMatch(s, chooseCapture(s, seat.params, rng));
    case 'awaitGoStop': {
      const d = decideGoStop(s, seat.params, rng, profile);
      return d.action === 'go' ? declareGo(s) : declareStop(s);
    }
    default:
      return s;
  }
}

export interface MatchResult {
  winner: PlayerId | null;
  total: number;
  turns: number;
  goCount: number;
  reasons: string[];
}

/** 한 판을 끝까지 돌린다 */
export function playMatch(opts: {
  seats: [Seat, Seat];
  seed: number;
  firstPlayer?: PlayerId;
  maxSteps?: number;
}): MatchResult {
  const rng = createRng(opts.seed ^ 0x5bf03635);
  let s = createGame({ seed: opts.seed, firstPlayer: opts.firstPlayer ?? 0 });
  const maxSteps = opts.maxSteps ?? 400;
  let steps = 0;
  while (s.phase !== 'ended' && steps < maxSteps) {
    const before = s;
    s = aiStep(s, opts.seats[s.turn], rng);
    steps++;
    // 무한루프 방지: 상태가 전혀 변하지 않으면 중단
    if (s === before) break;
  }
  return {
    winner: s.settlement?.winner ?? null,
    total: s.settlement?.total ?? 0,
    turns: s.turnCount,
    goCount: s.settlement?.goCount ?? 0,
    reasons: s.settlement?.reasons ?? [],
  };
}

export interface SeriesResult {
  games: number;
  wins: [number, number];
  draws: number;
  points: [number, number];
  avgTurns: number;
  /** 0번 좌석 기준 승률 (무승부 제외) */
  winRate0: number;
}

/** 선/후 공을 번갈아가며 N판을 돌려 승률을 낸다 */
export function playSeries(seats: [Seat, Seat], games: number, baseSeed = 1): SeriesResult {
  const wins: [number, number] = [0, 0];
  const points: [number, number] = [0, 0];
  let draws = 0;
  let turns = 0;
  for (let i = 0; i < games; i++) {
    const r = playMatch({ seats, seed: baseSeed + i * 7919, firstPlayer: (i % 2) as PlayerId });
    turns += r.turns;
    if (r.winner === null) draws++;
    else {
      wins[r.winner]++;
      points[r.winner] += r.total;
    }
  }
  const decided = wins[0] + wins[1];
  return {
    games,
    wins,
    draws,
    points,
    avgTurns: turns / games,
    winRate0: decided === 0 ? 0.5 : wins[0] / decided,
  };
}
