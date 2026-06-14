"""
KOCCA(콘텐츠진흥원)·NIPA(정보통신산업진흥원)·RAPA(전파진흥협회) 사업공고 게시판에서
'영상·인터랙티브·게임·AI 제작지원' 관련 공고를 매일 수집한다 (무료 스크래핑).

각 기관 게시판은 서버 렌더링 HTML 이므로 requests + 정규식으로 제목/링크를 추출하고
키워드로 필터링한다. 사이트 개편 시 SOURCES 의 정규식만 손보면 된다.

단독 실행:  python gov_notices.py
"""

import re
import html as _html
import requests

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

# 관심 키워드 (제목에 포함되면 매칭). 'AI' 는 영어 단어 경계로 별도 처리.
KEYWORDS = [
    "영상", "인터랙티브", "게임", "인공지능", "제작지원", "제작 지원",
    "실감콘텐츠", "실감", "디지털콘텐츠", "콘텐츠 제작", "XR", "메타버스",
    "VFX", "버추얼", "가상현실", "애니메이션", "웹툰",
]

# 각 기관 게시판: 목록 URL + 항목 추출 정규식(그룹1=링크, 그룹2=제목)
SOURCES = [
    {
        "agency": "KOCCA",
        "url": "https://www.kocca.kr/kocca/pims/list.do?menuNo=204104",
        "regex": r'href="(/kocca/pims/view\.do\?intcNo=[^"]+)"[^>]*>\s*([^<]+)',
        "base": "https://www.kocca.kr",
        "flags": 0,
    },
    {
        "agency": "NIPA",
        "url": "https://www.nipa.kr/home/bsnsAll/0/nttList?bbsNo=4&tab=2",
        "regex": r'href="(\./nttDetail\?[^"]*nttNo=\d+)"[^>]*>(.*?)</a>',
        "base": "https://www.nipa.kr/home/bsnsAll/0/",
        "flags": re.S,
    },
    {
        "agency": "RAPA",
        "url": "https://www.rapa.or.kr/ft/ny/bd04/list.do?boardCd=bd04",
        "regex": r'href="([^"]*bd04/view\.do\?[^"]*boardSeq=\d+[^"]*)"[^>]*>(.*?)</a>',
        "base": "https://www.rapa.or.kr",
        "flags": re.S,
    },
]


def _clean(t: str) -> str:
    t = re.sub(r"<!--.*?-->", "", t, flags=re.S)
    t = re.sub(r"<[^>]+>", "", t)
    return re.sub(r"\s+", " ", _html.unescape(t)).strip()


def _abs_url(base: str, link: str) -> str:
    link = _html.unescape(link).strip()
    if link.startswith("http"):
        return link
    if link.startswith("./"):
        return base.rstrip("/") + "/" + link[2:]
    if link.startswith("/"):
        # base 의 호스트만 사용
        m = re.match(r"(https?://[^/]+)", base)
        return (m.group(1) if m else base.rstrip("/")) + link
    return base.rstrip("/") + "/" + link


def _matched_keyword(title: str) -> str | None:
    for k in KEYWORDS:
        if k in title:
            return k
    if re.search(r"\bAI\b", title):
        return "AI"
    return None


def fetch_source(src: dict) -> list[dict]:
    try:
        r = requests.get(src["url"], headers=UA, timeout=15)
        r.raise_for_status()
    except Exception as e:
        print(f"[{src['agency']} 조회 실패] {e}")
        return []
    out = []
    seen = set()
    for link, title in re.findall(src["regex"], r.text, src["flags"]):
        t = _clean(title)
        if not t or len(t) < 6:
            continue
        url = _abs_url(src["base"], link)
        if url in seen:
            continue
        seen.add(url)
        out.append({"agency": src["agency"], "title": t, "link": url})
    return out


def fetch_notices() -> list[dict]:
    """3개 기관에서 키워드 매칭되는 공고만 모아 반환"""
    matched = []
    for src in SOURCES:
        items = fetch_source(src)
        kept = 0
        for it in items:
            kw = _matched_keyword(it["title"])
            if kw:
                it["keyword"] = kw
                matched.append(it)
                kept += 1
        print(f"  {src['agency']}: 수집 {len(items)}건 → 매칭 {kept}건")
    return matched


def build_notice_summary(notices: list[dict], max_n: int = 4) -> str:
    if not notices:
        return ""
    lines = ["🏛️ 제작지원 공고 (KOCCA·NIPA·RAPA)"]
    for it in notices[:max_n]:
        lines.append(f"  • [{it['agency']}] {it['title'][:34]}")
    if len(notices) > max_n:
        lines.append(f"  • 외 {len(notices)-max_n}건")
    return "\n".join(lines)


if __name__ == "__main__":
    import sys
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    print("공고 수집 중 (KOCCA/NIPA/RAPA)...")
    notices = fetch_notices()
    print(f"\n=== 매칭 공고 총 {len(notices)}건 ===")
    for it in notices:
        print(f"[{it['agency']}] ({it['keyword']}) {it['title']}")
        print(f"    {it['link']}")
