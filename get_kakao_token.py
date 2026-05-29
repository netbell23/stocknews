"""
카카오 액세스 토큰 발급 도우미
──────────────────────────────
1. https://developers.kakao.com 에서 앱 생성
2. 플랫폼 > Web > 사이트 도메인에 http://localhost 추가
3. 카카오 로그인 > 동의항목 > '카카오톡 메시지 전송' 활성화
4. 앱 키 > REST API 키 복사 → REST_API_KEY 에 붙여넣기
5. 이 스크립트 실행 → 브라우저에서 로그인 후 리다이렉트된 URL 복사
"""

import urllib.parse
import webbrowser
import requests

REST_API_KEY = input("REST API 키를 입력하세요: ").strip()
# 카카오 앱 > 보안 > Client Secret 이 '사용함(ON)' 이면 입력, 아니면 그냥 Enter
CLIENT_SECRET = input("Client Secret (없으면 그냥 Enter): ").strip()
REDIRECT_URI = "http://localhost"

# 1단계: 인증 코드 받기
auth_url = (
    "https://kauth.kakao.com/oauth/authorize"
    f"?client_id={REST_API_KEY}"
    f"&redirect_uri={urllib.parse.quote(REDIRECT_URI)}"
    "&response_type=code"
    "&scope=talk_message"  # '카카오톡 메시지 전송' 권한 명시적 요청
)
print(f"\n브라우저가 열립니다. 카카오 로그인 후 리다이렉트된 URL 전체를 복사하세요.")
webbrowser.open(auth_url)

redirected = input("\n리다이렉트된 URL을 붙여넣으세요: ").strip()
code = urllib.parse.parse_qs(urllib.parse.urlparse(redirected).query).get("code", [None])[0]
if not code:
    print("URL에서 code를 찾지 못했습니다.")
    raise SystemExit(1)

# 2단계: 액세스 토큰 발급
token_payload = {
    "grant_type": "authorization_code",
    "client_id": REST_API_KEY,
    "redirect_uri": REDIRECT_URI,
    "code": code,
}
if CLIENT_SECRET:
    token_payload["client_secret"] = CLIENT_SECRET

resp = requests.post(
    "https://kauth.kakao.com/oauth/token",
    data=token_payload,
    timeout=10,
)
token_data = resp.json()
access_token = token_data.get("access_token")
if not access_token:
    print(f"토큰 발급 실패: {token_data}")
    raise SystemExit(1)

refresh_token = token_data.get("refresh_token")

print(f"\n✓ 액세스 토큰 발급 성공!")
print("\n아래 명령들을 그대로 복사해서 PowerShell 에 붙여넣으세요:\n")
print(f'[System.Environment]::SetEnvironmentVariable("KAKAO_ACCESS_TOKEN", "{access_token}", "User")')
print(f'[System.Environment]::SetEnvironmentVariable("KAKAO_REST_API_KEY", "{REST_API_KEY}", "User")')
if CLIENT_SECRET:
    print(f'[System.Environment]::SetEnvironmentVariable("KAKAO_CLIENT_SECRET", "{CLIENT_SECRET}", "User")')
if refresh_token:
    print(f'[System.Environment]::SetEnvironmentVariable("KAKAO_REFRESH_TOKEN", "{refresh_token}", "User")')
print("\n※ 액세스 토큰은 약 6시간 후 만료됩니다.")
print("   REST_API_KEY + REFRESH_TOKEN 을 환경변수에 저장해두면 refresh_token.py 로 자동 갱신됩니다.")
