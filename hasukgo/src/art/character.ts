/**
 * 하숙생 입상(立像) SVG 생성기 — 플레이스홀더.
 *
 * 원화로 교체하려면: public/art/char/{tenantId}_{outfit}_{expression}.png 를 넣고
 * src/ui/Portrait.tsx 의 IMAGE_FIRST 를 true 로 바꾸면 파일이 우선 사용된다.
 * (파일이 없으면 자동으로 이 SVG 로 되돌아간다)
 */
import type { Tenant } from '../data/types';
import type { Expression } from '../scenario/types';

export interface PortraitOptions {
  tenant: Tenant;
  expression: Expression;
  /** 0 평상복 / 1 외출복 / 2 특별 이벤트복 */
  outfit: 0 | 1 | 2;
  width?: number;
  height?: number;
}

/** 표정별 눈/눈썹/입 모양 파라미터 */
interface FaceShape {
  eye: 'open' | 'closed' | 'wide' | 'half' | 'arc';
  brow: number; // 눈썹 y 오프셋 (+면 찡그림)
  browTilt: number; // 안쪽 끝 기울기
  mouth: 'smile' | 'flat' | 'pout' | 'open' | 'small' | 'wide' | 'wave';
  blush: number; // 0~1
  sweat: boolean;
  tear: boolean;
}

