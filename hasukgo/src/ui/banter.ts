/**
 * 판이 도는 동안 하숙생이 흘리는 잔말.
 *
 * 맞고는 한 판에 스무 번 넘게 패가 오간다. 그 사이가 조용하면 사람이 아니라
 * 계산기와 두는 기분이 든다. 그래서 무엇을 주고받았는지에 따라 얼굴과 말이
 * 같이 바뀐다 — 광을 뺏겼을 때와 피 한 장을 내줬을 때가 같은 말일 수는 없다.
 *
 * 톤은 호감도가 정한다. low 는 아직 서먹해 말을 고르고, mid 는 편해졌고,
 * high 는 장난을 친다. 하숙생 고유 대사(뻑·쓸·고·스톱)가 있는 자리에서는
 * 그쪽이 먼저고, 여기 있는 것은 모두가 같이 쓰는 잔말이다.
 */
import type { Tone } from '../data/types';
import type { Expression } from '../scenario/types';

export type BanterKey =
  | 'gotGwang'
  | 'gotYeol'
  | 'gotTti'
  | 'gotPi'
  | 'gotMany'
  | 'gotBonus'
  | 'gotSteal'
  | 'lostGwang'
  | 'lostYeol'
  | 'lostTti'
  | 'lostPi'
  | 'lostMany'
  | 'lostBonus'
  | 'lostSteal'
  | 'ahead'
  | 'behind'
  | 'endgame';

interface Banter {
  /** 이 말을 할 때의 얼굴 */
  face: Expression;
  lines: Record<Tone, string[]>;
}

