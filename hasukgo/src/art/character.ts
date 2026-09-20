/**
 * 하숙생 입상(立像) SVG 생성기.
 *
 * 그림 자산 없이 코드로 그린다. 기존 게임의 캐릭터를 전혀 쓰지 않은 오리지널이고,
 * 10명이 한 화면에 늘어서도 서로 구분되는 게 목표다. 구분을 만드는 것은 색이 아니라
 * 눈매·얼굴형·앞머리·머리 모양·옷·소품이라, 그 여섯 가지를 전부 JSON 파라미터로 뺐다.
 * (src/data/types.ts 의 TenantLook)
 *
 * 좌표계는 240x360 고정. 머리 꼭대기 y=28, 눈높이 y=118, 턱 y=168,
 * 어깨 y=196 이고 그 아래는 프레임 끝까지 상반신이다.
 * 대화창 옆 48px 썸네일에서도 얼굴이 읽히도록 머리를 화면의 약 30% 로 잡았다.
 *
 * 원화로 교체하려면: public/art/char/{tenantId}_{outfit}_{expression}.png 를 넣고
 * src/ui/parts.tsx 의 IMAGE_FIRST 를 true 로 바꾸면 파일이 우선 사용된다.
 * (파일이 없으면 자동으로 이 SVG 로 되돌아간다)
 */
import type {
  Accessory,
  BangsStyle,
  EyeStyle,
  FaceStyle,
  Garment,
  PropArt,
  Tenant,
  TenantLook,
} from '../data/types';
import type { Expression } from '../scenario/types';

export interface PortraitOptions {
  tenant: Tenant;
  expression: Expression;
  /** 0 평상복 / 1 외출복 / 2 특별 이벤트복 */
  outfit: 0 | 1 | 2;
  width?: number;
  height?: number;
}

/* ── 화면 기준선 ─────────────────────────── */
const CX = 120;
const CROWN = 46; // 이마 위 두개골 꼭대기
const EY = 118; // 눈높이
const CHIN = 168;
const SHOULDER = 196;
const BOTTOM = 360;
const EYE_DX = 21; // 중심에서 눈까지

/* ── 색 보조 ─────────────────────────────── */

function clamp255(v: number): number {
  return Math.max(0, Math.min(255, Math.round(v)));
}

/** hex 를 밝게(+) / 어둡게(-) 민다. amt 는 -1~1 */
function shade(hex: string, amt: number): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const t = amt > 0 ? 255 : 0;
  const k = Math.abs(amt);
  const out = [r, g, b].map((c) => clamp255(c + (t - c) * k));
  return `#${out.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}

/** 두 색을 t 만큼 섞는다 */
function mix(a: string, b: string, t: number): string {
  const pick = (h: string) => {
    const m = /^#?([0-9a-f]{6})$/i.exec(h.trim());
    const n = m ? parseInt(m[1], 16) : 0;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const [r1, g1, b1] = pick(a);
  const [r2, g2, b2] = pick(b);
  const out = [r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t];
  return `#${out.map((c) => clamp255(c).toString(16).padStart(2, '0')).join('')}`;
}

/**
 * 눈동자 색. 머리색을 밝힌 것에 포인트 색을 조금 섞는다.
 * 포인트 색을 그대로 쓰면(예: 은서의 분홍) 사람 눈으로 안 보여서 한 단계 눌렀다.
 */
function irisOf(look: TenantLook): string {
  return mix(shade(look.hair, 0.32), look.accent, 0.32);
}

/** 그라디언트 id 충돌 방지 — 한 페이지에 입상이 여러 개 뜬다 */
let seq = 0;
function uid(): string {
  seq = (seq + 1) % 1e6;
  return `p${seq.toString(36)}`;
}

/* ── 표정 ────────────────────────────────── */

interface FaceShape {
  eye: 'open' | 'closed' | 'wide' | 'half' | 'arc';
  brow: number; // 눈썹 y 오프셋 (+면 내려와 찡그림)
  browTilt: number; // 안쪽 끝 기울기
  mouth: 'smile' | 'flat' | 'pout' | 'open' | 'small' | 'wide' | 'wave';
  blush: number; // 0~1
  sweat: boolean;
  tear: boolean;
  /** 고개 기울기(도). 같은 얼굴도 표정마다 다르게 서 있는 느낌을 준다 */
  tilt: number;
}

const FACES: Record<Expression, FaceShape> = {
  normal: { eye: 'open', brow: 0, browTilt: 0, mouth: 'flat', blush: 0.08, sweat: false, tear: false, tilt: 0 },
  smile: { eye: 'arc', brow: -1, browTilt: -1, mouth: 'smile', blush: 0.3, sweat: false, tear: false, tilt: -2 },
  sulk: { eye: 'half', brow: 2, browTilt: 3, mouth: 'pout', blush: 0.2, sweat: false, tear: false, tilt: 3 },
  surprise: { eye: 'wide', brow: -5, browTilt: -2, mouth: 'open', blush: 0.05, sweat: true, tear: false, tilt: -1 },
  shy: { eye: 'closed', brow: -2, browTilt: 2, mouth: 'small', blush: 0.95, sweat: false, tear: false, tilt: 4 },
  serious: { eye: 'open', brow: 3, browTilt: -4, mouth: 'flat', blush: 0, sweat: false, tear: false, tilt: 0 },
  win: { eye: 'arc', brow: -2, browTilt: -2, mouth: 'wide', blush: 0.4, sweat: false, tear: false, tilt: -3 },
  lose: { eye: 'half', brow: 4, browTilt: 5, mouth: 'wave', blush: 0.15, sweat: true, tear: true, tilt: 2 },
};

/** 표정 한글 이름 (도감 표시용) */
export const EXPRESSION_LABEL: Record<Expression, string> = {
  normal: '기본',
  smile: '웃음',
  sulk: '삐짐',
  surprise: '놀람',
  shy: '부끄러움',
  serious: '진지',
  win: '승리',
  lose: '패배',
};

/* ── 얼굴형 / 체형 ───────────────────────── */

const FACE_GEO: Record<FaceStyle, { rx: number; cheek: number; jaw: number }> = {
  round: { rx: 41, cheek: 21, jaw: 20 },
  oval: { rx: 38, cheek: 16, jaw: 15 },
  slim: { rx: 35, cheek: 12, jaw: 11 },
};

/** 어깨 절반 너비. 머리가 작아 보이지 않도록 전체적으로 좁게 잡았다. */
const BUILD_SW: Record<string, number> = { petite: 52, average: 58, tall: 64 };

/* ── 눈 ──────────────────────────────────── */

interface EyeGeo {
  h: number;
  tilt: number; // 바깥 끝 y 오프셋. -면 치켜뜬 눈
  iris: number; // 홍채 비율
  lid: number; // 윗꺼풀 두께
}

