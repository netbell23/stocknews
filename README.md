# 주가 카톡 알림 (StockNews → KakaoTalk)

매일 아침 8:30에 다음 시황을 카카오톡 "나에게 보내기"로 전송하고,
그래프가 포함된 웹페이지를 GitHub Pages 로 발행해 링크합니다.

- **지수**: KOSPI, KOSDAQ
- **환율**: 미국 USD, 일본 JPY(100엔), 유럽 EUR (원화 기준)
- **원자재**: WTI 국제유가, 금
- **반도체**: 삼성전자, SK하이닉스, 한미반도체, 리노공업, DB하이텍, 원익IPS, 이오테크닉스
- **관심종목**: 컴투스, 신라젠

📊 그래프 페이지: https://netbell23.github.io/stocknews/

## 구성 파일
| 파일 | 역할 |
|------|------|
| `stock_alert.py` | 데이터 수집 + 카톡 전송 (토큰 자동 갱신) + 페이지 생성/배포 호출 |
| `web_page.py` | Chart.js 그래프 웹페이지(`docs/index.html`) 생성 |
| `publish.py` | `docs/index.html` 을 GitHub 에 자동 커밋·푸시 (best-effort) |
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
