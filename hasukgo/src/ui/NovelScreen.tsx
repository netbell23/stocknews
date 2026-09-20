/** 이벤트 씬 / 승부 전 대화 컷 — 비주얼노벨 화면 */
import { useCallback, useEffect, useRef, useState } from 'react';
import { advance, choose, fastForward, startScenario, type ScenarioState } from '../scenario/player';
import type { Scene } from '../scenario/types';
import type { Tenant } from '../data/types';
import { Background, Portrait } from './parts';

export interface NovelResult {
  affectionDelta: number;
  pointDelta: number;
  cg: string | null;
}

export default function NovelScreen({
  scene,
  tenant,
  textSpeed,
  onDone,
  canSkip = true,
}: {
  scene: Scene;
  tenant: Tenant | null;
  textSpeed: number;
  onDone: (r: NovelResult) => void;
  /** 건너뛰기 버튼을 보일지 */
  canSkip?: boolean;
}) {
  const [st, setSt] = useState<ScenarioState>(() => startScenario(scene));
  const [typed, setTyped] = useState('');
  const [typing, setTyping] = useState(false);
  const timer = useRef<number | null>(null);
  const v = st.view;

  // 타이핑 연출
  useEffect(() => {
    if (timer.current) window.clearInterval(timer.current);
    if (textSpeed <= 0) {
      setTyped(v.text);
      setTyping(false);
      return;
    }
    setTyped('');
    setTyping(true);
    let i = 0;
    timer.current = window.setInterval(() => {
      i++;
      setTyped(v.text.slice(0, i));
      if (i >= v.text.length) {
        if (timer.current) window.clearInterval(timer.current);
        setTyping(false);
      }
    }, textSpeed);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [v.text, textSpeed]);

  /**
   * 건너뛰기: 남은 대사를 한 번에 소화하고 그 결과를 그대로 넘긴다.
   * 예전에는 빈 결과를 넘겨서 엔딩 CG 와 포인트가 날아갔다.
   */
  const skipAll = useCallback(() => {
    const end = fastForward(st);
    onDone({
      affectionDelta: end.view.affectionDelta,
      pointDelta: end.view.pointDelta,
      cg: end.view.cg,
    });
  }, [st, onDone]);

  const next = useCallback(() => {
    if (typing) {
      // 타이핑 중이면 먼저 전부 보여준다
      if (timer.current) window.clearInterval(timer.current);
      setTyped(v.text);
      setTyping(false);
      return;
    }
    if (v.choices) return;
    if (v.done) {
      onDone({ affectionDelta: v.affectionDelta, pointDelta: v.pointDelta, cg: v.cg });
      return;
    }
    setSt(advance(st));
  }, [typing, v, st, onDone]);

  // 진행이 끝난 상태로 들어오면 바로 종료 처리
  useEffect(() => {
    if (v.done && !v.text) onDone({ affectionDelta: v.affectionDelta, pointDelta: v.pointDelta, cg: v.cg });
  }, [v, onDone]);

  const speakerIsTenant = tenant !== null && v.speaker === tenant.name;

  return (
    <div className="screen" onClick={next}>
      <Background bg={v.bg} time={v.time} />
      <div className="layer">
        <div className="topbar" onClick={(e) => e.stopPropagation()}>
          <h1>{scene.title}</h1>
          {canSkip && (
            <button className="btn ghost" style={{ padding: '6px 12px', fontSize: 13 }} onClick={skipAll}>
              건너뛰기
            </button>
          )}
        </div>

        <div className="vn-stage">
          {tenant && !v.cg && (
            <Portrait
              className="vn-portrait"
              tenant={tenant}
              expression={speakerIsTenant ? v.expression : 'normal'}
              outfit={v.outfit}
            />
          )}
          {v.cg && (
            <div className="vn-cg">
              <div className="vn-cg-inner">
                <div>
                  <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 8 }}>엔딩 CG</div>
                  <div style={{ fontSize: 17, fontWeight: 800 }}>{scene.title}</div>
                  <div style={{ fontSize: 11, opacity: 0.6, marginTop: 10 }}>{v.cg}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="vn-box" onClick={(e) => e.stopPropagation()}>
          {v.speaker && <div className="vn-speaker">{v.speaker}</div>}
          <div className="vn-text" onClick={next}>
            {typed}
          </div>
          {v.choices ? (
            <div className="vn-choices">
              {v.choices.map((c, i) => (
                <button key={i} className="btn wide" onClick={() => setSt(choose(st, i))}>
                  {c.text}
                </button>
              ))}
            </div>
          ) : (
            <div className="vn-hint" onClick={next}>
              {v.done ? '탭하여 계속 ▸' : '탭 ▾'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
