/**
 * H5(모바일 웹) 환경 보정.
 *
 * 모바일 브라우저는 데스크톱과 다르게 구는 지점이 많다. 여기서 한 번에 잡는다.
 *  - 주소창이 접혔다 펴지면서 100vh 가 실제 화면보다 커지는 문제
 *  - 아래로 당기면 새로고침되는 동작 (게임 중 사고로 진행이 날아간다)
 *  - 더블탭 확대, 두 손가락 확대
 *  - 카카오톡·라인 같은 인앱 브라우저의 좁은 뷰포트
 *  - 서비스 워커 등록 (오프라인 플레이)
 */

/**
 * 실제 보이는 높이를 --app-h 로 내려준다. CSS 에서 100vh 대신 이걸 쓴다.
 *
 * resize 이벤트만 믿으면 안 된다. 창 크기가 바뀌었는데 resize 가 오지 않는
 * 경우가 실제로 있다 (화면 분할, 회전 직후, 데스크톱 앱의 뷰포트 변경).
 * 그러면 --app-h 가 옛 높이에 멈춰서 판이 화면보다 짧아지고,
 * 맨 아래 줄인 내 손패가 화면 밖으로 밀려 안 보인다.
 * ResizeObserver 는 이벤트와 무관하게 실제 크기 변화를 잡으므로 이쪽을 믿는다.
 */
function syncViewportHeight(): void {
  let last = -1;
  const set = () => {
    const h = Math.round(window.visualViewport?.height ?? window.innerHeight);
    if (h === last || h <= 0) return;
    last = h;
    document.documentElement.style.setProperty('--app-h', `${h}px`);
  };
  set();

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(set).observe(document.documentElement);
  }
  window.addEventListener('resize', set, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(set, 200), { passive: true });
  window.visualViewport?.addEventListener('resize', set, { passive: true });
  window.visualViewport?.addEventListener('scroll', set, { passive: true });
}

/**
 * 당겨서 새로고침 막기.
 * 스크롤 가능한 영역(목록/설정) 안에서는 정상 스크롤을 허용하고,
 * 맨 위에서 아래로 당기는 동작만 취소한다.
 */
function blockPullToRefresh(): void {
  let startY = 0;
  document.addEventListener(
    'touchstart',
    (e) => {
      startY = e.touches[0]?.clientY ?? 0;
    },
    { passive: true },
  );
  document.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches.length > 1) return;
      const y = e.touches[0]?.clientY ?? 0;
      const dy = y - startY;
      if (dy <= 0) return; // 위로 미는 건 상관없다

      // 지금 손가락이 놓인 곳의 조상 중에 스크롤 중인 요소가 있으면 건드리지 않는다
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        const style = getComputedStyle(el);
        const scrollable = /(auto|scroll)/.test(style.overflowY);
        if (scrollable && el.scrollHeight > el.clientHeight && el.scrollTop > 0) return;
        el = el.parentElement;
      }
      if (e.cancelable) e.preventDefault();
    },
    { passive: false },
  );
}

/** 더블탭 확대와 핀치 확대 막기 (게임 UI 가 흐트러진다) */
function blockZoom(): void {
  let lastTouch = 0;
  document.addEventListener(
    'touchend',
    (e) => {
      const now = Date.now();
      if (now - lastTouch < 320 && e.cancelable) e.preventDefault();
      lastTouch = now;
    },
    { passive: false },
  );
  document.addEventListener('gesturestart', (e) => e.preventDefault());
}

/** 서비스 워커 등록. 실패해도 게임은 그대로 돈다. */
function registerServiceWorker(): void {
  if (!('serviceWorker' in navigator)) return;
  // dev 서버에서는 캐시가 방해되므로 등록하지 않는다
  if (import.meta.env.DEV) return;
  window.addEventListener('load', () => {
    const base = import.meta.env.BASE_URL || './';
    navigator.serviceWorker.register(`${base}sw.js`, { scope: base }).catch(() => {
      /* 오프라인 기능만 빠질 뿐 게임은 정상 동작한다 */
    });
  });
}

export interface H5Env {
  /** 카카오톡·라인·인스타 등 인앱 브라우저인가 */
  inAppBrowser: boolean;
  /** 홈 화면에 추가해 앱처럼 실행 중인가 */
  standalone: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  /** 가로 모드인가 */
  landscape: boolean;
}

export function detectEnv(): H5Env {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const standalone =
    (typeof window !== 'undefined' && window.matchMedia?.('(display-mode: standalone)').matches) ||
    (navigator as unknown as { standalone?: boolean }).standalone === true;
  return {
    inAppBrowser: /KAKAOTALK|Line\/|FBAN|FBAV|Instagram|NAVER|DaumApps/i.test(ua),
    standalone: !!standalone,
    isIOS: /iPhone|iPad|iPod/i.test(ua),
    isAndroid: /Android/i.test(ua),
    landscape: typeof window !== 'undefined' && window.innerWidth > window.innerHeight,
  };
}

/** 앱 시작 시 한 번 호출 */
export function setupH5(): H5Env {
  syncViewportHeight();
  blockPullToRefresh();
  blockZoom();
  registerServiceWorker();

  // 인앱 브라우저는 하단 바가 겹치는 경우가 있어 표시해둔다
  const env = detectEnv();
  document.documentElement.dataset.inapp = String(env.inAppBrowser);
  document.documentElement.dataset.standalone = String(env.standalone);
  return env;
}
