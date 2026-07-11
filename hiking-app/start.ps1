# 두마음 산악회 실행 스크립트
# 사용법: 이 폴더에서 PowerShell로  ./start.ps1  실행
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

$node = Get-Command node -ErrorAction SilentlyContinue
if ($node) {
  Write-Host "Node.js로 통합 서버를 실행합니다 (정적 서빙 + 단톡 실시간 중계)..." -ForegroundColor Green
  node server.js
} else {
  $py = Get-Command python -ErrorAction SilentlyContinue
  if (-not $py) { $py = Get-Command py -ErrorAction SilentlyContinue }
  if ($py) {
    Write-Host "Node가 없어 Python 정적 서버로 실행합니다 (단톡은 로컬 모드)..." -ForegroundColor Yellow
    Write-Host "휴대폰에서 접속: http://<이PC의IP>:8787" -ForegroundColor Cyan
    & $py.Source -m http.server 8787
  } else {
    Write-Host "Node.js 또는 Python이 필요합니다." -ForegroundColor Red
    Write-Host "Node 설치: https://nodejs.org  설치 후 다시 ./start.ps1 실행" -ForegroundColor Red
  }
}
