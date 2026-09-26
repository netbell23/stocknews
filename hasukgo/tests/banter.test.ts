import { describe, expect, it } from 'vitest';
import { BANTER, banterKey, banterLine, NO_TAKE, type BanterKey, type Take } from '../src/ui/banter';
import type { Tone } from '../src/data/types';

const TONES: Tone[] = ['low', 'mid', 'high'];
const take = (t: Partial<Take>): Take => ({ ...NO_TAKE, ...t });

describe('잔말 표', () => {
  it('모든 경우에 톤별로 여러 줄이 있다', () => {
    for (const [key, b] of Object.entries(BANTER)) {
      for (const tone of TONES) {
        const lines = b.lines[tone];
        expect(lines.length, `${key} ${tone}`).toBeGreaterThanOrEqual(4);
        expect(new Set(lines).size, `${key} ${tone} 중복`).toBe(lines.length);
        for (const l of lines) expect(l.trim(), `${key} ${tone} 빈 줄`).not.toBe('');
      }
    }
  });

  it('방금 한 말은 다시 하지 않는다', () => {
    for (const key of Object.keys(BANTER) as BanterKey[]) {
      for (const tone of TONES) {
        const first = BANTER[key].lines[tone][0];
        // 난수가 늘 0 을 주어도 방금 한 말이면 피해야 한다
        const said = banterLine(key, tone, () => 0, first);
        expect(said.text, `${key} ${tone}`).not.toBe(first);
      }
    }
  });
});

describe('무슨 말을 할지 고르기', () => {
  it('광은 무엇보다 먼저다', () => {
    expect(banterKey(take({ gwang: 1, pi: 2 }), NO_TAKE)).toBe('gotGwang');
    expect(banterKey(NO_TAKE, take({ gwang: 1, pi: 9 }))).toBe('lostGwang');
  });

  it('한 번에 세 장 넘게 뺏기면 "다 가져가면 어떡해요"', () => {
    expect(banterKey(NO_TAKE, take({ pi: 3 }))).toBe('lostMany');
    expect(banterKey(NO_TAKE, take({ pi: 2 }))).toBe('lostPi');
  });

  it('종류별로 다른 말을 한다', () => {
    expect(banterKey(take({ yeol: 1 }), NO_TAKE)).toBe('gotYeol');
    expect(banterKey(take({ tti: 1 }), NO_TAKE)).toBe('gotTti');
    expect(banterKey(take({ pi: 1 }), NO_TAKE)).toBe('gotPi');
    expect(banterKey(NO_TAKE, take({ yeol: 1 }))).toBe('lostYeol');
    expect(banterKey(NO_TAKE, take({ tti: 1 }))).toBe('lostTti');
  });

  it('보너스패와 상납은 따로 말한다', () => {
    expect(banterKey(take({ pi: 1 }), NO_TAKE, { bonus: 'mine' })).toBe('gotBonus');
    expect(banterKey(NO_TAKE, take({ pi: 1 }), { steal: 'yours' })).toBe('lostSteal');
  });

  it('아무것도 안 오가면 형세를 말하거나 입을 다문다', () => {
    expect(banterKey(NO_TAKE, NO_TAKE, { leadFlip: 'ahead' })).toBe('ahead');
    expect(banterKey(NO_TAKE, NO_TAKE, { handLeft: 1 })).toBe('endgame');
    expect(banterKey(NO_TAKE, NO_TAKE, { handLeft: 8 })).toBeNull();
  });

  it('고른 말에는 어울리는 얼굴이 딸려 온다', () => {
    expect(banterLine('gotGwang', 'high', () => 0).face).toBe('win');
    expect(banterLine('lostMany', 'high', () => 0).face).toBe('lose');
    expect(banterLine('endgame', 'mid', () => 0).face).toBe('serious');
  });
});
