/**
 * 화패 48장 + 보너스 SVG 생성기.
 * 기존 게임 자산을 쓰지 않고 전통 도안을 굵은 선/선명한 색으로 다시 그린 오리지널이다.
 * 원화 교체: public/art/card/{id}.png 를 넣으면 우선 사용된다.
 */
import { MONTH_NAMES } from '../engine/cards';
import type { Card } from '../engine/types';

const CW = 120;
const CH = 180;

/** 월별 바탕색 (계절감을 색으로 구분) */
const MONTH_BG: Record<number, [string, string]> = {
  1: ['#1c1c22', '#2b2b34'],
  2: ['#2a1f2e', '#3d2c42'],
  3: ['#2e2026', '#452f38'],
  4: ['#1f2a22', '#2d3d31'],
  5: ['#1d2630', '#2b3845'],
  6: ['#2b1f2d', '#40304a'],
  7: ['#2e211d', '#453129'],
  8: ['#1a2230', '#283348'],
  9: ['#2d2a1c', '#443f28'],
  10: ['#2f2018', '#4a3122'],
  11: ['#231f2c', '#352f45'],
  12: ['#1b2228', '#2a343c'],
  0: ['#2a2420', '#3d352e'],
};

const INK = '#12100e';
const RED = '#d8402f';
const GOLD = '#e8b53c';
const WHITE = '#f4ece0';
const GREEN = '#3f8a52';
const BLUE = '#3f6fb5';

function frame(month: number): string {
  const [a, b] = MONTH_BG[month] ?? MONTH_BG[0];
  return `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbf4e6"/>
      <stop offset="100%" stop-color="#efe2ca"/>
    </linearGradient>
  </defs>
  <rect width="${CW}" height="${CH}" rx="10" fill="url(#paper)"/>
  <rect x="5" y="5" width="${CW - 10}" height="${CH - 10}" rx="7" fill="url(#bg)"/>
  <rect x="5" y="5" width="${CW - 10}" height="${CH - 10}" rx="7" fill="none" stroke="${INK}" stroke-width="3"/>`;
}

/** 광 표식 */
function gwangMark(): string {
  return `
  <rect x="14" y="14" width="34" height="40" rx="5" fill="${RED}" stroke="${INK}" stroke-width="2.5"/>
  <text x="31" y="43" font-size="24" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold">光</text>`;
}

