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

/* ── 실사풍 렌더 도구 ──────────────────────────────────────────
 *
 * 평면 도형만 쌓으면 아무리 그려도 일러스트로 보인다. 사진처럼 보이게 하는 건
 * 도형이 아니라 (1) 빛의 기울기 (2) 질감 (3) 흐릿한 그림자 (4) 대기 원근이다.
 * 그래서 색은 전부 그라디언트로, 잔디·벽은 feTurbulence 질감으로,
 * 그림자는 블러로 깔고, 먼 것은 하늘색을 섞어 흐리게 만든다.
 *
 * 이 도구를 쓰는 배경(SELF_GRADED)은 마지막 전역 헤이즈를 건너뛴다.
 * 창문 불빛까지 같이 어두워지면 밤 별장이 죽기 때문이다.
 */

/** 두 색을 t 만큼 섞는다 */
function mixBg(a: string, b: string, t: number): string {
  const pick = (h: string) => {
    const m = /^#?([0-9a-f]{6})$/i.exec(h);
    const n = m ? parseInt(m[1], 16) : 0;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const [r1, g1, b1] = pick(a);
  const [r2, g2, b2] = pick(b);
  return `#${[r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t]
    .map((c) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, '0'))
    .join('')}`;
}

/** 시간대별 별장 장면 색 */
interface Look {
  zenith: string;
  horizonSky: string;
  sun: string;
  sunGlow: number;
  seaFar: string;
  seaNear: string;
  grassTop: string;
  grassBottom: string;
  sand: string;
  wallLight: string;
  wallDark: string;
  deck: string;
  glassA: string;
  glassB: string;
  shadow: number;
  haze: string;
  hazeAmt: number;
}

const LOOKS: Record<TimeOfDay, Look> = {
  morning: {
    zenith: '#5d9fd6',
    horizonSky: '#dbeaf4',
    sun: '#fff6de',
    sunGlow: 0.5,
    seaFar: '#4b86b4',
    seaNear: '#2f6c99',
    grassTop: '#9cb85e',
    grassBottom: '#5d7c33',
    sand: '#ddcaa8',
    wallLight: '#f2f0ec',
    wallDark: '#3f434b',
    deck: '#9c7550',
    glassA: '#cfe0ec',
    glassB: '#48606f',
    shadow: 0.28,
    haze: '#cfe0ef',
    hazeAmt: 0.1,
  },
  evening: {
    zenith: '#6b5a8e',
    horizonSky: '#ffb877',
    sun: '#ffd9a0',
    sunGlow: 0.85,
    seaFar: '#6b7fa0',
    seaNear: '#2f4059',
    grassTop: '#a08f4e',
    grassBottom: '#4e5530',
    sand: '#c9a97f',
    wallLight: '#efdcc6',
    wallDark: '#3b3740',
    deck: '#8a5f3c',
    glassA: '#f0c79a',
    glassB: '#4a3f48',
    shadow: 0.4,
    haze: '#f0b988',
    hazeAmt: 0.16,
  },
  night: {
    zenith: '#0b1224',
    horizonSky: '#20304c',
    sun: '#dce7ff',
    sunGlow: 0.35,
    seaFar: '#14213a',
    seaNear: '#0a1122',
    grassTop: '#2b3a2c',
    grassBottom: '#131d18',
    sand: '#3a3a3c',
    wallLight: '#9aa2b0',
    wallDark: '#1b1e25',
    deck: '#4a3826',
    glassA: '#39506b',
    glassB: '#141b28',
    shadow: 0.5,
    haze: '#0e1526',
    hazeAmt: 0.2,
  },
};

/** 질감·블러 필터와 그라디언트. 실사풍 장면마다 한 번씩 깐다. */
function villaDefs(L: Look): string {
  return `
  <defs>
    <linearGradient id="vsky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${L.zenith}"/>
      <stop offset="62%" stop-color="${mixBg(L.zenith, L.horizonSky, 0.55)}"/>
      <stop offset="100%" stop-color="${L.horizonSky}"/>
    </linearGradient>
    <linearGradient id="vsea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${mixBg(L.seaFar, L.horizonSky, 0.35)}"/>
      <stop offset="18%" stop-color="${L.seaFar}"/>
      <stop offset="100%" stop-color="${L.seaNear}"/>
    </linearGradient>
    <linearGradient id="vgrass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${mixBg(L.grassTop, L.horizonSky, 0.28)}"/>
      <stop offset="22%" stop-color="${L.grassTop}"/>
      <stop offset="100%" stop-color="${L.grassBottom}"/>
    </linearGradient>
    <linearGradient id="vsand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${mixBg(L.sand, L.horizonSky, 0.25)}"/>
      <stop offset="100%" stop-color="${shadeBg(L.sand, -0.28)}"/>
    </linearGradient>
    <linearGradient id="vwall" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%" stop-color="${shadeBg(L.wallLight, 0.06)}"/>
      <stop offset="70%" stop-color="${L.wallLight}"/>
      <stop offset="100%" stop-color="${shadeBg(L.wallLight, -0.16)}"/>
    </linearGradient>
    <linearGradient id="vwalld" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%" stop-color="${shadeBg(L.wallDark, 0.14)}"/>
      <stop offset="100%" stop-color="${shadeBg(L.wallDark, -0.25)}"/>
    </linearGradient>
    <linearGradient id="vglass" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stop-color="${L.glassA}"/>
      <stop offset="45%" stop-color="${mixBg(L.glassA, L.glassB, 0.7)}"/>
      <stop offset="100%" stop-color="${L.glassB}"/>
    </linearGradient>
    <linearGradient id="vlit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff0cc"/>
      <stop offset="55%" stop-color="#ffd489"/>
      <stop offset="100%" stop-color="#d99a45"/>
    </linearGradient>
    <linearGradient id="vdeck" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${shadeBg(L.deck, 0.18)}"/>
      <stop offset="100%" stop-color="${shadeBg(L.deck, -0.25)}"/>
    </linearGradient>
    <radialGradient id="vsun" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${L.sun}" stop-opacity="0.95"/>
      <stop offset="40%" stop-color="${L.sun}" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="${L.sun}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vwarm" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffd18a" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#ffd18a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vvig" cx="50%" cy="46%" r="72%">
      <stop offset="58%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="${(L.hazeAmt + 0.24).toFixed(2)}"/>
    </radialGradient>
    <filter id="vblur"><feGaussianBlur stdDeviation="14"/></filter>
    <filter id="vblur2"><feGaussianBlur stdDeviation="34"/></filter>
    <filter id="vsoft"><feGaussianBlur stdDeviation="5"/></filter>
    <filter id="vgrain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <filter id="vblade" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="turbulence" baseFrequency="0.014 0.16" numOctaves="2" seed="5" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <filter id="vstucco" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="2" seed="11" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>`;
}

/**
 * 해·달 자리. 저녁 해는 수평선 가까이 내려오는데, 그대로 두면 집 뒤에 가려
 * 노을이 사라진다. 그래서 저녁만 집 왼쪽 바다 위로 옮긴다.
 */
function sunPos(time: TimeOfDay, horizon: number): { x: number; y: number } {
  return time === 'evening' ? { x: 104, y: horizon - 52 } : { x: 545, y: 205 };
}

/** 하늘 — 그라디언트 + 해/달 + 흐린 구름 */
function vSky(L: Look, time: TimeOfDay, horizon: number): string {
  const { x: sunX, y: sunY } = sunPos(time, horizon);
  const sunR = time === 'night' ? 34 : 46;
  let out = `<rect width="${W}" height="${horizon + 4}" fill="url(#vsky)"/>`;
  if (time === 'night') out += stars(time);
  out += `
    <circle cx="${sunX}" cy="${sunY}" r="${sunR * 5}" fill="url(#vsun)" opacity="${L.sunGlow}"/>
    <circle cx="${sunX}" cy="${sunY}" r="${sunR}" fill="${L.sun}" opacity="${time === 'night' ? 0.92 : 0.82}"/>`;
  if (time === 'night') {
    out += `<circle cx="${sunX - 11}" cy="${sunY - 7}" r="7" fill="#b9c6de" opacity="0.4"/>
            <circle cx="${sunX + 9}" cy="${sunY + 10}" r="5" fill="#b9c6de" opacity="0.3"/>`;
  }
  const cloudFill = time === 'night' ? '#2b3852' : time === 'evening' ? '#ffd9b0' : '#ffffff';
  const cloud = (cx: number, cy: number, rx: number, ry: number, op: number) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${cloudFill}" opacity="${op}" filter="url(#vblur)"/>`;
  out +=
    cloud(180, 150, 150, 34, 0.5) +
    cloud(300, 178, 120, 26, 0.32) +
    cloud(590, 118, 130, 30, 0.4) +
    cloud(90, 252, 110, 22, 0.28) +
    cloud(430, horizon - 108, 215, 24, time === 'evening' ? 0.5 : 0.26);
  return out;
}

/** 바다 — 수평선 발광 + 윤슬 + 잔물결 */
function vSea(L: Look, time: TimeOfDay, top: number, bottom: number): string {
  const h = bottom - top;
  const glint = time === 'night' ? '#cfe0ff' : time === 'evening' ? '#ffd9a8' : '#ffffff';
  const { x: sunX } = sunPos(time, top);
  let out = `<rect x="0" y="${top}" width="${W}" height="${h}" fill="url(#vsea)"/>
             <rect x="0" y="${top - 2}" width="${W}" height="5" fill="${L.sun}" opacity="0.5" filter="url(#vsoft)"/>`;
  // 해·달 아래로 떨어지는 윤슬. 가까울수록 넓고 성기다.
  // 선명하게 두면 막대를 늘어놓은 것처럼 보여서 한 겹 흐린다.
  out += `<g filter="url(#vsoft)">`;
  for (let i = 0; i < 22; i += 1) {
    const t = i / 21;
    const y = top + 8 + t * (h - 10);
    const w = 16 + t * t * 150;
    const x = sunX - w / 2 + Math.sin(i * 2.7) * (8 + t * 40);
    out += `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${(2 + t * 4).toFixed(
      0,
    )}" rx="2" fill="${glint}" opacity="${(0.34 - t * 0.2).toFixed(2)}"/>`;
  }
  out += `</g><g filter="url(#vsoft)">`;
  for (let i = 0; i < 18; i += 1) {
    const t = i / 17;
    const y = top + 14 + t * (h - 16);
    const x = ((i * 191) % (W - 160)) + 30;
    const w = 40 + (i % 5) * 46 + t * 60;
    out += `<rect x="${x}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${(1.5 + t * 2.5).toFixed(
      1,
    )}" rx="1" fill="${glint}" opacity="${(0.05 + (i % 3) * 0.035).toFixed(2)}"/>`;
  }
  return out + `</g>`;
}

/** 잔디 언덕 — 그라디언트 + 결 질감 + 앞쪽 풀날 */
function vGrass(L: Look, top: number): string {
  let blades = '';
  for (let i = 0; i < 90; i += 1) {
    const x = (i * 83) % W;
    const y = H - 10 - ((i * 37) % 150);
    const len = 26 + ((i * 13) % 40);
    const lean = ((i % 5) - 2) * 7;
    blades += `<path d="M${x} ${y} q${lean / 2} ${-len / 2} ${lean} ${-len}" stroke="${shadeBg(
      L.grassBottom,
      i % 3 === 0 ? 0.3 : -0.2,
    )}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  }
  return `
    <path d="M0 ${top + 42} C180 ${top - 28} 520 ${top - 12} ${W} ${top + 48} L${W} ${H} L0 ${H} Z" fill="url(#vgrass)"/>
    <ellipse cx="170" cy="${top + 150}" rx="280" ry="90" fill="${shadeBg(L.grassBottom, -0.35)}" opacity="0.4" filter="url(#vblur2)"/>
    <ellipse cx="610" cy="${top + 230}" rx="260" ry="100" fill="${shadeBg(L.grassBottom, -0.3)}" opacity="0.35" filter="url(#vblur2)"/>
    <ellipse cx="380" cy="${top + 96}" rx="320" ry="60" fill="${shadeBg(L.grassTop, 0.25)}" opacity="0.28" filter="url(#vblur2)"/>
    <rect x="0" y="${top - 40}" width="${W}" height="${H - top + 40}" filter="url(#vblade)" opacity="0.28"
          style="mix-blend-mode:overlay"/>
    <g opacity="0.72" filter="url(#vsoft)">${blades}</g>`;
}

/** 모래 해변 — 젖은 모래 띠와 파도 거품 */
function vSand(top: number): string {
  let out = `<path d="M0 ${top} C200 ${top - 18} 520 ${top + 14} ${W} ${top - 8} L${W} ${H} L0 ${H} Z" fill="url(#vsand)"/>`;
  out += `<path d="M0 ${top + 6} C200 ${top - 12} 520 ${top + 20} ${W} ${top - 2} L${W} ${top + 46} C520 ${
    top + 64
  } 200 ${top + 32} 0 ${top + 50} Z" fill="#ffffff" opacity="0.38" filter="url(#vsoft)"/>`;
  out += `<path d="M0 ${top + 74} C200 ${top + 56} 520 ${top + 88} ${W} ${top + 66}" stroke="#ffffff"
                stroke-width="4" fill="none" opacity="0.2"/>`;
  out += `<rect x="0" y="${top - 20}" width="${W}" height="${H - top + 20}" filter="url(#vgrain)" opacity="0.1"
                style="mix-blend-mode:overlay"/>`;
  return out;
}

/** 유리창 한 장 — 낮엔 하늘 반사, 밤엔 실내 불빛 */
function vPane(x: number, y: number, w: number, h: number, time: TimeOfDay, cols = 2): string {
  const lit = time === 'night';
  const frame = lit ? '#0d0f13' : '#2f333a';
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${lit ? 'url(#vlit)' : 'url(#vglass)'}"/>`;
  if (lit) {
    // 실내가 비쳐 보이는 느낌 — 아래가 더 밝고 가구 그림자가 진다
    out += `<rect x="${x}" y="${(y + h * 0.62).toFixed(0)}" width="${w}" height="${(h * 0.38).toFixed(
      0,
    )}" fill="#ffe6b0" opacity="0.3"/>
            <rect x="${(x + w * 0.14).toFixed(0)}" y="${(y + h * 0.56).toFixed(0)}" width="${(w * 0.28).toFixed(
      0,
    )}" height="${(h * 0.44).toFixed(0)}" fill="#8a5f2c" opacity="0.28"/>`;
  } else {
    out += `<path d="M${x} ${y + h} L${(x + w * 0.62).toFixed(0)} ${y} L${x + w} ${y} L${(x + w * 0.38).toFixed(
      0,
    )} ${y + h} Z" fill="#ffffff" opacity="0.15"/>`;
  }
  for (let i = 1; i < cols; i += 1) {
    out += `<rect x="${(x + (w / cols) * i - 2).toFixed(0)}" y="${y}" width="4" height="${h}" fill="${frame}" opacity="0.9"/>`;
  }
  out += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${frame}" stroke-width="5"/>`;
  return out;
}

/** 원목 데크 바닥 — 널 틈이 소실점 쪽으로 살짝 모인다 */
function vDeck(x: number, y: number, w: number, h: number): string {
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#vdeck)"/>`;
  for (let i = 1; i < 26; i += 1) {
    const px = x + (w / 26) * i;
    out += `<path d="M${px.toFixed(0)} ${y} L${(px + (px - W / 2) * 0.1).toFixed(0)} ${y + h}" stroke="#00000055" stroke-width="2"/>`;
  }
  return out + `<rect x="${x}" y="${y}" width="${w}" height="4" fill="#ffffff" opacity="0.12"/>`;
}

/**
 * 바닷가 고급 별장.
 * 흰 스투코 박공동과 짙은 회색 박공동이 붙어 있고, 1층은 통유리,
 * 오른쪽에 외부 철제 계단, 앞으로 넓은 원목 데크가 깔린다.
 */
function villa(L: Look, time: TimeOfDay): string {
  const lit = time === 'night';
  const eave = lit ? '#0b0d11' : '#23262c';
  const steel = lit ? '#15181e' : '#33373e';
  const rail = (x: number, y: number, w: number, n: number, h: number) =>
    `<rect x="${x}" y="${y}" width="${w}" height="5" fill="${steel}"/>` +
    [...Array(n).keys()]
      .map((i) => `<rect x="${x + 4 + i * ((w - 8) / (n - 1))}" y="${y}" width="3" height="${h}" fill="${steel}" opacity="0.85"/>`)
      .join('') +
    `<rect x="${x}" y="${y + h - 4}" width="${w}" height="4" fill="${steel}"/>`;

  return `
  <ellipse cx="400" cy="808" rx="330" ry="40" fill="#000000" opacity="${L.shadow}" filter="url(#vblur)"/>

  <!-- 오른쪽 짙은 동 -->
  <path d="M400 556 L520 430 L642 556 L642 800 L400 800 Z" fill="url(#vwalld)"/>
  <path d="M392 562 L520 424 L650 562 L642 574 L520 446 L400 574 Z" fill="${eave}"/>
  <path d="M400 574 L520 446 L642 574 L642 596 L520 470 L400 596 Z" fill="#000000" opacity="0.3"/>
  <rect x="400" y="756" width="242" height="44" fill="#000000" opacity="0.26"/>
  <rect x="470" y="470" width="100" height="60" fill="${lit ? 'url(#vlit)' : 'url(#vglass)'}" stroke="${eave}" stroke-width="5"/>
  ${vPane(430, 594, 182, 202, time, 3)}

  <!-- 굴뚝 -->
  <rect x="592" y="386" width="34" height="78" fill="${shadeBg(L.wallLight, -0.08)}"/>
  <rect x="587" y="380" width="44" height="12" rx="3" fill="${eave}"/>

  <!-- 왼쪽 흰 동. 살짝 왼쪽에서 본 각도라 측면과 지붕 뒷면이 보인다 -->
  <path d="M302 346 L250 378 L124 524 L176 486 Z" fill="${shadeBg(eave, 0.14)}"/>
  <path d="M124 524 L176 486 L176 800 L124 816 Z" fill="${shadeBg(L.wallLight, -0.46)}"/>
  <path d="M124 524 L176 486 L176 512 L124 550 Z" fill="#000000" opacity="0.3"/>
  <path d="M176 486 L302 352 L428 486 L428 800 L176 800 Z" fill="url(#vwall)"/>
  <rect x="176" y="486" width="252" height="314" filter="url(#vstucco)" opacity="0.13" style="mix-blend-mode:overlay"/>
  <path d="M168 492 L302 346 L436 492 L428 504 L302 368 L176 504 Z" fill="${eave}"/>
  <path d="M176 504 L302 368 L428 504 L428 528 L302 394 L176 528 Z" fill="#000000" opacity="0.28"/>
  <rect x="176" y="756" width="252" height="44" fill="#000000" opacity="0.22"/>
  <rect x="277" y="402" width="50" height="46" fill="${lit ? 'url(#vlit)' : 'url(#vglass)'}" stroke="${eave}" stroke-width="4"/>
  ${vPane(200, 522, 86, 76, time, 2)}
  ${vPane(318, 522, 86, 76, time, 2)}
  ${rail(190, 600, 224, 8, 38)}
  ${vPane(196, 654, 208, 146, time, 3)}
  <rect x="352" y="692" width="56" height="108" fill="${shadeBg(L.wallDark, lit ? 0.12 : 0)}" stroke="${eave}" stroke-width="4"/>
  <circle cx="362" cy="748" r="4" fill="${lit ? '#ffd89a' : '#c8b48a'}"/>

  <!-- 오른쪽 외부 철제 계단 -->
  <path d="M642 800 L706 800 L706 610 L642 610 Z" fill="${steel}" opacity="0.45"/>
  ${[...Array(9).keys()].map((i) => `<rect x="644" y="${618 + i * 20}" width="60" height="6" fill="${steel}"/>`).join('')}
  <path d="M646 806 L702 606 M702 806 L702 602" stroke="${steel}" stroke-width="6" fill="none"/>

  <!-- 데크 + 난간 + 데크 밑 옹벽 -->
  ${vDeck(96, 800, 528, 58)}
  <rect x="96" y="856" width="528" height="78" fill="${shadeBg(L.deck, -0.44)}"/>
  ${[...Array(22).keys()].map((i) => `<rect x="${98 + i * 24}" y="856" width="2" height="78" fill="#00000044"/>`).join('')}
  ${rail(96, 760, 528, 18, 42)}

  ${
    lit
      ? `<ellipse cx="300" cy="702" rx="255" ry="148" fill="url(#vwarm)"/>
         <ellipse cx="520" cy="690" rx="200" ry="130" fill="url(#vwarm)"/>
         <ellipse cx="360" cy="832" rx="300" ry="58" fill="#ffca7a" opacity="0.13" filter="url(#vblur)"/>`
      : ''
  }`;
}

/** 대기 원근 + 그레인 + 비네트. 실사풍 장면의 마무리 */
function vFinish(L: Look, horizon: number): string {
  return `
    <rect x="0" y="${horizon - 120}" width="${W}" height="240" fill="${L.haze}" opacity="${L.hazeAmt}"
          filter="url(#vblur2)"/>
    <rect width="${W}" height="${H}" filter="url(#vgrain)" opacity="0.055" style="mix-blend-mode:overlay"/>
    <rect width="${W}" height="${H}" fill="url(#vvig)"/>`;
}

/** 실사풍으로 다시 그린 배경들. 전역 헤이즈를 건너뛰고 스스로 색을 잡는다. */
const SELF_GRADED = new Set<BackgroundId>(['yard', 'beach', 'maru', 'annex']);

/** 실사풍 장면이 쓰는 그라디언트·필터 id 목록 */
const V_IDS = [
  'vsky', 'vsea', 'vgrass', 'vsand', 'vwall', 'vwalld', 'vglass', 'vlit', 'vdeck',
  'vsun', 'vwarm', 'vvig', 'vblur', 'vblur2', 'vsoft', 'vgrain', 'vblade', 'vstucco',
  'vwin', 'vfloor',
];

let bgSeq = 0;

/**
 * id 를 호출마다 다르게 만든다.
 * 한 문서에 배경 두 장을 인라인으로 넣으면(소개 페이지·대조표) 같은 id 가 겹쳐
 * 뒤 그림이 앞 그림의 그라디언트를 써버린다 — 아침 하늘이 저녁색으로 나오는 식이다.
 */
function uniquifyIds(svg: string): string {
  bgSeq = (bgSeq + 1) % 1e6;
  const n = bgSeq.toString(36);
  let out = svg;
  for (const id of V_IDS) {
    // 정규식은 괄호 이스케이프가 까다로워 단순 문자열 치환으로 간다
    out = out.split(`id="${id}"`).join(`id="${id}${n}"`);
    out = out.split(`url(#${id})`).join(`url(#${id}${n})`);
  }
  return out;
}

/**
 * 실사풍으로 다시 그린 네 장면 — 별장 외관 / 집 앞 바닷가 / 거실 마루 / 별채.
 * 나머지 배경(편의점·캠퍼스 등)은 집 밖이라 기존 그림을 그대로 쓴다.
 */
function realScene(bg: BackgroundId, L: Look, time: TimeOfDay): string {
  switch (bg) {
    // ── 바닷가 언덕 위 별장. 이 집이 이야기의 무대다 ──
    case 'yard': {
      const horizon = 600;
      return `
        ${vSky(L, time, horizon)}
        ${vSea(L, time, horizon, 900)}
        ${villa(L, time)}
        ${vGrass(L, 900)}
        <rect x="286" y="742" width="120" height="34" rx="4" fill="${shadeBg(L.deck, -0.3)}"/>
        <text x="346" y="766" font-size="21" text-anchor="middle" fill="#f0e2c8" font-family="serif"
              letter-spacing="3">하숙</text>
        ${vFinish(L, horizon)}`;
    }

    // ── 대문을 나서면 바로 백사장. 언덕 위로 집이 보인다 ──
    case 'beach': {
      const horizon = 470;
      const headland = shadeBg(L.grassBottom, time === 'night' ? -0.1 : 0.05);
      return `
        ${vSky(L, time, horizon)}
        ${vSea(L, time, horizon, 812)}
        <!-- 왼쪽 방파제와 등대 -->
        <rect x="0" y="556" width="250" height="16" rx="5" fill="${shadeBg(L.wallDark, 0.16)}" opacity="0.9"/>
        <rect x="236" y="502" width="24" height="62" fill="${shadeBg(L.wallLight, -0.06)}"/>
        <rect x="233" y="486" width="30" height="18" rx="4" fill="#b8402f"/>
        <circle cx="248" cy="495" r="6" fill="${L.sun}" opacity="${time === 'night' ? 0.95 : 0.6}"/>
        <!-- 오른쪽 언덕과 그 위의 집 -->
        <path d="M418 742 C486 664 560 646 640 656 L${W} 668 L${W} 812 L418 812 Z" fill="${headland}"/>
        <g transform="translate(452 450) scale(0.3)" opacity="0.96">${villa(L, time)}</g>
        <rect x="400" y="470" width="${W - 400}" height="300" fill="${L.haze}" opacity="${(L.hazeAmt * 1.6).toFixed(
          2,
        )}" filter="url(#vblur2)"/>
        ${vSand(812)}
        ${vFinish(L, horizon)}`;
    }

    // ── 거실 마루. 통유리 너머로 바다가 보이고, 판은 여기서 벌어진다 ──
    case 'maru': {
      const horizon = 404;
      const lit = time === 'night';
      const wall = shadeBg(L.wallDark, lit ? 0.06 : 0.3);
      const floor = shadeBg(L.deck, lit ? -0.06 : 0.12);
      let planks = '';
      for (let i = 0; i <= 11; i += 1) {
        const x = (W / 11) * i;
        planks += `<path d="M${x.toFixed(0)} 704 L${(x + (x - W / 2) * 0.55).toFixed(0)} ${H}" stroke="#00000044" stroke-width="3"/>`;
      }
      for (let i = 1; i <= 4; i += 1) {
        const y = 704 + i * i * 34;
        planks += `<path d="M0 ${y} h${W}" stroke="#00000026" stroke-width="2"/>`;
      }
      return `
        <defs>
          <clipPath id="vwin"><rect x="74" y="150" width="572" height="548"/></clipPath>
          <linearGradient id="vfloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${shadeBg(floor, -0.3)}"/>
            <stop offset="45%" stop-color="${floor}"/>
            <stop offset="100%" stop-color="${shadeBg(floor, -0.34)}"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="${wall}"/>
        <!-- 통유리 너머 -->
        <g clip-path="url(#vwin)">
          ${vSky(L, time, horizon)}
          ${vSea(L, time, horizon, 700)}
        </g>
        <!-- 유리 반사와 창틀 -->
        <path d="M74 698 L360 150 L520 150 L234 698 Z" fill="#ffffff" opacity="0.07"/>
        ${[172, 270, 368, 466, 564]
          .map((x) => `<rect x="${x}" y="150" width="7" height="548" fill="#0c0e12"/>`)
          .join('')}
        <rect x="74" y="150" width="572" height="548" fill="none" stroke="#0c0e12" stroke-width="12"/>
        <!-- 천장과 좌우 벽 -->
        <rect x="0" y="0" width="${W}" height="150" fill="${shadeBg(wall, -0.35)}"/>
        <rect x="0" y="0" width="74" height="${H}" fill="${shadeBg(wall, -0.2)}"/>
        <rect x="646" y="0" width="${W - 646}" height="${H}" fill="${shadeBg(wall, -0.26)}"/>
        <!-- 펜던트 조명 -->
        <rect x="356" y="0" width="7" height="118" fill="#0c0e12"/>
        <path d="M312 118 h96 l-22 54 h-52 z" fill="${shadeBg(L.wallDark, 0.2)}"/>
        <ellipse cx="360" cy="172" rx="26" ry="8" fill="${lit ? '#fff2cf' : '#e8e2d4'}"/>
        ${lit ? `<ellipse cx="360" cy="330" rx="300" ry="230" fill="url(#vwarm)"/>` : ''}
        <!-- 마루 바닥 -->
        <path d="M0 698 h${W} v${H - 698} h-${W} Z" fill="url(#vfloor)"/>
        ${planks}
        <ellipse cx="360" cy="960" rx="330" ry="150" fill="${lit ? '#ffca7a' : '#ffffff'}" opacity="${
          lit ? 0.12 : 0.07
        }" filter="url(#vblur2)"/>
        <!-- 러그와 방석 두 장 -->
        <ellipse cx="360" cy="1010" rx="320" ry="120" fill="${shadeBg(L.wallDark, 0.14)}" opacity="0.55"/>
        <ellipse cx="238" cy="972" rx="118" ry="42" fill="#000000" opacity="0.4" filter="url(#vsoft)"/>
        <ellipse cx="482" cy="1046" rx="118" ry="42" fill="#000000" opacity="0.4" filter="url(#vsoft)"/>
        <ellipse cx="236" cy="964" rx="116" ry="40" fill="#8d3a33"/>
        <ellipse cx="236" cy="956" rx="116" ry="40" fill="#b5493f"/>
        <ellipse cx="480" cy="1038" rx="116" ry="40" fill="#31538c"/>
        <ellipse cx="480" cy="1030" rx="116" ry="40" fill="#3f6bb5"/>
        ${vFinish(L, horizon)}`;
    }

    // ── 마당 끝 별채. 삼십 년째 불이 꺼지지 않는 방 ──
    default: {
      const horizon = 520;
      const lit = time === 'night';
      const eave = lit ? '#0b0d11' : '#23262c';
      return `
        ${vSky(L, time, horizon)}
        ${vSea(L, time, horizon, 796)}
        <ellipse cx="372" cy="792" rx="250" ry="34" fill="#000000" opacity="${L.shadow}" filter="url(#vblur)"/>
        <path d="M190 552 L372 404 L554 552 L554 790 L190 790 Z" fill="url(#vwalld)"/>
        <path d="M180 558 L372 396 L564 558 L554 570 L372 420 L190 570 Z" fill="${eave}"/>
        <rect x="190" y="552" width="364" height="238" filter="url(#vstucco)" opacity="0.12" style="mix-blend-mode:overlay"/>
        ${vPane(244, 606, 176, 146, time, 2)}
        <rect x="452" y="640" width="62" height="150" fill="${shadeBg(L.wallDark, lit ? 0.12 : 0)}" stroke="${eave}" stroke-width="4"/>
        <circle cx="462" cy="716" r="4" fill="${lit ? '#ffd89a' : '#c8b48a'}"/>
        ${vDeck(152, 790, 440, 44)}
        <rect x="152" y="832" width="440" height="52" fill="${shadeBg(L.deck, -0.44)}"/>
        ${lit ? `<ellipse cx="332" cy="690" rx="240" ry="150" fill="url(#vwarm)"/>` : ''}
        ${vGrass(L, 872)}
        ${vFinish(L, horizon)}`;
    }
  }
}

function scene(bg: BackgroundId, p: Palette, time: TimeOfDay): string {
  switch (bg) {
    case 'yard':
    case 'beach':
    case 'maru':
    case 'annex':
      return realScene(bg, LOOKS[time], time);
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
  }
}

export function backgroundSvg(bg: BackgroundId, time: TimeOfDay): string {
  const p = PALETTES[time];
  const head = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${BACKGROUND_LABEL[bg]} ${time}">`;
  // 실사풍 장면은 제 하늘과 색보정을 직접 그린다. 전역 헤이즈를 씌우면 창문 불빛이 죽는다.
  if (SELF_GRADED.has(bg)) {
    return uniquifyIds(`${head}
  ${villaDefs(LOOKS[time])}
  ${scene(bg, p, time)}
</svg>`);
  }
  return `${head}
  ${sky(p)}
  ${scene(bg, p, time)}
  <rect width="${W}" height="${H}" fill="#0a0d18" opacity="${p.haze}"/>
</svg>`;
}

export function backgroundDataUri(bg: BackgroundId, time: TimeOfDay): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(backgroundSvg(bg, time))}`;
}
