"""생활 포털(app-portal) 대시보드용 시세·뉴스 JSON(docs/portal-data.json) 생성.

app-portal 은 GitHub Pages 같은 도메인에서 이 파일을 fetch 해서
브라우저에서 직접 못 가져오는(CORS) 시세·뉴스의 폴백으로 쓴다.
"""
import json
import xml.etree.ElementTree as ET

import requests

UA = {"User-Agent": "Mozilla/5.0"}
TOP_RSS = "https://news.google.com/rss?hl=ko&gl=KR&ceid=KR:ko"

# 포털에 내보낼 항목: 그룹명 -> 종목명 집합 (None 이면 그룹 전체)
WANT = {
    "지수": {"KOSPI", "KOSDAQ"},
    "환율": {"미국 USD"},
    "반도체": None,
}


def _top_news(n: int = 5) -> list[dict]:
    """구글 뉴스 한국 주요 뉴스 상위 n건."""
    try:
        r = requests.get(TOP_RSS, headers=UA, timeout=10)
        r.raise_for_status()
        root = ET.fromstring(r.content)
    except Exception as e:
        print(f"[포털 뉴스 수집 실패] {e}")
        return []
    items = []
    for it in root.iter("item"):
        title = (it.findtext("title") or "").strip()
        source = (it.findtext("source") or "").strip()
        if source and title.endswith(f" - {source}"):
            title = title[: -(len(source) + 3)]
        items.append({
            "title": title,
            "link": (it.findtext("link") or "").strip(),
            "source": source,
            "pub": (it.findtext("pubDate") or "").strip(),
        })
        if len(items) >= n:
            break
    return items


def write_portal_data(report: dict, path: str) -> str:
    quotes = []
    for grp in report["groups"]:
        if grp["title"] not in WANT:
            continue
        want = WANT[grp["title"]]
        for it in grp["items"]:
            if want is None or it["name"] in want:
                quotes.append({
                    "group": grp["title"],
                    "name": it["name"],
                    "unit": it["unit"],
                    "decimals": it["decimals"],
                    "price": it["price"],
                    "pct": it["pct"],
                })
    data = {
        "generated_at": report["generated_at"],
        "quotes": quotes,
        "news": _top_news(),
    }
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)
    return path
