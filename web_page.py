"""
리포트 데이터를 받아 Chart.js 그래프가 들어간 정적 HTML 페이지를 생성한다.
출력물은 docs/index.html (GitHub Pages 로 서빙).
"""

import os
import json

# 한국식 색상: 상승=빨강, 하락=파랑
UP = "#e8453c"
DOWN = "#1c6dd0"
FLAT = "#868e96"


def _color(pct: float) -> str:
    return UP if pct > 0 else (DOWN if pct < 0 else FLAT)


def _fmt(v: float, dec: int) -> str:
    return f"{v:,.{dec}f}"


def generate_html(report: dict, out_path: str) -> str:
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    charts = {}   # canvas id -> {labels, data, color}
    cards_html = []
    idx = 0

    for grp in report["groups"]:
        if not grp["items"]:
            continue
        cards = []
        for it in grp["items"]:
            cid = f"c{idx}"; idx += 1
            color = _color(it["pct"])
            sign = "+" if it["change"] >= 0 else ""
            arrow = "▲" if it["pct"] > 0 else ("▼" if it["pct"] < 0 else "━")
            charts[cid] = {"labels": it["dates"], "data": it["closes"], "color": color}
            cards.append(f"""
        <div class="card">
          <div class="card-name">{it['name']}</div>
          <div class="card-value">{_fmt(it['price'], it['decimals'])}<span class="unit">{it['unit']}</span></div>
          <div class="card-change" style="color:{color}">
            {arrow} {sign}{_fmt(it['change'], it['decimals'])} ({sign}{it['pct']:.2f}%)
          </div>
          <div class="spark"><canvas id="{cid}"></canvas></div>
        </div>""")
        cards_html.append(f"""
      <section>
        <h2>{grp['emoji']} {grp['title']}</h2>
        <div class="grid">{''.join(cards)}</div>
      </section>""")

    charts_json = json.dumps(charts, ensure_ascii=False)

    html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>오늘의 시황</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<style>
  :root {{ --bg:#0f1115; --card:#1a1d24; --line:#272b34; --txt:#e6e8eb; --sub:#9aa0ab; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; background:var(--bg); color:var(--txt);
         font-family:-apple-system,'Segoe UI','Malgun Gothic',sans-serif; }}
  header {{ padding:22px 18px 6px; }}
  header h1 {{ margin:0; font-size:22px; }}
  header .ts {{ color:var(--sub); font-size:13px; margin-top:4px; }}
  header .navlink {{ display:inline-block; margin-top:10px; padding:7px 13px;
                    background:#1f2630; border:1px solid #2c3644; border-radius:9px;
                    color:#4dabf7; text-decoration:none; font-size:13px; font-weight:600; }}
  header .navlink:hover {{ background:#243040; }}
  main {{ padding:8px 14px 40px; max-width:1100px; margin:0 auto; }}
  section {{ margin-top:18px; }}
  section h2 {{ font-size:16px; color:var(--sub); font-weight:600;
               border-bottom:1px solid var(--line); padding-bottom:8px; margin:0 0 12px; }}
  .grid {{ display:grid; gap:12px;
          grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); }}
  .card {{ background:var(--card); border:1px solid var(--line); border-radius:14px;
          padding:14px 16px; }}
  .card-name {{ font-size:14px; color:var(--sub); }}
  .card-value {{ font-size:26px; font-weight:700; margin:2px 0; }}
  .card-value .unit {{ font-size:14px; color:var(--sub); margin-left:3px; font-weight:400; }}
  .card-change {{ font-size:14px; font-weight:600; }}
  .spark {{ height:70px; margin-top:10px; }}
  footer {{ text-align:center; color:var(--sub); font-size:12px; padding:20px; }}
</style>
</head>
<body>
  <header>
    <h1>📈 오늘의 시황</h1>
    <div class="ts">{report['generated_at']} 기준 · 데이터: Yahoo Finance</div>
    <a class="navlink" href="correlation.html">🔗 자산·환율·주가 상관관계 분석 보기 →</a>
  </header>
  <main>
    {''.join(cards_html)}
  </main>
  <footer>매일 아침 자동 업데이트 · 투자 판단의 책임은 본인에게 있습니다</footer>

<script>
const CHARTS = {charts_json};
const css = getComputedStyle(document.documentElement);
for (const [id, c] of Object.entries(CHARTS)) {{
  const ctx = document.getElementById(id);
  if (!ctx) continue;
  new Chart(ctx, {{
    type: 'line',
    data: {{
      labels: c.labels,
      datasets: [{{
        data: c.data,
        borderColor: c.color,
        backgroundColor: c.color + '22',
        borderWidth: 2, fill: true, tension: 0.3,
        pointRadius: 0, pointHoverRadius: 4,
      }}]
    }},
    options: {{
      responsive: true, maintainAspectRatio: false,
      plugins: {{ legend: {{ display:false }},
        tooltip: {{ intersect:false, mode:'index' }} }},
      scales: {{
        x: {{ display:false }},
        y: {{ display:false, grace:'5%' }}
      }}
    }}
  }});
}}
</script>
</body>
</html>"""

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    return out_path
