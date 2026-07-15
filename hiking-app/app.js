/* =========================================================================
   두마음 산악회 — 산행 안내·기록 + 단톡 모바일 웹앱
   - 지도/GPS: Leaflet + OpenStreetMap (API 키 불필요)
   - 저장: localStorage
   - 단톡: WebSocket 서버 있으면 실시간 연결, 없으면 BroadcastChannel+localStorage 폴백
   ========================================================================= */
'use strict';

/* ---------- 유틸 ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem('sanbeot:' + k)) ?? d; } catch { return d; } },
  set(k, v) { localStorage.setItem('sanbeot:' + k, JSON.stringify(v)); },
  del(k) { localStorage.removeItem('sanbeot:' + k); },
};

function toast(msg) {
  let t = $('#toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._tm); t._tm = setTimeout(() => t.classList.remove('show'), 2200);
}

function haversine(a, b) {
  const R = 6371000, toR = d => d * Math.PI / 180;
  const dLat = toR(b.lat - a.lat), dLng = toR(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a.lat)) * Math.cos(toR(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}
const fmtDist = m => m >= 1000 ? (m / 1000).toFixed(2) + ' km' : Math.round(m) + ' m';
const fmtDistN = m => m >= 1000 ? (m / 1000).toFixed(2) : Math.round(m);
const fmtDistU = m => m >= 1000 ? 'km' : 'm';
function fmtDur(ms) {
  const s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
  return (h ? h + ':' : '') + String(m).padStart(h ? 2 : 1, '0') + ':' + String(ss).padStart(2, '0');
}
function fmtPace(ms, meters) {
  if (meters < 30 || ms < 1000) return '--\'--"';
  const secPerKm = (ms / 1000) / (meters / 1000);
  const m = Math.floor(secPerKm / 60), s = Math.round(secPerKm % 60);
  return `${m}'${String(s).padStart(2, '0')}"`;
}
function relTime(ts) {
  const d = (Date.now() - ts) / 1000;
  if (d < 60) return '방금';
  if (d < 3600) return Math.floor(d / 60) + '분 전';
  if (d < 86400) return Math.floor(d / 3600) + '시간 전';
  const dt = new Date(ts);
  return `${dt.getMonth() + 1}/${dt.getDate()}`;
}
function fmtDate(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

/* =========================================================================
   프로필
   ========================================================================= */
const COLORS = ['#2e8b4f', '#3b82f6', '#e5484d', '#f0a020', '#8b5cf6', '#0ea5a4', '#ec4899', '#64748b'];
let profile = store.get('profile', null);
const isFirstRun = !profile;
function randomGuestProfile() {
  return { id: uid(), name: '두마음' + Math.floor(Math.random() * 9000 + 1000), color: COLORS[Math.floor(Math.random()*COLORS.length)], authType: 'guest' };
}
function ensureProfile() {
  if (!profile) { profile = randomGuestProfile(); store.set('profile', profile); }
}
ensureProfile();

/* =========================================================================
   로그인 (Firebase Auth — Google) / 게스트
   ========================================================================= */
let fbAuth = null, fbDb = null;
function firebaseReady() {
  return typeof firebase !== 'undefined' && typeof FIREBASE_CONFIG !== 'undefined' && FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY';
}
try {
  if (firebaseReady()) {
    firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth = firebase.auth();
    if (firebase.firestore) fbDb = firebase.firestore();
  }
} catch (e) { console.warn('Firebase 초기화 실패', e); }

function applyAuthUser(user, kind) {
  profile.id = user.uid;
  profile.name = user.displayName || profile.name;
  profile.photoURL = user.photoURL || null;
  profile.email = user.email || null;
  profile.authType = kind;
  store.set('profile', profile);
}

// 게스트도 Firebase 익명 인증으로 로그인시켜 랭킹(Firestore)에 안전하게 기록을 올릴 수 있게 한다.
// (Firestore 보안 규칙이 request.auth.uid == 문서id 를 요구하므로, 실제 firebase 세션이 있어야 본인 기록을 쓸 수 있다)
async function ensureFirebaseSession() {
  if (!fbAuth) return null;
  // 모바일에서는 팝업 로그인이 자주 막혀서 signInWithRedirect를 쓴다 —
  // 로그인 성공 시 페이지 전체가 이동했다가 돌아오므로, 여기서 그 결과를 받아 처리한다.
  try {
    const result = await fbAuth.getRedirectResult();
    if (result && result.user) {
      const providerId = result.credential && result.credential.providerId;
      const kind = providerId === 'apple.com' ? 'apple' : providerId === 'google.com' ? 'google' : null;
      if (kind) {
        applyAuthUser(result.user, kind);
        if (currentTab === 'me') renderProfile();
        toast(`${profile.name}님, 환영해요 👋`);
      }
    }
  } catch (e) {
    console.error('리다이렉트 로그인 처리 실패', e);
    if (e.code && e.code !== 'auth/no-auth-event') alert(`로그인 처리 실패: [${e.code}] ${e.message || e}`);
  }
  return new Promise(resolve => {
    const unsub = fbAuth.onAuthStateChanged(async user => {
      unsub();
      try {
        if (!user) user = (await fbAuth.signInAnonymously()).user;
        if (profile.authType === 'guest' || !profile.authType) {
          profile.id = user.uid;
          store.set('profile', profile);
        }
        resolve(user);
      } catch (e) { console.warn('익명 로그인 실패', e); resolve(null); }
    });
  });
}

const AUTH_LABELS = { google: '🔵 Google 계정', apple: '⚫ Apple 계정', guest: '👤 게스트 모드' };
function openLoginSheet() {
  const canLogin = firebaseReady();
  const sdkLoaded = typeof firebase !== 'undefined';
  openSheet(`
    <h2>🥾 두마음 산악회에 오신 걸 환영해요</h2>
    <div class="muted" style="font-size:13px;margin-bottom:18px;line-height:1.5">로그인하면 다음에 다시 접속해도 같은 계정으로 알아볼 수 있고, 랭킹에도 이름이 표시돼요. 로그인 없이 게스트로도 바로 쓸 수 있어요.</div>
    ${canLogin ? '' : `<div class="card" style="background:#fde8e8;box-shadow:none;padding:10px 12px;margin-bottom:14px;color:#c0392b;font-size:12px;font-weight:700">
      ⚠️ 로그인이 지금 안 돼요 (${sdkLoaded ? 'Firebase 설정 문제' : 'Firebase 스크립트 로딩 실패 — 광고차단·보안앱·네트워크 필터 의심'})
    </div>`}
    <button class="btn btn-block" style="background:#fff;border:1.5px solid var(--line);color:var(--ink);margin-bottom:10px" onclick="loginWithGoogle()" ${canLogin ? '' : 'disabled'}>🔵 Google로 계속하기</button>
    <button class="btn btn-block" style="background:#000;color:#fff;margin-bottom:10px" onclick="loginWithApple()" ${canLogin ? '' : 'disabled'}>🍎 Apple로 계속하기</button>
    <button class="btn btn-ghost btn-block" onclick="continueAsGuest()">👤 게스트로 시작하기</button>
  `);
}
function continueAsGuest() { closeSheet(); }
function getAuthProvider(kind) {
  if (kind === 'google') return new firebase.auth.GoogleAuthProvider();
  if (kind === 'apple') {
    const p = new firebase.auth.OAuthProvider('apple.com');
    p.addScope('email'); p.addScope('name');
    return p;
  }
  return null;
}
async function loginWithProvider(kind) {
  if (!fbAuth) { alert('로그인이 아직 설정되지 않았어요 (fbAuth 없음)'); return; }
  // 모바일 브라우저는 팝업이 자주 막혀서 리다이렉트 방식 사용 — 성공하면 페이지가
  // 통째로 이동했다가 돌아오고, 이후 처리는 ensureFirebaseSession()의 getRedirectResult에서 한다.
  try {
    await fbAuth.signInWithRedirect(getAuthProvider(kind));
    // 정상이면 여기 도달하기 전에 페이지가 이동합니다. 만약 이 아래 줄까지 실행됐다면
    // 리다이렉트 자체가 시작되지 않았다는 뜻이라 진단용으로 alert를 띄웁니다.
    alert('로그인 페이지로 이동하지 못했어요 (signInWithRedirect가 조용히 끝남). 브라우저의 리다이렉트/쿠키 차단 설정을 확인해주세요.');
  } catch (e) {
    console.error(e);
    alert(`로그인 실패: [${e.code || '코드없음'}] ${e.message || e}`);
  }
}
function loginWithGoogle() { return loginWithProvider('google'); }
function loginWithApple() { return loginWithProvider('apple'); }
async function logout() {
  if (profile.authType !== 'guest' && fbAuth) { try { await fbAuth.signOut(); } catch {} }
  profile = randomGuestProfile();
  store.set('profile', profile);
  await ensureFirebaseSession();
  renderProfile();
  toast('로그아웃했어요 (게스트 모드)');
  syncLeaderboard();
}

/* =========================================================================
   산 데이터 (안내)
   ========================================================================= */
