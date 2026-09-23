/**
 * 화패 48장 + 보너스 SVG 생성기.
 * 기존 게임 자산을 쓰지 않고 전통 도안을 굵은 선/선명한 색으로 다시 그린 오리지널이다.
 * 원화 교체: public/art/card/{id}.png 를 넣으면 우선 사용된다.
 */
import { MONTH_NAMES } from '../engine/cards';
import type { Card } from '../engine/types';

const CW = 120;
const CH = 180;

/** 화패 스킨. 도안은 그대로 두고 색만 갈아입힌다. */
export interface CardSkin {
  id: string;
  name: string;
  /** 월별 바탕색을 이 색조로 물들인다 (0 이면 원래 색) */
  tint: string | null;
  tintAmount: number;
  ink: string;
  red: string;
  gold: string;
  white: string;
  paperTop: string;
  paperBottom: string;
}

export const CARD_SKINS: CardSkin[] = [
  {
    id: 'classic',
    name: '전통',
    tint: null,
    tintAmount: 0,
    ink: '#12100e',
    red: '#d8402f',
    gold: '#e8b53c',
    white: '#f4ece0',
    paperTop: '#fbf4e6',
    paperBottom: '#efe2ca',
  },
  {
    id: 'moonlit',
    name: '달밤',
    tint: '#1b2b4a',
    tintAmount: 0.55,
    ink: '#0a0e18',
    red: '#e05a6b',
    gold: '#cfe0ff',
    white: '#eaf1ff',
    paperTop: '#dfe8f7',
    paperBottom: '#c3d2e8',
  },
  {
    id: 'hanji',
    name: '한지',
    tint: '#d8c9a8',
    tintAmount: 0.62,
    ink: '#4a3a28',
    red: '#c2584a',
    gold: '#b89050',
    white: '#fdf8ec',
    paperTop: '#fdf8ec',
    paperBottom: '#f0e4cc',
  },
  {
    id: 'gilt',
    name: '금박',
    tint: '#2a2010',
    tintAmount: 0.5,
    ink: '#1a1408',
    red: '#e0483a',
    gold: '#ffd66b',
    white: '#fff6da',
    paperTop: '#3a2e18',
    paperBottom: '#241c0e',
  },
];

export const DEFAULT_SKIN = CARD_SKINS[0];

export function getSkin(id: string): CardSkin {
  return CARD_SKINS.find((s) => s.id === id) ?? DEFAULT_SKIN;
}

/**
 * 도안을 그리는 함수들이 참조하는 현재 팔레트.
 * cardSvg 가 한 장을 그리기 직전에 갈아끼운다. 렌더가 동기라 한 번에 한 장만 그려져 안전하다.
 */
let INK = DEFAULT_SKIN.ink;
let WHITE = DEFAULT_SKIN.white;

/** 두 색을 섞는다 */
function mix(a: string, b: string, t: number): string {
  const h = (c: string) => [
    parseInt(c.slice(1, 3), 16),
    parseInt(c.slice(3, 5), 16),
    parseInt(c.slice(5, 7), 16),
  ];
  const [r1, g1, b1] = h(a);
  const [r2, g2, b2] = h(b);
  const p = (x: number, y: number) => Math.round(x * (1 - t) + y * t).toString(16).padStart(2, '0');
  return `#${p(r1, r2)}${p(g1, g2)}${p(b1, b2)}`;
}

/** hex 를 밝게(+) / 어둡게(-) 민다 */
function shadeCard(hex: string, amt: number): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const t = amt > 0 ? 255 : 0;
  const k = Math.abs(amt);
  return `#${[(n >> 16) & 255, (n >> 8) & 255, n & 255]
    .map((c) => Math.round(c + (t - c) * k).toString(16).padStart(2, '0'))
    .join('')}`;
}

/*
 * 도안. 전통 화투 구성을 따라 그린다 — 기존 게임이나 제조사의 그림은 한 장도 쓰지 않았다.
 * 도안 자체(송학·매조·공산명월·비광 …)는 이백 년 된 공유 도상이라 마음껏 다시 그릴 수 있다.
 *
 * 화투처럼 보이게 하는 건 세 가지다.
 *   1. 그림이 카드를 꽉 채운다. 어두운 바탕에 작은 기호가 떠 있으면 화투가 아니다.
 *   2. 굵은 먹선과 납작한 원색 — 주홍, 치자황, 진초록, 먹색.
 *   3. 월마다 지배색이 다르다. 46px 썸네일에서 월을 가려내는 건 결국 색이다.
 */

