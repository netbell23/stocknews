/* 두마음 산악회 서비스워커 — 앱 셸 캐시 (오프라인 지원, 지도 타일은 캐시하지 않음) */
const CACHE = 'sanbeot-v9';
const SHELL = ['./', './index.html', './styles.css', './app.js', './firebase-config.js', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = e.request.url;
  // 지도 타일/외부 리소스(CDN, Firebase 로그인)는 네트워크 우선, 캐시하지 않음
  if (url.includes('tile.') || url.includes('unpkg.com') || url.includes('gstatic.com') || url.includes('googleapis.com') || e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      if (res.ok && url.startsWith(self.location.origin)) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => cached))
  );
});