const MOUNTAINS = [
  // 산림청 선정 100대 명산 — 상세 정보가 있는 대표 명산
  { id:'bukhan', name:'북한산', emoji:'⛰️', h:836, region:'서울·경기', level:'mid', lat:37.6588, lng:126.9779,
    courses:['우이동→백운대 (4.5km)','북한산성→대남문 (6km)'], desc:'서울 도심에서 가장 가까운 명산. 백운대 정상에서 서울 시내 조망이 일품.', time:'4~5시간' },
  { id:'jiri', name:'지리산', emoji:'🏔️', h:1915, region:'전남·경남·전북', level:'hard', lat:35.3370, lng:127.7305,
    courses:['중산리→천왕봉 (5.4km)','성삼재→노고단 (4km)','화대종주 (32km)'], desc:'남한 내륙 최고봉. 천왕봉 일출과 능선 종주가 유명.', time:'당일~2박3일' },
  { id:'seorak', name:'설악산', emoji:'🗻', h:1708, region:'강원 속초·양양', level:'hard', lat:38.1196, lng:128.4655,
    courses:['소공원→대청봉 (16km)','오색→대청봉 (5km)','공룡능선'], desc:'기암절벽과 단풍의 명산. 대청봉·공룡능선 코스가 대표적.', time:'당일~1박' },
  { id:'halla', name:'한라산', emoji:'🌋', h:1947, region:'제주', level:'hard', lat:33.3617, lng:126.5292,
    courses:['성판악→백록담 (9.6km)','관음사 코스 (8.7km)','영실 코스 (5.8km)'], desc:'남한 최고봉. 백록담 등반은 성판악·관음사 코스만 가능 (사전예약 필요).', time:'7~9시간' },
  { id:'gwanak', name:'관악산', emoji:'⛰️', h:632, region:'서울·과천', level:'mid', lat:37.4427, lng:126.9646,
    courses:['서울대→연주대 (3.5km)','과천향교→연주대'], desc:'서울 남부의 바위산. 연주대 풍경과 다양한 능선길이 매력.', time:'3~4시간' },
  { id:'sobaek', name:'소백산', emoji:'🏔️', h:1440, region:'충북·경북', level:'mid', lat:36.9560, lng:128.4850,
    courses:['희방사→비로봉 (5.6km)','삼가→비로봉'], desc:'완만한 능선과 봄 철쭉, 겨울 상고대로 유명한 육산.', time:'5~6시간' },
  { id:'deogyu', name:'덕유산', emoji:'🗻', h:1614, region:'전북·경남', level:'mid', lat:35.8597, lng:127.7470,
    courses:['곤돌라→향적봉 (0.6km)','삼공리→향적봉 (8.5km)'], desc:'곤돌라로 쉽게 오르는 향적봉. 겨울 설경이 절경.', time:'1~6시간' },
  { id:'taebaek', name:'태백산', emoji:'⛰️', h:1567, region:'강원 태백', level:'easy', lat:37.0964, lng:128.9156,
    courses:['유일사→천제단 (4km)','당골→천제단'], desc:'완만한 길과 주목 군락, 겨울 눈꽃축제로 유명. 초보자에게 추천.', time:'3~4시간' },
  { id:'mudeung', name:'무등산', emoji:'⛰️', h:1187, region:'광주·전남', level:'mid', lat:35.1342, lng:126.9885,
    courses:['증심사→서석대 (4km)','원효사→입석대'], desc:'주상절리 입석대·서석대가 천연기념물. 광주의 진산.', time:'4~5시간' },
  // 나머지 91개 명산 (좌표는 정상부 기준 근사치)
  { id:'gari', name:'가리산', h:1050.9, region:'강원', lat:37.8283, lng:127.9308 },
  { id:'gariwang', name:'가리왕산', h:1561.9, region:'강원', lat:37.4856, lng:128.5661 },
  { id:'gaya', name:'가야산', h:1432.6, region:'경북·경남', lat:35.7797, lng:128.1224 },
  { id:'gaji', name:'가지산', h:1240.9, region:'울산·경북·경남', lat:35.6350, lng:129.0578 },
  { id:'gamak', name:'감악산', h:674.9, region:'경기', lat:37.9170, lng:126.9470 },
  { id:'gangcheon', name:'강천산', h:583.7, region:'전북·전남', lat:35.4430, lng:127.0790 },
  { id:'gyeryong', name:'계룡산', h:846.5, region:'대전·충남', lat:36.3480, lng:127.2120 },
  { id:'gyebang', name:'계방산', h:1579.1, region:'강원', lat:37.7190, lng:128.4460 },
  { id:'gongjak', name:'공작산', h:887.4, region:'강원', lat:37.7340, lng:128.1870 },
  { id:'gubyeong', name:'구병산', h:876.3, region:'경북·충북', lat:36.4840, lng:127.8590 },
  { id:'geumsan', name:'금산', h:704.9, region:'경남', lat:34.7880, lng:127.9140 },
  { id:'geumsu', name:'금수산', h:1015.8, region:'충북', lat:36.9720, lng:128.2350 },
  { id:'geumo', name:'금오산', h:976.5, region:'경북', lat:36.1570, lng:128.3360 },
  { id:'geumjeong', name:'금정산', h:800.8, region:'부산·경남', lat:35.2430, lng:129.0620 },
  { id:'gitdae', name:'깃대봉', h:360.7, region:'전남', lat:34.7500, lng:127.8500 },
  { id:'namsan-gyeongju', name:'남산(경주)', h:495.1, region:'경북', lat:35.7900, lng:129.2250 },
  { id:'naeyeon', name:'내연산', h:711.3, region:'경북', lat:36.2530, lng:129.4100 },
  { id:'naejang', name:'내장산', h:763.5, region:'전북', lat:35.4780, lng:126.8890 },
  { id:'daedun', name:'대둔산', h:878.9, region:'충남·전북', lat:36.1450, lng:127.4370 },
  { id:'daeam', name:'대암산', h:1312.6, region:'강원', lat:38.2350, lng:128.1280 },
  { id:'daeya', name:'대야산', h:931, region:'경북·충북', lat:36.5590, lng:127.9120 },
  { id:'deokseung', name:'덕숭산', h:495.2, region:'충남', lat:36.6860, lng:126.7400 },
  { id:'deokhang', name:'덕항산', h:1072.9, region:'강원', lat:37.2630, lng:129.0700 },
  { id:'dorak', name:'도락산', h:965.3, region:'충북', lat:36.9160, lng:128.1660 },
  { id:'dobong', name:'도봉산', h:740.2, region:'서울·경기', lat:37.6890, lng:127.0170 },
  { id:'duryun', name:'두륜산', h:700, region:'전남', lat:34.4660, lng:126.6010 },
  { id:'duta', name:'두타산', h:1357, region:'강원', lat:37.2810, lng:129.0430 },
  { id:'mani', name:'마니산', h:472.1, region:'인천', lat:37.6050, lng:126.3240 },
  { id:'mai', name:'마이산', h:687.4, region:'전북', lat:35.7860, lng:127.3790 },
  { id:'myeongseong', name:'명성산', h:922, region:'강원·경기', lat:38.2380, lng:127.3120 },
  { id:'myeongji', name:'명지산', h:1252.3, region:'경기', lat:37.7830, lng:127.3720 },
  { id:'moak', name:'모악산', h:795.2, region:'전북', lat:35.7800, lng:127.0750 },
  { id:'muhak', name:'무학산', h:761.4, region:'경남', lat:35.1940, lng:128.5450 },
  { id:'mireuk', name:'미륵산', h:458.4, region:'경남', lat:34.8220, lng:128.4170 },
  { id:'minjuji', name:'민주지산', h:1241.7, region:'충북·전북·경북', lat:36.0430, lng:127.8670 },
  { id:'bangjang', name:'방장산', h:733.6, region:'전남·전북', lat:35.4690, lng:126.6380 },
  { id:'bangtae', name:'방태산', h:1445.7, region:'강원', lat:38.0010, lng:128.3960 },
  { id:'baekdeok', name:'백덕산', h:1350.1, region:'강원', lat:37.4170, lng:128.3110 },
  { id:'baekam', name:'백암산', h:741.2, region:'전북·전남', lat:35.4750, lng:126.8330 },
  { id:'baekun-gwangyang', name:'백운산(광양)', h:1222.2, region:'전남', lat:35.1000, lng:127.5120 },
  { id:'baekun-wonju', name:'백운산(원주)', h:883.5, region:'강원', lat:37.2670, lng:128.0880 },
  { id:'baekun-pocheon', name:'백운산(포천)', h:903, region:'경기·강원', lat:37.8880, lng:127.3540 },
  { id:'byeonsan', name:'변산', h:459, region:'전북', lat:35.6670, lng:126.5480 },
  { id:'biseul', name:'비슬산', h:1083.4, region:'대구·경북', lat:35.6900, lng:128.5350 },
  { id:'samak', name:'삼악산', h:655.8, region:'강원', lat:37.8250, lng:127.7000 },
  { id:'seodae', name:'서대산', h:904.1, region:'충남·충북', lat:36.3220, lng:127.5540 },
  { id:'seonun', name:'선운산', h:334.7, region:'전북', lat:35.5020, lng:126.5730 },
  { id:'seongin', name:'성인봉', h:986.5, region:'경북(울릉)', lat:37.5240, lng:130.8670 },
  { id:'soyo', name:'소요산', h:587.5, region:'경기', lat:37.9430, lng:127.0580 },
  { id:'songni', name:'속리산', h:1058.4, region:'경북·충북', lat:36.5420, lng:127.8700 },
  { id:'sinbul', name:'신불산', h:1159.3, region:'울산', lat:35.5600, lng:129.0580 },
  { id:'yeonhwa', name:'연화산', h:524, region:'경남', lat:35.0410, lng:128.2400 },
  { id:'odae', name:'오대산', h:1565.4, region:'강원', lat:37.7980, lng:128.5390 },
  { id:'obong', name:'오봉산', h:777.9, region:'강원', lat:37.9170, lng:127.7350 },
  { id:'yongmun', name:'용문산', h:1157.1, region:'경기', lat:37.5670, lng:127.5160 },
  { id:'yonghwa', name:'용화산', h:877.8, region:'강원', lat:38.0330, lng:127.7500 },
  { id:'unmun', name:'운문산', h:1195.1, region:'경북·경남', lat:35.5990, lng:128.9720 },
  { id:'unak', name:'운악산', h:934.7, region:'경기', lat:37.8880, lng:127.5140 },
  { id:'unjang', name:'운장산', h:1125.8, region:'전북', lat:35.8120, lng:127.3190 },
  { id:'worak', name:'월악산', h:1095.3, region:'충북', lat:36.8540, lng:128.0990 },
  { id:'wolchul', name:'월출산', h:810.7, region:'전남', lat:34.7560, lng:126.6930 },
  { id:'yumyeong', name:'유명산', h:864, region:'경기', lat:37.5830, lng:127.4370 },
  { id:'eungbong', name:'응봉산', h:999.7, region:'강원·경북', lat:37.0780, lng:129.2210 },
  { id:'jangan', name:'장안산', h:1237.4, region:'전북', lat:35.6050, lng:127.5450 },
  { id:'jaeyak', name:'재약산', h:1119.1, region:'경남·울산', lat:35.5310, lng:129.0580 },
  { id:'jeoksang', name:'적상산', h:1030.6, region:'전북', lat:35.9050, lng:127.7510 },
  { id:'jeombong', name:'점봉산', h:1426, region:'강원', lat:38.1280, lng:128.4400 },
  { id:'jogye', name:'조계산', h:887.3, region:'전남', lat:34.9840, lng:127.3280 },
  { id:'juwang', name:'주왕산', h:722.1, region:'경북', lat:36.3540, lng:129.1840 },
  { id:'juheul', name:'주흘산', h:1108.4, region:'경북', lat:36.7290, lng:128.0580 },
  { id:'jiri-sacheon', name:'지리산(사천)', h:399.3, region:'경남', lat:35.0500, lng:128.0300 },
  { id:'cheongwan', name:'천관산', h:724.3, region:'전남', lat:34.5600, lng:126.9070 },
  { id:'cheonma', name:'천마산', h:810.3, region:'경기', lat:37.6100, lng:127.2590 },
  { id:'cheonseong', name:'천성산', h:920.2, region:'경남', lat:35.3990, lng:129.0580 },
  { id:'cheontae', name:'천태산', h:715.2, region:'충북·충남', lat:36.1450, lng:127.5730 },
  { id:'cheongryang', name:'청량산', h:869.7, region:'경북', lat:36.8340, lng:128.9170 },
  { id:'chuwol', name:'추월산', h:731.2, region:'전남·전북', lat:35.4630, lng:127.0620 },
  { id:'chukryeong', name:'축령산', h:887.1, region:'경기', lat:37.7560, lng:127.3230 },
  { id:'chiak', name:'치악산', h:1282, region:'강원', lat:37.3650, lng:128.0590 },
  { id:'chilgap', name:'칠갑산', h:559.7, region:'충남', lat:36.4270, lng:126.8540 },
  { id:'taehwa', name:'태화산', h:1027.5, region:'강원·충북', lat:37.1320, lng:128.4150 },
  { id:'palgong', name:'팔공산', h:1192.3, region:'대구·경북', lat:35.9720, lng:128.6880 },
  { id:'palbong', name:'팔봉산', h:328.2, region:'강원', lat:37.7440, lng:127.8360 },
  { id:'palyoung', name:'팔영산', h:606.9, region:'전남', lat:34.5750, lng:127.3860 },
  { id:'hwaak', name:'화악산', h:1468.3, region:'경기·강원', lat:38.0010, lng:127.5070 },
  { id:'hwawang', name:'화왕산', h:757.7, region:'경남', lat:35.5170, lng:128.5980 },
  { id:'hwangmae', name:'황매산', h:1113.1, region:'경남', lat:35.5500, lng:128.0780 },
  { id:'hwangseok', name:'황석산', h:1192.5, region:'경남', lat:35.5600, lng:127.6800 },
  { id:'hwangak', name:'황악산', h:1111.4, region:'경북', lat:36.0780, lng:127.8840 },
  { id:'hwangjang', name:'황장산', h:1078.9, region:'경북', lat:36.8870, lng:128.2530 },
  { id:'huiyang', name:'희양산', h:996.4, region:'경북·충북', lat:36.7660, lng:127.9840 },
];
const LEVELS = { easy: '쉬움', mid: '보통', hard: '어려움' };
// 높이 기반 기본값 채우기 (상세 정보가 없는 산은 자동으로 등급·예상시간·설명을 부여)
function applyMountainDefaults(m) {
  if (m.h != null) {
    if (!m.level) m.level = m.h < 700 ? 'easy' : m.h < 1300 ? 'mid' : 'hard';
    if (!m.time) m.time = m.h < 700 ? '2~3시간' : m.h < 1300 ? '3~5시간' : '5~8시간';
  } else {
    if (!m.level) m.level = 'mid';
    if (!m.time) m.time = '코스에 따라 다름';
  }
  if (!m.emoji) m.emoji = m.level === 'hard' ? '🏔️' : m.level === 'mid' ? '⛰️' : '🌲';
  if (!m.courses) m.courses = ['주등산로 → 정상'];
  if (!m.desc) {
    m.desc = m.source === 'community'
      ? `${m.addedByName || '회원'}님이 등록한 산입니다.`
      : m.source === 'extra'
        ? `${m.region || ''} 지역에서 즐겨 찾는 등산 코스입니다.`
        : `산림청이 선정한 100대 명산 중 하나로, ${m.region} 지역을 대표하는 산입니다.`;
  }
  return m;
}
for (const m of MOUNTAINS) applyMountainDefaults(m);

// 100대 명산 외에, 도심 근교에서 자주 찾는 인기 등산 코스 (완등맵 진행률에는 포함되지 않음 — 산안내·검색·체크에서만 노출)
const EXTRA_MOUNTAINS = [
  { id:'cheonggye', name:'청계산', h:618, region:'서울·경기 성남', lat:37.4270, lng:127.0556, source:'extra' },
  { id:'gwangyo', name:'광교산', h:582, region:'경기 수원·용인', lat:37.3396, lng:127.0353, source:'extra' },
  { id:'acha', name:'아차산', h:295, region:'서울 광진', lat:37.5554, lng:127.1010, source:'extra' },
  { id:'inwang', name:'인왕산', h:338, region:'서울 종로', lat:37.5805, lng:126.9585, source:'extra' },
  { id:'ansan-seoul', name:'안산', h:296, region:'서울 서대문', lat:37.5763, lng:126.9276, source:'extra' },
  { id:'umyeon', name:'우면산', h:293, region:'서울 서초', lat:37.4720, lng:126.9989, source:'extra' },
  { id:'daemo', name:'대모산', h:293, region:'서울 강남', lat:37.4830, lng:127.0658, source:'extra' },
  { id:'yongma', name:'용마산', h:348, region:'서울 중랑', lat:37.5680, lng:127.0940, source:'extra' },
  { id:'surak', name:'수락산', h:638, region:'서울 노원·경기 의정부', lat:37.6820, lng:127.0800, source:'extra' },
  { id:'bulam', name:'불암산', h:508, region:'서울 노원', lat:37.6570, lng:127.0740, source:'extra' },
  { id:'geomdan', name:'검단산', h:657, region:'경기 하남', lat:37.5150, lng:127.2460, source:'extra' },
  { id:'namhan', name:'남한산', h:522, region:'경기 하남·성남·광주', lat:37.4783, lng:127.1817, source:'extra' },
  { id:'yebong', name:'예봉산', h:683, region:'경기 남양주', lat:37.5980, lng:127.2900, source:'extra' },
  { id:'ungil', name:'운길산', h:610, region:'경기 남양주', lat:37.5920, lng:127.3200, source:'extra' },
  { id:'jangsan-busan', name:'장산', h:634, region:'부산 해운대', lat:35.1890, lng:129.1800, source:'extra' },
];
for (const m of EXTRA_MOUNTAINS) applyMountainDefaults(m);

// 회원이 직접 등록한 산 (Firestore customMountains 컬렉션, 미설정 시 이 기기에만 저장)
let CUSTOM_MOUNTAINS = [];
function allMountainsPool() { return [...MOUNTAINS, ...EXTRA_MOUNTAINS, ...CUSTOM_MOUNTAINS]; }
function findMountain(id) { return allMountainsPool().find(m => m.id === id); }