/*
 * 화투 원색. 스킨이 도안 색까지 갈아입히므로 상수가 아니라 가변이다
 * (cardSvg 가 한 장을 그리기 직전에 채워 넣는다).
 */
let VERM = '#d4402c'; // 주홍
let CRIM = '#a8281c'; // 진홍
let CHROME = '#e8b23a'; // 치자황
const LEAF = '#2f7a42'; // 진초록
const DEEP = '#1d4a2c'; // 먹초록
const NIGHT = '#243a5c'; // 쪽빛
const ROYAL = '#6b4f96'; // 오동보라

/** 월별 바탕 — 전부 종이빛이되 월마다 기운이 다르다 */
const GROUND: Record<number, [string, string]> = {
  1: ['#f4e8c8', '#e2cea0'],
  2: ['#6e4550', '#4a2c36'],
  3: ['#f8dedd', '#eab9bd'],
  4: ['#e4ddc6', '#c6bb9c'],
  5: ['#e9edd2', '#c8d2a8'],
  6: ['#f2e6cc', '#dcc8a2'],
  7: ['#eee0c0', '#d6c096'],
  8: ['#dde6ef', '#b3c2d6'],
  9: ['#f4ead0', '#ddcb9c'],
  10: ['#f0dcb8', '#d8bb88'],
  11: ['#e6e0ee', '#c3b9d6'],
  12: ['#dfe4e6', '#b6c0c4'],
  0: ['#f6ebcc', '#e2cfa0'],
};

/** 굵은 먹선 한 자락 */
function ink(d: string, w = 3): string {
  return `<path d="${d}" stroke="${INK}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

/** 채우고 먹선을 두른 도형 */
function shape(d: string, fill: string, w = 2.6): string {
  return `<path d="${d}" fill="${fill}" stroke="${INK}" stroke-width="${w}" stroke-linejoin="round"/>`;
}

/** 꽃잎 다섯 장짜리 꽃 (매화·벚꽃) */
function blossom(cx: number, cy: number, r: number, fill: string, core = CHROME): string {
  let out = '';
  for (let i = 0; i < 5; i += 1) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
    const px = cx + Math.cos(a) * r * 0.62;
    const py = cy + Math.sin(a) * r * 0.62;
    out += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${(r * 0.52).toFixed(1)}" fill="${fill}" stroke="${INK}" stroke-width="1.8"/>`;
  }
  return out + `<circle cx="${cx}" cy="${cy}" r="${(r * 0.26).toFixed(1)}" fill="${core}"/>`;
}

/** 싸리 잎 한 줄기 (4월 흑싸리 / 7월 홍싸리) */
function cloverStem(x: number, y: number, len: number, fill: string, flip = 1): string {
  let out = ink(`M${x} ${y} q${flip * 10} ${len * 0.5} ${flip * 4} ${len}`, 3.4);
  for (let i = 0; i < 4; i += 1) {
    const t = 0.18 + i * 0.22;
    const lx = x + flip * (10 * t * 2 - 4 * t * t);
    const ly = y + len * t;
    out += `<ellipse cx="${(lx - flip * 12).toFixed(1)}" cy="${ly.toFixed(1)}" rx="9" ry="5.5" fill="${fill}" stroke="${INK}" stroke-width="1.8" transform="rotate(${flip * -22} ${(lx - flip * 12).toFixed(1)} ${ly.toFixed(1)})"/>`;
    out += `<ellipse cx="${(lx + flip * 12).toFixed(1)}" cy="${(ly + 5).toFixed(1)}" rx="9" ry="5.5" fill="${fill}" stroke="${INK}" stroke-width="1.8" transform="rotate(${flip * 22} ${(lx + flip * 12).toFixed(1)} ${(ly + 5).toFixed(1)})"/>`;
  }
  return out;
}

