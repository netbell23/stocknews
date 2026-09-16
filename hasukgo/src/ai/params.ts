/**
 * AI 난이도 파라미터.
 * 하숙생 순번(1~10) x 단계(1~10) 의 2차원 곡선으로 만들어진다.
 */

/** 점수 항목별 선호도. 하숙생마다 "맞고 스타일"을 만드는 핵심. */
export interface AiWeights {
  gwang: number;
  yeol: number;
  tti: number;
  pi: number;
  godori: number;
  hongdan: number;
  cheongdan: number;
  chodan: number;
}

export interface AiParams {
  /** 최선수 대신 아무 수나 낼 확률 (0~1) */
  mistakeRate: number;
  /** 상대 손패/남은 덱 추론 강도 (0~1). 높을수록 상대가 노리는 패를 막는다 */
  inference: number;
  /** 고 성향 (0~1). 높을수록 점수가 나도 계속 간다 */
  greed: number;
  /** 이 점수 이상이면 스톱을 선호 */
  stopScore: number;
  /** 플레이어의 최근 습관을 반영하는 강도 (0~1) */
  patternLearning: number;
  /** 흔들기/폭탄을 적극적으로 쓰는 정도 (0~1) */
  aggression: number;
  weights: AiWeights;
}

export const NEUTRAL_WEIGHTS: AiWeights = {
  gwang: 1,
  yeol: 1,
  tti: 1,
  pi: 1,
  godori: 1,
  hongdan: 1,
  cheongdan: 1,
  chodan: 1,
};

/**
 * 하숙생 순번(1~10)과 단계(1~10)로 기본 파라미터를 만든다.
 * - 순번이 뒤일수록, 단계가 높을수록 실수가 줄고 추론이 강해진다.
 * - 1번 1단계 = 실수율 50%, 10번 10단계 = 실수율 0%
 */
export function curveParams(tenantOrder: number, stage: number): AiParams {
  const t = (tenantOrder - 1) / 9; // 0~1
  const s = (stage - 1) / 9; // 0~1
  // 두 축을 합성. 순번 가중 0.6, 단계 가중 0.4
  const skill = Math.min(1, t * 0.6 + s * 0.4);

  return {
    mistakeRate: Math.max(0, 0.5 * (1 - skill)),
    inference: skill,
    greed: 0.3 + 0.2 * s,
    stopScore: Math.round(10 - 3 * skill),
    patternLearning: Math.max(0, (skill - 0.8) * 5), // 최상위 구간에서만 켜진다
    aggression: 0.2 + 0.5 * skill,
    weights: { ...NEUTRAL_WEIGHTS },
  };
}

/** 하숙생 고유 성향을 곡선 위에 덧씌운다 */
export function applyStyle(base: AiParams, style: Partial<AiParams>): AiParams {
  return {
    ...base,
    ...style,
    weights: { ...base.weights, ...(style.weights ?? {}) },
  };
}
