/** 하숙집 홈 + 하숙생 선택 */
import { useMemo, useState } from 'react';
import { isUnlocked, minStake, rewardFor, TENANTS, toneOf, unlockHint } from '../data/tenants';
import type { Tenant } from '../data/types';
import type { SaveData } from '../save/storage';
import { ALLOWANCE, clearedStages, isStuck } from '../save/storage';
import { Background, currentTimeOfDay, GameLogo, Meter, Portrait, SEASON_LABEL } from './parts';

const EMPTY = { affection: 0, clearedStage: 0, wins: 0, losses: 0, dating: false };

export default function HomeScreen({
  data,
  onPick,
  onGallery,
  onShop,
  onSettings,
  onHidden,
  onAllowance,
  allClearedFlag,
}: {
  data: SaveData;
  onPick: (t: Tenant) => void;
  onGallery: () => void;
  onShop: () => void;
  onSettings: () => void;
  onHidden: () => void;
  onAllowance: () => void;
  allClearedFlag: boolean;
}) {
  const cleared = clearedStages(data);
  const time = currentTimeOfDay();

  /** 처음 앉을 자리: 아직 10단계가 남은 해금 하숙생 중 첫 사람 */
  const firstPick = useMemo(() => {
    const open = TENANTS.filter((t) => isUnlocked(t, cleared));
    return (open.find((t) => (data.tenants[t.id]?.clearedStage ?? 0) < 10) ?? open[0] ?? TENANTS[0]).id;
    // 홈에 들어올 때 한 번만 고른다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [pickedId, setPickedId] = useState(firstPick);

  const t = TENANTS.find((x) => x.id === pickedId) ?? TENANTS[0];
  const p = data.tenants[t.id] ?? EMPTY;
  const open = isUnlocked(t, cleared);
  const done = p.clearedStage >= 10;
  const nextStage = Math.min(10, p.clearedStage + 1);
  const need = minStake(t);
  const affordable = data.points >= need;
  const tone = toneOf(p.affection);
  /** 인사말은 고른 사람과 호감도가 바뀔 때만 달라진다 */
  const greet = useMemo(() => {
    const lines = t.lines.matchStart[tone];
    return lines[(t.order + p.clearedStage) % lines.length];
  }, [t, tone, p.clearedStage]);

  return (
    <div className="screen">
      <Background bg="maru" time={time} />
      <div className="layer lobby">
        <div className="rail">
          <GameLogo className="rail-logo" />
          <span className="purse">
            <i aria-hidden="true">🪙</i>
            {data.points.toLocaleString()}
          </span>
          <button className="iconbtn" onClick={onShop} aria-label="상점">
            🏮
          </button>
          <button className="iconbtn" onClick={onGallery} aria-label="도감">
            📖
          </button>
          <button className="iconbtn" onClick={onSettings} aria-label="설정">
            ⚙
          </button>
        </div>

        {isStuck(data) && (
          <div className="hint-box">
            포인트가 모자라 승부를 걸 수 없습니다. 포인트는 승부로만 버는 터라 이대로는 진행이 막힙니다.
            <button
              className="btn primary wide"
              style={{ marginTop: 10, fontSize: 14 }}
              onClick={onAllowance}
            >
              할머니 비상금 봉투 찾기 (+{ALLOWANCE}P)
            </button>
          </div>
        )}

        {allClearedFlag && (
          <div className="hint-box" style={{ cursor: 'pointer' }} onClick={onHidden}>
            전원 10단계 클리어! <strong>마루의 단체 사진</strong>을 보러 가기 ▸
          </div>
        )}

        <div className="stage-wrap">
          <div className="bubble" key={t.id}>
            {open ? greet : unlockHint(t)}
          </div>
          <Portrait
            className={`stage-face ${open ? '' : 'locked'}`}
            tenant={t}
            expression={open ? (done ? 'smile' : 'normal') : 'normal'}
            outfit={done ? 2 : 0}
          />
          <div className="plate">
            <div className="plate-name">
              {t.name}
              <span className="badge season">{SEASON_LABEL[t.season]}</span>
              {p.dating && <span className="badge">연애중</span>}
            </div>
            <div className="plate-sub">
              {t.nickname} · {t.age}세 · {t.job} · {t.room}
            </div>
            <div className="plate-style">{t.styleLabel}</div>
            {open ? (
              <>
                <div className="meter-row">
                  <span style={{ width: 30 }}>호감</span>
                  <Meter value={p.affection} max={100} />
                  <span style={{ width: 34, textAlign: 'right' }}>{p.affection}</span>
                </div>
                <div className="meter-row">
                  <span style={{ width: 30 }}>단계</span>
                  <Meter value={p.clearedStage} max={10} kind="stage" />
                  <span style={{ width: 34, textAlign: 'right' }}>{p.clearedStage}/10</span>
                </div>
                <div className="plate-terms">
                  {done ? (
                    <>모든 단계 클리어 · 커플 모드로 다시 승부</>
                  ) : (
                    <>
                      <b>{nextStage}단계</b> · 점당 <b className="lamp">{t.rate}P</b> · 클리어 보너스{' '}
                      <b className="lamp">{rewardFor(t, nextStage)}P</b>
                      <span className={`stake ${affordable ? '' : 'short'}`}>
                        {affordable ? `최소 ${need.toLocaleString()}P 필요` : `${need.toLocaleString()}P 부족`}
                      </span>
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="plate-terms">
                <span className="short">🔒 {unlockHint(t)}</span>
              </div>
            )}
          </div>
        </div>

        <button className="btn gold wide sit" disabled={!open} onClick={() => open && onPick(t)}>
          {done ? '한 판 더 두기' : `${nextStage}단계 · 한 판 두기`}
        </button>

        <div className="roster" role="tablist" aria-label="하숙생">
          {TENANTS.map((x) => {
            const xp = data.tenants[x.id] ?? EMPTY;
            const xopen = isUnlocked(x, cleared);
            return (
              <button
                key={x.id}
                role="tab"
                aria-selected={x.id === pickedId}
                className={`chip ${x.id === pickedId ? 'on' : ''} ${xopen ? '' : 'locked'}`}
                onClick={() => setPickedId(x.id)}
              >
                <span className="chip-face">
                  <Portrait tenant={x} expression="normal" outfit={xp.clearedStage >= 10 ? 2 : 0} />
                  {!xopen && <i className="chip-lock">🔒</i>}
                </span>
                <b>{xopen ? x.name : '???'}</b>
                <small>{xopen ? `${xp.clearedStage}/10` : '잠김'}</small>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
