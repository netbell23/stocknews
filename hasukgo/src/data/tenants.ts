/** 하숙생 데이터 로더 + 조회 헬퍼 */
import raw from './tenants.json';
import { applyStyle, curveParams, type AiParams } from '../ai/params';
import type { Tenant, TenantData, Tone } from './types';

export const TENANT_DATA = raw as unknown as TenantData;
export const TENANTS: Tenant[] = TENANT_DATA.tenants;

export function getTenant(id: string): Tenant {
  const t = TENANTS.find((x) => x.id === id);
  if (!t) throw new Error(`unknown tenant: ${id}`);
  return t;
}

export function tenantByOrder(order: number): Tenant {
  const t = TENANTS.find((x) => x.order === order);
  if (!t) throw new Error(`no tenant at order ${order}`);
  return t;
}

/** 호감도를 대사 톤으로 변환 */
export function toneOf(affection: number): Tone {
  if (affection <= 30) return 'low';
  if (affection <= 70) return 'mid';
  return 'high';
}

/**
 * 하숙생 + 단계 조합의 실제 AI 파라미터.
 * 난이도 곡선 위에 하숙생 고유 스타일을 얹는다.
 *
 * 스타일 배율은 절반만 먹인다. 윤의 mistakeScale 0.3 을 그대로 곱하면
 * 1단계에서 이미 실수율이 0.13 이라, 10단계까지 올라가도 달라질 폭이
 * 남지 않는다 — 열 판을 이겨도 상대가 그대로인 셈이다.
 * 성격은 드러나되 단계가 주는 진도를 덮지 않을 만큼만 민다.
 */
const STYLE_PULL = 0.55;
const damp = (scale: number | undefined): number => 1 + ((scale ?? 1) - 1) * STYLE_PULL;

export function paramsFor(tenant: Tenant, stage: number): AiParams {
  const base = curveParams(tenant.order, stage, TENANTS.length);
  const st = tenant.style;
  return applyStyle(base, {
    mistakeRate: clamp01(base.mistakeRate * damp(st.mistakeScale)),
    inference: clamp01(base.inference * damp(st.inferenceScale)),
    // 욕심과 흔들기는 성격 그 자체라 그대로 둔다
    greed: clamp01(base.greed * (st.greedScale ?? 1)),
    aggression: clamp01(base.aggression * (st.aggressionScale ?? 1)),
    stopScore: Math.max(7, base.stopScore + (st.stopScoreDelta ?? 0)),
    weights: st.weights as AiParams['weights'],
  });
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

/** 단계 클리어 보너스 */
export function rewardFor(tenant: Tenant, stage: number): number {
  return tenant.reward.base + tenant.reward.perStage * (stage - 1);
}

/**
 * 이 하숙생과 붙으려면 최소한 들고 있어야 하는 포인트.
 * 10점짜리 패배를 감당할 수 있어야 자리에 앉을 수 있다는 뜻이다.
 */
export function minStake(tenant: Tenant): number {
  return tenant.rate * 10;
}

/** 예상 판돈 범위 (승부 전 화면에 보여준다) */
export function stakeRange(tenant: Tenant): { typical: number; big: number } {
  return { typical: tenant.rate * 8, big: tenant.rate * 24 };
}

/** 해금 여부 판정 */
export function isUnlocked(tenant: Tenant, clearedStages: Record<string, number>): boolean {
  if (tenant.unlock.length === 0) return true;
  return tenant.unlock.every((u) => (clearedStages[u.tenantId] ?? 0) >= u.stage);
}

/** 아직 잠긴 하숙생의 해금 조건을 사람이 읽을 문장으로 */
export function unlockHint(tenant: Tenant): string {
  if (tenant.unlock.length === 0) return '처음부터 승부 가능';
  return tenant.unlock
    .map((u) => `${getTenant(u.tenantId).name} ${u.stage}단계 클리어`)
    .join(' + ');
}
