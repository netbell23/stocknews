/**
 * H5(모바일 웹) 배포 빌드.
 *   node scripts/build-h5.mjs
 *
 * 하는 일
 *  1. vite build 로 dist/ 를 만든다 (base 는 './' 라 어느 하위 경로에 올려도 동작한다)
 *  2. 서비스 워커의 캐시 이름을 이번 빌드용으로 새로 찍는다
 *     (안 바꾸면 이용자 폰에 예전 버전이 계속 남는다)
 *  3. 저장소의 docs/hasukgo/ 로 복사한다 — GitHub Pages 가 docs/ 를 서빙한다
 */
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = join(HERE, '..');
const DIST = join(APP, 'dist');
const OUT = join(APP, '..', 'docs', 'hasukgo');

console.log('▶ 웹 번들 빌드');
execSync('npx vite build', { cwd: APP, stdio: 'inherit' });

// 서비스 워커 캐시 이름 갱신
const swPath = join(DIST, 'sw.js');
if (existsSync(swPath)) {
  const stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12);
  const sw = readFileSync(swPath, 'utf-8').replace(
    /const CACHE = '[^']*';/,
    `const CACHE = 'hasukgo-${stamp}';`,
  );
  writeFileSync(swPath, sw);
  console.log(`▶ 서비스 워커 캐시: hasukgo-${stamp}`);
} else {
  console.warn('! sw.js 가 dist 에 없습니다. public/sw.js 를 확인하세요.');
}

// GitHub Pages 가 _로 시작하는 파일을 무시하지 않게
writeFileSync(join(DIST, '.nojekyll'), '');

console.log(`▶ 복사 → ${OUT}`);
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(DIST, OUT, { recursive: true });

console.log('\n완료. 커밋 후 push 하면 아래 주소로 열립니다.');
console.log('  https://netbell23.github.io/stocknews/hasukgo/\n');