async function loadCustomMountains() {
  const local = store.get('customMountains', []);
  local.forEach(m => { m.source = 'community'; applyMountainDefaults(m); });
  if (!fbDb) { CUSTOM_MOUNTAINS = local; return; }
  try {
    const snap = await fbDb.collection('customMountains').get();
    const remote = snap.docs.map(d => applyMountainDefaults({ id: 'c-' + d.id, source: 'community', ...d.data() }));
    // 이 기기에서만 로컬로 저장했던(Firestore 설정 전) 항목 중 원격에 없는 것만 같이 보여준다
    const remoteIds = new Set(remote.map(m => m.id));
    CUSTOM_MOUNTAINS = remote.concat(local.filter(m => !remoteIds.has(m.id)));
  } catch (e) { console.warn('회원 등록 산 불러오기 실패', e); CUSTOM_MOUNTAINS = local; }
}
function openAddMountainSheet() {
  openSheet(`
    <h2>➕ 산 등록하기</h2>
    <div class="muted" style="font-size:12px;margin-bottom:14px">100대 명산 목록에 없는 산도 등록해서 검색·체크할 수 있어요.${fbDb ? ' 등록하면 다른 회원도 검색할 수 있어요.' : ''}</div>
    <div class="field"><label>산 이름</label><input id="newMtnName" placeholder="예: 청계산" maxlength="20"></div>
    <div class="field"><label>지역 (선택)</label><input id="newMtnRegion" placeholder="예: 서울·경기" maxlength="30"></div>
    <div class="muted" style="font-size:11px;margin:-6px 0 14px">${lastFix ? '📍 현재 위치를 좌표로 함께 등록해요 (완등맵 지도에는 표시되지 않고, 검색·체크에서만 쓰여요).' : '📍 GPS 위치를 못 찾아서 좌표 없이 등록돼요 — 검색·체크는 그대로 가능해요.'}</div>
    <button class="btn btn-primary btn-block" onclick="saveCustomMountain()">등록하기</button>
  `);
}
async function saveCustomMountain() {
  const name = $('#newMtnName').value.trim();
  if (!name) { toast('산 이름을 입력해주세요'); return; }
  const region = $('#newMtnRegion').value.trim();
  const data = { name, region: region || null, lat: lastFix ? lastFix.lat : null, lng: lastFix ? lastFix.lng : null };
  try {
    let m;
    if (fbDb && fbAuth && fbAuth.currentUser) {
      const ref = await fbDb.collection('customMountains').add({
        ...data, addedBy: fbAuth.currentUser.uid, addedByName: profile.name, createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      m = applyMountainDefaults({ id: 'c-' + ref.id, source: 'community', addedByName: profile.name, ...data });
    } else {
      m = applyMountainDefaults({ id: 'local-' + uid(), source: 'community', addedByName: profile.name, ...data });
      const local = store.get('customMountains', []);
      local.push(m);
      store.set('customMountains', local);
    }
    CUSTOM_MOUNTAINS.push(m);
    closeSheet();
    toast(`✅ ${m.name} 등록 완료!`);
    if (currentTab === 'guide') renderGuideList();
    const listEl = $('#mtnChecklist');
    if (listEl) { listEl.innerHTML = renderChecklistRows(checklistQuery); bindChecklistRows(); }
  } catch (e) { console.error(e); toast('등록에 실패했어요'); }
}

/* =========================================================================
   라우팅 (하단 탭)
   ========================================================================= */
let currentTab = 'home';
function switchTab(tab, opts) {
  opts = opts || {};
  const changed = tab !== currentTab;
  currentTab = tab;
  $('#chatScreen').classList.remove('active'); // 단톡방이 열려있으면 탭 전환 시 닫아준다
  $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + tab));
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  if (!opts.fromHistory && changed) pushNavState('tab', tab);
  if (tab === 'home') renderHome();
  if (tab === 'map') setTimeout(() => map && map.invalidateSize(), 60);
  if (tab === 'records') renderRecords();
  if (tab === 'guide') renderGuide();
  if (tab === 'chat') renderRooms();
  if (tab === 'me') renderProfile();
  if (tab === 'scratch') {
    if (!scratchMap) initScratchMap();
    refreshScratchData();
    setTimeout(() => { scratchMap.invalidateSize(); renderScratchMarkers(); drawScratchLayer(); }, 60);
  }
}

/* =========================================================================
   뒤로가기 — 폰/브라우저 뒤로가기 버튼이 앱을 벗어나지 않고 이전 화면(탭/시트/단톡방)으로 이동
   ========================================================================= */
let suppressHistoryPush = false;
function pushNavState(navType, tab) {
  if (suppressHistoryPush) return;
  history.pushState({ navType, tab: tab || currentTab }, '');
}
window.addEventListener('popstate', e => {
  if ($('#sheetBackdrop').classList.contains('active')) {
    $('#sheetBackdrop').classList.remove('active');
    return;
  }
  if ($('#chatScreen').classList.contains('active')) {
    $('#chatScreen').classList.remove('active');
    activeRoom = null;
    renderRooms();
    return;
  }
  const tab = (e.state && e.state.tab) || 'home';
  if (tab !== currentTab) switchTab(tab, { fromHistory: true });
});

/* =========================================================================
   지도
   ========================================================================= */
let map, meMarker, meAccuracy, trackLine, watchId = null;
const TILES = {
  street: { url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attr: '© OpenStreetMap', max: 19 },
  topo:   { url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', attr: '© OpenTopoMap', max: 17 },
};
let curTile = 'topo', tileLayer;

function initMap() {
  map = L.map('map', { zoomControl: false, attributionControl: false }).setView([37.6588, 126.9779], 13);
  L.control.attribution({ position: 'bottomleft', prefix: false }).addTo(map);
  setTile(curTile);
  trackLine = L.polyline([], { color: '#e5484d', weight: 5, opacity: .85, lineCap: 'round', lineJoin: 'round' }).addTo(map);
  startGeolocation();
  restoreActiveRecording();
}
function setTile(name) {
  curTile = name;
  if (tileLayer) map.removeLayer(tileLayer);
  const t = TILES[name];
  tileLayer = L.tileLayer(t.url, { maxZoom: t.max, attribution: t.attr, subdomains: 'abc' }).addTo(map);
}

let lastFix = null, follow = true;
function startGeolocation() {
  if (!navigator.geolocation) { $('#gpsText').textContent = 'GPS 미지원'; return; }
  watchId = navigator.geolocation.watchPosition(onPosition, onGeoError, {
    enableHighAccuracy: true, maximumAge: 1000, timeout: 15000,
  });
}
function onGeoError(e) {
  $('#gpsText').textContent = e.code === 1 ? '위치 권한 필요' : 'GPS 신호 약함';
  $('#gpsDot').classList.remove('live');
}
function onPosition(pos) {
  const { latitude: lat, longitude: lng, accuracy, altitude } = pos.coords;
  const fix = { lat, lng, acc: accuracy, alt: altitude, t: pos.timestamp || Date.now() };
  lastFix = fix;
  $('#gpsDot').classList.add('live');
  $('#gpsText').textContent = `GPS 정확도 ±${Math.round(accuracy)}m`;

  const ll = [lat, lng];
  if (!meMarker) {
    meMarker = L.circleMarker(ll, { radius: 8, color: '#fff', weight: 3, fillColor: '#1f6b3a', fillOpacity: 1 }).addTo(map);
    meAccuracy = L.circle(ll, { radius: accuracy, color: '#2e8b4f', weight: 1, fillColor: '#2e8b4f', fillOpacity: .12 }).addTo(map);
    map.setView(ll, 16);
  } else {
    meMarker.setLatLng(ll);
    meAccuracy.setLatLng(ll).setRadius(accuracy);
  }
  if (follow && currentTab === 'map') map.panTo(ll, { animate: true, duration: .4 });

  if (rec.active) recordPoint(fix);
}

/* =========================================================================
   산행 기록 (Recording)
   ========================================================================= */
const rec = {
  active: false, paused: false, points: [], dist: 0, gain: 0, loss: 0,
  startT: 0, elapsed: 0, pauseT: 0, lastAlt: null, maxAlt: -Infinity, minAlt: Infinity,
};
let recTimer = null;

function recordPoint(fix) {
  if (rec.paused) return;
  if (fix.acc > 40) return;                 // 정확도 낮은 점 무시
  const last = rec.points[rec.points.length - 1];
  if (last) {
    const d = haversine(last, fix);
    if (d < 2.5) return;                     // GPS 떨림(지터) 필터
    if (d > 200) return;                     // 비현실적 점프 무시
    rec.dist += d;
  }
  // 고도
  if (fix.alt != null && !isNaN(fix.alt)) {
    if (rec.lastAlt != null) {
      const dz = fix.alt - rec.lastAlt;
      if (dz > 1) rec.gain += dz;            // 1m 이상 변화만 누적 (노이즈 완화)
      else if (dz < -1) rec.loss += -dz;
    }
    rec.lastAlt = fix.alt;
    rec.maxAlt = Math.max(rec.maxAlt, fix.alt);
    rec.minAlt = Math.min(rec.minAlt, fix.alt);
  }
  rec.points.push(fix);
  trackLine.addLatLng([fix.lat, fix.lng]);
  updateRecStats();
  persistRecSnapshot();
}

// 산행 기록 중 폰 화면이 꺼지거나 다른 앱으로 전환되면 브라우저가 탭을 통째로
// 정리(reload)해버릴 수 있다 — rec는 메모리에만 있어서 그대로면 기록이 다 날아감.
// 그래서 GPS 포인트가 찍힐 때마다 localStorage에 스냅샷을 남기고, 앱이 다시
// 시작될 때 진행 중이던 기록이 있으면 이어서 복구한다.
function persistRecSnapshot() {
  if (!rec.active) return;
  store.set('activeRecording', {
    active: rec.active, paused: rec.paused, points: rec.points,
    dist: rec.dist, gain: rec.gain, loss: rec.loss,
    startT: rec.startT, elapsed: rec.elapsed, pauseT: rec.pauseT,
    lastAlt: rec.lastAlt, maxAlt: rec.maxAlt, minAlt: rec.minAlt,
    savedAt: Date.now(),
  });
}
function clearRecSnapshot() { store.del('activeRecording'); }
function restoreActiveRecording() {
  const snap = store.get('activeRecording', null);
  if (!snap || !snap.active) return;
  const ageMs = Date.now() - (snap.savedAt || 0);
  const resume = () => {
    Object.assign(rec, {
      active: true, paused: !!snap.paused, points: snap.points || [],
      dist: snap.dist || 0, gain: snap.gain || 0, loss: snap.loss || 0,
      startT: snap.startT, elapsed: snap.elapsed || 0, pauseT: snap.pauseT || 0,
      lastAlt: snap.lastAlt, maxAlt: snap.maxAlt, minAlt: snap.minAlt,
    });
    if (rec.paused) rec._pauseStart = Date.now();
    trackLine.setLatLngs(rec.points.map(p => [p.lat, p.lng]));
    if (rec.points.length) {
      const last = rec.points[rec.points.length - 1];
      setTimeout(() => map.setView([last.lat, last.lng], 16), 60);
    }
    recTimer = setInterval(tickRec, 1000);
    follow = true;
    updateRecUI();
    updateRecStats();
    if (navigator.wakeLock) requestWakeLock();
    toast('중단됐던 산행 기록을 이어서 불러왔어요 🥾');
  };
  // 6시간 이내면 화면이 꺼졌다 돌아온 정도로 보고 자동으로 이어서 기록, 그보다 오래됐으면 확인 후 진행
  if (ageMs < 6 * 60 * 60 * 1000) resume();
  else if (confirm(`${Math.round(ageMs / 3600000)}시간 전에 중단된 산행 기록이 있어요. 이어서 기록할까요? (취소하면 삭제됩니다)`)) resume();
  else clearRecSnapshot();
}

function startRec() {
  if (!lastFix) { toast('GPS 신호를 기다리는 중이에요'); return; }
  Object.assign(rec, { active: true, paused: false, points: [], dist: 0, gain: 0, loss: 0,
    startT: Date.now(), elapsed: 0, pauseT: 0, lastAlt: null, maxAlt: -Infinity, minAlt: Infinity });
  trackLine.setLatLngs([]);
  recordPoint(lastFix);
  recTimer = setInterval(tickRec, 1000);
  follow = true;
  updateRecUI();
  toast('산행 기록을 시작합니다 🥾');
  if (navigator.wakeLock) requestWakeLock();
}
function tickRec() {
  if (!rec.paused) rec.elapsed = Date.now() - rec.startT - rec.pauseT;
  updateRecStats();
}
function pauseRec() {
  rec.paused = !rec.paused;
  if (rec.paused) { rec._pauseStart = Date.now(); }
  else { rec.pauseT += Date.now() - rec._pauseStart; }
  updateRecUI();
  persistRecSnapshot();
}
function stopRec() {
  if (rec.dist < 10 && rec.points.length < 3) {
    if (!confirm('기록된 경로가 거의 없어요. 그래도 종료할까요?')) return;
  }
  clearInterval(recTimer); recTimer = null;
  rec.active = false; rec.paused = false;
  releaseWakeLock();
  clearRecSnapshot();
  openSaveSheet();
  updateRecUI();
}

function updateRecStats() {
  $('#stDist').innerHTML = `${fmtDistN(rec.dist)}<small> ${fmtDistU(rec.dist)}</small>`;
  $('#stTime').textContent = fmtDur(rec.elapsed);
  $('#stPace').textContent = fmtPace(rec.elapsed, rec.dist);
  $('#stGain').innerHTML = `${Math.round(rec.gain)}<small> m</small>`;
}
function updateRecUI() {
  const idle = !rec.active;
  $('#btnStart').style.display = idle ? '' : 'none';
  $('#recRunning').style.display = idle ? 'none' : 'flex';
  $('#btnPause').innerHTML = rec.paused ? '▶ 재개' : '⏸ 일시정지';
  $('#btnPause').className = 'btn ' + (rec.paused ? 'btn-primary' : 'btn-warn');
  $('#recBadge').style.display = rec.active ? 'flex' : 'none';
  $('#recBadge').innerHTML = rec.paused ? '⏸ 일시정지됨' : '<span class="dot live"></span> 기록 중';
}

/* WakeLock — 기록 중 화면 꺼짐 방지 */
let wakeLock = null;
async function requestWakeLock() { try { wakeLock = await navigator.wakeLock.request('screen'); } catch {} }
function releaseWakeLock() { try { wakeLock && wakeLock.release(); wakeLock = null; } catch {} }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && rec.active && !wakeLock) requestWakeLock(); });

