/**
 * 맞고 판 + 결과 연출.
 *
 * 화면 구성은 고스톱 판의 관습을 따른다 — 초록 융 바닥, 가운데 더미, 양쪽으로 갈린
 * 먹은 패 더미(광/띠/열/피), 오른쪽 점수판, 아래 내 손패.
 * 세로로 들면 위아래로 쌓이고, 눕히거나 넓은 화면이면 좌우로 펼쳐진다.
 * (배치는 styles.css 의 .board grid-template-areas 가 전부 결정한다)
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { MONTH_NAMES } from '../engine/cards';
import type { Card, PlayerId, RuleOptions, Settlement } from '../engine/types';
import type { PlayerProfile } from '../ai/ai';
import type { Tenant } from '../data/types';
import { LOSS_FACTOR } from '../save/storage';
import { Background, CardBack, CardView, cardSrcNow, Portrait } from './parts';
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
  /** 이긴 쪽의 최종 점수. 판돈은 여기에 점당 레이트를 곱해 정해진다. */
  settlementTotal: number;
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

/** 먹은 패를 광/띠/열/피 네 더미로 나눠 겹쳐 보여준다 */
function CapturedPiles({
  captured,
  side,
}: {
  captured: { gwang: Card[]; yeol: Card[]; tti: Card[]; pi: Card[] };
  side: '상대' | '내 것';
}) {
  const rows: Array<[string, Card[]]> = [
    ['광', captured.gwang],
    ['띠', captured.tti],
    ['열', captured.yeol],
    ['피', captured.pi],
  ];
  const total = rows.reduce((a, [, c]) => a + c.length, 0);
  return (
    <div className="piles">
      <div className="piles-head">
        {side}
        <b>{total}</b>
      </div>
      {rows.map(([label, cards]) => (
        <div className={`pile ${cards.length === 0 ? 'pile-empty' : ''}`} key={label}>
          <span className="pile-label">{label}</span>
          <div className="pile-cards">
            {cards.map((c, i) => (
              <img
                key={c.id}
                className="pile-card"
                style={{ marginLeft: i === 0 ? 0 : 'var(--pile-overlap)' }}
                src={cardSrcNow(c)}
                alt={c.name}
                draggable={false}
              />
            ))}
          </div>
          {cards.length > 0 && <span className="pile-n">{cards.length}</span>}
        </div>
      ))}
    </div>
  );
}