const EYE_GEO: Record<EyeStyle, EyeGeo> = {
  round: { h: 12, tilt: 0, iris: 0.95, lid: 3.4 },
  sharp: { h: 10, tilt: -3.6, iris: 0.86, lid: 3.8 },
  droopy: { h: 10.5, tilt: 3.2, iris: 0.92, lid: 3.2 },
  narrow: { h: 7.6, tilt: -1.6, iris: 0.82, lid: 3.4 },
  sleepy: { h: 8.6, tilt: 1.2, iris: 0.86, lid: 4.2 },
};

const LID = '#2a2018';

function oneEye(side: -1 | 1, f: FaceShape, g: EyeGeo, iris: string, id: string): string {
  const s = side;
  const x0 = CX + s * EYE_DX;
  const w = 11.5;
  const h =
    f.eye === 'wide' ? g.h * 1.32 : f.eye === 'half' ? g.h * 0.52 : g.h;
  const tilt = g.tilt;

  if (f.eye === 'closed' || f.eye === 'arc') {
    // 감은 눈은 아래로, 웃는 눈(arc)은 위로 휜다
    const dir = f.eye === 'arc' ? -1 : 1;
    const lash =
      g.tilt < 0
        ? `<path d="M${x0 + s * (w + 1)} ${EY - 3} l${s * 5} ${-4}" stroke="${LID}" stroke-width="2.6" stroke-linecap="round"/>`
        : '';
    return `
      <path d="M${x0 - s * w} ${EY + 1} q${s * w} ${dir * 9} ${s * w * 2} ${tilt * 0.5}"
            stroke="${LID}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      ${lash}`;
  }

  const inner = `${x0 - s * w} ${EY + 1.5}`;
  const outer = `${x0 + s * w} ${EY + tilt}`;
  const white = `M${inner} Q${x0} ${EY - h} ${outer} Q${x0} ${EY + h * 0.74} ${inner} Z`;
  const irisR = h * g.iris * 0.82;
  const irisY = EY - h * 0.06 + (f.eye === 'half' ? -1 : 0);
  const outerFlick =
    g.tilt < -2
      ? `<path d="M${x0 + s * (w - 1)} ${EY + tilt - 1} l${s * 6} ${-5}" stroke="${LID}" stroke-width="2.8" stroke-linecap="round"/>`
      : '';

  return `
    <clipPath id="${id}"><path d="${white}"/></clipPath>
    <path d="${white}" fill="#fdfbf7"/>
    <g clip-path="url(#${id})">
      <circle cx="${x0}" cy="${irisY}" r="${irisR.toFixed(1)}" fill="${shade(iris, -0.45)}"/>
      <circle cx="${x0}" cy="${(irisY + irisR * 0.14).toFixed(1)}" r="${(irisR * 0.8).toFixed(1)}" fill="${iris}"/>
      <circle cx="${x0}" cy="${(irisY + irisR * 0.28).toFixed(1)}" r="${(irisR * 0.42).toFixed(1)}" fill="#1a1410"/>
      <circle cx="${(x0 - s * irisR * 0.34).toFixed(1)}" cy="${(irisY - irisR * 0.42).toFixed(1)}" r="${(irisR * 0.3).toFixed(1)}" fill="#ffffff"/>
      <circle cx="${(x0 + s * irisR * 0.36).toFixed(1)}" cy="${(irisY + irisR * 0.5).toFixed(1)}" r="${(irisR * 0.16).toFixed(1)}" fill="#ffffff" opacity="0.75"/>
      <path d="${white}" fill="none" stroke="${LID}" stroke-width="${g.lid * 2}" opacity="0.0"/>
    </g>
    <path d="M${inner} Q${x0} ${EY - h} ${outer}" stroke="${LID}" stroke-width="${g.lid}" fill="none" stroke-linecap="round"/>
    <path d="M${x0} ${EY + h * 0.66} Q${x0 + s * w * 0.7} ${EY + h * 0.5} ${outer}"
          stroke="${LID}" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round"/>
    ${outerFlick}`;
}

function eyes(f: FaceShape, style: EyeStyle, iris: string): string {
  const g = EYE_GEO[style];
  return oneEye(-1, f, g, iris, uid()) + oneEye(1, f, g, iris, uid());
}

