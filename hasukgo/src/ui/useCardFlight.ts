/**
 * 카드가 실제로 움직이게 만든다.
 *
 * 규칙 엔진은 동기 함수라 한 번의 setState 로 "냈다 → 먹었다 → 내 더미로 갔다"가
 * 전부 끝나 있다. 그래서 중간 과정을 따로 만들지 않고 **FLIP** 으로 되돌려 보여준다.
 *   1. 그리기 직전에 모든 카드의 화면 위치를 재둔다 (First)
 *   2. 리액트가 새 자리에 그린다 (Last)
 *   3. 옛 자리로 되돌리는 변형을 걸고 (Invert)
 *   4. 그 변형을 0 으로 풀어 애니메이션한다 (Play)
 *
 * 연출 순서는 delay 로 만든다. 바닥에 떨어지는 패는 곧바로 날아가고,
 * 먹은 패는 0.23초 기다렸다가 — 바닥에 붙어 있는 것처럼 보인다 — 쑉 빨려 들어간다.
 * 직전 자리가 없던 카드(더미에서 뒤집힌 패)는 더미 자리에서 뒤집히며 나온다.
 */
import { useCallback, useLayoutEffect, useRef } from 'react';

/** 카드가 지금 어디에 있는가. 연출 타이밍이 이 값으로 갈린다. */
export type CardZone = 'hand' | 'field' | 'pile';

interface Snap {
  rect: DOMRect;
  el: HTMLElement;
  zone: CardZone;
}

const THROW_MS = 300;
/*
 * 먹은 패가 더미로 들어가는 건 "무엇을 먹었는지" 읽는 순간이라 느려야 한다.
 * 빠르면 뭐가 사라졌는지 모른 채 숫자만 올라간다.
 * 여러 장이 한꺼번에 날면 겹쳐서 또 안 보이므로 한 장씩 시차를 둔다.
 */
const SWEEP_MS = 1000;
const SWEEP_WAIT = 440;
const SWEEP_STAGGER = 220;

/** 더미에서 뒤집히는 패: 천천히 들어올려 앞면을 보여준 뒤 내려놓는다 */
const REVEAL_MS = 1200;
/** 뒤집기 연출이 있는 턴에는 먹는 연출이 그 뒤에 와야 한다 */
const SWEEP_WAIT_AFTER_REVEAL = 1280;

function measure(root: HTMLElement): Map<string, Snap> {
  const out = new Map<string, Snap>();
  root.querySelectorAll<HTMLElement>('[data-cid]').forEach((el) => {
    const cid = el.dataset.cid;
    if (!cid) return;
    // 같은 카드가 두 군데 그려지는 일은 없지만, 있으면 먼저 찾은 것을 쓴다
    if (!out.has(cid)) out.set(cid, { rect: el.getBoundingClientRect(), el, zone: (el.dataset.zone ?? 'field') as CardZone });
  });
  return out;
}

/** 연출이 끝난 뒤 다음 동작까지 두는 틈 */
const BEAT_GAP = 220;

export interface CardFlight {
  /**
   * 지금 걸린 연출이 전부 끝나는 시각(performance.now 기준).
   * 상대 차례를 이 뒤로 미뤄야 "내가 먹는 중인데 상대가 내려치는" 겹침이 사라진다.
   */
  busyUntil: React.MutableRefObject<number>;
  /**
   * 이 카드는 "직전에 여기 있었던 걸로 쳐라".
   * 손패를 크게 띄웠다가 바닥에 꽂는 연출은 별도로 돌아가므로, FLIP 이 그걸 한 번 더
   * 손에서부터 날리면 두 번 움직인다. 꽂힌 자리를 출발점으로 덮어써서 막는다.
   */
  setOrigin(cardId: string, rect: DOMRect): void;
}

