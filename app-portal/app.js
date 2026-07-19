/* 내 생활 포털 — 대시보드 로직 */
'use strict';

const $ = s => document.querySelector(s);

/* ---------- 설정 ---------- */
const DEF_SETTINGS = {
  my:   { name: '용인 기흥(효성해링턴)', lat: 37.2747, lon: 127.1147 },
  work: { name: '서울 강남역',           lat: 37.4979, lon: 127.0276 },
  busStop: '효성해링턴',
  busRoute: '1550-1',
  tmapKey: '',
  busKey: '',
  gcid: ''
};
function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem('portal:settings') || '{}');
    return { ...DEF_SETTINGS, ...s, my: { ...DEF_SETTINGS.my, ...(s.my || {}) }, work: { ...DEF_SETTINGS.work, ...(s.work || {}) } };
  } catch (e) { return { ...DEF_SETTINGS }; }
}
let S = loadSettings();
function saveSettings() { localStorage.setItem('portal:settings', JSON.stringify(S)); }

/* ---------- 공통 유틸 ---------- */
function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
// 타임아웃 있는 fetch — 프록시가 느려도 화면이 영원히 "불러오는 중"에 머물지 않게
function tfetch(url, opt = {}, ms = 6000) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return fetch(url, { ...opt, signal: c.signal }).finally(() => clearTimeout(t));
}
// CORS 미지원 API는 공개 프록시를 순차 시도 (공개 데이터만 통과시킴 — 개인 키/토큰 요청은 프록시로 보내지 않음)
const PROXIES = [
  u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u),
  u => 'https://corsproxy.io/?url=' + encodeURIComponent(u),
  u => 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(u)
];
async function xfetchText(url) {
  try {
    const r = await tfetch(url);
    if (r.ok) return await r.text();
  } catch (e) { /* CORS 차단 → 프록시 시도 */ }
  for (const p of PROXIES) {
    try {
      const r = await tfetch(p(url));
      if (r.ok) {
        const t = await r.text();
        if (t && t.length > 2) return t;
      }
    } catch (e) { /* 다음 프록시 */ }
  }
  throw new Error('불러오기 실패: ' + url);
}
async function xfetchJson(url) { return JSON.parse(await xfetchText(url)); }

// GitHub Actions(stock_alert.py)가 생성하는 정적 데이터 — 프록시가 다 막혀도 뉴스·시세가 뜨는 폴백
const PORTAL_DATA_URLS = ['../portal-data.json', 'https://netbell23.github.io/stocknews/portal-data.json'];
let portalDataP = null;
function getPortalData() {
  if (!portalDataP) {
    portalDataP = (async () => {
      for (const u of PORTAL_DATA_URLS) {
        try {
          const r = await tfetch(u, {}, 5000);
          if (r.ok) return await r.json();
        } catch (e) { /* 다음 후보 */ }
      }
      return null;
    })();
  }
  return portalDataP;
}

/* ---------- 시계/인사 ---------- */
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
function tick() {
  const now = new Date();
  $('#today').textContent = `${now.getMonth() + 1}월 ${now.getDate()}일 (${DAYS[now.getDay()]})`;
  const h = now.getHours(), m = String(now.getMinutes()).padStart(2, '0');
  $('#clock').textContent = `${h}:${m}`;
  let g;
  if (h < 5)       g = '늦은 밤이에요 🌙';
  else if (h < 11) g = '좋은 아침입니다 ☀️';
  else if (h < 14) g = '점심 맛있게 드세요 🍚';
  else if (h < 18) g = '활기찬 오후 보내세요 💪';
  else if (h < 22) g = '편안한 저녁입니다 🌆';
  else             g = '오늘도 수고하셨어요 🌙';
  if (now.getDay() === 0 || now.getDay() === 6) g = '즐거운 주말 보내세요 🏞️';
  $('#greet').textContent = g;
}

