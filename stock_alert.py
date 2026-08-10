"""
매일 아침 시황(지수/환율/원자재/종목)을 카카오톡으로 전송하고
GitHub Pages 용 그래프 웹페이지(docs/index.html)를 생성한다.
"""

import sys
import requests
import yfinance as yf
from datetime import datetime, timedelta, timezone
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
CORR_URL = os.environ.get("STOCKNEWS_CORR_URL", "https://netbell23.github.io/stocknews/correlation.html")
ISSUES_URL = os.environ.get("STOCKNEWS_ISSUES_URL", "https://netbell23.github.io/stocknews/issues.html")
KOSPILAB_URL = os.environ.get("STOCKNEWS_KOSPILAB_URL", "https://kospilab.com/")

# 조회 항목 정의: (그룹, 표시이름, 티커, 단위, 소수자릿수, 배수)
#  - 배수: JPY 처럼 100엔 단위로 보여주고 싶을 때 사용
SPECS = [
    # 지수
    ("지수",     "KOSPI",          "^KS11",     "pt", 2, 1),
    ("지수",     "KOSDAQ",         "^KQ11",     "pt", 2, 1),
    ("지수",     "S&P500",         "^GSPC",     "pt", 2, 1),
    ("지수",     "나스닥",          "^IXIC",     "pt", 2, 1),
    # 환율 (원/KRW)
    ("환율",     "미국 USD",        "KRW=X",     "원", 2, 1),
    ("환율",     "일본 JPY(100엔)", "JPYKRW=X",  "원", 2, 100),
    ("환율",     "유럽 EUR",        "EURKRW=X",  "원", 2, 1),
    # 원자재 (USD)
    ("원자재",   "WTI 국제유가",     "CL=F",      "$",  2, 1),
    ("원자재",   "금",             "GC=F",      "$",  2, 1),
    # 반도체
    ("국내종목","삼성전자",        "005930.KS", "원", 0, 1),
    ("국내종목","SK하이닉스",      "000660.KS", "원", 0, 1),
    ("국내종목","SK스퀘어",        "402340.KS", "원", 0, 1),
    ("국내종목","한미반도체",      "042700.KS", "원", 0, 1),
    ("국내종목","리노공업",        "058470.KS", "원", 0, 1),
    ("국내종목","DB하이텍",        "000990.KS", "원", 0, 1),
    ("국내종목","원익IPS",         "240810.KS", "원", 0, 1),
    ("국내종목","이오테크닉스",     "039030.KS", "원", 0, 1),
    # 해외 종목 (USD)
    ("해외 종목", "스페이스엑스",     "SPCX",      "$", 2, 1),
    ("해외 종목", "엔비디아",        "NVDA",      "$", 2, 1),
    ("해외 종목", "테슬라",          "TSLA",      "$", 2, 1),
    ("해외 종목", "알파벳(구글)",     "GOOGL",     "$", 2, 1),
]

GROUP_EMOJI = {"지수": "📊", "환율": "💱", "원자재": "🛢️", "국내종목": "🇰🇷", "해외 종목": "🌎"}

# 사용자가 웹 관리페이지에서 편집하는 설정 파일 (없으면 위 하드코딩 SPECS 사용)
WATCHLIST_PATH = os.path.join(BASE_DIR, "docs", "watchlist.json")


def load_config():
    """docs/watchlist.json 을 읽어 (specs, emoji_map) 반환. 실패 시 하드코딩 fallback."""
    try:
        with open(WATCHLIST_PATH, encoding="utf-8") as f:
            cfg = json.load(f)
        specs, emoji = [], {}
        for g in cfg["groups"]:
            title = g["title"]
            emoji[title] = g.get("emoji", "")
            g_unit, g_dec = g.get("unit", ""), g.get("decimals", 2)
            for it in g["items"]:
                specs.append((
                    title, it["name"], it["ticker"],
                    it.get("unit", g_unit), it.get("decimals", g_dec), it.get("mult", 1),
                ))
        if specs:
            return specs, emoji
    except Exception as e:
        print(f"[watchlist.json 로드 실패 — 기본값 사용] {e}")
    return SPECS, GROUP_EMOJI


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
            "name": name, "ticker": ticker, "unit": unit, "decimals": dec,
            "price": price, "change": change, "pct": pct,
            "dates": dates, "closes": closes,
        }
    except Exception as e:
        print(f"[조회 실패] {name}({ticker}): {e}")
        return None


