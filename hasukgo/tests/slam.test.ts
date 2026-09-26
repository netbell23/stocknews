import { describe, expect, it } from 'vitest';
import { HIT_OVERLAP, slamLeft, slamSideIsRight } from '../src/ui/useCardFlight';

describe('때리는 패가 내려앉는 자리', () => {
  it('맞는 패를 절반만 덮는다', () => {
    // 왼쪽 100, 폭 72 짜리 패를 오른쪽으로 때리면 136 — 36px(절반) 겹친다
    expect(slamLeft(100, 72, true)).toBe(136);
    expect(slamLeft(100, 72, false)).toBe(64);
    expect(HIT_OVERLAP).toBe(0.5);
  });

  it('포개지도, 떨어지지도 않는다', () => {
    for (const toRight of [true, false]) {
      const landed = slamLeft(100, 80, toRight);
      expect(Math.abs(landed - 100)).toBeGreaterThan(0); // 완전히 포개지 않는다
      expect(Math.abs(landed - 100)).toBeLessThan(80); // 떨어뜨려 놓지도 않는다
    }
  });

  it('패 크기가 달라져도 겹치는 비율은 같다', () => {
    for (const w of [40, 72, 116]) {
      expect((w - (slamLeft(0, w, true) - 0)) / w).toBeCloseTo(0.5, 5);
    }
  });

  /*
   * 먹은 패는 곧 더미로 날아간다. 그 길목에 내려놓으면 날아가는 패가
   * 때린 패를 스치고 지나가서, z-index 를 올려도 겹쳐 보인다.
   */
  it('더미 반대쪽에 내려놓는다', () => {
    expect(slamSideIsRight(500, 40)).toBe(true); // 더미가 왼쪽 → 오른쪽에
    expect(slamSideIsRight(100, 900)).toBe(false); // 더미가 오른쪽 → 왼쪽에
  });

  it('더미가 바로 위아래면 오른쪽으로 둔다', () => {
    // 세로 배치에서는 더미가 같은 x 에 있다. 그때는 한쪽으로 정해두면 된다.
    expect(slamSideIsRight(300, 300)).toBe(true);
  });
});
