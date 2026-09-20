/**
 * 로컬 저장. 진행도 / 호감도 / 포인트 / 전적 / 도감 해금.
 * localStorage 가 막혀 있어도(사생활 보호 모드 등) 게임이 죽지 않도록 전부 try/catch.
 */
import type { PlayerProfile } from '../ai/ai';
import type { RuleOptions } from '../engine/types';
import { TENANTS } from '../data/tenants';

const KEY = 'hasukgo.save.v1';
const SAVE_VERSION = 1;

export interface TenantProgress {
  /** 0~100 */
  affection: number;
  /** 클리어한 최고 단계 0~10 */
  clearedStage: number;
  wins: number;
  losses: number;
  /** 10단계를 깨고 연애를 시작했는가 */
  dating: boolean;
}

export interface GameRecord {
  tenantId: string;
  stage: number;
  won: boolean;
  /** 이번 판에서 오간 포인트 (이기면 +, 지면 -) */
  payout: number;
  /** 플레이어가 고를 선언했는가 */
  playerWentGo: boolean;
  /** 플레이어가 주로 모은 항목 */
  focus: 'gwang' | 'yeol' | 'tti' | 'pi';
  score: number;
}

export interface Settings {
  rules: Partial<RuleOptions>;
  /** 전원 공략 가능 모드 (끄면 연애 시작 후 다른 하숙생은 친구 루트) */
  allRoutes: boolean;
  bgmVolume: number;
  sfxVolume: number;
  /** 글자 속도 ms/자. 0 이면 즉시 */
  textSpeed: number;
}

export interface SaveData {
  version: number;
  /** 이 저장 데이터를 만든 기기의 ID. 다른 기기 데이터를 가져왔는지 판별한다. */
  deviceId: string;
  /** 마지막으로 저장한 시각 (ms). localStorage/IndexedDB 중 어느 쪽이 최신인지 고를 때 쓴다. */
  savedAt: number;
  points: number;
  tenants: Record<string, TenantProgress>;
  /** 본 시나리오 씬 id */
  seenScenes: string[];
  /** 해금된 엔딩 CG */
  unlockedCG: string[];
  /** 최근 20판 기록 (AI 패턴 학습용) */
  recentGames: GameRecord[];
  settings: Settings;
  /** 상점에서 산 것들 */
  owned: string[];
  /** 지금 쓰고 있는 화패 스킨 / 마루 테마 */
  equipped: { cards: string; theme: string };
  stats: {
    totalGames: number;
    wins: number;
    losses: number;
    bestScore: number;
    /** 판돈으로 딴 총액 / 잃은 총액 */
    pointsWon: number;
    pointsLost: number;
    /** 한 판 최고 획득 */
    biggestPot: number;
  };
}

export const DEFAULT_SETTINGS: Settings = {
  rules: {},
  allRoutes: true,
  bgmVolume: 0.5,
  sfxVolume: 0.7,
  textSpeed: 25,
};

export function emptySave(): SaveData {
  const tenants: Record<string, TenantProgress> = {};
  for (const t of TENANTS) {
    tenants[t.id] = { affection: 0, clearedStage: 0, wins: 0, losses: 0, dating: false };
  }
  return {
    version: SAVE_VERSION,
    deviceId: '',
    savedAt: 0,
    points: 300,
    tenants,
    seenScenes: [],
    unlockedCG: [],
    recentGames: [],
    settings: { ...DEFAULT_SETTINGS },
    owned: [],
    equipped: { cards: 'classic', theme: 'maru' },
    stats: {
      totalGames: 0,
      wins: 0,
      losses: 0,
      bestScore: 0,
      pointsWon: 0,
      pointsLost: 0,
      biggestPot: 0,
    },
  };
}

export function load(): SaveData {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptySave();
    const parsed = JSON.parse(raw) as SaveData;
    return migrate(parsed);
  } catch {
    return emptySave();
  }
}

export function save(data: SaveData): void {
  const stamped = { ...data, savedAt: Date.now() };
  try {
    localStorage.setItem(KEY, JSON.stringify(stamped));
  } catch {
    // 저장 실패는 조용히 넘긴다. 진행은 메모리에서 계속된다.
  }
  // IndexedDB 에도 같이 넣는다. iOS Safari 는 홈 화면에 추가하지 않은 사이트의
  // localStorage 를 일정 기간 뒤 비우기 때문에, 한쪽만 믿으면 진행도가 날아간다.
  void mirrorWrite(stamped);
}

