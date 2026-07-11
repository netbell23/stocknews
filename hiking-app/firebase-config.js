/* =========================================================================
   두마음 산악회 — Firebase 로그인(Google/게스트) + 랭킹(Firestore) 설정
   ⚠️ 아래 값을 본인 Firebase 프로젝트 값으로 바꿔야 로그인·랭킹이 동작합니다.
   값을 바꾸기 전까지는 게스트 모드로만 정상 동작하고, 랭킹 탭은 "설정 전" 안내만 뜹니다.

   설정 방법 (무료, 10분):
   1) https://console.firebase.google.com 접속 → "프로젝트 추가"
   2) 왼쪽 메뉴 "빌드 > Authentication" → "시작하기" → Sign-in method 탭에서
      "Google" 그리고 "익명(Anonymous)" 둘 다 사용 설정
      (게스트도 랭킹에 안전하게 기록을 쓸 수 있도록 익명 인증을 함께 씁니다)
   3) 왼쪽 메뉴 "빌드 > Firestore Database" → "데이터베이스 만들기" → 원하는 리전 선택
      → 규칙(Rules) 탭에서 아래 내용으로 통째로 교체하고 "게시":

      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /leaderboard/{userId} {
            allow read: if true;
            allow write: if request.auth != null && request.auth.uid == userId;
          }
        }
      }
      (누구나 랭킹은 볼 수 있고, 본인 기록은 본인만 쓸 수 있게 하는 규칙입니다.
       이름/색상/거리 등 랭킹에 필요한 정보만 저장하며, 이메일은 저장하지 않습니다.)

   4) 프로젝트 설정(⚙️) → 일반 탭 → 맨 아래 "내 앱" → 웹 앱 추가(</> 아이콘) → 앱 닉네임 아무거나 입력
   5) 발급되는 firebaseConfig 값을 아래 FIREBASE_CONFIG 자리에 그대로 붙여넣기
   6) Authentication → Settings → "승인된 도메인"에 실제 서비스 도메인 추가
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