/* 저장 시트 */
function openSaveSheet() {
  const def = guessMountainName(lastFix) || '오늘의 산행';
  openSheet(`
    <h2>산행 기록 저장</h2>
    <div class="card" style="background:var(--green-50);box-shadow:none">
      <div class="rec-stats">
        <div class="rec-stat"><div class="v">${fmtDistN(rec.dist)}<small> ${fmtDistU(rec.dist)}</small></div><div class="l">거리</div></div>
        <div class="rec-stat"><div class="v" style="font-size:16px">${fmtDur(rec.elapsed)}</div><div class="l">시간</div></div>
        <div class="rec-stat"><div class="v">${Math.round(rec.gain)}<small> m</small></div><div class="l">누적상승</div></div>
        <div class="rec-stat"><div class="v" style="font-size:16px">${fmtPace(rec.elapsed, rec.dist)}</div><div class="l">페이스</div></div>
      </div>
    </div>
    <div class="field"><label>산행 이름</label><input id="saveName" value="${def}" maxlength="40"></div>
    <div class="field"><label>메모 (선택)</label><textarea id="saveMemo" rows="2" placeholder="날씨, 컨디션, 함께한 사람 등"></textarea></div>
    <div class="row" style="gap:10px">
      <button class="btn btn-ghost" onclick="closeSheet()">취소</button>
      <button class="btn btn-primary" onclick="saveRec()">저장하기</button>
    </div>
  `);
}
function guessMountainName(fix) {
  if (!fix) return null;
  let best = null, bd = Infinity;
  for (const m of allMountainsPool()) {
    const d = haversine(fix, m);
    if (d < bd) { bd = d; best = m; }
  }
  return bd < 15000 ? best.name : null;
}
function saveRec() {
  const name = ($('#saveName').value || '오늘의 산행').trim();
  const memo = $('#saveMemo').value.trim();
  const recs = store.get('records', []);
  const beforeClimbed = getClimbedSet();
  recs.unshift({
    id: uid(), name, memo, date: rec.startT,
    dist: rec.dist, dur: rec.elapsed, gain: rec.gain, loss: rec.loss,
    maxAlt: isFinite(rec.maxAlt) ? rec.maxAlt : null, minAlt: isFinite(rec.minAlt) ? rec.minAlt : null,
    pace: fmtPace(rec.elapsed, rec.dist),
    points: rec.points.map(p => ({ lat: +p.lat.toFixed(6), lng: +p.lng.toFixed(6), alt: p.alt, t: p.t })),
  });
  store.set('records', recs);
  closeSheet();
  trackLine.setLatLngs([]);
  const afterClimbed = getClimbedSet();
  const newlyClimbed = [...afterClimbed].filter(id => !beforeClimbed.has(id));
  if (newlyClimbed.length) {
    const first = findMountain(newlyClimbed[0]);
    toast(first ? `🎉 ${first.name} 완등 체크 완료!` : '기록이 저장되었어요 🎉');
  } else {
    toast('기록이 저장되었어요 🎉');
  }
  if (scratchMap) { refreshScratchData(); renderScratchMarkers(); drawScratchLayer(); }
  syncLeaderboard();
  switchTab('records');
}

/* =========================================================================
   기록 보관함
   ========================================================================= */
