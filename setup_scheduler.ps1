# Windows 작업 스케줄러에 매일 오전 8시 30분 실행 등록
# 일반 PowerShell 에서 실행하면 됩니다 (관리자 권한 불필요).

$ScriptDir  = Split-Path -Parent $MyInvocation.MyCommand.Path
$ScriptPath = Join-Path $ScriptDir "stock_alert.py"
$LogPath    = Join-Path $ScriptDir "stock_alert.log"
$TaskName   = "StockNewsKakao"

# 실제 Python 3.x 경로를 레지스트리에서 찾기 (WindowsApps 스텁 회피)
$PythonExe = $null
foreach ($root in @("HKCU:\SOFTWARE\Python\PythonCore", "HKLM:\SOFTWARE\Python\PythonCore")) {
    if (Test-Path $root) {
        $ver = Get-ChildItem $root | Sort-Object PSChildName -Descending | Select-Object -First 1
        $ip  = Join-Path $ver.PSPath "InstallPath"
        if (Test-Path $ip) {
            $exe = (Get-ItemProperty $ip).ExecutablePath
            if ($exe -and (Test-Path $exe)) { $PythonExe = $exe; break }
        }
    }
}
if (-not $PythonExe) { throw "실제 Python 설치를 찾지 못했습니다." }
Write-Host "사용할 Python: $PythonExe"

# 기존 태스크 제거 후 재등록
Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false -ErrorAction SilentlyContinue

# python.exe 를 직접 실행 (로그는 stock_alert.py 가 자체적으로 stock_alert.log 에 기록)
$action  = New-ScheduledTaskAction -Execute $PythonExe -Argument "`"$ScriptPath`"" -WorkingDirectory $ScriptDir
$trigger = New-ScheduledTaskTrigger -Daily -At "08:30"
$settings = New-ScheduledTaskSettingsSet -ExecutionTimeLimit (New-TimeSpan -Minutes 10) `
                                          -StartWhenAvailable

Register-ScheduledTask -TaskName $TaskName `
                        -Action $action `
                        -Trigger $trigger `
                        -Settings $settings `
                        -Description "매일 오전 8:30 KOSPI/KOSDAQ/반도체 주가를 카카오톡으로 전송"

Write-Host ""
Write-Host "작업 스케줄러 등록 완료: $TaskName (매일 08:30)"
Write-Host "로그 파일: $LogPath"
Write-Host "지금 바로 테스트: Start-ScheduledTask -TaskName '$TaskName'"
