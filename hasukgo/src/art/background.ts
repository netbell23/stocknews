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
const SELF_GRADED = new Set<BackgroundId>([
  'yard', 'beach', 'maru', 'annex', 'kitchen', 'hallway', 'room', 'rooftop',
]);

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

/* ── 실내 렌더 도구 ────────────────────────────────────────────
 *
 * 집 안은 바깥과 다른 문제를 푼다. 바깥은 빛과 대기가 깊이를 만들지만
 * 실내는 **투시**가 깊이를 만든다. 그래서 모든 방을 소실점 하나짜리 상자로
 * 그린다 — 뒷벽 하나, 옆벽 둘, 천장, 바닥. 가구는 그 상자 안에 놓는다.
 *
 * 톤은 두 가지다. 거실·옥상은 모던 미니멀(따뜻한 흰 벽 + 오크 바닥),
 * 복도·주방·방은 웜 플라스터(올리브빛 흙벽 + 타일 바닥).
 */

/** 방 상자의 기준선. 뒷벽이 이 사각형이고 나머지는 여기서 퍼져나간다. */
const RB = { top: 214, bottom: 700, left: 112, right: 608 };

interface RoomTone {
  wall: string;
  wallLit: string;
  ceil: string;
  floor: string;
  floorDark: string;
  trim: string;
  glow: number;
}

/** 시간대 x 톤 → 실내 색 */
function roomTone(time: TimeOfDay, warm: boolean): RoomTone {
  if (warm) {
    // 웜 플라스터 — 올리브빛 흙벽, 밝은 타일
    if (time === 'night')
      return { wall: '#6a6448', wallLit: '#8a8058', ceil: '#4e4a38', floor: '#8e8a80', floorDark: '#5d5a52', trim: '#8a6a3c', glow: 0.9 };
    if (time === 'evening')
      return { wall: '#c4b483', wallLit: '#e0cd96', ceil: '#b0a279', floor: '#ded6c6', floorDark: '#a89f8d', trim: '#a9793f', glow: 0.5 };
    return { wall: '#cfc49a', wallLit: '#e6dcb4', ceil: '#ded6bb', floor: '#ece7db', floorDark: '#c2bcae', trim: '#b08b52', glow: 0.18 };
  }
  // 모던 미니멀 — 따뜻한 흰 벽, 오크 바닥
  if (time === 'night')
    return { wall: '#4b4b50', wallLit: '#6a6a70', ceil: '#3a3a3f', floor: '#6b4f30', floorDark: '#44311d', trim: '#2a2a2e', glow: 0.9 };
  if (time === 'evening')
    return { wall: '#e0d5c6', wallLit: '#f2e2cc', ceil: '#cfc5b8', floor: '#c08f55', floorDark: '#8d6437', trim: '#5a5550', glow: 0.45 };
  return { wall: '#ece7df', wallLit: '#faf7f2', ceil: '#f2eee8', floor: '#c99a63', floorDark: '#9a7345', trim: '#6b6660', glow: 0.14 };
}

