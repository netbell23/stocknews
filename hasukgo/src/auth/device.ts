/**
 * 기기 식별.
 *
 * ── 왜 하드웨어 고유번호를 쓰지 않는가 ──────────────────────────
 * 브라우저(H5)에는 IMEI·시리얼번호·MAC 주소를 읽는 API가 아예 없다. 표준에도 없고,
 * 어떤 브라우저도 제공하지 않는다. Capacitor 네이티브 앱의 Device.getId() 역시
 * 하드웨어 ID가 아니라 앱 설치마다 새로 생기는 UUID 를 돌려준다.
 * 브라우저 지문(fingerprint)으로 흉내낼 수는 있지만, Safari/Firefox 가 적극적으로 차단하고
 * 구글 플레이 정책과 개인정보보호법상 지속적 식별자로 쓰면 문제가 된다.
 *
 * 그래서 이 게임은 "재설정 가능한 1인칭 기기 ID" 방식을 쓴다.
 *  - 첫 실행에 무작위 UUID 를 발급한다. 개인정보를 전혀 담지 않는다.
 *  - localStorage 와 IndexedDB 에 이중으로 넣어, 한쪽이 지워져도 살아남게 한다.
 *  - 사용자가 브라우저 데이터를 지우면 사라진다. 그게 정상 동작이고,
 *    그 경우를 위해 백업 코드(src/save/transfer.ts)로 옮길 수 있게 해뒀다.
 */

const LS_KEY = 'hasukgo.device.v1';
const DB_NAME = 'hasukgo';
const DB_STORE = 'meta';
const DB_KEY = 'deviceId';

export interface DeviceInfo {
  /** 이 기기의 식별자 (무작위 UUID) */
  id: string;
  /** 사람이 읽을 짧은 표시용 코드. id 앞부분에서 뽑는다. */
  shortCode: string;
  /** 어디서 돌고 있는지 (표시용. 식별에는 쓰지 않는다) */
  platform: string;
  /** 이번 실행에서 새로 발급됐는가 */
  fresh: boolean;
  /** 저장이 막혀 있어 새로고침하면 사라지는 상태인가 */
  ephemeral: boolean;
}

function uuid(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
      const b = crypto.getRandomValues(new Uint8Array(16));
      b[6] = (b[6] & 0x0f) | 0x40;
      b[8] = (b[8] & 0x3f) | 0x80;
      const h = [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
      return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
    }
  } catch {
    /* 아래 폴백 */
  }
  // 최후 폴백. 암호학적으로 안전하진 않지만 기기 구분에는 충분하다.
  return `fb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** UUID 에서 사람이 부르기 쉬운 코드를 만든다. 예: HSG-4F2A-91C7 */
export function shortCodeOf(id: string): string {
  const hex = id.replace(/[^a-f0-9]/gi, '').toUpperCase();
  const a = hex.slice(0, 4) || '0000';
  const b = hex.slice(4, 8) || '0000';
  return `HSG-${a}-${b}`;
}

function lsGet(): string | null {
  try {
    return localStorage.getItem(LS_KEY);
  } catch {
    return null;
  }
}

function lsSet(v: string): boolean {
  try {
    localStorage.setItem(LS_KEY, v);
    return true;
  } catch {
    return false;
  }
}

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
      // 사생활 보호 모드 등에서 영원히 안 끝나는 경우가 있다
      setTimeout(() => resolve(null), 1500);
    } catch {
      resolve(null);
    }
  });
}

function idbGet(db: IDBDatabase, key: string): Promise<string | null> {
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(DB_STORE, 'readonly');
      const req = tx.objectStore(DB_STORE).get(key);
      req.onsuccess = () => resolve((req.result as string) ?? null);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

function idbSet(db: IDBDatabase, key: string, value: string): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).put(value, key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
      tx.onabort = () => resolve(false);
    } catch {
      resolve(false);
    }
  });
}

/** 실행 환경 요약. 화면에 보여주기 위한 것이고 식별에는 쓰지 않는다. */
export function platformLabel(): string {
  if (typeof navigator === 'undefined') return '알 수 없음';
  const ua = navigator.userAgent;
  const isCapacitor =
    typeof (globalThis as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor !== 'undefined';
  const os = /Android/i.test(ua)
    ? 'Android'
    : /iPhone|iPad|iPod/i.test(ua)
      ? 'iOS'
      : /Windows/i.test(ua)
        ? 'Windows'
        : /Mac OS X/i.test(ua)
          ? 'macOS'
          : '기타';
  if (isCapacitor) return `${os} 앱`;
  const inApp = /KAKAOTALK/i.test(ua)
    ? ' · 카카오톡 인앱'
    : /Line\//i.test(ua)
      ? ' · 라인 인앱'
      : /Instagram|FBAN|FBAV/i.test(ua)
        ? ' · SNS 인앱'
        : '';
  return `${os} 웹${inApp}`;
}

let cached: DeviceInfo | null = null;

/**
 * 이 기기의 ID 를 가져온다. 없으면 발급한다.
 * localStorage 와 IndexedDB 중 한쪽만 남아 있으면 다른 쪽을 복구한다.
 */
export async function getDevice(): Promise<DeviceInfo> {
  if (cached) return cached;

  const fromLs = lsGet();
  const db = await openDb();
  const fromDb = db ? await idbGet(db, DB_KEY) : null;

  let id = fromLs ?? fromDb ?? null;
  let fresh = false;
  if (!id) {
    id = uuid();
    fresh = true;
  }

  // 양쪽을 맞춰둔다. 한쪽이 지워져도 다음 실행에 복구된다.
  const lsOk = lsSet(id);
  let dbOk = false;
  if (db) dbOk = await idbSet(db, DB_KEY, id);

  cached = {
    id,
    shortCode: shortCodeOf(id),
    platform: platformLabel(),
    fresh,
    ephemeral: !lsOk && !dbOk,
  };
  return cached;
}

/** 동기 조회. getDevice 가 한 번 돌기 전에는 null 이다. */
export function peekDevice(): DeviceInfo | null {
  return cached;
}

/**
 * 기기 ID 를 새로 발급한다.
 * 다른 기기의 저장 데이터를 가져와 이 기기 것으로 삼을 때 쓴다.
 */
export async function reissueDevice(newId?: string): Promise<DeviceInfo> {
  const id = newId ?? uuid();
  lsSet(id);
  const db = await openDb();
  if (db) await idbSet(db, DB_KEY, id);
  cached = {
    id,
    shortCode: shortCodeOf(id),
    platform: platformLabel(),
    fresh: true,
    ephemeral: false,
  };
  return cached;
}

/** 저장 수단이 실제로 쓸 수 있는 상태인지 점검 */
export async function storageHealth(): Promise<{ localStorage: boolean; indexedDb: boolean }> {
  let ls = false;
  try {
    const probe = '__hasukgo_probe__';
    localStorage.setItem(probe, '1');
    ls = localStorage.getItem(probe) === '1';
    localStorage.removeItem(probe);
  } catch {
    ls = false;
  }
  const db = await openDb();
  let idb = false;
  if (db) idb = await idbSet(db, '__probe__', '1');
  return { localStorage: ls, indexedDb: idb };
}
