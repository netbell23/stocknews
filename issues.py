"""
시황 주요 이슈 정리 (무료·키 불필요):
  1) 변곡점 자동 감지 — 추적 자산 중 변동성 대비 비정상적으로 크게 움직인 항목
  2) 다가오는 실적 발표 일정 — yfinance earnings dates
  3) 금리·중앙은행 동향 — 관련 뉴스 헤드라인
  4) 뉴스 헤드라인 — 국내 증시/경제, 글로벌 증시, 지정학·전쟁·재난 (Google News RSS)

단독 실행:  python issues.py
"""

import sys
import os
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

import requests

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "Mozilla/5.0"}

# 실적 일정을 조회할 종목 (지수/환율/원자재는 제외)
EARNINGS_TICKERS = {
    "삼성전자": "005930.KS", "SK하이닉스": "000660.KS", "한미반도체": "042700.KS",
    "리노공업": "058470.KS", "DB하이텍": "000990.KS", "원익IPS": "240810.KS",
    "이오테크닉스": "039030.KS",
    "엔비디아": "NVDA", "테슬라": "TSLA", "알파벳": "GOOGL",
}

# 뉴스 카테고리별 검색어 (Google News RSS)
NEWS_QUERIES = [
    ("국내 증시·경제", "코스피 OR 코스닥 OR 증시 OR 환율 OR 반도체", "ko", "KR", "KR:ko"),
    ("금리·중앙은행",  "기준금리 OR 한국은행 OR 연준 OR FOMC OR ECB OR 일본은행", "ko", "KR", "KR:ko"),
    ("글로벌 증시",    "stock market OR S&P 500 OR Nasdaq OR earnings OR Fed", "en-US", "US", "US:en"),
    ("지정학·전쟁·재난", "지정학 리스크 OR 전쟁 OR 중동 OR 우크라이나 OR 유가 OR 지진 OR 재난", "ko", "KR", "KR:ko"),
]

# 최신동향 카테고리별 검색어 (별도 섹션)
TREND_QUERIES = [
    ("AI·반도체", "AI OR 인공지능 OR 반도체 OR GPU OR HBM OR 엔비디아 OR 생성형", "ko", "KR", "KR:ko"),
    ("게임·콘텐츠", "게임 OR 콘텐츠 OR 메타버스 OR 웹툰 OR OTT OR 인터랙티브", "ko", "KR", "KR:ko"),
    ("내 종목", "삼성전자 OR SK하이닉스 OR 엔비디아 OR 테슬라 OR 스페이스엑스 OR 알파벳", "ko", "KR", "KR:ko"),
    ("IT·스타트업·투자", "스타트업 OR 벤처투자 OR IPO OR 유니콘 OR 시리즈A OR 신기술", "ko", "KR", "KR:ko"),
]


# ──────────────────────────────────────────────
# 1) 변곡점 자동 감지
# ──────────────────────────────────────────────

def detect_movers(report: dict, max_n: int = 5) -> list[dict]:
    """report(stock_alert.build_report 결과)에서 변동성 대비 큰 움직임을 골라낸다."""
    movers = []
    for grp in report.get("groups", []):
        for it in grp["items"]:
            closes = it.get("closes") or []
            if len(closes) < 6:
                continue
            rets = [(closes[i] - closes[i - 1]) / closes[i - 1]
                    for i in range(1, len(closes)) if closes[i - 1]]
            if len(rets) < 5:
                continue
            mean = sum(rets) / len(rets)
            var = sum((r - mean) ** 2 for r in rets) / len(rets)
            std = var ** 0.5
            today = it["pct"] / 100.0
            z = today / std if std else 0.0
            movers.append({
                "name": it["name"], "group": grp["title"],
                "pct": it["pct"], "z": z, "unit": it["unit"],
            })
    # 변동성 대비(z) 절댓값이 큰 순
    movers.sort(key=lambda m: abs(m["z"]), reverse=True)
    picked = []
    for m in movers:
        # 변동성 2배 이상이거나 절대 3% 이상일 때만 '변곡점'으로
        if abs(m["z"]) >= 2.0 or abs(m["pct"]) >= 3.0:
            direction = "급등" if m["pct"] > 0 else "급락"
            m["note"] = f"{direction} · 변동성 대비 {abs(m['z']):.1f}배"
            picked.append(m)
        if len(picked) >= max_n:
            break
    return picked


# ──────────────────────────────────────────────
# 2) 다가오는 실적 발표 일정
# ──────────────────────────────────────────────

def upcoming_earnings(within_days: int = 90, max_n: int = 8) -> list[dict]:
    import logging
    import pandas as pd
    import yfinance as yf
    logging.getLogger("yfinance").setLevel(logging.CRITICAL)  # "No earnings dates" 잡음 억제
    now = pd.Timestamp.now(tz="UTC")
    out = []
    for name, ticker in EARNINGS_TICKERS.items():
        try:
            ed = yf.Ticker(ticker).get_earnings_dates(limit=12)
            if ed is None or ed.empty:
                continue
            idx = ed.index.tz_convert("UTC") if ed.index.tz else ed.index.tz_localize("UTC")
            future = [d for d in idx if d > now]
            if not future:
                continue
            nxt = min(future)
            days = (nxt - now).days
            if 0 <= days <= within_days:
                out.append({"name": name, "date": nxt.strftime("%Y-%m-%d"), "days": days})
        except Exception:
            continue
    out.sort(key=lambda e: e["days"])
    return out[:max_n]


# ──────────────────────────────────────────────
# 3+4) 뉴스 헤드라인 (Google News RSS)
# ──────────────────────────────────────────────

