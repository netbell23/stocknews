"""
카카오 리프레시 토큰으로 액세스 토큰 자동 갱신
──────────────────────────────────────────────
get_kakao_token.py 로 최초 발급 후, refresh_token 을 환경변수에 저장해두면
이 스크립트가 매번 액세스 토큰을 자동 갱신합니다.

환경변수:
  KAKAO_REST_API_KEY   — REST API 키
  KAKAO_REFRESH_TOKEN  — 리프레시 토큰 (최초 1회 수동 설정)
"""

import requests
import os
import sys

REST_API_KEY   = os.environ.get("KAKAO_REST_API_KEY", "")
REFRESH_TOKEN  = os.environ.get("KAKAO_REFRESH_TOKEN", "")

if not REST_API_KEY or not REFRESH_TOKEN:
    print("환경변수 KAKAO_REST_API_KEY, KAKAO_REFRESH_TOKEN 을 먼저 설정하세요.")
    sys.exit(1)

resp = requests.post(
    "https://kauth.kakao.com/oauth/token",
    data={
        "grant_type": "refresh_token",
        "client_id": REST_API_KEY,
        "refresh_token": REFRESH_TOKEN,
    },
    timeout=10,
)
data = resp.json()
new_token = data.get("access_token")
if not new_token:
    print(f"갱신 실패: {data}")
    sys.exit(1)

# 환경변수 업데이트 (현재 프로세스 및 사용자 범위)
import subprocess
subprocess.run(
    ["powershell", "-Command",
     f'[System.Environment]::SetEnvironmentVariable("KAKAO_ACCESS_TOKEN", "{new_token}", "User")'],
    check=True,
)

# 리프레시 토큰도 갱신된 경우 저장
if new_rf := data.get("refresh_token"):
    subprocess.run(
        ["powershell", "-Command",
         f'[System.Environment]::SetEnvironmentVariable("KAKAO_REFRESH_TOKEN", "{new_rf}", "User")'],
        check=True,
    )
    print("리프레시 토큰도 갱신되었습니다.")

print(f"✓ 액세스 토큰 갱신 완료")
