/**
 * 화면 전환과 진행 상태를 총괄한다.
 * 타이틀 → 홈 → (해금 하숙생 선택) → 승부 전 대화 → 대전 → 결과 → 이벤트 씬 → 홈
 */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getDevice, type DeviceInfo } from './auth/device';
import { getTheme } from './data/shop';
import { getTenant, isUnlocked, minStake, rewardFor, TENANTS, toneOf } from './data/tenants';
import type { Tenant } from './data/types';
import { getScene, SCRIPT_ISSUES } from './scenario';
import type { Scene } from './scenario/types';
import {
  allCleared,
  applyResult,
  clearedStages,
  load,
  loadBest,
  markSceneSeen,
  profileFrom,
  payoutFor,
  resetSave,
  save,
  takeAllowance,
  type SaveData,
} from './save/storage';
import GalleryScreen from './ui/GalleryScreen';
import HomeScreen from './ui/HomeScreen';
import MatchScreen, { type MatchOutcome } from './ui/MatchScreen';
import NovelScreen, { type NovelResult } from './ui/NovelScreen';
import { Background, Portrait, setCardSkin } from './ui/parts';
import SettingsScreen from './ui/SettingsScreen';
import ShopScreen from './ui/ShopScreen';

type Screen =
  | { name: 'title' }
  | { name: 'home' }
  | { name: 'novel'; scene: Scene; tenant: Tenant | null; after: 'home' | 'match' }
  | { name: 'preMatch'; tenant: Tenant; stage: number }
  | { name: 'match'; tenant: Tenant; stage: number }
  | { name: 'gallery' }
  | { name: 'shop' }
  | { name: 'settings' };

/** 승부 직전 대화 컷을 임시 씬으로 만든다 (하숙생 대사 데이터에서 생성) */
function preMatchScene(t: Tenant, affection: number, stage: number): Scene {
  const tone = toneOf(affection);
  const lines = t.lines.matchStart[tone];
  const line = lines[Math.floor(Math.random() * lines.length)];
  return {
    id: `__prematch_${t.id}_${stage}`,
    title: `${t.name} · ${stage}단계`,
    tenantId: t.id,
    steps: [
      { kind: 'bg', bg: 'maru', time: 'night' },
      { kind: 'narrate', text: `마루에 방석 두 개가 깔렸다. ${stage}번째 판이다.` },
      { kind: 'say', speaker: t.name, expression: 'smile', text: line },
      { kind: 'end' },
    ],
    labels: {},
  };
}

