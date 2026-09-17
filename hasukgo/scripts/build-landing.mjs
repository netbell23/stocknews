/**
 * 게임 소개 랜딩 페이지 조립.
 *
 * 스크린샷 파일을 따로 관리하지 않고, 게임이 실제로 쓰는 SVG 아트 생성기를 그대로 돌려
 * 하숙생 입상과 화투패를 페이지에 직접 박아 넣는다. 아트를 고치면 소개 페이지도 같이 바뀐다.
 *
 * 단독 실행:  node scripts/build-landing.mjs <출력폴더>
 * 보통은 build-h5.mjs 가 호출한다.
 */
import { build } from 'esbuild';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = join(HERE, '..');

const SEASON_LABEL = { spring: '봄', summer: '여름', autumn: '가을', winter: '겨울' };

/** 아트 생성기는 TS 라 그대로 못 부른다. 임시로 번들해서 불러온다. */
async function loadArt() {
  const tmpDir = join(APP, '.tmp-landing');
  mkdirSync(tmpDir, { recursive: true });
  const out = join(tmpDir, 'art.mjs');
  await build({
    entryPoints: [join(HERE, 'art-entry.ts')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: out,
    logLevel: 'error',
  });
  const mod = await import(pathToFileURL(out).href);
  return { mod, cleanup: () => rmSync(tmpDir, { recursive: true, force: true }) };
}

/** SVG 문자열을 페이지에 넣기 좋게 다듬는다 (width/height 속성을 지워 CSS 가 크기를 잡게) */
function inline(svg, cls) {
  let s = svg.replace(/\s(width|height)="[^"]*"/g, '');
  if (cls) s = s.replace('<svg ', `<svg class="${cls}" `);
  return s;
}

export async function buildLanding(outDir) {
  const { mod, cleanup } = await loadArt();
  try {
    const { portraitSvg, cardSvg, backgroundSvg, baseDeck, TENANTS } = mod;

    // 히어로 배경 — 밤의 마루
    const heroBg = inline(backgroundSvg('maru', 'night'));

    // 히어로에 세울 하숙생 다섯 (봄~여름)
    const heroTenants = TENANTS.slice(0, 5)
      .map((t, i) =>
        inline(
          portraitSvg({ tenant: t, expression: i % 2 === 0 ? 'smile' : 'normal', outfit: 0 }),
          'p',
        ),
      )
      .join('\n');

    // 눈에 띄는 화투패 몇 장
    const deck = baseDeck();
    const pick = ['송학 광', '매조 홍단', '공산 광', '국화 청단', '비광', '오동 광'];
    const heroCards = pick
      .map((name, i) => {
        const c = deck.find((x) => x.name === name);
        if (!c) return '';
        const rot = [-8, -4, 0, 4, 8, 12][i] ?? 0;
        return inline(cardSvg(c)).replace('<svg ', `<svg style="--r:${rot}deg" `);
      })
      .filter(Boolean)
      .join('\n');

    // 하숙생 10인 카드. 처음부터 열리는 세 명만 공개하고 나머지는 잠금 처리해 스포일러를 줄인다.
    const tenantCards = TENANTS.map((t) => {
      const open = t.unlock.length === 0;
      return `      <div class="tenant${open ? '' : ' locked'}">
        ${inline(portraitSvg({ tenant: t, expression: open ? 'smile' : 'normal', outfit: 0 }))}
        <b>${t.name}</b>
        <span class="nick">"${t.nickname}"</span>
        <div class="style">${open ? t.styleLabel : '???'}</div>
        <div class="season">${SEASON_LABEL[t.season] ?? ''}</div>
      </div>`;
    }).join('\n');

    const builtAt = ` · ${new Date().toISOString().slice(0, 10)} 빌드`;

    const tpl = readFileSync(join(APP, 'landing', 'index.html'), 'utf-8');
    const html = tpl
      .replace('<!--HERO_BG-->', heroBg)
      .replace('<!--HERO_TENANTS-->', heroTenants)
      .replace('<!--HERO_CARDS-->', heroCards)
      .replace('<!--TENANT_CARDS-->', tenantCards)
      .replace('<!--BUILT_AT-->', builtAt);

    // 치환이 하나라도 남았으면 템플릿과 스크립트가 어긋난 것이다
    const leftover = html.match(/<!--[A-Z_]+-->/g);
    if (leftover) throw new Error(`치환되지 않은 자리표시자: ${leftover.join(', ')}`);

    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html);
    return { bytes: Buffer.byteLength(html), tenants: TENANTS.length };
  } finally {
    cleanup();
  }
}

// 직접 실행했을 때
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  const out = process.argv[2] ?? join(APP, '..', 'docs', 'hasukgo');
  const r = await buildLanding(out);
  console.log(`랜딩 페이지 생성: ${out}/index.html (${(r.bytes / 1024).toFixed(0)}KB, 하숙생 ${r.tenants}명)`);
}