/** 월별 바탕 그림 — 네 장이 공유한다 */
function monthBase(month: number): string {
  switch (month) {
    case 1: // 송학 — 소나무
      return `
        ${ink('M30 150 q6 -46 -2 -76', 7)}
        ${shape('M12 78 q18 -14 34 -2 q-14 10 -34 2z', DEEP)}
        ${shape('M6 100 q20 -13 38 -1 q-16 10 -38 1z', LEAF)}
        ${shape('M16 56 q18 -13 34 -1 q-15 10 -34 1z', DEEP)}
        ${shape('M52 120 q20 -12 36 -2 q-16 10 -36 2z', LEAF)}
        ${ink('M64 150 q-4 -24 -10 -32', 5)}`;
    case 2: // 매조 — 매화 가지 (어두운 밤 바탕)
      return `
        <path d="M20 150 q22 -54 62 -86" stroke="#2a1a20" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M46 112 q16 -6 26 -20" stroke="#2a1a20" stroke-width="5" fill="none" stroke-linecap="round"/>
        ${blossom(84, 54, 15, '#f2b6c4')}
        ${blossom(58, 88, 13, '#f2b6c4')}
        ${blossom(96, 88, 11, '#f2b6c4')}
        ${blossom(34, 124, 10, '#f2b6c4')}`;
    case 3: // 벚꽃 — 흐드러진 가지
      return `
        ${ink('M14 150 q26 -50 66 -74', 6)}
        ${ink('M42 116 q22 -4 34 -18', 4)}
        ${blossom(80, 50, 16, '#f2aebc')}
        ${blossom(52, 80, 14, '#f2aebc')}
        ${blossom(100, 78, 12, '#f2aebc')}
        ${blossom(30, 116, 11, '#f2aebc')}
        ${blossom(74, 116, 10, '#f2aebc')}`;
    case 4: // 흑싸리 — 아래로 늘어진 검은 잎
      return `
        ${cloverStem(42, 26, 116, '#1f2622', 1)}
        ${cloverStem(84, 44, 98, '#2c3630', -1)}`;
    case 5: // 난초 — 창포 잎과 꽃
      return `
        ${ink('M38 150 q-14 -56 6 -92', 5)}
        ${ink('M58 150 q4 -60 14 -88', 5)}
        ${ink('M78 150 q20 -50 14 -80', 5)}
        ${shape('M50 60 q12 -18 24 -2 q-12 14 -24 2z', ROYAL)}
        ${shape('M46 74 q14 -10 26 4 q-14 10 -26 -4z', '#8a6cb0')}
        <circle cx="62" cy="66" r="4" fill="${CHROME}"/>`;
    case 6: // 모란 — 큰 꽃 한 송이
      return `
        ${ink('M60 150 v-34', 6)}
        ${shape('M22 118 q22 -16 36 2 q-20 14 -36 -2z', DEEP)}
        ${shape('M98 118 q-22 -16 -36 2 q20 14 36 -2z', DEEP)}
        ${[0, 1, 2, 3, 4, 5]
          .map((i) => {
            const a = (i / 6) * Math.PI * 2;
            return `<ellipse cx="${(60 + Math.cos(a) * 20).toFixed(1)}" cy="${(80 + Math.sin(a) * 18).toFixed(
              1,
            )}" rx="16" ry="13" fill="#c2427a" stroke="${INK}" stroke-width="2"/>`;
          })
          .join('')}
        <circle cx="60" cy="80" r="13" fill="#e0679c" stroke="${INK}" stroke-width="2"/>
        <circle cx="60" cy="80" r="5" fill="${CHROME}"/>`;
    case 7: // 홍싸리 — 붉은 싸리
      return `
        ${cloverStem(40, 44, 100, '#b4472e', 1)}
        ${cloverStem(84, 58, 84, '#8f3722', -1)}`;
    case 8: // 공산 — 검은 산
      return `
        <rect x="6" y="6" width="108" height="92" rx="6" fill="${NIGHT}" opacity="0.42"/>
        ${shape('M6 150 q30 -72 54 -72 q26 0 54 72z', '#1b2620', 3)}
        ${ink('M28 122 q16 -14 30 -6', 2.4)}`;
    case 9: // 국화 — 노란 국화
      return `
        ${ink('M60 150 v-30', 6)}
        ${shape('M24 124 q20 -16 34 0 q-18 14 -34 0z', DEEP)}
        ${shape('M96 124 q-20 -16 -34 0 q18 14 34 0z', DEEP)}
        ${[0, 1, 2, 3, 4, 5, 6, 7]
          .map((i) => {
            const a = (i / 8) * Math.PI * 2;
            return `<ellipse cx="${(60 + Math.cos(a) * 19).toFixed(1)}" cy="${(80 + Math.sin(a) * 17).toFixed(
              1,
            )}" rx="13" ry="10" fill="${CHROME}" stroke="${INK}" stroke-width="1.9" transform="rotate(${(
              (a * 180) /
              Math.PI
            ).toFixed(0)} ${(60 + Math.cos(a) * 19).toFixed(1)} ${(80 + Math.sin(a) * 17).toFixed(1)})"/>`;
          })
          .join('')}
        <circle cx="60" cy="80" r="12" fill="#f0cf6a" stroke="${INK}" stroke-width="2"/>
        <circle cx="60" cy="80" r="5" fill="#b8801f"/>`;
    case 10: // 단풍 — 붉은 단풍잎
      return `
        ${ink('M62 150 q-6 -28 -2 -44', 6)}
        ${shape(
          'M60 106 l-24 -16 l11 24 l-19 3 l32 14 l32 -14 l-19 -3 l11 -24z',
          '#c94a2c',
        )}
        ${shape('M30 74 l-16 -10 l7 15 l-12 2 l21 9 l14 -6z', '#e0703c', 2.2)}
        ${shape('M92 68 l16 -10 l-7 15 l12 2 l-21 9 l-14 -6z', '#e0703c', 2.2)}`;
    case 11: // 오동 — 보랏빛 오동잎
      return `
        ${ink('M60 150 v-46', 6)}
        ${shape('M60 104 q-40 -6 -44 -40 q34 -10 44 40z', '#5f6b3c')}
        ${shape('M60 104 q40 -6 44 -40 q-34 -10 -44 40z', '#6f7d46')}
        ${shape('M60 96 q-14 -34 0 -56 q14 22 0 56z', '#4f5a30')}
        ${[38, 60, 82].map((x) => `<circle cx="${x}" cy="26" r="7" fill="${ROYAL}" stroke="${INK}" stroke-width="1.8"/>`).join('')}`;
    default: // 12월 비 — 버드나무와 빗줄기
      return `
        <rect x="6" y="6" width="108" height="144" rx="6" fill="${NIGHT}" opacity="0.3"/>
        ${ink('M26 6 q10 40 2 72', 6)}
        ${[0, 1, 2, 3]
          .map((i) => ink(`M${28 + i * 5} ${26 + i * 12} q${-16 - i * 4} ${26 + i * 6} ${-22 - i * 5} ${52 + i * 8}`, 2.6))
          .join('')}
        ${[0, 1, 2, 3, 4, 5]
          .map((i) => `<path d="M${16 + i * 18} ${18 + (i % 3) * 30} l-7 22" stroke="${WHITE}" stroke-width="2" opacity="0.5"/>`)
          .join('')}`;
  }
}

/** 광 — 월마다 다른 주인공 */
function gwangArt(month: number): string {
  switch (month) {
    case 1: // 송학 — 붉은 해와 학
      return `
        <circle cx="84" cy="36" r="21" fill="${VERM}" stroke="${INK}" stroke-width="2.6"/>
        ${shape('M32 124 q28 -42 60 -22 q13 9 0 19 q-28 17 -60 3z', WHITE, 3)}
        ${shape('M90 102 l18 -10 l-12 19z', WHITE, 2.4)}
        <circle cx="84" cy="111" r="3.6" fill="${INK}"/>
        <path d="M88 98 q8 -8 15 -5" stroke="${VERM}" stroke-width="4.4" fill="none" stroke-linecap="round"/>
        ${ink('M48 136 v14 M64 138 v12', 3.6)}`;
    case 3: // 벚꽃 — 만막(휘장)
      return `
        ${shape('M14 30 h92 v10 h-92z', CRIM, 2.6)}
        ${shape('M14 40 h92 v34 h-92z', WHITE, 2.6)}
        <rect x="14" y="48" width="92" height="7" fill="${VERM}"/>
        <rect x="14" y="62" width="92" height="7" fill="${VERM}"/>
        ${shape('M14 74 q10 14 20 0 q10 14 20 0 q10 14 20 0 q10 14 20 0 q8 12 12 0 v-4 h-92z', WHITE, 2.4)}
        ${ink('M30 30 v-14 M90 30 v-14', 3)}`;
    case 8: // 공산 — 보름달
      return `
        <circle cx="62" cy="48" r="26" fill="${VERM}" stroke="${INK}" stroke-width="3"/>
        <circle cx="54" cy="40" r="6" fill="#e0684e" opacity="0.7"/>`;
    case 11: // 오동 — 봉황
      return `
        ${shape('M36 122 q26 -40 54 -18 q12 9 0 20 q-24 14 -54 -2z', CHROME, 3)}
        ${shape('M88 102 l20 -12 l-12 21z', VERM, 2.4)}
        ${shape('M42 126 q-18 14 -8 30 q14 -8 18 -22z', CHROME, 2.4)}
        ${shape('M54 132 q-14 18 -4 32 q12 -8 14 -24z', '#e6c86a', 2.2)}
        <circle cx="82" cy="110" r="3.2" fill="${INK}"/>
        <path d="M86 98 q8 -8 15 -5" stroke="${VERM}" stroke-width="3.6" fill="none" stroke-linecap="round"/>`;
    default: // 12월 비 — 우산 쓴 사람
      return `
        ${shape('M22 62 q38 -34 76 0 q-38 -12 -76 0z', CRIM, 3)}
        ${ink('M60 62 v24', 3.4)}
        ${shape('M46 86 q14 -10 28 0 l6 44 h-40z', '#3a3a44', 2.8)}
        <circle cx="60" cy="80" r="11" fill="#e8d2b4" stroke="${INK}" stroke-width="2.6"/>
        ${shape('M50 70 q10 -9 20 0 q-10 5 -20 0z', '#2a2a30', 2.2)}`;
  }
}

/** 열끗 — 새·짐승·기물 */
function yeolArt(card: Card): string {
  const m = card.month;
  if (card.isGodori) {
    // 2월 휘파람새 / 4월 두견새 / 8월 기러기
    const body = m === 2 ? '#6f7f3c' : m === 4 ? '#2c3340' : '#4a5a6e';
    return `
      ${shape('M34 104 q24 -22 48 -6 q12 9 0 19 q-24 15 -48 -1z', body, 3)}
      ${shape('M80 98 l17 -8 l-11 16z', CHROME, 2.4)}
      ${shape('M44 112 q16 16 36 8 q-12 14 -36 -8z', shadeCard(body, -0.25), 2.2)}
      <circle cx="74" cy="104" r="3.2" fill="${WHITE}"/>
      <circle cx="74" cy="104" r="1.6" fill="${INK}"/>`;
  }
  switch (m) {
    case 5: // 다리
      return `
        ${shape('M8 104 q52 -22 104 0 v12 q-52 -22 -104 0z', VERM, 3)}
        ${ink('M24 112 v26 M60 106 v32 M96 112 v26', 5)}
        <rect x="6" y="138" width="108" height="12" fill="${NIGHT}" opacity="0.55"/>`;
    case 6: // 나비 두 마리
      return `
        ${shape('M46 96 q-24 -22 -30 2 q-4 20 30 12z', CHROME, 2.4)}
        ${shape('M46 96 q24 -22 30 2 q4 20 -30 12z', CHROME, 2.4)}
        ${ink('M46 86 v24', 3)}
        ${shape('M86 128 q-16 -15 -20 2 q-3 14 20 8z', '#e6c86a', 2.2)}
        ${shape('M86 128 q16 -15 20 2 q3 14 -20 8z', '#e6c86a', 2.2)}`;
    case 7: // 멧돼지
      return `
        ${shape('M26 116 q12 -24 40 -20 q28 4 30 22 q-4 18 -34 18 q-32 0 -36 -20z', '#4a3a2c', 3)}
        ${shape('M24 112 l-14 -8 l12 18z', '#4a3a2c', 2.2)}
        ${ink('M40 134 v14 M62 136 v12 M84 132 v14', 5)}
        <circle cx="38" cy="110" r="3" fill="${WHITE}"/>
        ${ink('M22 116 q-8 -6 -12 -2', 2.4)}`;
    case 9: // 국진(술잔)
      return `
        ${shape('M34 82 h52 l-8 28 q-18 11 -36 0z', WHITE, 3)}
        ${shape('M56 110 h8 v14 h-8z', WHITE, 2.4)}
        ${shape('M40 124 h40 v8 h-40z', WHITE, 2.6)}
        <text x="60" y="102" font-size="17" text-anchor="middle" fill="${VERM}" font-family="serif" font-weight="bold">壽</text>`;
    case 10: // 사슴
      return `
        ${shape('M32 120 q14 -20 40 -16 q26 4 26 20 q-2 16 -30 16 q-32 0 -36 -20z', '#a5703c', 3)}
        ${shape('M34 112 q-14 -8 -12 -22 q10 2 18 12z', '#a5703c', 2.4)}
        ${ink('M24 92 l-8 -14 M24 92 l10 -12 M30 84 l-4 -12', 3)}
        <circle cx="28" cy="100" r="3" fill="${INK}"/>
        ${ink('M46 136 v14 M66 138 v12 M88 134 v14', 4.4)}
        <circle cx="70" cy="116" r="3" fill="#e8d2b4"/>
        <circle cx="84" cy="124" r="3" fill="#e8d2b4"/>`;
    default: // 12월 제비
      return `
        ${shape('M28 96 q28 -18 56 6 q-24 24 -56 -6z', '#26303c', 3)}
        ${shape('M84 102 l20 12 l-24 2z', '#26303c', 2.4)}
        <circle cx="46" cy="98" r="3" fill="${WHITE}"/>`;
  }
}

/** 띠 — 홍단·청단은 글씨가 있고 초단은 민무늬다 */
function ttiArt(kind: 'hong' | 'cheong' | 'cho' | 'bi'): string {
  const color = kind === 'cheong' ? '#3f6fb5' : kind === 'bi' ? '#8f96a0' : VERM;
  const label = kind === 'hong' ? '홍단' : kind === 'cheong' ? '청단' : '';
  return `
    ${shape('M8 80 q52 -11 104 0 v26 q-52 11 -104 0z', color, 2.8)}
    <path d="M8 85 q52 -11 104 0" stroke="${WHITE}" stroke-width="1.8" fill="none" opacity="0.4"/>
    ${
      label
        ? `<text x="60" y="103" font-size="17" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold" letter-spacing="1">${label}</text>`
        : `<path d="M26 96 q34 -7 68 0" stroke="${WHITE}" stroke-width="3" fill="none" opacity="0.5"/>`
    }`;
}

/** 광 표식 — 붉은 낙관처럼 */
function gwangSeal(): string {
  return `
    <rect x="9" y="9" width="30" height="34" rx="4" fill="${VERM}" stroke="${INK}" stroke-width="2.4"/>
    <text x="24" y="35" font-size="22" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold">光</text>`;
}

