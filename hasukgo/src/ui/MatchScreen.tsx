/** 대전 화면 + 결과 연출 */
import { useEffect, useMemo, useState } from 'react';
import { MONTH_NAMES } from '../engine/cards';
import type { Card, PlayerId, RuleOptions, Settlement } from '../engine/types';
import type { PlayerProfile } from '../ai/ai';
import type { Tenant } from '../data/types';
import { Background, CardBack, CardView, Portrait } from './parts';
import { useMatch } from './useMatch';

const HUMAN: PlayerId = 0;
const AI: PlayerId = 1;

export interface MatchOutcome {
  won: boolean;
  draw: boolean;
  settlement: Settlement | null;
  playerWentGo: boolean;
  focus: 'gwang' | 'yeol' | 'tti' | 'pi';
  score: number;
}

/** 플레이어가 이번 판에 주로 모은 항목 (AI 패턴 학습에 쓰인다) */
function focusOf(cards: { gwang: Card[]; yeol: Card[]; tti: Card[]; pi: Card[] }): MatchOutcome['focus'] {
  const entries: Array<[MatchOutcome['focus'], number]> = [
    ['gwang', cards.gwang.length * 3],
    ['yeol', cards.yeol.length],
    ['tti', cards.tti.length],
    ['pi', cards.pi.length * 0.6],
  ];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

export default function MatchScreen({
  tenant,
  stage,
  affection,
  rules,
  profile,
  losingStreak,
  onFinish,
  onQuit,
}: {
  tenant: Tenant;
  stage: number;
  affection: number;
  rules: Partial<RuleOptions>;
  profile: PlayerProfile;
  losingStreak: number;
  onFinish: (o: MatchOutcome) => void;
  onQuit: () => void;
}) {
  const { view, play, choose, goStop, shake, shakeable, bombable } = useMatch({
    tenant,
    stage,
    affection,
    rules,
    profile,
    losingStreak,
  });
  const s = view.state;
  const me = s.players[HUMAN];
  const opp = s.players[AI];
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (s.phase === 'ended') {
      const t = window.setTimeout(() => setShowResult(true), 900);
      return () => window.clearTimeout(t);
    }
  }, [s.phase]);

  const myTurn = s.turn === HUMAN && !view.busy;
  const canPlay = myTurn && s.phase === 'awaitPlay';
  const mustChoose = s.turn === HUMAN && s.phase === 'awaitChoice';

  const handCard = (c: Card) => {
    if (!canPlay) return;
    if (bombable.includes(c.month)) {
      // 폭탄 가능한 월은 한 번 더 탭해서 확정
      if (selected === c.id) {
        play(c.id, true);
        setSelected(null);
      } else {
        setSelected(c.id);
      }
      return;
    }
    play(c.id);
    setSelected(null);
  };

  const result = useMemo<MatchOutcome | null>(() => {
    if (!s.settlement) return null;
    return {
      won: s.settlement.winner === HUMAN,
      draw: s.settlement.winner === null,
      settlement: s.settlement,
      playerWentGo: me.goCount > 0,
      focus: focusOf(me.captured),
      score: s.settlement.winner === HUMAN ? s.settlement.total : 0,
    };
  }, [s.settlement, me]);

  return (
    <div className="screen">
      <Background bg="maru" time="night" />
      <div className="layer match">
        <div className="opp-panel">
          <Portrait tenant={tenant} expression={view.expression} outfit={stage >= 10 ? 2 : 0} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <strong style={{ fontSize: 14 }}>{tenant.name}</strong>
              <span className="score-chip">{view.oppScore}점</span>
              {opp.goCount > 0 && <span className="badge">{opp.goCount}고</span>}
              <button className="iconbtn" style={{ marginLeft: 'auto' }} onClick={onQuit} aria-label="나가기">
                ✕
              </button>
            </div>
            <div className="opp-line">{view.line}</div>
          </div>
        </div>

        <div className="captured">
          <span className="tag">상대</span>
          {[...opp.captured.gwang, ...opp.captured.yeol, ...opp.captured.tti, ...opp.captured.pi].map((c) => (
            <CardView key={c.id} card={c} small />
          ))}
        </div>

        <div className="field">
          {mustChoose && (
            <div className="hint-box" style={{ margin: '0 0 6px' }}>
              같은 월이 두 장입니다. 가져올 패를 고르세요.
            </div>
          )}
          <div className="card-row">
            {s.field.map((c) => {
              const isCandidate = mustChoose && s.pendingChoice?.candidates.some((x) => x.id === c.id);
              return (
                <CardView
                  key={c.id}
                  card={c}
                  selectable={!!isCandidate}
                  chosen={false}
                  onClick={() => isCandidate && choose(c.id)}
                />
              );
            })}
          </div>
          <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--paper-dim)' }}>
            바닥 {s.field.length}장 · 남은 패 {s.deck.length}장
            {Object.keys(s.ppeokPiles).length > 0 &&
              ` · 뻑 ${Object.keys(s.ppeokPiles)
                .map((m) => `${m}월`)
                .join(', ')}`}
          </div>
        </div>

        <div className="captured">
          <span className="tag">내 것</span>
          {[...me.captured.gwang, ...me.captured.yeol, ...me.captured.tti, ...me.captured.pi].map((c) => (
            <CardView key={c.id} card={c} small />
          ))}
        </div>

        {view.hint && <div className="hint-box">{tenant.name}: “{view.hint}”</div>}

        <div className="hand">
          {me.hand.map((c) => (
            <CardView
              key={c.id}
              card={c}
              selectable={canPlay}
              chosen={selected === c.id}
              onClick={() => handCard(c)}
            />
          ))}
          {me.hand.length === 0 && <CardBack small />}
        </div>

        <div className="action-bar">
          <div style={{ flex: 1, fontSize: 12 }}>
            <div>
              내 점수 <strong style={{ color: 'var(--lamp)', fontSize: 16 }}>{view.myScore}</strong>
              {me.goCount > 0 && <span className="badge">{me.goCount}고</span>}
            </div>
            <div style={{ color: 'var(--paper-dim)', fontSize: 11 }}>
              {selected && bombable.includes(me.hand.find((c) => c.id === selected)?.month ?? 0)
                ? '한 번 더 누르면 폭탄'
                : canPlay
                  ? '낼 패를 고르세요'
                  : view.busy
                    ? `${tenant.name}의 차례…`
                    : ''}
            </div>
          </div>
          {shakeable.length > 0 && canPlay && (
            <button className="btn" onClick={() => shake(shakeable[0])}>
              흔들기 {MONTH_NAMES[shakeable[0]] ?? shakeable[0]}
            </button>
          )}
        </div>

        {view.shout && (
          <div className="shout" key={view.shout.key}>
            <span>{view.shout.text}</span>
          </div>
        )}

        {view.askGoStop && (
          <div className="gostop-overlay">
            <Portrait tenant={tenant} expression="serious" outfit={stage >= 10 ? 2 : 0} />
            <div className="gostop-line">
              {view.myScore}점입니다. 더 가시겠어요?
              <br />
              <span style={{ color: 'var(--paper-dim)', fontSize: 13 }}>
                고를 하면 점수가 오르지만, 상대가 이기면 고박으로 두 배를 물어줍니다.
              </span>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn primary" onClick={() => goStop('go')}>
                고
              </button>
              <button className="btn" onClick={() => goStop('stop')}>
                스톱
              </button>
            </div>
          </div>
        )}

        {view.aiGoStop && (
          <div className="gostop-overlay">
            <Portrait tenant={tenant} expression={view.aiGoStop.action === 'go' ? 'serious' : 'win'} outfit={stage >= 10 ? 2 : 0} />
            <div className="gostop-line">
              <strong style={{ color: 'var(--lamp)' }}>{tenant.name}</strong>
              <br />
              {view.aiGoStop.line}
            </div>
          </div>
        )}

        {showResult && result && (
          <ResultPanel tenant={tenant} outcome={result} onNext={() => onFinish(result)} />
        )}
      </div>
    </div>
  );
}

