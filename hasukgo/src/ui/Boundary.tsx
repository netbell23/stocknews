/**
 * 화면이 터졌을 때 받아내는 그물.
 *
 * 리액트는 렌더 도중 예외가 나면 트리를 통째로 들어낸다 — 화면이 까맣게
 * 비고, 사용자는 게임이 사라졌다고 느낀다. 저장은 멀쩡한데도 그렇다.
 * 십만 명이 쓰면 내가 못 본 조합 하나가 반드시 나온다. 그때 까만 화면
 * 대신 "돌아가기" 버튼 하나를 내주는 것이 이 파일이 하는 전부다.
 *
 * 저장은 건드리지 않는다. 판 하나가 깨졌다고 백오십 판을 지울 수는 없다.
 */
import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
}

export class Boundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    // 서버가 없으니 보낼 데가 없다. 사용자가 캡처해 보낼 수 있게 콘솔에 남긴다.
    console.error('[하숙생 맞고] 화면이 멈췄습니다', error, info.componentStack);
  }

  render(): React.ReactNode {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="crash">
        <div className="crash-box">
          <h1>판이 엎어졌어요</h1>
          <p>
            뭔가 잘못돼서 화면이 멈췄습니다. <b>저장은 그대로 있습니다</b> — 돌아가면 마지막으로
            저장된 데까지 이어서 하실 수 있어요.
          </p>
          <button className="btn primary wide gold" onClick={() => window.location.reload()}>
            돌아가기
          </button>
          <details>
            <summary>무슨 일이 있었는지</summary>
            <code>{error.message || String(error)}</code>
          </details>
        </div>
      </div>
    );
  }
}
