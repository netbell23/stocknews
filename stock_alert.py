"""
매일 아침 시황(지수/환율/원자재/종목)을 카카오톡으로 전송하고
GitHub Pages 용 그래프 웹페이지(docs/index.html)를 생성한다.
"""

import sys
import requests
import yfinance as yf
from datetime import datetime
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

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
_LOG_PATH = os.path.join(BASE_DIR, "stock_alert.log")
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

# GitHub Pages 로 배포될 그래프 페이지 주소 (카톡 메시지 링크)
PAGE_URL = os.environ.get("STOCKNEWS_PAGE_URL", "https://netbell23.github.io/stocknews/")

# 조회 항목 정의: (그룹, 표시이름, 티커, 단위, 소수자릿수, 배수)
#  - 배수: JPY 처럼 100엔 단위로 보여주고 싶을 때 사용
SPECS = [
    # 지수
    ("지수",     "KOSPI",          "^KS11",     "pt", 2, 1),
    ("지수",     "KOSDAQ",         "^KQ11",     "pt", 2, 1),
    # 환율 (원/KRW)
    ("환율",     "미국 USD",        "KRW=X",     "원", 2, 1),
    ("환율",     "일본 JPY(100엔)", "JPYKRW=X",  "원", 2, 100),
    ("환율",     "유럽 EUR",        "EURKRW=X",  "원", 2, 1),
    # 원자재 (USD)
    ("원자재",   "WTI 국제유가",     "CL=F",      "$",  2, 1),
    ("원자재",   "금",             "GC=F",      "$",  2, 1),
    # 반도체
    ("반도체",   "삼성전자",        "005930.KS", "원", 0, 1),
    ("반도체",   "SK하이닉스",      "000660.KS", "원", 0, 1),
    ("반도체",   "한미반도체",      "042700.KS", "원", 0, 1),
    ("반도체",   "리노공업",        "058470.KS", "원", 0, 1),
    ("반도체",   "DB하이텍",        "000990.KS", "원", 0, 1),
    ("반도체",   "원익IPS",         "240810.KS", "원", 0, 1),
    ("반도체",   "이오테크닉스",     "039030.KS", "원", 0, 1),
    # 관심 종목
    ("관심종목", "컴투스",          "078340.KQ", "원", 0, 1),
    ("관심종목", "신라젠",          "215600.KQ", "원", 0, 1),
]

GROUP_EMOJI = {"지수": "📊", "환율": "💱", "원자재": "🛢️", "반도체": "💾", "관심종목": "⭐"}


# ──────────────────────────────────────────────
# 데이터 조회
# ──────────────────────────────────────────────

def fetch_item(spec: dict) -> dict | None:
    """한 종목/지표의 현재가·등락·차트용 시계열을 반환"""
    name, ticker, unit, dec, mult = (
        spec["name"], spec["ticker"], spec["unit"], spec["decimals"], spec["mult"]
    )
    try:
        hist = yf.Ticker(ticker).history(period="1mo")
        if hist.empty:
            return None
        closes = [float(c) * mult for c in hist["Close"].tolist()]
        dates = [d.strftime("%m/%d") for d in hist.index]
        price = closes[-1]
        prev = closes[-2] if len(closes) >= 2 else price
        change = price - prev
        pct = (change / prev * 100) if prev else 0.0
        return {
            "name": name, "unit": unit, "decimals": dec,
            "price": price, "change": change, "pct": pct,
            "dates": dates, "closes": closes,
        }
    except Exception as e:
        print(f"[조회 실패] {name}({ticker}): {e}")
        return None


def build_report() -> dict:
    """모든 항목을 한 번씩 조회해 그룹별로 묶은 리포트 구조 반환"""
    groups: dict[str, list] = {}
    order: list[str] = []
    for group, name, ticker, unit, dec, mult in SPECS:
        if group not in groups:
            groups[group] = []
            order.append(group)
        item = fetch_item({"name": name, "ticker": ticker, "unit": unit,
                           "decimals": dec, "mult": mult})
        if item:
            groups[group].append(item)
    return {
        "generated_at": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "groups": [{"title": g, "emoji": GROUP_EMOJI.get(g, ""), "items": groups[g]}
                   for g in order],
    }


# ──────────────────────────────────────────────
# 카카오 메시지 텍스트
# ──────────────────────────────────────────────

def _arrow(pct: float) -> str:
    return "▲" if pct > 0 else ("▼" if pct < 0 else "━")


def _fmt_value(v: float, dec: int) -> str:
    return f"{v:,.{dec}f}"


def build_message(report: dict) -> str:
    lines = [f"📈 오늘의 시황 — {report['generated_at']}\n"]
    for grp in report["groups"]:
        if not grp["items"]:
            continue
        lines.append(f"{grp['emoji']} {grp['title']}")
        for it in grp["items"]:
            a = _arrow(it["pct"])
            sign = "+" if it["change"] >= 0 else ""
            val = _fmt_value(it["price"], it["decimals"])
            chg = _fmt_value(it["change"], it["decimals"])
            lines.append(
                f"  {it['name']:<12} {val}{it['unit']}  "
                f"{a} {sign}{chg} ({sign}{it['pct']:.2f}%)"
            )
        lines.append("")
    lines.append(f"📉 그래프 자세히 보기\n{PAGE_URL}")
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
        import subprocess
        subprocess.run(
            ["powershell", "-NoProfile", "-Command",
             f'[Environment]::SetEnvironmentVariable("KAKAO_ACCESS_TOKEN","{new_token}","User")'],
            check=False,
        )
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
            "link": {"web_url": PAGE_URL, "mobile_web_url": PAGE_URL},
            "button_title": "그래프 보기",
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
    print("데이터 수집 중...")
    report = build_report()

    # 그래프 웹페이지 생성 (docs/index.html)
    try:
        from web_page import generate_html
        out = generate_html(report, os.path.join(BASE_DIR, "docs", "index.html"))
        print(f"웹페이지 생성: {out}")
    except Exception as e:
        print(f"[웹페이지 생성 실패] {e}")

    # GitHub Pages 로 자동 배포 (push 자격증명이 있으면 성공)
    try:
        from publish import publish_page
        publish_page(BASE_DIR)
    except Exception as e:
        print(f"[배포 건너뜀] {e}")

    msg = build_message(report)
    print("\n" + msg)

    print("\n카카오톡 전송 중...")
    ok = send_kakao(msg, KAKAO_ACCESS_TOKEN)
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