/** 소실점 하나짜리 방 상자 — 천장·옆벽·뒷벽·바닥 */
function roomBox(T: RoomTone, floorKind: 'oak' | 'tile'): string {
  const { top, bottom, left, right } = RB;
  let out = `
    <rect width="${W}" height="${H}" fill="${T.wall}"/>
    <!-- 천장 -->
    <path d="M0 0 L${W} 0 L${right} ${top} L${left} ${top} Z" fill="${T.ceil}"/>
    <!-- 옆벽 -->
    <path d="M0 0 L${left} ${top} L${left} ${bottom} L0 ${H} Z" fill="${shadeBg(T.wall, -0.16)}"/>
    <path d="M${W} 0 L${right} ${top} L${right} ${bottom} L${W} ${H} Z" fill="${shadeBg(T.wall, -0.24)}"/>
    <!-- 뒷벽 -->
    <rect x="${left}" y="${top}" width="${right - left}" height="${bottom - top}" fill="${T.wall}"/>
    <rect x="${left}" y="${top}" width="${right - left}" height="${bottom - top}" filter="url(#vstucco)"
          opacity="0.13" style="mix-blend-mode:overlay"/>
    <!-- 바닥 -->
    <path d="M${left} ${bottom} L${right} ${bottom} L${W + 200} ${H} L${-200} ${H} Z" fill="${T.floor}"/>`;

  if (floorKind === 'oak') {
    // 널이 소실점으로 모인다
    for (let i = 0; i <= 14; i += 1) {
      const bx = left + ((right - left) / 14) * i;
      const fx = -200 + ((W + 400) / 14) * i;
      out += `<path d="M${bx.toFixed(0)} ${bottom} L${fx.toFixed(0)} ${H}" stroke="${T.floorDark}" stroke-width="2" opacity="0.5"/>`;
    }
    for (let i = 1; i <= 5; i += 1) {
      const y = bottom + i * i * 22;
      if (y < H) out += `<path d="M0 ${y.toFixed(0)} h${W}" stroke="${T.floorDark}" stroke-width="1.5" opacity="0.22"/>`;
    }
  } else {
    // 큰 타일 — 가로줄은 멀수록 촘촘하게
    for (let i = 0; i <= 10; i += 1) {
      const bx = left + ((right - left) / 10) * i;
      const fx = -200 + ((W + 400) / 10) * i;
      out += `<path d="M${bx.toFixed(0)} ${bottom} L${fx.toFixed(0)} ${H}" stroke="${T.floorDark}" stroke-width="2" opacity="0.35"/>`;
    }
    for (let i = 1; i <= 6; i += 1) {
      const y = bottom + i * i * 17;
      if (y < H) out += `<path d="M0 ${y.toFixed(0)} h${W}" stroke="${T.floorDark}" stroke-width="2" opacity="0.3"/>`;
    }
  }
  // 바닥 앞쪽이 어두워지며 깊이가 생긴다
  out += `<rect x="0" y="${bottom}" width="${W}" height="${H - bottom}" fill="${T.floorDark}" opacity="0.2"
                filter="url(#vblur2)"/>`;
  // 벽과 바닥이 만나는 걸레받이
  out += `<path d="M${left} ${bottom - 10} h${right - left} v10 h-${right - left} Z" fill="${shadeBg(T.wall, -0.3)}" opacity="0.6"/>`;
  return out;
}

/** 천장 간접조명(코브) + 스팟 — 모던 거실의 인상은 거의 이 선이 만든다 */
function coveLights(T: RoomTone, time: TimeOfDay): string {
  const on = time === 'night' || time === 'evening';
  const c = on ? '#fff0d0' : '#ffffff';
  let out = '';
  for (const y of [70, 128]) {
    out += `<rect x="${140 + (y - 70) * 0.5}" y="${y}" width="${440 - (y - 70)}" height="5" rx="2" fill="${c}"
                  opacity="${on ? 0.95 : 0.5}"/>`;
    if (on) out += `<rect x="${130 + (y - 70) * 0.5}" y="${y - 10}" width="${460 - (y - 70)}" height="26" rx="10" fill="${c}"
                          opacity="0.2" filter="url(#vsoft)"/>`;
  }
  // 트랙 스팟
  out += `<rect x="96" y="176" width="300" height="4" fill="${T.trim}" opacity="0.8"/>`;
  for (const x of [140, 220, 300]) {
    out += `<rect x="${x}" y="${172}" width="14" height="22" rx="4" fill="${T.trim}"/>`;
    if (on)
      out += `<path d="M${x + 7} ${194} L${x - 50} ${RB.bottom} L${x + 64} ${RB.bottom} Z" fill="${c}" opacity="0.13" filter="url(#vsoft)"/>`;
  }
  return out;
}

