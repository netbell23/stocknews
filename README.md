# 주가 카톡 알림 (StockNews → KakaoTalk)

매일 아침 8:30에 다음 시황을 카카오톡 "나에게 보내기"로 전송하고,
그래프가 포함된 웹페이지를 GitHub Pages 로 발행해 링크합니다.

- **지수**: KOSPI, KOSDAQ
- **환율**: 미국 USD, 일본 JPY(100엔), 유럽 EUR (원화 기준)
- **원자재**: WTI 국제유가, 금
- **반도체**: 삼성전자, SK하이닉스, 한미반도체, 리노공업, DB하이텍, 원익IPS, 이오테크닉스
- **관심종목**: 컴투스, 신라젠
- **상관관계 분석**: 금·유가·달러(환율)와 미국·일본·한국·중국·유럽 증시의 1년 수익률 상관계수

📊 그래프 페이지: https://netbell23.github.io/stocknews/
🔗 상관관계 분석: https://netbell23.github.io/stocknews/correlation.html

## 구성 파일
| 파일 | 역할 |
|------|------|
| `stock_alert.py` | 데이터 수집 + 카톡 전송 (토큰 자동 갱신) + 페이지 생성/배포 호출 |
| `web_page.py` | Chart.js 그래프 웹페이지(`docs/index.html`) 생성 |
| `correlation.py` | 금·유가·환율 vs 5개국 증시 상관관계 분석 → `docs/correlation.html` (단독 실행 가능) |
| `publish.py` | `docs/` 변경분을 GitHub 에 자동 커밋·푸시 (best-effort) |
| `get_kakao_token.py` | 최초 1회 카카오 토큰 발급 |
| `refresh_token.py` | 토큰 수동 갱신 (보통 불필요 — stock_alert.py가 자동 갱신) |
| `setup_scheduler.ps1` | Windows 작업 스케줄러 등록 |
| `docs/index.html` | 생성된 그래프 페이지 (GitHub Pages 서빙) |
| `stock_alert.log` | 실행 로그 (자동 생성) |

## GitHub Pages 설정 (최초 1회)
1. GitHub 저장소(`netbell23/stocknews`)에 push 한다.
2. 저장소 **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **`/docs`** 폴더 선택 → Save
3. 잠시 후 https://netbell23.github.io/stocknews/ 에서 확인.
4. 이후 매일 `stock_alert.py` 실행 시 `docs/index.html` 이 갱신되어 자동 push 됩니다.
   (자동 push 는 Git 자격증명이 캐시돼 있어야 동작 — 최초 1회 수동 `git push` 로 로그인해 두세요.)

## 종목/항목 변경
`stock_alert.py` 의 `SPECS` 리스트를 편집하세요.
형식: `(그룹, 표시이름, 티커, 단위, 소수자릿수, 배수)`
KRX 종목은 `종목코드.KS`(코스피) / `종목코드.KQ`(코스닥) 입니다.

## 환경변수 (User 범위에 등록됨)
- `KAKAO_ACCESS_TOKEN` — 액세스 토큰 (약 6시간 만료, 자동 갱신됨)
- `KAKAO_REFRESH_TOKEN` — 리프레시 토큰 (자동 갱신용)
- `KAKAO_REST_API_KEY` — 카카오 앱 REST API 키
- `KAKAO_CLIENT_SECRET` — 카카오 앱 Client Secret

## 수동 실행 / 테스트
```powershell
cd D:\git\stocknews
python stock_alert.py
```
> 새 PowerShell 창에서 실행해야 User 환경변수가 반영됩니다.

## 스케줄러 동작 확인
```powershell
Start-ScheduledTask -TaskName StockNewsKakao   # 즉시 실행
Get-Content stock_alert.log -Encoding UTF8     # 결과 로그 확인
```

---

# 인기 숏츠 모음 (Shorts → KakaoTalk)