export const BANTER: Record<BanterKey, Banter> = {
  /* ── 하숙생이 가져간다 ───────────────────────────── */
  gotGwang: {
    face: 'win',
    lines: {
      low: [
        '아, 광이 오네요.',
        '이건… 제가 가져가도 되죠?',
        '광 한 장 받았어요.',
        '이런 게 오면 좀 든든하네요.',
        '어, 이거 큰 거 맞죠?',
      ],
      mid: [
        '광은 못 양보해요. 미안해요.',
        '이거 하나로 판이 달라지는데요?',
        '광 들어왔습니다. 조심하세요.',
        '아, 이거 기다렸어요.',
        '이건 진짜 큰 거예요.',
      ],
      high: [
        '아싸, 내 거~',
        '봤어요? 방금 광이요.',
        '광은 제가 가져갈게요. 나중에 갚을게요.',
        '표정 좀 보여줘요. 지금 아프죠?',
        '이건 자랑해도 되죠?',
      ],
    },
  },
  gotYeol: {
    face: 'smile',
    lines: {
      low: ['열끗 한 장 가져갈게요.', '이건 제 거죠?', '어, 이거 쓸 데가 있어요.', '잘 들어왔네요.'],
      mid: [
        '열끗은 모아두면 무서워요.',
        '이거 노리고 있었어요.',
        '고도리 갈까 봐요.',
        '한 장씩 쌓이는 맛이 있죠.',
      ],
      high: ['내 거~', '이것도 제 거고요.', '슬슬 무서워지죠?', '열끗 예쁘다. 가져갈래요.'],
    },
  },
  gotTti: {
    face: 'smile',
    lines: {
      low: ['띠 한 장요.', '이건 가져갈게요.', '띠는 세어보면 금방 붙어요.', '음, 괜찮은 게 왔네요.'],
      mid: [
        '단 만들어볼까요?',
        '띠는 티 안 나게 쌓이는 게 무서워요.',
        '이거 모으는 중이에요.',
        '홍단 청단, 뭐가 될까요.',
      ],
      high: [
        '띠도 제 거~',
        '단 만들면 삐지기 없기예요.',
        '이거 세어보셨어요? 저는 세고 있었는데.',
        '하나씩 가져갈게요. 티 안 나게.',
      ],
    },
  },
  gotPi: {
    face: 'smile',
    lines: {
      low: ['피 한 장 받을게요.', '이거요.', '가져갑니다.', '작은 거지만요.'],
      mid: [
        '피도 스무 장 넘으면 무서워요.',
        '작은 게 쌓이는 거죠.',
        '이런 것도 세어둬야 해요.',
        '피박 조심하세요.',
      ],
      high: ['내 거~', '피 한 장도 안 놔줘요.', '쪼잔하다고 하기 없기예요.', '이런 거 하나씩 챙기는 재미죠.'],
    },
  },
  gotMany: {
    face: 'win',
    lines: {
      low: [
        '어, 이렇게 많이요?',
        '이건 제가 다 가져가도 되나요?',
        '와, 한 번에 왔네요.',
        '손이 무거워졌어요.',
      ],
      mid: [
        '한 번에 쓸어왔네요.',
        '이런 턴이 한 판에 한 번 올까 말까예요.',
        '미안해요, 이건 다 가져갈게요.',
        '아, 오늘 좀 되는 날인가 봐요.',
      ],
      high: [
        '아싸, 다 내 거~',
        '이렇게 가져가면 삐지실 건가요?',
        '한꺼번에 왔어요. 이런 날도 있어야죠.',
        '두 손으로 가져갈게요.',
      ],
    },
  },
  gotBonus: {
    face: 'smile',
    lines: {
      low: ['어, 보너스패네요.', '이건 그냥 오는 거죠?', '운이 좀 따르네요.', '공짜로 한 장 받았어요.'],
      mid: ['이런 건 받아두는 거예요.', '보너스는 사양 안 해요.', '굴러들어 왔네요.', '피가 또 늘었어요.'],
      high: ['공짜다~', '이런 건 제 거죠.', '오늘 운이 저한테 붙었나 봐요.', '앗싸, 덤이요.'],
    },
  },
  gotSteal: {
    face: 'win',
    lines: {
      low: ['한 장 받아올게요. 미안해요.', '규칙이 그렇대요.', '이건 제가 가져가는 거 맞죠?', '어… 받았습니다.'],
      mid: ['한 장 내놓으세요.', '이건 제 몫이에요.', '규칙은 규칙이니까요.', '아까 그거 값이에요.'],
      high: ['한 장 내놔요~', '이런 건 안 봐줘요.', '아까 웃으셨죠? 그 값이에요.', '제 거 됐습니다.'],
    },
  },

  /* ── 내가 가져간다 ───────────────────────────────── */
  lostGwang: {
    face: 'lose',
    lines: {
      low: ['아… 그건 광인데요.', '그걸 가져가시는구나.', '그건 좀 큰 건데.', '어, 그거…'],
      mid: [
        '그건 진짜 아파요.',
        '광을 내주면 판이 기울어요.',
        '거기서 그게 나오다니.',
        '한 판 뒤집혔네요.',
      ],
      high: [
        '그건 너무하잖아요!',
        '광은 반칙이에요. 안 될까요?',
        '그거 가져갈 줄 알았으면 안 뒀어요.',
        '삐질 거예요. 진짜로.',
      ],
    },
  },
  lostYeol: {
    face: 'sulk',
    lines: {
      low: ['그거 보고 있었는데.', '아, 그건…', '가져가시네요.', '음.'],
      mid: ['그거 제 고도리였어요.', '아까워라.', '열끗은 아픈데요.', '다음 판에 돌려받을게요.'],
      high: ['그거 제 거였는데!', '치사해요.', '고도리 노리고 있었단 말이에요.', '그거 알고 가져간 거죠?'],
    },
  },
  lostTti: {
    face: 'sulk',
    lines: {
      low: ['그건 세어두고 있었는데요.', '아…', '띠였네요.', '그렇게 되나요.'],
      mid: ['단 만들려고 했는데요.', '한 장이 모자라게 되네요.', '그거 아까워요.', '띠는 조용히 아픈 거예요.'],
      high: ['제 단 돌려줘요.', '한 장만요, 네?', '그거 딱 하나 남았었는데.', '삐졌어요. 조금이요.'],
    },
  },
  lostPi: {
    face: 'sulk',
    lines: {
      low: ['그건 가져가세요.', '괜찮아요. 피니까요.', '음, 한 장이요.', '그렇죠.'],
      mid: ['피도 모이면 무서워요.', '한 장씩 새어나가네요.', '그거 세고 계셨죠?', '피박은 면하고 싶은데요.'],
      high: ['피 한 장도 안 봐주기예요?', '쪼잔하다~', '그거까지 가져가요?', '세고 있었거든요, 저도.'],
    },
  },
  lostMany: {
    face: 'lose',
    lines: {
      low: [
        '앗, 다 가져가면 어떡해요?',
        '어… 한꺼번에 가시네요.',
        '바닥이 비었어요.',
        '그렇게 되는 거군요.',
      ],
      mid: [
        '앗, 다 가져가면 어떡해요!',
        '한 번에 그렇게 쓸어가시면요.',
        '손이 텅 빈 기분이에요.',
        '그 턴 하나로 뒤집혔네요.',
      ],
      high: [
        '앗, 다 가져가면 어떡해요! 좀 남겨줘요.',
        '너무하다 진짜.',
        '한 장만요. 한 장만 놔줘요.',
        '이러면 저 삐져요. 진짜로 삐질 거예요.',
      ],
    },
  },
  lostBonus: {
    face: 'sulk',
    lines: {
      low: ['그건 그냥 가는 거네요.', '아, 보너스패요.', '운이 그쪽에 있네요.', '어쩔 수 없죠.'],
      mid: ['그런 것도 가져가시네요.', '공짜 한 장이 크죠.', '덤까지 뺏겼어요.', '오늘 운이 안 붙네요.'],
      high: ['그건 제 거였는데!', '공짜까지 가져가기 있어요?', '치사해요, 진짜.', '덤은 좀 나눠줘요.'],
    },
  },
  lostSteal: {
    face: 'lose',
    lines: {
      low: ['아, 한 장 드려야 하는군요.', '네… 가져가세요.', '규칙이 그렇죠.', '한 장 갑니다.'],
      mid: ['이건 좀 억울한데요.', '가져가세요. 대신 기억해둘게요.', '상납이라니, 말이 얄궂어요.', '한 장 드릴게요.'],
      high: [
        '안 줄래요. …줘야 하죠?',
        '이건 진짜 억울해요.',
        '가져가요. 나중에 두 배로 받을 거예요.',
        '흥, 한 장이요.',
      ],
    },
  },

  /* ── 판의 흐름 ───────────────────────────────────── */
  ahead: {
    face: 'smile',
    lines: {
      low: ['어, 제가 앞선 건가요?', '세어보니 제가 좀 앞서네요.', '이러다 이기면 어떡하죠.', '조심스럽게 좋아할게요.'],
      mid: ['지금은 제가 앞서요.', '따라오실 거죠?', '여기서 굳히고 싶은데요.', '판이 저한테 왔어요.'],
      high: ['저 앞섰어요. 봐요, 봐요.', '지금 제가 이기고 있는데요?', '따라와 봐요~', '이 기분 오래 갔으면 좋겠다.'],
    },
  },
  behind: {
    face: 'sulk',
    lines: {
      low: ['제가 밀렸네요.', '음… 따라가야겠어요.', '아직 끝난 건 아니니까요.', '조금 뒤처졌어요.'],
      mid: ['뒤집혔네요. 다시 갈게요.', '여기서부터가 진짜죠.', '아직 패는 남았어요.', '이대로는 안 끝내요.'],
      high: ['져주는 거 아니거든요?', '지금부터 진심이에요.', '봐주다 이렇게 됐어요. 진짜예요.', '두고 봐요. 뒤집을 거예요.'],
    },
  },
  endgame: {
    face: 'serious',
    lines: {
      low: ['패가 얼마 안 남았네요.', '이제 몇 장 안 남았어요.', '슬슬 끝이 보여요.', '마지막 몇 장이에요.'],
      mid: ['이제 남은 걸로 끝내야죠.', '여기서 한 끗이에요.', '마지막 장까지 봐야 알아요.', '슬슬 결판이네요.'],
      high: ['마지막이에요. 긴장돼요?', '여기서 뒤집으면 제가 이기는 거예요.', '끝까지 모르는 거예요.', '한 장 남았어요. 두근거리네요.'],
    },
  },
};

