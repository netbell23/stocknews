import { describe, expect, it } from 'vitest';
import { ppeokBindDelay, PPEOK_BIND_MS } from '../src/ui/MatchScreen';

describe('뻑 묶음이 화면에 나타나는 시점', () => {
  it('새로 생긴 뻑은 뒷장이 붙을 때까지 기다린다', () => {
    // 엔진은 패를 내는 순간 뻑으로 적지만, 화면에는 아직 뒷장이 날아오는 중이다
    expect(ppeokBindDelay('', '3')).toBe(PPEOK_BIND_MS);
    expect(ppeokBindDelay('3', '3,8')).toBe(PPEOK_BIND_MS);
  });

  it('풀려서 사라진 뻑은 곧바로 지운다', () => {
    // 누가 그 더미를 가져갔다는 뜻이다. 늦추면 없는 더미에 표시가 남는다
    expect(ppeokBindDelay('3,8', '8')).toBe(0);
    expect(ppeokBindDelay('3', '')).toBe(0);
  });

  it('기다리는 시간은 뒷장이 내려앉는 순간에 맞춘다', () => {
    // useCardFlight 의 REVEAL_HIT_MS(2000) × HIT_AT(0.45) = 900 직후
    expect(PPEOK_BIND_MS).toBeGreaterThan(900);
    expect(PPEOK_BIND_MS).toBeLessThan(1200);
  });
});