export default function MatchScreen({
  tenant,
  stage,
  affection,
  rules,
  profile,
  losingStreak,
  points,
  onFinish,
  onQuit,
}: {
  tenant: Tenant;
  stage: number;
  affection: number;
  rules: Partial<RuleOptions>;
  profile: PlayerProfile;
  losingStreak: number;
  /** 지금 가진 포인트. 판돈이 얼마나 큰 돈인지 옆에 보여준다. */
  points: number;
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
  /** 손패를 누르고 있는 동안 바닥의 같은 월을 밝힌다 */
  const [hintMonth, setHintMonth] = useState<number | null>(null);
  /** 패를 바닥에 때릴 때마다 판이 한 번 흔들린다 */
  const [slam, setSlam] = useState(0);
  const prevDeck = useRef(s.deck.length);

  useEffect(() => {
    if (s.phase === 'ended') {
      const t = window.setTimeout(() => setShowResult(true), 900);
      return () => window.clearTimeout(t);
    }
  }, [s.phase]);

  // 더미가 줄었다 = 누군가 패를 내고 한 장 뒤집었다 = 바닥을 때렸다
  useEffect(() => {
    if (s.deck.length < prevDeck.current) setSlam((n) => n + 1);
    prevDeck.current = s.deck.length;
  }, [s.deck.length]);

  useEffect(() => {
    if (slam === 0) return;
    const t = window.setTimeout(() => setSlam(0), 420);
    return () => window.clearTimeout(t);
  }, [slam]);

  const myTurn = s.turn === HUMAN && !view.busy;
  const canPlay = myTurn && s.phase === 'awaitPlay';
  const mustChoose = s.turn === HUMAN && s.phase === 'awaitChoice';
  /** 고르는 중이면 "무엇을 맞출 패인지"를 같이 보여줘야 한다 */
  const pending = mustChoose ? s.pendingChoice : null;

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

  /** 바닥패를 월별로 묶는다. 같은 월이 겹쳐 놓이는 게 실제 판 모양이다. */
  const fieldGroups = useMemo(() => {
    const byMonth = new Map<number, Card[]>();
    for (const c of s.field) {
      const arr = byMonth.get(c.month);
      if (arr) arr.push(c);
      else byMonth.set(c.month, [c]);
    }
    return [...byMonth.entries()].map(([month, cards]) => ({ month, cards }));
  }, [s.field]);

  const half = Math.ceil(fieldGroups.length / 2);
  const topRow = fieldGroups.slice(0, half);
  const bottomRow = fieldGroups.slice(half);

  const winPay = view.myScore * tenant.rate;
  const losePay = Math.round(view.oppScore * tenant.rate * LOSS_FACTOR);

  const result = useMemo<MatchOutcome | null>(() => {
    if (!s.settlement) return null;
    return {
      won: s.settlement.winner === HUMAN,
      draw: s.settlement.winner === null,
      settlement: s.settlement,
      playerWentGo: me.goCount > 0,
      focus: focusOf(me.captured),
      score: s.settlement.winner === HUMAN ? s.settlement.total : 0,
      settlementTotal: s.settlement.total,
    };
  }, [s.settlement, me]);

  const renderStack = (g: { month: number; cards: Card[] }) => (
    <div className="fstack" key={g.month}>
      {g.cards.map((c, i) => {
        const isCandidate = mustChoose && s.pendingChoice?.candidates.some((x) => x.id === c.id);
        return (
          <div
            className={`fslot ${isCandidate ? 'candidate' : ''} ${hintMonth === c.month ? 'match' : ''}`}
            key={c.id}
            style={{ marginLeft: i === 0 ? 0 : 'var(--stack-overlap)', zIndex: i }}
          >
            <CardView card={c} selectable={!!isCandidate} onClick={() => isCandidate && choose(c.id)} />
          </div>
        );
      })}
      {s.ppeokPiles[g.month] !== undefined && <span className="fstack-tag">뻑</span>}
    </div>
  );

  return (
    <div className="screen match-screen">
      <Background bg="maru" time="night" />
      <div className="layer board">
        {/* ── 상대 ── */}
        <div className="board-opp">
          <Portrait tenant={tenant} expression={view.expression} outfit={stage >= 10 ? 2 : 0} />
          <div className="chip-body">
            <div className="chip-name">
              {tenant.name}
              {opp.goCount > 0 && <span className="badge">{opp.goCount}고</span>}
            </div>
            <div className="chip-score">
              {view.oppScore}
              <small>점</small>
            </div>
          </div>
          <button className="iconbtn quit" onClick={onQuit} aria-label="나가기">
            ✕
          </button>
          <div className="speech">{view.line}</div>
        </div>

        {/* ── 먹은 패 ── */}
        <div className="board-oppcap">
          <CapturedPiles captured={opp.captured} side="상대" />
        </div>

        {/* ── 바닥 ── */}
        <div className="board-field">
          <div className="opp-hand" aria-label={`${tenant.name}의 남은 패 ${opp.hand.length}장`}>
            {opp.hand.map((c, i) => (
              <div className="ohand-slot" key={c.id} style={{ marginLeft: i === 0 ? 0 : 'var(--ohand-overlap)' }}>
                <CardBack small />
              </div>
            ))}
            <span className="ohand-n">{opp.hand.length}</span>
          </div>
          <div className={`felt ${slam ? 'slam' : ''} ${mustChoose ? 'choosing' : ''}`}>
            <div className="field-row">{topRow.map(renderStack)}</div>
            <div className="field-mid">
              {pending && (
                <div className="pending">
                  <CardView card={pending.played} />
                  <span className="pending-tag">{pending.source === 'deck' ? '뒤집은 패' : '낸 패'}</span>
                </div>
              )}
              <div className="deck">
                <CardBack />
                <span className="deck-n">{s.deck.length}</span>
              </div>
              <div className="deck-label">남은 패</div>
            </div>
            <div className="field-row">{bottomRow.map(renderStack)}</div>
          </div>
          {mustChoose && (
            <div className="felt-notice">
              {pending
                ? `${MONTH_NAMES[pending.played.month]}(${pending.played.month}월)이 바닥에 두 장입니다. `
                : '같은 월이 두 장입니다. '}
              <b>빛나는 패</b> 중에서 가져올 것을 고르세요.
            </div>
          )}
          {view.hint && !mustChoose && (
            <div className="felt-notice hint">
              {tenant.name}: “{view.hint}”
            </div>
          )}
        </div>

        <div className="board-mycap">
          <CapturedPiles captured={me.captured} side="내 것" />
        </div>

        {/* ── 점수판 ── */}
        <div className="board-side">
          <div className="scorebox">
            <div className="scorebox-row">
              <b>{view.myScore}</b>
              <small>점</small>
              <span className="x">×</span>
              <b>{tenant.rate}</b>
              <small>P</small>
            </div>
            <div className="scorebox-eq">
              = <strong>{winPay.toLocaleString()}P</strong>
            </div>
            <div className="scorebox-risk">
              지면 <span>-{losePay.toLocaleString()}P</span>
            </div>
          </div>

          <div className="turnline">
            {selected && bombable.includes(me.hand.find((c) => c.id === selected)?.month ?? 0)
              ? '한 번 더 누르면 폭탄'
              : canPlay
                ? '낼 패를 고르세요'
                : view.busy
                  ? `${tenant.name}의 차례…`
                  : mustChoose
                    ? '가져올 패를 고르세요'
                    : ''}
          </div>

          {shakeable.length > 0 && canPlay && (
            <button className="btn shake" onClick={() => shake(shakeable[0])}>
              흔들기 {MONTH_NAMES[shakeable[0]] ?? shakeable[0]}
            </button>
          )}

          <div className="me-chip">
            <div className="chip-name">
              나
              {me.goCount > 0 && <span className="badge">{me.goCount}고</span>}
            </div>
            <div className="chip-points">{points.toLocaleString()} P</div>
          </div>
        </div>

        {/* ── 내 손패 ── */}
        <div className="board-hand">
          {me.hand.map((c) => (
            <div
              key={c.id}
              className="hand-slot"
              onPointerDown={() => canPlay && setHintMonth(c.month)}
              onPointerEnter={() => canPlay && setHintMonth(c.month)}
              onPointerLeave={() => setHintMonth(null)}
              onPointerUp={() => setHintMonth(null)}
            >
              <CardView
                card={c}
                selectable={canPlay}
                chosen={selected === c.id}
                onClick={() => handCard(c)}
              />
            </div>
          ))}
          {me.hand.length === 0 && <CardBack small />}
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
              <strong style={{ color: 'var(--ok)', fontSize: 18 }}>
                지금 스톱하면 +{winPay.toLocaleString()}P
              </strong>
              <br />
              <span style={{ color: 'var(--paper-dim)', fontSize: 13 }}>
                고를 하면 점수가 오르지만, 상대가 이기면 고박으로 두 배를 물어줍니다. 점당 {tenant.rate}P
                라 크게 뒤집히면 그만큼 나갑니다.
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
            <Portrait
              tenant={tenant}
              expression={view.aiGoStop.action === 'go' ? 'serious' : 'win'}
              outfit={stage >= 10 ? 2 : 0}
            />
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
  const rate = tenant.rate;
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
      {st && (
        <div
          style={{
            fontSize: 20,
            fontWeight: 900,
            color: outcome.won ? 'var(--ok)' : outcome.draw ? 'var(--paper-dim)' : 'var(--accent)',
          }}
        >
          {outcome.draw
            ? '판돈 없음'
            : outcome.won
              ? `+${(st.total * rate).toLocaleString()}P`
              : `-${Math.round(st.total * rate * LOSS_FACTOR).toLocaleString()}P`}
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
