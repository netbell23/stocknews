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
export type CardZone = 'hand' | 'field' | 'pile-me' | 'pile-opp';

const isPile = (z: CardZone) => z === 'pile-me' || z === 'pile-opp';

/** 더미로 빨려들 패 한 장의 연출 정보 */
export interface Sweep<T> {
  /** 내리쳐 먹은 패처럼 시각이 이미 정해진 경우 */
  forcedWait: number | undefined;
  /** 바닥에 있던 자리의 왼쪽 좌표 */
  fromX: number;
  card: T;
}

/**
 * 먹은 패가 더미로 날아가는 순서.
 *
 * 그냥 두면 더미 안의 줄 순서(광·띠·열·피)대로 날아간다. 그러면 나중에
 * 먹은 광이 먼저 먹은 피를 앞질러서, 보는 사람은 무엇을 어떤 차례로
 * 가져갔는지 읽을 수 없다. 시각이 정해진 패를 앞에 놓고, 나머지는
 * 바닥에서 왼쪽에 있던 것부터 — 눈이 훑는 순서대로 — 잇는다.
 */
export function orderSweeps<T>(list: Array<Sweep<T>>): Array<Sweep<T>> {
  return [...list].sort((a, b) => {
    const aw = a.forcedWait ?? Infinity;
    const bw = b.forcedWait ?? Infinity;
    if (aw !== bw) return aw - bw;
    return a.fromX - b.fromX;
  });
}

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
const SWEEP_MS = 940;
const SWEEP_WAIT = 420;
/*
 * 한 장이 다 날아간 뒤에 다음 장이 뜨면 뚝뚝 끊겨 보인다.
 * 비행시간보다 훨씬 짧게 띄워서 줄줄이 이어지는 한 줄기로 만든다.
 */
const SWEEP_STAGGER = 165;

/** 상납(쪽·따닥·쓸): 먹는 게 다 끝난 뒤에 상대 더미에서 한 장을 뺏어온다 */
const STEAL_MS = 900;
const STEAL_GAP = 300;

/** 더미에서 뒤집히는 패: 천천히 들어올려 앞면을 보여준 뒤 내려놓는다 */
const REVEAL_MS = 1200;
/**
 * 뒤집은 패가 바닥패를 먹는 경우: 들어올려 보여주고 → 그 패를 내리치고 → 같이 가져간다.
 * 공중에서 바로 더미로 빨려들면 "무엇을 때려서 먹었는지" 가 빠진다.
 */
const REVEAL_HIT_MS = 2000;
/** 그 안에서 내리치는 순간이 언제인지 (0~1) */
const HIT_AT = 0.45;
/** 뒤집기 연출이 있는 턴에는 먹는 연출이 그 뒤에 와야 한다 */
const SWEEP_WAIT_AFTER_REVEAL = 1280;

/**
 * 연출 동안만 맨 위로 올린다.
 * 바닥패는 .fslot 이 stacking context 를 만들어 카드에만 z-index 를 줘도 소용없다.
 */
/**
 * 연출이 겹칠 때 누가 위에 오는가.
 *
 * 종류별로 높이를 못박아 두면(뒤집기 80 · 먹기 55 …) 나중에 시작한 패가
 * 먼저 시작한 패 밑으로 지나간다. 눈에는 방금 움직인 것이 위에 있어야
 * 자연스러우므로, 시작 시각이 늦을수록 높이 올린다.
 * 같은 순간에 시작한 것들만 종류로 순서를 가른다.
 */
function zAt(delay: number, bias = 0): number {
  return 40 + Math.round(delay / 5) + bias;
}

/*
 * 내리치는 패는 그 턴 내내 맨 위다.
 * 시작 시각으로만 높이를 매기면, 뒤에 출발한 「먹어가는 패」가 아직
 * 내려오는 중인 패 위로 지나간다 — 맞고 있는 패가 때리는 패를 덮는 꼴이다.
 * 때리는 쪽이 위에 있어야 맞았다는 게 보인다.
 */
const Z_SLAM = 900;

/** 맞는 패를 얼마나 덮을 것인가. 0.5 면 절반만 겹친다 — 둘 다 읽힌다. */
export const HIT_OVERLAP = 0.5;

/**
 * 때리는 패가 내려앉을 왼쪽 좌표.
 *
 * 맞는 패에 정확히 포개면 밑에 뭐가 있었는지 안 보인다. 그렇다고 나란히
 * 놓으면 맞아떨어진 건지 그냥 옆에 둔 건지 구분이 안 된다.
 * 반만 덮는다 — 쉬는 자리(--stack-overlap)도 같은 비율이라, 때린 모양
 * 그대로 눌러앉는다.
 */
export function slamLeft(mateLeft: number, cardWidth: number): number {
  return mateLeft + cardWidth * HIT_OVERLAP;
}

/** 같은 순간에 시작했을 때의 우선순위 */
const Z_LAND = 0;
const Z_SWEEP = 2;
const Z_STEAL = 4;
const Z_REVEAL = 6;