/* ---------- 날씨 (Open-Meteo, 키 불필요) ---------- */
const WX_CODE = [
  [[0], '맑음 ☀️'], [[1, 2], '구름 조금 🌤️'], [[3], '흐림 ☁️'], [[45, 48], '안개 🌫️'],
  [[51, 53, 55, 56, 57, 61, 63, 65, 66, 67], '비 🌧️'], [[71, 73, 75, 77, 85, 86], '눈 🌨️'],
  [[80, 81, 82], '소나기 🌦️'], [[95, 96, 99], '뇌우 ⛈️']
];
function wxDesc(code) {
  for (const [codes, txt] of WX_CODE) if (codes.includes(code)) return txt;
  return '—';
}
function pmGrade(v, isPm25) {
  if (v == null) return ['—', ''];
  const t = isPm25 ? [15, 35, 75] : [30, 80, 150];
  if (v <= t[0]) return ['좋음', 'pm-good'];
  if (v <= t[1]) return ['보통', 'pm-mid'];
  if (v <= t[2]) return ['나쁨', 'pm-bad'];
  return ['매우나쁨', 'pm-worst'];
}
async function placeWx(p) {
  const fc = await xfetchJson(`https://api.open-meteo.com/v1/forecast?latitude=${p.lat}&longitude=${p.lon}` +
    `&current=temperature_2m,precipitation,weather_code&daily=precipitation_probability_max,temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=Asia%2FSeoul`);
  let air = null;
  try {
    air = await xfetchJson(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${p.lat}&longitude=${p.lon}&current=pm10,pm2_5&timezone=Asia%2FSeoul`);
  } catch (e) { /* 미세먼지만 실패해도 날씨는 표시 */ }
  const cur = fc.current, day = fc.daily;
  const raining = (cur.precipitation || 0) > 0;
  const prob = day && day.precipitation_probability_max ? day.precipitation_probability_max[0] : null;
  const pm10 = air && air.current ? Math.round(air.current.pm10) : null;
  const pm25 = air && air.current ? Math.round(air.current.pm2_5) : null;
  const [g10, c10] = pmGrade(pm10, false);
  const [g25, c25] = pmGrade(pm25, true);
  return `
    <div class="wx">
      <div class="nm">${escapeHtml(p.name)}</div>
      <div class="tp">${Math.round(cur.temperature_2m)}°</div>
      <div class="ln">${wxDesc(cur.weather_code)} · 최고 ${Math.round(day.temperature_2m_max[0])}° 최저 ${Math.round(day.temperature_2m_min[0])}°</div>
      <div class="ln">${raining ? '☔ <b>지금 비 옴</b>' : `비 안 옴${prob != null ? ` (강수확률 ${prob}%)` : ''}`}</div>
      <div class="ln">미세 <span class="${c10}">${g10}${pm10 != null ? ' ' + pm10 : ''}</span> · 초미세 <span class="${c25}">${g25}${pm25 != null ? ' ' + pm25 : ''}</span></div>
    </div>`;
}
async function loadWx() {
  const el = $('#wxBody');
  el.innerHTML = '<div class="muted">불러오는 중…</div>';
  try {
    const [a, b] = await Promise.all([placeWx(S.my), placeWx(S.work)]);
    el.innerHTML = a + b;
  } catch (e) {
    el.innerHTML = '<div class="err">날씨를 불러오지 못했어요. 새로고침 해보세요.</div>';
  }
}

/* ---------- 실시간 교통 (TMAP 키 있으면 소요시간, 없으면 링크) ---------- */
async function loadTraffic() {
  $('#trTitle').textContent = `${S.my.name} → ${S.work.name}`;
  const el = $('#trBody');
  const linkNaver = `https://map.naver.com/p/directions/${S.my.lon},${S.my.lat},${encodeURIComponent(S.my.name)}/${S.work.lon},${S.work.lat},${encodeURIComponent(S.work.name)}/-/car`;
  const links = `
    <a class="linkbtn" href="${linkNaver}" target="_blank" rel="noopener">🗺 네이버 길찾기</a>
    <a class="linkbtn" href="https://m.search.naver.com/search.naver?query=%EC%8B%A4%EC%8B%9C%EA%B0%84%20%EA%B5%90%ED%86%B5%EC%83%81%ED%99%A9" target="_blank" rel="noopener">🚦 교통상황</a>`;
  if (!S.tmapKey) {
    el.innerHTML = `<div class="muted">TMAP 키를 설정(⚙️)하면 실시간 예상 소요시간이 떠요.</div>${links}`;
    return;
  }
  el.innerHTML = '<div class="muted">경로 계산 중…</div>';
  try {
    const r = await fetch('https://apis.openapi.sk.com/tmap/routes?version=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', appKey: S.tmapKey },
      body: JSON.stringify({
        startX: String(S.my.lon), startY: String(S.my.lat),
        endX: String(S.work.lon), endY: String(S.work.lat),
        reqCoordType: 'WGS84GEO', resCoordType: 'WGS84GEO', searchOption: '0'
      })
    });
    if (!r.ok) throw new Error('tmap ' + r.status);
    const j = await r.json();
    const p = j.features && j.features[0] && j.features[0].properties;
    if (!p) throw new Error('no route');
    const min = Math.round(p.totalTime / 60);
    const km = (p.totalDistance / 1000).toFixed(1);
    const won = p.totalFare ? ` · 통행료 ${Number(p.totalFare).toLocaleString()}원` : '';
    el.innerHTML = `
      <div class="big-line">🚗 약 ${min >= 60 ? `${Math.floor(min / 60)}시간 ${min % 60}분` : `${min}분`}</div>
      <div class="muted">${km}km · 실시간 교통 반영${won}</div>${links}`;
  } catch (e) {
    el.innerHTML = `<div class="err">경로 계산 실패 — TMAP 키를 확인해 주세요.</div>${links}`;
  }
}

