/**
 * 원화(사진) 경로 해석.
 *
 * 하숙생 그림은 두 층이다. 원화가 있으면 원화를 쓰고, 없으면 코드가 그리는 SVG 로
 * 되돌아간다. 열 명 중 일곱만 원화가 들어와 있어도 화면이 깨지지 않는 이유다.
 *
 * 표정별 파일(`{id}_{표정}.webp`)이 들어오면 그걸 먼저 쓰고, 없으면 기본 한 장을 쓴다.
 * 비주얼노벨은 표정으로 연기를 하는데 원화는 보통 한 포즈뿐이라, 표정 파일이
 * 채워지기 전까지는 같은 그림이 나온다.
 */
import type { Expression } from '../scenario/types';
import { CHAR_FILES, KEY_FILES } from './artFiles.gen';

/*
 * 하숙생 id → 원화 id.
 *
 * 2026-09-26 에 캐릭터 카드를 새로 받아 열다섯 명의 이름과 성격이 바뀌었다.
 * 그런데 시나리오 150장면이 옛 id 로 엮여 있어서, id 를 한꺼번에 갈아치우면
 * 이야기가 통째로 끊긴다. 그래서 보이는 이름과 그림만 먼저 새것으로 바꾸고
 * id 는 그대로 두었다. 이 표가 그 사이를 잇는다.
 * 시나리오를 새 인물에 맞춰 다시 쓸 때 이 표는 사라진다.
 */
const ART_ID: Record<string, string> = {
  eunseo: 'jieun',
  hayeong: 'sua',
  jiwoo: 'nayeon',
  sea: 'ria',
  sua: 'hana',
  minji: 'seoyeon',
  gaeun: 'rubi',
  narae: 'chaea',
  seyeon: 'sora',
  dohee: 'gain',
  nayun: 'minji',
  yoon: 'arin',
  // 예린·하린·다빈은 이름이 그대로라 표에 없다
};

const artId = (tenantId: string) => ART_ID[tenantId] ?? tenantId;

/** Vite 가 심어주는 배포 기준 경로 (`/stocknews/hasukgo/play/`) */
const BASE = import.meta.env.BASE_URL || '/';

/** 어떤 크기로 쓰는 그림인가. 얼굴은 동그란 칩·상대 자리에, 전신은 로비·대화에 쓴다. */
export type Shot = 'full' | 'face';

function url(dir: string, file: string): string {
  return `${BASE}art/${dir}/${file}`;
}

/**
 * 원화는 보통 표정을 몇 개만 그려 온다. 캐릭터 시트가 주는 것은
 * 기본 · 애교 · 놀람 셋뿐이라, 나머지 다섯은 가장 가까운 얼굴을 빌려 쓴다.
 * 파일이 실제로 들어오면 그게 먼저 잡히므로 이 줄은 자동으로 비켜난다.
 */
const NEAREST: Partial<Record<Expression, Expression[]>> = {
  smile: ['smile'],
  win: ['win', 'smile'],
  shy: ['shy', 'smile'],
  surprise: ['surprise'],
  lose: ['lose', 'surprise'],
  sulk: ['sulk', 'surprise'],
  serious: ['serious'],
};

/**
 * 이 하숙생의 원화 주소. 없으면 null — 부르는 쪽이 SVG 로 되돌아가면 된다.
 * 표정 → 기본 순으로 실제로 있는 파일만 고른다.
 */
export function charArtSrc(tenantId: string, shot: Shot, expression?: Expression): string | null {
  const id = artId(tenantId);
  const suffix = shot === 'face' ? '_face' : '';
  const wanted = expression && expression !== 'normal' ? (NEAREST[expression] ?? [expression]) : [];
  const names = [
    ...wanted.map((e) => `${id}${suffix}_${e}.webp`),
    `${id}${suffix}.webp`,
    // 얼굴 컷이 아직 없으면 전신이라도 쓴다 (칩 쪽에서 잘라 보여준다)
    shot === 'face' ? `${id}.webp` : null,
  ].filter((n): n is string => n !== null);

  for (const n of names) if (CHAR_FILES.has(n)) return url('char', n);
  return null;
}

/** 이 하숙생이 원화를 갖고 있는가 (레이아웃을 사진용으로 바꿀지 결정할 때 쓴다) */
export function hasCharArt(tenantId: string): boolean {
  return CHAR_FILES.has(`${artId(tenantId)}.webp`);
}

/** 타이틀 키아트 같은 낱장 그림 */
export function keyArtSrc(name: string): string | null {
  const file = `${name}.webp`;
  return KEY_FILES.has(file) ? url('key', file) : null;
}
