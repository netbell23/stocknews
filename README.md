# 주가 카톡 알림 (StockNews → KakaoTalk)

매일 아침 8:30에 KOSPI / KOSDAQ 지수와 주요 반도체주 시세를
카카오톡 "나에게 보내기"로 전송합니다.

## 구성 파일
| 파일 | 역할 |
|------|------|
| `stock_alert.py` | 주가 수집 + 카톡 전송 (토큰 만료 시 자동 갱신) |
| `get_kakao_token.py` | 최초 1회 카카오 토큰 발급 |
| `refresh_token.py` | 토큰 수동 갱신 (보통 불필요 — stock_alert.py가 자동 갱신) |
| `setup_scheduler.ps1` | Windows 작업 스케줄러 등록 |
| `stock_alert.log` | 실행 로그 (자동 생성) |

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

## 종목 변경
`stock_alert.py` 의 `SEMICONDUCTOR_STOCKS` 딕셔너리를 편집하세요.
KRX 종목은 `종목코드.KS`(코스피) / `종목코드.KQ`(코스닥) 형식입니다.

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
