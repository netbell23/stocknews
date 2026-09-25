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
 *
 * 두 축의 무게는 같다. 은서를 10단계까지 끝낸 실력이면 윤의 1단계와
 * 비슷하게 붙는다는 뜻이고, 그래야 한 명을 끝까지 파는 것도 진도가 된다.
 *
 * 난이도는 세 가지로 만든다. 실제로 승률을 움직이는 것들만 남겼다.
 *  - mistakeRate : 판을 안 보고 아무 패나 내는 빈도. 가장 큰 축이다.
 *  - inference   : 바닥에 깔면 상대가 가져간다는 걸 아는가. 그리고
 *                  고를 질렀을 때 뒤집힐 위험이 보이는가.
 *  - greed       : 이겼는데도 더 가는가. 초보는 지르고, 고수는 접는다.
 *                  고는 점수를 걸고 하는 거래라 욕심이 곧 약점이 된다.
 *
 * 흔들기·폭탄(aggression)과 점수 항목 취향(weights)은 승패보다 판돈과
 * 스타일에 영향을 준다. 난이도 축이 아니라 하숙생의 성격이다.
 */
export function curveParams(tenantOrder: number, stage: number): AiParams {
  const t = (tenantOrder - 1) / 9; // 0~1
  const s = (stage - 1) / 9; // 0~1
  const skill = Math.min(1, 0.5 * t + 0.5 * s);

  return {
    // 0.7 제곱이라 초반에 빠르게 떨어지고 고단계에서 천천히 다듬어진다
    mistakeRate: 0.7 * Math.pow(1 - skill, 0.7),
    inference: skill,
    greed: 0.8 - 0.68 * skill,
    stopScore: Math.round(11 - 4 * skill),
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
