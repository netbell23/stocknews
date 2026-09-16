/**
 * 앱 아이콘 생성 — 나무 바탕에 화투 한 장을 올린 벡터 드로잉을 PNG 로 굽는다.
 * 외부 이미지 자산 없이 sharp 없이도 돌도록, 캔버스 대신 순수 PNG 인코더를 쓴다.
 *   node scripts/gen-icons.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { deflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** 안드로이드 런처 아이콘 밀도별 크기 */
const DENSITIES = [
  ['mdpi', 48],
  ['hdpi', 72],
  ['xhdpi', 96],
  ['xxhdpi', 144],
  ['xxxhdpi', 192],
];

const hex = (h) => [
  parseInt(h.slice(1, 3), 16),
  parseInt(h.slice(3, 5), 16),
  parseInt(h.slice(5, 7), 16),
];

/** 0~1 좌표계로 아이콘을 그린다. (x,y) -> [r,g,b] */
function pixel(x, y) {
  const wood1 = hex('#4a3628');
  const wood2 = hex('#2a1f18');
  const paper = hex('#f4ead6');
  const red = hex('#b5493f');
  const lamp = hex('#ffd98a');

  // 나무 바탕 + 전등 불빛
  const t = (x + y) / 2;
  let c = [
    Math.round(wood1[0] * (1 - t) + wood2[0] * t),
    Math.round(wood1[1] * (1 - t) + wood2[1] * t),
    Math.round(wood1[2] * (1 - t) + wood2[2] * t),
  ];
  const dl = Math.hypot(x - 0.5, y - 0.18);
  const glow = Math.max(0, 1 - dl * 2.2) * 0.35;
  c = c.map((v, i) => Math.round(v * (1 - glow) + lamp[i] * glow));

  // 화투 한 장 (세로 직사각형, 살짝 기울인 느낌은 두 장 겹침으로 표현)
  const cardBack = x > 0.18 && x < 0.56 && y > 0.24 && y < 0.82;
  const cardFront = x > 0.42 && x < 0.82 && y > 0.18 && y < 0.76;
  if (cardBack && !cardFront) {
    c = hex('#8f342b');
    if (x < 0.21 || x > 0.53 || y < 0.27 || y > 0.79) c = hex('#e8b53c');
  }
  if (cardFront) {
    c = paper;
    // 테두리
    if (x < 0.45 || x > 0.79 || y < 0.21 || y > 0.73) c = hex('#12100e');
    else {
      // 붉은 띠
      if (y > 0.42 && y < 0.52) c = red;
      // 보름달
      const dm = Math.hypot(x - 0.62, y - 0.32);
      if (dm < 0.08) c = red;
    }
  }
  return c;
}

function crc32(buf) {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (const b of buf) crc = table[(crc ^ b) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function png(size) {
  const raw = Buffer.alloc((size * 3 + 1) * size);
  let o = 0;
  for (let y = 0; y < size; y++) {
    raw[o++] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      const [r, g, b] = pixel((x + 0.5) / size, (y + 0.5) / size);
      raw[o++] = r;
      raw[o++] = g;
      raw[o++] = b;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

let count = 0;
for (const [density, size] of DENSITIES) {
  const dir = join(ROOT, 'android/app/src/main/res', `mipmap-${density}`);
  mkdirSync(dir, { recursive: true });
  const buf = png(size);
  for (const name of ['ic_launcher.png', 'ic_launcher_round.png', 'ic_launcher_foreground.png']) {
    writeFileSync(join(dir, name), buf);
    count++;
  }
}
// 플레이 스토어 등록용 512px 아이콘
mkdirSync(join(ROOT, 'store'), { recursive: true });
writeFileSync(join(ROOT, 'store/icon-512.png'), png(512));
count++;

// H5(PWA) 홈 화면 아이콘
mkdirSync(join(ROOT, 'public'), { recursive: true });
for (const size of [192, 512]) {
  writeFileSync(join(ROOT, `public/icon-${size}.png`), png(size));
  count++;
}
// iOS 홈 화면 추가용
writeFileSync(join(ROOT, 'public/apple-touch-icon.png'), png(180));
count++;
console.log(`아이콘 ${count}개 생성 완료`);
