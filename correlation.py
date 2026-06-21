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

    # ── 동적 분석: 상관관계가 '시간에 따라' 어떻게 변하는지 ──
    rolling = compute_rolling(ret)
    # ── 방향별 반응: 자산/환율이 '오른 날 vs 내린 날' 지수 평균 수익률 ──
    regime = compute_regime(ret)
    dynamic = build_dynamic_insights(rolling, regime)

    return {
        "generated_at": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "period_days": len(ret),
        "labels": labels,
        "matrix": matrix,
        "rebased": rebased,
        "category": cat,
        "insights": insights,
        "rolling": rolling,
        "regime": regime,
        "dynamic": dynamic,
    }


# 동적 분석 대상 (자산/환율 → 지수)
ROLLING_PAIRS = [
    ("달러인덱스", "한국 KOSPI"),
    ("달러인덱스", "미국 S&P500"),
    ("WTI 유가", "한국 KOSPI"),
    ("금", "한국 KOSPI"),
]
DRIVERS = ["달러인덱스", "WTI 유가", "금"]
TARGETS = ["한국 KOSPI", "미국 S&P500", "일본 닛케이", "유럽 STOXX50"]


def compute_rolling(ret) -> dict:
    """선택한 쌍의 N일 이동 상관계수 시계열 (상관이 언제 강해지고 약해졌는지)"""
    n = len(ret)
    window = 60 if n > 90 else max(20, n // 3)
    out = {}
    for a, b in ROLLING_PAIRS:
        if a not in ret.columns or b not in ret.columns:
            continue
        rc = ret[a].rolling(window).corr(ret[b]).dropna()
        if rc.empty:
            continue
        out[f"{a} ↔ {b}"] = {
            "dates": [d.strftime("%Y-%m-%d") for d in rc.index],
            "values": [round(float(v), 3) for v in rc],
            "full": round(float(ret[a].corr(ret[b])), 2),
            "recent": round(float(rc.iloc[-1]), 2),
            "window": window,
        }
    return out


def compute_regime(ret) -> list:
    """자산/환율이 오른 날 vs 내린 날, 각 지수의 평균 수익률(%)"""
    out = []
    for drv in DRIVERS:
        if drv not in ret.columns:
            continue
        up, dn = ret[ret[drv] > 0], ret[ret[drv] < 0]
        rows = []
        for tg in TARGETS:
            if tg not in ret.columns:
                continue
            um = round(float(up[tg].mean()) * 100, 3) if len(up) else 0.0
            dm = round(float(dn[tg].mean()) * 100, 3) if len(dn) else 0.0
            rows.append({"target": tg, "up": um, "down": dm, "diff": round(um - dm, 3)})
        out.append({"driver": drv, "up_days": int((ret[drv] > 0).sum()),
                    "down_days": int((ret[drv] < 0).sum()), "rows": rows})
    return out


def _josa(word: str) -> str:
    """받침 유무에 따라 이/가 조사 선택"""
    last = word[-1]
    if "가" <= last <= "힣":
        return "이" if (ord(last) - 0xAC00) % 28 else "가"
    return "가"


def build_dynamic_insights(rolling: dict, regime: list) -> list:
    di = []
    key = "달러인덱스 ↔ 한국 KOSPI"
    if key in rolling:
        r = rolling[key]
        sign = "역상관" if r["recent"] < 0 else "양(+)의 상관"
        trend = "강해졌습니다" if abs(r["recent"]) > abs(r["full"]) + 0.05 else (
            "약해졌습니다" if abs(r["recent"]) < abs(r["full"]) - 0.05 else "비슷합니다")
        di.append(f"📉 최근 {r['window']}일 <b>달러인덱스–한국 KOSPI</b> 상관은 "
                  f"<b>{r['recent']:+.2f}</b>({sign})로, 1년 평균 {r['full']:+.2f} 대비 {trend}.")
    for reg in regime:
        drv = reg["driver"]
        krow = next((x for x in reg["rows"] if x["target"] == "한국 KOSPI"), None)
        if not krow:
            continue
        effect = "부담(약세 요인)" if krow["up"] < krow["down"] else "호재(강세 요인)"
        di.append(f"⚖️ <b>{drv}</b>{_josa(drv)} 오른 날 KOSPI 평균 <b>{krow['up']:+.2f}%</b>, "
                  f"내린 날 {krow['down']:+.2f}% → {drv} 강세는 한국 증시에 {effect}.")
    return di


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
UP_HEX = "#e8453c"
DOWN_HEX = "#1c6dd0"
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
    dynamic_html = "".join(f"<li>{s}</li>" for s in data.get("dynamic", []))

    # 롤링 상관 차트 데이터셋
    rolling = data.get("rolling", {})
    roll_colors = ["#4dabf7", "#f06595", "#ffa94d", "#69db7c", "#ffd43b"]
    roll_labels, roll_datasets = [], []
    for i, (name, rv) in enumerate(rolling.items()):
        if not roll_labels:
            roll_labels = rv["dates"]
        roll_datasets.append({
            "label": name, "data": rv["values"],
            "borderColor": roll_colors[i % len(roll_colors)],
            "borderWidth": 2, "pointRadius": 0, "tension": 0.25,
        })
    roll_window = next(iter(rolling.values()))["window"] if rolling else 60
    roll_json = json.dumps({"labels": roll_labels, "datasets": roll_datasets}, ensure_ascii=False)

    # 방향별 반응 테이블
    regime_blocks = []
    for reg in data.get("regime", []):
        rrows = []
        for r in reg["rows"]:
            upc = UP_HEX if r["up"] >= 0 else DOWN_HEX
            dnc = UP_HEX if r["down"] >= 0 else DOWN_HEX
            diffc = UP_HEX if r["diff"] >= 0 else DOWN_HEX
            rrows.append(
                f'<tr><td class="tg">{r["target"]}</td>'
                f'<td style="color:{upc}">{r["up"]:+.2f}%</td>'
                f'<td style="color:{dnc}">{r["down"]:+.2f}%</td>'
                f'<td style="color:{diffc};font-weight:700">{r["diff"]:+.2f}</td></tr>'
            )
        regime_blocks.append(
            f'<div class="regime"><h3>{reg["driver"]} '
            f'<small>↑오른날 {reg["up_days"]}일 / ↓내린날 {reg["down_days"]}일</small></h3>'
            f'<table class="rtab"><thead><tr><th>지수</th><th>오른 날</th>'
            f'<th>내린 날</th><th>차이</th></tr></thead><tbody>{"".join(rrows)}</tbody></table></div>'
        )
    regime_html = "".join(regime_blocks)

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
  .regimes {{ display:grid; gap:14px; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); }}
  .regime h3 {{ font-size:14px; margin:0 0 8px; }}
  .regime h3 small {{ color:var(--sub); font-weight:400; font-size:11px; margin-left:6px; }}
  .rtab {{ width:100%; border-collapse:collapse; font-size:12px; }}
  .rtab th {{ color:var(--sub); font-weight:600; font-size:11px; text-align:right;
             padding:5px 6px; border-bottom:1px solid var(--line); }}
  .rtab th:first-child {{ text-align:left; }}
  .rtab td {{ padding:5px 6px; text-align:right; font-variant-numeric:tabular-nums; }}
  .rtab td.tg {{ text-align:left; color:var(--txt); }}
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
      <h2>🔬 상관관계는 고정이 아니다 — 동적 분석</h2>
      <p class="desc">상관계수는 시장 국면에 따라 계속 변합니다. 아래는 자산·환율의 움직임이
      지수에 어떻게 작용했는지에 대한 자동 해설입니다.</p>
      <ul class="insights">{dynamic_html}</ul>
    </section>

    <section>
      <h2>📉 상관관계 시간 변화 (이동 {roll_window}일 상관)</h2>
      <p class="desc">자산·환율과 지수의 상관이 시간에 따라 어떻게 강해지고 약해졌는지.
      <b>0선 위</b>는 동조(같은 방향), <b>0선 아래</b>는 역행(반대 방향). 선이 0을 넘나들면 관계가 뒤집힌 것.</p>
      <div class="chartbox"><canvas id="roll"></canvas></div>
    </section>

    <section>
      <h2>⚖️ 자산·환율 방향별 지수 반응</h2>
      <p class="desc">해당 자산/환율이 <b>오른 날</b>과 <b>내린 날</b>, 각 지수의 평균 일간수익률입니다.
      '차이'(오른날−내린날)가 <span style="color:{DOWN_HEX}">음수</span>면 그 자산 강세가 증시에 부담,
      <span style="color:{UP_HEX}">양수</span>면 호재 경향.</p>
      <div class="regimes">{regime_html}</div>
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
const ROLL = {roll_json};
new Chart(document.getElementById('roll'), {{
  type:'line',
  data: ROLL,
  options: {{
    responsive:true, maintainAspectRatio:false,
    interaction:{{ mode:'index', intersect:false }},
    plugins:{{ legend:{{ labels:{{ color:'#cfd3da', boxWidth:12, font:{{size:11}} }} }} }},
    scales:{{
      x:{{ ticks:{{ color:'#6b7280', maxTicksLimit:8, font:{{size:10}} }}, grid:{{ color:'#1c1f27' }} }},
      y:{{ min:-1, max:1,
          ticks:{{ color:'#6b7280', font:{{size:10}}, stepSize:0.5 }},
          grid:{{ color:(c)=> c.tick.value===0 ? '#5b6472' : '#1c1f27' }} }}
    }}
  }}
}});

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
