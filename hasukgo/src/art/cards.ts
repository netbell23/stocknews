/**
 * 화패 48장 + 보너스 SVG 생성기.
 * 기존 게임 자산을 쓰지 않고 전통 도안을 굵은 선/선명한 색으로 다시 그린 오리지널이다.
 * 원화 교체: public/art/card/{id}.png 를 넣으면 우선 사용된다.
 */
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

/*
 * 한국 화투 도안. 참고한 건 시중 화투의 **도안 언어**지 특정 제조사의 그림이 아니다
 * (도안 자체는 이백 년 된 공유 도상이고, 남의 스캔은 한 장도 쓰지 않았다).
 *
 * 한국 화투를 한국 화투로 보이게 하는 건 세 가지다.
 *   1. 굵은 주홍 테두리. 이게 없으면 일본 하나후다처럼 보인다.
 *   2. 흰 바탕에 큼직한 검은 실루엣. 면이 크고 선이 적다.
 *   3. 원색 네 가지(주홍·노랑·파랑·초록)만 점처럼 얹는다.
 * 그리고 띠는 가로줄이 아니라 비스듬히 누운 띠다.
 */

/* 원색 — 주홍과 노랑은 스킨이 갈아입히므로 가변이다 */
let VERM = '#e02b1d'; // 주홍
let CHROME = '#f2c21c'; // 노랑
const BLUE = '#1766c8';
const GREEN = '#2a9d4a';
const ORANGE = '#ef7a20';

/** 그림이 놓이는 자리 (주홍 테두리 안쪽) */
const AX = 12;
const AY = 12;
const AW = 96;
const AH = 152;

/** 검은 면 */
function blk(d: string, fill?: string): string {
  return `<path d="${d}" fill="${fill ?? INK}"/>`;
}

/** 소나무·산 실루엣 하나 */
function peak(cx: number, w: number, top: number, tip: string | null): string {
  const b = AY + AH;
  let out = blk(`M${cx - w / 2} ${b} Q${cx - w * 0.18} ${top + 10} ${cx} ${top} Q${cx + w * 0.18} ${top + 10} ${cx + w / 2} ${b} Z`);
  if (tip) out += blk(`M${cx - w * 0.22} ${top + 20} Q${cx} ${top - 2} ${cx + w * 0.22} ${top + 20} Q${cx} ${top + 12} ${cx - w * 0.22} ${top + 20} Z`, tip);
  return out;
}

/** 다섯 잎 꽃 */
function flower(cx: number, cy: number, r: number, fill: string, core: string): string {
  let out = '';
  for (let i = 0; i < 5; i += 1) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
    out += `<circle cx="${(cx + Math.cos(a) * r * 0.58).toFixed(1)}" cy="${(cy + Math.sin(a) * r * 0.58).toFixed(
      1,
    )}" r="${(r * 0.5).toFixed(1)}" fill="${fill}"/>`;
  }
  return out + `<circle cx="${cx}" cy="${cy}" r="${(r * 0.24).toFixed(1)}" fill="${core}"/>`;
}

/** 검은 잎 덩이 (싸리·오동·국화 잎) */
function leafMass(cx: number, cy: number, rx: number, ry: number, fill?: string): string {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill ?? INK}"/>`;
}