/** 띠 (글씨 있는 홍단/청단, 글씨 없는 초단) */
function ttiBand(kind: 'hong' | 'cheong' | 'cho' | 'bi'): string {
  const color = kind === 'cheong' ? BLUE : kind === 'cho' ? '#c4483a' : kind === 'bi' ? '#8a8f96' : RED;
  const label = kind === 'hong' ? '홍단' : kind === 'cheong' ? '청단' : '';
  return `
  <rect x="20" y="66" width="80" height="48" rx="6" fill="${color}" stroke="${INK}" stroke-width="3"/>
  ${
    label
      ? `<text x="60" y="98" font-size="22" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold">${label}</text>`
      : `<path d="M32 90 h56" stroke="${WHITE}" stroke-width="4" opacity="0.5"/>`
  }`;
}

/** 월별 식물 도안 */
function plant(month: number): string {
  switch (month) {
    case 1: // 소나무
      return `<path d="M60 150 v-40" stroke="#5b4330" stroke-width="7"/>
              <path d="M60 116 l-26 18 M60 116 l26 18 M60 132 l-20 16 M60 132 l20 16" stroke="${GREEN}" stroke-width="7" stroke-linecap="round"/>`;
    case 2: // 매화
      return `<path d="M44 158 q14 -36 34 -50" stroke="#5b4330" stroke-width="6" fill="none"/>
              <circle cx="80" cy="106" r="9" fill="#f2a0b4" stroke="${INK}" stroke-width="2"/>
              <circle cx="62" cy="126" r="8" fill="#f2a0b4" stroke="${INK}" stroke-width="2"/>`;
    case 3: // 벚꽃
      return `<path d="M44 158 q16 -34 36 -46" stroke="#5b4330" stroke-width="6" fill="none"/>
              <circle cx="82" cy="112" r="10" fill="#f8c3d4" stroke="${INK}" stroke-width="2"/>
              <circle cx="58" cy="130" r="9" fill="#f8c3d4" stroke="${INK}" stroke-width="2"/>
              <circle cx="96" cy="136" r="7" fill="#f8c3d4" stroke="${INK}" stroke-width="2"/>`;
    case 4: // 흑싸리
      return `<path d="M60 158 q-4 -40 0 -54" stroke="#2f4a35" stroke-width="6" fill="none"/>
              <path d="M60 120 q-22 -8 -28 8 M60 132 q22 -8 28 8 M60 144 q-20 -6 -26 8" stroke="#2f4a35" stroke-width="6" stroke-linecap="round"/>`;
    case 5: // 난초
      return `<path d="M60 158 q-26 -34 -8 -58 M60 158 q26 -34 8 -58" stroke="${GREEN}" stroke-width="6" fill="none" stroke-linecap="round"/>
              <circle cx="60" cy="98" r="7" fill="#f0e08a" stroke="${INK}" stroke-width="2"/>`;
    case 6: // 모란
      return `<path d="M60 158 v-26" stroke="${GREEN}" stroke-width="6"/>
              <circle cx="60" cy="122" r="17" fill="#c9457a" stroke="${INK}" stroke-width="2.5"/>
              <circle cx="60" cy="122" r="7" fill="${GOLD}"/>`;
    case 7: // 홍싸리
      return `<path d="M60 158 q-4 -40 0 -54" stroke="#7a3a2c" stroke-width="6" fill="none"/>
              <path d="M60 120 q-22 -8 -28 8 M60 132 q22 -8 28 8" stroke="#a8503a" stroke-width="6" stroke-linecap="round"/>`;
    case 8: // 억새 언덕
      return `<path d="M16 158 q44 -34 88 0z" fill="#4a4030" stroke="${INK}" stroke-width="2.5"/>`;
    case 9: // 국화
      return `<path d="M60 158 v-24" stroke="${GREEN}" stroke-width="6"/>
              <circle cx="60" cy="124" r="16" fill="${GOLD}" stroke="${INK}" stroke-width="2.5"/>
              <circle cx="60" cy="124" r="6" fill="#b8801f"/>`;
    case 10: // 단풍
      return `<path d="M60 158 v-22" stroke="#7a3a2c" stroke-width="6"/>
              <path d="M60 136 l-22 -14 l10 22 l-16 2 l28 12 l28 -12 l-16 -2 l10 -22z" fill="#c9553a" stroke="${INK}" stroke-width="2.5"/>`;
    case 11: // 오동
      return `<path d="M60 158 v-32" stroke="#5b4330" stroke-width="6"/>
              <ellipse cx="42" cy="118" rx="18" ry="13" fill="#6f7f4a" stroke="${INK}" stroke-width="2.5"/>
              <ellipse cx="80" cy="112" rx="18" ry="13" fill="#6f7f4a" stroke="${INK}" stroke-width="2.5"/>`;
    case 12: // 비 - 버드나무
      return `<path d="M60 96 q-24 30 -18 62 M60 96 q24 30 18 62" stroke="#4a5b3a" stroke-width="5" fill="none"/>`;
    default:
      return '';
  }
}

/** 열끗(동물) 도안 */
function animal(card: Card): string {
  if (card.isGodori) {
    // 새 (2월 휘파람새 / 4월 두견새 / 8월 기러기)
    return `<path d="M40 104 q20 -18 40 -4 q10 8 2 18 q-20 14 -42 4z" fill="${INK}"/>
            <path d="M80 100 l14 -6 l-10 12z" fill="${GOLD}"/>
            <circle cx="70" cy="104" r="3" fill="${WHITE}"/>
            <path d="M46 118 q14 14 32 8" stroke="${INK}" stroke-width="4" fill="none"/>`;
  }
  switch (card.month) {
    case 5: // 다리
      return `<path d="M18 116 h84" stroke="#8a5a32" stroke-width="9"/>
              <path d="M30 116 v22 M60 116 v22 M90 116 v22" stroke="#8a5a32" stroke-width="6"/>`;
    case 6: // 나비
      return `<path d="M60 112 q-26 -22 -32 2 q-4 20 32 14z" fill="#e3a23c" stroke="${INK}" stroke-width="2.5"/>
              <path d="M60 112 q26 -22 32 2 q4 20 -32 14z" fill="#e3a23c" stroke="${INK}" stroke-width="2.5"/>
              <rect x="57" y="100" width="6" height="34" rx="3" fill="${INK}"/>`;
    case 7: // 멧돼지
      return `<ellipse cx="60" cy="116" rx="30" ry="18" fill="#4a3a2c" stroke="${INK}" stroke-width="2.5"/>
              <path d="M32 112 l-12 -6 l10 14z" fill="#4a3a2c"/>
              <circle cx="40" cy="110" r="3" fill="${WHITE}"/>`;
    case 9: // 국진(술잔)
      return `<path d="M38 96 h44 l-6 24 q-16 10 -32 0z" fill="${WHITE}" stroke="${INK}" stroke-width="3"/>
              <rect x="56" y="120" width="8" height="14" fill="${WHITE}" stroke="${INK}" stroke-width="2.5"/>
              <rect x="42" y="134" width="36" height="7" rx="3" fill="${WHITE}" stroke="${INK}" stroke-width="2.5"/>
              <text x="60" y="114" font-size="15" text-anchor="middle" fill="${RED}" font-family="serif" font-weight="bold">壽</text>`;
    case 10: // 사슴
      return `<ellipse cx="62" cy="120" rx="26" ry="16" fill="#a5703c" stroke="${INK}" stroke-width="2.5"/>
              <path d="M40 112 q-8 -10 -4 -18" stroke="#a5703c" stroke-width="7" fill="none" stroke-linecap="round"/>
              <path d="M36 96 l-8 -10 M36 96 l8 -10" stroke="#6f4a26" stroke-width="4" stroke-linecap="round"/>
              <circle cx="34" cy="100" r="3" fill="${INK}"/>`;
    case 12: // 제비
      return `<path d="M34 100 q26 -14 52 6 q-22 22 -52 -6z" fill="#2b3340" stroke="${INK}" stroke-width="2.5"/>
              <path d="M86 106 l14 10 l-18 0z" fill="#2b3340"/>`;
    default:
      return `<circle cx="60" cy="116" r="20" fill="#6f5a3c" stroke="${INK}" stroke-width="2.5"/>`;
  }
}

/** 광 도안 */
function gwangArt(card: Card): string {
  switch (card.month) {
    case 1: // 송학 - 학
      return `<path d="M46 130 q18 -30 38 -18 q8 6 0 14 q-14 12 -34 8z" fill="${WHITE}" stroke="${INK}" stroke-width="3"/>
              <path d="M84 112 l14 -8 l-10 14z" fill="${RED}"/>
              <path d="M54 138 v16 M66 138 v16" stroke="${INK}" stroke-width="4"/>
              <circle cx="78" cy="116" r="3" fill="${INK}"/>`;
    case 3: // 벚꽃 - 만막
      return `<rect x="22" y="96" width="76" height="30" rx="4" fill="${WHITE}" stroke="${INK}" stroke-width="3"/>
              <path d="M22 106 h76 M22 116 h76" stroke="${RED}" stroke-width="5"/>
              <path d="M40 126 v16 M80 126 v16" stroke="${INK}" stroke-width="4"/>`;
    case 8: // 공산 - 보름달
      return `<circle cx="60" cy="108" r="26" fill="${RED}" stroke="${INK}" stroke-width="3"/>`;
    case 11: // 오동 - 봉황
      return `<path d="M40 128 q22 -34 46 -16 q10 8 0 18 q-20 12 -46 -2z" fill="${GOLD}" stroke="${INK}" stroke-width="3"/>
              <path d="M86 110 l16 -10 l-10 18z" fill="${RED}"/>
              <path d="M44 132 q-14 12 -6 24 q10 -6 14 -18z" fill="${GOLD}" stroke="${INK}" stroke-width="2.5"/>`;
    case 12: // 비광 - 우산 쓴 사람
      return `<path d="M26 92 q34 -26 68 0z" fill="${INK}"/>
              <path d="M60 92 v46" stroke="${INK}" stroke-width="4"/>
              <circle cx="60" cy="142" r="9" fill="#5a4a3a" stroke="${INK}" stroke-width="2.5"/>
              <path d="M52 152 h16 v14 h-16z" fill="#5a4a3a" stroke="${INK}" stroke-width="2.5"/>`;
    default:
      return '';
  }
}

/** 피 도안 (쌍피는 표식이 다르다) */
function piArt(card: Card): string {
  const isDouble = (card.piValue ?? 1) >= 2;
  if (card.isBonus) {
    return `<rect x="22" y="70" width="76" height="60" rx="8" fill="${GOLD}" stroke="${INK}" stroke-width="3"/>
            <text x="60" y="110" font-size="30" text-anchor="middle" fill="${INK}" font-family="serif" font-weight="bold">${card.piValue}피</text>`;
  }
  if (isDouble) {
    return `<rect x="24" y="74" width="72" height="34" rx="6" fill="${RED}" stroke="${INK}" stroke-width="3"/>
            <text x="60" y="100" font-size="20" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold">쌍피</text>`;
  }
  return '';
}