/** 라탄 펜던트 등 */
function pendant(x: number, y: number, r: number, time: TimeOfDay): string {
  const on = time === 'night' || time === 'evening';
  return `
    <rect x="${x - 2}" y="0" width="4" height="${y - r}" fill="#3a3129"/>
    <path d="M${x - r} ${y} a${r} ${r * 0.92} 0 0 1 ${r * 2} 0 Z" fill="${on ? '#e8bd72' : '#c9a877'}"/>
    ${[-0.6, -0.2, 0.2, 0.6]
      .map((t) => `<path d="M${x + r * t} ${y} q${-r * t * 0.3} ${-r * 0.75} 0 ${-r * 0.92}" stroke="#00000033" stroke-width="2" fill="none"/>`)
      .join('')}
    <ellipse cx="${x}" cy="${y}" rx="${r}" ry="4" fill="${on ? '#fff0c8' : '#d8cdb8'}"/>
    ${on ? `<ellipse cx="${x}" cy="${y + 90}" rx="${r * 2.4}" ry="${r * 1.9}" fill="url(#vwarm)"/>` : ''}`;
}

/** 벽에 드리우는 러그 — 앞쪽이 넓은 사다리꼴 */
function rug(cy: number, halfTop: number, halfBottom: number, h: number, fill: string): string {
  return `<path d="M${360 - halfTop} ${cy} L${360 + halfTop} ${cy} L${360 + halfBottom} ${cy + h} L${
    360 - halfBottom
  } ${cy + h} Z" fill="${fill}"/>`;
}

/** L 자 패브릭 소파 (참고 사진의 회색 세로 소파) */
function sofa(x: number, y: number, w: number, time: TimeOfDay): string {
  const body = time === 'night' ? '#4e4c49' : time === 'evening' ? '#9c968c' : '#a9a49c';
  const cush = shadeBg(body, 0.14);
  return `
    <ellipse cx="${x + w / 2}" cy="${y + 96}" rx="${w * 0.6}" ry="22" fill="#000" opacity="0.28" filter="url(#vsoft)"/>
    <rect x="${x}" y="${y}" width="${w}" height="56" rx="14" fill="${shadeBg(body, -0.2)}"/>
    <rect x="${x + 8}" y="${y + 46}" width="${w - 16}" height="48" rx="12" fill="${cush}"/>
    <rect x="${x + 8}" y="${y + 46}" width="${w - 16}" height="8" rx="4" fill="#ffffff" opacity="0.12"/>
    <rect x="${x - 12}" y="${y + 16}" width="30" height="80" rx="12" fill="${body}"/>
    <rect x="${x + w - 18}" y="${y + 16}" width="30" height="80" rx="12" fill="${shadeBg(body, -0.3)}"/>
    ${[0.2, 0.46, 0.72]
      .map(
        (t) =>
          `<rect x="${(x + w * t).toFixed(0)}" y="${y + 4}" width="44" height="42" rx="12" fill="${shadeBg(
            body,
            0.16,
          )}" transform="rotate(-6 ${(x + w * t + 22).toFixed(0)} ${y + 25})"/>`,
      )
      .join('')}`;
}

/** 통원목 식탁과 나무 의자 (참고 사진의 우드 다이닝) */
function diningTable(cx: number, y: number, time: TimeOfDay): string {
  const wood = time === 'night' ? '#6b4a28' : '#a9763c';
  const chair = time === 'night' ? '#5a3e22' : '#8a5c2e';
  const seat = (sx: number, sy: number, s: number) => `
    <g transform="translate(${sx} ${sy}) scale(${s})">
      <ellipse cx="0" cy="8" rx="44" ry="14" fill="#000" opacity="0.25" filter="url(#vsoft)"/>
      <path d="M-40 -6 q40 -22 80 0 q-40 16 -80 0z" fill="${chair}"/>
      <path d="M-34 -8 q34 -60 68 0 q-34 -30 -68 0z" fill="${shadeBg(chair, -0.18)}"/>
      <path d="M-30 4 l-8 44 M30 4 l8 44 M-14 8 l-4 44 M14 8 l4 44" stroke="${shadeBg(chair, -0.25)}" stroke-width="7" stroke-linecap="round"/>
    </g>`;
  return `
    ${seat(cx - 96, y - 46, 0.82)}${seat(cx + 4, y - 46, 0.82)}${seat(cx + 104, y - 46, 0.82)}
    <ellipse cx="${cx}" cy="${y + 96}" rx="235" ry="34" fill="#000" opacity="0.3" filter="url(#vblur)"/>
    <path d="M${cx - 232} ${y + 4} q232 -22 464 0 l-6 28 q-226 20 -452 0z" fill="${wood}"/>
    <path d="M${cx - 232} ${y + 4} q232 -22 464 0 l-4 10 q-228 -16 -456 0z" fill="${shadeBg(wood, 0.2)}"/>
    <rect x="${cx - 176}" y="${y + 30}" width="20" height="74" rx="6" fill="${shadeBg(wood, -0.25)}"/>
    <rect x="${cx + 156}" y="${y + 30}" width="20" height="74" rx="6" fill="${shadeBg(wood, -0.25)}"/>
    ${seat(cx - 120, y + 132, 1.06)}${seat(cx + 120, y + 132, 1.06)}`;
}

/** 아치 통로 — 웜 플라스터 집의 상징 */
function archway(cx: number, floorY: number, w: number, h: number, T: RoomTone, inner: string): string {
  const r = w / 2;
  const d = `M${cx - r} ${floorY} L${cx - r} ${floorY - h + r} A${r} ${r} 0 0 1 ${cx + r} ${
    floorY - h + r
  } L${cx + r} ${floorY} Z`;
  return `
    <path d="${d}" fill="${inner}"/>
    <path d="${d}" fill="none" stroke="${shadeBg(T.wall, -0.2)}" stroke-width="14"/>
    <path d="M${cx - r + 10} ${floorY} L${cx - r + 10} ${floorY - h + r} A${r - 10} ${r - 10} 0 0 1 ${
      cx + r - 10
    } ${floorY - h + r}" fill="none" stroke="#000000" stroke-width="16" opacity="0.18"/>`;
}

