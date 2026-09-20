/** 하숙집 홈 + 하숙생 선택 */
import { isUnlocked, minStake, rewardFor, TENANTS, unlockHint } from '../data/tenants';
import type { Tenant } from '../data/types';
import type { SaveData } from '../save/storage';
import { ALLOWANCE, clearedStages, isStuck } from '../save/storage';
import { Background, currentTimeOfDay, Meter, Portrait, SEASON_LABEL } from './parts';

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

  return (
    <div className="screen">
      <Background bg="maru" time={time} />
      <div className="layer">
        <div className="topbar">
          <h1>하숙집 마루</h1>
          <span className="points">{data.points.toLocaleString()} P</span>
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
              어머니께 용돈 받기 (+{ALLOWANCE}P)
            </button>
          </div>
        )}

        {allClearedFlag && (
          <div className="hint-box" style={{ cursor: 'pointer' }} onClick={onHidden}>
            전원 10단계 클리어! <strong>마루의 단체 사진</strong>을 보러 가기 ▸
          </div>
        )}

        <div className="tenant-list">
          {TENANTS.map((t) => {
            const p = data.tenants[t.id] ?? { affection: 0, clearedStage: 0, wins: 0, losses: 0, dating: false };
            const open = isUnlocked(t, cleared);
            const nextStage = Math.min(10, p.clearedStage + 1);
            const done = p.clearedStage >= 10;
            const need = minStake(t);
            const affordable = data.points >= need;
            return (
              <button
                key={t.id}
                className={`tenant-card ${open ? '' : 'locked'}`}
                onClick={() => open && onPick(t)}
                disabled={!open}
              >
                <Portrait tenant={t} expression={done ? 'smile' : 'normal'} outfit={done ? 2 : 0} />
                <div className="tenant-meta">
                  <div className="tenant-name">
                    {t.name}
                    <small>
                      {t.nickname} · {t.age}세 · {t.room}
                    </small>
                    <span className="badge season">{SEASON_LABEL[t.season]}</span>
                    {p.dating && <span className="badge">연애중</span>}
                  </div>
                  <div className="tenant-style">{t.styleLabel}</div>
                  {open ? (
                    <>
                      <div className="meter-row">
                        <span style={{ width: 30 }}>호감</span>
                        <Meter value={p.affection} max={100} />
                        <span style={{ width: 28, textAlign: 'right' }}>{p.affection}</span>
                      </div>
                      <div className="meter-row">
                        <span style={{ width: 30 }}>단계</span>
                        <Meter value={p.clearedStage} max={10} kind="stage" />
                        <span style={{ width: 28, textAlign: 'right' }}>{p.clearedStage}/10</span>
                      </div>
                      <div style={{ fontSize: 10.5, color: 'var(--paper-dim)', marginTop: 4 }}>
                        {done ? (
                          <>모든 단계 클리어 · 커플 모드로 다시 승부</>
                        ) : (
                          <>
                            {nextStage}단계 · 점당 <b style={{ color: 'var(--lamp)' }}>{t.rate}P</b> ·
                            클리어 보너스 {rewardFor(t, nextStage)}P
                            <br />
                            <span style={{ color: affordable ? 'var(--paper-dim)' : 'var(--accent)' }}>
                              {affordable ? `최소 ${need.toLocaleString()}P 필요` : `${need.toLocaleString()}P 부족`}
                            </span>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <div style={{ fontSize: 11, color: 'var(--paper-dim)' }}>🔒 {unlockHint(t)}</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