/* ---------- 버스 도착 (경기 GBIS, 공공데이터 키 필요) ---------- */
function busKeyParam(k) { return k.includes('%') ? k : encodeURIComponent(k); }
function pickList(res, name) {
  const b = res && res.response && res.response.msgBody;
  let v = b ? b[name] : null;
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}
async function loadBus() {
  $('#busTitle').textContent = `${S.busRoute}번 버스 (${S.busStop})`;
  const el = $('#busBody');
  const fallback = `
    <a class="linkbtn" href="https://m.search.naver.com/search.naver?query=${encodeURIComponent(S.busRoute + ' 버스')}" target="_blank" rel="noopener">🔍 ${escapeHtml(S.busRoute)} 버스 검색</a>
    <a class="linkbtn" href="https://www.gbis.go.kr/" target="_blank" rel="noopener">🚌 경기버스정보</a>`;
  if (!S.busKey) {
    el.innerHTML = `<div class="muted">공공데이터포털 키를 설정(⚙️)하면 남은 시간이 바로 떠요.</div>${fallback}`;
    return;
  }
  el.innerHTML = '<div class="muted">도착 정보 조회 중…</div>';
  try {
    const key = busKeyParam(S.busKey);
    const base = 'https://apis.data.go.kr/6410000';
    const [stRes, rtRes] = await Promise.all([
      xfetchJson(`${base}/busstationservice/v2/getBusStationListv2?serviceKey=${key}&keyword=${encodeURIComponent(S.busStop)}&format=json`),
      xfetchJson(`${base}/busrouteservice/v2/getBusRouteListv2?serviceKey=${key}&keyword=${encodeURIComponent(S.busRoute)}&format=json`)
    ]);
    const stations = pickList(stRes, 'busStationList').slice(0, 4);
    const routeIds = new Set(
      pickList(rtRes, 'busRouteList')
        .filter(r => String(r.routeName) === String(S.busRoute))
        .map(r => String(r.routeId))
    );
    if (!stations.length) throw new Error('정류소 검색 결과 없음');
    const rows = [];
    for (const st of stations) {
      try {
        const ar = await xfetchJson(`${base}/busarrivalservice/v2/getBusArrivalListv2?serviceKey=${key}&stationId=${st.stationId}&format=json`);
        for (const a of pickList(ar, 'busArrivalList')) {
          if (routeIds.has(String(a.routeId)) || String(a.routeName || '') === String(S.busRoute)) {
            rows.push({ st, a });
          }
        }
      } catch (e) { /* 정류소 하나 실패는 무시 */ }
    }
    if (!rows.length) {
      el.innerHTML = `<div class="muted">지금은 ${escapeHtml(S.busRoute)}번 도착 정보가 없어요 (운행시간 확인).</div>${fallback}`;
      return;
    }
    el.innerHTML = rows.map(({ st, a }) => {
      const t1 = a.predictTime1 ? `<b>${a.predictTime1}분</b> <small>(${a.locationNo1 || '?'}정류장 전)</small>` : '정보 없음';
      const t2 = a.predictTime2 ? ` · 다음 ${a.predictTime2}분` : '';
      return `<div class="bus-row">
        <span class="st">${escapeHtml(st.stationName)}${st.mobileNo ? ` (${escapeHtml(String(st.mobileNo).trim())})` : ''}</span>
        <span class="tm">${t1}${t2}</span>
      </div>`;
    }).join('') + fallback;
  } catch (e) {
    el.innerHTML = `<div class="err">버스 정보를 불러오지 못했어요 — 키/활용신청 상태를 확인해 주세요.</div>${fallback}`;
  }
}

