import { it } from 'vitest';
import { curveParams } from '../src/ai/params';
import { playSeries, type Seat } from '../src/ai/runner';

const seat = (o: number, s: number): Seat => ({ params: curveParams(o, s) });

it('난이도 직접대결 리포트', () => {
  const pairs: Array<[[number, number], [number, number]]> = [
    [[1, 1], [10, 10]],
    [[1, 1], [5, 5]],
    [[5, 5], [10, 10]],
    [[1, 1], [1, 10]],
    [[1, 1], [3, 1]],
    [[10, 10], [10, 10]],
  ];
  const lines = ['직접대결 / 각 1000판 (선후공 교대)  — 좌측 기준 승률'];
  for (const [[ao, as_], [bo, bs]] of pairs) {
    const r = playSeries([seat(ao, as_), seat(bo, bs)], 1000, 424242);
    lines.push(
      `${ao}번${as_}단계 vs ${bo}번${bs}단계 -> ${(r.winRate0 * 100).toFixed(1)}% : ${((1 - r.winRate0) * 100).toFixed(1)}%   (나가리 ${r.draws})`,
    );
  }
  console.log('\n' + lines.join('\n') + '\n');
});
