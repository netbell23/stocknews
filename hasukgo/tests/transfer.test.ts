/**
 * 백업 코드 왕복 테스트.
 * 이게 깨지면 이용자가 폰을 바꿀 때 진행도를 잃는다.
 */
import { beforeEach, describe, expect, it } from 'vitest';
import { shortCodeOf } from '../src/auth/device';
import { emptySave, type SaveData } from '../src/save/storage';
import { makeBackup, readBackup, summarize } from '../src/save/transfer';

function filledSave(): SaveData {
  const s = emptySave();
  s.points = 1234;
  s.deviceId = 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee';
  s.tenants.eunseo = { affection: 100, clearedStage: 10, wins: 12, losses: 3, dating: true };
  s.tenants.hayeong = { affection: 40, clearedStage: 4, wins: 5, losses: 6, dating: false };
  s.seenScenes = ['prologue', 'eunseo_01', 'eunseo_10'];
  s.unlockedCG = ['eunseo_ending'];
  s.recentGames = [
    { tenantId: 'eunseo', stage: 10, won: true, playerWentGo: true, focus: 'gwang', score: 21 },
  ];
  s.stats = { totalGames: 26, wins: 17, losses: 9, bestScore: 21 };
  s.settings.rules = { ttiScoring: 'specSheet', bonusPiCount: 3 };
  s.settings.textSpeed = 0;
  return s;
}

describe('백업 코드', () => {
  beforeEach(() => {
    // Node 환경에 btoa/atob 가 없을 수 있다
    if (typeof globalThis.btoa === 'undefined') {
      globalThis.btoa = (s: string) => Buffer.from(s, 'binary').toString('base64');
      globalThis.atob = (s: string) => Buffer.from(s, 'base64').toString('binary');
    }
  });

  it('만든 코드를 다시 읽으면 원래 저장 데이터가 그대로 나온다', async () => {
    const save = filledSave();
    const code = await makeBackup(save, save.deviceId);
    const r = await readBackup(code);

    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.backup.save.points).toBe(1234);
    expect(r.backup.save.tenants.eunseo).toEqual(save.tenants.eunseo);
    expect(r.backup.save.tenants.hayeong).toEqual(save.tenants.hayeong);
    expect(r.backup.save.seenScenes).toEqual(save.seenScenes);
    expect(r.backup.save.unlockedCG).toEqual(save.unlockedCG);
    expect(r.backup.save.recentGames).toEqual(save.recentGames);
    expect(r.backup.save.stats).toEqual(save.stats);
    expect(r.backup.save.settings.rules).toEqual(save.settings.rules);
    expect(r.backup.save.settings.textSpeed).toBe(0);
  });

  it('코드에 만든 기기와 요약이 들어 있다', async () => {
    const save = filledSave();
    const code = await makeBackup(save, save.deviceId);
    const r = await readBackup(code);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.backup.meta.deviceId).toBe(save.deviceId);
    expect(r.backup.meta.summary).toBe(summarize(save));
    expect(new Date(r.backup.meta.createdAt).getTime()).toBeGreaterThan(0);
  });

  it('앞뒤 공백과 줄바꿈이 섞여도 읽는다 (메신저로 주고받을 때)', async () => {
    const code = await makeBackup(filledSave(), 'dev');
    const messy = `\n  ${code.slice(0, 40)}\n${code.slice(40)}  \n`;
    const r = await readBackup(messy);
    expect(r.ok).toBe(true);
  });

  it('한 글자라도 깨지면 거부한다', async () => {
    const code = await makeBackup(filledSave(), 'dev');
    const idx = Math.floor(code.length / 2);
    const broken = `${code.slice(0, idx)}${code[idx] === 'A' ? 'B' : 'A'}${code.slice(idx + 1)}`;
    const r = await readBackup(broken);
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.reason).toContain('손상');
  });

  it('잘린 코드를 거부한다', async () => {
    const code = await makeBackup(filledSave(), 'dev');
    const r = await readBackup(code.slice(0, code.length - 12));
    expect(r.ok).toBe(false);
  });

  it('빈 값과 엉뚱한 문자열을 거부한다', async () => {
    expect((await readBackup('')).ok).toBe(false);
    expect((await readBackup('안녕하세요')).ok).toBe(false);
    expect((await readBackup('ABC.DEF.GHI')).ok).toBe(false);
  });

  it('하숙생이 추가돼도 옛 백업을 읽을 수 있다', async () => {
    const save = filledSave();
    // 아직 존재하지 않는 하숙생만 들어있는 옛 저장본을 흉내낸다
    const old = { ...save, tenants: { eunseo: save.tenants.eunseo } };
    const code = await makeBackup(old as SaveData, 'dev');
    const r = await readBackup(code);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    // 빠진 하숙생은 초기값으로 채워진다
    expect(Object.keys(r.backup.save.tenants).length).toBeGreaterThan(1);
    expect(r.backup.save.tenants.yoon.clearedStage).toBe(0);
    expect(r.backup.save.tenants.eunseo.clearedStage).toBe(10);
  });

  it('진행 요약이 사람이 읽을 수 있게 나온다', () => {
    const s = summarize(filledSave());
    expect(s).toContain('2명 진행');
    expect(s).toContain('총 14단계');
    expect(s).toContain('연애 1명');
    expect(s).toContain('26판');
  });
});

describe('기기 코드 표시', () => {
  it('UUID 에서 읽기 쉬운 코드를 만든다', () => {
    expect(shortCodeOf('4f2a91c7-0000-4000-8000-000000000000')).toBe('HSG-4F2A-91C7');
  });

  it('형식이 이상한 값이 와도 죽지 않는다', () => {
    expect(shortCodeOf('')).toBe('HSG-0000-0000');
    expect(shortCodeOf('zzzz')).toBe('HSG-0000-0000');
  });
});
