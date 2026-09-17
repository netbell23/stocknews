/**
 * 랜딩 페이지 빌드 전용 진입점.
 * 게임이 실제로 쓰는 아트 생성기를 그대로 노출해, 소개 페이지에 별도 이미지 자산 없이
 * 진짜 게임 그림을 박아 넣는다. (스크린샷을 따로 관리하지 않아도 항상 최신이 된다)
 */
export { portraitSvg } from '../src/art/character';
export { cardSvg } from '../src/art/cards';
export { backgroundSvg } from '../src/art/background';
export { baseDeck } from '../src/engine/cards';
export { TENANTS } from '../src/data/tenants';
