"""
이슈 리포트를 받아 상세 웹페이지(docs/issues.html)를 생성한다.
"""

import os
import html as _html


def _esc(s: str) -> str:
    return _html.escape(s or "")


def generate_issues_html(data: dict, out_path: str) -> str:
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    # 변곡점
    if data["movers"]:
        rows = []
        for m in data["movers"]:
            color = "#e8453c" if m["pct"] >= 0 else "#1c6dd0"
            sign = "+" if m["pct"] >= 0 else ""
            rows.append(
                f'<div class="mover"><span class="mname">{_esc(m["name"])}'
                f'<small>{_esc(m["group"])}</small></span>'
                f'<span class="mpct" style="color:{color}">{sign}{m["pct"]:.2f}%</span>'
                f'<span class="mnote">{_esc(m["note"])}</span></div>'
            )
        movers_html = "".join(rows)
    else:
        movers_html = '<p class="empty">오늘은 변동성 대비 두드러진 변곡점이 없습니다.</p>'

    # 실적 일정
    if data["earnings"]:
        chips = "".join(
            f'<div class="chip"><b>{_esc(e["name"])}</b>'
            f'<span>{e["date"]}</span><em>D-{e["days"]}</em></div>'
            for e in data["earnings"]
        )
        earnings_html = f'<div class="chips">{chips}</div>'
    else:
        earnings_html = '<p class="empty">향후 90일 내 예정된 실적 발표가 없습니다.</p>'

    # 뉴스 섹션
    news_sections = []
    for sec in data["news"]:
        if not sec["items"]:
            continue
        lis = []
        for it in sec["items"]:
            meta = " · ".join(x for x in [_esc(it["source"]), _esc(it["time"])] if x)
            lis.append(
                f'<li><a href="{_esc(it["link"])}" target="_blank" rel="noopener">'
                f'{_esc(it["title"])}</a><span class="meta">{meta}</span></li>'
            )
        news_sections.append(
            f'<section class="newsblock"><h3>{_esc(sec["category"])}</h3>'
            f'<ul class="news">{"".join(lis)}</ul></section>'
        )
    news_html = "".join(news_sections)

    html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>주요 이슈 & 일정</title>
<style>
  :root {{ --bg:#0f1115; --card:#1a1d24; --line:#272b34; --txt:#e6e8eb; --sub:#9aa0ab; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; background:var(--bg); color:var(--txt);
         font-family:-apple-system,'Segoe UI','Malgun Gothic',sans-serif; }}
  header {{ padding:22px 18px 6px; }}
  header h1 {{ margin:0; font-size:22px; }}
  header .ts {{ color:var(--sub); font-size:13px; margin-top:4px; }}
  header a.back {{ display:inline-block; margin-top:10px; color:#4dabf7;
                  text-decoration:none; font-size:13px; }}
  main {{ padding:8px 14px 40px; max-width:900px; margin:0 auto; }}
  section.box {{ margin-top:18px; background:var(--card); border:1px solid var(--line);
                border-radius:14px; padding:16px; }}
  h2 {{ font-size:16px; margin:0 0 12px; }}
  .empty {{ color:var(--sub); font-size:14px; margin:4px 0; }}
  .mover {{ display:flex; align-items:center; gap:12px; padding:9px 0;
           border-bottom:1px solid var(--line); }}
  .mover:last-child {{ border-bottom:0; }}
  .mname {{ flex:1; font-weight:600; }}
  .mname small {{ color:var(--sub); font-weight:400; margin-left:7px; font-size:12px; }}
  .mpct {{ font-weight:700; font-variant-numeric:tabular-nums; min-width:74px; text-align:right; }}
  .mnote {{ color:var(--sub); font-size:12px; min-width:130px; text-align:right; }}
  .chips {{ display:flex; flex-wrap:wrap; gap:10px; }}
  .chip {{ background:#11151b; border:1px solid var(--line); border-radius:10px;
          padding:9px 12px; display:flex; flex-direction:column; gap:2px; min-width:120px; }}
  .chip b {{ font-size:14px; }} .chip span {{ color:var(--sub); font-size:12px; }}
  .chip em {{ color:#ffd43b; font-style:normal; font-size:12px; font-weight:700; }}
  .newsblock {{ margin-top:14px; }}
  .newsblock h3 {{ font-size:14px; color:var(--sub); margin:0 0 8px;
                  border-left:3px solid #4dabf7; padding-left:8px; }}
  ul.news {{ list-style:none; margin:0; padding:0; }}
  ul.news li {{ padding:8px 0; border-bottom:1px solid #20242c; }}
  ul.news li:last-child {{ border-bottom:0; }}
  ul.news a {{ color:var(--txt); text-decoration:none; font-size:14px; line-height:1.45; }}
  ul.news a:hover {{ color:#4dabf7; }}
  ul.news .meta {{ display:block; color:var(--sub); font-size:11px; margin-top:3px; }}
  footer {{ text-align:center; color:var(--sub); font-size:12px; padding:20px; }}
</style>
</head>
<body>
  <header>
    <h1>📰 주요 이슈 & 일정</h1>
    <div class="ts">{_esc(data['generated_at'])} 기준 · 뉴스: Google News</div>
    <a class="back" href="index.html">← 시황 그래프로 돌아가기</a>
  </header>
  <main>
    <section class="box">
      <h2>⚡ 오늘의 변곡점</h2>
      {movers_html}
    </section>

    <section class="box">
      <h2>📅 다가오는 실적 발표</h2>
      {earnings_html}
    </section>

    <section class="box">
      <h2>🗞️ 주요 뉴스 헤드라인</h2>
      {news_html}
    </section>
  </main>
  <footer>헤드라인은 Google News 검색 결과입니다 · 정보 제공용이며 투자 판단의 책임은 본인에게</footer>
</body>
</html>"""

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    return out_path