/* ---------- 오늘 일정 (Google Calendar, OAuth 클라이언트 ID 필요) ---------- */
function getCalToken() {
  try {
    const t = JSON.parse(sessionStorage.getItem('portal:gtok') || 'null');
    if (t && t.exp > Date.now()) return t.t;
  } catch (e) {}
  return null;
}
function loadScript(src) {
  return new Promise((ok, no) => {
    if (document.querySelector(`script[src="${src}"]`)) return ok();
    const s = document.createElement('script');
    s.src = src; s.async = true; s.onload = ok; s.onerror = no;
    document.head.appendChild(s);
  });
}
async function connectCalendar() {
  try {
    await loadScript('https://accounts.google.com/gsi/client');
    const tc = google.accounts.oauth2.initTokenClient({
      client_id: S.gcid,
      scope: 'https://www.googleapis.com/auth/calendar.readonly',
      callback: res => {
        if (res.access_token) {
          sessionStorage.setItem('portal:gtok', JSON.stringify({ t: res.access_token, exp: Date.now() + (res.expires_in - 60) * 1000 }));
          loadCal();
        }
      }
    });
    tc.requestAccessToken();
  } catch (e) {
    $('#calBody').innerHTML = '<div class="err">구글 로그인 스크립트를 불러오지 못했어요.</div>';
  }
}
async function loadCal() {
  const el = $('#calBody');
  if (!S.gcid) {
    el.innerHTML = '<div class="muted">설정(⚙️)에서 Google 클라이언트 ID를 등록하면 오늘 일정이 여기 떠요.</div>' +
      '<a class="linkbtn" href="https://calendar.google.com/" target="_blank" rel="noopener">📅 구글 캘린더 열기</a>';
    return;
  }
  const tok = getCalToken();
  if (!tok) {
    el.innerHTML = '<button class="pri-btn" id="btnCalConnect">구글 계정으로 오늘 일정 보기</button>';
    $('#btnCalConnect').addEventListener('click', connectCalendar);
    return;
  }
  el.innerHTML = '<div class="muted">일정 불러오는 중…</div>';
  try {
    const now = new Date();
    const s = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const e = new Date(s.getTime() + 86400000);
    const u = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?singleEvents=true&orderBy=startTime' +
      '&timeMin=' + encodeURIComponent(s.toISOString()) + '&timeMax=' + encodeURIComponent(e.toISOString());
    const r = await fetch(u, { headers: { Authorization: 'Bearer ' + tok } });
    if (r.status === 401) { sessionStorage.removeItem('portal:gtok'); loadCal(); return; }
    if (!r.ok) throw new Error('calendar ' + r.status);
    const items = (await r.json()).items || [];
    if (!items.length) {
      el.innerHTML = '<div class="muted">오늘은 등록된 일정이 없어요 🎉</div>';
      return;
    }
    el.innerHTML = items.map(ev => {
      let t = '종일';
      if (ev.start && ev.start.dateTime) {
        const d = new Date(ev.start.dateTime);
        t = `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
      }
      return `<div class="ev"><span class="t">${t}</span><span class="s">${escapeHtml(ev.summary || '(제목 없음)')}</span></div>`;
    }).join('');
  } catch (e2) {
    el.innerHTML = '<div class="err">일정을 불러오지 못했어요. 다시 시도해 주세요.</div>';
  }
}

/* ---------- 주요 뉴스 5 (Google News RSS) ---------- */
function timeAgo(d) {
  const m = Math.round((Date.now() - d.getTime()) / 60000);
  if (m < 60) return `${m}분 전`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}시간 전`;
  return `${Math.round(h / 24)}일 전`;
}
function newsItemHtml(title, link, source, pubStr) {
  let ago = '';
  if (pubStr) {
    const d = new Date(pubStr);
    if (!isNaN(d)) ago = timeAgo(d);
  }
  const meta = [source, ago].filter(Boolean).join(' · ');
  return `<a href="${escapeHtml(link)}" target="_blank" rel="noopener">
    <div class="tt">${escapeHtml(title)}</div><div class="mt">${escapeHtml(meta)}</div></a>`;
}
async function loadNews() {
  const el = $('#newsBody');
  el.innerHTML = '<div class="muted">불러오는 중…</div>';
  let liveDone = false;
  // 정적 데이터(아침/장중 갱신)를 먼저 그려두고, 실시간 RSS가 되면 덮어씀
  getPortalData().then(d => {
    if (liveDone || !d || !d.news || !d.news.length) return;
    el.innerHTML = d.news.slice(0, 5).map(n => newsItemHtml(n.title, n.link, n.source, n.pub)).join('') +
      `<small class="hint">${escapeHtml(d.generated_at)} 수집 기준</small>`;
  });
  try {
    const xml = await xfetchText('https://news.google.com/rss?hl=ko&gl=KR&ceid=KR:ko');
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    const items = [...doc.querySelectorAll('item')].slice(0, 5);
    if (!items.length) throw new Error('no items');
    liveDone = true;
    el.innerHTML = items.map(it => newsItemHtml(
      it.querySelector('title')?.textContent || '',
      it.querySelector('link')?.textContent || '#',
      it.querySelector('source')?.textContent || '',
      it.querySelector('pubDate')?.textContent || ''
    )).join('');
  } catch (e) {
    const d = await getPortalData();
    if (d && d.news && d.news.length) return; // 정적 데이터가 이미 표시됨
    el.innerHTML = '<div class="err">뉴스를 불러오지 못했어요.</div>' +
      '<a class="linkbtn" href="https://news.naver.com/" target="_blank" rel="noopener">📰 네이버 뉴스 열기</a>';
  }
}

/* ---------- 증시·환율 (네이버 증권 프록시 + 환율 API) ---------- */
function quoteBox(name, price, chgTxt, dir) {
  const cls = dir > 0 ? 'up' : dir < 0 ? 'down' : 'flat';
  const arrow = dir > 0 ? '▲' : dir < 0 ? '▼' : '·';
  return `<div class="qt"><div class="nm">${escapeHtml(name)}</div>
    <div class="pr">${escapeHtml(price)}</div>
    <div class="ch ${cls}">${arrow} ${escapeHtml(chgTxt)}</div></div>`;
}
function naverQuote(j, name) {
  const price = j.closePrice || '—';
  const diff = String(j.compareToPreviousClosePrice || '');
  const ratio = String(j.fluctuationsRatio || '');
  const dir = ratio.startsWith('-') ? -1 : (parseFloat(ratio) === 0 ? 0 : 1);
  return quoteBox(name, price, `${diff.replace('-', '')} (${ratio}%)`, dir);
}
const MY_DASH_TILE = `<a class="qt" href="https://netbell23.github.io/stocknews/" target="_blank" rel="noopener">
  <div class="nm">내 주식뉴스</div><div class="pr">📊 보기</div><div class="ch flat">시황 그래프</div></a>`;
function staticQuotes(d) {
  if (!d || !d.quotes || !d.quotes.length) return null;
  return d.quotes.map(q => {
    const price = Number(q.price).toLocaleString(undefined, { minimumFractionDigits: q.decimals, maximumFractionDigits: q.decimals });
    const dir = q.pct > 0 ? 1 : q.pct < 0 ? -1 : 0;
    return quoteBox(q.name, `${price}${q.unit === 'pt' ? '' : q.unit}`, `${Math.abs(q.pct).toFixed(2)}%`, dir);
  }).join('') + MY_DASH_TILE + `<small class="hint" style="grid-column:1/-1">${escapeHtml(d.generated_at)} 기준 (아침·장중 자동 갱신)</small>`;
}
async function loadStocks() {
  const el = $('#stBody');
  el.innerHTML = '<div class="muted">불러오는 중…</div>';
  let liveDone = false;
  // 정적 데이터(반도체 전 종목 포함)를 먼저 그리고, 실시간 시세가 되면 덮어씀
  getPortalData().then(d => {
    const html = staticQuotes(d);
    if (!liveDone && html) el.innerHTML = html;
  });
  const jobs = [
    ['코스피', 'https://m.stock.naver.com/api/index/KOSPI/basic'],
    ['코스닥', 'https://m.stock.naver.com/api/index/KOSDAQ/basic'],
    ['삼성전자', 'https://m.stock.naver.com/api/stock/005930/basic'],
    ['SK하이닉스', 'https://m.stock.naver.com/api/stock/000660/basic']
  ];
  const results = await Promise.allSettled(jobs.map(([, u]) => xfetchJson(u)));
  const parts = [];
  results.forEach((r, i) => {
    if (r.status === 'fulfilled' && r.value && r.value.closePrice) parts.push(naverQuote(r.value, jobs[i][0]));
  });
  // 환율은 키·프록시 불필요한 API
  let fxTile = '';
  try {
    const fx = await xfetchJson('https://open.er-api.com/v6/latest/USD');
    if (fx && fx.rates && fx.rates.KRW) {
      fxTile = `<div class="qt"><div class="nm">환율 USD/KRW</div>
        <div class="pr">${Math.round(fx.rates.KRW).toLocaleString()}원</div>
        <div class="ch flat">매매기준율 근사</div></div>`;
    }
  } catch (e) {}
  if (parts.length >= 2) { // 실시간 시세가 제대로 잡혔을 때만 정적 데이터를 덮어씀
    liveDone = true;
    el.innerHTML = parts.join('') + fxTile + MY_DASH_TILE;
    return;
  }
  const d = await getPortalData();
  const html = staticQuotes(d);
  if (html) { el.innerHTML = html; return; }
  el.innerHTML = (fxTile || '<div class="err" style="grid-column:1/-1">시세를 불러오지 못했어요.</div>') +
    '<a class="linkbtn" style="grid-column:1/-1" href="https://m.stock.naver.com/" target="_blank" rel="noopener">📈 네이버 증권 열기</a>';
}

/* ---------- 설정 시트 ---------- */
let pendMy, pendWork;
function openSettings() {
  pendMy = { ...S.my }; pendWork = { ...S.work };
  $('#curMy').textContent = pendMy.name;
  $('#curWork').textContent = pendWork.name;
  $('#fBusStop').value = S.busStop;
  $('#fBusRoute').value = S.busRoute;
  $('#fTmap').value = S.tmapKey;
  $('#fBusKey').value = S.busKey;
  $('#fGcid').value = S.gcid;
  $('#rMy').innerHTML = ''; $('#rWork').innerHTML = '';
  $('#qMy').value = ''; $('#qWork').value = '';
  $('#setBack').classList.add('on');
}
function closeSettings() { $('#setBack').classList.remove('on'); }
// 한국 지명은 OSM Nominatim이 잘 잡음(수지구·분당 등). 실패 시 Open-Meteo 지오코딩으로 폴백.
async function geoCandidates(q) {
  try {
    const j = await xfetchJson(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=jsonv2&accept-language=ko&countrycodes=kr&limit=5`);
    const rs = (j || []).map(r => {
      const parts = String(r.display_name || '').split(',').map(s => s.trim());
      const label = parts.slice(0, 3).join(' · ');
      const name = parts.length >= 2 ? `${parts[1]} ${parts[0]}` : parts[0];
      return { label, name, lat: +r.lat, lon: +r.lon };
    }).filter(r => r.lat && r.lon);
    if (rs.length) return rs;
  } catch (e) { /* 폴백 */ }
  const j = await xfetchJson(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=5&language=ko&format=json`);
  return (j.results || []).map(r => {
    const label = [r.name, r.admin1, r.admin2].filter(Boolean).join(' · ');
    const name = r.admin1 && !r.name.includes(r.admin1) ? `${r.admin1} ${r.name}` : r.name;
    return { label, name, lat: r.latitude, lon: r.longitude };
  });
}
async function geoSearch(q, boxSel, onPick) {
  const box = $(boxSel);
  if (!q.trim()) return;
  box.innerHTML = '<div class="muted">검색 중…</div>';
  try {
    const rs = await geoCandidates(q.trim());
    if (!rs.length) { box.innerHTML = '<div class="muted">검색 결과가 없어요. 동/구 이름으로 검색해 보세요.</div>'; return; }
    box.innerHTML = '';
    rs.forEach(r => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = '📍 ' + r.label;
      b.addEventListener('click', () => {
        onPick({ name: r.name, lat: r.lat, lon: r.lon });
        box.innerHTML = `<div class="muted">✅ 선택됨: ${escapeHtml(r.label)}</div>`;
      });
      box.appendChild(b);
    });
  } catch (e) {
    box.innerHTML = '<div class="err">검색에 실패했어요.</div>';
  }
}
function wireSettings() {
  $('#btnSettings').addEventListener('click', openSettings);
  $('#setClose').addEventListener('click', closeSettings);
  $('#setBack').addEventListener('click', e => { if (e.target === $('#setBack')) closeSettings(); });
  $('#sMy').addEventListener('click', () => geoSearch($('#qMy').value, '#rMy', p => { pendMy = p; $('#curMy').textContent = p.name; }));
  $('#sWork').addEventListener('click', () => geoSearch($('#qWork').value, '#rWork', p => { pendWork = p; $('#curWork').textContent = p.name; }));
  $('#qMy').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); $('#sMy').click(); } });
  $('#qWork').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); $('#sWork').click(); } });
  $('#gpsMy').addEventListener('click', () => {
    if (!navigator.geolocation) return;
    $('#rMy').innerHTML = '<div class="muted">현재 위치 확인 중…</div>';
    navigator.geolocation.getCurrentPosition(
      pos => {
        pendMy = { name: '현재 위치', lat: +pos.coords.latitude.toFixed(5), lon: +pos.coords.longitude.toFixed(5) };
        $('#curMy').textContent = pendMy.name;
        $('#rMy').innerHTML = '<div class="muted">✅ 현재 위치로 설정됨</div>';
      },
      () => { $('#rMy').innerHTML = '<div class="err">위치 권한이 필요해요.</div>'; }
    );
  });
  $('#setSave').addEventListener('click', () => {
    S.my = pendMy; S.work = pendWork;
    S.busStop = $('#fBusStop').value.trim() || DEF_SETTINGS.busStop;
    S.busRoute = $('#fBusRoute').value.trim() || DEF_SETTINGS.busRoute;
    S.tmapKey = $('#fTmap').value.trim();
    S.busKey = $('#fBusKey').value.trim();
    S.gcid = $('#fGcid').value.trim();
    saveSettings();
    closeSettings();
    renderAll();
  });
}

/* ---------- 초기화 ---------- */
function renderAll() {
  loadWx(); loadTraffic(); loadBus(); loadCal(); loadNews(); loadStocks();
}
function init() {
  tick();
  setInterval(tick, 30 * 1000);
  $('#searchForm').addEventListener('submit', e => {
    e.preventDefault();
    const q = $('#q').value.trim();
    if (q) window.open('https://m.search.naver.com/search.naver?query=' + encodeURIComponent(q), '_blank');
  });
  document.querySelectorAll('[data-refresh]').forEach(b => {
    b.addEventListener('click', () => {
      ({ wx: loadWx, traffic: loadTraffic, bus: loadBus, news: loadNews, stocks: loadStocks })[b.dataset.refresh]();
    });
  });
  wireSettings();
  renderAll();
}
init();
