"""
금·유가·달러(환율)와 미국/일본/한국/중국/유럽 주가지수의 상관관계 분석.

1년치 일간 수익률(returns) 기준 피어슨 상관계수를 계산하고,
히트맵 + 정규화 비교차트 + 자동 해설이 담긴 웹페이지(docs/correlation.html)를 만든다.

단독 실행:  python correlation.py
"""

import sys
import os
from datetime import datetime

import pandas as pd
import yfinance as yf

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# (표시이름, 티커, 분류)
ASSETS = [
    ("금",          "GC=F",      "자산"),
    ("WTI 유가",     "CL=F",      "자산"),
    ("달러인덱스",     "DX-Y.NYB",  "자산"),
    ("미국 S&P500",  "^GSPC",     "주가"),
    ("일본 닛케이",    "^N225",     "주가"),
    ("한국 KOSPI",   "^KS11",     "주가"),
    ("중국 상해종합",   "000001.SS", "주가"),
    ("유럽 STOXX50", "^STOXX50E", "주가"),
]

PERIOD = "1y"


# ──────────────────────────────────────────────
# 데이터 수집 & 상관계산
# ──────────────────────────────────────────────

def fetch_closes() -> pd.DataFrame:
    """모든 자산의 종가를 날짜 기준으로 정렬한 DataFrame 반환"""
    cols = {}
    for name, ticker, _ in ASSETS:
        try:
            h = yf.Ticker(ticker).history(period=PERIOD)
            if h.empty:
                print(f"[경고] {name}({ticker}) 데이터 없음 — 제외")
                continue
            s = h["Close"].copy()
            # 거래소별 타임스탬프 차이 제거: 날짜(date) 기준으로 통일
            s.index = pd.to_datetime([d.date() for d in s.index])
            cols[name] = s
        except Exception as e:
            print(f"[조회 실패] {name}({ticker}): {e}")
    return pd.DataFrame(cols).sort_index()


def analyze() -> dict:
    df = fetch_closes()
    # 일간 수익률 → 공통 거래일만 사용
    ret = df.pct_change(fill_method=None).dropna(how="any")
    corr = ret.corr()

    labels = list(corr.columns)
    matrix = [[round(float(corr.iloc[i, j]), 2) for j in range(len(labels))]
              for i in range(len(labels))]

    # 정규화(첫날=100) 비교용 — 공통 구간만
    common = df.loc[ret.index.min():].dropna(how="any")
    rebased = {}
    for name in labels:
        base = common[name].iloc[0]
        rebased[name] = {
            "dates": [d.strftime("%Y-%m-%d") for d in common.index],
            "values": [round(float(v) / base * 100, 2) for v in common[name]],
        }

    cat = {name: c for name, _, c in ASSETS}
    insights = build_insights(labels, corr, cat)

    return {
        "generated_at": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "period_days": len(ret),
        "labels": labels,
        "matrix": matrix,
        "rebased": rebased,
        "category": cat,
        "insights": insights,
    }


def _strength(r: float) -> str:
    a = abs(r)
    if a >= 0.7:
        return "매우 강한"
    if a >= 0.4:
        return "뚜렷한"
    if a >= 0.2:
        return "약한"
    return "거의 없는"


def build_insights(labels, corr, cat) -> list[str]:
    """상관행렬에서 주목할 만한 관계를 한국어 문장으로 자동 생성"""
    pairs = []
    n = len(labels)
    for i in range(n):
        for j in range(i + 1, n):
            r = float(corr.iloc[i, j])
            pairs.append((labels[i], labels[j], r))

    out = []
    # 가장 강한 양의 상관
    pos = max(pairs, key=lambda p: p[2])
    out.append(f"🔺 가장 강한 <b>양(+)의 동조</b>: {pos[0]} ↔ {pos[1]} "
               f"(r={pos[2]:.2f}, {_strength(pos[2])} 관계) — 같이 오르고 같이 내리는 경향.")
    # 가장 강한 음의 상관
    neg = min(pairs, key=lambda p: p[2])
    out.append(f"🔻 가장 강한 <b>음(−)의 역행</b>: {neg[0]} ↔ {neg[1]} "
               f"(r={neg[2]:.2f}, {_strength(neg[2])} 관계) — 한쪽이 오르면 다른 쪽은 내리는 경향.")

    # 자산(금/유가/달러)이 주가에 주는 영향 중 가장 두드러진 것
    asset_stock = [p for p in pairs
                   if (cat.get(p[0]) == "자산") != (cat.get(p[1]) == "자산")]
    if asset_stock:
        strongest = max(asset_stock, key=lambda p: abs(p[2]))
        kind = "양(+)" if strongest[2] >= 0 else "음(−)"
        out.append(f"💡 자산↔주가 중 가장 뚜렷한 관계: {strongest[0]} ↔ {strongest[1]} "
                   f"(r={strongest[2]:.2f}, {kind}).")
    return out


