/**
 * 스크립트 파일 로딩.
 * src/data/scripts/*.txt 를 전부 읽어 씬 맵을 만든다.
 */
import { parseScript } from './parser';
import type { ParseIssue, Scene } from './types';

const modules = import.meta.glob('../data/scripts/*.txt', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const allScenes: Record<string, Scene> = {};
const allIssues: ParseIssue[] = [];

for (const [path, source] of Object.entries(modules)) {
  const { scenes, issues } = parseScript(source, path);
  allIssues.push(...issues);
  for (const s of scenes) {
    if (allScenes[s.id]) {
      allIssues.push({ sceneId: s.id, line: 0, message: `중복된 씬 id (${path})` });
    }
    allScenes[s.id] = s;
  }
}

export const SCENES: Record<string, Scene> = allScenes;
export const SCRIPT_ISSUES: ParseIssue[] = allIssues;

export function getScene(id: string): Scene | null {
  return SCENES[id] ?? null;
}

export function sceneIds(): string[] {
  return Object.keys(SCENES);
}

export * from './types';
export * from './player';
export { parseScript } from './parser';