const FACES: Record<Expression, FaceShape> = {
  normal: { eye: 'open', brow: 0, browTilt: 0, mouth: 'flat', blush: 0, sweat: false, tear: false },
  smile: { eye: 'arc', brow: -1, browTilt: -1, mouth: 'smile', blush: 0.25, sweat: false, tear: false },
  sulk: { eye: 'half', brow: 2, browTilt: 3, mouth: 'pout', blush: 0.15, sweat: false, tear: false },
  surprise: { eye: 'wide', brow: -4, browTilt: -2, mouth: 'open', blush: 0, sweat: true, tear: false },
  shy: { eye: 'closed', brow: -2, browTilt: 2, mouth: 'small', blush: 0.9, sweat: false, tear: false },
  serious: { eye: 'open', brow: 2, browTilt: -3, mouth: 'flat', blush: 0, sweat: false, tear: false },
  win: { eye: 'arc', brow: -2, browTilt: -2, mouth: 'wide', blush: 0.35, sweat: false, tear: false },
  lose: { eye: 'half', brow: 3, browTilt: 4, mouth: 'wave', blush: 0.1, sweat: true, tear: true },
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

function eyes(f: FaceShape, accent: string): string {
  const L = 88;
  const R = 132;
  const y = 104;
  const lid = '#2a2320';
  switch (f.eye) {
    case 'closed':
      return `
        <path d="M${L - 9} ${y} q9 7 18 0" stroke="${lid}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M${R - 9} ${y} q9 7 18 0" stroke="${lid}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    case 'arc':
      return `
        <path d="M${L - 9} ${y + 3} q9 -9 18 0" stroke="${lid}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M${R - 9} ${y + 3} q9 -9 18 0" stroke="${lid}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    case 'wide':
      return `
        <ellipse cx="${L}" cy="${y}" rx="8" ry="10" fill="#fff"/>
        <ellipse cx="${R}" cy="${y}" rx="8" ry="10" fill="#fff"/>
        <circle cx="${L}" cy="${y}" r="5.5" fill="${lid}"/>
        <circle cx="${R}" cy="${y}" r="5.5" fill="${lid}"/>
        <circle cx="${L - 2}" cy="${y - 2}" r="1.8" fill="#fff"/>
        <circle cx="${R - 2}" cy="${y - 2}" r="1.8" fill="#fff"/>`;
    case 'half':
      return `
        <ellipse cx="${L}" cy="${y}" rx="7.5" ry="5" fill="#fff"/>
        <ellipse cx="${R}" cy="${y}" rx="7.5" ry="5" fill="#fff"/>
        <circle cx="${L}" cy="${y + 1}" r="4.5" fill="${lid}"/>
        <circle cx="${R}" cy="${y + 1}" r="4.5" fill="${lid}"/>
        <path d="M${L - 8} ${y - 3} h16" stroke="${lid}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M${R - 8} ${y - 3} h16" stroke="${lid}" stroke-width="2.5" stroke-linecap="round"/>`;
    default:
      return `
        <ellipse cx="${L}" cy="${y}" rx="7.5" ry="9" fill="#fff"/>
        <ellipse cx="${R}" cy="${y}" rx="7.5" ry="9" fill="#fff"/>
        <circle cx="${L}" cy="${y}" r="5" fill="${accent}"/>
        <circle cx="${R}" cy="${y}" r="5" fill="${accent}"/>
        <circle cx="${L}" cy="${y}" r="2.4" fill="${lid}"/>
        <circle cx="${R}" cy="${y}" r="2.4" fill="${lid}"/>
        <circle cx="${L - 2}" cy="${y - 3}" r="1.6" fill="#fff"/>
        <circle cx="${R - 2}" cy="${y - 3}" r="1.6" fill="#fff"/>`;
  }
}

function mouth(f: FaceShape): string {
  const x = 110;
  const y = 126;
  const s = '#8a4a46';
  switch (f.mouth) {
    case 'smile':
      return `<path d="M${x - 8} ${y} q8 7 16 0" stroke="${s}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
    case 'wide':
      return `<path d="M${x - 10} ${y - 2} q10 12 20 0 q-10 5 -20 0z" fill="${s}"/>`;
    case 'pout':
      return `<path d="M${x - 7} ${y + 2} q7 -6 14 0" stroke="${s}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
    case 'open':
      return `<ellipse cx="${x}" cy="${y + 1}" rx="5" ry="7" fill="${s}"/>`;
    case 'small':
      return `<path d="M${x - 4} ${y} q4 4 8 0" stroke="${s}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
    case 'wave':
      return `<path d="M${x - 9} ${y} q4.5 -5 9 0 q4.5 5 9 0" stroke="${s}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
    default:
      return `<path d="M${x - 6} ${y} h12" stroke="${s}" stroke-width="2.4" stroke-linecap="round"/>`;
  }
}

function brows(f: FaceShape): string {
  const c = '#3a2b22';
  const y = 88 + f.brow;
  const t = f.browTilt;
  return `
    <path d="M79 ${y + t} q9 -4 18 ${-t * 0.5}" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M141 ${y + t} q-9 -4 -18 ${-t * 0.5}" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
}

function hairBack(t: Tenant): string {
  const h = t.look.hair;
  switch (t.look.hairStyle) {
    case 'long':
      return `<path d="M62 100 q-6 90 4 150 h108 q10 -60 4 -150z" fill="${h}" opacity="0.95"/>`;
    case 'wave':
      return `<path d="M62 100 q-10 70 2 120 q10 -12 16 4 q10 -14 18 2 h36 q8 -16 18 -2 q6 -16 16 -4 q12 -50 2 -120z" fill="${h}" opacity="0.95"/>`;
    case 'braid':
      return `<path d="M64 100 q-6 60 0 100 h92 q6 -40 0 -100z" fill="${h}" opacity="0.95"/>
              <path d="M148 150 q14 30 8 70" stroke="${h}" stroke-width="13" fill="none" stroke-linecap="round"/>`;
    case 'ponytail':
      return `<path d="M66 100 q-4 40 0 70 h88 q4 -30 0 -70z" fill="${h}" opacity="0.95"/>
              <path d="M150 105 q28 30 16 90" stroke="${h}" stroke-width="15" fill="none" stroke-linecap="round"/>`;
    case 'bun':
      return `<path d="M68 100 q-2 36 0 60 h84 q2 -24 0 -60z" fill="${h}" opacity="0.95"/>
              <circle cx="110" cy="52" r="17" fill="${h}"/>`;
    case 'bob':
      return `<path d="M64 98 q-4 46 2 74 h88 q6 -28 2 -74z" fill="${h}" opacity="0.95"/>`;
    default:
      return `<path d="M70 96 q-2 30 0 46 h80 q2 -16 0 -46z" fill="${h}" opacity="0.95"/>`;
  }
}

function hairFront(t: Tenant): string {
  const h = t.look.hair;
  return `
    <path d="M68 92 q6 -40 42 -40 q36 0 42 40 q-14 -20 -42 -20 q-28 0 -42 20z" fill="${h}"/>
    <path d="M74 88 q14 -16 30 -14 q-16 6 -22 22z" fill="#ffffff" opacity="0.14"/>`;
}

function body(t: Tenant, outfit: 0 | 1 | 2): string {
  const c = t.look.outfits[outfit];
  const accent = t.look.accent;
  // 의상마다 실루엣을 조금씩 다르게 (평상복/외출복/특별복)
  const collar =
    outfit === 2
      ? `<path d="M96 160 l14 22 l14 -22 l10 6 l-24 30 l-24 -30z" fill="#ffffff" opacity="0.85"/>`
      : outfit === 1
        ? `<path d="M96 160 l14 16 l14 -16 v14 h-28z" fill="#ffffff" opacity="0.7"/>`
        : `<path d="M98 160 h24 v10 h-24z" fill="#ffffff" opacity="0.5"/>`;
  const skirt =
    outfit === 2
      ? `<path d="M70 250 q40 26 80 0 l16 70 h-112z" fill="${c}"/>`
      : `<path d="M74 250 h72 l10 70 h-92z" fill="${c}"/>`;
  return `
    <path d="M84 158 q26 -12 52 0 l16 14 q10 10 8 26 l-6 56 h-88 l-6 -56 q-2 -16 8 -26z" fill="${c}"/>
    ${collar}
    ${skirt}
    <rect x="74" y="246" width="72" height="8" rx="4" fill="${accent}"/>
    <path d="M70 176 q-12 34 -8 66" stroke="${c}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <path d="M150 176 q12 34 8 66" stroke="${c}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <circle cx="63" cy="246" r="9" fill="${t.look.skin}"/>
    <circle cx="157" cy="246" r="9" fill="${t.look.skin}"/>`;
}

/** 하숙생 입상 SVG 문자열 */
export function portraitSvg(opts: PortraitOptions): string {
  const { tenant, expression, outfit } = opts;
  const w = opts.width ?? 220;
  const h = opts.height ?? 330;
  const f = FACES[expression];
  const skin = tenant.look.skin;
  const blush =
    f.blush > 0
      ? `<ellipse cx="82" cy="117" rx="11" ry="6" fill="#ff8a9a" opacity="${(f.blush * 0.55).toFixed(2)}"/>
         <ellipse cx="138" cy="117" rx="11" ry="6" fill="#ff8a9a" opacity="${(f.blush * 0.55).toFixed(2)}"/>`
      : '';
  const sweat = f.sweat
    ? `<path d="M154 78 q7 10 0 15 q-7 -5 0 -15z" fill="#8ecbff" opacity="0.9"/>`
    : '';
  const tear = f.tear
    ? `<path d="M88 112 q-2 12 1 18" stroke="#8ecbff" stroke-width="3" fill="none" stroke-linecap="round"/>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 330" width="${w}" height="${h}" role="img" aria-label="${tenant.name} ${EXPRESSION_LABEL[expression]}">
  ${hairBack(tenant)}
  ${body(tenant, outfit)}
  <path d="M100 140 h20 v26 h-20z" fill="${skin}"/>
  <ellipse cx="110" cy="104" rx="44" ry="50" fill="${skin}"/>
  <ellipse cx="66" cy="108" rx="6" ry="9" fill="${skin}"/>
  <ellipse cx="154" cy="108" rx="6" ry="9" fill="${skin}"/>
  ${hairFront(tenant)}
  ${brows(f)}
  ${eyes(f, tenant.look.accent)}
  ${blush}
  ${mouth(f)}
  ${sweat}
  ${tear}
</svg>`;
}

/** data URI 로 변환 (img src 에 바로 쓸 수 있다) */
export function portraitDataUri(opts: PortraitOptions): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(portraitSvg(opts))}`;
}