// ── IndexedDB 이중화 ──────────────────────────

const DB_NAME = 'hasukgo';
const DB_STORE = 'meta';
const DB_SAVE_KEY = 'save';

function openDb(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    try {
      if (typeof indexedDB === 'undefined') return resolve(null);
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(DB_STORE)) db.createObjectStore(DB_STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
      setTimeout(() => resolve(null), 1500);
    } catch {
      resolve(null);
    }
  });
}

async function mirrorWrite(data: SaveData): Promise<void> {
  const db = await openDb();
  if (!db) return;
  try {
    const tx = db.transaction(DB_STORE, 'readwrite');
    tx.objectStore(DB_STORE).put(JSON.stringify(data), DB_SAVE_KEY);
  } catch {
    /* 무시 */
  }
}

async function mirrorRead(): Promise<SaveData | null> {
  const db = await openDb();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(DB_STORE, 'readonly');
      const req = tx.objectStore(DB_STORE).get(DB_SAVE_KEY);
      req.onsuccess = () => {
        try {
          resolve(req.result ? (JSON.parse(req.result as string) as SaveData) : null);
        } catch {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

/**
 * localStorage 와 IndexedDB 양쪽을 보고 최신 것을 쓴다.
 * 한쪽이 비어 있으면 다른 쪽에서 복구한다.
 */
export async function loadBest(): Promise<{ data: SaveData; recovered: boolean }> {
  const local = load();
  const mirror = await mirrorRead();
  if (!mirror) return { data: local, recovered: false };

  const localEmpty = local.stats.totalGames === 0 && local.savedAt === 0;
  if (localEmpty && mirror.stats.totalGames > 0) {
    // localStorage 가 비워졌다 -> IndexedDB 에서 되살린다
    const restored = migrate(mirror);
    save(restored);
    return { data: restored, recovered: true };
  }
  if ((mirror.savedAt ?? 0) > (local.savedAt ?? 0)) {
    return { data: migrate(mirror), recovered: false };
  }
  return { data: local, recovered: false };
}

/** 백업 코드로 복원할 때처럼, 통째로 갈아끼운다 */
export function replaceSave(data: SaveData): SaveData {
  const next = migrate(data);
  save(next);
  return next;
}

export function resetSave(): SaveData {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* noop */
  }
  void (async () => {
    const db = await openDb();
    if (!db) return;
    try {
      db.transaction(DB_STORE, 'readwrite').objectStore(DB_STORE).delete(DB_SAVE_KEY);
    } catch {
      /* noop */
    }
  })();
  return emptySave();
}

/** 예전 저장 파일을 현재 구조로 맞춘다. 새 하숙생이 추가돼도 깨지지 않는다. */
function migrate(data: SaveData): SaveData {
  const base = emptySave();
  const merged: SaveData = {
    ...base,
    ...data,
    version: SAVE_VERSION,
    tenants: { ...base.tenants, ...(data.tenants ?? {}) },
    settings: { ...base.settings, ...(data.settings ?? {}) },
    stats: { ...base.stats, ...(data.stats ?? {}) },
    seenScenes: data.seenScenes ?? [],
    unlockedCG: data.unlockedCG ?? [],
    recentGames: data.recentGames ?? [],
    deviceId: data.deviceId ?? '',
    savedAt: data.savedAt ?? 0,
    owned: data.owned ?? [],
    equipped: { ...base.equipped, ...(data.equipped ?? {}) },
  };
  // 데이터에서 사라진 하숙생 항목은 버린다
  for (const id of Object.keys(merged.tenants)) {
    if (!TENANTS.some((t) => t.id === id)) delete merged.tenants[id];
  }
  return merged;
}

/** 클리어 단계 맵 (해금 판정용) */
export function clearedStages(data: SaveData): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [id, p] of Object.entries(data.tenants)) out[id] = p.clearedStage;
  return out;
}

/** 최근 20판에서 플레이어 습관을 뽑는다 (윤/도희의 패턴 학습용) */
export function profileFrom(records: GameRecord[]): PlayerProfile {
  const recent = records.slice(-20);
  if (recent.length === 0) {
    return { goRate: 0.3, preference: { gwang: 0.25, yeol: 0.25, tti: 0.25, pi: 0.25 }, samples: 0 };
  }
  const goRate = recent.filter((r) => r.playerWentGo).length / recent.length;
  const counts = { gwang: 0, yeol: 0, tti: 0, pi: 0 };
  for (const r of recent) counts[r.focus]++;
  const total = recent.length;
  return {
    goRate,
    preference: {
      gwang: counts.gwang / total,
      yeol: counts.yeol / total,
      tti: counts.tti / total,
      pi: counts.pi / total,
    },
    samples: recent.length,
  };
}

