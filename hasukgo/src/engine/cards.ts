/**
 * 화투 48장 + 보너스 쌍피 정의.
 * 11월(오동) = 광1 + 쌍피1 + 피2, 12월(비) = 비광1 + 열끗1 + 비띠1 + 쌍피1 배치를 따른다.
 */
import type { Card, RuleOptions } from './types';

export const MONTH_NAMES: Record<number, string> = {
  1: '송학',
  2: '매조',
  3: '벚꽃',
  4: '흑싸리',
  5: '난초',
  6: '모란',
  7: '홍싸리',
  8: '공산',
  9: '국화',
  10: '단풍',
  11: '오동',
  12: '비',
};

interface CardSpec {
  kind: Card['kind'];
  tti?: Card['tti'];
  piValue?: number;
  isGodori?: boolean;
  isBiGwang?: boolean;
  isGukjin?: boolean;
  name: string;
}

const MONTH_SPECS: Record<number, CardSpec[]> = {
  1: [
    { kind: 'gwang', name: '송학 광' },
    { kind: 'tti', tti: 'hong', name: '송학 홍단' },
    { kind: 'pi', piValue: 1, name: '송학 피' },
    { kind: 'pi', piValue: 1, name: '송학 피' },
  ],
  2: [
    { kind: 'yeol', isGodori: true, name: '매조 휘파람새' },
    { kind: 'tti', tti: 'hong', name: '매조 홍단' },
    { kind: 'pi', piValue: 1, name: '매조 피' },
    { kind: 'pi', piValue: 1, name: '매조 피' },
  ],
  3: [
    { kind: 'gwang', name: '벚꽃 광' },
    { kind: 'tti', tti: 'hong', name: '벚꽃 홍단' },
    { kind: 'pi', piValue: 1, name: '벚꽃 피' },
    { kind: 'pi', piValue: 1, name: '벚꽃 피' },
  ],
  4: [
    { kind: 'yeol', isGodori: true, name: '흑싸리 두견새' },
    { kind: 'tti', tti: 'cho', name: '흑싸리 초단' },
    { kind: 'pi', piValue: 1, name: '흑싸리 피' },
    { kind: 'pi', piValue: 1, name: '흑싸리 피' },
  ],
  5: [
    { kind: 'yeol', name: '난초 다리' },
    { kind: 'tti', tti: 'cho', name: '난초 초단' },
    { kind: 'pi', piValue: 1, name: '난초 피' },
    { kind: 'pi', piValue: 1, name: '난초 피' },
  ],
  6: [
    { kind: 'yeol', name: '모란 나비' },
    { kind: 'tti', tti: 'cheong', name: '모란 청단' },
    { kind: 'pi', piValue: 1, name: '모란 피' },
    { kind: 'pi', piValue: 1, name: '모란 피' },
  ],
  7: [
    { kind: 'yeol', name: '홍싸리 멧돼지' },
    { kind: 'tti', tti: 'cho', name: '홍싸리 초단' },
    { kind: 'pi', piValue: 1, name: '홍싸리 피' },
    { kind: 'pi', piValue: 1, name: '홍싸리 피' },
  ],
  8: [
    { kind: 'gwang', name: '공산 광' },
    { kind: 'yeol', isGodori: true, name: '공산 기러기' },
    { kind: 'pi', piValue: 1, name: '공산 피' },
    { kind: 'pi', piValue: 1, name: '공산 피' },
  ],
  9: [
    { kind: 'yeol', isGukjin: true, name: '국화 국진' },
    { kind: 'tti', tti: 'cheong', name: '국화 청단' },
    { kind: 'pi', piValue: 1, name: '국화 피' },
    { kind: 'pi', piValue: 1, name: '국화 피' },
  ],
  10: [
    { kind: 'yeol', name: '단풍 사슴' },
    { kind: 'tti', tti: 'cheong', name: '단풍 청단' },
    { kind: 'pi', piValue: 1, name: '단풍 피' },
    { kind: 'pi', piValue: 1, name: '단풍 피' },
  ],
  11: [
    { kind: 'gwang', name: '오동 광' },
    { kind: 'pi', piValue: 2, name: '오동 쌍피' },
    { kind: 'pi', piValue: 1, name: '오동 피' },
    { kind: 'pi', piValue: 1, name: '오동 피' },
  ],
  12: [
    { kind: 'gwang', isBiGwang: true, name: '비광' },
    { kind: 'yeol', name: '비 제비' },
    { kind: 'tti', tti: 'bi', name: '비띠' },
    { kind: 'pi', piValue: 2, name: '비 쌍피' },
  ],
};

/** 48장 기본 덱 생성 (보너스패 제외) */
export function baseDeck(): Card[] {
  const cards: Card[] = [];
  for (let m = 1; m <= 12; m++) {
    MONTH_SPECS[m].forEach((spec, i) => {
      cards.push({
        id: `m${m}-${i}`,
        month: m,
        kind: spec.kind,
        tti: spec.tti,
        isBiGwang: spec.isBiGwang,
        isGodori: spec.isGodori,
        isGukjin: spec.isGukjin,
        piValue: spec.piValue,
        name: spec.name,
      });
    });
  }
  return cards;
}

/** 보너스 쌍피 생성 */
export function bonusCards(rules: RuleOptions): Card[] {
  const out: Card[] = [];
  for (let i = 0; i < rules.bonusPiCount; i++) {
    out.push({
      id: `bonus-${i}`,
      month: 0,
      kind: 'pi',
      piValue: rules.bonusPiValue,
      isBonus: true,
      name: `보너스 ${rules.bonusPiValue}피`,
    });
  }
  return out;
}

/** 규칙 옵션을 반영한 전체 덱 */
export function fullDeck(rules: RuleOptions): Card[] {
  return [...baseDeck(), ...bonusCards(rules)];
}

/** 국진의 실효 분류 (플레이어 선택 반영) */
export function effectiveKind(card: Card, gukjinAsSsangpi: boolean): Card['kind'] {
  if (card.isGukjin && gukjinAsSsangpi) return 'pi';
  return card.kind;
}

export function effectivePiValue(card: Card, gukjinAsSsangpi: boolean): number {
  if (card.isGukjin && gukjinAsSsangpi) return 2;
  return card.piValue ?? 0;
}