/** 월별 바탕 그림 — 같은 달 네 장이 공유한다 */
function monthArt(month: number): string {
  const b = AY + AH;
  switch (month) {
    case 1: // 송학 — 검은 솔봉우리 둘
      return peak(40, 62, 40, CHROME) + peak(86, 54, 56, CHROME);
    case 2: // 매조 — 검은 가지와 붉은 매화
      return `
        ${blk(`M${AX} ${b} Q44 96 40 ${AY + 16} L52 ${AY + 16} Q56 96 ${AX + 22} ${b} Z`)}
        ${blk('M44 74 Q68 66 92 44 L96 54 Q72 76 48 84 Z')}
        ${flower(88, 34, 13, VERM, CHROME)}
        ${flower(62, 60, 11, VERM, CHROME)}
        ${flower(96, 74, 10, VERM, CHROME)}
        ${flower(34, 108, 10, VERM, CHROME)}`;
    case 3: // 벚꽃 — 붉은 벚꽃 무더기
      return `
        ${blk('M30 146 Q34 100 26 60 L38 58 Q46 102 42 146 Z')}
        ${blk('M38 82 Q64 76 94 56 L98 66 Q70 88 42 92 Z')}
        ${flower(84, 42, 15, VERM, CHROME)}
        ${flower(56, 64, 13, VERM, CHROME)}
        ${flower(98, 84, 12, VERM, CHROME)}
        ${flower(34, 112, 12, VERM, CHROME)}
        ${flower(74, 116, 11, VERM, CHROME)}`;
    case 4: // 흑싸리 — 아래로 쏟아지는 검은 잎
      return [0, 1, 2]
        .map((k) => {
          const x = 30 + k * 26;
          let st = blk(`M${x} ${AY + 8} q6 60 ${-2} ${AH - 20} l6 0 q4 -66 -2 ${-(AH - 22)} Z`);
          for (let i = 0; i < 6; i += 1) {
            const y = AY + 22 + i * 19;
            st += leafMass(x - 9, y, 7.5, 4.5) + leafMass(x + 11, y + 8, 7.5, 4.5);
          }
          return st;
        })
        .join('');
    case 5: // 난초 — 검은 잎과 푸른 붓꽃
      return `
        ${blk('M36 146 Q22 96 34 44 L44 46 Q34 98 46 146 Z')}
        ${blk('M60 146 Q58 92 66 40 L76 44 Q68 96 70 146 Z')}
        ${blk('M86 146 Q96 98 92 54 L100 58 Q102 102 96 146 Z')}
        ${flower(56, 52, 14, BLUE, CHROME)}
        ${flower(84, 86, 12, BLUE, CHROME)}`;
    case 6: // 모란 — 붉은 모란과 검은 잎
      return `
        ${leafMass(34, 104, 24, 16)}
        ${leafMass(88, 110, 22, 15)}
        ${leafMass(62, 128, 26, 14)}
        ${flower(58, 62, 26, VERM, CHROME)}
        ${flower(92, 96, 17, VERM, CHROME)}`;
    case 7: // 홍싸리 — 붉은 싸리
      return [0, 1]
        .map((k) => {
          const x = 44 + k * 30;
          let st = blk(`M${x} ${AY + 10} q7 58 ${-2} ${AH - 24} l6 0 q4 -64 -3 ${-(AH - 26)} Z`);
          for (let i = 0; i < 6; i += 1) {
            const y = AY + 24 + i * 18;
            st += leafMass(x - 10, y, 8, 4.6, VERM) + leafMass(x + 12, y + 8, 8, 4.6, VERM);
          }
          return st;
        })
        .join('');
    case 8: // 공산 — 크고 둥근 검은 산
      return blk(`M${AX} ${b} Q28 ${b - 76} 60 ${b - 82} Q92 ${b - 76} ${AX + AW} ${b} Z`);
    case 9: // 국준 — 주황 국화와 검은 잎
      return `
        ${leafMass(32, 112, 24, 15)}
        ${leafMass(90, 118, 22, 14)}
        ${leafMass(62, 134, 26, 12)}
        ${flower(56, 60, 22, ORANGE, CHROME)}
        ${flower(92, 90, 16, ORANGE, CHROME)}
        ${flower(28, 74, 14, ORANGE, CHROME)}`;
    case 10: // 단풍 — 주황 단풍잎
      return `
        ${blk('M60 146 Q58 116 60 96 L68 96 Q70 118 68 146 Z')}
        ${maple(60, 74, 30, ORANGE)}
        ${maple(28, 106, 20, VERM)}
        ${maple(94, 100, 20, VERM)}`;
    case 11: // 오동 — 검은 오동잎과 푸른 꽃
      return `
        ${blk(`M${AX} ${b} Q20 100 ${AX + 6} 76 Q54 78 60 ${b} Z`)}
        ${blk(`M${AX + AW} ${b} Q100 100 ${AX + AW - 6} 76 Q66 78 60 ${b} Z`)}
        ${blk('M60 118 Q44 80 60 44 Q76 80 60 118 Z')}
        ${[38, 60, 82].map((x) => flower(x, 32, 11, BLUE, CHROME)).join('')}`;
    default: // 12월 비 — 검은 바탕에 버드나무
      return `
        <rect x="${AX}" y="${AY}" width="${AW}" height="${AH}" fill="${INK}"/>
        ${blk(`M${AX + 6} ${AY} q14 48 4 ${AH} l10 0 q10 -56 -4 ${-AH} Z`, WHITE)}
        ${[0, 1, 2]
          .map((i) => blk(`M${AX + 14 + i * 4} ${AY + 30 + i * 16} q-12 32 -${14 + i * 4} ${58 - i * 10} l7 3 q10 -30 ${16 + i * 4} -${58 - i * 10} Z`, WHITE))
          .join('')}`;
  }
}

