/**
 * 배경 13종 x 시간대 3종 SVG 생성기 — 플레이스홀더.
 * 원화 교체: public/art/bg/{bg}_{time}.jpg 를 넣으면 우선 사용된다.
 */
import type { BackgroundId, TimeOfDay } from '../scenario/types';

export const BACKGROUND_LABEL: Record<BackgroundId, string> = {
  maru: '하숙집 마루',
  kitchen: '부엌',
  hallway: '복도 / 방 앞',
  rooftop: '옥상',
  yard: '마당 / 대문',
  cvs: '동네 편의점 앞',
  campus: '캠퍼스 벤치',
  street: '골목길',
  room: '내 방',
  annex: '별채',
  festival: '가을 축제',
  station: '지하철역 앞',
  beach: '집 앞 바닷가',
};

interface Palette {
  sky: [string, string];
  ground: string;
  wall: string;
  wood: string;
  light: string;
  haze: number;
}

const PALETTES: Record<TimeOfDay, Palette> = {
  morning: {
    sky: ['#cfe6f7', '#fbe6d0'],
    ground: '#cbb89a',
    wall: '#efe3d0',
    wood: '#c9a16b',
    light: '#fff3d6',
    haze: 0.12,
  },
  evening: {
    sky: ['#f7c08a', '#e0798a'],
    ground: '#9c8467',
    wall: '#e2cbb2',
    wood: '#b58553',
    light: '#ffd9a0',
    haze: 0.18,
  },
  night: {
    sky: ['#1b2440', '#2f3a5c'],
    ground: '#3b3428',
    wall: '#4a4237',
    wood: '#6b4f33',
    light: '#ffd98a',
    haze: 0.34,
  },
};

const W = 720;
const H = 1280;

function sky(p: Palette): string {
  return `
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${p.sky[0]}"/>
      <stop offset="100%" stop-color="${p.sky[1]}"/>
    </linearGradient>
    <radialGradient id="lamp" cx="50%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${p.light}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${p.light}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>`;
}

function stars(time: TimeOfDay): string {
  if (time !== 'night') return '';
  let out = '';
  // 고정 배치 (렌더마다 흔들리지 않도록 의사난수 대신 수식 사용)
  for (let i = 0; i < 40; i++) {
    const x = ((i * 137) % W) + 7;
    const y = ((i * 61) % 380) + 20;
    const r = (i % 3) * 0.6 + 0.8;
    out += `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${0.3 + (i % 5) * 0.12}"/>`;
  }
  return out;
}

function floorPlanks(p: Palette, top: number): string {
  let out = `<rect x="0" y="${top}" width="${W}" height="${H - top}" fill="${p.wood}"/>`;
  for (let i = 0; i <= 8; i++) {
    const x = (W / 8) * i;
    out += `<path d="M${x} ${top} L${x * 0.75 + 90} ${H}" stroke="#00000022" stroke-width="3"/>`;
  }
  out += `<rect x="0" y="${top}" width="${W}" height="10" fill="#00000033"/>`;
  return out;
}

