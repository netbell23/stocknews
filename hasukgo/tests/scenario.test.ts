import { describe, expect, it } from 'vitest';
import { parseScript } from '../src/scenario/parser';
import { advance, choose, startScenario } from '../src/scenario/player';
import { EXPRESSION_ALIAS } from '../src/scenario/types';

const SAMPLE = `
=== test_01 | 테스트 씬
@bg maru night
@bgm spring
@outfit 1
* 나레이션 줄이다.
은서 [웃음] 표정 있는 대사.
나 표정 없는 대사.
@affection 5
@choice
- 첫 번째 | +3 | A
- 두 번째 | -1 | B
@label A
은서 [부끄러움] A 로 왔다.
@goto END
@label B
은서 [삐짐] B 로 왔다.
@label END
@point 100
@end
`;

describe('스크립트 파서', () => {
  const { scenes, issues } = parseScript(SAMPLE);

  it('오류 없이 파싱된다', () => {
    expect(issues).toEqual([]);
    expect(scenes).toHaveLength(1);
  });

  it('씬 헤더에서 id/제목/소속 하숙생을 뽑는다', () => {
    expect(scenes[0].id).toBe('test_01');
    expect(scenes[0].title).toBe('테스트 씬');
    expect(scenes[0].tenantId).toBe('test');
  });

  it('연출 지시어를 해석한다', () => {
    const steps = scenes[0].steps;
    expect(steps[0]).toEqual({ kind: 'bg', bg: 'maru', time: 'night' });
    expect(steps[1]).toEqual({ kind: 'bgm', bgm: 'spring' });
    expect(steps[2]).toEqual({ kind: 'outfit', index: 1 });
  });

  it('나레이션과 대사를 구분한다', () => {
    const steps = scenes[0].steps;
    expect(steps[3]).toEqual({ kind: 'narrate', text: '나레이션 줄이다.' });
    expect(steps[4]).toEqual({
      kind: 'say',
      speaker: '은서',
      expression: 'smile',
      text: '표정 있는 대사.',
    });
    expect(steps[5]).toEqual({
      kind: 'say',
      speaker: '나',
      expression: 'normal',
      text: '표정 없는 대사.',
    });
  });

  it('선택지와 라벨을 연결한다', () => {
    const choiceStep = scenes[0].steps.find((s) => s.kind === 'choice');
    expect(choiceStep).toBeDefined();
    if (choiceStep?.kind !== 'choice') throw new Error('no choice');
    expect(choiceStep.options).toEqual([
      { text: '첫 번째', affection: 3, goto: 'A' },
      { text: '두 번째', affection: -1, goto: 'B' },
    ]);
    expect(scenes[0].labels).toHaveProperty('A');
    expect(scenes[0].labels).toHaveProperty('B');
    expect(scenes[0].labels).toHaveProperty('END');
  });
});

describe('파서 오류 검출', () => {
  const bad = (src: string) => parseScript(src).issues;

  it('없는 라벨로 goto 하면 잡아낸다', () => {
    const issues = bad('=== x | x\n@goto NOPE\n@end\n');
    expect(issues.some((i) => i.message.includes('없는 라벨'))).toBe(true);
  });

  it('@end 가 없으면 잡아낸다', () => {
    const issues = bad('=== x | x\n* 끝이 없다\n');
    expect(issues.some((i) => i.message.includes('@end'))).toBe(true);
  });

  it('선택지가 1개면 잡아낸다', () => {
    const issues = bad('=== x | x\n@choice\n- 하나 | +1\n@end\n');
    expect(issues.some((i) => i.message.includes('2개 미만'))).toBe(true);
  });

  it('알 수 없는 배경/BGM/표정/지시어를 잡아낸다', () => {
    expect(bad('=== x | x\n@bg 없는곳 night\n@end\n').some((i) => i.message.includes('배경'))).toBe(true);
    expect(bad('=== x | x\n@bgm 없는곡\n@end\n').some((i) => i.message.includes('BGM'))).toBe(true);
    expect(bad('=== x | x\n은서 [없는표정] 야\n@end\n').some((i) => i.message.includes('표정'))).toBe(true);
    expect(bad('=== x | x\n@없는지시어 arg\n@end\n').some((i) => i.message.includes('지시어'))).toBe(true);
  });

  it('씬 헤더보다 먼저 나온 줄을 잡아낸다', () => {
    expect(bad('* 헤더 없이 시작\n').some((i) => i.message.includes('씬 헤더'))).toBe(true);
  });
});

describe('시나리오 진행기', () => {
  const scene = parseScript(SAMPLE).scenes[0];

  it('첫 진행에서 연출을 소화하고 첫 대사를 보여준다', () => {
    const s = startScenario(scene);
    expect(s.view.bg).toBe('maru');
    expect(s.view.bgm).toBe('spring');
    expect(s.view.outfit).toBe(1);
    expect(s.view.speaker).toBeNull();
    expect(s.view.text).toBe('나레이션 줄이다.');
  });

  it('진행하면 대사와 표정이 바뀐다', () => {
    let s = startScenario(scene);
    s = advance(s);
    expect(s.view.speaker).toBe('은서');
    expect(s.view.expression).toBe('smile');
    s = advance(s);
    expect(s.view.speaker).toBe('나');
    expect(s.view.expression).toBe('normal');
  });

  it('선택지에서 멈춘다', () => {
    let s = startScenario(scene);
    for (let i = 0; i < 5 && !s.view.choices; i++) s = advance(s);
    expect(s.view.choices).toHaveLength(2);
    expect(s.view.affectionDelta).toBe(5); // @affection 5 까지 소화
  });

  it('선택에 따라 다른 분기로 가고 호감도가 반영된다', () => {
    let s = startScenario(scene);
    while (!s.view.choices) s = advance(s);
    const a = choose(s, 0);
    expect(a.view.text).toBe('A 로 왔다.');
    expect(a.view.affectionDelta).toBe(5 + 3);

    const b = choose(s, 1);
    expect(b.view.text).toBe('B 로 왔다.');
    expect(b.view.affectionDelta).toBe(5 - 1);
  });

  it('A 분기는 B 를 건너뛰고 끝난다', () => {
    let s = startScenario(scene);
    while (!s.view.choices) s = advance(s);
    let a = choose(s, 0);
    let guard = 0;
    const seen: string[] = [];
    while (!a.view.done && guard++ < 20) {
      seen.push(a.view.text);
      a = advance(a);
    }
    expect(seen).toContain('A 로 왔다.');
    expect(seen).not.toContain('B 로 왔다.');
    expect(a.view.pointDelta).toBe(100);
    expect(a.view.done).toBe(true);
  });
});

describe('표정 8종', () => {
  it('한글 태그가 8종 모두 매핑된다', () => {
    expect(Object.keys(EXPRESSION_ALIAS)).toHaveLength(8);
    expect(new Set(Object.values(EXPRESSION_ALIAS)).size).toBe(8);
  });
});