/** 단풍잎 */
function maple(cx: number, cy: number, r: number, fill: string): string {
  return `<path d="M${cx} ${cy - r} l${r * 0.3} ${r * 0.42} l${r * 0.62} -${r * 0.2} l-${r * 0.22} ${r * 0.52} l${
    r * 0.52
  } ${r * 0.1} l-${r * 0.46} ${r * 0.4} l${r * 0.2} ${r * 0.44} l-${r * 0.68} -${r * 0.16} l-${r * 0.18} ${
    r * 0.5
  } l-${r * 0.18} -${r * 0.5} l-${r * 0.68} ${r * 0.16} l${r * 0.2} -${r * 0.44} l-${r * 0.46} -${r * 0.4} l${
    r * 0.52
  } -${r * 0.1} l-${r * 0.22} -${r * 0.52} l${r * 0.62} ${r * 0.2} Z" fill="${fill}"/>`;
}

/** 광 — 달마다 다른 주인공 */
function gwangArt(month: number): string {
  switch (month) {
    case 1: // 송학 — 붉은 해와 흰 학
      return `
        <circle cx="88" cy="38" r="23" fill="${VERM}"/>
        <g stroke="${INK}" stroke-width="2.4" stroke-linejoin="round">
          <path d="M22 132 Q38 84 72 90 Q88 94 84 110 Q60 130 26 128 Z" fill="${WHITE}"/>
          <path d="M72 90 Q62 58 82 46 Q94 42 96 54 Q92 74 84 92 Z" fill="${WHITE}"/>
          <path d="M92 44 l16 -6 l-10 15 Z" fill="${VERM}"/>
          <path d="M38 128 l-4 22 l8 0 l3 -21 Z" fill="${WHITE}"/>
          <path d="M56 130 l-2 22 l8 0 l1 -21 Z" fill="${WHITE}"/>
        </g>
        <path d="M84 40 q8 -9 16 -6" stroke="${VERM}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="88" cy="52" r="3" fill="${INK}"/>`;
    case 3: // 벚꽃 — 붉은 만막(휘장)
      return `
        <rect x="${AX}" y="${AY + 4}" width="${AW}" height="58" fill="${VERM}"/>
        <path d="M${AX + 4} ${AY + 34} q13 -17 26 0 q13 17 26 0 q13 -17 26 0 q9 12 14 3"
              stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="${AX}" y="${AY + 62}" width="${AW}" height="11" fill="${INK}"/>
        ${blk(`M${AX + 12} ${AY + 73} l0 26 l10 0 l0 -26 Z`)}
        ${blk(`M${AX + AW - 22} ${AY + 73} l0 26 l10 0 l0 -26 Z`)}`;
    case 8: // 공산 — 흰 보름달
      return `<circle cx="60" cy="54" r="27" fill="${WHITE}" stroke="${INK}" stroke-width="2"/>`;
    case 11: // 오동 — 붉은 봉황
      return `
        ${blk('M30 124 Q46 82 80 88 Q96 92 90 108 Q66 126 32 122 Z', VERM)}
        ${blk('M80 88 Q76 62 94 54 Q104 52 104 62 Q98 78 90 90 Z', VERM)}
        ${blk('M100 52 l12 -6 l-6 14 Z', CHROME)}
        ${blk('M36 120 Q22 134 26 148 l10 -4 Q36 132 44 124 Z', VERM)}
        <circle cx="98" cy="60" r="2.6" fill="${INK}"/>`;
    default: // 12월 비 — 우산 쓴 사람
      return `
        ${blk('M22 64 Q60 30 98 64 Q60 50 22 64 Z', VERM)}
        <rect x="57" y="62" width="5" height="28" fill="${WHITE}"/>
        ${blk('M44 92 Q60 82 76 92 L82 146 L38 146 Z', WHITE)}
        <circle cx="60" cy="82" r="11" fill="${WHITE}"/>
        ${blk('M50 76 Q60 66 70 76 Q60 72 50 76 Z')}`;
  }
}

