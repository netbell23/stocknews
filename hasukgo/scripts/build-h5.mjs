/**
 * H5(모바일 웹) 배포 빌드.
 *   node scripts/build-h5.mjs
 *
 * 만들어지는 구조
 *   docs/hasukgo/          ← 게임 소개 랜딩 페이지 (처음 들어오는 사람이 보는 곳)
 *   docs/hasukgo/play/     ← 게임 본체
 *
 * 하는 일
 *  1. vite build 로 dist/ 를 만든다 (base 는 './' 라 어느 하위 경로에 올려도 동작한다)
 *  2. 서비스 워커의 캐시 이름을 이번 빌드용으로 새로 찍는다
 *     (안 바꾸면 이용자 폰에 예전 버전이 계속 남는다)
 *  3. 랜딩 + 게임을 docs/hasukgo/ 로 조립한다 — GitHub Pages 가 docs/ 를 서빙한다
 */
import { execSync } from 'node:child_process';
import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildLanding } from './build-landing.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = join(HERE, '..');
const DIST = join(APP, 'dist');
const OUT = join(APP, '..', 'docs', 'hasukgo');
const PLAY = join(OUT, 'play');

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

console.log(`▶ 조립 → ${OUT}`);
rmSync(OUT, { recursive: true, force: true });
mkdirSync(PLAY, { recursive: true });

// 게임 본체
cpSync(DIST, PLAY, { recursive: true });

// 랜딩 페이지 + 랜딩이 쓰는 아이콘
const landing = await buildLanding(OUT);
for (const f of ['icon-192.png', 'icon-512.png', 'apple-touch-icon.png']) {
  const src = join(APP, 'public', f);
  if (existsSync(src)) copyFileSync(src, join(OUT, f));
}
console.log(`▶ 랜딩 페이지: ${(landing.bytes / 1024).toFixed(0)}KB (하숙생 ${landing.tenants}명)`);

// GitHub Pages 가 _로 시작하는 파일을 무시하지 않게
writeFileSync(join(OUT, '.nojekyll'), '');

console.log('\n완료. 커밋 후 main 에 push 하면 아래 주소로 열립니다.');
console.log('  소개  https://netbell23.github.io/stocknews/hasukgo/');
console.log('  게임  https://netbell23.github.io/stocknews/hasukgo/play/\n');