/** 붙박이장 한 줄 (주방) */
function cabinetRun(x: number, y: number, w: number, h: number, body: string, doors: number): string {
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${body}"/>`;
  for (let i = 1; i < doors; i += 1) {
    out += `<rect x="${(x + (w / doors) * i - 1.5).toFixed(0)}" y="${y + 4}" width="3" height="${h - 8}" fill="#00000030"/>`;
  }
  for (let i = 0; i < doors; i += 1) {
    out += `<rect x="${(x + (w / doors) * (i + 0.5) - 16).toFixed(0)}" y="${y + h - 16}" width="32" height="4" rx="2" fill="#00000044"/>`;
  }
  return out + `<rect x="${x}" y="${y}" width="${w}" height="5" fill="#ffffff" opacity="0.14"/>`;
}

/** 거실 — 바다로 열린 통유리, 오크 바닥, 러그 위의 방석 두 장. 판은 여기서 벌어진다 */
function roomMaru(L: Look, time: TimeOfDay): string {
  const T = roomTone(time, false);
  const on = time === 'night' || time === 'evening';
  const horizon = 392;
  const win = { x: 130, y: 248, w: 460, h: 442 };
  return `
    <defs><clipPath id="vwin"><rect x="${win.x}" y="${win.y}" width="${win.w}" height="${win.h}"/></clipPath></defs>
    ${roomBox(T, 'oak')}
    <!-- 뒷벽을 통째로 뚫은 슬라이딩 통유리 -->
    <g clip-path="url(#vwin)">
      ${vSky(L, time, horizon)}
      ${vSea(L, time, horizon, 640)}
      <rect x="${win.x}" y="612" width="${win.w}" height="${win.y + win.h - 612}" fill="${shadeBg(L.deck, -0.1)}"/>
      <rect x="${win.x}" y="600" width="${win.w}" height="6" fill="${T.trim}" opacity="0.8"/>
      ${[...Array(9).keys()]
        .map((i) => `<rect x="${win.x + 18 + i * 52}" y="600" width="4" height="30" fill="${T.trim}" opacity="0.7"/>`)
        .join('')}
    </g>
    <path d="M${win.x} ${win.y + win.h} L${win.x + 250} ${win.y} L${win.x + 360} ${win.y} L${
      win.x + 110
    } ${win.y + win.h} Z" fill="#ffffff" opacity="0.08"/>
    ${[0, 1, 2, 3].map((i) => `<rect x="${win.x + (win.w / 4) * i - 4}" y="${win.y}" width="9" height="${win.h}" fill="${T.trim}"/>`).join('')}
    <rect x="${win.x}" y="${win.y}" width="${win.w}" height="${win.h}" fill="none" stroke="${T.trim}" stroke-width="12"/>

    ${coveLights(T, time)}
    <!-- 벽등 -->
    <circle cx="656" cy="404" r="26" fill="none" stroke="${T.trim}" stroke-width="7"/>
    <circle cx="656" cy="404" r="11" fill="${on ? '#ffe7b4' : '#d9d3c8'}"/>
    ${on ? `<ellipse cx="656" cy="404" rx="120" ry="150" fill="url(#vwarm)"/>` : ''}

    <!--
      가구 배치. 화면 아래 28% 는 대화창이 덮으므로 소파·의자는 중간 높이에 두고,
      방석은 대화창 위로 살짝 걸치게 놓는다.
    -->
    ${rug(742, 270, 430, 470, time === 'night' ? '#857f72' : '#efe9dd')}
    ${sofa(0, 684, 330, time)}
    <!-- 오른쪽 라운지 체어와 오토만 -->
    <ellipse cx="596" cy="812" rx="86" ry="24" fill="#000" opacity="0.3" filter="url(#vsoft)"/>
    <path d="M534 800 q62 -16 124 0 l-8 22 q-54 14 -110 0z" fill="${time === 'night' ? '#8d8a7c' : '#f4efe3'}"/>
    <path d="M540 800 q-12 -78 34 -96 q48 -14 64 8 q-46 16 -50 88z" fill="${
      time === 'night' ? '#a29e8e' : '#fbf7ee'
    }"/>
    <ellipse cx="674" cy="838" rx="52" ry="16" fill="${time === 'night' ? '#6b5a3a' : '#c8a06a'}"/>

    <ellipse cx="360" cy="1004" rx="112" ry="34" fill="#000" opacity="0.3" filter="url(#vsoft)"/>
    <ellipse cx="360" cy="982" rx="108" ry="32" fill="${time === 'night' ? '#6b4a28' : '#9c6a38'}"/>
    <ellipse cx="360" cy="968" rx="108" ry="32" fill="${time === 'night' ? '#8a6136' : '#c08a4c'}"/>
    <ellipse cx="342" cy="962" rx="36" ry="11" fill="#3f6bb5" opacity="0.85"/>

    <ellipse cx="180" cy="906" rx="108" ry="36" fill="#000" opacity="0.32" filter="url(#vsoft)"/>
    <ellipse cx="178" cy="898" rx="106" ry="34" fill="#8d3a33"/>
    <ellipse cx="178" cy="890" rx="106" ry="34" fill="#b5493f"/>
    <ellipse cx="540" cy="1070" rx="120" ry="40" fill="#000" opacity="0.32" filter="url(#vsoft)"/>
    <ellipse cx="538" cy="1062" rx="118" ry="38" fill="#31538c"/>
    <ellipse cx="538" cy="1054" rx="118" ry="38" fill="#3f6bb5"/>

    ${on ? `<ellipse cx="360" cy="880" rx="360" ry="220" fill="url(#vwarm)" opacity="0.4"/>` : ''}
    ${vFinish(L, horizon)}`;
}

