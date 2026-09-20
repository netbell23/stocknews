/**
 * 플레이테스트 하니스.
 *   node scripts/playtest.mjs [판수]
 *
 * 100단계를 전부 돌려서 재는 것
 *  1. 단계별 승률 (플레이어 숙련도 3종)
 *  2. 한 판에 걸리는 실제 시간 — UI 연출 지연을 그대로 반영한다
 *  3. 한 단계를 깨는 데 걸리는 기대 시간 (= 기대 도전 횟수 x 판 시간 + 이벤트 감상 시간)
 *  4. 포인트 수지 — 참가비만 나가고 못 이겨서 막히는 구간이 있는지
 *  5. 진행 중 버그 — 교착, 이상한 국면, 말도 안 되는 점수
 */
import { build } from 'esbuild';
import { mkdirSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = join(HERE, '..');
const GAMES = Number(process.argv[2] ?? 300);
const LOSS_FACTOR = 0.7; // src/save/storage.ts 와 같은 값

// ── UI 연출에 실제로 들어가는 시간 (src/ui/useMatch.ts, MatchScreen.tsx 의 상수) ──
const T = {
  aiPlay: 620, // AI 가 패를 내기까지
  aiChoice: 420, // AI 가 두 장 중 고르기
  aiGoStop: 500 + 1600, // 고/스톱 연출 오버레이
  resultDelay: 900, // 결과창이 뜨기까지
  // 사람이 쓰는 시간 (보수적으로 잡은 추정치)
  humanPlay: 2500, // 손패 한 장 고르기
  humanChoice: 1500, // 두 장 중 고르기
  humanGoStop: 3000, // 고/스톱 결정
  resultTap: 2000, // 결과 확인하고 넘기기
  textSpeed: 25, // 글자 타이핑 ms/자 (기본 설정)
  lineTap: 1200, // 대사 한 줄 읽고 넘기기
  choiceThink: 2500, // 선택지 고민
};

async function loadSim() {
  const tmp = join(APP, '.tmp-sim');
  mkdirSync(tmp, { recursive: true });
  const out = join(tmp, 'sim.mjs');
  await build({
    entryPoints: [join(HERE, 'sim-entry.ts')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: out,
    logLevel: 'error',
  });
  const mod = await import(pathToFileURL(out).href);
  return { mod, cleanup: () => rmSync(tmp, { recursive: true, force: true }) };
}

const sim = await loadSim();
const {
  createGame,
  playCard,
  chooseMatch,
  declareGo,
  declareStop,
  scorePlayer,
  createRng,
  chooseCard,
  chooseCapture,
  decideGoStop,
  EMPTY_PROFILE,
  curveParams,
  paramsFor,
  rewardFor,
  minStake,
  TENANTS,
  parseScript,
  startScenario,
  advance,
  choose,
} = sim.mod;

// ── 버그 수집 ──────────────────────────────
const bugs = [];
const note = (kind, detail) => {
  const key = `${kind}|${detail}`;
  if (!bugs.some((b) => b.key === key)) bugs.push({ key, kind, detail, count: 1 });
  else bugs.find((b) => b.key === key).count++;
};

/**
 * 한 판을 끝까지 돌리며 UI 시간까지 잰다.
 * 플레이어도 AI 로 대신 두되, 숙련도를 바꿔가며 사람 수준을 흉내낸다.
 */
function playMatch({ playerParams, oppParams, seed }) {
  const rng = createRng(seed ^ 0x5bf03635);
  let s = createGame({ seed, firstPlayer: 0 });
  let ms = 0;
  let steps = 0;
  let playerGo = 0;

  while (s.phase !== 'ended') {
    if (steps++ > 400) {
      note('교착', `400수 초과 (seed ${seed}, phase ${s.phase})`);
      return null;
    }
    const isPlayer = s.turn === 0;
    const params = isPlayer ? playerParams : oppParams;
    const before = s;

    if (s.phase === 'awaitPlay') {
      const d = chooseCard(s, params, rng, EMPTY_PROFILE);
      if (!d.cardId) {
        note('낼 패 없음', `phase awaitPlay 인데 손패가 비었다 (seed ${seed})`);
        return null;
      }
      s = playCard(s, d.cardId, d.bomb);
      ms += isPlayer ? T.humanPlay : T.aiPlay;
    } else if (s.phase === 'awaitChoice') {
      s = chooseMatch(s, chooseCapture(s, params, rng));
      ms += isPlayer ? T.humanChoice : T.aiChoice;
    } else if (s.phase === 'awaitGoStop') {
      const d = decideGoStop(s, params, rng, EMPTY_PROFILE);
      if (isPlayer && d.action === 'go') playerGo++;
      s = d.action === 'go' ? declareGo(s) : declareStop(s);
      ms += isPlayer ? T.humanGoStop : T.aiGoStop;
    } else {
      note('알 수 없는 국면', `${s.phase} (seed ${seed})`);
      return null;
    }

    if (s === before) {
      note('상태 정지', `${s.phase} 에서 상태가 변하지 않음 (seed ${seed})`);
      return null;
    }
  }

  const st = s.settlement;
  if (!st) {
    note('정산 없음', `ended 인데 settlement 가 없다 (seed ${seed})`);
    return null;
  }
  if (st.total < 0 || st.total > 2000) {
    note('비정상 점수', `${st.total}점 (${st.reasons.join(',')}, seed ${seed})`);
  }
  ms += T.resultDelay + T.resultTap;

  return {
    won: st.winner === 0,
    draw: st.winner === null,
    ms,
    turns: s.turnCount,
    total: st.total, // 이긴 쪽의 최종 점수 = 판돈의 근거
    playerGo,
  };
}

// ── 시나리오 감상 시간 ────────────────────────
const scenes = {};
for (const f of readdirSync(join(APP, 'src/data/scripts')).filter((x) => x.endsWith('.txt'))) {
  const r = parseScript(readFileSync(join(APP, 'src/data/scripts', f), 'utf-8'), f);
  for (const sc of r.scenes) scenes[sc.id] = sc;
}

/** 한 씬을 처음부터 끝까지 보는 데 걸리는 시간 (타이핑 + 읽고 넘기기) */
function sceneMs(scene) {
  if (!scene) return 0;
  let st = startScenario(scene);
  let ms = 0;
  let guard = 0;
  while (!st.view.done && guard++ < 400) {
    if (st.view.choices) {
      ms += T.choiceThink;
      st = choose(st, 0);
      continue;
    }
    ms += st.view.text.length * T.textSpeed + T.lineTap;
    st = advance(st);
  }
  if (guard >= 400) note('씬 무한루프', scene.id);
  return ms;
}

// 승부 전 대화 컷은 나레이션 1줄 + 대사 1줄로 생성된다
const PRE_MATCH_MS = (25 + 30) * T.textSpeed + T.lineTap * 2;

// ── 숙련도 3종 ────────────────────────────
const SKILLS = [
  ['초보', curveParams(1, 2)],
  ['보통', curveParams(5, 5)],
  ['숙련', curveParams(9, 8)],
];

const fmt = (ms) => {
  const s = Math.round(ms / 1000);
  return s >= 60 ? `${Math.floor(s / 60)}분 ${String(s % 60).padStart(2, '0')}초` : `${s}초`;
};

console.log(`\n플레이테스트 — 하숙생 10명 x 10단계, 조합당 ${GAMES}판\n`);

const perSkill = {};

for (const [skillName, playerParams] of SKILLS) {
  const rows = [];
  let grandMs = 0;
  let grandAttempts = 0;
  let points = 300; // 시작 포인트
  let minPoints = 300;
  let brokeAt = null;

  for (const t of TENANTS) {
    for (let stage = 1; stage <= 10; stage++) {
      const oppParams = paramsFor(t, stage);
      let wins = 0;
      let draws = 0;
      let msSum = 0;
      let turnSum = 0;
      let n = 0;

      let potWin = 0; // 이겼을 때 받는 평균 판돈
      let potLose = 0; // 졌을 때 내는 평균 판돈
      let winN = 0;
      let loseN = 0;
      for (let i = 0; i < GAMES; i++) {
        const r = playMatch({ playerParams, oppParams, seed: (stage * 7919 + i * 104729) >>> 0 });
        if (!r) continue;
        n++;
        if (r.won) { wins++; winN++; potWin += r.total * t.rate; }
        else if (r.draw) draws++;
        else { loseN++; potLose += r.total * t.rate * LOSS_FACTOR; }
        msSum += r.ms;
        turnSum += r.turns;
      }
      if (!n) continue;
      const avgWinPot = winN ? potWin / winN : 0;
      const avgLosePot = loseN ? potLose / loseN : 0;

      const winRate = wins / n;
      const matchMs = msSum / n + PRE_MATCH_MS;
      // 기대 도전 횟수 (기하분포). 승률 0 이면 못 깬다.
      const attempts = winRate > 0 ? 1 / winRate : Infinity;
      const eventMs = sceneMs(scenes[t.events[stage - 1].scriptId]);
      const stageMs = attempts * matchMs + eventMs;

      // 포인트 수지: 이긴 한 판은 판돈을 받고, 나머지 도전은 판돈을 낸다
      const lossesBefore = Math.max(0, attempts - 1) * (1 - draws / n);
      points += avgWinPot - lossesBefore * avgLosePot + rewardFor(t, stage);
      if (points < minPoints) minPoints = points;
      if (points < minStake(t) && !brokeAt) brokeAt = `${t.name} ${stage}단계 (보유 ${Math.round(points)}P < 필요 ${minStake(t)}P)`;

      rows.push({
        tenant: t.name,
        order: t.order,
        stage,
        winRate,
        drawRate: draws / n,
        matchMs,
        attempts,
        eventMs,
        stageMs,
        turns: turnSum / n,
        points,
        avgWinPot,
        avgLosePot,
        net: avgWinPot - Math.max(0, attempts - 1) * avgLosePot + rewardFor(t, stage),
      });
      grandMs += stageMs;
      grandAttempts += attempts;
    }
  }
  perSkill[skillName] = { rows, grandMs, grandAttempts, points, minPoints, brokeAt };
}

// ── 출력 ──────────────────────────────────
for (const [skill, d] of Object.entries(perSkill)) {
  console.log(`\n${'='.repeat(78)}`);
  console.log(`숙련도: ${skill}`);
  console.log('='.repeat(78));
  console.log('하숙생   단계  승률   도전   이기면   지면    단계순증   누적포인트');
  console.log('-'.repeat(78));

  let prev = '';
  for (const r of d.rows) {
    // 1, 5, 10 단계만 보여줘 표를 읽을 수 있게 한다
    if (![1, 5, 10].includes(r.stage)) continue;
    const name = r.tenant === prev ? '' : r.tenant;
    prev = r.tenant;
    console.log(
      `${name.padEnd(8)}${String(r.stage).padStart(3)}  ` +
        `${(r.winRate * 100).toFixed(0).padStart(4)}%  ` +
        `${r.attempts.toFixed(1).padStart(5)}  ` +
        `${('+' + Math.round(r.avgWinPot)).padStart(7)}  ` +
        `${('-' + Math.round(r.avgLosePot)).padStart(6)}  ` +
        `${(r.net >= 0 ? '+' : '') + Math.round(r.net).toLocaleString().padStart(8)}  ` +
        `${Math.round(r.points).toLocaleString().padStart(10)}P`,
    );
  }

  const byTenant = {};
  for (const r of d.rows) byTenant[r.tenant] = (byTenant[r.tenant] ?? 0) + r.stageMs;

  console.log('-'.repeat(78));
  console.log('하숙생 한 명(10단계) 클리어 시간:');
  for (const [name, ms] of Object.entries(byTenant)) {
    console.log(`  ${name.padEnd(6)} ${fmt(ms)}`);
  }
  console.log(
    `\n  전체 100단계: ${fmt(d.grandMs)}  (총 ${Math.round(d.grandAttempts)}판 도전)`,
  );
  console.log(`  최종 포인트 ${Math.round(d.points).toLocaleString()}P · 최저 ${Math.round(d.minPoints).toLocaleString()}P`);
  if (d.brokeAt) console.log(`  !! 포인트가 최소 보유액 아래로: ${d.brokeAt}`);
  else console.log('  포인트 고갈 없음');
}

console.log(`\n${'='.repeat(78)}`);
if (bugs.length === 0) {
  console.log('진행 중 발견된 이상: 없음');
} else {
  console.log(`진행 중 발견된 이상 ${bugs.length}종`);
  for (const b of bugs) console.log(`  [${b.kind}] ${b.detail}  (${b.count}회)`);
}
console.log('='.repeat(78) + '\n');

sim.cleanup();
