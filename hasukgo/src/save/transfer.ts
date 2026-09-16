/**
 * 저장 데이터 백업 / 복원.
 *
 * 서버가 없으므로 진행도 전체를 문자열 하나로 뽑아낸다.
 * 이 코드만 있으면 브라우저 데이터를 지웠거나 폰을 바꿔도 그대로 이어서 할 수 있다.
 *
 * 형식:  HSG1.<payload>.<checksum>
 *   payload  = 축약한 JSON 을 deflate 압축 후 base64url
 *   checksum = payload 의 FNV-1a 해시 (오타/잘림 검출용)
 * CompressionStream 이 없는 브라우저에서는 압축 없이 담는다(HSG0).
 */
import type { SaveData } from './storage';
import { emptySave } from './storage';

const MAGIC_Z = 'HSG1';
const MAGIC_RAW = 'HSG0';

export interface TransferMeta {
  /** 만든 기기의 ID */
  deviceId: string;
  /** 만든 시각 (ISO) */
  createdAt: string;
  /** 사람이 확인할 요약 */
  summary: string;
}

export interface Backup {
  meta: TransferMeta;
  save: SaveData;
}

// ── 인코딩 유틸 ────────────────────────────────

function toBase64Url(bytes: Uint8Array): string {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(s: string): Uint8Array {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/');
  const pad = b64.length % 4 ? '='.repeat(4 - (b64.length % 4)) : '';
  const bin = atob(b64 + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function checksum(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36).toUpperCase().padStart(7, '0');
}

async function deflate(text: string): Promise<Uint8Array | null> {
  try {
    if (typeof CompressionStream === 'undefined') return null;
    const cs = new CompressionStream('deflate-raw');
    const src = new TextEncoder().encode(text);
    const stream = new Blob([src.buffer as ArrayBuffer]).stream().pipeThrough(cs);
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch {
    return null;
  }
}

async function inflate(bytes: Uint8Array): Promise<string | null> {
  try {
    if (typeof DecompressionStream === 'undefined') return null;
    const ds = new DecompressionStream('deflate-raw');
    const stream = new Blob([bytes.buffer as ArrayBuffer]).stream().pipeThrough(ds);
    return new TextDecoder().decode(await new Response(stream).arrayBuffer());
  } catch {
    return null;
  }
}

// ── 백업 만들기 ────────────────────────────────

/** 진행 상황을 한 줄로 요약 (복원 전에 무엇을 덮어쓰는지 보여주기 위함) */
export function summarize(save: SaveData): string {
  const cleared = Object.values(save.tenants).filter((t) => t.clearedStage > 0).length;
  const totalStages = Object.values(save.tenants).reduce((a, t) => a + t.clearedStage, 0);
  const dating = Object.values(save.tenants).filter((t) => t.dating).length;
  return `${cleared}명 진행 · 총 ${totalStages}단계 · 연애 ${dating}명 · ${save.points.toLocaleString()}P · ${save.stats.totalGames}판`;
}

export async function makeBackup(save: SaveData, deviceId: string): Promise<string> {
  const backup: Backup = {
    meta: { deviceId, createdAt: new Date().toISOString(), summary: summarize(save) },
    save,
  };
  const json = JSON.stringify(backup);
  const z = await deflate(json);
  if (z) {
    const payload = toBase64Url(z);
    return `${MAGIC_Z}.${payload}.${checksum(payload)}`;
  }
  const payload = toBase64Url(new TextEncoder().encode(json));
  return `${MAGIC_RAW}.${payload}.${checksum(payload)}`;
}

// ── 백업 읽기 ──────────────────────────────────

export type RestoreResult =
  | { ok: true; backup: Backup }
  | { ok: false; reason: string };

export async function readBackup(code: string): Promise<RestoreResult> {
  const cleaned = code.trim().replace(/\s+/g, '');
  if (!cleaned) return { ok: false, reason: '코드가 비어 있습니다.' };

  const parts = cleaned.split('.');
  if (parts.length !== 3) {
    return { ok: false, reason: '코드 형식이 올바르지 않습니다. 앞뒤가 잘리지 않았는지 확인해 주세요.' };
  }
  const [magic, payload, sum] = parts;
  if (magic !== MAGIC_Z && magic !== MAGIC_RAW) {
    return { ok: false, reason: '하숙생 맞고 백업 코드가 아닙니다.' };
  }
  if (checksum(payload) !== sum) {
    return { ok: false, reason: '코드가 손상됐습니다. 복사할 때 일부가 빠졌을 수 있습니다.' };
  }

  let json: string | null = null;
  try {
    const bytes = fromBase64Url(payload);
    json = magic === MAGIC_Z ? await inflate(bytes) : new TextDecoder().decode(bytes);
  } catch {
    return { ok: false, reason: '코드를 읽을 수 없습니다.' };
  }
  if (!json) {
    return { ok: false, reason: '이 브라우저에서는 압축된 코드를 풀 수 없습니다. 최신 브라우저에서 시도해 주세요.' };
  }

  let parsed: Backup;
  try {
    parsed = JSON.parse(json) as Backup;
  } catch {
    return { ok: false, reason: '코드 내용이 올바르지 않습니다.' };
  }
  if (!parsed?.save?.tenants || typeof parsed.save.points !== 'number') {
    return { ok: false, reason: '저장 데이터가 들어 있지 않습니다.' };
  }

  // 구버전 저장 파일이어도 현재 구조에 맞춰 채운다
  const base = emptySave();
  const save: SaveData = {
    ...base,
    ...parsed.save,
    tenants: { ...base.tenants, ...parsed.save.tenants },
    settings: { ...base.settings, ...(parsed.save.settings ?? {}) },
    stats: { ...base.stats, ...(parsed.save.stats ?? {}) },
  };
  return {
    ok: true,
    backup: {
      meta: parsed.meta ?? { deviceId: '(알 수 없음)', createdAt: '', summary: summarize(save) },
      save,
    },
  };
}

// ── 파일로 주고받기 ────────────────────────────

/** 백업 코드를 .txt 파일로 내려받는다 */
export function downloadBackup(code: string): void {
  const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '');
  const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `하숙생맞고-백업-${stamp}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** 클립보드 복사. 인앱 브라우저에서 막히는 경우가 있어 성공 여부를 돌려준다. */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* 아래 폴백 */
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  } catch {
    return false;
  }
}
