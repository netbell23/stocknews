/**
 * 빌드된 결과물(docs/hasukgo)을 로컬에서 띄운다.
 *   node scripts/serve-site.mjs [포트]
 *
 * 왜 필요한가: 소개 페이지와 게임은 `소개/` 와 `소개/play/` 처럼 폴더로 나뉘어 있다.
 * 파일을 더블클릭해 여는 file:// 방식으로는 폴더 주소가 index.html 로 이어지지 않아
 * 「지금 바로 플레이」가 깨진다. 짧게라도 http 로 띄워야 실제 배포와 같아진다.
 */
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { networkInterfaces } from 'node:os';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..', 'docs');
const PORT = Number(process.argv[2] ?? 8798);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

if (!existsSync(join(ROOT, 'hasukgo', 'index.html'))) {
  console.error('아직 빌드된 결과물이 없습니다. 먼저 실행하세요:\n  npm run build:h5\n');
  process.exit(1);
}

createServer((req, res) => {
  let p = decodeURIComponent((req.url ?? '/').split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const file = join(ROOT, normalize(p).replace(/^(\.\.[/\\])+/, ''));

  // docs 바깥은 내주지 않는다
  if (!file.startsWith(ROOT)) {
    res.writeHead(403).end('forbidden');
    return;
  }
  if (!existsSync(file) || statSync(file).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404</h1><p><a href="/hasukgo/">하숙생 맞고 소개 페이지로</a></p>');
    return;
  }
  res.writeHead(200, {
    'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream',
    'Cache-Control': 'no-store',
  });
  createReadStream(file).pipe(res);
}).listen(PORT, '0.0.0.0', () => {
  const lan = Object.values(networkInterfaces())
    .flat()
    .find((n) => n && n.family === 'IPv4' && !n.internal)?.address;
  console.log('\n하숙생 맞고 — 빌드본 미리보기\n');
  console.log(`  이 PC     http://localhost:${PORT}/hasukgo/`);
  if (lan) console.log(`  같은 와이파이의 폰   http://${lan}:${PORT}/hasukgo/`);
  console.log('\n  Ctrl+C 로 종료\n');
});
