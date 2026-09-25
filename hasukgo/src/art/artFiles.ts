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

/** Vite 가 심어주는 배포 기준 경로 (`/stocknews/hasukgo/play/`) */
const BASE = import.meta.env.BASE_URL || '/';

/** 어떤 크기로 쓰는 그림인가. 얼굴은 동그란 칩·상대 자리에, 전신은 로비·대화에 쓴다. */
export type Shot = 'full' | 'face';

function url(dir: string, file: string): string {
  return `${BASE}art/${dir}/${file}`;
}

/**
 * 이 하숙생의 원화 주소. 없으면 null — 부르는 쪽이 SVG 로 되돌아가면 된다.
 * 표정 → 기본 순으로 실제로 있는 파일만 고른다.
 */
export function charArtSrc(tenantId: string, shot: Shot, expression?: Expression): string | null {
  const suffix = shot === 'face' ? '_face' : '';
  const names = [
    expression && expression !== 'normal' ? `${tenantId}${suffix}_${expression}.webp` : null,
    `${tenantId}${suffix}.webp`,
    // 얼굴 컷이 아직 없으면 전신이라도 쓴다 (칩 쪽에서 잘라 보여준다)
    shot === 'face' ? `${tenantId}.webp` : null,
  ].filter((n): n is string => n !== null);

  for (const n of names) if (CHAR_FILES.has(n)) return url('char', n);
  return null;
}

/** 이 하숙생이 원화를 갖고 있는가 (레이아웃을 사진용으로 바꿀지 결정할 때 쓴다) */
export function hasCharArt(tenantId: string): boolean {
  return CHAR_FILES.has(`${tenantId}.webp`);
}

/** 타이틀 키아트 같은 낱장 그림 */
export function keyArtSrc(name: string): string | null {
  const file = `${name}.webp`;
  return KEY_FILES.has(file) ? url('key', file) : null;
}