/** 열끗 */
function yeolArt(card: Card): string {
  const m = card.month;
  if (card.isGodori) {
    const body = m === 2 ? GREEN : m === 4 ? CHROME : ORANGE;
    return `
      ${blk('M28 100 Q52 74 82 88 Q96 96 88 108 Q60 124 30 112 Z', body)}
      ${blk('M82 88 Q78 70 92 64 Q100 62 100 70 Q96 82 88 92 Z', body)}
      ${blk('M96 62 l12 -5 l-7 12 Z', VERM)}
      <circle cx="92" cy="72" r="2.6" fill="${INK}"/>
      ${blk('M36 112 Q54 126 78 114 Q60 132 34 120 Z')}`;
  }
  switch (m) {
    case 5: // 다리
      return `
        ${blk('M14 92 Q60 62 106 92 L106 104 Q60 76 14 104 Z', CHROME)}
        ${blk('M26 100 l0 40 l9 0 l0 -38 Z', CHROME)}
        ${blk('M85 100 l0 40 l9 0 l0 -38 Z', CHROME)}`;
    case 6: // 나비
      return `
        ${blk('M48 72 Q24 48 18 74 Q14 96 46 88 Z', CHROME)}
        ${blk('M52 72 Q76 48 82 74 Q86 96 54 88 Z', CHROME)}
        ${blk('M48 64 l4 34 l-4 0 Z')}
        ${blk('M88 116 Q72 100 68 118 Q66 132 88 128 Z', CHROME)}
        ${blk('M92 116 Q108 100 112 118 Q114 132 92 128 Z', CHROME)}`;
    case 7: // 멧돼지
      return `
        ${blk('M22 112 Q34 84 62 82 Q94 80 100 104 Q102 128 66 130 Q28 132 22 112 Z', CHROME)}
        ${blk('M22 106 l-12 -8 l10 18 Z', CHROME)}
        ${blk('M34 128 l-3 18 l8 0 l2 -17 Z', CHROME)}
        ${blk('M60 130 l-2 16 l8 0 l1 -16 Z', CHROME)}
        ${blk('M88 126 l2 18 l8 -2 l-3 -17 Z', CHROME)}
        <circle cx="36" cy="102" r="3" fill="${INK}"/>`;
    case 9: // 국진(술잔)
      return `
        ${blk('M30 66 L90 66 L80 100 Q60 112 40 100 Z', VERM)}
        ${blk('M36 72 L84 72 L78 90 Q60 100 42 90 Z', WHITE)}
        <rect x="55" y="110" width="10" height="16" fill="${VERM}"/>
        ${blk('M38 126 L82 126 L82 136 L38 136 Z', BLUE)}
        <text x="60" y="88" font-size="15" text-anchor="middle" fill="${INK}" font-family="serif" font-weight="bold">壽</text>`;
    case 10: // 사슴
      return `
        ${blk('M30 116 Q44 88 70 88 Q98 88 102 110 Q104 132 70 134 Q34 136 30 116 Z', CHROME)}
        ${blk('M34 106 Q20 92 24 74 Q34 78 42 94 Z', CHROME)}
        ${blk('M24 74 l-9 -14 l3 -3 l10 13 Z')}
        ${blk('M26 72 l9 -13 l4 3 l-9 12 Z')}
        <circle cx="28" cy="92" r="3" fill="${INK}"/>
        ${blk('M44 134 l-3 14 l8 0 l2 -13 Z', CHROME)}
        ${blk('M88 132 l3 16 l8 -2 l-3 -14 Z', CHROME)}`;
    default: // 12월 제비
      return `
        ${blk('M24 84 Q56 64 88 92 Q58 116 24 84 Z', WHITE)}
        ${blk('M88 92 l20 14 l-26 2 Z', WHITE)}
        <circle cx="42" cy="86" r="2.6" fill="${INK}"/>`;
  }
}