/** 한 턴에 오간 패 (종류별 장수) */
export interface Take {
  gwang: number;
  yeol: number;
  tti: number;
  pi: number;
}

export const NO_TAKE: Take = { gwang: 0, yeol: 0, tti: 0, pi: 0 };

function total(t: Take): number {
  return t.gwang + t.yeol + t.tti + t.pi;
}

/** 한 턴에 세 장 넘게 가져가면 "쓸어갔다" 로 친다 */
const MANY = 3;

/**
 * 이 턴에 무슨 말을 할까.
 *
 * 큰 것부터 본다 — 광 한 장은 피 다섯 장보다 할 말이 많다.
 * 아무것도 오가지 않은 턴에는 판의 형세(앞섰나 밀렸나)나 막바지인지를 말하고,
 * 그것도 없으면 null 을 준다. 할 말이 없을 때 억지로 떠드는 것이 제일 어색하다.
 */
export function banterKey(
  mine: Take,
  yours: Take,
  ctx: {
    bonus?: 'mine' | 'yours';
    steal?: 'mine' | 'yours';
    leadFlip?: 'ahead' | 'behind';
    handLeft?: number;
  } = {},
): BanterKey | null {
  if (mine.gwang > 0) return 'gotGwang';
  if (yours.gwang > 0) return 'lostGwang';
  if (total(mine) >= MANY) return 'gotMany';
  if (total(yours) >= MANY) return 'lostMany';
  if (ctx.steal === 'mine') return 'gotSteal';
  if (ctx.steal === 'yours') return 'lostSteal';
  if (ctx.bonus === 'mine') return 'gotBonus';
  if (ctx.bonus === 'yours') return 'lostBonus';
  if (ctx.leadFlip) return ctx.leadFlip;
  if (mine.yeol > 0) return 'gotYeol';
  if (yours.yeol > 0) return 'lostYeol';
  if (mine.tti > 0) return 'gotTti';
  if (yours.tti > 0) return 'lostTti';
  if (mine.pi > 0) return 'gotPi';
  if (yours.pi > 0) return 'lostPi';
  if ((ctx.handLeft ?? 99) <= 2) return 'endgame';
  return null;
}

/**
 * 고른 말 한 줄과 그때의 얼굴.
 * 방금 한 말은 피한다 — 같은 말이 두 번 이어지면 녹음기처럼 들린다.
 */
export function banterLine(
  key: BanterKey,
  tone: Tone,
  rnd: () => number,
  avoid?: string,
): { text: string; face: Expression } {
  const b = BANTER[key];
  const pool = b.lines[tone];
  const fresh = pool.length > 1 && avoid ? pool.filter((l) => l !== avoid) : pool;
  const text = fresh[Math.floor(rnd() * fresh.length)] ?? fresh[0];
  return { text, face: b.face };
}
