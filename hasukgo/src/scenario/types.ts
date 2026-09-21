/**
 * 시나리오 스크립트 타입.
 * 스크립트는 사람이 손으로 고치는 텍스트 파일이고, 엔진은 이 타입으로만 읽는다.
 * 포맷 설명은 README 의 "시나리오 스크립트 작성법" 참고.
 */

/** 표정 8종 */
export type Expression =
  | 'normal'
  | 'smile'
  | 'sulk'
  | 'surprise'
  | 'shy'
  | 'serious'
  | 'win'
  | 'lose';

export const EXPRESSIONS: Expression[] = [
  'normal',
  'smile',
  'sulk',
  'surprise',
  'shy',
  'serious',
  'win',
  'lose',
];

/** 스크립트에서 쓰는 한글 표정 태그 -> 내부 값 */
export const EXPRESSION_ALIAS: Record<string, Expression> = {
  기본: 'normal',
  웃음: 'smile',
  삐짐: 'sulk',
  놀람: 'surprise',
  부끄러움: 'shy',
  진지: 'serious',
  승리: 'win',
  패배: 'lose',
};

/** 배경 13종 */
export type BackgroundId =
  | 'maru'
  | 'kitchen'
  | 'hallway'
  | 'rooftop'
  | 'yard'
  | 'cvs'
  | 'campus'
  | 'street'
  | 'room'
  | 'annex'
  | 'festival'
  | 'station'
  | 'beach';

export const BACKGROUNDS: BackgroundId[] = [
  'maru',
  'kitchen',
  'hallway',
  'rooftop',
  'yard',
  'cvs',
  'campus',
  'street',
  'room',
  'annex',
  'festival',
  'station',
  'beach',
];

export type TimeOfDay = 'morning' | 'evening' | 'night';

export type BgmId =
  | 'title'
  | 'spring'
  | 'summer'
  | 'autumn'
  | 'winter'
  | 'warm'
  | 'tense'
  | 'sad'
  | 'confess'
  | 'none';

export interface ChoiceOption {
  text: string;
  /** 호감도 증감 */
  affection: number;
  /** 점프할 라벨 */
  goto: string | null;
}

export type Step =
  | { kind: 'say'; speaker: string; expression: Expression; text: string }
  | { kind: 'narrate'; text: string }
  | { kind: 'bg'; bg: BackgroundId; time: TimeOfDay }
  | { kind: 'bgm'; bgm: BgmId }
  | { kind: 'sfx'; sfx: string }
  | { kind: 'cg'; cg: string }
  | { kind: 'outfit'; index: 0 | 1 | 2 }
  | { kind: 'affection'; delta: number }
  | { kind: 'point'; delta: number }
  | { kind: 'choice'; options: ChoiceOption[] }
  | { kind: 'label'; name: string }
  | { kind: 'goto'; name: string }
  | { kind: 'end' };

export interface Scene {
  id: string;
  title: string;
  /** 소속 하숙생 id. 프롤로그/엔딩은 null */
  tenantId: string | null;
  steps: Step[];
  /** 라벨 이름 -> steps 인덱스 */
  labels: Record<string, number>;
}

export interface ParseIssue {
  sceneId: string;
  line: number;
  message: string;
}
