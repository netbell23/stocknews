"""
매일 아침 KOSPI, KOSDAQ, 반도체 주가를 카카오톡 나에게 보내기로 전송
"""

import sys
import requests
import yfinance as yf
from datetime import datetime, timedelta
import json
import os

# Windows 콘솔(cp949)에서도 이모지/한글이 깨지지 않도록 UTF-8 출력 강제
try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass

# 콘솔 + 로그파일에 동시에 출력 (작업 스케줄러 무인 실행 디버깅용)
class _Tee:
    def __init__(self, *streams):
        self.streams = streams
    def write(self, data):
        for s in self.streams:
            try:
                s.write(data)
            except Exception:
                pass
    def flush(self):
        for s in self.streams:
            try:
                s.flush()
            except Exception:
                pass

_LOG_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "stock_alert.log")
try:
    _logfile = open(_LOG_PATH, "a", encoding="utf-8")
    _logfile.write(f"\n===== {datetime.now():%Y-%m-%d %H:%M:%S} 실행 =====\n")
    sys.stdout = _Tee(sys.stdout, _logfile)
    sys.stderr = sys.stdout
except Exception:
    pass

# ──────────────────────────────────────────────
# 설정
# ──────────────────────────────────────────────

KAKAO_ACCESS_TOKEN = os.environ.get("KAKAO_ACCESS_TOKEN", "YOUR_ACCESS_TOKEN_HERE")
KAKAO_REST_API_KEY = os.environ.get("KAKAO_REST_API_KEY", "")
KAKAO_CLIENT_SECRET = os.environ.get("KAKAO_CLIENT_SECRET", "")
KAKAO_REFRESH_TOKEN = os.environ.get("KAKAO_REFRESH_TOKEN", "")

# 지수
INDICES = {
    "KOSPI": "^KS11",
    "KOSDAQ": "^KQ11",
}

# 주요 반도체 종목 (KRX 티커.KS / .KQ)
SEMICONDUCTOR_STOCKS = {
    "삼성전자":   "005930.KS",
    "SK하이닉스": "000660.KS",
    "한미반도체": "042700.KS",
    "리노공업":   "058470.KS",
    "DB하이텍":   "000990.KS",
    "원익IPS":    "240810.KS",
    "이오테크닉스": "039030.KS",
}


# ──────────────────────────────────────────────
# 주가 조회
# ──────────────────────────────────────────────

def fetch_quote(ticker: str) -> dict | None:
    """당일(또는 가장 최근) 종가·등락 반환"""
    try:
        tk = yf.Ticker(ticker)
        # 최근 5일치를 가져와서 마지막 데이터 사용 (장 미개장일 대비)
        hist = tk.history(period="5d")
        if hist.empty:
            return None
        last = hist.iloc[-1]
        prev = hist.iloc[-2] if len(hist) >= 2 else last
        price = last["Close"]
        change = price - prev["Close"]
        pct = (change / prev["Close"]) * 100
        return {"price": price, "change": change, "pct": pct}
    except Exception:
        return None


def arrow(pct: float) -> str:
    if pct > 0:
        return "▲"
    if pct < 0:
        return "▼"
    return "━"


def format_index(name: str, data: dict) -> str:
    a = arrow(data["pct"])
    sign = "+" if data["change"] >= 0 else ""
    return (
        f"[{name}]\n"
        f"  {data['price']:,.2f}pt  {a} {sign}{data['change']:,.2f} ({sign}{data['pct']:.2f}%)"
    )


def format_stock(name: str, data: dict) -> str:
    a = arrow(data["pct"])
    sign = "+" if data["change"] >= 0 else ""
    return (
        f"  {name:<10} {data['price']:>8,.0f}원  "
        f"{a} {sign}{data['change']:>6,.0f} ({sign}{data['pct']:.2f}%)"
    )


