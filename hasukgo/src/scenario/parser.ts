/**
 * 시나리오 스크립트 파서.
 *
 * 한 파일에 여러 씬이 들어간다. 씬 구분은 `=== id | 제목` 줄.
 *
 *   === eunseo_01 | 옆방 사람
 *   @bg maru night
 *   @bgm spring
 *   * 개강 첫날, 마루에는 아직 불이 켜져 있었다.
 *   은서 [웃음] 어, 안녕! 혹시 주인집 아들?
 *   나 어... 네.
 *   @choice
 *   - 같이 칠래? | +3 | A
 *   - 정리만 하고 갈게 | +0 | B
 *   @label A
 *   ...
 *   @end
 *
 * 규칙
 *  - `* 텍스트`           나레이션
 *  - `이름 [표정] 텍스트`  대사 (표정 생략 시 기본)
 *  - `@지시어 인자`        연출 지시
 *  - `# 텍스트`           주석
 *  - 빈 줄은 무시
 */
import {
  BACKGROUNDS,
  EXPRESSION_ALIAS,
  type BackgroundId,
  type BgmId,
  type ChoiceOption,
  type Expression,
  type ParseIssue,
  type Scene,
  type Step,
  type TimeOfDay,
} from './types';

const TIMES: TimeOfDay[] = ['morning', 'evening', 'night'];
const BGMS: BgmId[] = [
  'title',
  'spring',
  'summer',
  'autumn',
  'winter',
  'warm',
  'tense',
  'sad',
  'confess',
  'none',
];

export interface ParseResult {
  scenes: Scene[];
  issues: ParseIssue[];
}

/** 대사 줄에서 화자/표정/본문을 뽑는다 */
const SAY_RE = /^([^\s\[\]]+)\s*(?:\[([^\]]+)\])?\s+(.+)$/;

