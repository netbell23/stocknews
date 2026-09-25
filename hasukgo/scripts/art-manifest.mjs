/**
 * public/art/ 에 실제로 들어 있는 원화 파일 목록을 TS 모듈로 굽는다.
 *
 * 원화는 public/ 에 있어서 Vite 의 import.meta.glob 이 못 본다. 그렇다고 앱이
 * 파일 존재를 런타임에 찔러보게 두면, 아직 안 들어온 하숙생마다 404 가 난다.
 * 그래서 빌드 전에 한 번 훑어 목록을 만들어 두고, 목록에 있는 것만 요청한다.
 * 목록에 없으면 코드로 그리는 SVG 로 조용히 되돌아간다.
 */
import { readdirSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src/art/artFiles.gen.ts');

function scan(dir) {
  const abs = join(root, 'public/art', dir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs)
    .filter((f) => /\.(webp|png|jpg)$/i.test(f))
    .sort();
}

const char = scan('char');
const key = scan('key');

const lines = [
  '/**',
  ' * 자동 생성 — `npm run art:scan` (scripts/art-manifest.mjs).',
  ' * 직접 고치지 말 것. public/art/ 에 파일을 넣거나 빼고 다시 돌리면 된다.',
  ' */',
  '',
  `/** public/art/char/ 에 실제로 있는 파일 이름 */`,
  `export const CHAR_FILES: ReadonlySet<string> = new Set(${JSON.stringify(char, null, 2)});`,
  '',
  `/** public/art/key/ 에 실제로 있는 파일 이름 */`,
  `export const KEY_FILES: ReadonlySet<string> = new Set(${JSON.stringify(key, null, 2)});`,
  '',
];

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, lines.join('\n'), 'utf8');
console.log(`▶ 원화 목록: 인물 ${char.length}개 · 키아트 ${key.length}개 → src/art/artFiles.gen.ts`);