export default function App() {
  const [data, setData] = useState<SaveData>(() => load());
  const [device, setDevice] = useState<DeviceInfo | null>(null);
  const [recovered, setRecovered] = useState(false);
  /**
   * IndexedDB 사본까지 확인하기 전에는 저장하지 않는다.
   * 첫 렌더의 빈 상태를 곧바로 저장해버리면 사본을 덮어써서, 정작 복구할 것이 사라진다.
   */
  const [hydrated, setHydrated] = useState(false);
  const [screen, setScreen] = useState<Screen>({ name: 'title' });
  const [losingStreak, setLosingStreak] = useState<Record<string, number>>({});
  const [pendingEvent, setPendingEvent] = useState<{ tenant: Tenant; stage: number } | null>(null);

  // 기기 ID 발급 + IndexedDB 까지 본 뒤 최신 저장 데이터로 맞춘다
  useEffect(() => {
    let alive = true;
    void (async () => {
      const [dev, best] = await Promise.all([getDevice(), loadBest()]);
      if (!alive) return;
      setDevice(dev);
      setRecovered(best.recovered);
      setData((prev) => {
        const base = best.data.savedAt >= prev.savedAt ? best.data : prev;
        return base.deviceId === dev.id ? base : { ...base, deviceId: dev.id };
      });
      setHydrated(true);
    })();
    return () => {
      alive = false;
    };
  }, []);

  // 장착한 화패 스킨과 마루 테마를 화면 전체에 반영한다
  useEffect(() => {
    setCardSkin(data.equipped.cards);
    const theme = getTheme(data.equipped.theme);
    const root = document.documentElement;
    // 이전 테마가 남기고 간 값을 먼저 지운다
    for (const t of ['--wood-dark', '--wood', '--wood-light', '--paper', '--paper-dim', '--lamp', '--lamp-dim', '--accent']) {
      root.style.removeProperty(t);
    }
    for (const [k, v] of Object.entries(theme.vars)) root.style.setProperty(k, v);
  }, [data.equipped.cards, data.equipped.theme]);

  // 저장은 변경될 때마다 (단, 초기 로딩이 끝난 뒤부터)
  useEffect(() => {
    if (!hydrated) return;
    save(data);
  }, [data, hydrated]);

  // 스크립트 문법 오류는 개발 중에만 콘솔로 알린다
  useEffect(() => {
    if (import.meta.env.DEV && SCRIPT_ISSUES.length > 0) {
      console.warn('시나리오 스크립트 오류:', SCRIPT_ISSUES);
    }
  }, []);

  const profile = useMemo(() => profileFrom(data.recentGames), [data.recentGames]);
  const everyoneDone = useMemo(() => allCleared(data), [data]);

  const goHome = useCallback(() => setScreen({ name: 'home' }), []);

  /**
   * 아직 안 본 프롤로그 / 계절 전환 씬을 찾는다.
   * 반드시 "방금 갱신된" 저장 데이터를 넘겨야 한다. setState 는 비동기라
   * 바깥 클로저의 data 를 보면 같은 씬이 무한히 반복된다.
   */
  const nextCommonScene = useCallback((d: SaveData): Scene | null => {
    const cl = clearedStages(d);
    const pending: Array<{ id: string; when: boolean }> = [
      { id: 'world', when: true },
      { id: 'prologue', when: true },
      { id: 'season_summer', when: isUnlocked(getTenant('sua'), cl) },
      { id: 'season_autumn', when: isUnlocked(getTenant('yerin'), cl) },
      { id: 'season_winter', when: isUnlocked(getTenant('yoon'), cl) },
    ];
    for (const p of pending) {
      if (!p.when || d.seenScenes.includes(p.id)) continue;
      const scene = getScene(p.id);
      if (scene) return scene;
    }
    return null;
  }, []);

  /** 공통 씬이 남아 있으면 그걸, 없으면 홈으로 */
  const goNextFrom = useCallback(
    (d: SaveData) => {
      const scene = nextCommonScene(d);
      if (scene) {
        setScreen({
          name: 'novel',
          scene,
          tenant: scene.id === 'prologue' ? getTenant('eunseo') : null,
          after: 'home',
        });
      } else {
        setScreen({ name: 'home' });
      }
    },
    [nextCommonScene],
  );

  const startFromTitle = useCallback(() => goNextFrom(data), [goNextFrom, data]);

  const pickTenant = useCallback(
    (t: Tenant) => {
      const prog = data.tenants[t.id];
      const need = minStake(t);
      if (data.points < need) {
        alert(
          `${t.name}와(과) 붙으려면 ${need.toLocaleString()}P 는 들고 있어야 합니다.
` +
            `점당 ${t.rate}P 라 크게 지면 그만큼 물어줘야 하거든요.`,
        );
        return;
      }
      const stage = Math.min(10, (prog?.clearedStage ?? 0) + 1);
      setScreen({ name: 'preMatch', tenant: t, stage });
    },
    [data],
  );

  /** 대전 종료 처리 */
  const finishMatch = useCallback(
    (t: Tenant, stage: number, o: MatchOutcome) => {
      const reward = o.won ? rewardFor(t, stage) : 0;
      const payout = payoutFor({
        won: o.won,
        draw: o.draw,
        settlementTotal: o.settlementTotal,
        rate: t.rate,
      });
      const next = applyResult(
        data,
        {
          tenantId: t.id,
          stage,
          won: o.won,
          payout,
          playerWentGo: o.playerWentGo,
          focus: o.focus,
          score: o.score,
        },
        { reward },
      );
      setData(next);
      setLosingStreak((prev) => ({ ...prev, [t.id]: o.won ? 0 : (prev[t.id] ?? 0) + 1 }));

      const clearedNow = next.tenants[t.id].clearedStage;
      if (o.won && clearedNow === stage) {
        // 단계를 새로 깼다 → 이벤트 씬
        setPendingEvent({ tenant: t, stage });
      } else {
        goHome();
      }
    },
    [data, goHome],
  );

  // 클리어 이벤트 씬 띄우기
  useEffect(() => {
    if (!pendingEvent) return;
    const { tenant, stage } = pendingEvent;
    const ev = tenant.events.find((e) => e.stage === stage);
    const scene = ev ? getScene(ev.scriptId) : null;
    setPendingEvent(null);
    if (!scene) {
      goHome();
      return;
    }
    setScreen({ name: 'novel', scene, tenant, after: 'home' });
  }, [pendingEvent, goHome]);

  const finishNovel = useCallback(
    (scene: Scene, tenant: Tenant | null, r: NovelResult, after: 'home' | 'match') => {
      let next = markSceneSeen(data, scene.id, r.cg);
      next = { ...next, points: Math.max(0, next.points + r.pointDelta) };
      if (tenant && r.affectionDelta !== 0 && next.tenants[tenant.id]) {
        next = {
          ...next,
          tenants: {
            ...next.tenants,
            [tenant.id]: {
              ...next.tenants[tenant.id],
              affection: Math.max(0, Math.min(100, next.tenants[tenant.id].affection + r.affectionDelta)),
            },
          },
        };
      }
      setData(next);
      if (after === 'match' && tenant) {
        const prog = next.tenants[tenant.id];
        const stage = Math.min(10, (prog?.clearedStage ?? 0) + 1);
        setScreen({ name: 'match', tenant, stage });
      } else {
        goNextFrom(next);
      }
    },
    [data, goNextFrom],
  );

  // ── 렌더 ───────────────────────────────
  if (screen.name === 'title') {
    return (
      <div className="app">
        <div className="screen title-screen">
          <Background bg="maru" time="night" />
          <div className="layer title-screen" style={{ justifyContent: 'center' }}>
            <div className="title-logo">하숙생 맞고</div>
            <div className="title-sub">밤마다 마루에서, 열 번의 승부</div>
            <div className="title-menu">
              <button className="btn primary wide" onClick={startFromTitle}>
                {data.stats.totalGames > 0 ? '이어하기' : '시작하기'}
              </button>
              <button className="btn wide" onClick={() => setScreen({ name: 'gallery' })}>
                도감
              </button>
              <button className="btn wide" onClick={() => setScreen({ name: 'settings' })}>
                설정
              </button>
            </div>
            <div style={{ marginTop: 18, display: 'flex', gap: 2 }}>
              {TENANTS.slice(0, 5).map((t) => (
                <Portrait key={t.id} tenant={t} expression="smile" style={{ width: 52, opacity: 0.85 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen.name === 'novel') {
    return (
      <div className="app">
        <NovelScreen
          key={screen.scene.id}
          scene={screen.scene}
          tenant={screen.tenant}
          textSpeed={data.settings.textSpeed}
          onDone={(r) => finishNovel(screen.scene, screen.tenant, r, screen.after)}
        />
      </div>
    );
  }

  if (screen.name === 'preMatch') {
    const prog = data.tenants[screen.tenant.id];
    const scene = preMatchScene(screen.tenant, prog?.affection ?? 0, screen.stage);
    return (
      <div className="app">
        <NovelScreen
          key={scene.id}
          scene={scene}
          tenant={screen.tenant}
          textSpeed={data.settings.textSpeed}
          onDone={() => setScreen({ name: 'match', tenant: screen.tenant, stage: screen.stage })}
        />
      </div>
    );
  }

  if (screen.name === 'match') {
    const prog = data.tenants[screen.tenant.id];
    return (
      // wide: 가로로 들면 맞고 판이 프레임 폭을 넘어 펼쳐진다
      <div className="app wide">
        <MatchScreen
          key={`${screen.tenant.id}-${screen.stage}-${data.stats.totalGames}`}
          tenant={screen.tenant}
          stage={screen.stage}
          affection={prog?.affection ?? 0}
          rules={data.settings.rules}
          profile={profile}
          losingStreak={losingStreak[screen.tenant.id] ?? 0}
          points={data.points}
          onFinish={(o) => finishMatch(screen.tenant, screen.stage, o)}
          onQuit={goHome}
        />
      </div>
    );
  }

  if (screen.name === 'shop') {
    return (
      <div className="app">
        <ShopScreen
          data={data}
          onChange={setData}
          onBack={() => setScreen(data.stats.totalGames > 0 ? { name: 'home' } : { name: 'title' })}
        />
      </div>
    );
  }

  if (screen.name === 'gallery') {
    return (
      <div className="app">
        <GalleryScreen data={data} onBack={() => setScreen(data.stats.totalGames > 0 ? { name: 'home' } : { name: 'title' })} />
      </div>
    );
  }

  if (screen.name === 'settings') {
    return (
      <div className="app">
        <SettingsScreen
          data={data}
          device={device}
          onChange={setData}
          onReset={() => {
            setData(resetSave());
            setScreen({ name: 'title' });
          }}
          onBack={() => setScreen(data.stats.totalGames > 0 ? { name: 'home' } : { name: 'title' })}
        />
      </div>
    );
  }

  return (
    <div className="app">
      {recovered && (
        <div
          className="hint-box"
          style={{ position: 'absolute', top: 60, left: 12, right: 12, zIndex: 20, cursor: 'pointer' }}
          onClick={() => setRecovered(false)}
        >
          브라우저 저장소가 비워져 있어 <b>백업 사본에서 진행도를 되살렸습니다.</b> 설정 → 진행도 백업에서
          코드를 받아 두시면 더 안전합니다. (탭하여 닫기)
        </div>
      )}
      <HomeScreen
        data={data}
        onPick={pickTenant}
        onGallery={() => setScreen({ name: 'gallery' })}
        onShop={() => setScreen({ name: 'shop' })}
        onSettings={() => setScreen({ name: 'settings' })}
        onAllowance={() => setData((prev) => takeAllowance(prev))}
        allClearedFlag={everyoneDone}
        onHidden={() => {
          const scene = getScene('hidden_ending');
          if (scene) setScreen({ name: 'novel', scene, tenant: null, after: 'home' });
        }}
      />
    </div>
  );
}