def build_report() -> dict:
    """모든 항목을 한 번씩 조회해 그룹별로 묶은 리포트 구조 반환"""
    specs, emoji_map = load_config()
    groups: dict[str, list] = {}
    order: list[str] = []
    for group, name, ticker, unit, dec, mult in specs:
        if group not in groups:
            groups[group] = []
            order.append(group)
        item = fetch_item({"name": name, "ticker": ticker, "unit": unit,
                           "decimals": dec, "mult": mult})
        if item:
            groups[group].append(item)
    return {
        "generated_at": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "groups": [{"title": g, "emoji": emoji_map.get(g, ""), "items": groups[g]}
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
    # 링크는 카톡이 긴 메시지를 접어도 항상 보이도록 '맨 위'에 모아둔다
    lines.append("🔗 바로가기")
    lines.append(f"· 시황 그래프\n  {PAGE_URL}")
    lines.append(f"· 자산·환율·주가 상관관계\n  {CORR_URL}")
    lines.append(f"· 주요 이슈·실적·뉴스\n  {ISSUES_URL}")
    lines.append(f"· 코스피랩(국내주식 시세 비교)\n  {KOSPILAB_URL}")
    lines.append("")
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
    return "\n".join(lines).rstrip()


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
        # Windows 로컬 실행 시에만 새 토큰을 User 환경변수에 영구 저장(베스트에포트).
        # GitHub Actions(리눅스)에서는 매 실행마다 refresh_token 으로 갱신하므로 저장 불필요.
        if os.name == "nt":
            try:
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
            except Exception as e:
                print(f"[토큰 저장 건너뜀] {e}")
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

    # 상관관계 분석 페이지 생성 (docs/correlation.html)
    try:
        from correlation import analyze, generate_corr_html
        cdata = analyze()
        cout = generate_corr_html(cdata, os.path.join(BASE_DIR, "docs", "correlation.html"))
        print(f"상관관계 페이지 생성: {cout}")
    except Exception as e:
        print(f"[상관관계 페이지 생성 실패] {e}")

    # 주요 이슈 정리 (변곡점/실적/뉴스) → docs/issues.html
    issues_summary = ""
    try:
        import issues as _issues
        from issues_page import generate_issues_html
        idata = _issues.build_issues(report)
        iout = generate_issues_html(idata, os.path.join(BASE_DIR, "docs", "issues.html"))
        print(f"이슈 페이지 생성: {iout}")
        issues_summary = _issues.build_issues_summary(idata)
    except Exception as e:
        print(f"[이슈 정리 실패] {e}")

    # 생활 포털 대시보드 데이터 (docs/portal-data.json)
    try:
        from portal_data import write_portal_data
        pout = write_portal_data(report, os.path.join(BASE_DIR, "docs", "portal-data.json"))
        print(f"포털 데이터 생성: {pout}")
    except Exception as e:
        print(f"[포털 데이터 생성 실패] {e}")

    # GitHub Pages 배포:
    #  - GitHub Actions 에서는 deploy-pages 액션이 docs/ 를 배포하므로 git push 생략
    #  - 로컬에서는 publish.py 가 docs/ 변경분을 커밋·푸시
    in_actions = os.environ.get("GITHUB_ACTIONS") == "true"
    if not in_actions:
        try:
            from publish import publish_page
            publish_page(BASE_DIR)
        except Exception as e:
            print(f"[배포 건너뜀] {e}")

    msg = build_message(report)
    if issues_summary:
        msg += "\n\n" + issues_summary + "\n  ※ 전체 이슈·뉴스는 위 '주요 이슈·실적·뉴스' 링크"
    print("\n" + msg)

    # STOCKNEWS_SEND=0 이면 페이지만 갱신하고 카톡 전송은 건너뜀(장중 10분 갱신용)
    if os.environ.get("STOCKNEWS_SEND", "1") != "1":
        print("\n(STOCKNEWS_SEND=0) 페이지만 갱신, 카톡 전송 생략")
        raise SystemExit(0)

    # 하루 1회 중복 발송 방지(아침 cron 을 여러 번 재시도하므로).
    # 자동 트리거(schedule/repository_dispatch)만 dedup, 수동(workflow_dispatch)은 항상 발송.
    _STATE_PATH = os.path.join(BASE_DIR, "state", "last_sent.txt")
    _today_kst = datetime.now(timezone(timedelta(hours=9))).strftime("%Y-%m-%d")
    _dedup = os.environ.get("GITHUB_EVENT_NAME", "") in ("schedule", "repository_dispatch")
    if _dedup:
        try:
            with open(_STATE_PATH, encoding="utf-8-sig") as f:
                if f.read().strip() == _today_kst:
                    print(f"\n오늘({_today_kst}) 이미 발송됨 — 중복 방지로 건너뜀")
                    raise SystemExit(0)
        except FileNotFoundError:
            pass

    print("\n카카오톡 전송 중...")
    # 액세스 토큰이 없거나(클라우드) 만료됐으면 먼저 갱신
    token = KAKAO_ACCESS_TOKEN
    if not token or token == "YOUR_ACCESS_TOKEN_HERE":
        token = refresh_access_token() or token
    ok = send_kakao(msg, token)
    if not ok:
        print("전송 실패 — 토큰 갱신 후 재시도합니다...")
        new_token = refresh_access_token()
        if new_token:
            ok = send_kakao(msg, new_token)

    if ok:
        print("✓ 전송 완료")
        # 성공 시 오늘 발송 기록(중복 방지용). 워크플로가 이 파일을 커밋·푸시함.
        if _dedup:
            os.makedirs(os.path.dirname(_STATE_PATH), exist_ok=True)
            with open(_STATE_PATH, "w", encoding="utf-8") as f:
                f.write(_today_kst)
    else:
        print("✗ 전송 실패 — 토큰/권한 설정을 확인하세요")
        # Actions 에서는 전송 실패해도 페이지 배포는 진행되도록 종료코드 0
        if not in_actions:
            raise SystemExit(1)
