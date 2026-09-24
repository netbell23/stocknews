/** 화면 곳곳에서 재사용하는 작은 조각들 */
import type React from 'react';
import { backgroundDataUri } from '../art/background';
import { cardBackDataUri, cardDataUri } from '../art/cards';
import { portraitDataUri } from '../art/character';
import type { Card } from '../engine/types';
import type { Tenant } from '../data/types';
import type { BackgroundId, Expression, TimeOfDay } from '../scenario/types';

/**
 * 원화가 준비되면 true 로 바꾼다.
 * public/art/char/{id}_{outfit}_{expression}.png 가 있으면 그걸 쓰고, 없으면 SVG 로 되돌아간다.
 */
const IMAGE_FIRST = false;

/**
 * 지금 장착한 화패 스킨. 카드는 화면 곳곳에서 그려지는데 스킨은 전역 설정 하나뿐이라,
 * Context 를 얹는 대신 App 이 여기에 꽂아준다.
 */
let currentSkin = 'classic';
export function setCardSkin(id: string): void {
  currentSkin = id;
}

/** 지금 스킨으로 그린 화패 이미지 주소. 먹은 패 더미처럼 <img> 를 직접 쓸 때 사용한다. */
export function cardSrcNow(card: Card): string {
  return cardDataUri(card, { skin: currentSkin });
}

export function Portrait({
  tenant,
  expression = 'normal',
  outfit = 0,
  className,
  style,
}: {
  tenant: Tenant;
  expression?: Expression;
  outfit?: 0 | 1 | 2;
  className?: string;
  style?: React.CSSProperties;
}) {
  const svg = portraitDataUri({ tenant, expression, outfit });
  const src = IMAGE_FIRST ? `art/char/${tenant.id}_${outfit}_${expression}.png` : svg;
  return (
    <img
      className={className}
      style={style}
      src={src}
      alt={`${tenant.name} (${expression})`}
      onError={(e) => {
        const el = e.currentTarget;
        if (el.src !== svg) el.src = svg;
      }}
      draggable={false}
    />
  );
}

export function Background({ bg, time }: { bg: BackgroundId; time: TimeOfDay }) {
  return <div className="bg-layer" style={{ backgroundImage: `url("${backgroundDataUri(bg, time)}")` }} />;
}

export function CardView({
  card,
  small,
  selectable,
  chosen,
  zone,
  onClick,
}: {
  card: Card;
  small?: boolean;
  selectable?: boolean;
  chosen?: boolean;
  /** 연출용. useCardFlight 가 이 값으로 날아가는 타이밍을 정한다 */
  zone?: 'hand' | 'field' | 'pile';
  onClick?: () => void;
}) {
  const cls = ['card', small ? 'sm' : '', selectable ? 'selectable' : '', chosen ? 'chosen' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <img
      className={cls}
      data-cid={card.id}
      data-zone={zone ?? 'field'}
      src={cardDataUri(card, { skin: currentSkin })}
      alt={card.name}
      onClick={selectable ? onClick : undefined}
      draggable={false}
    />
  );
}

export function CardBack({ small }: { small?: boolean }) {
  return (
    <img
      className={`card ${small ? 'sm' : ''}`}
      src={cardBackDataUri({ skin: currentSkin })}
      alt="뒷면"
      draggable={false}
    />
  );
}

export function Meter({ value, max, kind }: { value: number; max: number; kind?: 'stage' }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={`meter ${kind ?? ''}`}>
      <i style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Switch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button className={`switch ${on ? 'on' : ''}`} onClick={onToggle} aria-pressed={on}>
      <i />
    </button>
  );
}

/** 시간대: 실제 시계를 따라 하숙집 전경이 바뀐다 */
export function currentTimeOfDay(): TimeOfDay {
  const h = new Date().getHours();
  if (h < 11) return 'morning';
  if (h < 18) return 'evening';
  return 'night';
}

export const SEASON_LABEL: Record<string, string> = {
  spring: '봄',
  summer: '여름',
  autumn: '가을',
  winter: '겨울',
};