/** 주방 — 흙벽, 흰색+우드 붙박이장, 통원목 식탁 */
function roomKitchen(L: Look, time: TimeOfDay): string {
  const T = roomTone(time, true);
  const on = time === 'night' || time === 'evening';
  const wood = time === 'night' ? '#6b4a28' : '#a9763c';
  const cab = time === 'night' ? '#b6b0a2' : '#f0ebe0';
  return `
    ${roomBox(T, 'tile')}
    <!-- 상부장과 열린 선반 -->
    ${cabinetRun(132, 268, 176, 118, cab, 2)}
    ${cabinetRun(316, 268, 100, 118, wood, 1)}
    <rect x="440" y="296" width="150" height="7" rx="3" fill="${wood}"/>
    <rect x="440" y="360" width="150" height="7" rx="3" fill="${wood}"/>
    ${[458, 492, 526, 558]
      .map((x, i) => `<rect x="${x}" y="${i % 2 ? 268 : 262}" width="20" height="${i % 2 ? 28 : 34}" rx="4" fill="${
        ['#c9d6cc', '#d8cbb4', '#b9c4d2', '#cdbfa6'][i]
      }"/>`)
      .join('')}
    <path d="M572 316 q22 -34 44 -6 q-16 30 -44 6z" fill="#5d7c43"/>
    <path d="M596 316 q30 -22 40 10 q-26 16 -40 -10z" fill="#4e6b39"/>
    <!-- 창 -->
    <rect x="440" y="392" width="150" height="86" fill="${on ? shadeBg(L.seaNear, 0.2) : '#cfe0ec'}" stroke="${T.trim}" stroke-width="7"/>
    <rect x="512" y="392" width="6" height="86" fill="${T.trim}"/>
    <!-- 하부장 + 상판 -->
    <rect x="128" y="486" width="466" height="16" rx="4" fill="${shadeBg(cab, 0.06)}"/>
    ${cabinetRun(132, 502, 190, 186, cab, 3)}
    ${cabinetRun(330, 502, 126, 186, wood, 2)}
    ${cabinetRun(464, 502, 126, 186, cab, 2)}
    <rect x="152" y="470" width="86" height="18" rx="4" fill="#2f3338"/>
    <!-- 가전 -->
    <rect x="476" y="416" width="104" height="62" rx="6" fill="#3a3d42"/>
    <rect x="486" y="426" width="62" height="42" rx="4" fill="${on ? '#6b5a3a' : '#7d8288'}"/>
    <rect x="344" y="432" width="42" height="46" rx="5" fill="#57534c"/>
    <circle cx="365" cy="452" r="10" fill="#8f9aa3"/>
    ${pendant(240, 300, 44, time)}
    ${diningTable(368, 800, time)}
    ${on ? `<ellipse cx="360" cy="700" rx="380" ry="300" fill="url(#vwarm)" opacity="0.65"/>` : ''}
    ${vFinish(L, 300)}`;
}

/** 복도 — 아치 통로, 라탄 등, 플라스터 벽난로 */
function roomHallway(L: Look, time: TimeOfDay): string {
  const T = roomTone(time, true);
  const on = time === 'night' || time === 'evening';
  const deep = shadeBg(T.wall, on ? 0.22 : -0.1);
  return `
    ${roomBox(T, 'tile')}
    <!-- 아치 너머 방 -->
    ${archway(360, RB.bottom, 216, 330, T, deep)}
    <rect x="286" y="560" width="148" height="140" fill="${shadeBg(deep, -0.12)}"/>
    <rect x="300" y="470" width="58" height="76" rx="4" fill="${on ? '#8a7a4a' : '#bcd2c4'}"/>
    <path d="M388 556 q22 -40 46 -8 q-18 34 -46 8z" fill="#4e6b39"/>
    <!-- 왼쪽 플라스터 벽난로 -->
    <rect x="104" y="386" width="152" height="24" rx="6" fill="${shadeBg(T.wall, 0.16)}"/>
    <rect x="116" y="410" width="128" height="290" fill="${shadeBg(T.wall, 0.1)}"/>
    <path d="M140 700 L140 530 A40 40 0 0 1 220 530 L220 700 Z" fill="${shadeBg(T.wall, -0.55)}"/>
    ${[
      [158, 636],
      [182, 636],
      [206, 636],
      [170, 614],
      [194, 614],
    ]
      .map(([cx, cy]) => `<ellipse cx="${cx}" cy="${cy}" rx="11" ry="11" fill="#7a5a34"/>`)
      .join('')}
    <rect x="128" y="330" width="106" height="58" rx="4" fill="${shadeBg(T.wall, 0.24)}"/>
    <!-- 오른쪽 콘솔 -->
    <rect x="436" y="556" width="176" height="144" fill="${shadeBg(T.trim, -0.1)}"/>
    <rect x="430" y="546" width="188" height="14" rx="4" fill="${shadeBg(T.trim, 0.18)}"/>
    <path d="M486 546 l-14 -62 h60 l-14 62z" fill="${on ? '#ffe6b0' : '#e6dfd0'}"/>
    <rect x="510" y="512" width="46" height="34" rx="4" fill="#8d3a33"/>
    ${pendant(196, 264, 52, time)}
    ${rug(880, 200, 300, 380, time === 'night' ? '#6a6252' : '#ece4d2')}
    ${on ? `<ellipse cx="300" cy="640" rx="360" ry="300" fill="url(#vwarm)" opacity="0.6"/>` : ''}
    ${vFinish(L, 300)}`;
}

/** 내 방 — 흙벽, 침대, 바다로 난 창, 책상 */
function roomMine(L: Look, time: TimeOfDay): string {
  const T = roomTone(time, true);
  const on = time === 'night' || time === 'evening';
  const horizon = 380;
  return `
    <defs><clipPath id="vwin"><rect x="152" y="268" width="228" height="292"/></clipPath></defs>
    ${roomBox(T, 'oak')}
    <g clip-path="url(#vwin)">
      ${vSky(L, time, horizon)}
      ${vSea(L, time, horizon, 560)}
    </g>
    <rect x="152" y="268" width="228" height="292" fill="none" stroke="${T.trim}" stroke-width="12"/>
    <rect x="262" y="268" width="8" height="292" fill="${T.trim}"/>
    <rect x="152" y="410" width="228" height="7" fill="${T.trim}"/>
    <!-- 커튼 -->
    <path d="M132 250 q18 160 0 320 h44 q-16 -160 0 -320z" fill="${shadeBg(T.wall, 0.2)}"/>
    <path d="M400 250 q-18 160 0 320 h-44 q16 -160 0 -320z" fill="${shadeBg(T.wall, 0.2)}"/>
    <!-- 책상 -->
    <rect x="430" y="536" width="176" height="14" rx="4" fill="${T.trim}"/>
    <rect x="442" y="550" width="12" height="150" fill="${shadeBg(T.trim, -0.2)}"/>
    <rect x="582" y="550" width="12" height="150" fill="${shadeBg(T.trim, -0.2)}"/>
    <rect x="452" y="486" width="76" height="50" rx="4" fill="#2f3338"/>
    <path d="M556 536 l-10 -44 h40 l-10 44z" fill="${on ? '#ffe6b0' : '#e6dfd0'}"/>
    <!-- 침대 -->
    <ellipse cx="330" cy="1092" rx="330" ry="52" fill="#000" opacity="0.3" filter="url(#vblur)"/>
    <rect x="60" y="836" width="540" height="40" rx="10" fill="${shadeBg(T.trim, -0.1)}"/>
    <rect x="40" y="876" width="580" height="180" rx="16" fill="${time === 'night' ? '#6d6a5e' : '#efe9db'}"/>
    <rect x="40" y="876" width="580" height="46" rx="16" fill="${time === 'night' ? '#82806f' : '#fbf7ee'}"/>
    <rect x="90" y="800" width="180" height="70" rx="16" fill="${time === 'night' ? '#8d8a79' : '#fdfaf3'}"/>
    <rect x="300" y="806" width="160" height="64" rx="16" fill="${time === 'night' ? '#7f7c6c' : '#f4efe3'}"/>
    ${on ? `<ellipse cx="520" cy="560" rx="260" ry="220" fill="url(#vwarm)" opacity="0.7"/>` : ''}
    ${vFinish(L, horizon)}`;
}

/** 옥상 데크 — 바다가 한눈에 들어오는 자리 */
function roomRooftop(L: Look, time: TimeOfDay): string {
  const on = time === 'night' || time === 'evening';
  const horizon = 430;
  const steel = time === 'night' ? '#15181e' : '#33373e';
  return `
    ${vSky(L, time, horizon)}
    ${vSea(L, time, horizon, 790)}
    <!-- 난간 -->
    <rect x="0" y="690" width="${W}" height="6" fill="${steel}"/>
    ${[...Array(13).keys()].map((i) => `<rect x="${12 + i * 56}" y="690" width="5" height="96" fill="${steel}" opacity="0.9"/>`).join('')}
    <rect x="0" y="780" width="${W}" height="6" fill="${steel}"/>
    ${vDeck(0, 786, W, 120)}
    <path d="M0 906 L${W} 906 L${W} ${H} L0 ${H} Z" fill="${shadeBg(L.deck, -0.12)}"/>
    ${[...Array(15).keys()]
      .map((i) => `<path d="M${i * 52} 906 L${(i * 52 - W / 2) * 1.5 + W / 2} ${H}" stroke="#00000055" stroke-width="3"/>`)
      .join('')}
    <!-- 라운지 의자 둘과 낮은 테이블 -->
    <ellipse cx="180" cy="1076" rx="130" ry="34" fill="#000" opacity="0.3" filter="url(#vsoft)"/>
    <path d="M70 1060 q110 -26 220 0 l-10 34 q-100 22 -200 0z" fill="${time === 'night' ? '#6d6a5e' : '#efe9db'}"/>
    <path d="M78 1060 q-16 -96 40 -120 q60 -18 84 10 q-60 22 -66 110z" fill="${time === 'night' ? '#82806f' : '#fbf7ee'}"/>
    <ellipse cx="560" cy="1090" rx="120" ry="32" fill="#000" opacity="0.3" filter="url(#vsoft)"/>
    <path d="M456 1074 q104 -24 208 0 l-10 32 q-94 20 -188 0z" fill="${time === 'night' ? '#6d6a5e' : '#efe9db'}"/>
    <path d="M464 1074 q-14 -92 38 -114 q58 -16 80 10 q-58 20 -62 104z" fill="${time === 'night' ? '#82806f' : '#fbf7ee'}"/>
    <ellipse cx="370" cy="1016" rx="66" ry="20" fill="${time === 'night' ? '#6b4a28' : '#9c6a38'}"/>
    <ellipse cx="370" cy="1004" rx="66" ry="20" fill="${time === 'night' ? '#8a6136' : '#c08a4c'}"/>
    <!-- 스트링 라이트 -->
    <path d="M-10 604 q360 96 740 -20" stroke="${steel}" stroke-width="3" fill="none" opacity="0.8"/>
    ${[...Array(10).keys()]
      .map((i) => {
        const x = 20 + i * 76;
        const y = 620 + Math.sin((i / 9) * Math.PI) * 44 - (i / 9) * 30;
        return `<circle cx="${x}" cy="${y.toFixed(0)}" r="9" fill="${on ? '#ffe7b4' : '#ded7c6'}"/>${
          on ? `<circle cx="${x}" cy="${y.toFixed(0)}" r="26" fill="#ffd18a" opacity="0.28" filter="url(#vsoft)"/>` : ''
        }`;
      })
      .join('')}
    ${vFinish(L, horizon)}`;
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

    case 'maru':
      return roomMaru(L, time);

    case 'kitchen':
      return roomKitchen(L, time);

    case 'hallway':
      return roomHallway(L, time);

    case 'room':
      return roomMine(L, time);

    case 'rooftop':
      return roomRooftop(L, time);

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
    case 'kitchen':
    case 'hallway':
    case 'room':
    case 'rooftop':
      return realScene(bg, LOOKS[time], time);
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
