/**
 * 하숙생 데이터 스키마.
 * 밸런스·대사·시나리오는 전부 JSON 에 있고, 코드는 이 타입으로만 읽는다.
 */
import type { AiWeights } from '../ai/params';

/** 호감도 톤 구간. 0~30 / 31~70 / 71~100 */
export type Tone = 'low' | 'mid' | 'high';

/** 상황별 대사. 각 톤마다 3종 이상. */
export interface LineSet {
  low: string[];
  mid: string[];
  high: string[];
}

export interface TenantLines {
  /** 승부 시작 */
  matchStart: LineSet;
  /** 고 선언 */
  go: LineSet;
  /** 스톱 선언 */
  stop: LineSet;
  /** 뻑 냈을 때 */
  ppeok: LineSet;
  /** 쓸 당했을 때 */
  sseulVictim: LineSet;
  /** 하숙생이 이겼을 때 */
  win: LineSet;
  /** 하숙생이 졌을 때 */
  lose: LineSet;
  /** 호감 이벤트 진입 */
  affection: LineSet;
  /** 플레이어가 3연패 중일 때 주는 힌트 (톤 구분 없음) */
  hints: string[];
}

/** hints 를 제외한, 톤별 대사 세트를 가진 키들 */
export type LineSetKey = Exclude<keyof TenantLines, 'hints'>;

/** 하숙생 고유 스타일 (곡선 파라미터 위에 덧씌워진다) */
export interface TenantStyle {
  weights: Partial<AiWeights>;
  /** 곡선값에 곱해지는 보정. 1 이면 그대로. */
  greedScale?: number;
  inferenceScale?: number;
  aggressionScale?: number;
  mistakeScale?: number;
  /** 스톱 기준 점수 보정 (+면 더 오래 끈다) */
  stopScoreDelta?: number;
}

export interface StageEvent {
  stage: number;
  /** 시나리오 스크립트 파일 id. src/data/scripts/{id}.txt */
  scriptId: string;
  title: string;
  /** 선택지가 있는 이벤트인가 */
  hasChoice: boolean;
}

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface Tenant {
  id: string;
  order: number;
  name: string;
  nickname: string;
  age: number;
  job: string;
  room: string;
  season: Season;
  personality: [string, string, string];
  /** 맞고 스타일 한 줄 설명 (도감/선택 화면에 표시) */
  styleLabel: string;
  style: TenantStyle;
  /** 해금 조건. 빈 배열이면 처음부터 해금. */
  unlock: Array<{ tenantId: string; stage: number }>;
  /** 단계 클리어 시 포인트 보상 (기본값 + 단계 x 증가분) */
  reward: { base: number; perStage: number };
  /** 승부에 필요한 참가비 포인트 */
  entryCost: number;
  lines: TenantLines;
  events: StageEvent[];
  /** SVG 플레이스홀더 생성용 외형 파라미터 */
  look: {
    hair: string;
    hairStyle: 'long' | 'bob' | 'ponytail' | 'short' | 'braid' | 'bun' | 'wave';
    skin: string;
    outfits: [string, string, string];
    accent: string;
    /** 특징 소품 */
    prop: string;
  };
}

export interface TenantData {
  version: number;
  tenants: Tenant[];
}
