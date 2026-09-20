/**
 * 상점 품목.
 *
 * 포인트를 쓸 데가 없으면 경제가 성립하지 않는다. 여기가 유일한 소비처다.
 * 게임 진행에 유리해지는 물건은 팔지 않는다 — 승부는 실력으로만 갈려야 하고,
 * 포인트로 유리함을 사면 "판돈"이라는 설정이 무너진다. 그래서 전부 겉모습이다.
 */
import { CARD_SKINS } from '../art/cards';

export type ShopKind = 'cards' | 'theme';

export interface ShopItem {
  id: string;
  kind: ShopKind;
  name: string;
  desc: string;
  price: number;
}

/** 마루 테마 — 화면 전체의 색조 */
export interface MaruTheme {
  id: string;
  name: string;
  vars: Record<string, string>;
}

export const MARU_THEMES: MaruTheme[] = [
  {
    id: 'maru',
    name: '밤의 마루',
    vars: {},
  },
  {
    id: 'daylight',
    name: '툇마루 한낮',
    vars: {
      '--wood-dark': '#6b5640',
      '--wood': '#8a7157',
      '--wood-light': '#a68d6f',
      '--paper': '#fff8ec',
      '--paper-dim': '#e6dbc8',
      '--lamp': '#ffcf6b',
      '--lamp-dim': '#c9a25a',
    },
  },
  {
    id: 'snow',
    name: '첫눈 오는 밤',
    vars: {
      '--wood-dark': '#1b2233',
      '--wood': '#333f57',
      '--wood-light': '#4c5b78',
      '--paper': '#eef4ff',
      '--paper-dim': '#c2cddf',
      '--lamp': '#a8d0ff',
      '--lamp-dim': '#6f8fb8',
      '--accent': '#5c7fd0',
    },
  },
  {
    id: 'lantern',
    name: '등불',
    vars: {
      '--wood-dark': '#2b1508',
      '--wood': '#5c2f12',
      '--wood-light': '#7d4520',
      '--paper': '#ffeccd',
      '--paper-dim': '#dfbf95',
      '--lamp': '#ffb347',
      '--lamp-dim': '#c97a2a',
      '--accent': '#d4552f',
    },
  },
];

export function getTheme(id: string): MaruTheme {
  return MARU_THEMES.find((t) => t.id === id) ?? MARU_THEMES[0];
}

/**
 * 파는 물건. 기본 화패(전통)와 기본 테마(밤의 마루)는 처음부터 갖고 있어 목록에 없다.
 * 가격은 시뮬레이션 기준으로, 100단계를 한 번 돌면 초보가 절반쯤,
 * 숙련자가 거의 전부를 살 수 있게 잡았다.
 */
export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'cards:hanji',
    kind: 'cards',
    name: '한지 화패',
    desc: '누런 한지에 찍어낸 듯한 담백한 패',
    price: 1200,
  },
  {
    id: 'cards:moonlit',
    kind: 'cards',
    name: '달밤 화패',
    desc: '달빛에 담근 푸른 패. 밤에 치기 좋다',
    price: 2200,
  },
  {
    id: 'cards:gilt',
    kind: 'cards',
    name: '금박 화패',
    desc: '어두운 바탕에 금빛. 하숙집에선 과하다는 평',
    price: 3800,
  },
  {
    id: 'theme:daylight',
    kind: 'theme',
    name: '툇마루 한낮',
    desc: '해 드는 대낮의 나무 빛깔로 바꾼다',
    price: 900,
  },
  {
    id: 'theme:snow',
    kind: 'theme',
    name: '첫눈 오는 밤',
    desc: '창밖에 눈이 오는 듯한 푸른 밤',
    price: 1800,
  },
  {
    id: 'theme:lantern',
    kind: 'theme',
    name: '등불',
    desc: '전등 하나만 켜둔 진한 주황빛',
    price: 2800,
  },
];

export const SHOP_TOTAL = SHOP_ITEMS.reduce((a, i) => a + i.price, 0);

/** 품목 id 에서 실제 적용할 값을 뽑는다 ('cards:hanji' -> 'hanji') */
export function valueOf(item: ShopItem): string {
  return item.id.split(':')[1];
}

/** 처음부터 갖고 있는 것 */
export const FREE_CARDS = 'classic';
export const FREE_THEME = 'maru';

export function ownedCardSkins(owned: string[]): string[] {
  return [
    FREE_CARDS,
    ...SHOP_ITEMS.filter((i) => i.kind === 'cards' && owned.includes(i.id)).map(valueOf),
  ];
}

export function ownedThemes(owned: string[]): string[] {
  return [
    FREE_THEME,
    ...SHOP_ITEMS.filter((i) => i.kind === 'theme' && owned.includes(i.id)).map(valueOf),
  ];
}

/** 화패 스킨 id -> 보기 좋은 이름 */
export function cardSkinName(id: string): string {
  return CARD_SKINS.find((s) => s.id === id)?.name ?? id;
}
