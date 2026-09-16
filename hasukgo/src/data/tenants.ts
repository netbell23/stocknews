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
 * 난이도 곡선 위에 하숙생 고유 스타일을 곱해서 얹는다.
 */
export function paramsFor(tenant: Tenant, stage: number): AiParams {
  const base = curveParams(tenant.order, stage);
  const st = tenant.style;
  return applyStyle(base, {
    mistakeRate: clamp01(base.mistakeRate * (st.mistakeScale ?? 1)),
    inference: clamp01(base.inference * (st.inferenceScale ?? 1)),
    greed: clamp01(base.greed * (st.greedScale ?? 1)),
    aggression: clamp01(base.aggression * (st.aggressionScale ?? 1)),
    stopScore: Math.max(7, base.stopScore + (st.stopScoreDelta ?? 0)),
    weights: st.weights as AiParams['weights'],
  });
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

/** 단계 클리어 보상 포인트 */
export function rewardFor(tenant: Tenant, stage: number): number {
  return tenant.reward.base + tenant.reward.perStage * (stage - 1);
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
