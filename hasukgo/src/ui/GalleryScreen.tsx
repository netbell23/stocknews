/** 도감 — 프로필 / 해금 CG / 대사 모음 */
import { useState } from 'react';
import { EXPRESSION_LABEL, portraitDataUri } from '../art/character';
import { TENANTS } from '../data/tenants';
import type { LineSetKey, Tenant } from '../data/types';
import { EXPRESSIONS } from '../scenario/types';
import type { SaveData } from '../save/storage';
import { Portrait, SEASON_LABEL } from './parts';

const LINE_LABEL: Array<[LineSetKey, string]> = [
  ['matchStart', '승부 시작'],
  ['go', '고'],
  ['stop', '스톱'],
  ['ppeok', '뻑'],
  ['sseulVictim', '쓸 당함'],
  ['win', '승리'],
  ['lose', '패배'],
  ['affection', '호감 이벤트'],
];

export default function GalleryScreen({ data, onBack }: { data: SaveData; onBack: () => void }) {
  const [tab, setTab] = useState<'profile' | 'cg' | 'lines'>('profile');
  const [sel, setSel] = useState<Tenant>(TENANTS[0]);
  const prog = data.tenants[sel.id];
  const met = (prog?.clearedStage ?? 0) > 0 || (prog?.wins ?? 0) > 0;

  return (
    <div className="screen" style={{ background: 'var(--wood-dark)' }}>
      <div className="layer">
        <div className="topbar">
          <button className="iconbtn" onClick={onBack} aria-label="뒤로">
            ←
          </button>
          <h1>도감</h1>
        </div>

        <div className="tabs">
          <button className={tab === 'profile' ? 'active' : ''} onClick={() => setTab('profile')}>
            프로필
          </button>
          <button className={tab === 'cg' ? 'active' : ''} onClick={() => setTab('cg')}>
            CG
          </button>
          <button className={tab === 'lines' ? 'active' : ''} onClick={() => setTab('lines')}>
            대사
          </button>
        </div>

        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '8px 12px' }}>
          {TENANTS.map((t) => (
            <button
              key={t.id}
              className="btn"
              style={{
                padding: '6px 10px',
                fontSize: 12,
                flex: '0 0 auto',
                filter: sel.id === t.id ? 'none' : 'brightness(0.7)',
              }}
              onClick={() => setSel(t)}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="panel">
          {tab === 'profile' && (
            <>
              <div className="section" style={{ display: 'flex', gap: 12 }}>
                <Portrait tenant={sel} expression="normal" outfit={0} style={{ width: 96 }} />
                <div style={{ flex: 1, fontSize: 13, lineHeight: 1.7 }}>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>
                    {sel.name} <small style={{ fontSize: 12 }}>“{sel.nickname}”</small>
                  </div>
                  <div style={{ color: 'var(--paper-dim)' }}>
                    {sel.age}세 · {sel.job}
                    <br />
                    {sel.room} · {SEASON_LABEL[sel.season]}
                    <br />
                    {sel.personality.join(' / ')}
                  </div>
                </div>
              </div>

              <div className="section">
                <h3>이 집에 온 이유</h3>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--paper)' }}>{sel.backstory}</div>
              </div>

              <div className="section">
                <h3>맞고 스타일</h3>
                <div style={{ fontSize: 13, lineHeight: 1.6 }}>{sel.styleLabel}</div>
                <div className="row">
                  <span>전적</span>
                  <span>
                    {prog?.wins ?? 0}승 {prog?.losses ?? 0}패
                  </span>
                </div>
                <div className="row">
                  <span>호감도</span>
                  <span>{prog?.affection ?? 0} / 100</span>
                </div>
                <div className="row">
                  <span>클리어 단계</span>
                  <span>{prog?.clearedStage ?? 0} / 10</span>
                </div>
              </div>

              <div className="section">
                <h3>표정 {EXPRESSIONS.length}종</h3>
                <div className="expr-grid">
                  {EXPRESSIONS.map((e) => (
                    <figure key={e}>
                      <img src={portraitDataUri({ tenant: sel, expression: e, outfit: 0 })} alt={e} />
                      <figcaption>{EXPRESSION_LABEL[e]}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="section">
                <h3>의상 3종</h3>
                <div className="expr-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  {([0, 1, 2] as const).map((o) => (
                    <figure key={o}>
                      <img src={portraitDataUri({ tenant: sel, expression: 'smile', outfit: o })} alt={`의상 ${o}`} />
                      <figcaption>{['평상복', '외출복', '특별 이벤트복'][o]}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </>
          )}

          {tab === 'cg' && (
            <div className="section">
              <h3>해금 CG</h3>
              <div className="cg-grid">
                {TENANTS.map((t) => {
                  const cg = `${t.id}_ending`;
                  const on = data.unlockedCG.includes(cg);
                  return (
                    <div key={t.id} className={`cg-cell ${on ? 'unlocked' : ''}`}>
                      {on ? (
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 13 }}>{t.name}</div>
                          <div style={{ fontSize: 10, opacity: 0.75, marginTop: 4 }}>
                            {t.events[9].title}
                          </div>
                        </div>
                      ) : (
                        <span>🔒 10단계 클리어</span>
                      )}
                    </div>
                  );
                })}
                <div className={`cg-cell ${data.unlockedCG.includes('ending_group') ? 'unlocked' : ''}`}>
                  {data.unlockedCG.includes('ending_group') ? (
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 13 }}>마루의 단체 사진</div>
                      <div style={{ fontSize: 10, opacity: 0.75, marginTop: 4 }}>히든 엔딩</div>
                    </div>
                  ) : (
                    <span>🔒 전원 10단계</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {tab === 'lines' && (
            <>
              {!met && (
                <div className="empty">
                  {sel.name}와(과) 아직 승부한 적이 없습니다.
                  <br />한 판 이상 치르면 대사가 열립니다.
                </div>
              )}
              {met &&
                LINE_LABEL.map(([key, label]) => (
                  <div className="section" key={key}>
                    <h3>{label}</h3>
                    {(['low', 'mid', 'high'] as const).map((tone) => {
                      const unlocked =
                        tone === 'low' ||
                        (tone === 'mid' && (prog?.affection ?? 0) > 30) ||
                        (tone === 'high' && (prog?.affection ?? 0) > 70);
                      return (
                        <div key={tone} style={{ marginBottom: 8 }}>
                          <div style={{ fontSize: 11, color: 'var(--lamp-dim)', marginBottom: 3 }}>
                            {{ low: '호감 0~30', mid: '호감 31~70', high: '호감 71~100' }[tone]}
                          </div>
                          {unlocked ? (
                            sel.lines[key][tone].map((l, i) => (
                              <div key={i} style={{ fontSize: 12.5, lineHeight: 1.6, opacity: 0.9 }}>
                                · {l}
                              </div>
                            ))
                          ) : (
                            <div style={{ fontSize: 12, color: 'var(--paper-dim)' }}>🔒 호감도가 더 필요합니다</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
