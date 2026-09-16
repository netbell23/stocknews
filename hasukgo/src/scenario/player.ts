/**
 * 시나리오 진행기.
 * 순수 상태 기계. 렌더링은 이 상태를 읽어서 그리기만 한다.
 */
import type { BackgroundId, BgmId, ChoiceOption, Expression, Scene, TimeOfDay } from './types';

export interface ScenarioView {
  bg: BackgroundId;
  time: TimeOfDay;
  bgm: BgmId;
  cg: string | null;
  outfit: 0 | 1 | 2;
  /** 지금 화면에 보이는 대사 */
  speaker: string | null;
  expression: Expression;
  text: string;
  /** 선택지가 떠 있으면 여기에 */
  choices: ChoiceOption[] | null;
  /** 이번 진행에서 누적된 호감도/포인트 변화 */
  affectionDelta: number;
  pointDelta: number;
  /** 재생할 효과음 (읽고 나면 비워진다) */
  sfx: string | null;
  done: boolean;
}

export interface ScenarioState {
  scene: Scene;
  pc: number;
  view: ScenarioView;
}

export function startScenario(scene: Scene): ScenarioState {
  const state: ScenarioState = {
    scene,
    pc: 0,
    view: {
      bg: 'maru',
      time: 'night',
      bgm: 'none',
      cg: null,
      outfit: 0,
      speaker: null,
      expression: 'normal',
      text: '',
      choices: null,
      affectionDelta: 0,
      pointDelta: 0,
      sfx: null,
      done: false,
    },
  };
  return advance(state);
}

/**
 * 다음 대사/선택지가 나올 때까지 지시어를 소화한다.
 * 선택지가 떠 있는 동안에는 아무 일도 하지 않는다.
 */
export function advance(state: ScenarioState): ScenarioState {
  const view: ScenarioView = { ...state.view, sfx: null };
  if (view.choices) return { ...state, view };
  let pc = state.pc;
  const { steps, labels } = state.scene;

  let guard = 0;
  while (pc < steps.length) {
    if (guard++ > 10000) {
      view.done = true;
      break;
    }
    const step = steps[pc];
    pc++;
    switch (step.kind) {
      case 'bg':
        view.bg = step.bg;
        view.time = step.time;
        break;
      case 'bgm':
        view.bgm = step.bgm;
        break;
      case 'sfx':
        view.sfx = step.sfx;
        break;
      case 'cg':
        view.cg = step.cg;
        break;
      case 'outfit':
        view.outfit = step.index;
        break;
      case 'affection':
        view.affectionDelta += step.delta;
        break;
      case 'point':
        view.pointDelta += step.delta;
        break;
      case 'label':
        break;
      case 'goto': {
        const target = labels[step.name];
        if (target === undefined) {
          view.done = true;
          return { ...state, pc: steps.length, view };
        }
        pc = target;
        break;
      }
      case 'choice':
        view.choices = step.options;
        return { ...state, pc, view };
      case 'say':
        view.speaker = step.speaker;
        view.expression = step.expression;
        view.text = step.text;
        return { ...state, pc, view };
      case 'narrate':
        view.speaker = null;
        view.expression = 'normal';
        view.text = step.text;
        return { ...state, pc, view };
      case 'end':
        view.done = true;
        view.choices = null;
        return { ...state, pc: steps.length, view };
    }
  }
  view.done = true;
  return { ...state, pc, view };
}

/** 선택지를 고른다 */
export function choose(state: ScenarioState, index: number): ScenarioState {
  const opts = state.view.choices;
  if (!opts || index < 0 || index >= opts.length) return state;
  const opt = opts[index];
  const view: ScenarioView = {
    ...state.view,
    choices: null,
    affectionDelta: state.view.affectionDelta + opt.affection,
  };
  let pc = state.pc;
  if (opt.goto) {
    const target = state.scene.labels[opt.goto];
    if (target !== undefined) pc = target;
  }
  return advance({ ...state, pc, view });
}

/** 스킵: 선택지나 끝을 만날 때까지 한 번에 진행 */
export function skipToBreak(state: ScenarioState): ScenarioState {
  let s = state;
  let guard = 0;
  while (!s.view.done && !s.view.choices && guard++ < 1000) {
    s = advance(s);
  }
  return s;
}
