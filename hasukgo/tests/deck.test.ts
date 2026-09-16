import { describe, expect, it } from 'vitest';
import { baseDeck, bonusCards, fullDeck } from '../src/engine/cards';
import { DEFAULT_RULES } from '../src/engine/types';

describe('화투 덱 구성', () => {
  const deck = baseDeck();

  it('48장이다', () => {
    expect(deck).toHaveLength(48);
  });

  it('id가 모두 고유하다', () => {
    expect(new Set(deck.map((c) => c.id)).size).toBe(48);
  });

  it('각 월이 정확히 4장씩이다', () => {
    for (let m = 1; m <= 12; m++) {
      expect(deck.filter((c) => c.month === m)).toHaveLength(4);
    }
  });

  it('광 5장 / 열끗 9장 / 띠 10장 / 피 24장', () => {
    expect(deck.filter((c) => c.kind === 'gwang')).toHaveLength(5);
    expect(deck.filter((c) => c.kind === 'yeol')).toHaveLength(9);
    expect(deck.filter((c) => c.kind === 'tti')).toHaveLength(10);
    expect(deck.filter((c) => c.kind === 'pi')).toHaveLength(24);
  });

  it('광은 1,3,8,11,12월이고 비광은 12월 1장', () => {
    const months = deck.filter((c) => c.kind === 'gwang').map((c) => c.month).sort((a, b) => a - b);
    expect(months).toEqual([1, 3, 8, 11, 12]);
    expect(deck.filter((c) => c.isBiGwang)).toHaveLength(1);
    expect(deck.find((c) => c.isBiGwang)!.month).toBe(12);
  });

  it('홍단/청단/초단 각 3장, 비띠 1장', () => {
    expect(deck.filter((c) => c.tti === 'hong')).toHaveLength(3);
    expect(deck.filter((c) => c.tti === 'cheong')).toHaveLength(3);
    expect(deck.filter((c) => c.tti === 'cho')).toHaveLength(3);
    expect(deck.filter((c) => c.tti === 'bi')).toHaveLength(1);
  });

  it('고도리는 2,4,8월 열끗 3장', () => {
    const godori = deck.filter((c) => c.isGodori);
    expect(godori).toHaveLength(3);
    expect(godori.map((c) => c.month).sort((a, b) => a - b)).toEqual([2, 4, 8]);
    expect(godori.every((c) => c.kind === 'yeol')).toBe(true);
  });

  it('쌍피는 11월/12월 각 1장이고 피 환산 총합은 26', () => {
    const ssangpi = deck.filter((c) => c.kind === 'pi' && c.piValue === 2);
    expect(ssangpi.map((c) => c.month).sort((a, b) => a - b)).toEqual([11, 12]);
    const total = deck.filter((c) => c.kind === 'pi').reduce((s, c) => s + (c.piValue ?? 0), 0);
    expect(total).toBe(26);
  });

  it('국진은 9월 열끗 1장', () => {
    const g = deck.filter((c) => c.isGukjin);
    expect(g).toHaveLength(1);
    expect(g[0].month).toBe(9);
    expect(g[0].kind).toBe('yeol');
  });

  it('보너스 쌍피 옵션이 덱 크기에 반영된다', () => {
    expect(bonusCards(DEFAULT_RULES)).toHaveLength(2);
    expect(fullDeck(DEFAULT_RULES)).toHaveLength(50);
    expect(fullDeck({ ...DEFAULT_RULES, bonusPiCount: 0 })).toHaveLength(48);
    expect(fullDeck({ ...DEFAULT_RULES, bonusPiCount: 3 })).toHaveLength(51);
  });
});