def build_message() -> str:
    today = datetime.now().strftime("%Y-%m-%d (%a)")
    lines = [f"📈 주식 시황 — {today}\n"]

    # 지수
    lines.append("── 지수 ──────────────────")
    for name, ticker in INDICES.items():
        data = fetch_quote(ticker)
        if data:
            lines.append(format_index(name, data))
        else:
            lines.append(f"[{name}] 데이터 없음")

    # 반도체
    lines.append("\n── 반도체 ────────────────")
    for name, ticker in SEMICONDUCTOR_STOCKS.items():
        data = fetch_quote(ticker)
        if data:
            lines.append(format_stock(name, data))
        else:
            lines.append(f"  {name}: 데이터 없음")

    lines.append("\n─────────────────────────")
    return "\n".join(lines)


# ──────────────────────────────────────────────
# 카카오톡 전송
# ──────────────────────────────────────────────

def refresh_access_token() -> str | None:
    """리프레시 토큰으로 새 액세스 토큰 발급. 성공 시 새 토큰 문자열 반환."""
    if not (KAKAO_REST_API_KEY and KAKAO_REFRESH_TOKEN):
        return None
    data = {
        "grant_type": "refresh_token",
        "client_id": KAKAO_REST_API_KEY,
        "refresh_token": KAKAO_REFRESH_TOKEN,
    }
    if KAKAO_CLIENT_SECRET:
        data["client_secret"] = KAKAO_CLIENT_SECRET
    try:
        resp = requests.post("https://kauth.kakao.com/oauth/token", data=data, timeout=10)
        body = resp.json()
        new_token = body.get("access_token")
        if not new_token:
            print(f"[토큰 갱신 실패] {body}")
            return None
        # 새 토큰을 사용자 환경변수에 영구 저장
        import subprocess
        subprocess.run(
            ["powershell", "-NoProfile", "-Command",
             f'[Environment]::SetEnvironmentVariable("KAKAO_ACCESS_TOKEN","{new_token}","User")'],
            check=False,
        )
        # 리프레시 토큰이 함께 갱신된 경우도 저장
        if new_rf := body.get("refresh_token"):
            subprocess.run(
                ["powershell", "-NoProfile", "-Command",
                 f'[Environment]::SetEnvironmentVariable("KAKAO_REFRESH_TOKEN","{new_rf}","User")'],
                check=False,
            )
        print("✓ 액세스 토큰 자동 갱신 완료")
        return new_token
    except Exception as e:
        print(f"[토큰 갱신 예외] {e}")
        return None


def send_kakao(message: str, access_token: str) -> bool:
    """카카오 나에게 보내기 API 호출"""
    url = "https://kapi.kakao.com/v2/api/talk/memo/default/send"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/x-www-form-urlencoded",
    }
    payload = {
        "template_object": json.dumps({
            "object_type": "text",
            "text": message,
            "link": {
                "web_url": "https://finance.naver.com",
                "mobile_web_url": "https://finance.naver.com",
            },
        })
    }
    resp = requests.post(url, headers=headers, data=payload, timeout=10)
    if resp.status_code == 200 and resp.json().get("result_code") == 0:
        return True
    print(f"[카카오 API 오류] {resp.status_code}: {resp.text}")
    return False


# ──────────────────────────────────────────────
# 메인
# ──────────────────────────────────────────────

if __name__ == "__main__":
    print("주가 데이터 수집 중...")
    msg = build_message()
    print(msg)

    print("\n카카오톡 전송 중...")
    token = KAKAO_ACCESS_TOKEN
    ok = send_kakao(msg, token)

    # 토큰 만료(401) 등으로 실패하면 자동 갱신 후 1회 재시도
    if not ok:
        print("전송 실패 — 토큰 갱신 후 재시도합니다...")
        new_token = refresh_access_token()
        if new_token:
            ok = send_kakao(msg, new_token)

    if ok:
        print("✓ 전송 완료")
    else:
        print("✗ 전송 실패 — 토큰/권한 설정을 확인하세요")
        raise SystemExit(1)
