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
import { useLayoutEffect, useRef } from 'react';

/** 카드가 지금 어디에 있는가. 연출 타이밍이 이 값으로 갈린다. */
export type CardZone = 'hand' | 'field' | 'pile';

interface Snap {
  rect: DOMRect;
  el: HTMLElement;
  zone: CardZone;
}

const THROW_MS = 280;
const SWEEP_MS = 360;
const SWEEP_WAIT = 230;

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

export function useCardFlight(
  boardRef: React.RefObject<HTMLElement | null>,
  deps: React.DependencyList,
  enabled = true,
): void {
  const prev = useRef<Map<string, { rect: DOMRect; zone: CardZone }> | null>(null);

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

    for (const [cid, { rect, el, zone }] of now) {
      const was = before.get(cid);
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
        continue;
      }

      if (Math.abs(dx) < 2 && Math.abs(dy) < 2 && Math.abs(sc - 1) < 0.03) continue;
      const start = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) scale(${sc.toFixed(3)})`;

      if (zone === 'pile') {
        // 붙었다가 → 쑉
        el.animate(
          [
            { transform: start, offset: 0 },
            { transform: `${start} scale(1.18)`, offset: 0.16, easing: 'ease-out' },
            { transform: 'none', offset: 1, easing: 'cubic-bezier(.4,0,.18,1)' },
          ],
          { duration: SWEEP_MS, delay: SWEEP_WAIT, fill: 'backwards' },
        );
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
    }
  }, deps);
}