function ResultPanel({
  tenant,
  outcome,
  onNext,
}: {
  tenant: Tenant;
  outcome: MatchOutcome;
  onNext: () => void;
}) {
  const st = outcome.settlement;
  const bd = st?.breakdown;
  return (
    <div className="result">
      <h2 style={{ color: outcome.won ? 'var(--lamp)' : outcome.draw ? 'var(--paper-dim)' : 'var(--accent)' }}>
        {outcome.draw ? '나가리' : outcome.won ? '승리' : '패배'}
      </h2>
      {st && <div className="total">{st.total}점</div>}
      {bd && (
        <div className="result-rows">
          {bd.gwangScore > 0 && (
            <div>
              <span>{bd.gwangLabel}</span>
              <span>{bd.gwangScore}점</span>
            </div>
          )}
          {bd.ttiScore > 0 && (
            <div>
              <span>{bd.ttiLabels.join(' · ')}</span>
              <span>{bd.ttiScore}점</span>
            </div>
          )}
          {bd.yeolScore > 0 && (
            <div>
              <span>{bd.yeolLabels.join(' · ')}</span>
              <span>{bd.yeolScore}점</span>
            </div>
          )}
          {bd.piScore > 0 && (
            <div>
              <span>피 {bd.piCount}장</span>
              <span>{bd.piScore}점</span>
            </div>
          )}
          <div>
            <span>기본</span>
            <span>{st?.base}점</span>
          </div>
          {st && st.goBonus > 0 && (
            <div>
              <span>고 가산</span>
              <span>+{st.goBonus}</span>
            </div>
          )}
          {st && st.multiplier > 1 && (
            <div>
              <span>배수</span>
              <span>x{st.multiplier}</span>
            </div>
          )}
        </div>
      )}
      {st && st.reasons.length > 0 && (
        <div className="reasons">
          {st.reasons.map((r, i) => (
            <span key={i}>{r}</span>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 6 }}>
        <Portrait tenant={tenant} expression={outcome.won ? 'lose' : 'win'} outfit={0} style={{ height: 90 }} />
      </div>
      <button className="btn primary wide" style={{ maxWidth: 260 }} onClick={onNext}>
        계속
      </button>
    </div>
  );
}
