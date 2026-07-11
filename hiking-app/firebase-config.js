/* =========================================================================
   두마음 산악회 — Firebase 로그인(Google/Apple/게스트) + 랭킹(Firestore) 설정
   ⚠️ 아래 값을 본인 Firebase 프로젝트 값으로 바꿔야 로그인·랭킹이 동작합니다.
   값을 바꾸기 전까지는 게스트 모드로만 정상 동작하고, 랭킹 탭은 "설정 전" 안내만 뜹니다.

   설정 방법 (Google/게스트는 무료 10분, Apple 로그인은 아래 별도 안내 참고):
   1) https://console.firebase.google.com 접속 → "프로젝트 추가"
   2) 왼쪽 메뉴 "빌드 > Authentication" → "시작하기" → Sign-in method 탭에서
      "Google" 그리고 "익명(Anonymous)" 둘 다 사용 설정
      (게스트도 랭킹에 안전하게 기록을 쓸 수 있도록 익명 인증을 함께 씁니다)

      ── Apple 로그인을 켜려면 (선택, 유료) ──
      · Apple Developer Program 가입이 필요합니다 ($99/년, developer.apple.com).
      · Apple Developer 사이트에서 Services ID 생성 + "Sign in with Apple" 활성화,
        Return URL에 Firebase가 알려주는 콜백 주소 등록.
      · Firebase Authentication → Sign-in method → "Apple" 추가 → 위에서 만든
        Services ID / Team ID / Key ID / 개인 키를 입력하고 저장.
      · 가입 전이거나 설정을 건너뛰어도 앱은 정상 동작합니다 — "Apple로 계속하기"
        버튼을 누르면 "로그인이 아직 설정 전이에요" 안내만 뜨고 게스트/Google은 그대로 씁니다.

   3) 왼쪽 메뉴 "빌드 > Firestore Database" → "데이터베이스 만들기" → 원하는 리전 선택
      → 규칙(Rules) 탭에서 아래 내용으로 통째로 교체하고 "게시":

      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /leaderboard/{userId} {
            allow read: if true;
            allow write: if request.auth != null && request.auth.uid == userId;
          }
          match /events/{eventId} {
            allow read: if true;
            allow create: if request.auth != null;
            allow update, delete: if request.auth != null && request.auth.uid == resource.data.creatorId;
            match /participants/{userId} {
              allow read: if true;
              allow write: if request.auth != null && request.auth.uid == userId;
            }
          }
        }
      }
      (누구나 랭킹·일정은 볼 수 있고, 본인 랭킹 기록은 본인만, 일정은 만든 사람만
       수정/삭제할 수 있습니다. 일정 참여(participants)는 각자 자기 몫만 등록/취소
       가능 — 홈 탭의 "산행 일정 만들기"·"참여하기" 기능에 필요한 규칙입니다.
       이름/색상/거리 등 필요한 정보만 저장하며, 이메일은 저장하지 않습니다.)

   4) 프로젝트 설정(⚙️) → 일반 탭 → 맨 아래 "내 앱" → 웹 앱 추가(</> 아이콘) → 앱 닉네임 아무거나 입력
   5) 발급되는 firebaseConfig 값을 아래 FIREBASE_CONFIG 자리에 그대로 붙여넣기
   6) Authentication → Settings → "승인된 도메인"에 실제 서비스 도메인 추가
      예) netbell23.github.io (GitHub Pages 주소)
   ========================================================================= */
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyC2UOAlCLy6vttn0n6dRQG7_wJAszVVKxc',
  authDomain: 'domaum.firebaseapp.com',
  projectId: 'domaum',
  storageBucket: 'domaum.firebasestorage.app',
  messagingSenderId: '741966388043',
  appId: '1:741966388043:web:5272b8ec42f646d1c1a6ce',
};