export function useCardFlight(
  boardRef: React.RefObject<HTMLElement | null>,
  deps: React.DependencyList,
  enabled = true,
  onBusy?: (ms: number) => void,
): CardFlight {
  const prev = useRef<Map<string, { rect: DOMRect; zone: CardZone }> | null>(null);
  const override = useRef(new Map<string, DOMRect>());
  const busyUntil = useRef(0);

  const setOrigin = useCallback((cardId: string, rect: DOMRect) => {
    override.current.set(cardId, rect);
  }, []);

  useLayoutEffect(() => {
    const root = boardRef.current;
    if (!root) return;

    const now = measure(root);
    const before = prev.current;
    prev.current = new Map([...now].map(([k, v]) => [k, { rect: v.rect, zone: v.zone }]));

    // 첫 렌더에는 되돌릴 옛 자리가 없다. 판이 깔리는 것부터 날리면 어지럽다.
    if (!before || !enabled) return;
    if (typeof (root as Element).animate !== 'function') return;

    const deck = root.querySelector<HTMLElement>('[data-deck]')?.getBoundingClientRect() ?? null;
    const board = root.getBoundingClientRect();
    // 이번 갱신에 더미에서 뒤집힌 패가 있는가 (있으면 먹는 연출을 그 뒤로 미룬다)
    const hasReveal = [...now.keys()].some((k) => !override.current.has(k) && !before.has(k));
    let sweptCount = 0;
    let tail = 0;
    const mark = (delay: number, dur: number) => {
      tail = Math.max(tail, delay + dur);
    };

    for (const [cid, { rect, el, zone }] of now) {
      const forced = override.current.get(cid);
      override.current.delete(cid);
      // 덮어쓴 출발점은 바닥에 꽂힌 자리다. 바닥에서 온 것으로 친다.
      const was = forced ? { rect: forced, zone: 'field' as CardZone } : before.get(cid);
      const from = was?.rect ?? deck;
      if (!from || rect.width === 0) continue;

      const dx = from.left - rect.left;
      const dy = from.top - rect.top;
      const sc = from.width / rect.width;

      const fresh = !was; // 더미에서 막 뒤집힌 패
      const moved = fresh || was.zone !== zone; // 손→바닥, 바닥→먹은 패처럼 자리를 옮긴 패

      /*
       * 자리를 옮기지 않았는데 좌표가 바뀐 건, 옆 카드가 빠져 줄이 다시 짜인 것뿐이다.
       * 이런 것까지 크게 날리면 한 수에 판 전체가 요동친다. 짧게 미끄러지기만 한다.
       */
      if (!moved) {
        if (Math.abs(dx) < 3 && Math.abs(dy) < 3) continue;
        el.animate(
          [
            { transform: `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)` },
            { transform: 'none' },
          ],
          { duration: 200, easing: 'cubic-bezier(.3,0,.2,1)', fill: 'backwards' },
        );
        mark(0, 200);
        continue;
      }

      if (Math.abs(dx) < 2 && Math.abs(dy) < 2 && Math.abs(sc - 1) < 0.03) continue;
      const start = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) scale(${sc.toFixed(3)})`;

      /*
       * 더미에서 막 뒤집힌 패. 더미 자리에서 모로 선 채(보이지 않는 각도) 시작해
       * 판 가운데로 천천히 들어올리며 앞면으로 돌아눕고, 잠깐 세워 보여준 뒤 내려앉는다.
       * 먹히는 패든 바닥에 앉는 패든 같은 길을 탄다 — 무엇이 나왔는지가 먼저다.
       */
      if (fresh) {
        const liftX = board.left + board.width / 2 - rect.width / 2 - rect.left;
        const liftY = board.top + board.height * 0.34 - rect.height / 2 - rect.top;
        const lift = `translate(${liftX.toFixed(1)}px, ${liftY.toFixed(1)}px)`;
        el.animate(
          [
            { transform: `${start} rotateY(90deg)`, offset: 0, easing: 'cubic-bezier(.25,.9,.3,1)' },
            { transform: `${lift} scale(2.05) rotateY(66deg)`, offset: 0.3 },
            { transform: `${lift} scale(2.2) rotateY(0deg)`, offset: 0.5, easing: 'linear' },
            { transform: `${lift} translateY(-5px) scale(2.15)`, offset: 0.7, easing: 'cubic-bezier(.6,0,.9,.5)' },
            { transform: 'none', offset: 1, easing: 'cubic-bezier(.3,1.35,.45,1)' },
          ],
          { duration: REVEAL_MS, fill: 'backwards' },
        );
        mark(0, REVEAL_MS);
        continue;
      }

      if (zone === 'pile') {
        // 붙었다가 → 한 장씩 차례로 쑉
        const wait = (hasReveal ? SWEEP_WAIT_AFTER_REVEAL : SWEEP_WAIT) + sweptCount * SWEEP_STAGGER;
        sweptCount += 1;
        el.animate(
          [
            { transform: start, offset: 0 },
            { transform: `${start} scale(1.24)`, offset: 0.1, easing: 'ease-out' },
            { transform: `${start} scale(1.12)`, offset: 0.22, easing: 'cubic-bezier(.5,0,.5,1)' },
            // 더미에 닿기 직전에 한 번 더 또렷하게 보여준다
            { transform: `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.22).toFixed(1)}px) scale(${(sc * 0.55 + 0.45).toFixed(3)})`, offset: 0.62, easing: 'cubic-bezier(.4,0,.5,1)' },
            { transform: 'none', offset: 1, easing: 'cubic-bezier(.45,0,.2,1)' },
          ],
          { duration: SWEEP_MS, delay: wait, fill: 'backwards' },
        );
        mark(wait, SWEEP_MS);
        continue;
      }

      // 손에서 던지거나 더미에서 뒤집혀 바닥에 앉는 패
      const spin = fresh ? 0 : dx > 0 ? -14 : 14;
      el.animate(
        [
          {
            transform: `${start} rotate(${spin}deg)${fresh ? ' rotateY(88deg)' : ''}`,
            offset: 0,
            easing: 'cubic-bezier(.22,.9,.3,1)',
          },
          { transform: `translate(0,0) scale(1.09) rotate(${spin * 0.18}deg)`, offset: 0.72 },
          { transform: 'none', offset: 1, easing: 'cubic-bezier(.3,1.6,.4,1)' },
        ],
        { duration: fresh ? THROW_MS + 60 : THROW_MS, fill: 'backwards' },
      );
      mark(0, fresh ? THROW_MS + 60 : THROW_MS);
    }

    if (tail > 0) {
      const total = tail + BEAT_GAP;
      busyUntil.current = performance.now() + total;
      onBusy?.(total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { setOrigin, busyUntil };
}