export function parseScript(source: string, fileLabel = '<script>'): ParseResult {
  const scenes: Scene[] = [];
  const issues: ParseIssue[] = [];
  let current: Scene | null = null;
  let currentId = fileLabel;

  const lines = source.split(/\r?\n/);
  const fail = (lineNo: number, message: string) => {
    issues.push({ sceneId: currentId, line: lineNo, message });
  };

  const push = (step: Step) => {
    if (!current) return;
    if (step.kind === 'label') current.labels[step.name] = current.steps.length;
    current.steps.push(step);
  };

  for (let i = 0; i < lines.length; i++) {
    const lineNo = i + 1;
    const line = lines[i].trim();
    if (!line || line.startsWith('#')) continue;

    // 씬 헤더
    if (line.startsWith('===')) {
      const body = line.replace(/^=+/, '').trim();
      const [id, title] = body.split('|').map((x) => x.trim());
      if (!id) {
        fail(lineNo, '씬 id 가 없습니다');
        continue;
      }
      currentId = id;
      current = {
        id,
        title: title ?? id,
        tenantId: id.includes('_') ? id.split('_')[0] : null,
        steps: [],
        labels: {},
      };
      scenes.push(current);
      continue;
    }

    if (!current) {
      fail(lineNo, '씬 헤더(=== id | 제목) 보다 먼저 나온 줄입니다');
      continue;
    }

    // 나레이션
    if (line.startsWith('*')) {
      const text = line.slice(1).trim();
      if (!text) fail(lineNo, '빈 나레이션');
      else push({ kind: 'narrate', text });
      continue;
    }

    // 선택지 항목
    if (line.startsWith('-')) {
      const last = current.steps[current.steps.length - 1];
      if (!last || last.kind !== 'choice') {
        fail(lineNo, '@choice 없이 선택지가 나왔습니다');
        continue;
      }
      const opt = parseChoice(line.slice(1).trim());
      if (!opt) fail(lineNo, `선택지 형식 오류: ${line}`);
      else last.options.push(opt);
      continue;
    }

    // 지시어
    if (line.startsWith('@')) {
      const [cmd, ...rest] = line.slice(1).split(/\s+/);
      const arg = rest.join(' ').trim();
      switch (cmd) {
        case 'bg': {
          const [bg, time] = rest;
          if (!BACKGROUNDS.includes(bg as BackgroundId)) {
            fail(lineNo, `알 수 없는 배경: ${bg}`);
            break;
          }
          const t = (time ?? 'night') as TimeOfDay;
          if (!TIMES.includes(t)) {
            fail(lineNo, `알 수 없는 시간대: ${time}`);
            break;
          }
          push({ kind: 'bg', bg: bg as BackgroundId, time: t });
          break;
        }
        case 'bgm': {
          if (!BGMS.includes(arg as BgmId)) {
            fail(lineNo, `알 수 없는 BGM: ${arg}`);
            break;
          }
          push({ kind: 'bgm', bgm: arg as BgmId });
          break;
        }
        case 'sfx':
          if (!arg) fail(lineNo, 'sfx 이름이 없습니다');
          else push({ kind: 'sfx', sfx: arg });
          break;
        case 'cg':
          if (!arg) fail(lineNo, 'cg 이름이 없습니다');
          else push({ kind: 'cg', cg: arg });
          break;
        case 'outfit': {
          const idx = Number(arg);
          if (![0, 1, 2].includes(idx)) fail(lineNo, `의상 번호는 0~2: ${arg}`);
          else push({ kind: 'outfit', index: idx as 0 | 1 | 2 });
          break;
        }
        case 'affection': {
          const d = Number(arg);
          if (Number.isNaN(d)) fail(lineNo, `호감도 값 오류: ${arg}`);
          else push({ kind: 'affection', delta: d });
          break;
        }
        case 'point': {
          const d = Number(arg);
          if (Number.isNaN(d)) fail(lineNo, `포인트 값 오류: ${arg}`);
          else push({ kind: 'point', delta: d });
          break;
        }
        case 'choice':
          push({ kind: 'choice', options: [] });
          break;
        case 'label':
          if (!arg) fail(lineNo, '라벨 이름이 없습니다');
          else push({ kind: 'label', name: arg });
          break;
        case 'goto':
          if (!arg) fail(lineNo, 'goto 대상이 없습니다');
          else push({ kind: 'goto', name: arg });
          break;
        case 'end':
          push({ kind: 'end' });
          break;
        default:
          fail(lineNo, `알 수 없는 지시어: @${cmd}`);
      }
      continue;
    }

    // 대사
    const m = SAY_RE.exec(line);
    if (!m) {
      fail(lineNo, `해석할 수 없는 줄: ${line}`);
      continue;
    }
    const [, speaker, expRaw, text] = m;
    let expression: Expression = 'normal';
    if (expRaw) {
      const mapped = EXPRESSION_ALIAS[expRaw.trim()];
      if (!mapped) {
        fail(lineNo, `알 수 없는 표정: ${expRaw}`);
      } else {
        expression = mapped;
      }
    }
    push({ kind: 'say', speaker, expression, text });
  }

  // 사후 검증: goto/choice 대상 라벨이 실제로 있는가
  for (const scene of scenes) {
    for (const step of scene.steps) {
      if (step.kind === 'goto' && !(step.name in scene.labels)) {
        issues.push({ sceneId: scene.id, line: 0, message: `없는 라벨로 goto: ${step.name}` });
      }
      if (step.kind === 'choice') {
        if (step.options.length < 2) {
          issues.push({ sceneId: scene.id, line: 0, message: '선택지가 2개 미만입니다' });
        }
        for (const o of step.options) {
          if (o.goto && !(o.goto in scene.labels)) {
            issues.push({ sceneId: scene.id, line: 0, message: `없는 라벨로 선택지 이동: ${o.goto}` });
          }
        }
      }
    }
    if (!scene.steps.some((s) => s.kind === 'end')) {
      issues.push({ sceneId: scene.id, line: 0, message: '@end 가 없습니다' });
    }
  }

  return { scenes, issues };
}

/** `텍스트 | +3 | 라벨` 형태 파싱 */
function parseChoice(body: string): ChoiceOption | null {
  const parts = body.split('|').map((x) => x.trim());
  if (parts.length < 2) return null;
  const text = parts[0];
  if (!text) return null;
  const affection = Number(parts[1]);
  if (Number.isNaN(affection)) return null;
  const goto = parts[2] ? parts[2] : null;
  return { text, affection, goto };
}
