/**
 * 하숙생 캐릭터 대조표를 뽑는다 — 10명 x 8표정 x 3의상.
 *   node scripts/char-sheet.mjs
 * 결과: .tmp-chars/sheet.html (git 에 들어가지 않는 작업용 파일)
 *
 * 10명이 한 줄에 늘어섰을 때 서로 구분되는지 눈으로 확인하는 용도다.
 */
import { build } from 'esbuild';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = join(HERE, '..');
const OUT = join(APP, '.tmp-chars');

const EXPR = ['normal', 'smile', 'sulk', 'surprise', 'shy', 'serious', 'win', 'lose'];

mkdirSync(OUT, { recursive: true });
const bundle = join(OUT, 'art.mjs');
await build({
  entryPoints: [join(HERE, 'art-entry.ts')],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: bundle,
  logLevel: 'error',
});
const { portraitSvg, TENANTS } = await import(pathToFileURL(bundle).href);

// 여는 <svg> 태그에서만 크기를 지운다 (안쪽 <rect> 까지 지우면 소품이 사라진다)
const strip = (svg) =>
  svg.replace(/^<svg[^>]*>/, (tag) => tag.replace(/\s(width|height)="[^"]*"/g, ''));

let html = `<!doctype html><meta charset="utf-8"><title>하숙생 대조표</title>
<style>
 body{background:#241a13;color:#f3e6d2;font-family:system-ui,sans-serif;margin:0;padding:18px}
 h2{margin:26px 0 8px;font-size:16px;border-bottom:1px solid #5a4432;padding-bottom:6px}
 .row{display:flex;gap:6px;flex-wrap:wrap;align-items:flex-end}
 .cell{text-align:center;font-size:10px;color:#c6b49a}
 .cell svg{display:block;background:#6d5c4c;border-radius:6px}
 .lineup svg{width:120px}
 .expr svg{width:104px}
 .fit svg{width:110px}
 .tiny svg{width:46px;background:#6d5c4c}
 .note{font-size:12px;color:#b09a7e;margin:4px 0 12px}
</style>
<h2>① 한 줄 세우기 — 서로 구분되는가 (평상복 · 기본 표정)</h2>
<div class="row lineup">`;
for (const t of TENANTS) {
  html += `<div class="cell">${strip(portraitSvg({ tenant: t, expression: 'normal', outfit: 0 }))}${t.order}. ${t.name}</div>`;
}
html += `</div>
<h2>② 대화창 옆 썸네일 크기(46px) — 이 크기에서도 누군지 아는가</h2>
<div class="row tiny">`;
for (const t of TENANTS) {
  html += `<div class="cell">${strip(portraitSvg({ tenant: t, expression: 'smile', outfit: 0 }))}</div>`;
}
html += `</div>`;

for (const t of TENANTS) {
  html += `<h2>${t.order}. ${t.name} — ${t.job} · ${t.personality.join('/')}</h2>
  <div class="note">${t.look.face} 얼굴 · ${t.look.eyes} 눈매 · ${t.look.bangs} 앞머리 · ${t.look.hairStyle} · ${t.look.accessory} · ${t.look.prop}</div>
  <div class="row expr">`;
  for (const e of EXPR) {
    html += `<div class="cell">${strip(portraitSvg({ tenant: t, expression: e, outfit: 0 }))}${e}</div>`;
  }
  html += `</div><div class="row fit" style="margin-top:8px">`;
  for (const o of [0, 1, 2]) {
    html += `<div class="cell">${strip(portraitSvg({ tenant: t, expression: 'smile', outfit: o }))}${['평상복', '외출복', '특별복'][o]} · ${t.look.wear[o]}</div>`;
  }
  html += `</div>`;
}

writeFileSync(join(OUT, 'sheet.html'), html, 'utf8');
rmSync(bundle, { force: true });
console.log('→', join(OUT, 'sheet.html'));