def _rel_time(pub: str) -> str:
    try:
        dt = parsedate_to_datetime(pub)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        diff = datetime.now(timezone.utc) - dt
        h = diff.total_seconds() / 3600
        if h < 1:
            return f"{int(diff.total_seconds() / 60)}분 전"
        if h < 24:
            return f"{int(h)}시간 전"
        return f"{int(h / 24)}일 전"
    except Exception:
        return ""


def _strip_source(title: str, source: str) -> str:
    if source and title.endswith(f" - {source}"):
        return title[: -(len(source) + 3)]
    # 흔히 ' - 매체명' 으로 끝남
    if " - " in title:
        return title.rsplit(" - ", 1)[0]
    return title


def fetch_news(query: str, hl: str, gl: str, ceid: str, n: int = 5) -> list[dict]:
    url = ("https://news.google.com/rss/search?q="
           f"{urllib.parse.quote(query)}&hl={hl}&gl={gl}&ceid={ceid}")
    try:
        r = requests.get(url, headers=UA, timeout=10)
        root = ET.fromstring(r.content)
    except Exception as e:
        print(f"[뉴스 조회 실패] {query[:20]}...: {e}")
        return []
    items = []
    for it in root.findall(".//item")[:n]:
        title = (it.findtext("title") or "").strip()
        link = (it.findtext("link") or "").strip()
        src_el = it.find("source")
        source = src_el.text.strip() if src_el is not None and src_el.text else ""
        pub = it.findtext("pubDate") or ""
        items.append({
            "title": _strip_source(title, source),
            "link": link, "source": source, "time": _rel_time(pub),
        })
    return items


# ──────────────────────────────────────────────
# 종합 리포트
# ──────────────────────────────────────────────

def build_issues(report: dict) -> dict:
    print("이슈 수집: 변곡점 분석...")
    movers = detect_movers(report)
    print("이슈 수집: 실적 일정...")
    try:
        earnings = upcoming_earnings()
    except Exception as e:
        print(f"[실적 일정 실패] {e}")
        earnings = []
    print("이슈 수집: 뉴스 헤드라인...")
    news = []
    for title, q, hl, gl, ceid in NEWS_QUERIES:
        news.append({"category": title, "items": fetch_news(q, hl, gl, ceid)})

    print("이슈 수집: 최신동향...")
    trends = []
    for title, q, hl, gl, ceid in TREND_QUERIES:
        trends.append({"category": title, "items": fetch_news(q, hl, gl, ceid, n=4)})

    print("이슈 수집: 제작지원 공고(KOCCA/NIPA/RAPA)...")
    try:
        import gov_notices
        notices = gov_notices.fetch_notices()
    except Exception as e:
        print(f"[공고 수집 실패] {e}")
        notices = []

    return {
        "generated_at": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "movers": movers,
        "earnings": earnings,
        "news": news,
        "trends": trends,
        "notices": notices,
    }


# ──────────────────────────────────────────────
# 카카오 요약 텍스트
# ──────────────────────────────────────────────

def build_issues_summary(data: dict, corr_url: str = "") -> str:
    lines = ["📰 주요 이슈"]
    if data["movers"]:
        m = data["movers"][0]
        sign = "+" if m["pct"] >= 0 else ""
        lines.append(f"  • 변곡점: {m['name']} {sign}{m['pct']:.2f}% ({m['note']})")
    if data["earnings"]:
        e = data["earnings"][0]
        more = f" 외 {len(data['earnings'])-1}건" if len(data["earnings"]) > 1 else ""
        lines.append(f"  • 임박 실적: {e['name']} {e['date']} (D-{e['days']}){more}")
    # 카테고리별 헤드라인 1건씩 (국내·글로벌)
    for sec in data["news"]:
        if sec["items"] and sec["category"] in ("국내 증시·경제", "지정학·전쟁·재난"):
            lines.append(f"  • [{sec['category']}] {sec['items'][0]['title'][:32]}")
    # 최신동향 (분야별 대표 헤드라인 1건씩, 중복 제목 제외)
    trends = data.get("trends") or []
    trend_lines, seen = [], set()
    for sec in trends:
        pick = next((it for it in sec["items"] if it["title"] not in seen), None)
        if pick:
            seen.add(pick["title"])
            trend_lines.append(f"  • [{sec['category']}] {pick['title'][:30]}")
    if trend_lines:
        lines.append("")
        lines.append("🚀 최신동향")
        lines.extend(trend_lines)

    # 제작지원 공고 (KOCCA/NIPA/RAPA)
    notices = data.get("notices") or []
    if notices:
        lines.append("")
        lines.append("🏛️ 영상·게임·AI 제작지원 공고")
        for it in notices[:3]:
            lines.append(f"  • [{it['agency']}] {it['title'][:32]}")
        if len(notices) > 3:
            lines.append(f"  • 외 {len(notices)-3}건 (이슈 페이지 참고)")
    return "\n".join(lines)


# ──────────────────────────────────────────────
# 메인 (단독 실행)
# ──────────────────────────────────────────────

if __name__ == "__main__":
    import stock_alert
    from issues_page import generate_issues_html

    report = stock_alert.build_report()
    data = build_issues(report)

    print("\n=== 변곡점 ===")
    for m in data["movers"]:
        print(f"  {m['name']}: {m['pct']:+.2f}% ({m['note']})")
    print("\n=== 다가오는 실적 ===")
    for e in data["earnings"]:
        print(f"  {e['name']}: {e['date']} (D-{e['days']})")
    print("\n=== 뉴스 ===")
    for sec in data["news"]:
        print(f"  [{sec['category']}]")
        for it in sec["items"][:3]:
            print(f"    - {it['title']}  ({it['source']}, {it['time']})")

    out = generate_issues_html(data, os.path.join(BASE_DIR, "docs", "issues.html"))
    print(f"\n웹페이지 생성: {out}")