/**
 * 판 결과를 저장 데이터에 반영한다.
 *
 * 포인트는 맞고 판돈처럼 오간다 — 이기면 내 점수 x 점당, 지면 상대 점수 x 점당.
 * 고·피박·광박·고박의 배수가 이미 점수에 실려 있으므로 그대로 포인트가 된다.
 * 지더라도 호감도와 단계는 그대로다. 잃는 것은 포인트뿐이다.
 */
export function applyResult(data: SaveData, record: GameRecord, opts: { reward: number }): SaveData {
  const t = data.tenants[record.tenantId];
  if (!t) return data;
  const next: SaveData = {
    ...data,
    tenants: { ...data.tenants },
    recentGames: [...data.recentGames, record].slice(-20),
    stats: { ...data.stats },
  };
  const prog: TenantProgress = { ...t };

  next.stats.totalGames++;

  // 판돈 정산
  next.points = Math.max(0, next.points + record.payout);
  if (record.payout > 0) {
    next.stats.pointsWon += record.payout;
    next.stats.biggestPot = Math.max(next.stats.biggestPot, record.payout);
  } else {
    next.stats.pointsLost += -record.payout;
  }

  if (record.won) {
    next.stats.wins++;
    prog.wins++;
    // 단계를 처음 깼을 때만 클리어 보너스와 호감도가 붙는다
    if (record.stage === prog.clearedStage + 1) {
      prog.clearedStage = record.stage;
      prog.affection = Math.min(100, prog.affection + 10);
      next.points += opts.reward;
      if (record.stage === 10) prog.dating = true;
    }
  } else {
    next.stats.losses++;
    prog.losses++;
  }
  next.stats.bestScore = Math.max(next.stats.bestScore, record.score);
  next.tenants[record.tenantId] = prog;
  return next;
}

/** 씬을 봤다고 기록 */
export function markSceneSeen(data: SaveData, sceneId: string, cg?: string | null): SaveData {
  const seen = data.seenScenes.includes(sceneId) ? data.seenScenes : [...data.seenScenes, sceneId];
  const cgs = cg && !data.unlockedCG.includes(cg) ? [...data.unlockedCG, cg] : data.unlockedCG;
  return { ...data, seenScenes: seen, unlockedCG: cgs };
}

/** 가장 만만한 상대의 최소 보유 포인트. 이보다 적으면 아무 자리에도 앉을 수 없다. */
export function cheapestEntry(): number {
  return Math.min(...TENANTS.map((t) => t.rate * 10));
}

/**
 * 포인트가 말라 아무 승부도 못 하는 상태인가.
 * 포인트를 버는 길이 승부뿐이라, 이 상태가 되면 스스로 빠져나올 수 없다.
 */
export function isStuck(data: SaveData): boolean {
  return data.points < cheapestEntry();
}

/** 어머니께 용돈 받기. 막힌 상태에서만 쓸 수 있다. */
export const ALLOWANCE = 100;

/**
 * 질 때 무는 몫. 딴 사람이 받는 만큼을 다 물리면 잘하는 사람도 결국 마른다.
 * 하숙집 인심이라는 설정으로 7할만 물려, 자기 수준에 맞는 상대에게는
 * 꾸준히 벌 수 있고 벅찬 상대에게는 잘해야 본전이 되게 한다.
 */
export const LOSS_FACTOR = 0.7;

/** 이번 판에 오갈 포인트. 이기면 +, 지면 -. */
export function payoutFor(opts: {
  won: boolean;
  draw: boolean;
  settlementTotal: number;
  rate: number;
}): number {
  if (opts.draw) return 0;
  const pot = opts.settlementTotal * opts.rate;
  return opts.won ? Math.round(pot) : -Math.round(pot * LOSS_FACTOR);
}

export function takeAllowance(data: SaveData): SaveData {
  if (!isStuck(data)) return data;
  return { ...data, points: data.points + ALLOWANCE };
}

/** 전원 10단계 클리어 여부 (히든 엔딩 조건) */
export function allCleared(data: SaveData): boolean {
  return TENANTS.every((t) => (data.tenants[t.id]?.clearedStage ?? 0) >= 10);
}