/** 쌍피·보너스 표식 */
function piMark(card: Card): string {
  if (card.isBonus) {
    return `
      ${shape('M18 58 h84 v54 h-84z', CHROME, 3)}
      <text x="60" y="97" font-size="30" text-anchor="middle" fill="${INK}" font-family="serif" font-weight="bold">${card.piValue}피</text>`;
  }
  if ((card.piValue ?? 1) >= 2) {
    return `
      ${shape('M22 118 h76 v26 h-76z', VERM, 2.6)}
      <text x="60" y="139" font-size="19" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold">쌍피</text>`;
  }
  return '';
}

/** 종이 바탕과 검은 테두리 */
function frame(month: number, sk: CardSkin, uid: string): string {
  let [a, b] = GROUND[month] ?? GROUND[0];
  if (sk.tint) {
    a = mix(a, sk.tint, sk.tintAmount);
    b = mix(b, sk.tint, sk.tintAmount);
  }
  return `
  <defs>
    <linearGradient id="bg${uid}" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <clipPath id="cl${uid}"><rect x="5" y="5" width="${CW - 10}" height="${CH - 10}" rx="7"/></clipPath>
    <filter id="gr${uid}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="${CW}" height="${CH}" rx="10" fill="${sk.ink}"/>
  <rect x="5" y="5" width="${CW - 10}" height="${CH - 10}" rx="7" fill="url(#bg${uid})"/>`;
}

