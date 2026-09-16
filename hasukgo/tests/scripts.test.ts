/**
 * 실제 시나리오 스크립트 파일 검증.
 * 하숙생 데이터가 참조하는 scriptId 100개가 전부 존재하고 문법 오류가 없어야 한다.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { parseScript } from '../src/scenario/parser';
import { advance, choose, startScenario } from '../src/scenario/player';
import type { ParseIssue, Scene } from '../src/scenario/types';
import { TENANTS } from '../src/data/tenants';

const DIR = join(process.cwd(), 'src', 'data', 'scripts');

const files = readdirSync(DIR).filter((f) => f.endsWith('.txt'));
const scenes: Record<string, Scene> = {};
const issues: ParseIssue[] = [];
for (const f of files) {
  const r = parseScript(readFileSync(join(DIR, f), 'utf-8'), f);
  issues.push(...r.issues);
  for (const s of r.scenes) {
    if (scenes[s.id]) issues.push({ sceneId: s.id, line: 0, message: `중복 씬 id (${f})` });
    scenes[s.id] = s;
  }
}

describe('스크립트 파일 문법', () => {
  it('파싱 오류가 하나도 없다', () => {
    const report = issues.map((i) => `${i.sceneId}:${i.line} ${i.message}`).join('\n');
    expect(report).toBe('');
  });

  it('스크립트 파일이 하숙생 수 + 공통 파일만큼 있다', () => {
    expect(files.length).toBe(TENANTS.length + 1);
  });
});

describe('하숙생 이벤트 커버리지', () => {
  it('참조된 scriptId 100개가 전부 존재한다', () => {
    const missing: string[] = [];
    for (const t of TENANTS) {
      for (const e of t.events) {
        if (!scenes[e.scriptId]) missing.push(`${t.name} ${e.stage}단계 -> ${e.scriptId}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it('프롤로그 / 계절 전환 / 히든 엔딩이 있다', () => {
    for (const id of ['prologue', 'season_summer', 'season_autumn', 'season_winter', 'hidden_ending']) {
      expect(scenes[id], id).toBeDefined();
    }
  });

  it('이벤트 씬의 제목이 하숙생 데이터의 제목과 일치한다', () => {
    const mismatched: string[] = [];
    for (const t of TENANTS) {
      for (const e of t.events) {
        const s = scenes[e.scriptId];
        if (s && s.title !== e.title) mismatched.push(`${e.scriptId}: "${s.title}" vs "${e.title}"`);
      }
    }
    expect(mismatched).toEqual([]);
  });

  it('씬의 tenantId 가 실제 하숙생 id 와 맞는다', () => {
    const wrong: string[] = [];
    for (const t of TENANTS) {
      for (const e of t.events) {
        const s = scenes[e.scriptId];
        if (s && s.tenantId !== t.id) wrong.push(`${e.scriptId}: ${s.tenantId} != ${t.id}`);
      }
    }
    expect(wrong).toEqual([]);
  });
});

describe('이벤트 내용 규칙', () => {
  const eventScenes = () =>
    TENANTS.flatMap((t) => t.events.map((e) => ({ t, e, s: scenes[e.scriptId] }))).filter((x) => x.s);

  it('hasChoice 로 표시된 이벤트에는 실제 선택지가 있다', () => {
    const wrong: string[] = [];
    for (const { e, s } of eventScenes()) {
      const has = s.steps.some((st) => st.kind === 'choice');
      if (has !== e.hasChoice) wrong.push(`${e.scriptId}: 데이터 ${e.hasChoice} / 스크립트 ${has}`);
    }
    expect(wrong).toEqual([]);
  });

  it('모든 이벤트에 대사가 최소 5줄 이상 있다', () => {
    const thin: string[] = [];
    for (const { e, s } of eventScenes()) {
      const n = s.steps.filter((st) => st.kind === 'say' || st.kind === 'narrate').length;
      if (n < 5) thin.push(`${e.scriptId}: ${n}줄`);
    }
    expect(thin).toEqual([]);
  });

  it('10단계 이벤트에는 엔딩 CG 가 있다', () => {
    const missing: string[] = [];
    for (const t of TENANTS) {
      const e = t.events.find((x) => x.stage === 10)!;
      const s = scenes[e.scriptId];
      if (s && !s.steps.some((st) => st.kind === 'cg')) missing.push(e.scriptId);
    }
    expect(missing).toEqual([]);
  });

  it('모든 이벤트가 호감도를 올려준다', () => {
    const noGain: string[] = [];
    for (const { e, s } of eventScenes()) {
      const total = s.steps
        .filter((st) => st.kind === 'affection')
        .reduce((a, st) => a + (st.kind === 'affection' ? st.delta : 0), 0);
      if (total <= 0) noGain.push(e.scriptId);
    }
    expect(noGain).toEqual([]);
  });
});

describe('모든 씬이 끝까지 재생된다', () => {
  it('어떤 분기를 타도 무한루프 없이 done 에 도달한다', () => {
    const stuck: string[] = [];
    for (const scene of Object.values(scenes)) {
      // 선택지마다 0번/마지막 선택을 각각 따라가 본다
      for (const pick of [0, 99]) {
        let s = startScenario(scene);
        let guard = 0;
        while (!s.view.done && guard++ < 500) {
          if (s.view.choices) {
            const idx = Math.min(pick, s.view.choices.length - 1);
            s = choose(s, idx);
          } else {
            s = advance(s);
          }
        }
        if (!s.view.done) stuck.push(`${scene.id} (pick ${pick})`);
      }
    }
    expect(stuck).toEqual([]);
  });
});
