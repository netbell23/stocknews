import { describe, expect, it } from 'vitest';
import { orderSweeps, type Sweep } from '../src/ui/useCardFlight';

const s = (name: string, fromX: number, forcedWait?: number): Sweep<string> => ({
  forcedWait,
  fromX,
  card: name,
});
const names = (list: Array<Sweep<string>>) => orderSweeps(list).map((x) => x.card);

describe('먹은 패가 더미로 날아가는 순서', () => {
  it('바닥에서 왼쪽에 있던 것부터 간다', () => {
    // 더미 줄 순서(광·띠·열·피)대로 들어와도 바닥 자리 순서로 나가야 한다
    expect(names([s('광', 300), s('피', 80), s('띠', 190)])).toEqual(['피', '띠', '광']);
  });

  it('내리쳐 먹은 패는 제 시각대로 먼저 간다', () => {
    // forcedWait 가 있는 패는 바닥 자리와 무관하게 앞선다
    expect(names([s('왼쪽', 10), s('내리친패', 900, 420)])).toEqual(['내리친패', '왼쪽']);
  });

  it('시각이 정해진 패끼리는 이른 것부터', () => {
    expect(names([s('늦게', 10, 800), s('일찍', 900, 200)])).toEqual(['일찍', '늦게']);
  });

  it('원래 배열을 건드리지 않는다', () => {
    const list = [s('나중', 300), s('먼저', 10)];
    orderSweeps(list);
    expect(list.map((x) => x.card)).toEqual(['나중', '먼저']);
  });

  it('빈 목록과 한 장짜리도 안전하다', () => {
    expect(orderSweeps([])).toEqual([]);
    expect(names([s('혼자', 42)])).toEqual(['혼자']);
  });
});
