/* =========================================================================
   두마음 산악회 — Firebase 로그인(Google) 설정
   ⚠️ 아래 값을 본인 Firebase 프로젝트 값으로 바꿔야 Google 로그인이 동작합니다.
   값을 바꾸기 전까지는 "게스트로 시작하기"만 동작하고, 앱은 정상적으로 잘 돌아갑니다.

   설정 방법 (무료, 5분):
   1) https://console.firebase.google.com 접속 → "프로젝트 추가"
   2) 왼쪽 메뉴 "빌드 > Authentication" → "시작하기" → Sign-in method 탭에서 "Google" 사용 설정
   3) 프로젝트 설정(⚙️) → 일반 탭 → 맨 아래 "내 앱" → 웹 앱 추가(</> 아이콘) → 앱 닉네임 아무거나 입력
   4) 발급되는 firebaseConfig 값을 아래 FIREBASE_CONFIG 자리에 그대로 붙여넣기
   5) Authentication → Settings → "승인된 도메인"에 실제 서비스 도메인 추가
      예) netbell23.github.io (GitHub Pages 주소)
   ========================================================================= */
const FIREBASE_CONFIG = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