export function cardSvg(card: Card, opts?: { width?: number; height?: number }): string {
  const w = opts?.width ?? CW;
  const h = opts?.height ?? CH;
  const monthLabel = card.month === 0 ? '보너스' : `${card.month}월 ${MONTH_NAMES[card.month]}`;

  let art = '';
  if (card.isBonus) {
    art = piArt(card);
  } else {
    art = plant(card.month);
    if (card.kind === 'gwang') art += gwangArt(card) + gwangMark();
    else if (card.kind === 'yeol') art += animal(card);
    else if (card.kind === 'tti' && card.tti) art += ttiBand(card.tti);
    else art += piArt(card);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CW} ${CH}" width="${w}" height="${h}" role="img" aria-label="${card.name}">
  ${frame(card.month)}
  ${art}
  <rect x="5" y="${CH - 30}" width="${CW - 10}" height="25" fill="#00000055"/>
  <text x="${CW / 2}" y="${CH - 12}" font-size="12" text-anchor="middle" fill="${WHITE}" font-family="sans-serif">${monthLabel}</text>
</svg>`;
}

export function cardDataUri(card: Card, opts?: { width?: number; height?: number }): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(cardSvg(card, opts))}`;
}

/** 뒷면 */
export function cardBackSvg(opts?: { width?: number; height?: number }): string {
  const w = opts?.width ?? CW;
  const h = opts?.height ?? CH;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CW} ${CH}" width="${w}" height="${h}" role="img" aria-label="뒷면">
  <rect width="${CW}" height="${CH}" rx="10" fill="#7a2b24"/>
  <rect x="7" y="7" width="${CW - 14}" height="${CH - 14}" rx="7" fill="#8f342b" stroke="${GOLD}" stroke-width="2.5"/>
  <circle cx="${CW / 2}" cy="${CH / 2}" r="30" fill="none" stroke="${GOLD}" stroke-width="3"/>
  <circle cx="${CW / 2}" cy="${CH / 2}" r="18" fill="none" stroke="${GOLD}" stroke-width="2"/>
  <path d="M60 60 v60 M30 90 h60" stroke="${GOLD}" stroke-width="2" opacity="0.6"/>
</svg>`;
}

export function cardBackDataUri(opts?: { width?: number; height?: number }): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(cardBackSvg(opts))}`;
}