/** 띠 — 비스듬히 누운 띠가 한국 화투의 모양이다 */
function ttiArt(kind: 'hong' | 'cheong' | 'cho' | 'bi'): string {
  const color = kind === 'cheong' ? BLUE : kind === 'bi' ? '#9aa1a8' : VERM;
  const label = kind === 'hong' ? '홍단' : kind === 'cheong' ? '청단' : '';
  return `
    <g transform="rotate(-24 60 79)">
      <rect x="16" y="58" width="88" height="42" fill="${color}"/>
      <rect x="16" y="58" width="88" height="4" fill="${WHITE}" opacity="0.35"/>
      ${
        label
          ? `<text x="60" y="87" font-size="19" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold" letter-spacing="1">${label}</text>`
          : ''
      }
    </g>`;
}

/** 광 표식 — 붉은 낙관 */
function gwangSeal(): string {
  return `
    <rect x="${AX + AW - 30}" y="${AY + AH - 34}" width="28" height="32" rx="3" fill="${VERM}"/>
    <text x="${AX + AW - 16}" y="${AY + AH - 11}" font-size="21" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold">光</text>`;
}

/** 쌍피·보너스 표식 */
function piMark(card: Card): string {
  if (card.isBonus) {
    return `
      <rect x="${AX + 6}" y="${AY + 40}" width="${AW - 12}" height="56" fill="${CHROME}"/>
      <text x="60" y="${AY + 80}" font-size="30" text-anchor="middle" fill="${INK}" font-family="serif" font-weight="bold">${card.piValue}피</text>`;
  }
  if ((card.piValue ?? 1) >= 2) {
    return `
      <rect x="${AX + 10}" y="${AY + AH - 34}" width="${AW - 20}" height="28" fill="${VERM}"/>
      <text x="60" y="${AY + AH - 13}" font-size="19" text-anchor="middle" fill="${WHITE}" font-family="serif" font-weight="bold">쌍피</text>`;
  }
  return '';
}

/** 주홍 테두리와 흰 바탕 */
function frame(sk: CardSkin, uid: string): string {
  const border = sk.tint ? mix(sk.red, sk.tint, sk.tintAmount * 0.7) : sk.red;
  const paper = sk.tint ? mix('#ffffff', sk.tint, sk.tintAmount * 0.5) : sk.paperTop;
  return `
  <defs>
    <clipPath id="cl${uid}"><rect x="${AX}" y="${AY}" width="${AW}" height="${AH}"/></clipPath>
    <filter id="gr${uid}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="${CW}" height="${CH}" rx="9" fill="${border}"/>
  <rect x="${AX}" y="${AY}" width="${AW}" height="${AH}" fill="${paper}"/>`;
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
  CHROME = sk.gold;
  // 한 화면에 여러 장이 뜨므로 그라디언트 id 가 겹치면 안 된다
  const uid = `${card.id}-${sk.id}`.replace(/[^a-zA-Z0-9-]/g, '');
  // 아래 주홍 띠에 월 숫자만 넣는다. 실제 화투에는 글씨가 없고, 46px 에서는 읽히지도 않는다
  const foot = card.month === 0 ? '보너스' : `${card.month}`;

  let art = '';
  if (card.isBonus) {
    art = piMark(card);
  } else {
    art = monthArt(card.month);
    if (card.kind === 'gwang') art += gwangArt(card.month) + gwangSeal();
    else if (card.kind === 'yeol') art += yeolArt(card);
    else if (card.kind === 'tti' && card.tti) art += ttiArt(card.tti);
    else art += piMark(card);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CW} ${CH}" width="${w}" height="${h}" role="img" aria-label="${card.name}">
  ${frame(sk, uid)}
  <g clip-path="url(#cl${uid})">${art}</g>
  <text x="${CW / 2}" y="${CH - 4}" font-size="11" text-anchor="middle" fill="${WHITE}" font-family="sans-serif"
        opacity="0.9">${foot}</text>
  <rect width="${CW}" height="${CH}" rx="9" filter="url(#gr${uid})" opacity="0.06" style="mix-blend-mode:multiply"/>
  <rect x="0.75" y="0.75" width="${CW - 1.5}" height="${CH - 1.5}" rx="9" fill="none" stroke="${sk.ink}"
        stroke-width="1.5" opacity="0.45"/>
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
