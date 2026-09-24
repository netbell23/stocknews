/**
 * 하숙생 맞고 서비스 워커.
 *
 * 게임은 서버와 통신하지 않으므로 첫 방문에 받은 파일을 전부 캐시에 넣고,
 * 그 뒤로는 오프라인에서도 그대로 돌아가게 한다.
 *
 * 전략
 *  - 문서(HTML): 네트워크 먼저. 새 버전이 올라갔으면 바로 받는다. 실패하면 캐시.
 *  - 그 외(JS/CSS/이미지): 캐시 먼저. 없으면 받아서 캐시에 넣는다.
 *
 * CACHE 이름의 숫자를 올리면 예전 캐시가 정리된다. 배포 스크립트가 자동으로 올린다.
 */
const CACHE = 'hasukgo-202609240028';

self.addEventListener('install', (event) => {
  // 새 워커를 곧바로 활성화한다 (게임은 단일 페이지라 안전하다)
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(['./', './index.html', './manifest.webmanifest']).catch(() => undefined),
    ),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.filter((n) => n !== CACHE).map((n) => caches.delete(n)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // 다른 출처(CDN 등)는 건드리지 않는다
  if (url.origin !== self.location.origin) return;

  const isDocument = req.mode === 'navigate' || req.destination === 'document';

  if (isDocument) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          const cache = await caches.open(CACHE);
          cache.put(req, fresh.clone());
          return fresh;
        } catch {
          const cached = await caches.match(req);
          return cached ?? (await caches.match('./index.html')) ?? Response.error();
        }
      })(),
    );
    return;
  }

  event.respondWith(
    (async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const fresh = await fetch(req);
        // 정상 응답만 캐시에 넣는다
        if (fresh.ok && fresh.type === 'basic') {
          const cache = await caches.open(CACHE);
          cache.put(req, fresh.clone());
        }
        return fresh;
      } catch {
        return Response.error();
      }
    })(),
  );
});