function brows(f: FaceShape, color: string): string {
  const y = EY - 19 + f.brow;
  const t = f.browTilt;
  const w = 17;
  const arc = (s: -1 | 1) => {
    const x0 = CX + s * EYE_DX;
    return `<path d="M${x0 - s * w * 0.55} ${y + t} q${s * w * 0.5} ${-5} ${s * w} ${-t * 0.45}"
                  stroke="${color}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
  };
  return arc(-1) + arc(1);
}

function mouth(f: FaceShape): string {
  const y = EY + 34;
  const s = '#a85a56';
  const dark = '#8c3f41';
  switch (f.mouth) {
    case 'smile':
      return `<path d="M${CX - 9} ${y - 1} q9 8 18 0" stroke="${s}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;
    case 'wide':
      return `<path d="M${CX - 11} ${y - 2} q11 14 22 0 q-11 4 -22 0z" fill="${dark}"/>
              <path d="M${CX - 8} ${y - 1} q8 4 16 0" fill="#ffffff" opacity="0.85"/>`;
    case 'pout':
      return `<path d="M${CX - 7} ${y + 3} q7 -7 14 0" stroke="${s}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;
    case 'open':
      return `<ellipse cx="${CX}" cy="${y + 2}" rx="6" ry="8.5" fill="${dark}"/>
              <ellipse cx="${CX}" cy="${y + 5}" rx="3.4" ry="4" fill="#c4726e" opacity="0.8"/>`;
    case 'small':
      return `<path d="M${CX - 4} ${y} q4 4.5 8 0" stroke="${s}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
    case 'wave':
      return `<path d="M${CX - 10} ${y} q5 -5.5 10 0 q5 5.5 10 0" stroke="${s}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
    default:
      return `<path d="M${CX - 6} ${y} q6 2.5 12 0" stroke="${s}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  }
}

/* ── 머리 ────────────────────────────────── */

/** 어깨 뒤로 흐르는 머리채 */
function hairBack(look: TenantLook, sw: number): string {
  const h = look.hair;
  const dk = shade(h, -0.3);
  const w = 52;
  switch (look.hairStyle) {
    case 'long':
      return `<path d="M${CX - w} ${EY - 20}
                       C${CX - w - 12} ${EY + 90} ${CX - sw - 6} ${260} ${CX - sw - 10} ${BOTTOM}
                       L${CX + sw + 10} ${BOTTOM}
                       C${CX + sw + 6} ${260} ${CX + w + 12} ${EY + 90} ${CX + w} ${EY - 20} Z" fill="${dk}"/>`;
    case 'wave':
      return `<path d="M${CX - w} ${EY - 20}
                       C${CX - w - 16} ${EY + 80} ${CX - sw - 10} ${250} ${CX - sw - 14} ${BOTTOM}
                       q14 -16 26 0 q14 -18 26 0 q12 -16 24 0 q14 -18 26 0 q12 -16 26 0
                       C${CX + sw + 10} ${250} ${CX + w + 16} ${EY + 80} ${CX + w} ${EY - 20} Z" fill="${dk}"/>`;
    case 'braid':
      return `<path d="M${CX - w} ${EY - 20} C${CX - w - 6} ${EY + 60} ${CX - 48} ${220} ${CX - 44} ${250}
                       L${CX + 44} ${250} C${CX + 48} ${220} ${CX + w + 6} ${EY + 60} ${CX + w} ${EY - 20} Z" fill="${dk}"/>
              <g transform="translate(${CX + 38} ${EY + 34}) rotate(10)">
                ${[0, 1, 2, 3, 4]
                  .map((i) => {
                    const cy = i * 25;
                    const r = 14 - i * 1.2;
                    return `<ellipse cx="0" cy="${cy}" rx="${r.toFixed(1)}" ry="16" fill="${i % 2 ? shade(h, 0.1) : shade(h, -0.14)}"/>
                            <path d="M${-r.toFixed(1)} ${cy + 12} q${r.toFixed(1)} -9 ${(r * 2).toFixed(1)} 0"
                                  stroke="${shade(h, -0.45)}" stroke-width="1.8" fill="none" opacity="0.8"/>`;
                  })
                  .join('')}
                <path d="M0 ${4 * 25 + 14} l-7 15 h14z" fill="${shade(h, -0.5)}"/>
                <rect x="-9" y="${4 * 25 + 10}" width="18" height="6" rx="3" fill="${look.accent}"/>
              </g>`;
    case 'ponytail':
      return `<path d="M${CX - 46} ${EY - 20} C${CX - 50} ${EY + 40} ${CX - 44} ${200} ${CX - 40} ${214}
                       L${CX + 40} ${214} C${CX + 44} ${200} ${CX + 50} ${EY + 40} ${CX + 46} ${EY - 20} Z" fill="${dk}"/>
              <path d="M${CX + 40} ${EY - 26} C${CX + 86} ${EY + 4} ${CX + 82} ${EY + 90} ${CX + 56} ${EY + 150}
                       C${CX + 74} ${EY + 80} ${CX + 70} ${EY + 20} ${CX + 34} ${EY + 4} Z" fill="${h}"/>`;
    case 'bun':
      return `<path d="M${CX - 44} ${EY - 20} C${CX - 46} ${EY + 20} ${CX - 42} ${170} ${CX - 38} ${182}
                       L${CX + 38} ${182} C${CX + 42} ${170} ${CX + 46} ${EY + 20} ${CX + 44} ${EY - 20} Z" fill="${dk}"/>
              <circle cx="${CX}" cy="${CROWN - 22}" r="20" fill="${h}"/>
              <circle cx="${CX}" cy="${CROWN - 22}" r="20" fill="none" stroke="${dk}" stroke-width="2"/>
              <path d="M${CX - 14} ${CROWN - 28} q14 -10 28 0" stroke="${shade(h, 0.3)}" stroke-width="3" fill="none" opacity="0.5"/>`;
    case 'bob':
      return `<path d="M${CX - 48} ${EY - 20} C${CX - 54} ${EY + 30} ${CX - 48} ${EY + 52} ${CX - 40} ${EY + 62}
                       L${CX + 40} ${EY + 62} C${CX + 48} ${EY + 52} ${CX + 54} ${EY + 30} ${CX + 48} ${EY - 20} Z" fill="${dk}"/>`;
    default: // short
      return `<path d="M${CX - 44} ${EY - 24} C${CX - 48} ${EY + 6} ${CX - 44} ${EY + 18} ${CX - 38} ${EY + 24}
                       L${CX + 38} ${EY + 24} C${CX + 44} ${EY + 18} ${CX + 48} ${EY + 6} ${CX + 44} ${EY - 24} Z" fill="${dk}"/>`;
  }
}

/** 두개골을 덮는 머리 + 광택 */
function hairCap(look: TenantLook, rx: number): string {
  const h = look.hair;
  const lite = shade(h, 0.32);
  return `
    <path d="M${CX - rx - 3} ${EY - 4}
             C${CX - rx - 5} ${CROWN - 8} ${CX - rx * 0.66} ${CROWN - 16} ${CX} ${CROWN - 16}
             C${CX + rx * 0.66} ${CROWN - 16} ${CX + rx + 5} ${CROWN - 8} ${CX + rx + 3} ${EY - 4}
             C${CX + rx} ${EY - 30} ${CX + rx * 0.5} ${EY - 40} ${CX} ${EY - 40}
             C${CX - rx * 0.5} ${EY - 40} ${CX - rx} ${EY - 30} ${CX - rx - 3} ${EY - 4} Z" fill="${h}"/>
    <path d="M${CX - rx * 0.8} ${CROWN + 2} C${CX - rx * 0.4} ${CROWN - 14} ${CX + rx * 0.1} ${CROWN - 15} ${CX + rx * 0.42} ${CROWN - 5}
             C${CX + rx * 0.1} ${CROWN - 9} ${CX - rx * 0.4} ${CROWN - 7} ${CX - rx * 0.8} ${CROWN + 8} Z"
          fill="${lite}" opacity="0.3"/>`;
}

/** 앞머리 — 실루엣에서 가장 먼저 눈에 띄는 부분 */
function bangs(style: BangsStyle, look: TenantLook, rx: number): string {
  const h = look.hair;
  const lite = shade(h, 0.26);
  // 앞머리 끝. 눈썹(EY-19)보다 위라야 눈썹이 가려지지 않는다.
  const B = EY - 26;
  switch (style) {
    case 'straight':
      return `<path d="M${CX - rx - 2} ${EY - 4} C${CX - rx} ${CROWN - 8} ${CX - 20} ${CROWN - 16} ${CX} ${CROWN - 16}
                       C${CX + 20} ${CROWN - 16} ${CX + rx} ${CROWN - 8} ${CX + rx + 2} ${EY - 4}
                       C${CX + rx - 4} ${B + 2} ${CX + 20} ${B - 4} ${CX} ${B - 2}
                       C${CX - 20} ${B - 4} ${CX - rx + 4} ${B + 2} ${CX - rx - 2} ${EY - 4} Z" fill="${h}"/>
              <path d="M${CX - 22} ${CROWN - 4} q20 ${-8} 40 2 q-20 -2 -40 -2z" fill="${lite}" opacity="0.5"/>`;
    case 'split':
      return `<path d="M${CX - rx - 2} ${EY - 2} C${CX - rx} ${CROWN - 8} ${CX - 18} ${CROWN - 16} ${CX} ${CROWN - 16}
                       C${CX + 18} ${CROWN - 16} ${CX + rx} ${CROWN - 8} ${CX + rx + 2} ${EY - 2}
                       C${CX + rx - 6} ${B + 6} ${CX + 22} ${B - 2} ${CX + 7} ${CROWN + 6}
                       C${CX + 3} ${CROWN + 22} ${CX - 3} ${CROWN + 22} ${CX - 7} ${CROWN + 6}
                       C${CX - 22} ${B - 2} ${CX - rx + 6} ${B + 6} ${CX - rx - 2} ${EY - 2} Z" fill="${h}"/>
              <path d="M${CX - 26} ${CROWN} q22 ${-9} 44 0 q-22 -1 -44 0z" fill="${lite}" opacity="0.45"/>`;
    case 'side':
      return `<path d="M${CX - rx - 2} ${EY + 2} C${CX - rx} ${CROWN - 8} ${CX - 18} ${CROWN - 16} ${CX} ${CROWN - 16}
                       C${CX + 20} ${CROWN - 16} ${CX + rx} ${CROWN - 8} ${CX + rx + 2} ${EY + 2}
                       C${CX + rx - 8} ${B - 6} ${CX + 10} ${B + 8} ${CX - 14} ${B + 4}
                       C${CX - 26} ${B + 2} ${CX - rx + 2} ${B + 10} ${CX - rx - 2} ${EY + 2} Z" fill="${h}"/>
              <path d="M${CX - 18} ${CROWN - 2} C${CX + 4} ${CROWN - 10} ${CX + 24} ${CROWN + 2} ${CX + 30} ${CROWN + 18}
                       C${CX + 20} ${CROWN + 4} ${CX + 2} ${CROWN + 2} ${CX - 18} ${CROWN + 6} Z" fill="${lite}" opacity="0.5"/>`;
    case 'curtain':
      return `<path d="M${CX - rx - 2} ${EY + 4} C${CX - rx} ${CROWN - 8} ${CX - 18} ${CROWN - 16} ${CX} ${CROWN - 16}
                       C${CX + 18} ${CROWN - 16} ${CX + rx} ${CROWN - 8} ${CX + rx + 2} ${EY + 4}
                       C${CX + rx - 2} ${B + 14} ${CX + 26} ${B + 4} ${CX + 14} ${CROWN + 2}
                       C${CX + 8} ${CROWN - 6} ${CX - 8} ${CROWN - 6} ${CX - 14} ${CROWN + 2}
                       C${CX - 26} ${B + 4} ${CX - rx + 2} ${B + 14} ${CX - rx - 2} ${EY + 4} Z" fill="${h}"/>
              <path d="M${CX - 30} ${CROWN + 2} C${CX - 18} ${CROWN - 10} ${CX + 18} ${CROWN - 10} ${CX + 30} ${CROWN + 2}
                       C${CX + 16} ${CROWN - 4} ${CX - 16} ${CROWN - 4} ${CX - 30} ${CROWN + 2} Z" fill="${lite}" opacity="0.5"/>`;
    default: {
      // wispy — 짧고 삐친 앞머리. 갈래 수를 rx 로 맞춰 어떤 얼굴형에도 닫히게 한다.
      const n = 6;
      const step = (2 * rx + 4) / n;
      let saw = '';
      for (let i = 0; i < n; i += 1) saw += ` l${-step.toFixed(1)} ${i % 2 === 0 ? -16 : 16}`;
      return `<path d="M${CX - rx - 2} ${EY - 14} C${CX - rx} ${CROWN - 12} ${CX - 18} ${CROWN - 20} ${CX} ${CROWN - 20}
                       C${CX + 18} ${CROWN - 20} ${CX + rx} ${CROWN - 12} ${CX + rx + 2} ${EY - 14}${saw} Z" fill="${h}"/>
              <path d="M${CX - 16} ${CROWN - 8} l12 -9 l7 11 z" fill="${lite}" opacity="0.5"/>`;
    }
  }
}

/** 귀 앞으로 내려오는 옆머리 */
function sideLocks(look: TenantLook, rx: number): string {
  const h = look.hair;
  const dk = shade(h, -0.14);
  const long = ['long', 'wave', 'braid', 'ponytail'].includes(look.hairStyle);
  const len = long ? 104 : look.hairStyle === 'bob' ? 56 : 26;
  const lock = (s: -1 | 1) =>
    `<path d="M${CX + s * (rx + 1)} ${EY - 26}
              C${CX + s * (rx + 6)} ${EY + len * 0.35} ${CX + s * (rx + 2)} ${EY + len * 0.8} ${CX + s * (rx - 4)} ${EY + len}
              C${CX + s * (rx - 1)} ${EY + len * 0.7} ${CX + s * (rx - 4)} ${EY + 6} ${CX + s * (rx - 7)} ${EY - 22} Z"
            fill="${dk}"/>`;
  return lock(-1) + lock(1);
}

/* ── 장신구 ──────────────────────────────── */

function accessory(kind: Accessory, look: TenantLook, rx: number): string {
  const a = look.accent;
  switch (kind) {
    case 'glasses': {
      const frame = shade(a, -0.55);
      const lens = (sd: -1 | 1) =>
        `<rect x="${CX + sd * EYE_DX - 15}" y="${EY - 12}" width="30" height="23" rx="8"
               fill="#dff0ff" fill-opacity="0.16" stroke="${frame}" stroke-width="2.4"/>`;
      return `${lens(-1)}${lens(1)}
              <path d="M${CX - 6} ${EY - 5} q6 -3 12 0" stroke="${frame}" stroke-width="2.4" fill="none"/>
              <path d="M${CX - EYE_DX - 15} ${EY - 6} l-6 -3 M${CX + EYE_DX + 15} ${EY - 6} l6 -3"
                    stroke="${frame}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
              <path d="M${CX - EYE_DX - 11} ${EY - 8} l9 -2 l-11 9z" fill="#ffffff" opacity="0.3"/>`;
    }
    case 'hairpin':
      return `<g transform="translate(${CX - rx + 4} ${CROWN + 2}) rotate(-18)">
                <rect x="-11" y="-3" width="22" height="6" rx="3" fill="${a}"/>
                <circle cx="-11" cy="0" r="3.4" fill="${shade(a, 0.35)}"/>
              </g>`;
    case 'starpin':
      return `<g transform="translate(${CX + rx - 6} ${CROWN}) rotate(12)">
                <path d="M0 -9 L2.6 -2.8 L9 -2.8 L3.8 1.2 L5.8 8 L0 4 L-5.8 8 L-3.8 1.2 L-9 -2.8 L-2.6 -2.8 Z" fill="${a}"/>
                <circle cx="0" cy="0" r="2" fill="#fff" opacity="0.7"/>
              </g>`;
    case 'ribbon':
      return `<g transform="translate(${CX + rx - 10} ${CROWN - 4})">
                <path d="M0 0 l-13 -7 v14 z" fill="${a}"/>
                <path d="M0 0 l13 -7 v14 z" fill="${a}"/>
                <circle cx="0" cy="0" r="4" fill="${shade(a, -0.2)}"/>
              </g>`;
    case 'earring':
      return `<g fill="${a}">
                <circle cx="${CX - rx - 1}" cy="${EY + 12}" r="3"/>
                <circle cx="${CX + rx + 1}" cy="${EY + 12}" r="3"/>
                <path d="M${CX + rx + 1} ${EY + 14} v7" stroke="${a}" stroke-width="1.6"/>
                <circle cx="${CX + rx + 1}" cy="${EY + 23}" r="3.2"/>
              </g>`;
    case 'band':
      return `<path d="M${CX - rx - 4} ${EY - 14} C${CX - rx} ${CROWN - 14} ${CX + rx} ${CROWN - 14} ${CX + rx + 4} ${EY - 14}"
                    stroke="${a}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    default:
      return '';
  }
}

/* ── 몸통 / 의상 ─────────────────────────── */

function torsoPath(sw: number): string {
  const top = SHOULDER - 16;
  return `M${CX - 18} ${top}
          C${CX - 46} ${top + 4} ${CX - sw} ${top + 16} ${CX - sw} ${top + 46}
          C${CX - sw} ${top + 86} ${CX - sw * 0.74} ${302} ${CX - sw * 0.86} ${BOTTOM}
          L${CX + sw * 0.86} ${BOTTOM}
          C${CX + sw * 0.74} ${302} ${CX + sw} ${top + 86} ${CX + sw} ${top + 46}
          C${CX + sw} ${top + 16} ${CX + 46} ${top + 4} ${CX + 18} ${top} Z`;
}

function arms(sw: number, color: string, skin: string): string {
  const ax = sw - 5;
  const arm = (s: -1 | 1) =>
    `<path d="M${CX + s * (ax - 6)} ${SHOULDER + 8} C${CX + s * (ax + 6)} ${SHOULDER + 50} ${CX + s * (ax + 3)} ${SHOULDER + 84} ${CX + s * (ax - 2)} ${SHOULDER + 108}"
           stroke="${color}" stroke-width="27" fill="none" stroke-linecap="round"/>`;
  const hand = (s: -1 | 1) =>
    `<circle cx="${CX + s * (ax - 2)}" cy="${SHOULDER + 118}" r="11.5" fill="${skin}"/>
     <circle cx="${CX + s * (ax - 2)}" cy="${SHOULDER + 118}" r="11.5" fill="${shade(skin, -0.12)}" opacity="0.35"/>`;
  return arm(-1) + arm(1) + hand(-1) + hand(1);
}

/** 옷깃·소매 등 의상별 디테일. 실루엣 색은 color, 포인트는 accent. */
function garmentDetail(g: Garment, color: string, accent: string, skin: string, sw: number): string {
  const top = SHOULDER - 16;
  const dk = shade(color, -0.22);
  const lt = shade(color, 0.2);
  const neckV = `M${CX - 17} ${top + 1} L${CX} ${top + 26} L${CX + 17} ${top + 1}`;

  switch (g) {
    case 'hoodie':
      return `
        <path d="M${CX - 34} ${top + 2} C${CX - 40} ${top + 30} ${CX - 22} ${top + 40} ${CX} ${top + 40}
                 C${CX + 22} ${top + 40} ${CX + 40} ${top + 30} ${CX + 34} ${top + 2}
                 C${CX + 20} ${top - 10} ${CX - 20} ${top - 10} ${CX - 34} ${top + 2} Z" fill="${dk}"/>
        <path d="M${CX - 24} ${top + 8} q24 22 48 0" stroke="${shade(color, -0.4)}" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M${CX - 8} ${top + 26} v34" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${CX + 8} ${top + 24} v30" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${CX - 30} ${top + 96} h60" stroke="${dk}" stroke-width="2.4" opacity="0.7"/>`;
    case 'tee':
      return `
        <path d="M${CX - 19} ${top + 2} q19 20 38 0" stroke="${dk}" stroke-width="4" fill="none"/>
        <path d="M${CX - sw + 8} ${SHOULDER + 52} q12 8 22 2" stroke="${dk}" stroke-width="3" fill="none"/>
        <path d="M${CX + sw - 8} ${SHOULDER + 52} q-12 8 -22 2" stroke="${dk}" stroke-width="3" fill="none"/>
        <circle cx="${CX}" cy="${top + 74}" r="15" fill="none" stroke="${accent}" stroke-width="3" opacity="0.75"/>`;
    case 'shirt':
      return `
        <path d="${neckV}" stroke="none" fill="${shade(skin, -0.05)}"/>
        <path d="M${CX - 17} ${top} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${CX + 17} ${top} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${CX} ${top + 24} v${BOTTOM - top - 24}" stroke="${dk}" stroke-width="2.2"/>
        ${[40, 70, 100, 130].map((d) => `<circle cx="${CX}" cy="${top + d}" r="2.6" fill="${lt}"/>`).join('')}`;
    case 'apron':
      return `
        <path d="M${CX - 17} ${top} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${CX + 17} ${top} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${CX - 26} ${top + 30} h52 l8 ${BOTTOM - top - 30} h-68z" fill="${lt}"/>
        <path d="M${CX - 26} ${top + 30} l-4 -18 M${CX + 26} ${top + 30} l4 -18"
              stroke="${lt}" stroke-width="7" stroke-linecap="round"/>
        <path d="M${CX - 34} ${top + 104} h68" stroke="${accent}" stroke-width="8"/>
        <path d="M${CX + 22} ${top + 108} q14 10 8 26" stroke="${accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M${CX - 16} ${top + 120} h32 v26 h-32z" fill="${shade(lt, -0.1)}" opacity="0.8"/>`;
    case 'smock':
      return `
        <path d="${neckV}" fill="${shade(skin, -0.05)}"/>
        <path d="${neckV}" stroke="${dk}" stroke-width="3.5" fill="none"/>
        <path d="M${CX - sw + 4} ${SHOULDER + 60} q14 10 26 2" stroke="${dk}" stroke-width="6" fill="none"/>
        <path d="M${CX + sw - 4} ${SHOULDER + 60} q-14 10 -26 2" stroke="${dk}" stroke-width="6" fill="none"/>
        ${[
          [CX - 26, top + 62, 5, accent],
          [CX + 18, top + 86, 4, shade(accent, 0.3)],
          [CX + 30, top + 48, 3, '#e4d7a8'],
          [CX - 12, top + 116, 6, shade(accent, -0.25)],
          [CX + 8, top + 140, 3.5, accent],
        ]
          .map(([x, y, r, c]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" opacity="0.75"/>`)
          .join('')}`;
    case 'jersey':
      return `
        <path d="M${CX - 18} ${top + 2} q18 8 36 0 v10 q-18 8 -36 0z" fill="${dk}"/>
        <path d="M${CX} ${top + 12} v${BOTTOM - top - 12}" stroke="${shade(color, -0.45)}" stroke-width="3"/>
        <path d="M${CX - sw + 2} ${SHOULDER + 14} C${CX - sw + 10} ${SHOULDER + 56} ${CX - sw + 8} ${SHOULDER + 86} ${CX - sw + 4} ${SHOULDER + 104}"
              stroke="${accent}" stroke-width="5" fill="none"/>
        <path d="M${CX + sw - 2} ${SHOULDER + 14} C${CX + sw - 10} ${SHOULDER + 56} ${CX + sw - 8} ${SHOULDER + 86} ${CX + sw - 4} ${SHOULDER + 104}"
              stroke="${accent}" stroke-width="5" fill="none"/>
        <path d="M${CX - 34} ${top + 40} h22" stroke="#ffffff" stroke-width="3.4" opacity="0.85"/>`;
    case 'blouse':
      return `
        <path d="M${CX - 20} ${top + 2} q20 24 40 0 q-4 16 -20 16 q-16 0 -20 -16z" fill="#f8f3e9"/>
        <path d="M${CX - 20} ${top + 2} q20 24 40 0" stroke="${dk}" stroke-width="2.6" fill="none"/>
        <g transform="translate(${CX} ${top + 22})">
          <path d="M0 0 l-12 -6 v12 z" fill="${accent}"/>
          <path d="M0 0 l12 -6 v12 z" fill="${accent}"/>
          <circle r="3.6" fill="${shade(accent, -0.25)}"/>
        </g>
        ${[60, 92, 124].map((d) => `<circle cx="${CX}" cy="${top + d}" r="2.4" fill="${lt}"/>`).join('')}`;
    case 'knit':
      return `
        <path d="M${CX - 22} ${top - 4} q22 26 44 0 v14 q-22 22 -44 0z" fill="${lt}"/>
        ${[0, 1, 2, 3, 4, 5]
          .map(
            (i) =>
              `<path d="M${CX - 22 + i * 9} ${top - 2} q3 12 0 24" stroke="${dk}" stroke-width="1.6" fill="none" opacity="0.6"/>`,
          )
          .join('')}
        <path d="M${CX - 12} ${top + 46} q12 18 0 36 q-12 18 0 36" stroke="${dk}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${CX + 12} ${top + 46} q-12 18 0 36 q12 18 0 36" stroke="${dk}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${CX - sw + 4} ${SHOULDER + 96} q14 10 26 2" stroke="${dk}" stroke-width="6" fill="none"/>
        <path d="M${CX + sw - 4} ${SHOULDER + 96} q-14 10 -26 2" stroke="${dk}" stroke-width="6" fill="none"/>`;
    case 'suit': {
      // 깃을 몸통과 같은 색으로 칠하면 통째로 사라진다. 한 단계 어둡게 깔고 접힌 선을 밝게.
      const lap = shade(color, -0.3);
      return `
        <path d="M${CX - 16} ${top} L${CX} ${top + 30} L${CX + 16} ${top} L${CX + 12} ${top + 88} L${CX - 12} ${top + 88} Z" fill="#f6f1e6"/>
        <path d="M${CX - 23} ${top - 2} L${CX - 3} ${top + 38} L${CX - 29} ${top + 80} L${CX - 41} ${top + 18} Z" fill="${lap}"/>
        <path d="M${CX + 23} ${top - 2} L${CX + 3} ${top + 38} L${CX + 29} ${top + 80} L${CX + 41} ${top + 18} Z" fill="${lap}"/>
        <path d="M${CX - 23} ${top - 2} L${CX - 3} ${top + 38} M${CX + 23} ${top - 2} L${CX + 3} ${top + 38}"
              stroke="${lt}" stroke-width="2"/>
        <g transform="translate(${CX} ${top + 26})">
          <path d="M0 0 l-12 -7 v14 z" fill="${accent}"/>
          <path d="M0 0 l12 -7 v14 z" fill="${accent}"/>
          <circle r="3.6" fill="${shade(accent, -0.3)}"/>
        </g>
        <circle cx="${CX - 1}" cy="${top + 104}" r="3" fill="${lt}"/>`;
    }
    case 'dress':
      return `
        <path d="M${CX - 24} ${top + 4} q24 22 48 0 v8 q-24 20 -48 0z" fill="${lt}"/>
        <path d="M${CX - 24} ${top + 4} q24 22 48 0" stroke="${dk}" stroke-width="2.4" fill="none"/>
        <path d="M${CX - sw * 0.92} ${top + 104} h${sw * 1.84}" stroke="${accent}" stroke-width="9"/>
        <path d="M${CX - sw * 0.9} ${top + 120} q${sw * 0.9} 12 ${sw * 1.8} 0" stroke="${lt}" stroke-width="2.4" fill="none" opacity="0.7"/>
        <g transform="translate(${CX + 26} ${top + 108})">
          <path d="M0 0 l-11 -6 v12 z" fill="${shade(accent, 0.25)}"/>
          <path d="M0 0 l11 -6 v12 z" fill="${shade(accent, 0.25)}"/>
        </g>`;
    case 'cardigan':
      return `
        <path d="M${CX - 20} ${top + 2} L${CX} ${top + 30} L${CX + 20} ${top + 2} L${CX + 16} ${BOTTOM} L${CX - 16} ${BOTTOM} Z" fill="#efe6d6"/>
        <path d="M${CX - 20} ${top + 2} L${CX - 2} ${top + 34} L${CX - 10} ${BOTTOM} L${CX - 30} ${BOTTOM} Z" fill="${dk}"/>
        <path d="M${CX + 20} ${top + 2} L${CX + 2} ${top + 34} L${CX + 10} ${BOTTOM} L${CX + 30} ${BOTTOM} Z" fill="${dk}"/>
        ${[52, 84, 116, 148].map((d) => `<circle cx="${CX - 14}" cy="${top + d}" r="2.8" fill="${accent}"/>`).join('')}
        <path d="M${CX - sw + 4} ${SHOULDER + 100} q14 10 26 2" stroke="${dk}" stroke-width="6" fill="none"/>
        <path d="M${CX + sw - 4} ${SHOULDER + 100} q-14 10 -26 2" stroke="${dk}" stroke-width="6" fill="none"/>`;
    case 'coat':
      return `
        <path d="M${CX - 18} ${top + 2} L${CX} ${top + 30} L${CX + 18} ${top + 2}" fill="${shade(skin, -0.08)}"/>
        <path d="M${CX - 26} ${top - 4} L${CX - 2} ${top + 36} L${CX - 34} ${top + 84} L${CX - 46} ${top + 16} Z" fill="${lt}"/>
        <path d="M${CX + 26} ${top - 4} L${CX + 2} ${top + 36} L${CX + 34} ${top + 84} L${CX + 46} ${top + 16} Z" fill="${lt}"/>
        <path d="M${CX} ${top + 36} v${BOTTOM - top - 36}" stroke="${shade(color, -0.4)}" stroke-width="2.2"/>
        <path d="M${CX - sw * 0.94} ${top + 110} h${sw * 1.88}" stroke="${shade(color, -0.38)}" stroke-width="10"/>
        <rect x="${CX - 9}" y="${top + 104}" width="18" height="16" rx="3" fill="${accent}"/>
        ${[
          [CX - 13, top + 62],
          [CX + 13, top + 62],
          [CX - 13, top + 88],
          [CX + 13, top + 88],
        ]
          .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.2" fill="${shade(color, -0.45)}"/>`)
          .join('')}`;
    default: // hanbok — 저고리. 동정과 고름으로 알아본다.
      return `
        <path d="M${CX - 30} ${top + 4} L${CX} ${top + 40} L${CX + 30} ${top + 4}
                 L${CX + 34} ${top + 14} L${CX} ${top + 54} L${CX - 34} ${top + 14} Z" fill="#fbf6ec"/>
        <path d="M${CX - 30} ${top + 4} L${CX} ${top + 40} L${CX + 30} ${top + 4}" stroke="${dk}" stroke-width="2" fill="none"/>
        <path d="M${CX - 34} ${top + 14} L${CX} ${top + 54} L${CX + 20} ${top + 32} L${CX + 26} ${top + 62} L${CX - 30} ${top + 62} Z" fill="${color}"/>
        <path d="M${CX - sw} ${top + 70} q${sw} 16 ${sw * 2} 0" stroke="${accent}" stroke-width="9" fill="none"/>
        <g transform="translate(${CX + 10} ${top + 60})">
          <path d="M0 0 l-14 -8 v16 z" fill="${accent}"/>
          <path d="M0 0 l14 -8 v16 z" fill="${accent}"/>
          <path d="M-3 6 C-8 40 -4 70 -9 ${BOTTOM - top - 60}" stroke="${accent}" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M6 6 C12 44 8 76 14 ${BOTTOM - top - 60}" stroke="${shade(accent, 0.18)}" stroke-width="7" fill="none" stroke-linecap="round"/>
        </g>`;
  }
}

/* ── 소품 ────────────────────────────────── */

function prop(kind: PropArt, look: TenantLook, sw: number): string {
  const a = look.accent;
  // 오른손(화면 왼쪽) 언저리
  const x = CX - (sw - 5) + 2;
  const y = SHOULDER + 118;
  // 옷과 색이 겹쳐도 보이도록 밝은 윤곽을 한 겹 깔고 그 위에 그린다
  const halo = (inner: string) =>
    inner.replace(/fill="[^"]*"/g, 'fill="#f4ecdc"').replace(/stroke="[^"]*"/g, 'stroke="#f4ecdc"');
  const at = (inner: string) =>
    `<g transform="translate(${x} ${y}) scale(1.18)" stroke-linejoin="round">
       <g stroke="#f4ecdc" stroke-width="5" opacity="0.9">${halo(inner)}</g>
       ${inner}
     </g>`;
  switch (kind) {
    case 'sketchbook':
      return at(`<rect x="-16" y="-26" width="34" height="46" rx="3" fill="#f4ecdb" stroke="#c9b894" stroke-width="2"/>
                 <path d="M-16 -18 h34" stroke="#c9b894" stroke-width="2"/>
                 ${[0, 1, 2, 3].map((i) => `<circle cx="${-11 + i * 9}" cy="-22" r="2" fill="#9c8b6c"/>`).join('')}
                 <path d="M-9 -6 q10 -8 20 2 M-9 4 h20" stroke="${a}" stroke-width="2" fill="none" opacity="0.8"/>`);
    case 'ladle':
      return at(`<path d="M2 -34 v40" stroke="#c6cbd2" stroke-width="5" stroke-linecap="round"/>
                 <path d="M-10 6 a12 10 0 0 0 24 0 z" fill="#dde2e8" stroke="#a8b0ba" stroke-width="2"/>`);
    case 'brush':
      return at(`<path d="M6 -36 L-2 10" stroke="#b98c4e" stroke-width="5" stroke-linecap="round"/>
                 <path d="M-3 8 l-5 16 l10 2 z" fill="${a}"/>
                 <path d="M4 -8 h4" stroke="#8a6a3a" stroke-width="3"/>`);
    case 'tape':
      return at(`<g transform="translate(0 -16)">
                   <path d="M-12 -2 q12 -7 24 0 v6 q-12 7 -24 0z" fill="#f6f2e8"/>
                   <path d="M-12 8 q12 -7 24 0 v6 q-12 7 -24 0z" fill="#f6f2e8"/>
                 </g>`);
    case 'notebook':
      return at(`<rect x="-15" y="-22" width="31" height="40" rx="3" fill="#3d4757"/>
                 <rect x="-11" y="-18" width="23" height="32" rx="2" fill="#f3efe4"/>
                 ${[0, 1, 2].map((i) => `<path d="M-7 ${-9 + i * 9} h15" stroke="#b7b0a0" stroke-width="2"/>`).join('')}
                 <path d="M14 -22 v40" stroke="${a}" stroke-width="3"/>`);
    case 'telescope':
      return at(`<g transform="rotate(-28)">
                   <rect x="-22" y="-7" width="40" height="15" rx="7" fill="#33405c"/>
                   <rect x="14" y="-9" width="14" height="19" rx="6" fill="#4a5a7d"/>
                   <circle cx="28" cy="0" r="6" fill="${a}"/>
                   <path d="M-18 -3 h30" stroke="#6b7da6" stroke-width="2" opacity="0.8"/>
                 </g>`);
    case 'bag':
      return at(`<path d="M-4 -14 a14 12 0 0 1 22 0" stroke="#6b5136" stroke-width="3.5" fill="none"/>
                 <rect x="-14" y="-14" width="42" height="34" rx="4" fill="#7c5c3c" stroke="#5a4028" stroke-width="2"/>
                 <path d="M-14 -4 h42" stroke="#5a4028" stroke-width="2.4"/>
                 <rect x="3" y="-8" width="8" height="8" rx="2" fill="${a}"/>`);
    case 'script':
      return at(`<g transform="rotate(-9)">
                   <rect x="-15" y="-26" width="32" height="44" rx="2" fill="#f7f2e4" stroke="#cbbfa3" stroke-width="2"/>
                   ${[0, 1, 2, 3, 4].map((i) => `<path d="M-9 ${-18 + i * 8} h${i % 2 ? 14 : 20}" stroke="#a89c82" stroke-width="2"/>`).join('')}
                   <path d="M-15 -26 l32 0" stroke="${a}" stroke-width="3"/>
                 </g>`);
    case 'mug':
      return at(`<path d="M-13 -14 h26 v24 a13 13 0 0 1 -26 0 z" fill="#e8ddc8" stroke="#b8a888" stroke-width="2"/>
                 <path d="M13 -6 a9 9 0 0 1 0 16" stroke="#b8a888" stroke-width="3.5" fill="none"/>
                 <ellipse cx="0" cy="-14" rx="13" ry="4.5" fill="${shade(a, 0.1)}"/>
                 <path d="M-5 -24 q4 -6 0 -11 M5 -24 q4 -6 0 -11" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4"/>`);
    case 'hwatu':
      return at(`<g transform="rotate(-8)">
                   <rect x="-14" y="-22" width="28" height="40" rx="3" fill="#2a2119" stroke="#6b5a3e" stroke-width="2"/>
                   <rect x="-9" y="-16" width="18" height="28" rx="2" fill="#7a2a22"/>
                   <circle cx="0" cy="-2" r="6" fill="#d8b24a"/>
                   <path d="M-14 6 h28" stroke="#6b5a3e" stroke-width="2"/>
                 </g>`);
    default:
      return '';
  }
}