export function cardSvg(
  card: Card,
  opts?: { width?: number; height?: number; skin?: string },
): string {
  const w = opts?.width ?? CW;
  const h = opts?.height ?? CH;
  const sk = getSkin(opts?.skin ?? DEFAULT_SKIN.id);
  INK = sk.ink;
  WHITE = sk.white;
  VERM = sk.red;
  CRIM = shadeCard(sk.red, -0.28);
  CHROME = sk.gold;
  // 한 화면에 여러 장이 뜨므로 그라디언트 id 가 겹치면 안 된다
  const uid = `${card.id}-${sk.id}`.replace(/[^a-zA-Z0-9-]/g, '');
  const monthLabel = card.month === 0 ? '보너스' : `${card.month}월 ${MONTH_NAMES[card.month]}`;

  let art = '';
  if (card.isBonus) {
    art = piMark(card);
  } else {
    art = monthBase(card.month);
    if (card.kind === 'gwang') art += gwangArt(card.month) + gwangSeal();
    else if (card.kind === 'yeol') art += yeolArt(card);
    else if (card.kind === 'tti' && card.tti) art += ttiArt(card.tti);
    else art += piMark(card);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CW} ${CH}" width="${w}" height="${h}" role="img" aria-label="${card.name}">
  ${frame(card.month, sk, uid)}
  <g clip-path="url(#cl${uid})">${art}</g>
  <rect x="5" y="${CH - 28}" width="${CW - 10}" height="23" fill="${sk.ink}" opacity="0.66"/>
  <text x="${CW / 2}" y="${CH - 11}" font-size="12" text-anchor="middle" fill="${WHITE}" font-family="sans-serif">${monthLabel}</text>
  <rect x="5" y="5" width="${CW - 10}" height="${CH - 10}" rx="7" filter="url(#gr${uid})" opacity="0.07"
        style="mix-blend-mode:multiply"/>
  <rect x="5" y="5" width="${CW - 10}" height="${CH - 10}" rx="7" fill="none" stroke="${sk.ink}" stroke-width="3"/>
</svg>`;
}

export function cardDataUri(
  card: Card,
  opts?: { width?: number; height?: number; skin?: string },
): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(cardSvg(card, opts))}`;
}