function renderRecords() {
  const recs = store.get('records', []);
  const v = $('#view-records');
  const total = recs.reduce((a, r) => ({ dist: a.dist + r.dist, gain: a.gain + r.gain, dur: a.dur + r.dur }), { dist: 0, gain: 0, dur: 0 });
  v.innerHTML = `
    <div class="pad pad-b">
      <div class="stat-grid" style="margin-bottom:6px">
        <div class="stat-box"><div class="v">${recs.length}</div><div class="l">총 산행</div></div>
        <div class="stat-box"><div class="v">${(total.dist/1000).toFixed(1)}</div><div class="l">총 거리(km)</div></div>
        <div class="stat-box"><div class="v">${Math.round(total.gain).toLocaleString()}</div><div class="l">누적상승(m)</div></div>
      </div>
      <div class="section-title">나의 산행 기록</div>
      ${recs.length ? recs.map(recCard).join('') : `<div class="empty"><div class="big">🥾</div>아직 기록이 없어요.<br>지도 탭에서 산행을 시작해보세요!</div>`}
    </div>`;
  $$('.rec-item', v).forEach(el => el.onclick = () => openRecordDetail(el.dataset.id));
}
function recCard(r) {
  return `<div class="card"><div class="rec-item" data-id="${r.id}">
    <div class="rec-thumb">${miniTrackSvg(r.points)}</div>
    <div class="rec-meta">
      <div class="t">${escapeHtml(r.name)}</div>
      <div class="d">${fmtDate(r.date)}</div>
      <div class="nums">
        <span>📏 <b>${fmtDist(r.dist)}</b></span>
        <span>⏱ <b>${fmtDur(r.dur)}</b></span>
        <span>⛰️ <b>${Math.round(r.gain)}m</b></span>
      </div>
    </div>
  </div></div>`;
}
function miniTrackSvg(points) {
  if (!points || points.length < 2) return '🥾';
  const lats = points.map(p => p.lat), lngs = points.map(p => p.lng);
  const minLa = Math.min(...lats), maxLa = Math.max(...lats), minLn = Math.min(...lngs), maxLn = Math.max(...lngs);
  const w = 56, h = 56, pad = 8;
  const sx = (maxLn - minLn) || 1e-6, sy = (maxLa - minLa) || 1e-6;
  const sc = Math.min((w - pad * 2) / sx, (h - pad * 2) / sy);
  const ox = (w - sx * sc) / 2, oy = (h - sy * sc) / 2;
  const d = points.map((p, i) => `${i ? 'L' : 'M'}${(ox + (p.lng - minLn) * sc).toFixed(1)} ${(h - oy - (p.lat - minLa) * sc).toFixed(1)}`).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}"><path d="${d}" fill="none" stroke="#e5484d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function openRecordDetail(id) {
  const r = store.get('records', []).find(x => x.id === id);
  if (!r) return;
  openSheet(`
    <h2 style="margin-bottom:8px">${escapeHtml(r.name)}</h2>
    <div class="muted" style="font-size:13px;margin-bottom:12px">${fmtDate(r.date)}</div>
    <div id="detailMap" class="card detail-map" style="padding:0;overflow:hidden"></div>
    <div class="card">
      <div class="kv"><span class="k">총 거리</span><span class="v">${fmtDist(r.dist)}</span></div>
      <div class="kv"><span class="k">소요 시간</span><span class="v">${fmtDur(r.dur)}</span></div>
      <div class="kv"><span class="k">평균 페이스</span><span class="v">${r.pace}/km</span></div>
      <div class="kv"><span class="k">누적 상승 / 하강</span><span class="v">▲${Math.round(r.gain)}m ▼${Math.round(r.loss)}m</span></div>
      ${r.maxAlt != null ? `<div class="kv"><span class="k">최고 / 최저 고도</span><span class="v">${Math.round(r.maxAlt)}m / ${Math.round(r.minAlt)}m</span></div>` : ''}
    </div>
    ${hasAlt(r.points) ? `<div class="card"><h3>고도 프로필</h3>${elevSvg(r.points)}</div>` : ''}
    ${r.memo ? `<div class="card"><h3>메모</h3><div class="muted" style="white-space:pre-wrap">${escapeHtml(r.memo)}</div></div>` : ''}
    <div class="row" style="gap:10px;margin-top:6px">
      <button class="btn btn-ghost" onclick="shareToChat('${r.id}')">💬 단톡에 공유</button>
      <button class="btn btn-danger btn-sm" style="flex:0 0 auto;padding:14px 16px" onclick="deleteRecord('${r.id}')">삭제</button>
    </div>
  `);
  setTimeout(() => {
    const dm = L.map('detailMap', { zoomControl: false, attributionControl: false }).setView([r.points[0].lat, r.points[0].lng], 14);
    L.tileLayer(TILES.topo.url, { maxZoom: 17, subdomains: 'abc' }).addTo(dm);
    const line = L.polyline(r.points.map(p => [p.lat, p.lng]), { color: '#e5484d', weight: 4 }).addTo(dm);
    L.circleMarker([r.points[0].lat, r.points[0].lng], { radius: 6, color: '#fff', weight: 2, fillColor: '#1f6b3a', fillOpacity: 1 }).addTo(dm).bindTooltip('출발');
    const last = r.points[r.points.length - 1];
    L.circleMarker([last.lat, last.lng], { radius: 6, color: '#fff', weight: 2, fillColor: '#e5484d', fillOpacity: 1 }).addTo(dm).bindTooltip('도착');
    dm.fitBounds(line.getBounds(), { padding: [20, 20] });
  }, 80);
}
const hasAlt = pts => pts.some(p => p.alt != null && !isNaN(p.alt));
function elevSvg(points) {
  const pts = points.filter(p => p.alt != null && !isNaN(p.alt));
  if (pts.length < 2) return '';
  const w = 300, h = 110, pad = 4;
  const alts = pts.map(p => p.alt), minA = Math.min(...alts), maxA = Math.max(...alts), rng = (maxA - minA) || 1;
  // 누적 거리 기준 X축
  let cum = 0; const xs = [0];
  for (let i = 1; i < pts.length; i++) { cum += haversine(pts[i-1], pts[i]); xs.push(cum); }
  const totalD = cum || 1;
  const X = i => pad + (xs[i] / totalD) * (w - pad * 2);
  const Y = a => h - pad - ((a - minA) / rng) * (h - pad * 2 - 14);
  let d = `M${X(0).toFixed(1)} ${Y(pts[0].alt).toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) d += ` L${X(i).toFixed(1)} ${Y(pts[i].alt).toFixed(1)}`;
  const area = d + ` L${X(pts.length-1).toFixed(1)} ${h-pad} L${X(0).toFixed(1)} ${h-pad} Z`;
  return `<svg class="elev-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <path d="${area}" fill="rgba(46,139,79,.15)"/>
    <path d="${d}" fill="none" stroke="#2e8b4f" stroke-width="2"/>
    <text x="${pad}" y="12" font-size="10" fill="#5c6b62">${Math.round(maxA)}m</text>
    <text x="${pad}" y="${h-pad}" font-size="10" fill="#5c6b62">${Math.round(minA)}m</text>
  </svg>`;
}
function deleteRecord(id) {
  if (!confirm('이 기록을 삭제할까요?')) return;
  store.set('records', store.get('records', []).filter(r => r.id !== id));
  closeSheet(); renderRecords(); toast('기록을 삭제했어요');
}

/* =========================================================================
   홈 (달력 + 최근 다녀온 산)
   ========================================================================= */
let homeCalMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
const WEEKDAYS_KR = ['일', '월', '화', '수', '목', '금', '토'];
function renderHome() {
  const v = $('#view-home');
  const recs = store.get('records', []);
  const now = new Date();
  const thisMonthCount = recs.filter(r => { const d = new Date(r.date); return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth(); }).length;
  const climbedCount = getOfficialClimbedSet().size;
  v.innerHTML = `
    <div class="pad pad-b">
      <div class="card home-hero">
        <div class="hh-title">${escapeHtml(profile.name)}님, 안녕하세요 🥾</div>
        <div class="hh-sub">${thisMonthCount > 0 ? `이번 달 ${thisMonthCount}번 산에 다녀오셨어요` : '이번 달엔 아직 산행 기록이 없어요'}</div>
        <div class="stat-grid" style="margin-top:12px">
          <div class="stat-box"><div class="v">${recs.length}</div><div class="l">총 산행</div></div>
          <div class="stat-box"><div class="v">${climbedCount}</div><div class="l">완등한 산</div></div>
          <div class="stat-box"><div class="v">${thisMonthCount}</div><div class="l">이번 달</div></div>
        </div>
        <button class="btn btn-primary btn-block" style="margin-top:12px" onclick="switchTab('map')">🥾 산행 시작하기</button>
      </div>
      <div class="card">
        <div class="cal-header">
          <button class="cal-nav" id="calPrev">‹</button>
          <div class="cal-title" id="calTitle"></div>
          <button class="cal-nav" id="calNext">›</button>
        </div>
        <div class="cal-grid cal-weekdays">${WEEKDAYS_KR.map(w => `<div>${w}</div>`).join('')}</div>
        <div class="cal-grid" id="calDays"></div>
        <div class="cal-legend"><span><span class="cal-dot rec"></span> 다녀온 산행</span><span><span class="cal-dot ev"></span> 예정된 일정</span></div>
        <button class="btn btn-ghost btn-block" style="margin-top:10px" onclick="openCreateEventSheet()">📅 산행 일정 만들기</button>
      </div>
      <div class="section-title">📌 다가오는 산행 일정</div>
      <div id="homeUpcoming"><div class="muted center" style="padding:16px 0;font-size:13px">불러오는 중…</div></div>
      <div class="section-title">🕓 최근 다녀온 산</div>
      <div id="homeRecent">${recs.length ? recs.slice(0, 5).map(recCard).join('') : `<div class="empty"><div class="big">🥾</div>아직 다녀온 산이 없어요.<br>산행을 기록하면 여기 표시돼요!</div>`}</div>
    </div>`;
  renderHomeCalendar();
  refreshHomeEvents();
  renderUpcomingEvents();
  $('#calPrev').onclick = () => { homeCalMonth = new Date(homeCalMonth.getFullYear(), homeCalMonth.getMonth() - 1, 1); renderHomeCalendar(); refreshHomeEvents(); };
  $('#calNext').onclick = () => { homeCalMonth = new Date(homeCalMonth.getFullYear(), homeCalMonth.getMonth() + 1, 1); renderHomeCalendar(); refreshHomeEvents(); };
  $$('.rec-item', v).forEach(el => el.onclick = () => openRecordDetail(el.dataset.id));
}
function renderHomeCalendar() {
  const recs = store.get('records', []);
  const y = homeCalMonth.getFullYear(), m = homeCalMonth.getMonth();
  const recsByDay = {};
  recs.forEach(r => {
    const d = new Date(r.date);
    if (d.getFullYear() === y && d.getMonth() === m) (recsByDay[d.getDate()] ||= []).push(r);
  });
  const today = new Date();
  const isThisMonth = today.getFullYear() === y && today.getMonth() === m;
  const startWeekday = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  $('#calTitle').textContent = `${y}년 ${m + 1}월`;
  let cells = '';
  for (let i = 0; i < startWeekday; i++) cells += `<div class="cal-cell empty"></div>`;
  for (let day = 1; day <= daysInMonth; day++) {
    const hit = recsByDay[day];
    const evs = homeEventsCache[ymd(new Date(y, m, day))];
    const isToday = isThisMonth && today.getDate() === day;
    cells += `<div class="cal-cell ${(hit || evs) ? 'has-item' : ''} ${isToday ? 'today' : ''}" data-day="${day}">
      <span class="dnum">${day}</span>
      <span class="cal-dots">${hit ? '<span class="cal-dot rec"></span>' : ''}${evs ? '<span class="cal-dot ev"></span>' : ''}</span>
    </div>`;
  }
  $('#calDays').innerHTML = cells;
  $$('.cal-cell.has-item', $('#calDays')).forEach(el => {
    const day = +el.dataset.day;
    el.onclick = () => openDayDetail(ymd(new Date(y, m, day)), recsByDay[day], homeEventsCache[ymd(new Date(y, m, day))]);
  });
}
function openDayDetail(dateStr, dayRecs, dayEvents) {
  let html = `<h2>📅 ${dateStr}</h2>`;
  if (dayEvents && dayEvents.length) html += dayEvents.map(eventCard).join('');
  if (dayRecs && dayRecs.length) html += `<div class="section-title" style="margin-top:${dayEvents ? 4 : 0}px">완료된 산행 기록</div>` + dayRecs.map(recCard).join('');
  openSheet(html);
  $$('.rec-item', $('#sheet')).forEach(el => el.onclick = () => openRecordDetail(el.dataset.id));
  bindEventCards($('#sheet'));
}

/* =========================================================================
   산행 일정 (달력 예약 + 참여 태그) — Firestore
   ========================================================================= */
function ymd(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
let homeEventsCache = {}, homeEventsLoadedMonth = null;
async function loadMonthEvents(monthDate) {
  if (!fbDb) { homeEventsCache = {}; return; }
  const y = monthDate.getFullYear(), m = monthDate.getMonth();
  const key = `${y}-${m}`;
  if (homeEventsLoadedMonth === key) return;
  const start = ymd(new Date(y, m, 1)), end = ymd(new Date(y, m + 1, 0));
  try {
    const snap = await fbDb.collection('events').where('date', '>=', start).where('date', '<=', end).get();
    const map = {};
    snap.forEach(doc => { const ev = { id: doc.id, ...doc.data() }; (map[ev.date] ||= []).push(ev); });
    homeEventsCache = map;
    homeEventsLoadedMonth = key;
  } catch (e) { console.warn('일정 불러오기 실패', e); homeEventsCache = {}; }
}
async function refreshHomeEvents() {
  const monthAtCall = homeCalMonth;
  await loadMonthEvents(homeCalMonth);
  if (homeCalMonth === monthAtCall && currentTab === 'home') renderHomeCalendar();
}
async function renderUpcomingEvents() {
  const el = $('#homeUpcoming');
  if (!el) return;
  if (!fbDb) { el.innerHTML = `<div class="empty" style="padding:16px 0"><div class="big">📅</div>일정 기능은 아직 설정 전이에요<br><span style="font-size:12px">(Firebase Firestore 연결이 필요해요)</span></div>`; return; }
  try {
    const todayStr = ymd(new Date());
    const snap = await fbDb.collection('events').where('date', '>=', todayStr).orderBy('date').limit(5).get();
    if (!$('#homeUpcoming')) return; // 그 사이에 다른 탭으로 이동했으면 무시
    if (snap.empty) { el.innerHTML = `<div class="empty" style="padding:16px 0"><div class="big">📅</div>예정된 산행 일정이 없어요<br><span style="font-size:12px">캘린더 아래 버튼으로 만들어보세요</span></div>`; return; }
    el.innerHTML = snap.docs.map(d => eventCard({ id: d.id, ...d.data() })).join('');
    bindEventCards(el);
  } catch (e) { console.warn('다가오는 일정 로딩 실패', e); el.innerHTML = `<div class="empty" style="padding:16px 0"><div class="big">⚠️</div>일정을 불러오지 못했어요</div>`; }
}
function eventCard(ev) {
  return `<div class="card event-card" data-id="${ev.id}">
    <div class="ev-top">
      <div class="mtn-emoji" style="font-size:24px;width:44px;height:44px">${ev.mountainEmoji || '🥾'}</div>
      <div class="ev-info">
        <div class="n">${escapeHtml(ev.title)}</div>
        <div class="r">📅 ${ev.date}${ev.time ? ' · ' + ev.time : ''}${ev.mountainName ? ' · ' + escapeHtml(ev.mountainName) : ''}</div>
      </div>
      ${ev.creatorId === (fbAuth && fbAuth.currentUser && fbAuth.currentUser.uid) ? `<button class="btn-icon" title="일정 삭제" onclick="deleteEvent('${ev.id}')">🗑️</button>` : ''}
    </div>
    ${ev.memo ? `<div class="muted" style="font-size:12px;margin-top:8px">${escapeHtml(ev.memo)}</div>` : ''}
    <div class="ev-participants" id="evParts-${ev.id}"><span class="muted" style="font-size:12px">참여자 불러오는 중…</span></div>
    <button class="btn btn-primary btn-block ev-join-btn" style="margin-top:10px" data-id="${ev.id}">🙋 참여하기</button>
  </div>`;
}
function bindEventCards(scope) {
  $$('.event-card', scope).forEach(card => {
    const id = card.dataset.id;
    loadEventParticipants(id).then(parts => renderEventParticipants(id, parts));
    const btn = card.querySelector('.ev-join-btn');
    if (btn) btn.onclick = () => toggleEventJoin(id);
  });
}
async function loadEventParticipants(eventId) {
  if (!fbDb) return [];
  try {
    const snap = await fbDb.collection('events').doc(eventId).collection('participants').get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  } catch (e) { console.warn(e); return []; }
}
function renderEventParticipants(eventId, parts) {
  const el = document.getElementById(`evParts-${eventId}`);
  if (!el) return;
  const myUid = fbAuth && fbAuth.currentUser && fbAuth.currentUser.uid;
  const joined = parts.some(p => p.uid === myUid);
  el.innerHTML = parts.length
    ? `<div class="ev-avatars">${parts.slice(0, 8).map(p => `<div class="ev-ava" style="background:${p.color || '#8b968f'}" title="${escapeHtml(p.name || '')}">${p.photoURL ? `<img src="${p.photoURL}">` : escapeHtml((p.name || '?')[0])}</div>`).join('')}</div><div class="muted" style="font-size:11px;margin-top:4px">${parts.length}명 참여</div>`
    : `<div class="muted" style="font-size:12px">아직 참여자가 없어요</div>`;
  const btn = el.parentElement.querySelector('.ev-join-btn');
  if (btn) { btn.textContent = joined ? '🙋 참여 취소하기' : '🙋 참여하기'; btn.className = 'btn btn-block ev-join-btn ' + (joined ? 'btn-warn' : 'btn-primary'); }
}
async function toggleEventJoin(eventId) {
  if (!fbDb || !fbAuth || !fbAuth.currentUser) { toast('참여하려면 로그인/게스트 상태가 필요해요'); return; }
  const uid = fbAuth.currentUser.uid;
  const ref = fbDb.collection('events').doc(eventId).collection('participants').doc(uid);
  try {
    const doc = await ref.get();
    if (doc.exists) { await ref.delete(); toast('참여를 취소했어요'); }
    else { await ref.set({ name: profile.name, photoURL: profile.photoURL || null, color: profile.color, joinedAt: firebase.firestore.FieldValue.serverTimestamp() }); toast('참여로 등록했어요! 🙋'); }
    renderEventParticipants(eventId, await loadEventParticipants(eventId));
  } catch (e) { console.error(e); toast('처리에 실패했어요'); }
}
async function deleteEvent(eventId) {
  if (!confirm('이 산행 일정을 삭제할까요?')) return;
  try {
    await fbDb.collection('events').doc(eventId).delete();
    toast('일정을 삭제했어요');
    homeEventsLoadedMonth = null;
    closeSheet();
    if (currentTab === 'home') { renderHomeCalendar(); refreshHomeEvents(); renderUpcomingEvents(); }
  } catch (e) { console.error(e); toast('삭제에 실패했어요 (본인이 만든 일정만 삭제할 수 있어요)'); }
}
function openCreateEventSheet(defaultDateStr) {
  if (!fbDb) { toast('산행 일정 기능은 아직 설정 전이에요 (Firestore 필요)'); return; }
  const def = defaultDateStr || ymd(new Date());
  openSheet(`
    <h2>📅 산행 일정 만들기</h2>
    <div class="field"><label>날짜</label><input type="date" id="evDate" value="${def}"></div>
    <div class="field"><label>시간 (선택)</label><input type="time" id="evTime"></div>
    <div class="field"><label>산 이름 (선택)</label><input id="evMountain" list="mtnListDatalist" placeholder="예: 북한산 — 직접 입력도 가능"></div>
    <datalist id="mtnListDatalist">${allMountainsPool().map(m => `<option value="${escapeHtml(m.name)}">`).join('')}</datalist>
    <div class="field"><label>제목</label><input id="evTitle" placeholder="예: 주말 정기 산행" maxlength="40"></div>
    <div class="field"><label>메모 (선택)</label><textarea id="evMemo" rows="2" placeholder="집합 장소, 준비물 등"></textarea></div>
    <button class="btn btn-primary btn-block" onclick="saveEvent()">일정 등록</button>
  `);
}
async function saveEvent() {
  const date = $('#evDate').value;
  if (!date) { toast('날짜를 선택해주세요'); return; }
  if (!fbAuth || !fbAuth.currentUser) { toast('일정을 만들려면 로그인/게스트 상태가 필요해요'); return; }
  const time = $('#evTime').value;
  const mountainName = $('#evMountain').value.trim();
  const mtn = allMountainsPool().find(m => m.name === mountainName);
  const title = ($('#evTitle').value.trim()) || (mountainName ? `${mountainName} 산행` : '산행 일정');
  const memo = $('#evMemo').value.trim();
  try {
    const ref = await fbDb.collection('events').add({
      title, date, time: time || null, memo,
      mountainId: mtn ? mtn.id : null, mountainName: mountainName || null, mountainEmoji: mtn ? mtn.emoji : null,
      creatorId: fbAuth.currentUser.uid, creatorName: profile.name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await ref.collection('participants').doc(fbAuth.currentUser.uid).set({ name: profile.name, photoURL: profile.photoURL || null, color: profile.color, joinedAt: firebase.firestore.FieldValue.serverTimestamp() });
    closeSheet();
    toast('산행 일정을 등록했어요! 🎉');
    homeEventsLoadedMonth = null;
    if (currentTab === 'home') { renderHomeCalendar(); refreshHomeEvents(); renderUpcomingEvents(); }
  } catch (e) { console.error(e); toast('일정 등록에 실패했어요'); }
}

/* =========================================================================
   산 안내
   ========================================================================= */
let guideFilter = 'all';
let guideQuery = '';
function renderGuide() {
  const v = $('#view-guide');
  v.innerHTML = `
    <div class="pad pad-b">
      <input id="guideSearchInput" class="search-input" placeholder="🔍 산 이름·지역 검색 (예: 지리산, 청계산, 강원)" value="${escapeHtml(guideQuery)}">
      <div class="chip-row">
        ${['all','easy','mid','hard'].map(f => `<div class="chip ${guideFilter===f?'on':''}" data-f="${f}">${f==='all'?'전체':LEVELS[f]}</div>`).join('')}
      </div>
      <div id="guideList"></div>
      <button class="btn btn-ghost btn-block" style="margin-top:6px" onclick="openAddMountainSheet()">➕ 목록에 없는 산 등록하기</button>
      <div class="muted center" style="font-size:11px;margin-top:8px">코스 거리·시간은 참고용입니다. 기상·통제 정보는 국립공원공단을 확인하세요.</div>
    </div>`;
  renderGuideList();
  $$('.chip', v).forEach(c => c.onclick = () => {
    guideFilter = c.dataset.f;
    $$('.chip', v).forEach(x => x.classList.toggle('on', x.dataset.f === guideFilter));
    renderGuideList();
  });
  const input = $('#guideSearchInput');
  input.oninput = () => { guideQuery = input.value; renderGuideList(); };
}
function renderGuideList() {
  const q = guideQuery.trim();
  const pool = allMountainsPool();
  let list = guideFilter === 'all' ? pool : pool.filter(m => m.level === guideFilter);
  if (q) list = list.filter(m => m.name.includes(q) || (m.region && m.region.includes(q)));
  const listEl = $('#guideList');
  listEl.innerHTML = list.length ? list.map(mtnCard).join('') : `<div class="empty"><div class="big">🔍</div>검색 결과가 없어요<br><span style="font-size:12px">아래 버튼으로 직접 등록해보세요</span></div>`;
  $$('.mtn-card', listEl).forEach(el => el.onclick = () => openMountain(el.dataset.id));
}
function mtnCard(m) {
  const srcTag = m.source === 'community' ? '<span class="tag src">회원 등록</span>' : m.source === 'extra' ? '<span class="tag src">인기 코스</span>' : '';
  return `<div class="card"><div class="mtn-card" data-id="${m.id}">
    <div class="mtn-emoji">${m.emoji}</div>
    <div class="mtn-info">
      <div class="n">${escapeHtml(m.name)} ${m.h != null ? `<span class="muted" style="font-size:12px;font-weight:600">${m.h.toLocaleString()}m</span>` : ''}</div>
      <div class="r">📍 ${escapeHtml(m.region || '위치 정보 없음')} · ⏱ ${m.time}</div>
      <div class="tags"><span class="tag ${m.level}">${LEVELS[m.level]}</span><span class="tag">코스 ${m.courses.length}개</span>${srcTag}</div>
    </div>
  </div></div>`;
}
function openMountain(id) {
  const m = findMountain(id);
  if (!m) { toast('산 정보를 찾을 수 없어요'); return; }
  openSheet(`
    <h2>${m.emoji} ${escapeHtml(m.name)} ${m.h != null ? `<span class="muted" style="font-size:15px">${m.h.toLocaleString()}m</span>` : ''}</h2>
    <div class="muted" style="font-size:13px;margin-bottom:12px">📍 ${escapeHtml(m.region || '위치 정보 없음')} · 난이도 ${LEVELS[m.level]} · 예상 ${m.time}</div>
    ${m.lat != null ? `<div id="mtnMap" class="card detail-map" style="padding:0;overflow:hidden"></div>` : ''}
    <div class="card"><div class="muted" style="line-height:1.6">${escapeHtml(m.desc)}</div></div>
    <div class="card">
      <h3>대표 코스</h3>
      ${m.courses.map(c => `<div class="kv"><span class="k">🥾</span><span class="v" style="font-weight:600;text-align:right">${escapeHtml(c)}</span></div>`).join('')}
    </div>
    ${m.lat != null ? `<button class="btn btn-primary btn-block" onclick="closeSheet();focusOnMap(${m.lat},${m.lng})">🗺️ 지도에서 보기</button>` : ''}
  `);
  if (m.lat == null) return;
  setTimeout(() => {
    const mm = L.map('mtnMap', { zoomControl: false, attributionControl: false }).setView([m.lat, m.lng], 12);
    L.tileLayer(TILES.topo.url, { maxZoom: 17, subdomains: 'abc' }).addTo(mm);
    L.marker([m.lat, m.lng]).addTo(mm).bindTooltip(m.name, { permanent: true, direction: 'top' });
  }, 80);
}
function focusOnMap(lat, lng) {
  switchTab('map'); follow = false;
  setTimeout(() => { map.setView([lat, lng], 13); }, 120);
}

/* =========================================================================
   완등맵 (스크래치맵) — 다녀온 산은 스크래치되어 지도에 드러남
   ========================================================================= */
const CLIMB_RADIUS = 2000; // 산 정상 기준 2km 이내 GPS 기록이면 '완등'으로 인정 (인접한 산끼리 겹치지 않도록)
function getAutoClimbedSet() {
  const recs = store.get('records', []);
  const climbed = new Set();
  for (const m of allMountainsPool()) {
    const hit = recs.some(r => {
      if (r.name && r.name.includes(m.name)) return true;
      if (!r.points || !r.points.length) return false;
      return r.points.some(p => haversine(p, m) < CLIMB_RADIUS);
    });
    if (hit) climbed.add(m.id);
  }
  return climbed;
}
// GPS 기록 없이 예전에 다녀온 산을 직접 체크한 목록 (완등 체크리스트에서 수동 입력)
function getManualSet() { return new Set(store.get('manualClimbed', [])); }
function setManualClimbed(id, on) {
  const s = getManualSet();
  on ? s.add(id) : s.delete(id);
  store.set('manualClimbed', [...s]);
  refreshScratchData();
  if (scratchMap) { renderScratchMarkers(); drawScratchLayer(); }
  const listEl = $('#mtnChecklist');
  if (listEl) { listEl.innerHTML = renderChecklistRows(checklistQuery); bindChecklistRows(); }
  syncLeaderboard();
}
function getClimbedSet() {
  const s = getAutoClimbedSet();
  for (const id of getManualSet()) s.add(id);
  return s;
}
// 100대 명산으로만 한정한 완등 집합 (완등맵 진행률·뱃지는 청계산 같은 추가/회원등록 산을 세지 않음)
function getOfficialClimbedSet() {
  const officialIds = new Set(MOUNTAINS.map(m => m.id));
  return new Set([...getClimbedSet()].filter(id => officialIds.has(id)));
}

/* =========================================================================
   계급(1~100단계) · 뱃지 · 랭킹(Firestore)
   ========================================================================= */
// 계급 구간: 레벨 구간마다 다음 레벨까지 필요한 누적 거리(km)가 달라진다 (뒤로 갈수록 험난해짐)
const RANK_TIERS = [
  { min: 1,  max: 10,  name: '새싹 산꾼',    stepKm: 5   },
  { min: 11, max: 25,  name: '도전하는 산꾼', stepKm: 10  },
  { min: 26, max: 45,  name: '능선 등반가',   stepKm: 20  },
  { min: 46, max: 70,  name: '베테랑 산악인', stepKm: 30  },
  { min: 71, max: 90,  name: '명산 마스터',   stepKm: 50  },
  { min: 91, max: 99,  name: '그랜드마스터',  stepKm: 100 },
  { min: 100, max: 100, name: '산신령',       stepKm: Infinity },
];
function tierOfLevel(lv) { return RANK_TIERS.find(t => lv >= t.min && lv <= t.max); }
// LEVEL_REQ[lv] = 그 레벨에 도달하는 데 필요한 누적 거리(km). LEVEL_REQ[1] = 0
const LEVEL_REQ = (() => {
  const req = [0, 0];
  for (let lv = 2; lv <= 100; lv++) req[lv] = req[lv - 1] + tierOfLevel(lv - 1).stepKm;
  return req;
})();
function getLevelInfo(totalKm) {
  let level = 1;
  for (let lv = 2; lv <= 100; lv++) { if (totalKm >= LEVEL_REQ[lv]) level = lv; else break; }
  const tier = tierOfLevel(level);
  const floor = LEVEL_REQ[level], ceil = level < 100 ? LEVEL_REQ[level + 1] : floor;
  const progress = level >= 100 ? 1 : clamp((totalKm - floor) / (ceil - floor), 0, 1);
  return { level, tierName: tier.name, floor, ceil, progress, totalKm, maxed: level >= 100 };
}

const BADGES = [
  { id: 'first_climb', emoji: '🥾', name: '첫 발걸음',    desc: '첫 산행 기록',              check: c => c.recordCount >= 1 },
  { id: 'climb_10',    emoji: '🎒', name: '열정 산꾼',     desc: '산행 기록 10회',            check: c => c.recordCount >= 10 },
  { id: 'climb_50',    emoji: '🏕️', name: '베테랑 산꾼',   desc: '산행 기록 50회',            check: c => c.recordCount >= 50 },
  { id: 'peaks_10',    emoji: '⛰️', name: '명산 10정복',   desc: '100대 명산 10곳 완등',       check: c => c.climbedCount >= 10 },
  { id: 'peaks_30',    emoji: '🏔️', name: '명산 30정복',   desc: '100대 명산 30곳 완등',       check: c => c.climbedCount >= 30 },
  { id: 'peaks_50',    emoji: '🗻', name: '명산 반백 정복', desc: '100대 명산 50곳 완등',       check: c => c.climbedCount >= 50 },
  { id: 'peaks_100',   emoji: '👑', name: '100대 명산 완주', desc: '100대 명산 전체 완등',       check: c => c.climbedCount >= 100 },
  { id: 'big3',        emoji: '🌋', name: '3대 명산 정복',  desc: '한라산·지리산·설악산 완등',   check: c => ['halla','jiri','seorak'].every(id => c.climbed.has(id)) },
  { id: 'dist_42',     emoji: '🏃', name: '마라톤 산꾼',   desc: '누적 거리 42.195km 돌파',    check: c => c.totalKm >= 42.195 },
  { id: 'dist_100',    emoji: '💯', name: '100km 클럽',    desc: '누적 거리 100km 돌파',       check: c => c.totalKm >= 100 },
  { id: 'dist_500',    emoji: '🚀', name: '500km 클럽',    desc: '누적 거리 500km 돌파',       check: c => c.totalKm >= 500 },
  { id: 'gain_everest', emoji: '🏆', name: '에베레스트 클럽', desc: '누적 상승고도 8,849m 돌파', check: c => c.totalGainM >= 8849 },
  { id: 'level_max',   emoji: '🧙', name: '산신령',        desc: '계급 100단계(만렙) 달성',    check: c => c.level >= 100 },
];

function computeMyStats() {
  const recs = store.get('records', []);
  const total = recs.reduce((a, r) => ({ dist: a.dist + r.dist, gain: a.gain + r.gain }), { dist: 0, gain: 0 });
  const climbed = getOfficialClimbedSet();
  const totalKm = total.dist / 1000;
  const levelInfo = getLevelInfo(totalKm);
  const ctx = { recordCount: recs.length, climbedCount: climbed.size, climbed, totalKm, totalGainM: total.gain, level: levelInfo.level };
  const badges = BADGES.filter(b => b.check(ctx));
  return { totalKm, totalGainM: total.gain, recordCount: recs.length, climbedCount: climbed.size, levelInfo, badges };
}

async function syncLeaderboard() {
  if (!fbDb || !fbAuth || !fbAuth.currentUser) return;
  try {
    const stats = computeMyStats();
    await fbDb.collection('leaderboard').doc(fbAuth.currentUser.uid).set({
      name: profile.name, color: profile.color, photoURL: profile.photoURL || null, authType: profile.authType,
      totalKm: Math.round(stats.totalKm * 100) / 100, totalGainM: Math.round(stats.totalGainM),
      recordCount: stats.recordCount, climbedCount: stats.climbedCount,
      level: stats.levelInfo.level, tierName: stats.levelInfo.tierName, badgeCount: stats.badges.length,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
  } catch (e) { console.warn('랭킹 동기화 실패', e); }
}

async function openLeaderboardSheet() {
  openSheet(`<h2>🏆 전체 랭킹</h2><div id="lbBody" class="muted center" style="padding:30px 0">불러오는 중…</div>`);
  if (!fbDb) {
    $('#lbBody').outerHTML = `<div class="empty"><div class="big">🏆</div>랭킹 기능은 아직 설정 전이에요<br><span style="font-size:12px">(Firebase Firestore 연결이 필요해요)</span></div>`;
    return;
  }
  try {
    const snap = await fbDb.collection('leaderboard').orderBy('totalKm', 'desc').limit(50).get();
    const rows = [];
    let rank = 0;
    snap.forEach(doc => {
      rank++;
      const d = doc.data();
      const mine = fbAuth && fbAuth.currentUser && doc.id === fbAuth.currentUser.uid;
      rows.push(`<div class="lb-row ${mine ? 'mine' : ''}">
        <div class="lb-rank">${rank <= 3 ? ['🥇','🥈','🥉'][rank-1] : rank}</div>
        <div class="room-ava" style="width:36px;height:36px;font-size:15px;background:${d.color || '#8b968f'};overflow:hidden">${d.photoURL ? `<img src="${d.photoURL}" style="width:100%;height:100%;object-fit:cover">` : escapeHtml((d.name||'?')[0])}</div>
        <div class="lb-info">
          <div class="n">${escapeHtml(d.name || '이름없음')}${mine ? ' <span class="muted" style="font-size:11px">(나)</span>' : ''}</div>
          <div class="r">Lv.${d.level || 1} ${escapeHtml(d.tierName || '')} · 완등 ${d.climbedCount || 0}곳</div>
        </div>
        <div class="lb-km">${(d.totalKm || 0).toFixed(1)}<span class="muted" style="font-size:11px">km</span></div>
      </div>`);
    });
    $('#lbBody').outerHTML = rows.length ? `<div id="lbBody">${rows.join('')}</div>` : `<div class="empty"><div class="big">🏆</div>아직 랭킹에 아무도 없어요<br>첫 산행을 기록해보세요!</div>`;
  } catch (e) {
    console.error(e);
    $('#lbBody').outerHTML = `<div class="empty"><div class="big">⚠️</div>랭킹을 불러오지 못했어요<br><span style="font-size:12px">${escapeHtml(e.message || '')}</span></div>`;
  }
}

let scratchMap, scratchCanvas, scratchCtx, scratchMarkers = [];
let scratchClimbed = new Set(), scratchAuto = new Set();
function refreshScratchData() { scratchAuto = getAutoClimbedSet(); scratchClimbed = getOfficialClimbedSet(); }

function initScratchMap() {
  scratchMap = L.map('scratchMap', { zoomControl: false, attributionControl: false }).setView([36.3, 127.8], 7);
  L.tileLayer(TILES.topo.url, { maxZoom: 17, subdomains: 'abc' }).addTo(scratchMap);
  // 안개 캔버스는 leaflet pane 밖에서 지도 컨테이너 위에 직접 얹는다.
  // (pane 안에 넣으면 팬닝 시 적용되는 CSS transform과 좌표 계산이 이중으로 겹쳐 어긋난다)
  // 완등한 산 위치만 destination-out으로 투명 구멍을 뚫어, 아래 실제 지도/마커가 비쳐 보이게 한다.
  scratchCanvas = L.DomUtil.create('canvas', 'fog-canvas', $('#scratchMap'));
  scratchCtx = scratchCanvas.getContext('2d');
  scratchMap.on('move zoom resize viewreset', drawScratchLayer);
}

function drawScratchLayer() {
  if (!scratchMap) return;
  const size = scratchMap.getSize();
  scratchCanvas.width = size.x; scratchCanvas.height = size.y;
  const ctx = scratchCtx;
  ctx.clearRect(0, 0, size.x, size.y);
  ctx.fillStyle = 'rgba(28,38,33,.6)';
  ctx.fillRect(0, 0, size.x, size.y);
  ctx.globalCompositeOperation = 'destination-out';
  for (const m of MOUNTAINS) {
    if (!scratchClimbed.has(m.id)) continue;
    const pt = scratchMap.latLngToContainerPoint([m.lat, m.lng]);
    const r = 55;
    const grad = ctx.createRadialGradient(pt.x, pt.y, r * .35, pt.x, pt.y, r);
    grad.addColorStop(0, 'rgba(0,0,0,1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';
}

function renderScratchMarkers() {
  scratchMarkers.forEach(mk => scratchMap.removeLayer(mk));
  scratchMarkers = [];
  for (const m of MOUNTAINS) {
    const on = scratchClimbed.has(m.id);
    const icon = L.divIcon({
      className: '', iconSize: null,
      html: `<div class="mtn-pin ${on ? 'climbed' : 'locked'}"><div class="dot"></div>${on ? `<div class="lbl">${m.emoji} ${m.name}</div>` : ''}</div>`,
    });
    const mk = L.marker([m.lat, m.lng], { icon }).addTo(scratchMap);
    mk.on('click', () => openMountain(m.id));
    scratchMarkers.push(mk);
  }
  updateScratchStats();
}

function updateScratchStats() {
  const n = scratchClimbed.size, pct = Math.round(n / MOUNTAINS.length * 100);
  $('#scratchCount').textContent = n;
  $('#scratchPct').textContent = `(${pct}%)`;
  $('#scratchFill').style.width = pct + '%';
}

/* ---------- 완등 체크리스트 (검색 + 수동 체크) ---------- */
let checklistQuery = '';
function openMountainChecklist() {
  refreshScratchData();
  checklistQuery = '';
  openSheet(`
    <h2>🏅 완등 체크리스트</h2>
    <div class="muted" style="font-size:12px;margin-bottom:10px">GPS 기록이 없어도 예전에 다녀온 산은 검색해서 직접 체크하면 완등맵에 표시돼요. 100대 명산 외에 청계산·아차산 같은 인기 코스도 검색돼요.</div>
    <input id="mtnSearchInput" class="search-input" placeholder="산 이름·지역 검색 (예: 북한산, 청계산, 강원)">
    <div id="mtnChecklist" class="checklist"></div>
    <button class="btn btn-ghost btn-block" style="margin-top:10px" onclick="openAddMountainSheet()">➕ 목록에 없는 산 등록하기</button>
  `);
  const listEl = $('#mtnChecklist');
  listEl.innerHTML = renderChecklistRows('');
  bindChecklistRows();
  const input = $('#mtnSearchInput');
  input.oninput = () => {
    checklistQuery = input.value;
    listEl.innerHTML = renderChecklistRows(checklistQuery);
    bindChecklistRows();
  };
  setTimeout(() => input.focus(), 200);
}
function renderChecklistRows(q) {
  const query = (q || '').trim();
  const pool = allMountainsPool();
  const list = query ? pool.filter(m => m.name.includes(query) || (m.region && m.region.includes(query))) : pool;
  if (!list.length) return `<div class="empty" style="padding:24px 0"><div class="big">🔍</div>검색 결과가 없어요<br><span style="font-size:12px">아래 버튼으로 직접 등록해보세요</span></div>`;
  const manual = getManualSet();
  return list.map(m => {
    const auto = scratchAuto.has(m.id);
    const on = auto || manual.has(m.id);
    const srcTag = m.source === 'community' ? ' · <span class="tag src">회원 등록</span>' : m.source === 'extra' ? ' · <span class="tag src">인기 코스</span>' : '';
    return `<div class="chk-row">
      <div class="chk-info" data-id="${m.id}">
        <div class="n">${m.emoji} ${escapeHtml(m.name)} ${m.h != null ? `<span class="muted" style="font-size:11px;font-weight:600">${Math.round(m.h)}m</span>` : ''}</div>
        <div class="r">📍 ${escapeHtml(m.region || '위치 정보 없음')}${auto ? ' · <span class="tag">GPS 기록</span>' : ''}${srcTag}</div>
      </div>
      <button class="chk-btn ${on ? 'on' : ''}" data-id="${m.id}" ${auto ? 'disabled title="GPS 산행 기록에서 자동으로 인식됐어요"' : ''}>✓</button>
    </div>`;
  }).join('');
}
function bindChecklistRows() {
  $$('.chk-btn', $('#mtnChecklist')).forEach(btn => {
    if (btn.disabled) return;
    btn.onclick = () => {
      const id = btn.dataset.id;
      const nowOn = !btn.classList.contains('on');
      setManualClimbed(id, nowOn);
      const m = findMountain(id);
      toast(nowOn ? `✅ ${m ? m.name : ''} 완등 체크!` : '체크를 해제했어요');
    };
  });
  $$('.chk-info', $('#mtnChecklist')).forEach(el => {
    el.onclick = () => openMountain(el.dataset.id);
  });
}

/* =========================================================================
   단톡 (그룹 채팅)
   ========================================================================= */
const DEFAULT_ROOMS = [
  { id: 'free', name: '자유 수다방', emoji: '💬', color: '#2e8b4f' },
  { id: 'bukhan', name: '북한산 모임', emoji: '⛰️', color: '#3b82f6' },
  { id: 'jiri', name: '지리산 종주대', emoji: '🏔️', color: '#e5484d' },
];
function getRooms() {
  let rooms = store.get('rooms', null);
  if (!rooms) { rooms = DEFAULT_ROOMS.slice(); store.set('rooms', rooms); }
  return rooms;
}
function getMsgs(roomId) { return store.get('msgs:' + roomId, []); }
function setMsgs(roomId, msgs) { store.set('msgs:' + roomId, msgs.slice(-500)); }

let activeRoom = null;

function renderRooms() {
  const v = $('#view-chat');
  const rooms = getRooms();
  v.innerHTML = `
    <div class="pad pad-b">
      <div class="row" style="margin-bottom:10px">
        <div class="grow"><div style="font-size:13px;font-weight:800;color:var(--ink-soft)">단톡방</div></div>
        <button class="btn btn-ghost btn-sm" onclick="openCreateRoom()">＋ 방 만들기</button>
      </div>
      <div class="card" style="display:flex;align-items:center;gap:8px;background:var(--green-50);box-shadow:none">
        <span class="dot ${chatNet.connected ? 'live' : ''}"></span>
        <span style="font-size:12px" class="muted">${chatNet.connected ? '실시간 서버 연결됨' : '로컬 모드 (같은 기기에서만 동기화)'}</span>
      </div>
      ${rooms.map(roomCard).join('')}
    </div>`;
  $$('.room-item', v).forEach(el => el.onclick = () => openRoom(el.dataset.id));
}
function roomCard(r) {
  const msgs = getMsgs(r.id);
  const last = msgs[msgs.length - 1];
  const unread = (store.get('unread', {})[r.id]) || 0;
  return `<div class="card"><div class="room-item" data-id="${r.id}">
    <div class="room-ava" style="background:${r.color}">${r.emoji}</div>
    <div class="room-info">
      <div class="n">${escapeHtml(r.name)}</div>
      <div class="last">${last ? (last.type==='loc'?'📍 위치 공유':last.type==='rec'?'🥾 산행 기록 공유':escapeHtml((last.name?last.name+': ':'')+last.text)) : '아직 대화가 없어요'}</div>
    </div>
    <div style="text-align:right;display:flex;flex-direction:column;gap:4px;align-items:flex-end">
      <div class="cnt">${last ? relTime(last.t) : ''}</div>
      ${unread ? `<span class="badge-num">${unread}</span>` : ''}
    </div>
  </div></div>`;
}

function openRoom(id) {
  activeRoom = getRooms().find(r => r.id === id);
  if (!activeRoom) return;
  // 읽음 처리
  const ur = store.get('unread', {}); ur[id] = 0; store.set('unread', ur); updateChatBadge();
  $('#chatTitle').textContent = activeRoom.name;
  $('#chatScreen').classList.add('active');
  renderMessages();
  setTimeout(() => $('#chatInput').focus(), 100);
  pushNavState('chat');
}
function closeRoom() {
  $('#chatScreen').classList.remove('active');
  activeRoom = null;
  renderRooms();
  if (!suppressHistoryPush && history.state && history.state.navType === 'chat') history.back();
}
function renderMessages() {
  const body = $('#chatBody');
  const msgs = getMsgs(activeRoom.id);
  if (!msgs.length) {
    body.innerHTML = `<div class="msg sys"><div class="bubble">${activeRoom.emoji} ${escapeHtml(activeRoom.name)} 방이 열렸어요. 첫 인사를 남겨보세요!</div></div>`;
  } else {
    body.innerHTML = msgs.map(msgHtml).join('');
  }
  body.scrollTop = body.scrollHeight;
  $$('.loc-card', body).forEach(el => el.onclick = () => {
    const { lat, lng } = el.dataset; focusOnMap(+lat, +lng); closeRoom();
  });
}
function msgHtml(m) {
  if (m.type === 'sys') return `<div class="msg sys"><div class="bubble">${escapeHtml(m.text)}</div></div>`;
  const mine = m.uid === profile.id;
  const time = new Date(m.t); const ts = `${time.getHours()}:${String(time.getMinutes()).padStart(2,'0')}`;
  let inner = '';
  if (m.type === 'loc') {
    inner = `<div class="bubble loc-card" data-lat="${m.lat}" data-lng="${m.lng}">
      <div class="lmap">📍</div><div class="ltxt">현재 위치를 공유했어요<br><span class="muted">${m.lat.toFixed(4)}, ${m.lng.toFixed(4)} · 탭하여 지도 보기</span></div></div>`;
  } else if (m.type === 'rec') {
    inner = `<div class="bubble loc-card" style="cursor:default"><div class="ltxt">🥾 <b>${escapeHtml(m.name)}</b><br>
      <span class="muted">📏 ${fmtDist(m.dist)} · ⏱ ${fmtDur(m.dur)} · ⛰️ ${Math.round(m.gain)}m</span></div></div>`;
  } else {
    inner = `<div class="bubble">${escapeHtml(m.text)}</div>`;
  }
  return `<div class="msg ${mine ? 'me' : ''}">
    ${mine ? '' : `<div class="who">${escapeHtml(m.name)}</div>`}
    ${inner}<div class="time">${ts}</div></div>`;
}

function sendMessage(type, payload) {
  if (!activeRoom) return;
  const m = Object.assign({ id: uid(), uid: profile.id, name: profile.name, t: Date.now(), room: activeRoom.id, type: type || 'text' }, payload);
  appendMessage(activeRoom.id, m, true);
  chatNet.send(m);
}
function sendText() {
  const inp = $('#chatInput');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = ''; inp.style.height = 'auto';
  sendMessage('text', { text });
}
function shareLocation() {
  if (!lastFix) { toast('현재 위치를 아직 못 찾았어요'); return; }
  sendMessage('loc', { lat: +lastFix.lat.toFixed(6), lng: +lastFix.lng.toFixed(6) });
  toast('현재 위치를 공유했어요 📍');
}
function shareToChat(recId) {
  const r = store.get('records', []).find(x => x.id === recId);
  if (!r) return;
  closeSheet();
  // 방 선택
  const rooms = getRooms();
  openSheet(`<h2>어느 방에 공유할까요?</h2>${rooms.map(rm =>
    `<div class="card"><div class="room-item" data-id="${rm.id}">
      <div class="room-ava" style="background:${rm.color}">${rm.emoji}</div>
      <div class="room-info"><div class="n">${escapeHtml(rm.name)}</div></div></div></div>`).join('')}`);
  $$('.room-item').forEach(el => el.onclick = () => {
    const rid = el.dataset.id;
    const m = { id: uid(), uid: profile.id, name: profile.name, t: Date.now(), room: rid, type: 'rec',
      name2: r.name, dist: r.dist, dur: r.dur, gain: r.gain };
    // rec 메시지는 name 필드 충돌 방지: 별도 처리
    const msg = { id: m.id, uid: profile.id, name: profile.name, t: m.t, room: rid, type: 'rec',
      // 표시용 산행 이름은 별도 키로
      ...{ name: r.name }, dist: r.dist, dur: r.dur, gain: r.gain };
    appendMessage(rid, msg, true); chatNet.send(msg);
    closeSheet(); toast('단톡에 공유했어요 💬'); switchTab('chat'); openRoom(rid);
  });
}

function appendMessage(roomId, m, mine) {
  const msgs = getMsgs(roomId);
  if (msgs.some(x => x.id === m.id)) return;     // 중복 방지
  msgs.push(m); setMsgs(roomId, msgs);
  if (activeRoom && activeRoom.id === roomId) {
    renderMessages();
  } else if (!mine) {
    const ur = store.get('unread', {}); ur[roomId] = (ur[roomId] || 0) + 1; store.set('unread', ur);
    updateChatBadge();
    if (currentTab === 'chat') renderRooms();
  }
}
function updateChatBadge() {
  const ur = store.get('unread', {});
  const total = Object.values(ur).reduce((a, b) => a + b, 0);
  const b = $('#chatBadge');
  b.style.display = total ? 'inline-block' : 'none';
  b.textContent = total > 99 ? '99+' : total;
}

function openCreateRoom() {
  openSheet(`
    <h2>새 단톡방 만들기</h2>
    <div class="field"><label>방 이름</label><input id="newRoomName" placeholder="예: 한라산 1월 정기산행" maxlength="30"></div>
    <div class="field"><label>아이콘</label>
      <div class="color-row" id="emojiRow">${['⛰️','🏔️','🌲','🥾','🏕️','🌄','🧗','🗻'].map((e,i)=>`<div class="color-dot ${i===0?'on':''}" style="background:var(--green-50);font-size:18px;display:grid;place-items:center" data-emoji="${e}">${e}</div>`).join('')}</div>
    </div>
    <div class="field"><label>색상</label>
      <div class="color-row" id="colorRow">${COLORS.map((c,i)=>`<div class="color-dot ${i===0?'on':''}" style="background:${c}" data-color="${c}"></div>`).join('')}</div>
    </div>
    <button class="btn btn-primary btn-block" onclick="createRoom()">만들기</button>
  `);
  let emoji = '⛰️', color = COLORS[0];
  $$('#emojiRow .color-dot').forEach(d => d.onclick = () => { $$('#emojiRow .color-dot').forEach(x=>x.classList.remove('on')); d.classList.add('on'); emoji = d.dataset.emoji; });
  $$('#colorRow .color-dot').forEach(d => d.onclick = () => { $$('#colorRow .color-dot').forEach(x=>x.classList.remove('on')); d.classList.add('on'); color = d.dataset.color; });
  window._newRoom = () => ({ emoji, color });
}
function createRoom() {
  const name = $('#newRoomName').value.trim();
  if (!name) { toast('방 이름을 입력해주세요'); return; }
  const { emoji, color } = window._newRoom();
  const rooms = getRooms();
  rooms.push({ id: uid(), name, emoji, color });
  store.set('rooms', rooms);
  closeSheet(); renderRooms(); toast('단톡방을 만들었어요 🎉');
}

/* ---- 채팅 네트워크: WebSocket 우선, 폴백은 BroadcastChannel + storage 이벤트 ---- */
const chatNet = {
  connected: false, ws: null, bc: null,
  init() {
    // 1) WebSocket 서버 시도 (server.js 가 떠 있을 때)
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    const host = location.hostname || 'localhost';
    const url = `${proto}://${host}:8787`;
    try {
      const ws = new WebSocket(url);
      ws.onopen = () => { this.connected = true; this.ws = ws; ws.send(JSON.stringify({ kind: 'hello', user: profile })); if (currentTab==='chat') renderRooms(); };
      ws.onmessage = ev => { try { const m = JSON.parse(ev.data); if (m.kind === 'msg') appendMessage(m.data.room, m.data, false); } catch {} };
      ws.onclose = () => { this.connected = false; this.ws = null; };
      ws.onerror = () => { try { ws.close(); } catch {} };
    } catch {}
    // 2) 같은 브라우저 탭 간 동기화 (항상 활성)
    try {
      this.bc = new BroadcastChannel('sanbeot-chat');
      this.bc.onmessage = ev => { const m = ev.data; if (m && m.room) appendMessage(m.room, m, false); };
    } catch {}
    window.addEventListener('storage', e => {
      if (e.key === 'sanbeot:relay' && e.newValue) {
        try { const m = JSON.parse(e.newValue); if (m && m.room) appendMessage(m.room, m, false); } catch {}
      }
    });
  },
  send(m) {
    if (this.connected && this.ws) { try { this.ws.send(JSON.stringify({ kind: 'msg', data: m })); } catch {} }
    if (this.bc) { try { this.bc.postMessage(m); } catch {} }
    try { localStorage.setItem('sanbeot:relay', JSON.stringify(m)); } catch {}
  },
};

