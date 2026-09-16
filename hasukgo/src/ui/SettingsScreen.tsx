/**
 * 설정 — 규칙 옵션 / 진행 옵션 / 데이터.
 * 기획서에서 해석이 갈렸던 항목은 전부 여기서 켜고 끌 수 있다.
 */
import type { DeviceInfo } from '../auth/device';
import { DEFAULT_RULES, type RuleOptions } from '../engine/types';
import type { SaveData } from '../save/storage';
import DevicePanel from './DevicePanel';
import { Switch } from './parts';

type BoolRule = {
  [K in keyof RuleOptions]: RuleOptions[K] extends boolean ? K : never;
}[keyof RuleOptions];

const RULE_ROWS: Array<{ key: BoolRule; label: string; desc: string }> = [
  { key: 'biGwangPenalty', label: '비삼광 2점', desc: '3광에 비광이 끼면 3점 대신 2점' },
  { key: 'goMultiplierFrom3', label: '3고부터 배수', desc: '고 1·2회는 가산, 3회부터 2배씩' },
  { key: 'piBak', label: '피박', desc: '상대 피가 기준 이하일 때 2배' },
  { key: 'gwangBak', label: '광박', desc: '상대 광이 없을 때 2배' },
  { key: 'mengBak', label: '멍박', desc: '상대 열끗이 없을 때 2배' },
  { key: 'goBak', label: '고박', desc: '고를 외친 쪽이 지면 2배 부담' },
  { key: 'heundeulgi', label: '흔들기', desc: '같은 월 3장 선언 시 2배' },
  { key: 'bomb', label: '폭탄', desc: '같은 월 3장을 한 번에 투하' },
  { key: 'chongtong', label: '총통', desc: '같은 월 4장이면 즉시 승리' },
  { key: 'nagariDouble', label: '나가리 2배', desc: '나가리 다음 판은 2배' },
  { key: 'gukjinOption', label: '국진 선택', desc: '국진을 열끗/쌍피 중 골라 쓴다' },
];

export default function SettingsScreen({
  data,
  device,
  onChange,
  onReset,
  onBack,
}: {
  data: SaveData;
  device: DeviceInfo | null;
  onChange: (next: SaveData) => void;
  onReset: () => void;
  onBack: () => void;
}) {
  const rules: RuleOptions = { ...DEFAULT_RULES, ...data.settings.rules };

  const setRule = <K extends keyof RuleOptions>(key: K, value: RuleOptions[K]) => {
    onChange({
      ...data,
      settings: { ...data.settings, rules: { ...data.settings.rules, [key]: value } },
    });
  };

  const setSetting = <K extends keyof SaveData['settings']>(key: K, value: SaveData['settings'][K]) => {
    onChange({ ...data, settings: { ...data.settings, [key]: value } });
  };

  return (
    <div className="screen" style={{ background: 'var(--wood-dark)' }}>
      <div className="layer">
        <div className="topbar">
          <button className="iconbtn" onClick={onBack} aria-label="뒤로">
            ←
          </button>
          <h1>설정</h1>
        </div>

        <div className="panel">
          <div className="section">
            <h3>점수 해석</h3>
            <div className="row">
              <div>
                띠 점수 방식
                <small>
                  기획서 표기(5장 5점)와 한국 온라인 맞고 표준(5장 1점)이 달라 둘 다 넣었습니다. 홍/청/초단 3점은
                  두 방식 모두 동일합니다.
                </small>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <button
                className={`btn ${rules.ttiScoring === 'standard' ? 'primary' : 'ghost'}`}
                style={{ flex: 1, fontSize: 13 }}
                onClick={() => setRule('ttiScoring', 'standard')}
              >
                표준 (5장 1점)
              </button>
              <button
                className={`btn ${rules.ttiScoring === 'specSheet' ? 'primary' : 'ghost'}`}
                style={{ flex: 1, fontSize: 13 }}
                onClick={() => setRule('ttiScoring', 'specSheet')}
              >
                기획서 (5장 5점)
              </button>
            </div>
          </div>

          <div className="section">
            <h3>규칙 옵션</h3>
            {RULE_ROWS.map((r) => (
              <div className="row" key={r.key}>
                <div>
                  {r.label}
                  <small>{r.desc}</small>
                </div>
                <Switch on={rules[r.key]} onToggle={() => setRule(r.key, !rules[r.key])} />
              </div>
            ))}
            <div className="row">
              <div>
                보너스 쌍피
                <small>덱에 섞는 보너스패 장수 (0~3)</small>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {[0, 1, 2, 3].map((n) => (
                  <button
                    key={n}
                    className={`btn ${rules.bonusPiCount === n ? 'primary' : 'ghost'}`}
                    style={{ padding: '6px 11px', fontSize: 13 }}
                    onClick={() => setRule('bonusPiCount', n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <div className="row">
              <div>
                스톱 최소 점수
                <small>이 점수 이상이어야 고/스톱을 고를 수 있습니다</small>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {[3, 5, 7].map((n) => (
                  <button
                    key={n}
                    className={`btn ${rules.minScoreToStop === n ? 'primary' : 'ghost'}`}
                    style={{ padding: '6px 11px', fontSize: 13 }}
                    onClick={() => setRule('minScoreToStop', n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="section">
            <h3>진행</h3>
            <div className="row">
              <div>
                전원 공략 가능 모드
                <small>
                  끄면 한 명과 연애를 시작한 뒤 다른 하숙생의 이벤트는 친구 루트로 분기합니다. 켜면 전원 공략
                  가능합니다.
                </small>
              </div>
              <Switch
                on={data.settings.allRoutes}
                onToggle={() => setSetting('allRoutes', !data.settings.allRoutes)}
              />
            </div>
            <div className="row">
              <div>
                글자 속도
                <small>0에 가까울수록 빠릅니다</small>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {[
                  [0, '즉시'],
                  [15, '빠름'],
                  [25, '보통'],
                  [45, '느림'],
                ].map(([v, label]) => (
                  <button
                    key={v}
                    className={`btn ${data.settings.textSpeed === v ? 'primary' : 'ghost'}`}
                    style={{ padding: '6px 9px', fontSize: 12 }}
                    onClick={() => setSetting('textSpeed', v as number)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="section">
            <h3>기록</h3>
            <div className="row">
              <span>총 대국</span>
              <span>{data.stats.totalGames}판</span>
            </div>
            <div className="row">
              <span>전적</span>
              <span>
                {data.stats.wins}승 {data.stats.losses}패
              </span>
            </div>
            <div className="row">
              <span>최고 점수</span>
              <span>{data.stats.bestScore}점</span>
            </div>
            <div className="row">
              <span>보유 포인트</span>
              <span>{data.points.toLocaleString()} P</span>
            </div>
          </div>

          <DevicePanel data={data} device={device} onRestore={onChange} />

          <div className="section">
            <h3>데이터</h3>
            <div className="row">
              <div>
                처음부터 다시
                <small>진행도·호감도·포인트·도감이 모두 지워집니다</small>
              </div>
              <button
                className="btn"
                style={{ background: 'linear-gradient(180deg,#9c3c2c,#6f2a1e)' }}
                onClick={() => {
                  if (confirm('정말 모든 진행을 지우시겠습니까? 되돌릴 수 없습니다.')) onReset();
                }}
              >
                초기화
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--paper-dim)', padding: '8px 0 24px' }}>
            하숙생 맞고 · 판돈은 하숙집 포인트이며 현금 환전 기능이 없습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
