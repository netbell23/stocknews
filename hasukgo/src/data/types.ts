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
  /**
   * 점당 포인트. 맞고처럼 판돈이 점수에 비례한다.
   * 이기면 내 점수 x rate 를 받고, 지면 상대 점수 x rate 를 낸다.
   * 고·피박·광박·고박의 배수가 그대로 포인트에 실린다.
   */
  rate: number;
  /** 단계를 처음 깼을 때 주는 보너스 (기본값 + 단계 x 증가분) */
  reward: { base: number; perStage: number };
  lines: TenantLines;
  events: StageEvent[];
  /** 외형 파라미터. 그림은 전부 이 값으로 코드가 그린다. */
  look: TenantLook;
}

/** 앞머리 */
export type BangsStyle = 'straight' | 'split' | 'side' | 'curtain' | 'wispy';
/** 눈매 — 캐릭터를 가장 크게 가르는 요소 */
export type EyeStyle = 'round' | 'sharp' | 'droopy' | 'narrow' | 'sleepy';
/** 얼굴형 */
export type FaceStyle = 'round' | 'oval' | 'slim';
/** 체형 (어깨 너비) */
export type BuildStyle = 'petite' | 'average' | 'tall';
/** 얼굴 주변 장신구 */
export type Accessory = 'none' | 'glasses' | 'hairpin' | 'starpin' | 'ribbon' | 'earring' | 'band';
/** 의상 종류. 색은 outfits 에서, 모양은 여기서 정해진다. */
export type Garment =
  | 'hoodie'
  | 'tee'
  | 'shirt'
  | 'apron'
  | 'smock'
  | 'jersey'
  | 'blouse'
  | 'knit'
  | 'suit'
  | 'dress'
  | 'cardigan'
  | 'coat'
  | 'hanbok';
/** 손에 든 소품 */
export type PropArt =
  | 'none'
  | 'sketchbook'
  | 'ladle'
  | 'brush'
  | 'tape'
  | 'notebook'
  | 'telescope'
  | 'bag'
  | 'script'
  | 'mug'
  | 'hwatu';

export interface TenantLook {
  hair: string;
  hairStyle: 'long' | 'bob' | 'ponytail' | 'short' | 'braid' | 'bun' | 'wave';
  skin: string;
  /** 평상복 / 외출복 / 특별복 색 */
  outfits: [string, string, string];
  accent: string;
  /** 특징 소품 (설명용 문구) */
  prop: string;
  face: FaceStyle;
  eyes: EyeStyle;
  bangs: BangsStyle;
  build: BuildStyle;
  accessory: Accessory;
  /** 평상복 / 외출복 / 특별복 모양 */
  wear: [Garment, Garment, Garment];
  propArt: PropArt;
}

export interface TenantData {
  version: number;
  tenants: Tenant[];
}