/** hex 를 밝게(+) / 어둡게(-) 민다 */
function shadeBg(hex: string, amt: number): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const t = amt > 0 ? 255 : 0;
  const k = Math.abs(amt);
  const out = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) =>
    Math.round(c + (t - c) * k),
  );
  return `#${out.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}

/** 수평선과 바다. top 이 수평선 높이다. */
function sea(p: Palette, time: TimeOfDay, top: number): string {
  const deep = time === 'night' ? '#16233d' : time === 'evening' ? '#3f5f84' : '#5f95c4';
  const near = time === 'night' ? '#0f1a2e' : time === 'evening' ? '#2f4867' : '#4a7fb0';
  const glint = time === 'night' ? p.light : '#ffffff';
  let out = `<rect x="0" y="${top}" width="${W}" height="${880 - top}" fill="${deep}"/>
             <rect x="0" y="${top + (880 - top) * 0.55}" width="${W}" height="${(880 - top) * 0.45}" fill="${near}"/>
             <rect x="0" y="${top - 3}" width="${W}" height="6" fill="${glint}" opacity="0.28"/>`;
  // 잔물결 — 렌더마다 흔들리지 않게 수식으로 고정 배치
  for (let i = 0; i < 16; i += 1) {
    const y = top + 24 + i * ((880 - top - 24) / 16);
    const x = ((i * 157) % (W - 180)) + 40;
    const w = 60 + (i % 4) * 34;
    out += `<path d="M${x} ${y} h${w}" stroke="${glint}" stroke-width="3" opacity="${(0.05 + (i % 3) * 0.045).toFixed(2)}"/>`;
  }
  return out;
}

function scene(bg: BackgroundId, p: Palette, time: TimeOfDay): string {
  switch (bg) {
    case 'maru':
      return `
        <rect x="0" y="380" width="${W}" height="360" fill="${p.wall}"/>
        <rect x="60" y="420" width="220" height="280" rx="6" fill="#00000018" stroke="${p.wood}" stroke-width="8"/>
        <rect x="440" y="420" width="220" height="280" rx="6" fill="#00000018" stroke="${p.wood}" stroke-width="8"/>
        <circle cx="360" cy="330" r="46" fill="${p.light}" opacity="0.9"/>
        <rect x="356" y="180" width="8" height="110" fill="#00000055"/>
        <ellipse cx="360" cy="360" rx="300" ry="120" fill="url(#lamp)"/>
        ${floorPlanks(p, 740)}
        <ellipse cx="250" cy="980" rx="120" ry="42" fill="#b5493f" opacity="0.85"/>
        <ellipse cx="480" cy="1050" rx="120" ry="42" fill="#3f6bb5" opacity="0.85"/>`;
    case 'kitchen':
      return `
        <rect x="0" y="300" width="${W}" height="480" fill="${p.wall}"/>
        <rect x="40" y="620" width="640" height="140" rx="10" fill="#cfd6d8"/>
        <rect x="90" y="640" width="180" height="90" rx="8" fill="#8d979c"/>
        <circle cx="430" cy="686" r="34" fill="#4a4f52"/>
        <circle cx="530" cy="686" r="34" fill="#4a4f52"/>
        <rect x="120" y="380" width="480" height="18" rx="6" fill="${p.wood}"/>
        <rect x="180" y="398" width="24" height="70" fill="#9aa3a8"/>
        <rect x="260" y="398" width="24" height="90" fill="#9aa3a8"/>
        <rect x="340" y="398" width="24" height="60" fill="#9aa3a8"/>
        ${floorPlanks(p, 780)}`;
    case 'hallway':
      return `
        <rect x="0" y="240" width="${W}" height="600" fill="${p.wall}"/>
        <rect x="60" y="360" width="180" height="440" rx="4" fill="${p.wood}"/>
        <rect x="480" y="360" width="180" height="440" rx="4" fill="${p.wood}"/>
        <circle cx="222" cy="600" r="9" fill="#d8c07a"/>
        <circle cx="498" cy="600" r="9" fill="#d8c07a"/>
        <rect x="120" y="400" width="60" height="34" rx="4" fill="#ffffff" opacity="0.7"/>
        <rect x="540" y="400" width="60" height="34" rx="4" fill="#ffffff" opacity="0.7"/>
        <ellipse cx="360" cy="300" rx="240" ry="120" fill="url(#lamp)"/>
        ${floorPlanks(p, 840)}`;
    case 'rooftop':
      return `
        ${stars(time)}
        <rect x="0" y="700" width="${W}" height="${H - 700}" fill="${p.ground}"/>
        <rect x="0" y="660" width="${W}" height="50" fill="${p.wall}"/>
        <rect x="0" y="640" width="${W}" height="24" fill="#8f9aa3"/>
        <path d="M60 640 v-90 M200 640 v-90 M340 640 v-90 M480 640 v-90 M620 640 v-90" stroke="#8f9aa3" stroke-width="7"/>
        <path d="M40 560 h640" stroke="#b9c3ca" stroke-width="6"/>
        <rect x="90" y="520" width="90" height="42" rx="6" fill="#dfe6ea" opacity="0.85"/>
        <rect x="240" y="516" width="70" height="48" rx="6" fill="#e8d7c2" opacity="0.85"/>
        <rect x="520" y="700" width="120" height="180" rx="8" fill="${p.wall}"/>`;
    case 'yard':
      // 바닷가 언덕 위 2층 목조 집. 이 집이 이야기의 무대다.
      return `
        ${stars(time)}
        ${sea(p, time, 560)}
        <rect x="0" y="840" width="${W}" height="${H - 840}" fill="${p.ground}"/>
        <path d="M0 840 h${W} v40 h-${W}z" fill="#00000022"/>
        <rect x="150" y="330" width="440" height="230" fill="${p.wall}"/>
        <rect x="150" y="560" width="440" height="280" fill="${shadeBg(p.wall, -0.1)}"/>
        <path d="M120 330 L370 190 L620 330 Z" fill="${shadeBg(p.wood, -0.25)}"/>
        <path d="M120 330 h500 v22 h-500z" fill="${shadeBg(p.wood, -0.4)}"/>
        <rect x="200" y="390" width="90" height="100" rx="4" fill="${p.light}" opacity="${time === 'night' ? 0.85 : 0.45}"/>
        <rect x="450" y="390" width="90" height="100" rx="4" fill="${p.light}" opacity="${time === 'night' ? 0.55 : 0.4}"/>
        <path d="M245 390 v100 M200 440 h90 M495 390 v100 M450 440 h90" stroke="${shadeBg(p.wood, -0.3)}" stroke-width="5"/>
        <rect x="140" y="548" width="460" height="18" fill="${p.wood}"/>
        <rect x="330" y="620" width="120" height="220" rx="4" fill="${p.wood}"/>
        <circle cx="425" cy="740" r="9" fill="#d8c07a"/>
        <rect x="170" y="640" width="110" height="110" rx="4" fill="${p.light}" opacity="${time === 'night' ? 0.8 : 0.4}"/>
        <rect x="120" y="828" width="520" height="16" fill="${p.wood}"/>
        <path d="M130 844 v36 M250 844 v36 M370 844 v36 M490 844 v36 M630 844 v36" stroke="${shadeBg(p.wood, -0.3)}" stroke-width="9"/>
        <rect x="300" y="570" width="180" height="42" rx="6" fill="#5a4432"/>
        <text x="390" y="602" font-size="26" text-anchor="middle" fill="#f0e2c8" font-family="serif">하숙</text>
        <path d="M640 840 q18 -120 6 -190 q30 40 44 -10 q10 70 -6 200z" fill="#4a6b3f" opacity="0.85"/>
        <circle cx="80" cy="760" r="58" fill="#4a6b3f" opacity="0.8"/>
        <rect x="72" y="760" width="16" height="90" fill="#5b4330"/>`;
    case 'cvs':
      return `
        <rect x="0" y="760" width="${W}" height="${H - 760}" fill="#6b6b6b"/>
        <rect x="60" y="340" width="600" height="430" fill="#f2f4f5"/>
        <rect x="60" y="340" width="600" height="70" fill="#3a9b5c"/>
        <rect x="60" y="410" width="600" height="18" fill="#2f7fbd"/>
        <rect x="110" y="470" width="220" height="280" fill="#cfe4f2" opacity="0.8"/>
        <rect x="390" y="470" width="220" height="280" fill="#cfe4f2" opacity="0.8"/>
        <rect x="150" y="500" width="140" height="18" fill="#e3736b"/>
        <rect x="150" y="540" width="140" height="18" fill="#e3b96b"/>
        <rect x="240" y="800" width="240" height="14" rx="6" fill="#8a8a8a"/>
        <rect x="256" y="814" width="14" height="60" fill="#8a8a8a"/>
        <rect x="450" y="814" width="14" height="60" fill="#8a8a8a"/>`;
    case 'campus':
      return `
        <rect x="0" y="700" width="${W}" height="${H - 700}" fill="#5d7a4a"/>
        <rect x="0" y="380" width="${W}" height="330" fill="#8a9c76" opacity="0.5"/>
        <rect x="80" y="300" width="200" height="400" fill="${p.wall}" opacity="0.9"/>
        <rect x="440" y="340" width="200" height="360" fill="${p.wall}" opacity="0.9"/>
        <circle cx="360" cy="520" r="130" fill="#7a4f2a" opacity="0.15"/>
        <circle cx="360" cy="480" r="120" fill="#c9793a" opacity="0.85"/>
        <rect x="350" y="560" width="22" height="150" fill="#5b4330"/>
        <rect x="200" y="840" width="320" height="18" rx="6" fill="${p.wood}"/>
        <rect x="200" y="858" width="320" height="14" rx="4" fill="${p.wood}" opacity="0.8"/>
        <rect x="214" y="872" width="14" height="60" fill="#5a5a5a"/>
        <rect x="492" y="872" width="14" height="60" fill="#5a5a5a"/>`;
    case 'street':
      return `
        ${stars(time)}
        <rect x="0" y="780" width="${W}" height="${H - 780}" fill="#55524c"/>
        <rect x="0" y="360" width="280" height="430" fill="${p.wall}"/>
        <rect x="440" y="320" width="280" height="470" fill="${p.wall}" opacity="0.92"/>
        <rect x="60" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="170" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.5"/>
        <rect x="500" y="420" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="352" y="420" width="16" height="360" fill="#3f3f3f"/>
        <circle cx="360" cy="410" r="30" fill="${p.light}" opacity="0.95"/>
        <ellipse cx="360" cy="470" rx="200" ry="150" fill="url(#lamp)"/>`;
    case 'room':
      return `
        <rect x="0" y="260" width="${W}" height="560" fill="${p.wall}"/>
        <rect x="80" y="330" width="240" height="200" rx="6" fill="#6f8fb0" opacity="0.6" stroke="${p.wood}" stroke-width="10"/>
        <rect x="420" y="360" width="230" height="170" rx="6" fill="${p.wood}"/>
        <rect x="440" y="382" width="190" height="16" fill="#00000022"/>
        <rect x="440" y="416" width="190" height="16" fill="#00000022"/>
        <rect x="440" y="450" width="190" height="16" fill="#00000022"/>
        <rect x="120" y="640" width="280" height="140" rx="10" fill="#d8cdbb"/>
        <rect x="140" y="600" width="120" height="50" rx="10" fill="#f0e8db"/>
        ${floorPlanks(p, 820)}`;
    case 'annex':
      return `
        ${stars(time)}
        <rect x="0" y="760" width="${W}" height="${H - 760}" fill="${p.ground}"/>
        <rect x="140" y="400" width="440" height="370" fill="${p.wall}"/>
        <path d="M110 400 L360 270 L610 400z" fill="#4a3a2c"/>
        <rect x="230" y="500" width="260" height="200" rx="4" fill="${p.light}" opacity="0.5" stroke="${p.wood}" stroke-width="10"/>
        <path d="M360 500 v200 M230 600 h260" stroke="${p.wood}" stroke-width="8"/>
        <ellipse cx="360" cy="600" rx="260" ry="200" fill="url(#lamp)"/>`;
    case 'festival':
      return `
        ${stars(time)}
        <rect x="0" y="780" width="${W}" height="${H - 780}" fill="#4a4a48"/>
        <path d="M40 300 q160 60 320 0 q160 -60 320 0" stroke="#e8c15a" stroke-width="5" fill="none"/>
        <circle cx="120" cy="322" r="14" fill="#ff8f6b"/>
        <circle cx="240" cy="336" r="14" fill="#ffd36b"/>
        <circle cx="360" cy="330" r="14" fill="#8fd3a0"/>
        <circle cx="480" cy="312" r="14" fill="#8fb6f0"/>
        <circle cx="600" cy="296" r="14" fill="#e08fd0"/>
        <rect x="80" y="480" width="240" height="300" fill="#c65b4e"/>
        <path d="M60 480 h280 l-20 -50 h-240z" fill="#f0e2c8"/>
        <rect x="400" y="520" width="240" height="260" fill="#4e7cc6"/>
        <path d="M380 520 h280 l-20 -50 h-240z" fill="#f0e2c8"/>`;
    case 'station':
      return `
        <rect x="0" y="800" width="${W}" height="${H - 800}" fill="#59575a"/>
        <rect x="0" y="300" width="${W}" height="500" fill="${p.wall}" opacity="0.9"/>
        <rect x="200" y="420" width="320" height="380" rx="8" fill="#2f3a44"/>
        <rect x="230" y="450" width="260" height="60" rx="6" fill="#2f7fbd"/>
        <text x="360" y="494" font-size="34" text-anchor="middle" fill="#ffffff" font-family="sans-serif">역</text>
        <path d="M240 540 h240 M240 600 h240 M240 660 h240" stroke="#59646e" stroke-width="10"/>
        <rect x="60" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="67" cy="630" r="24" fill="${p.light}" opacity="0.9"/>
        <rect x="646" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="653" cy="630" r="24" fill="${p.light}" opacity="0.9"/>`;
    case 'beach':
      // 대문을 나서면 바로 백사장. 혼자 생각할 때 나오는 자리다.
      return `
        ${stars(time)}
        ${sea(p, time, 470)}
        <rect x="0" y="790" width="${W}" height="${H - 790}" fill="${shadeBg(p.ground, 0.18)}"/>
        <path d="M0 790 q180 26 360 0 q180 -26 360 0 v26 q-180 26 -360 0 q-180 -26 -360 0z" fill="#ffffff" opacity="0.5"/>
        <path d="M0 872 q180 22 360 0 q180 -22 360 0" stroke="#ffffff" stroke-width="5" fill="none" opacity="0.3"/>
        <rect x="70" y="560" width="230" height="16" rx="6" fill="#6f6a63" opacity="0.8"/>
        <rect x="286" y="516" width="22" height="62" fill="#e8e2d6"/>
        <rect x="284" y="500" width="26" height="18" rx="4" fill="#c4463c"/>
        <circle cx="297" cy="509" r="5" fill="${p.light}" opacity="0.95"/>
        <path d="M520 820 l24 -54 l24 54z" fill="#5b4330" opacity="0.7"/>
        <path d="M120 960 l40 -16 l40 16 l-40 14z" fill="#6f6a63" opacity="0.55"/>`;
  }
}

export function backgroundSvg(bg: BackgroundId, time: TimeOfDay): string {
  const p = PALETTES[time];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${BACKGROUND_LABEL[bg]} ${time}">
  ${sky(p)}
  ${scene(bg, p, time)}
  <rect width="${W}" height="${H}" fill="#0a0d18" opacity="${p.haze}"/>
</svg>`;
}

export function backgroundDataUri(bg: BackgroundId, time: TimeOfDay): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(backgroundSvg(bg, time))}`;
}
