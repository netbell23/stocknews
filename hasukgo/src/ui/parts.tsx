/** 화면 곳곳에서 재사용하는 작은 조각들 */
import type React from 'react';
import { backgroundDataUri } from '../art/background';
import { cardBackDataUri, cardDataUri } from '../art/cards';
import { charArtSrc, type Shot } from '../art/artFiles';
import { portraitDataUri } from '../art/character';
import type { Card } from '../engine/types';
import type { Tenant } from '../data/types';
import type { BackgroundId, Expression, TimeOfDay } from '../scenario/types';



/**
 * 지금 장착한 화패 스킨. 카드는 화면 곳곳에서 그려지는데 스킨은 전역 설정 하나뿐이라,
 * Context 를 얹는 대신 App 이 여기에 꽂아준다.
 */
let currentSkin = 'classic';
export function setCardSkin(id: string): void {
  currentSkin = id;
}

/**
 * 게임 로고. 금색 「하숙생」 + 붉은 「맞고」에 두꺼운 먹테와 입체 그림자.
 * 글자마다 ::before 로 테두리 층을 깔고 그 위에 그라디언트 글자를 얹는다 —
 * background-clip:text 와 text-stroke 를 한 글자에 같이 걸면 테두리가 먹히기 때문이다.
 */
export function GameLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`glogo ${className}`}>
      <svg className="glogo-house" viewBox="0 0 40 34" aria-hidden="true">
        <path d="M20 2 L38 15 L34 15 L34 32 L6 32 L6 15 L2 15 Z" fill="#f2c341" stroke="#3a1206" strokeWidth="2.6" strokeLinejoin="round"/>
        <rect x="14" y="19" width="12" height="13" fill="#b8321f" stroke="#3a1206" strokeWidth="2"/>
      </svg>
      <span className="glogo-a" data-text="하숙생">하숙생</span>
      <span className="glogo-b" data-text="맞고">맞고</span>
      <svg className="glogo-seal" viewBox="0 0 26 26" aria-hidden="true">
        <rect x="1.5" y="1.5" width="23" height="23" rx="3" fill="#c9301f" stroke="#3a1206" strokeWidth="2.4"/>
        <text x="13" y="19" fontSize="15" textAnchor="middle" fill="#ffe9c0" fontFamily="serif" fontWeight="bold">光</text>
      </svg>
    </div>
  );
}

/** 지금 스킨으로 그린 화패 이미지 주소. 먹은 패 더미처럼 <img> 를 직접 쓸 때 사용한다. */
export function cardSrcNow(card: Card): string {
  return cardDataUri(card, { skin: currentSkin });
}

/**
 * 하숙생 그림 한 장.
 * 원화가 들어와 있으면 원화를, 아니면 코드가 그리는 SVG 를 쓴다.
 * 원화 파일이 깨져 있어도 SVG 로 한 번 더 되돌아가므로 빈 칸이 남지 않는다.
 */
export function Portrait({
  tenant,
  expression = 'normal',
  outfit = 0,
  shot = 'full',
  className,
  style,
}: {
  tenant: Tenant;
  expression?: Expression;
  outfit?: 0 | 1 | 2;
  /** 얼굴만 쓸 자리인지 (하숙생 줄의 동그란 칩·상대 자리) */
  shot?: Shot;
  className?: string;
  style?: React.CSSProperties;
}) {
  const svg = portraitDataUri({ tenant, expression, outfit });
  const art = charArtSrc(tenant.id, shot, expression);
  return (
    <img
      className={`${className ?? ''} ${art ? 'is-photo' : 'is-drawn'}`.trim()}
      style={style}
      src={art ?? svg}
      alt={`${tenant.name} (${expression})`}
      onError={(e) => {
        const el = e.currentTarget;
        if (el.src !== svg) el.src = svg;
      }}
      draggable={false}
    />
  );
}

/**
 * 원화에서 뽑아낸 배경.
 *
 * 인물 사진은 저마다 제 방을 달고 온다. 그런데 뒤에 코드로 그린 마루를 깔면
 * 따뜻한 조명의 사진 위에 서늘한 밤 그림이 겹쳐 두 세계가 따로 논다.
 * 그래서 그 인물의 사진을 흐리게 확대해 배경으로 쓴다 —
 * 말 그대로 같은 방이라 색이 어긋날 수가 없다.
 */
export function PhotoBackdrop({ src, dim = 0.55 }: { src: string; dim?: number }) {
  return (
    <div className="photo-bed" style={{ backgroundImage: `url("${src}")`, ['--bed-dim' as string]: dim }} />
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
  hidden,
  onClick,
}: {
  card: Card;
  small?: boolean;
  selectable?: boolean;
  chosen?: boolean;
  /** 연출로 따로 띄워둔 동안 원본은 자리만 지킨다 */
  hidden?: boolean;
  /** 연출용. useCardFlight 가 이 값으로 날아가는 타이밍을 정한다 */
  zone?: 'hand' | 'field' | 'pile-me' | 'pile-opp';
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
      data-month={card.month}
      style={hidden ? { visibility: 'hidden' } : undefined}
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