/** 뒷면 */
export function cardBackSvg(opts?: { width?: number; height?: number; skin?: string }): string {
  const w = opts?.width ?? CW;
  const h = opts?.height ?? CH;
  const sk = getSkin(opts?.skin ?? DEFAULT_SKIN.id);
  const back = sk.tint ? mix('#7a2b24', sk.tint, sk.tintAmount * 0.8) : '#7a2b24';
  const back2 = sk.tint ? mix('#8f342b', sk.tint, sk.tintAmount * 0.8) : '#8f342b';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CW} ${CH}" width="${w}" height="${h}" role="img" aria-label="뒷면">
  <rect width="${CW}" height="${CH}" rx="10" fill="${back}"/>
  <rect x="7" y="7" width="${CW - 14}" height="${CH - 14}" rx="7" fill="${back2}" stroke="${sk.gold}" stroke-width="2.5"/>
  <circle cx="${CW / 2}" cy="${CH / 2}" r="30" fill="none" stroke="${sk.gold}" stroke-width="3"/>
  <circle cx="${CW / 2}" cy="${CH / 2}" r="18" fill="none" stroke="${sk.gold}" stroke-width="2"/>
  <path d="M60 60 v60 M30 90 h60" stroke="${sk.gold}" stroke-width="2" opacity="0.6"/>
</svg>`;
}

export function cardBackDataUri(opts?: { width?: number; height?: number; skin?: string }): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(cardBackSvg(opts))}`;
}
