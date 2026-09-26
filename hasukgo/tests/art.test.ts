import { describe, expect, it } from 'vitest';
import { charArtSrc } from '../src/art/artFiles';
import { TENANTS } from '../src/data/tenants';
import type { Expression } from '../src/scenario/types';

const EXPRESSIONS: Expression[] = [
  'normal',
  'smile',
  'sulk',
  'surprise',
  'shy',
  'serious',
  'win',
  'lose',
];

/**
 * 시트에서 반 칸씩 밀려 잘린 칸들. 파일은 있지만 얼굴이 프레임 밖이라
 * 화면에 세우면 머리카락만 나온다. 어떤 표정을 부르든 이 파일로는
 * 내려가지 않아야 한다.
 */
const MISCUT_FILES = [
  'nayeon.webp',
  'nayeon_surprise.webp',
  'nayeon_lose.webp',
  'hana.webp',
  'hana_lose.webp',
  'hana_sulk.webp',
  'sora.webp',
  'sora_surprise.webp',
  'sora_lose.webp',
].flatMap((f) => [f, f.replace(/^([a-z]+)/, '$1_face')]);

describe('원화 고르기', () => {
  it('잘린 칸은 어느 표정으로도 걸리지 않는다', () => {
    for (const t of TENANTS) {
      for (const e of EXPRESSIONS) {
        for (const shot of ['full', 'face'] as const) {
          const src = charArtSrc(t.id, shot, e);
          const file = src?.split('/').pop();
          expect(MISCUT_FILES, `${t.id} ${shot} ${e}`).not.toContain(file);
        }
      }
    }
  });

  it('하숙생 열다섯은 어떤 표정이든 세울 그림이 있다', () => {
    for (const t of TENANTS) {
      for (const e of EXPRESSIONS) {
        expect(charArtSrc(t.id, 'full', e), `${t.id} ${e}`).toBeTruthy();
        expect(charArtSrc(t.id, 'face', e), `${t.id} 얼굴 ${e}`).toBeTruthy();
      }
    }
  });
});
