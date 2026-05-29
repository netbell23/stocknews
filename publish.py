"""
docs/index.html 변경분을 GitHub 에 자동 커밋·푸시한다.
push 자격증명(Git Credential Manager 캐시 등)이 있어야 성공한다.
실패해도 전체 작업을 중단시키지 않는다 (best-effort).
"""

import subprocess


def _git(args, cwd):
    return subprocess.run(
        ["git", *args], cwd=cwd,
        capture_output=True, text=True, timeout=60,
    )


def publish_page(base_dir: str) -> bool:
    # 변경사항 없으면 조용히 종료
    status = _git(["status", "--porcelain", "docs/index.html"], base_dir)
    if status.returncode == 0 and not status.stdout.strip():
        print("배포: 변경 없음 (skip)")
        return True

    _git(["add", "docs/index.html"], base_dir)
    from datetime import datetime
    msg = f"데이터 업데이트 {datetime.now():%Y-%m-%d %H:%M}"
    commit = _git(["commit", "-m", msg], base_dir)
    if commit.returncode != 0 and "nothing to commit" in (commit.stdout + commit.stderr):
        print("배포: 커밋할 변경 없음")
        return True

    push = _git(["push", "origin", "HEAD"], base_dir)
    if push.returncode == 0:
        print("✓ GitHub Pages 배포 완료")
        return True
    print(f"[배포 실패] git push 오류:\n{push.stderr.strip()}")
    return False
