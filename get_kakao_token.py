"""
카카오 액세스 토큰 발급 도우미
──────────────────────────────
1. https://developers.kakao.com 에서 앱 생성
2. 플랫폼 > Web > 사이트 도메인에 http://localhost 추가
3. 카카오 로그인 > 동의항목 > '카카오톡 메시지 전송' 활성화
4. 앱 키 > REST API 키 복사 → REST_API_KEY 에 붙여넣기
5. 이 스크립트 실행 → 브라우저에서 로그인 후 리다이렉트된 URL 복사
"""

import os
import subprocess
import urllib.parse
import webbrowser
import requests

# 기존 환경변수를 기본값으로 사용 (그냥 Enter 치면 기존 값 재사용)
_env_key = os.environ.get("KAKAO_REST_API_KEY", "")
_env_sec = os.environ.get("KAKAO_CLIENT_SECRET", "")
REST_API_KEY = (input(f"REST API 키 (Enter=기존값 재사용): ").strip() or _env_key).strip()
CLIENT_SECRET = (input(f"Client Secret (Enter=기존값 재사용, 없으면 빈칸): ").strip() or _env_sec).strip()
REDIRECT_URI = "http://localhost"
if not REST_API_KEY:
    print("REST API 키가 필요합니다.")
    raise SystemExit(1)

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


def _save_user_env(name, val):
    """Windows User 환경변수에 저장(베스트에포트)"""
    if not val:
        return
    if os.name == "nt":
        subprocess.run(
            ["powershell", "-NoProfile", "-Command",
             f'[Environment]::SetEnvironmentVariable("{name}","{val}","User")'],
            check=False,
        )


# User 환경변수에 자동 저장 (복사-붙여넣기 불필요)
_save_user_env("KAKAO_ACCESS_TOKEN", access_token)
_save_user_env("KAKAO_REST_API_KEY", REST_API_KEY)
_save_user_env("KAKAO_CLIENT_SECRET", CLIENT_SECRET)
_save_user_env("KAKAO_REFRESH_TOKEN", refresh_token)
print("✓ User 환경변수에 자동 저장 완료 (KAKAO_ACCESS_TOKEN / REST_API_KEY / CLIENT_SECRET / REFRESH_TOKEN)")
print("\n다음 단계: GitHub Secret(KAKAO_REFRESH_TOKEN) 업데이트가 필요합니다.")
print("  Claude 에게 '토큰 갱신했어, GitHub Secret 업데이트해줘' 라고 하면 자동으로 반영합니다.")
print("  (수동: https://github.com/netbell23/stocknews/settings/secrets/actions )")
