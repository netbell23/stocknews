import { describe, expect, it } from 'vitest';
import { HIT_OVERLAP, slamLeft } from '../src/ui/useCardFlight';

describe('때리는 패가 내려앉는 자리', () => {
  it('맞는 패를 절반만 덮는다', () => {
    // 왼쪽 100, 폭 72 짜리 패를 때리면 136 에 앉는다 — 36px(절반) 겹친다
    expect(slamLeft(100, 72)).toBe(136);
    expect(HIT_OVERLAP).toBe(0.5);
  });

  it('포개지도, 떨어지지도 않는다', () => {
    const left = 0;
    const w = 80;
    const landed = slamLeft(left, w);
    // 완전히 포개면 밑에 뭐가 있었는지 안 보인다
    expect(landed).toBeGreaterThan(left);
    // 나란히 놓으면 맞아떨어진 건지 모른다
    expect(landed).toBeLessThan(left + w);
  });

  it('패가 커지든 작아지든 겹치는 비율은 같다', () => {
    for (const w of [40, 72, 116]) {
      const overlap = (w - (slamLeft(0, w) - 0)) / w;
      expect(overlap).toBeCloseTo(0.5, 5);
    }
  });
});
