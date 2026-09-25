/**
 * 하숙생 맞고 - 규칙 엔진 타입 정의
 * 이 파일은 순수 로직 전용. React/DOM/Canvas 에 절대 의존하지 않는다.
 */

/** 화투 패의 대분류 */
export type CardKind =
  | 'gwang' // 광
  | 'yeol' // 열끗 (동물/십끗)
  | 'tti' // 띠
  | 'pi'; // 피

/** 띠의 종류 */
export type TtiKind =
  | 'hong' // 홍단 (1,2,3월)
  | 'cheong' // 청단 (6,9,10월)
  | 'cho' // 초단 (4,5,7월)
  | 'bi'; // 비띠 (12월)

export interface Card {
  /** 고유 id. 'm{월}-{index}' 또는 보너스는 'bonus-N' */
  id: string;
  /** 1~12월. 보너스패는 0 */
  month: number;
  kind: CardKind;
  /** 띠인 경우에만 */
  tti?: TtiKind;
  /** 광 중 비광(12월)인가 */
  isBiGwang?: boolean;
  /** 고도리 구성패(2월 휘파람새, 4월 두견새, 8월 기러기) */
  isGodori?: boolean;
  /** 피 환산 점수. 일반피 1, 쌍피 2, 보너스 쌍피 2(옵션에 따라 3) */
  piValue?: number;
  /** 9월 국진(술잔). 열끗 또는 쌍피로 선택 가능 */
  isGukjin?: boolean;
  /** 보너스패 여부 */
  isBonus?: boolean;
  /** 한글 이름 (UI/디버그용) */
  name: string;
}

export type PlayerId = 0 | 1;

/** 국진을 어떻게 쓸지에 대한 플레이어의 선택 */
export type GukjinUse = 'yeol' | 'ssangpi';

/** 한 플레이어가 먹어둔 패 */
export interface Captured {
  gwang: Card[];
  yeol: Card[];
  tti: Card[];
  pi: Card[];
}

/** 점수 계산 결과 상세 */
export interface ScoreBreakdown {
  gwangScore: number;
  gwangLabel: string | null;
  ttiScore: number;
  ttiLabels: string[];
  yeolScore: number;
  yeolLabels: string[];
  piScore: number;
  piCount: number;
  /** 고/스톱 판정에 쓰이는 기본 점수 (배수/박 적용 전) */
  base: number;
  /** 총통 성립 시 월 */
  chongtong: number | null;
}

/** 최종 정산 결과 */
export interface Settlement {
  winner: PlayerId | null; // null = 나가리
  breakdown: ScoreBreakdown | null;
  /** 배수 적용 전 기본점 */
  base: number;
  /** 고 횟수에 따른 가산/배수 */
  goCount: number;
  goBonus: number; // 덧셈 가산분
  multiplier: number; // 곱셈 배수 (고3회~, 박, 흔들기, 폭탄 포함)
  /** 적용된 배수/가산 사유 목록 (UI 연출용) */
  reasons: string[];
  /** 최종 점수 */
  total: number;
}

/** 규칙 옵션 토글 — 애매한 해석은 전부 여기로 뺀다 */
export interface RuleOptions {
  /**
   * 띠 점수 계산 방식.
   * 'standard'  : 띠 5장 1점 + 1장당 1점, 홍단/청단/초단 각 3점 (한국 온라인 맞고 표준)
   * 'specSheet' : 기획서 표기 그대로 띠 5장 5점 + 1장당 1점, 단 홍/청/초단 3점은 동일 적용
   */
  ttiScoring: 'standard' | 'specSheet';
  /**
   * 따닥 판정 방식.
   * true  : 낸 패와 뒤집은 패가 **같은 월**이어서 그 월 4장을 한 턴에 쓸어야 따닥
   *         (한국 온라인 맞고 표준)
   * false : 한 턴에 손패로도 먹고 뒤집어서도 먹으면 월이 달라도 따닥
   */
  ttadakSameMonth: boolean;
  /** 3광에 비광이 포함되면 2점 */
  biGwangPenalty: boolean;
  /** 고 3회부터 곱셈 배수 적용 */
  goMultiplierFrom3: boolean;
  /** 피박 (상대 피 5장 이하일 때 2배) */
  piBak: boolean;
  /** 광박 (상대 광 0장인데 광점수로 이겼을 때 2배) */
  gwangBak: boolean;
  /** 멍박 (상대 열끗 0장인데 열끗 7장 이상으로 이겼을 때 2배) */
  mengBak: boolean;
  /** 고박 (고 선언 후 상대에게 지면 상대가 2배로 가져감) */
  goBak: boolean;
  /** 흔들기 허용 (같은 월 3장 보유 선언 → 2배) */
  heundeulgi: boolean;
  /** 폭탄 허용 (같은 월 3장 한번에 투하) */
  bomb: boolean;
  /** 총통 (같은 월 4장) 즉시 승리 */
  chongtong: boolean;
  /** 나가리 시 다음 판 2배 */
  nagariDouble: boolean;
  /** 보너스 쌍피 매수 (0~3) */
  bonusPiCount: number;
  /** 보너스패 피 환산값 */
  bonusPiValue: 2 | 3;
  /** 국진을 쌍피로 쓸 수 있게 허용 */
  gukjinOption: boolean;
  /** 승리에 필요한 최소 점수 */
  minScoreToStop: number;
  /** 멍박 판정에 필요한 열끗 수 */
  mengBakYeolThreshold: number;
  /** 피박 판정 기준 (상대 피 점수 이하) */
  piBakThreshold: number;
}

