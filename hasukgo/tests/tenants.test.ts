import { describe, expect, it } from 'vitest';
import {
  getTenant,
  isUnlocked,
  paramsFor,
  rewardFor,
  TENANTS,
  toneOf,
  unlockHint,
} from '../src/data/tenants';
import { playSeries, type Seat } from '../src/ai/runner';
import { cheapestEntry, emptySave, isStuck, payoutFor, takeAllowance } from '../src/save/storage';
import { minStake } from '../src/data/tenants';
import { SHOP_ITEMS, SHOP_TOTAL, ownedCardSkins, ownedThemes, valueOf } from '../src/data/shop';
import { CARD_SKINS, cardSvg, getSkin } from '../src/art/cards';
import { baseDeck } from '../src/engine/cards';
import type { LineSet, LineSetKey } from '../src/data/types';

const LINE_KEYS: LineSetKey[] = [
  'matchStart',
  'go',
  'stop',
  'ppeok',
  'sseulVictim',
  'win',
  'lose',
  'affection',
];

describe('하숙생 데이터 무결성', () => {
  it('10명이고 순번이 1~10으로 유일하다', () => {
    expect(TENANTS).toHaveLength(10);
    expect([...TENANTS].map((t) => t.order).sort((a, b) => a - b)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(new Set(TENANTS.map((t) => t.id)).size).toBe(10);
    expect(new Set(TENANTS.map((t) => t.name)).size).toBe(10);
  });

  it('전원 성인이고 방 번호가 있다', () => {
    for (const t of TENANTS) {
      expect(t.age).toBeGreaterThanOrEqual(22);
      expect(t.age).toBeLessThanOrEqual(29);
      expect(t.room.length).toBeGreaterThan(0);
      expect(t.job.length).toBeGreaterThan(0);
      expect(t.personality).toHaveLength(3);
    }
  });

  it('계절 배치가 기획대로다 (봄 1~3 / 여름 4~6 / 가을 7~9 / 겨울 10)', () => {
    const expected = ['spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
    expect(TENANTS.map((t) => t.season)).toEqual(expected);
  });

  it('상황 8종 x 호감도 3톤 대사가 각 3줄 이상이다', () => {
    for (const t of TENANTS) {
      for (const key of LINE_KEYS) {
        const set: LineSet = t.lines[key];
        for (const tone of ['low', 'mid', 'high'] as const) {
          expect(set[tone].length, `${t.id}.${key}.${tone}`).toBeGreaterThanOrEqual(3);
          for (const line of set[tone]) expect(line.trim().length).toBeGreaterThan(0);
        }
      }
      expect(t.lines.hints.length, `${t.id}.hints`).toBeGreaterThanOrEqual(3);
    }
  });

  it('이벤트가 단계 1~10으로 빠짐없이 있고 스크립트 id가 고유하다', () => {
    const allScriptIds = new Set<string>();
    for (const t of TENANTS) {
      expect(t.events.map((e) => e.stage)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      for (const e of t.events) {
        expect(e.title.trim().length).toBeGreaterThan(0);
        expect(allScriptIds.has(e.scriptId)).toBe(false);
        allScriptIds.add(e.scriptId);
      }
    }
    expect(allScriptIds.size).toBe(100);
  });

  it('4~6단계에는 선택지가 있다', () => {
    for (const t of TENANTS) {
      for (const stage of [4, 5, 6]) {
        expect(t.events.find((e) => e.stage === stage)!.hasChoice, `${t.id} ${stage}`).toBe(true);
      }
      // 10단계 고백 이벤트도 플레이어가 응답을 고른다
      expect(t.events.find((e) => e.stage === 10)!.hasChoice).toBe(true);
    }
  });
});

describe('해금 구조', () => {
  it('1~3번은 처음부터 해금이고 나머지는 잠겨 있다', () => {
    const none: Record<string, number> = {};
    const open = TENANTS.filter((t) => isUnlocked(t, none));
    expect(open.map((t) => t.id)).toEqual(['eunseo', 'hayeong', 'jiwoo']);
  });

  it('해금 조건은 항상 자기보다 앞 순번의 5단계다', () => {
    for (const t of TENANTS) {
      for (const u of t.unlock) {
        expect(getTenant(u.tenantId).order).toBeLessThan(t.order);
        expect(u.stage).toBe(5);
      }
    }
  });

  it('전원 해금이 실제로 가능하다 (순서대로 5단계씩 클리어)', () => {
    const cleared: Record<string, number> = {};
    for (const t of TENANTS) {
      expect(isUnlocked(t, cleared), `${t.id} 잠김: ${unlockHint(t)}`).toBe(true);
      cleared[t.id] = 10;
    }
  });

  it('최종 히로인 윤은 가을 3인을 모두 거쳐야 열린다', () => {
    const yoon = getTenant('yoon');
    expect(yoon.unlock.map((u) => u.tenantId).sort()).toEqual(['dohee', 'seyeon', 'yerin']);
  });
});

describe('보상과 난이도', () => {
  it('순번이 뒤일수록 점당 레이트와 보너스가 커진다', () => {
    for (let i = 1; i < TENANTS.length; i++) {
      expect(TENANTS[i].rate).toBeGreaterThan(TENANTS[i - 1].rate);
      expect(rewardFor(TENANTS[i], 1)).toBeGreaterThan(rewardFor(TENANTS[i - 1], 1));
    }
  });

  it('단계가 오르면 클리어 보너스가 커진다', () => {
    for (const t of TENANTS) {
      expect(rewardFor(t, 10)).toBeGreaterThan(rewardFor(t, 1));
    }
  });

  it('하숙생별 파라미터가 0~1 범위를 벗어나지 않는다', () => {
    for (const t of TENANTS) {
      for (let stage = 1; stage <= 10; stage++) {
        const p = paramsFor(t, stage);
        for (const k of ['mistakeRate', 'inference', 'greed', 'aggression'] as const) {
          expect(p[k], `${t.id} s${stage} ${k}`).toBeGreaterThanOrEqual(0);
          expect(p[k], `${t.id} s${stage} ${k}`).toBeLessThanOrEqual(1);
        }
        expect(p.stopScore).toBeGreaterThanOrEqual(7);
      }
    }
  });

  it('같은 하숙생은 단계가 오를수록 실수가 줄어든다', () => {
    for (const t of TENANTS) {
      expect(paramsFor(t, 1).mistakeRate).toBeGreaterThan(paramsFor(t, 10).mistakeRate);
    }
  });

  it('기획한 스타일이 파라미터에 실제로 반영됐다', () => {
    const p = (id: string) => paramsFor(getTenant(id), 5);
    // 하영: 피 위주
    expect(p('hayeong').weights.pi).toBeGreaterThan(p('hayeong').weights.gwang);
    // 지우: 띠 수집
    expect(p('jiwoo').weights.tti).toBeGreaterThan(p('jiwoo').weights.pi);
    // 나래: 광 사냥
    expect(p('narae').weights.gwang).toBeGreaterThan(p('narae').weights.pi);
    // 수아: 공격적 고
    expect(p('sua').greed).toBeGreaterThan(p('minji').greed);
    // 민지/예린: 정확한 스톱
    expect(p('minji').stopScore).toBeLessThan(p('sua').stopScore);
    // 도희/윤: 추론
    expect(p('dohee').inference).toBeGreaterThan(p('eunseo').inference);
    expect(p('yoon').inference).toBeGreaterThanOrEqual(p('dohee').inference);
  });
});

describe('호감도 톤', () => {
  it('0~30 low / 31~70 mid / 71~100 high', () => {
    expect(toneOf(0)).toBe('low');
    expect(toneOf(30)).toBe('low');
    expect(toneOf(31)).toBe('mid');
    expect(toneOf(70)).toBe('mid');
    expect(toneOf(71)).toBe('high');
    expect(toneOf(100)).toBe('high');
  });
});

describe('실제 대국 난이도 (하숙생 스타일 반영)', () => {
  const seatOf = (id: string, stage: number): Seat => ({ params: paramsFor(getTenant(id), stage) });

  it('은서 1단계보다 윤 10단계가 확실히 강하다', () => {
    const r = playSeries([seatOf('eunseo', 1), seatOf('yoon', 10)], 500, 5150);
    expect(1 - r.winRate0).toBeGreaterThan(0.6);
  });

  it('같은 하숙생이라도 10단계가 1단계보다 강하다', () => {
    const r = playSeries([seatOf('sua', 1), seatOf('sua', 10)], 500, 6160);
    expect(1 - r.winRate0).toBeGreaterThan(0.5);
  });

  it('모든 하숙생이 10단계에서 무한루프 없이 판을 끝낸다', () => {
    for (const t of TENANTS) {
      const r = playSeries([seatOf(t.id, 10), seatOf('eunseo', 1)], 60, 7000 + t.order);
      expect(r.wins[0] + r.wins[1] + r.draws, t.id).toBe(60);
    }
  });
});

describe('포인트가 말라도 진행이 막히지 않는다', () => {
  it('가장 싼 참가비보다 적으면 막힌 상태로 판정한다', () => {
    const s = emptySave();
    s.points = cheapestEntry() - 1;
    expect(isStuck(s)).toBe(true);
    s.points = cheapestEntry();
    expect(isStuck(s)).toBe(false);
  });

  it('용돈을 받으면 최소 한 판은 둘 수 있게 된다', () => {
    const s = emptySave();
    s.points = 0;
    const after = takeAllowance(s);
    expect(isStuck(after)).toBe(false);
    expect(after.points).toBeGreaterThanOrEqual(cheapestEntry());
  });

  it('막히지 않은 상태에서는 용돈이 나오지 않는다 (무한 수급 방지)', () => {
    const s = emptySave();
    s.points = 1000;
    expect(takeAllowance(s).points).toBe(1000);
  });

  it('최소 보유 포인트는 점당 레이트에 비례한다', () => {
    for (const t of TENANTS) {
      expect(minStake(t)).toBe(t.rate * 10);
    }
  });
});

describe('판돈 경제', () => {
  it('이기면 점수 x 점당을 받고, 지면 그 7할을 낸다', () => {
    const rate = 10;
    expect(payoutFor({ won: true, draw: false, settlementTotal: 12, rate })).toBe(120);
    expect(payoutFor({ won: false, draw: false, settlementTotal: 12, rate })).toBe(-84);
    expect(payoutFor({ won: false, draw: true, settlementTotal: 12, rate })).toBe(0);
  });

  it('배수가 붙은 큰 점수는 판돈도 그만큼 커진다', () => {
    const small = payoutFor({ won: true, draw: false, settlementTotal: 7, rate: 10 });
    const big = payoutFor({ won: true, draw: false, settlementTotal: 56, rate: 10 });
    expect(big).toBe(small * 8);
  });

  it('지는 쪽이 무는 돈이 이기는 쪽이 받는 돈보다 적다 (하숙집 인심)', () => {
    for (const t of TENANTS) {
      const win = payoutFor({ won: true, draw: false, settlementTotal: 15, rate: t.rate });
      const lose = -payoutFor({ won: false, draw: false, settlementTotal: 15, rate: t.rate });
      expect(lose, t.name).toBeLessThan(win);
    }
  });

  it('클리어 보너스가 한 판 평균 판돈보다 작다 (판돈이 주 수입원이어야 한다)', () => {
    for (const t of TENANTS) {
      // 평균 15점짜리 승리 한 판
      const typicalPot = 15 * t.rate;
      expect(rewardFor(t, 10), t.name).toBeLessThan(typicalPot * 2);
    }
  });
});

describe('상점', () => {
  it('파는 물건이 전부 겉모습이다 (승부에 유리해지는 것이 없다)', () => {
    for (const i of SHOP_ITEMS) {
      expect(['cards', 'theme']).toContain(i.kind);
    }
  });

  it('품목 id 가 고유하고 값이 실제 스킨/테마를 가리킨다', () => {
    expect(new Set(SHOP_ITEMS.map((i) => i.id)).size).toBe(SHOP_ITEMS.length);
    for (const i of SHOP_ITEMS.filter((x) => x.kind === 'cards')) {
      expect(CARD_SKINS.some((s) => s.id === valueOf(i)), i.id).toBe(true);
    }
  });

  it('기본 화패와 기본 테마는 사지 않아도 갖고 있다', () => {
    expect(ownedCardSkins([])).toEqual(['classic']);
    expect(ownedThemes([])).toEqual(['maru']);
  });

  it('산 것만 보유 목록에 들어온다', () => {
    const owned = ['cards:hanji', 'theme:snow'];
    expect(ownedCardSkins(owned)).toEqual(['classic', 'hanji']);
    expect(ownedThemes(owned)).toEqual(['maru', 'snow']);
  });

  it('전부 사려면 100단계를 한 번 돌아 번 것보다 많이 든다 (반복 동기)', () => {
    // 시뮬레이션상 초보 완주 시 약 6,400P
    expect(SHOP_TOTAL).toBeGreaterThan(6400);
  });

  it('모든 화패 스킨이 실제로 다른 그림을 낸다', () => {
    const deck = baseDeck();
    const card = deck[0];
    const rendered = CARD_SKINS.map((s) => cardSvg(card, { skin: s.id }));
    expect(new Set(rendered).size).toBe(CARD_SKINS.length);
    // 알 수 없는 스킨은 기본으로 떨어진다
    expect(getSkin('없는스킨').id).toBe('classic');
  });
});