# ──────────────────────────────────────────────
# 웹페이지 생성
# ──────────────────────────────────────────────

UP = (232, 69, 60)     # 빨강 (+상관)
DOWN = (28, 109, 208)  # 파랑 (−상관)
SERIES_COLORS = [
    "#ffd43b", "#ff922b", "#adb5bd",   # 자산: 금/유가/달러
    "#e8453c", "#f06595", "#4dabf7", "#51cf66", "#9775fa",  # 주가 5개국
]


def _cell_bg(r: float) -> str:
    """상관계수를 배경색으로: +면 빨강계열, −면 파랑계열, 진할수록 강함"""
    base = (26, 29, 36)  # 중립(어두운 배경)
    target = UP if r >= 0 else DOWN
    t = min(abs(r), 1.0)
    rgb = tuple(round(base[k] + (target[k] - base[k]) * t) for k in range(3))
    return f"rgb({rgb[0]},{rgb[1]},{rgb[2]})"


def generate_corr_html(data: dict, out_path: str) -> str:
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    labels = data["labels"]

    # 히트맵 테이블
    head = "".join(f"<th>{l}</th>" for l in labels)
    rows = []
    for i, ri in enumerate(labels):
        cells = [f'<th class="rowh">{ri}</th>']
        for j in range(len(labels)):
            v = data["matrix"][i][j]
            txt_color = "#fff" if abs(v) >= 0.35 or i == j else "#cfd3da"
            cells.append(
                f'<td style="background:{_cell_bg(v)};color:{txt_color}">{v:.2f}</td>'
            )
        rows.append(f"<tr>{''.join(cells)}</tr>")
    heatmap = f"<table class='heat'><thead><tr><th></th>{head}</tr></thead><tbody>{''.join(rows)}</tbody></table>"

    # 정규화 비교차트용 데이터셋
    import json
    datasets = []
    for idx, name in enumerate(labels):
        datasets.append({
            "label": name,
            "data": data["rebased"][name]["values"],
            "borderColor": SERIES_COLORS[idx % len(SERIES_COLORS)],
            "borderWidth": 1.8, "pointRadius": 0, "tension": 0.2,
        })
    chart_labels = data["rebased"][labels[0]]["dates"]
    chart_json = json.dumps({"labels": chart_labels, "datasets": datasets}, ensure_ascii=False)

    insights_html = "".join(f"<li>{s}</li>" for s in data["insights"])

    html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>자산·환율·주가 상관관계 분석</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<style>
  :root {{ --bg:#0f1115; --card:#1a1d24; --line:#272b34; --txt:#e6e8eb; --sub:#9aa0ab; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; background:var(--bg); color:var(--txt);
         font-family:-apple-system,'Segoe UI','Malgun Gothic',sans-serif; }}
  header {{ padding:22px 18px 6px; }}
  header h1 {{ margin:0; font-size:22px; }}
  header .ts {{ color:var(--sub); font-size:13px; margin-top:4px; }}
  main {{ padding:8px 14px 40px; max-width:1000px; margin:0 auto; }}
  section {{ margin-top:22px; background:var(--card); border:1px solid var(--line);
            border-radius:14px; padding:16px; }}
  h2 {{ font-size:16px; margin:0 0 12px; }}
  .desc {{ color:var(--sub); font-size:13px; margin:-6px 0 14px; line-height:1.6; }}
  .heat {{ border-collapse:collapse; width:100%; font-size:12px; }}
  .heat th, .heat td {{ padding:7px 6px; text-align:center; }}
  .heat thead th {{ color:var(--sub); font-weight:600; font-size:11px;
                   border-bottom:1px solid var(--line); }}
  .heat .rowh {{ color:var(--sub); text-align:right; padding-right:10px;
                white-space:nowrap; font-weight:600; font-size:11px; }}
  .heat td {{ border-radius:4px; font-variant-numeric:tabular-nums; }}
  .legend {{ display:flex; align-items:center; gap:8px; margin-top:12px;
            font-size:12px; color:var(--sub); }}
  .bar {{ height:10px; width:160px; border-radius:5px;
         background:linear-gradient(90deg, rgb(28,109,208), #1a1d24, rgb(232,69,60)); }}
  ul.insights {{ margin:0; padding-left:18px; line-height:1.9; font-size:14px; }}
  .chartbox {{ height:340px; }}
  footer {{ text-align:center; color:var(--sub); font-size:12px; padding:20px; }}
  a {{ color:#4dabf7; }}
</style>
</head>
<body>
  <header>
    <h1>🔗 자산·환율·주가 상관관계</h1>
    <div class="ts">{data['generated_at']} 기준 · 최근 1년 · 공통 거래일 {data['period_days']}일 · 일간 수익률 기준</div>
  </header>
  <main>
    <section>
      <h2>📌 핵심 해설</h2>
      <ul class="insights">{insights_html}</ul>
    </section>

    <section>
      <h2>🌡️ 상관계수 히트맵</h2>
      <p class="desc">두 대상이 같은 날 함께 오르내린 정도(−1 ~ +1). +1에 가까울수록(빨강) 동조,
      −1에 가까울수록(파랑) 역행, 0에 가까우면(어두움) 무관.</p>
      {heatmap}
      <div class="legend"><span>-1 역행</span><span class="bar"></span><span>+1 동조</span></div>
    </section>

    <section>
      <h2>📈 정규화 비교 (시작일=100)</h2>
      <p class="desc">모든 대상을 1년 전 100으로 맞춰 상대 변화율을 겹쳐 본 차트. 선들이 같이 움직이면 양의 상관.</p>
      <div class="chartbox"><canvas id="cmp"></canvas></div>
    </section>
  </main>
  <footer>데이터: Yahoo Finance · 상관관계는 인과관계가 아닙니다 · 투자 판단의 책임은 본인에게</footer>

<script>
const CMP = {chart_json};
new Chart(document.getElementById('cmp'), {{
  type:'line',
  data: CMP,
  options: {{
    responsive:true, maintainAspectRatio:false,
    interaction:{{ mode:'index', intersect:false }},
    plugins:{{ legend:{{ labels:{{ color:'#cfd3da', boxWidth:12, font:{{size:11}} }} }} }},
    scales:{{
      x:{{ ticks:{{ color:'#6b7280', maxTicksLimit:8, font:{{size:10}} }},
          grid:{{ color:'#1c1f27' }} }},
      y:{{ ticks:{{ color:'#6b7280', font:{{size:10}} }}, grid:{{ color:'#1c1f27' }} }}
    }}
  }}
}});
</script>
</body>
</html>"""

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    return out_path


# ──────────────────────────────────────────────
# 메인
# ──────────────────────────────────────────────

if __name__ == "__main__":
    print("상관관계 분석 중... (1년치 데이터 수집)")
    data = analyze()
    print(f"공통 거래일: {data['period_days']}일\n")

    # 상관행렬 콘솔 출력
    labels = data["labels"]
    print("    " + "  ".join(f"{l[:6]:>6}" for l in labels))
    for i, row in enumerate(data["matrix"]):
        print(f"{labels[i][:6]:>6} " + "  ".join(f"{v:>6.2f}" for v in row))

    print("\n핵심 해설:")
    for s in data["insights"]:
        print("  - " + s.replace("<b>", "").replace("</b>", ""))

    out = generate_corr_html(data, os.path.join(BASE_DIR, "docs", "correlation.html"))
    print(f"\n웹페이지 생성: {out}")