export const DEFAULT_RULES: RuleOptions = {
  ttiScoring: 'standard',
  ttadakSameMonth: true,
  biGwangPenalty: true,
  goMultiplierFrom3: true,
  piBak: true,
  gwangBak: true,
  mengBak: true,
  goBak: true,
  heundeulgi: true,
  bomb: true,
  chongtong: true,
  nagariDouble: true,
  bonusPiCount: 2,
  bonusPiValue: 2,
  gukjinOption: true,
  minScoreToStop: 7,
  mengBakYeolThreshold: 7,
  piBakThreshold: 5,
};

/** 한 판의 진행 국면 */
export type Phase =
  | 'dealing'
  | 'awaitPlay' // 손패에서 한 장 내기
  | 'awaitChoice' // 바닥에 같은 월 2장 → 어느 것을 먹을지 선택
  | 'awaitGoStop' // 7점 이상 → 고/스톱 선택
  | 'awaitGukjin' // 국진 용도 선택
  | 'ended';

/** 한 수의 결과로 발생한 이벤트 (연출/대사 트리거) */
export type GameEventType =
  | 'jjok' // 쪽 (낸 패와 뒤집은 패가 같은 월, 바닥에 없던 경우)
  | 'ttadak' // 따닥 (같은 월 4장을 한 턴에)
  | 'ppeok' // 뻑
  | 'jappeok' // 자뻑
  | 'sseul' // 쓸 (바닥 싹쓸이)
  | 'bomb'
  | 'heundeulgi'
  | 'chongtong'
  | 'go'
  | 'stop'
  | 'bonus' // 보너스패 획득
  | 'steal' // 피 1장 상납
  | 'nagari';

export interface GameEvent {
  type: GameEventType;
  player: PlayerId;
  detail?: string;
}

export interface PlayerState {
  hand: Card[];
  captured: Captured;
  goCount: number;
  /** 흔들기 선언한 월 목록 */
  shaken: number[];
  /** 폭탄 사용 횟수 (폭탄 1회당 상납 1장) */
  bombCount: number;
  /** 국진 용도 선택 */
  gukjinUse: GukjinUse;
  /** 마지막 고 선언 시점의 점수 (점수가 올라야 다시 고/스톱 가능) */
  scoreAtLastGo: number;
}

/** 한 턴을 해소하는 동안의 중간 상태 */
export interface TurnContext {
  player: PlayerId;
  /** 손에서 낸 패 */
  playedCard: Card | null;
  /** 폭탄으로 함께 낸 나머지 패 */
  bombCards: Card[];
  /** 낸 패가 바닥에 그냥 깔렸는가 */
  playedWentToField: boolean;
  /** 낸 패로 먹은 카드들 (낸 패 포함) */
  fromHandCapture: Card[];
  /** 뒤집은 패 */
  flipCard: Card | null;
  /** 뒤집은 패로 먹은 카드들 (뒤집은 패 포함) */
  fromFlipCapture: Card[];
  /** 이번 턴 뻑 발생 */
  ppeok: boolean;
  /** 보너스패로 추가 뒤집기가 발생했는가 */
  bonusFlips: Card[];
  stage: 'hand' | 'flip' | 'done';
}

export interface GameState {
  rules: RuleOptions;
  deck: Card[];
  field: Card[];
  players: [PlayerState, PlayerState];
  turn: PlayerId;
  phase: Phase;
  /** 직전 수에서 발생한 이벤트들 */
  events: GameEvent[];
  /** 뻑으로 바닥에 묶여있는 월 -> 뻑을 만든 사람 (자뻑 판정용) */
  ppeokPiles: Record<number, PlayerId>;
  /** 턴 해소 중간 상태 */
  turnCtx: TurnContext | null;
  /** awaitChoice 시 후보 */
  pendingChoice: {
    played: Card;
    candidates: Card[];
    /** 손패에서 낸 것인지 덱에서 뒤집은 것인지 */
    source: 'hand' | 'deck';
  } | null;
  /** 결과 */
  settlement: Settlement | null;
  /** 판 배수 (나가리 누적 등) */
  roundMultiplier: number;
  /** 턴 카운터 (무한루프 방지 및 로그용) */
  turnCount: number;
  /** 로그 */
  log: string[];
}
