/** 상점 — 포인트를 쓰는 유일한 곳 */
import { useState } from 'react';
import { cardDataUri } from '../art/cards';
import { baseDeck } from '../engine/cards';
import {
  cardSkinName,
  getTheme,
  SHOP_ITEMS,
  SHOP_TOTAL,
  valueOf,
  type ShopItem,
} from '../data/shop';
import type { SaveData } from '../save/storage';

/** 미리보기에 쓸 대표 패 세 장 */
const SAMPLE = (() => {
  const deck = baseDeck();
  return ['송학 광', '매조 홍단', '공산 광'].map((n) => deck.find((c) => c.name === n)!);
})();

export default function ShopScreen({
  data,
  onChange,
  onBack,
}: {
  data: SaveData;
  onChange: (next: SaveData) => void;
  onBack: () => void;
}) {
  const [msg, setMsg] = useState<string | null>(null);

  const owns = (item: ShopItem) => data.owned.includes(item.id);
  const equipped = (item: ShopItem) =>
    item.kind === 'cards' ? data.equipped.cards === valueOf(item) : data.equipped.theme === valueOf(item);

  const buy = (item: ShopItem) => {
    if (owns(item)) return;
    if (data.points < item.price) {
      setMsg(`${(item.price - data.points).toLocaleString()}P 가 모자랍니다.`);
      return;
    }
    onChange({
      ...data,
      points: data.points - item.price,
      owned: [...data.owned, item.id],
      equipped:
        item.kind === 'cards'
          ? { ...data.equipped, cards: valueOf(item) }
          : { ...data.equipped, theme: valueOf(item) },
    });
    setMsg(`${item.name} 을(를) 들였습니다. 바로 적용했어요.`);
  };

  const equip = (kind: 'cards' | 'theme', value: string) => {
    onChange({ ...data, equipped: { ...data.equipped, [kind]: value } });
    setMsg(null);
  };

  const ownedCount = SHOP_ITEMS.filter(owns).length;
  const spent = SHOP_ITEMS.filter(owns).reduce((a, i) => a + i.price, 0);

  return (
    <div className="screen" style={{ background: 'var(--wood-dark)' }}>
      <div className="layer">
        <div className="topbar">
          <button className="iconbtn" onClick={onBack} aria-label="뒤로">
            ←
          </button>
          <h1>상점</h1>
          <span className="points">{data.points.toLocaleString()} P</span>
        </div>

        <div className="panel">
          <div className="section">
            <div style={{ fontSize: 12.5, color: 'var(--paper-dim)', lineHeight: 1.65 }}>
              승부에 유리해지는 물건은 팔지 않습니다. 판돈으로 딴 포인트는 겉모습에만 씁니다.
              <br />
              보유 {ownedCount}/{SHOP_ITEMS.length}종 · 쓴 포인트 {spent.toLocaleString()}P /{' '}
              {SHOP_TOTAL.toLocaleString()}P
            </div>
          </div>

          {/* ── 화패 ── */}
          <div className="section">
            <h3>화패</h3>
            <div style={{ display: 'flex', gap: 5, justifyContent: 'center', marginBottom: 12 }}>
              {SAMPLE.map((c) => (
                <img
                  key={c.id}
                  src={cardDataUri(c, { skin: data.equipped.cards })}
                  alt={c.name}
                  style={{ width: 54, borderRadius: 5, boxShadow: '0 3px 8px rgba(0,0,0,.5)' }}
                />
              ))}
            </div>
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--lamp)', marginBottom: 10 }}>
              지금: {cardSkinName(data.equipped.cards)}
            </div>

            {SHOP_ITEMS.filter((i) => i.kind === 'cards').map((item) => (
              <Row
                key={item.id}
                item={item}
                owned={owns(item)}
                equipped={equipped(item)}
                points={data.points}
                onBuy={() => buy(item)}
                onEquip={() => equip('cards', valueOf(item))}
                preview={
                  <img
                    src={cardDataUri(SAMPLE[0], { skin: valueOf(item) })}
                    alt=""
                    style={{ width: 38, borderRadius: 4 }}
                  />
                }
              />
            ))}
            {data.equipped.cards !== 'classic' && (
              <button
                className="btn ghost wide"
                style={{ marginTop: 8, fontSize: 13 }}
                onClick={() => equip('cards', 'classic')}
              >
                기본 화패(전통)로 되돌리기
              </button>
            )}
          </div>

          {/* ── 마루 테마 ── */}
          <div className="section">
            <h3>마루 테마</h3>
            <div style={{ fontSize: 12, color: 'var(--lamp)', marginBottom: 10 }}>
              지금: {getTheme(data.equipped.theme).name}
            </div>
            {SHOP_ITEMS.filter((i) => i.kind === 'theme').map((item) => (
              <Row
                key={item.id}
                item={item}
                owned={owns(item)}
                equipped={equipped(item)}
                points={data.points}
                onBuy={() => buy(item)}
                onEquip={() => equip('theme', valueOf(item))}
                preview={<ThemeChip id={valueOf(item)} />}
              />
            ))}
            {data.equipped.theme !== 'maru' && (
              <button
                className="btn ghost wide"
                style={{ marginTop: 8, fontSize: 13 }}
                onClick={() => equip('theme', 'maru')}
              >
                기본 테마(밤의 마루)로 되돌리기
              </button>
            )}
          </div>

          {msg && (
            <div className="hint-box" style={{ margin: '0 0 14px' }}>
              {msg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ThemeChip({ id }: { id: string }) {
  const t = getTheme(id);
  const bg = t.vars['--wood-dark'] ?? '#2a1f18';
  const fg = t.vars['--lamp'] ?? '#ffd98a';
  const mid = t.vars['--wood'] ?? '#4a3628';
  return (
    <div
      style={{
        width: 38,
        height: 38,
        borderRadius: 8,
        background: `linear-gradient(140deg, ${bg}, ${mid})`,
        border: `2px solid ${fg}`,
        flex: '0 0 auto',
      }}
    />
  );
}

function Row({
  item,
  owned,
  equipped,
  points,
  onBuy,
  onEquip,
  preview,
}: {
  item: ShopItem;
  owned: boolean;
  equipped: boolean;
  points: number;
  onBuy: () => void;
  onEquip: () => void;
  preview: React.ReactNode;
}) {
  const affordable = points >= item.price;
  return (
    <div className="row" style={{ alignItems: 'center', gap: 10 }}>
      {preview}
      <div style={{ flex: 1, minWidth: 0 }}>
        {item.name}
        <small>{item.desc}</small>
      </div>
      {owned ? (
        equipped ? (
          <span style={{ fontSize: 12, color: 'var(--ok)', fontWeight: 700, flex: '0 0 auto' }}>
            사용 중
          </span>
        ) : (
          <button className="btn" style={{ padding: '7px 12px', fontSize: 12.5 }} onClick={onEquip}>
            적용
          </button>
        )
      ) : (
        <button
          className={`btn ${affordable ? 'primary' : ''}`}
          style={{ padding: '7px 12px', fontSize: 12.5, flex: '0 0 auto' }}
          onClick={onBuy}
          disabled={!affordable}
        >
          {item.price.toLocaleString()}P
        </button>
      )}
    </div>
  );
}
