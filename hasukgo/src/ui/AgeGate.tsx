/**
 * 성인 확인.
 *
 * 청소년 이용불가로 등급을 올렸으니, 들어오기 전에 한 번 물어야 한다.
 * 확인은 이 기기에만 남는다 (서버가 없으므로 그 이상은 할 수 없고,
 * 실제 본인확인이 아니라는 점은 README 에도 적어 뒀다).
 */
import { Background, GameLogo } from './parts';

const KEY = 'hasukgo.adult.v1';

export function isAdultConfirmed(): boolean {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    // 사생활 보호 모드에서는 저장이 막힌다. 그때는 매번 묻는다.
    return false;
  }
}

export function confirmAdult(): void {
  try {
    localStorage.setItem(KEY, '1');
  } catch {
    /* 저장 못 해도 이번 세션은 통과시킨다 */
  }
}

export default function AgeGate({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="screen">
      <Background bg="maru" time="night" />
      <div className="title-vignette" />
      <div className="layer gate-layer">
        <GameLogo className="gate-logo" />

        <div className="gate-badge">청소년 이용불가</div>

        <div className="gate-box">
          <p>이 게임은 만 18세 이상만 이용할 수 있습니다.</p>
          <ul>
            <li>등장인물은 전원 성인(22~29세)이며, 인물 일러스트에 선정적 표현이 있습니다.</li>
            <li>
              화투(고스톱)를 소재로 하지만 판돈은 <b>하숙집 포인트</b>입니다 — 현금 결제·환전
              기능이 전혀 없습니다.
            </li>
          </ul>
        </div>

        <button
          className="btn gold wide"
          onClick={() => {
            confirmAdult();
            onEnter();
          }}
        >
          만 18세 이상입니다 · 들어가기
        </button>
        <a className="gate-out" href="https://www.google.com" rel="noreferrer">
          나가기
        </a>
      </div>
    </div>
  );
}