function lift(el: HTMLElement, anim: Animation, z = 60): void {
  const slot = el.closest<HTMLElement>('.fslot') ?? el;
  const prevZ = slot.style.zIndex;
  slot.style.zIndex = String(z);
  const restore = () => {
    slot.style.zIndex = prevZ;
  };
  anim.addEventListener('finish', restore);
  anim.addEventListener('cancel', restore);
}

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
  /** 뒤집은 패가 바닥패를 내리치는 순간 — 충격 연출을 그 타이밍에 맞춘다 */
  onImpact?: (at: DOMRect, delay: number) => void,
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

    /*
     * 뒤집은 패가 바닥패를 먹는 짝을 찾아둔다.
     * 같은 월이면서, 직전엔 바닥에 있었고 지금은 같은 더미로 간 패가 그 짝이다.
     */
    const hitTargets = new Map<string, DOMRect>(); // 뒤집은 패 cid -> 내리칠 자리
    const waitOverride = new Map<string, number>(); // 맞은 패 cid -> 쓸어담기 대기
    for (const [cid, snap] of now) {
      if (override.current.has(cid) || before.has(cid)) continue; // 갓 뒤집힌 패만
      if (!isPile(snap.zone)) continue; // 바닥에 앉는 패는 제자리에 내려앉으면 된다
      const month = snap.el.dataset.month;
      for (const [other, s2] of now) {
        if (other === cid || s2.zone !== snap.zone) continue;
        if (s2.el.dataset.month !== month) continue;
        const w2 = before.get(other);
        if (!w2 || w2.zone !== 'field') continue;
        hitTargets.set(cid, w2.rect);
        waitOverride.set(other, REVEAL_HIT_MS * HIT_AT + 220);
        break;
      }
    }
    let sweptCount = 0;
    let tail = 0;
    const mark = (delay: number, dur: number) => {
      tail = Math.max(tail, delay + dur);
    };
    /** 상대 더미 → 내 더미(또는 그 반대)로 옮겨간 패. 먹기가 끝난 뒤에 따로 날린다 */
    const steals: Array<{ el: HTMLElement; dx: number; dy: number; sc: number }> = [];
    /*
     * 더미로 빨려들 패들. 곧바로 날리지 않고 일단 모은다.
     * Map 을 도는 순서는 더미 안의 줄 순서(광·띠·열·피)라서, 그대로 쓰면
     * 나중에 먹은 광이 먼저 먹은 피보다 앞서 날아간다 — 먹은 순서와 어긋난다.
     * 모아서 "바닥에 있던 자리" 기준으로 왼쪽부터 정렬한 뒤 차례로 띄운다.
     */
    const sweeps: Array<{
      el: HTMLElement;
      start: string;
      dx: number;
      dy: number;
      sc: number;
      fromX: number;
      forcedWait: number | undefined;
    }> = [];

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
        const up = `translate(${liftX.toFixed(1)}px, ${liftY.toFixed(1)}px)`;
        const hit = hitTargets.get(cid);

        // 먹을 바닥패가 있으면: 들어올려 보여주고 → 내리치고 → 같이 간다
        if (hit) {
          /*
           * 정확히 포개면 밑에 뭐가 있었는지 안 보인다.
           * 반만 덮어서 두 장이 다 읽히게 한다. 쉬는 자리(--stack-overlap)도
           * 같은 비율로 겹치므로, 때린 모양 그대로 눌러앉는다.
           */
          const centered = hit.left + hit.width / 2 - rect.width / 2;
          const hx = slamLeft(centered, rect.width) - rect.left;
          const hy = hit.top + hit.height / 2 - rect.height / 2 - rect.top;
          const onto = `translate(${hx.toFixed(1)}px, ${hy.toFixed(1)}px)`;
          const a = el.animate(
            [
              { transform: `${start} rotateY(90deg)`, offset: 0, easing: 'cubic-bezier(.25,.9,.3,1)' },
              { transform: `${up} scale(2.05) rotateY(66deg)`, offset: 0.18 },
              { transform: `${up} scale(2.2) rotateY(0deg)`, offset: 0.3, easing: 'linear' },
              { transform: `${up} scale(2.15)`, offset: 0.36, easing: 'cubic-bezier(.75,0,.9,.55)' },
              // 내리친다
              { transform: `${onto} scale(1.1) rotate(3deg)`, offset: HIT_AT },
              { transform: `${onto} scale(1) rotate(0deg)`, offset: HIT_AT + 0.06, easing: 'ease-out' },
              // 붙어 있다가
              { transform: `${onto} scale(1)`, offset: 0.66, easing: 'cubic-bezier(.45,0,.2,1)' },
              { transform: 'none', offset: 1 },
            ],
            { duration: REVEAL_HIT_MS, fill: 'backwards' },
          );
          lift(el, a, Z_SLAM);
          onImpact?.(hit, REVEAL_HIT_MS * HIT_AT);
          mark(0, REVEAL_HIT_MS);
          continue;
        }

        const anim = el.animate(
          [
            { transform: `${start} rotateY(90deg)`, offset: 0, easing: 'cubic-bezier(.25,.9,.3,1)' },
            { transform: `${up} scale(2.05) rotateY(66deg)`, offset: 0.3 },
            { transform: `${up} scale(2.2) rotateY(0deg)`, offset: 0.5, easing: 'linear' },
            { transform: `${up} translateY(-5px) scale(2.15)`, offset: 0.7, easing: 'cubic-bezier(.6,0,.9,.5)' },
            { transform: 'none', offset: 1, easing: 'cubic-bezier(.3,1.35,.45,1)' },
          ],
          { duration: REVEAL_MS, fill: 'backwards' },
        );
        // 들어올려 뒤집는 패는 무조건 제일 위에 있어야 한다
        lift(el, anim, zAt(0, Z_REVEAL));
        mark(0, REVEAL_MS);
        continue;
      }

      /*
       * 상납. 더미에서 더미로 건너간 패다.
       * 자리만 밀린 것으로 보면 조용히 미끄러져 "언제 뺏겼는지" 모르고 지나간다.
       */
      if (isPile(zone) && was && isPile(was.zone) && was.zone !== zone) {
        steals.push({ el, dx, dy, sc });
        continue;
      }

      if (isPile(zone)) {
        sweeps.push({ el, start, dx, dy, sc, fromX: from.left, forcedWait: waitOverride.get(cid) });
        continue;
      }

      // 손에서 던지거나 더미에서 뒤집혀 바닥에 앉는 패
      const spin = fresh ? 0 : dx > 0 ? -14 : 14;
      const anim = el.animate(
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
      lift(el, anim, zAt(0, Z_LAND));
      mark(0, fresh ? THROW_MS + 60 : THROW_MS);
    }

    /*
     * 먹은 패를 차례로 띄운다.
     * 내리쳐서 먹은 패(forcedWait)는 제 시각이 정해져 있으므로 먼저 놓고,
     * 나머지를 바닥에서 왼쪽에 있던 순서로 뒤에 잇는다.
     */
    const ordered = orderSweeps(sweeps.map((sw) => ({ forcedWait: sw.forcedWait, fromX: sw.fromX, card: sw })));
    const base = hasReveal ? SWEEP_WAIT_AFTER_REVEAL : SWEEP_WAIT;
    ordered.forEach(({ card: sw }, i) => {
      // 시각이 정해진 패도 줄에서 제 몫의 자리를 차지한다 — 안 그러면 뒤엣것과 겹친다
      const wait = sw.forcedWait ?? base + sweptCount * SWEEP_STAGGER;
      if (sw.forcedWait === undefined) sweptCount += 1;
      else sweptCount = Math.max(sweptCount, i + 1);
      const { start, dx, dy, sc, el } = sw;
      const anim = el.animate(
        [
          { transform: start, offset: 0 },
          { transform: `${start} scale(1.24)`, offset: 0.1, easing: 'ease-out' },
          { transform: `${start} scale(1.12)`, offset: 0.22, easing: 'cubic-bezier(.5,0,.5,1)' },
          // 더미에 닿기 직전에 한 번 더 또렷하게 보여준다
          {
            transform: `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.22).toFixed(1)}px) scale(${(sc * 0.55 + 0.45).toFixed(3)})`,
            offset: 0.62,
            easing: 'cubic-bezier(.4,0,.5,1)',
          },
          { transform: 'none', offset: 1, easing: 'cubic-bezier(.45,0,.2,1)' },
        ],
        { duration: SWEEP_MS, delay: wait, fill: 'backwards' },
      );
      lift(el, anim, zAt(wait, Z_SWEEP));
      mark(wait, SWEEP_MS);
    });

    // 먹는 연출이 전부 끝난 뒤에 상납을 보여준다
    if (steals.length) {
      const wait = tail + STEAL_GAP;
      steals.forEach((st, i) => {
        const from = `translate(${st.dx.toFixed(1)}px, ${st.dy.toFixed(1)}px) scale(${st.sc.toFixed(3)})`;
        const anim = st.el.animate(
          [
            { transform: from, offset: 0 },
            { transform: `${from} scale(1.9) rotate(-10deg)`, offset: 0.2, easing: 'cubic-bezier(.2,.9,.3,1)' },
            {
              transform: `translate(${(st.dx * 0.45).toFixed(1)}px, ${(st.dy * 0.45 - 34).toFixed(1)}px) scale(2)`,
              offset: 0.5,
              easing: 'cubic-bezier(.5,0,.4,1)',
            },
            { transform: 'scale(1.5)', offset: 0.78, easing: 'cubic-bezier(.4,0,.2,1)' },
            { transform: 'none', offset: 1 },
          ],
          { duration: STEAL_MS, delay: wait + i * 180, fill: 'backwards' },
        );
        lift(st.el, anim, zAt(wait + i * STEAL_GAP, Z_STEAL));
        mark(wait + i * 180, STEAL_MS);
      });
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