/* ── 조립 ────────────────────────────────── */

/** 하숙생 입상 SVG 문자열 */
export function portraitSvg(opts: PortraitOptions): string {
  const { tenant, expression, outfit } = opts;
  const w = opts.width ?? 240;
  const h = opts.height ?? 360;
  const look = tenant.look;
  const f = FACES[expression];
  const geo = FACE_GEO[look.face];
  const rx = geo.rx;
  const sw = BUILD_SW[look.build] ?? 65;
  const skin = look.skin;
  const skinDark = shade(skin, -0.16);
  const color = look.outfits[outfit];
  const garment = look.wear[outfit];
  const gid = uid();

  const facePath = `M${CX - rx} ${EY - 14}
    C${CX - rx} ${CROWN + 2} ${CX - rx * 0.6} ${CROWN - 2} ${CX} ${CROWN - 2}
    C${CX + rx * 0.6} ${CROWN - 2} ${CX + rx} ${CROWN + 2} ${CX + rx} ${EY - 14}
    C${CX + rx} ${EY + geo.jaw} ${CX + geo.cheek} ${CHIN - 7} ${CX} ${CHIN}
    C${CX - geo.cheek} ${CHIN - 7} ${CX - rx} ${EY + geo.jaw} ${CX - rx} ${EY - 14} Z`;

  const blush =
    f.blush > 0
      ? `<ellipse cx="${CX - 27}" cy="${EY + 16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(f.blush * 0.5).toFixed(2)}"/>
         <ellipse cx="${CX + 27}" cy="${EY + 16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(f.blush * 0.5).toFixed(2)}"/>`
      : '';
  const sweat = f.sweat
    ? `<path d="M${CX + rx - 6} ${CROWN + 16} q8 12 0 17 q-8 -5 0 -17z" fill="#8ecbff" opacity="0.92"/>`
    : '';
  const tear = f.tear
    ? `<path d="M${CX - EYE_DX - 6} ${EY + 6} q-3 14 1 22" stroke="#8ecbff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
       <circle cx="${CX - EYE_DX - 5}" cy="${EY + 30}" r="3.2" fill="#8ecbff" opacity="0.9"/>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="${w}" height="${h}" role="img" aria-label="${tenant.name} ${EXPRESSION_LABEL[expression]}">
  <defs>
    <radialGradient id="${gid}s" cx="0.4" cy="0.32" r="0.75">
      <stop offset="0" stop-color="${shade(skin, 0.1)}"/>
      <stop offset="1" stop-color="${skinDark}"/>
    </radialGradient>
    <linearGradient id="${gid}c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${shade(color, 0.12)}"/>
      <stop offset="1" stop-color="${shade(color, -0.18)}"/>
    </linearGradient>
  </defs>

  ${hairBack(look, sw)}

  <g>
    ${arms(sw, shade(color, -0.2), skin)}
    <path d="${torsoPath(sw)}" fill="url(#${gid}c)"/>
    <path d="M${CX - 13} ${CHIN - 12} h26 v30 h-26z" fill="${skin}"/>
    <path d="M${CX - 13} ${CHIN - 12} h26 v13 q-13 8 -26 0z" fill="${skinDark}" opacity="0.55"/>
    ${garmentDetail(garment, color, look.accent, skin, sw)}
  </g>

  <g transform="rotate(${f.tilt} ${CX} ${CHIN})">
    <clipPath id="${gid}f"><path d="${facePath}"/></clipPath>
    <path d="${facePath}" fill="url(#${gid}s)"/>
    <ellipse cx="${CX - rx + 1}" cy="${EY + 2}" rx="5" ry="8" fill="${shade(skin, -0.06)}"/>
    <ellipse cx="${CX + rx - 1}" cy="${EY + 2}" rx="5" ry="8" fill="${shade(skin, -0.06)}"/>
    <g clip-path="url(#${gid}f)">
      <ellipse cx="${CX}" cy="${EY - 34}" rx="${rx + 6}" ry="20" fill="${skinDark}" opacity="0.3"/>
      <ellipse cx="${CX}" cy="${CHIN + 16}" rx="${geo.cheek + 6}" ry="12" fill="${skinDark}" opacity="0.22"/>
    </g>
    ${sideLocks(look, rx)}
    ${hairCap(look, rx)}
    ${bangs(look.bangs, look, rx)}
    ${brows(f, shade(look.hair, -0.25))}
    ${eyes(f, look.eyes, irisOf(look))}
    <path d="M${CX - 3} ${EY + 19} q3.5 3.5 7 0" stroke="${shade(skin, -0.32)}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.75"/>
    ${blush}
    ${mouth(f)}
    ${accessory(look.accessory, look, rx)}
    ${sweat}
    ${tear}
  </g>

  ${prop(look.propArt, look, sw)}
</svg>`;
}

/** data URI 로 변환 (img src 에 바로 쓸 수 있다) */
export function portraitDataUri(opts: PortraitOptions): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(portraitSvg(opts))}`;
}