/* =========================================================================
   내 정보 / 프로필
   ========================================================================= */
function renderProfile() {
  const recs = store.get('records', []);
  const total = recs.reduce((a, r) => ({ dist: a.dist + r.dist, gain: a.gain + r.gain, dur: a.dur + r.dur }), { dist: 0, gain: 0, dur: 0 });
  const stats = computeMyStats();
  const li = stats.levelInfo;
  const v = $('#view-me');
  v.innerHTML = `
    <div class="pad pad-b">
      <div class="card center" style="padding-top:22px">
        <div class="room-ava" style="width:72px;height:72px;border-radius:50%;font-size:32px;margin:0 auto 12px;background:${profile.color};overflow:hidden">${profile.photoURL ? `<img src="${profile.photoURL}" style="width:100%;height:100%;object-fit:cover">` : escapeHtml(profile.name[0])}</div>
        <div style="font-size:20px;font-weight:800">${escapeHtml(profile.name)}</div>
        <div class="muted" style="font-size:11px;margin-top:2px">${AUTH_LABELS[profile.authType] || AUTH_LABELS.guest}${(profile.authType !== 'guest' && profile.email) ? ` · ${escapeHtml(profile.email)}` : ''}</div>
        <div class="muted" style="font-size:12px;margin-top:4px">두마음 산악회와 함께한 산행 ${recs.length}회</div>
        <div class="row" style="justify-content:center;gap:8px;margin-top:12px">
          <button class="btn btn-ghost btn-sm" onclick="openEditProfile()">프로필 수정</button>
          ${profile.authType !== 'guest'
            ? `<button class="btn btn-ghost btn-sm" onclick="logout()">로그아웃</button>`
            : `<button class="btn btn-ghost btn-sm" onclick="openLoginSheet()">로그인</button>`}
        </div>
      </div>
      <div class="card rank-card">
        <div class="rank-top">
          <div class="rank-badge">Lv.${li.level}</div>
          <div class="rank-name">
            <div class="n">${li.tierName}</div>
            <div class="muted" style="font-size:11px">${li.maxed ? '최고 계급 달성!' : `다음 계급까지 ${(li.ceil - li.totalKm).toFixed(1)}km`}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="openLeaderboardSheet()">🏆 랭킹</button>
        </div>
        <div class="bar" style="margin-top:10px"><div class="fill" style="width:${Math.round(li.progress*100)}%"></div></div>
      </div>
      <div class="section-title">뱃지 ${stats.badges.length}/${BADGES.length}</div>
      <div class="card badge-grid">
        ${BADGES.map(b => {
          const on = stats.badges.some(x => x.id === b.id);
          return `<div class="badge-tile ${on ? 'on' : ''}" data-name="${escapeHtml(b.name)}" data-desc="${escapeHtml(b.desc)}"><div class="ic">${on ? b.emoji : '🔒'}</div><div class="t">${escapeHtml(b.name)}</div></div>`;
        }).join('')}
      </div>
      <div class="stat-grid">
        <div class="stat-box"><div class="v">${(total.dist/1000).toFixed(1)}</div><div class="l">총 거리(km)</div></div>
        <div class="stat-box"><div class="v">${Math.round(total.gain/100)/10}</div><div class="l">누적상승(km)</div></div>
        <div class="stat-box"><div class="v">${fmtDur(total.dur).split(':')[0]}</div><div class="l">총 시간</div></div>
      </div>
      <div class="section-title">설정 / 정보</div>
      <div class="card">
        <div class="kv"><span class="k">지도 타입</span><span class="v"><select id="tileSel" style="border:none;font-weight:700;color:var(--green-700)"><option value="topo"${curTile==='topo'?' selected':''}>등고선(지형도)</option><option value="street"${curTile==='street'?' selected':''}>일반 지도</option></select></span></div>
        <div class="kv"><span class="k">기록 데이터</span><span class="v"><a class="link" onclick="exportData()">내보내기</a></span></div>
        <div class="kv"><span class="k">앱 정보</span><span class="v muted" style="font-weight:600">두마음 산악회 v1.0</span></div>
      </div>
      <div class="muted center" style="font-size:11px;line-height:1.6;margin-top:8px">
        🥾 두마음 산악회 — 트랭글·스트라바 스타일 산행 기록 앱<br>
        GPS·지도는 OpenStreetMap / OpenTopoMap 기반입니다.<br>
        안전한 산행 되세요!
      </div>
    </div>`;
  $('#tileSel').onchange = e => { setTile(e.target.value); toast('지도 타입을 바꿨어요'); };
  $$('.badge-tile', v).forEach(el => el.onclick = () => toast(`${el.classList.contains('on') ? '🏅' : '🔒'} ${el.dataset.name} — ${el.dataset.desc}`));
}
function openEditProfile() {
  openSheet(`
    <h2>프로필 수정</h2>
    <div class="field"><label>닉네임</label><input id="pfName" value="${escapeHtml(profile.name)}" maxlength="16"></div>
    <div class="field"><label>색상</label><div class="color-row" id="pfColors">
      ${COLORS.map(c => `<div class="color-dot ${c===profile.color?'on':''}" style="background:${c}" data-color="${c}"></div>`).join('')}
    </div></div>
    <button class="btn btn-primary btn-block" onclick="saveProfile()">저장</button>
  `);
  let color = profile.color;
  $$('#pfColors .color-dot').forEach(d => d.onclick = () => { $$('#pfColors .color-dot').forEach(x=>x.classList.remove('on')); d.classList.add('on'); color = d.dataset.color; });
  window._pfColor = () => color;
}
function saveProfile() {
  const name = $('#pfName').value.trim();
  if (!name) { toast('닉네임을 입력해주세요'); return; }
  profile.name = name; profile.color = window._pfColor();
  store.set('profile', profile);
  closeSheet(); renderProfile(); toast('프로필을 저장했어요');
}
function exportData() {
  const data = { profile, records: store.get('records', []), rooms: getRooms() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `sanbeot-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  toast('데이터를 내보냈어요');
}

/* =========================================================================
   시트 (바텀시트 모달)
   ========================================================================= */
function openSheet(html) {
  const bd = $('#sheetBackdrop');
  $('#sheet').innerHTML = `<div class="grip"></div>` + html;
  bd.classList.add('active');
  pushNavState('sheet');
}
function closeSheet() {
  $('#sheetBackdrop').classList.remove('active');
  if (!suppressHistoryPush && history.state && history.state.navType === 'sheet') history.back();
}

/* =========================================================================
   기타
   ========================================================================= */
function escapeHtml(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

/* =========================================================================
   초기화
   ========================================================================= */
function init() {
  history.replaceState({ navType: 'tab', tab: 'home' }, '');
  renderHome();
  initMap();
  chatNet.init();
  updateChatBadge();
  updateRecUI();

  // 탭
  $$('.tab').forEach(t => t.onclick = () => switchTab(t.dataset.tab));
  // 지도 컨트롤
  $('#btnStart').onclick = startRec;
  $('#btnPause').onclick = pauseRec;
  $('#btnStop').onclick = stopRec;
  $('#fabLocate').onclick = () => { follow = true; if (lastFix) map.setView([lastFix.lat, lastFix.lng], 16); };
  $('#fabLayers').onclick = () => { setTile(curTile === 'topo' ? 'street' : 'topo'); toast(curTile === 'topo' ? '지형도(등고선)' : '일반 지도'); };
  $('#fabChecklist').onclick = openMountainChecklist;
  // 사용자가 지도를 직접 움직이면 따라가기 해제
  // (지도 초기화 후 바인딩)
  setTimeout(() => map && map.on('dragstart', () => { if (!rec.active) follow = false; }), 200);

  // 채팅
  $('#chatBack').onclick = closeRoom;
  $('#chatSend').onclick = sendText;
  $('#chatInput').onkeydown = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendText(); } };
  $('#chatInput').oninput = e => { e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px'; };
  $('#chatPlus').onclick = () => {
    openSheet(`<h2>공유하기</h2>
      <button class="btn btn-ghost btn-block" style="margin-bottom:10px" onclick="closeSheet();shareLocation()">📍 현재 위치 공유</button>
      <button class="btn btn-ghost btn-block" onclick="closeSheet();switchTab('records')">🥾 산행 기록 공유 (기록 탭에서)</button>`);
  };
  // 시트 배경 클릭 시 닫기
  $('#sheetBackdrop').onclick = e => { if (e.target.id === 'sheetBackdrop') closeSheet(); };

  // 서비스워커
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});

  // 첫 방문이면 로그인/게스트 선택 시트 표시
  if (isFirstRun) setTimeout(openLoginSheet, 400);

  // Firebase 세션 확보 후 랭킹 동기화 (설정 안 돼 있으면 조용히 무시됨)
  ensureFirebaseSession().then(() => syncLeaderboard());

  // 회원 등록 산 불러오기 (100대 명산 외 검색용)
  loadCustomMountains().then(() => { if (currentTab === 'guide') renderGuideList(); });
}
document.addEventListener('DOMContentLoaded', init);

// 전역 노출 (인라인 onclick 용)
Object.assign(window, { closeSheet, saveRec, deleteRecord, shareToChat, focusOnMap, openCreateRoom, createRoom,
  openEditProfile, saveProfile, exportData, switchTab, openRoom, shareLocation,
  openLoginSheet, continueAsGuest, loginWithGoogle, loginWithApple, logout, openLeaderboardSheet,
  openCreateEventSheet, saveEvent, deleteEvent, openAddMountainSheet, saveCustomMountain });