매일 인기 숏츠(YouTube Shorts 등)를 조회수 순으로 모아 썸네일 웹페이지를
GitHub Pages 로 발행하고, TOP 목록과 링크를 카카오톡으로 보냅니다.
(카카오 토큰은 위 주가 알림과 **공유**합니다.)

🔥 숏츠 페이지: https://netbell23.github.io/stocknews/shorts.html

## 구성 파일
| 파일 | 역할 |
|------|------|
| `shorts_collector.py` | 플랫폼별 인기 숏츠 수집 (YouTube 공식 API + 확장 어댑터) |
| `shorts_page.py` | 썸네일 카드 그리드 페이지(`docs/shorts.html`) 생성 |
| `shorts_alert.py` | 수집 → 페이지 생성 → GitHub 배포 → 카톡 전송 (메인) |

## 플랫폼별 수집 현실
- **YouTube Shorts** ✅ — YouTube Data API v3 로 한국 인기 영상 중 짧은 영상(≤180초)을
  조회수 순으로 수집. **공식·무료**라 그대로 동작합니다.
- **TikTok / Instagram Reels** ⚠️ — **공식 트렌딩 API가 없습니다.**
  무허가 스크래핑은 ToS 위반이라 서비스 운영에 부적합합니다.
  승인된 API 또는 유료 제공자(RapidAPI 등) 키를 환경변수로 꽂으면 켜지는
  확장 구조(`_collect_rapidapi`)만 마련해 두었습니다. 키가 없으면 조용히 건너뜁니다.

## 환경변수 (Shorts 전용)
- `YOUTUBE_API_KEY` — **필수.** [Google Cloud Console](https://console.cloud.google.com/)
  에서 *YouTube Data API v3* 사용 설정 후 API 키 발급 → User 환경변수에 등록
- `SHORTS_PAGE_URL` — 배포된 숏츠 페이지 주소 (기본: `.../stocknews/shorts.html`)
- `SHORTS_REGION` — 지역 코드 (기본 `KR`)
- `SHORTS_MAX_SECONDS` — 쇼츠로 간주할 최대 길이 초 (기본 `180`)
- (선택) `TIKTOK_RAPIDAPI_KEY` / `_HOST` / `_URL`, `INSTAGRAM_RAPIDAPI_KEY` / `_HOST` / `_URL`
  — 외부 제공자를 쓸 때만. 제공자 응답 스키마가 다르면 `shorts_collector.py`의
  `_map_item()` 매핑을 조정하세요.

## 수동 실행 / 테스트
```powershell
cd D:\git\stocknews
$env:YOUTUBE_API_KEY = "발급받은_키"   # 등록 전 임시 테스트용
python shorts_collector.py            # 수집만 확인 (콘솔 출력)
python shorts_alert.py                # 전체 파이프라인 실행
```
> GitHub Pages 설정은 위 주가 알림과 동일합니다(이미 켜져 있으면 `shorts.html` 도 함께 서빙됨).
> 매일 자동 실행하려면 `setup_scheduler.ps1` 을 참고해 `shorts_alert.py` 용 작업을 하나 더 등록하세요.

---

## 알아둘 점
- 현재 작업은 **"사용자 로그온 시 실행"(Interactive)** 으로 등록되어 있습니다.
  아침 8:30에 PC가 켜져 있고 로그인된 상태여야 실행됩니다.
- PC가 잠겨 있거나 로그오프 상태에서도 실행하려면, **관리자 PowerShell**에서
  작업을 "로그온 여부와 무관하게 실행"(S4U)으로 변경하세요:
  ```powershell
  $p = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType S4U
  Set-ScheduledTask -TaskName StockNewsKakao -Principal $p
  ```
- 카카오 리프레시 토큰은 약 2개월 유효합니다. 자동 갱신 시 함께 갱신되지만,
  2개월 이상 PC를 안 쓰면 `get_kakao_token.py` 로 재발급이 필요할 수 있습니다.
