/** 플레이테스트 하니스가 쓰는 것들만 모아 내보낸다. */
export { createGame, playCard, chooseMatch, declareGo, declareStop, currentScore } from '../src/engine/game';
export { scorePlayer } from '../src/engine/score';
export { createRng } from '../src/engine/rng';
export { chooseCard, chooseCapture, decideGoStop, EMPTY_PROFILE } from '../src/ai/ai';
export { curveParams } from '../src/ai/params';
export { paramsFor, rewardFor, TENANTS, getTenant } from '../src/data/tenants';
export { parseScript } from '../src/scenario/parser';
export { startScenario, advance, choose } from '../src/scenario/player';
export type { GameState, PlayerId } from '../src/engine/types';
