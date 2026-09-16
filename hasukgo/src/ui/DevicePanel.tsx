/**
 * 기기 정보 + 백업/복원 패널.
 * 설정 화면 안에 들어간다.
 */
import { useCallback, useEffect, useState } from 'react';
import { reissueDevice, storageHealth, type DeviceInfo } from '../auth/device';
import { replaceSave, type SaveData } from '../save/storage';
import {
  copyToClipboard,
  downloadBackup,
  makeBackup,
  readBackup,
  summarize,
  type Backup,
} from '../save/transfer';

type Notice = { kind: 'ok' | 'warn' | 'err'; text: string } | null;

export default function DevicePanel({
  data,
  device,
  onRestore,
}: {
  data: SaveData;
  device: DeviceInfo | null;
  onRestore: (next: SaveData) => void;
}) {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [notice, setNotice] = useState<Notice>(null);
  const [pending, setPending] = useState<Backup | null>(null);
  const [health, setHealth] = useState<{ localStorage: boolean; indexedDb: boolean } | null>(null);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    void storageHealth().then(setHealth);
  }, []);

  const build = useCallback(async () => {
    const c = await makeBackup(data, device?.id ?? '');
    setCode(c);
    setShowCode(true);
    return c;
  }, [data, device]);

  const onCopy = useCallback(async () => {
    const c = code || (await build());
    const ok = await copyToClipboard(c);
    setNotice(
      ok
        ? { kind: 'ok', text: '백업 코드를 복사했습니다. 메모장이나 메신저에 붙여넣어 보관하세요.' }
        : { kind: 'warn', text: '복사가 막혔습니다. 아래 코드를 길게 눌러 직접 복사해 주세요.' },
    );
  }, [code, build]);

  const onDownload = useCallback(async () => {
    const c = code || (await build());
    downloadBackup(c);
    setNotice({ kind: 'ok', text: '백업 파일을 저장했습니다.' });
  }, [code, build]);

  const onCheck = useCallback(async () => {
    setNotice(null);
    const r = await readBackup(input);
    if (!r.ok) {
      setPending(null);
      setNotice({ kind: 'err', text: r.reason });
      return;
    }
    setPending(r.backup);
  }, [input]);

  const onApply = useCallback(async () => {
    if (!pending) return;
    const next = replaceSave(pending.save);
    // 가져온 데이터를 이 기기 것으로 삼는다
    const dev = await reissueDevice(pending.save.deviceId || undefined);
    const bound = replaceSave({ ...next, deviceId: dev.id });
    onRestore(bound);
    setPending(null);
    setInput('');
    setNotice({ kind: 'ok', text: '진행도를 복원했습니다.' });
  }, [pending, onRestore]);

  const onFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setInput(String(reader.result ?? ''));
    reader.readAsText(f);
    e.target.value = '';
  }, []);

  const storageWarn = health && !health.localStorage && !health.indexedDb;
  const partial = health && (!health.localStorage || !health.indexedDb) && !storageWarn;

  return (
    <>
      <div className="section">
        <h3>이 기기</h3>
        <div className="row">
          <div>
            기기 코드
            <small>
              브라우저마다 따로 발급되는 무작위 번호입니다. 전화번호·기기 일련번호 같은 개인정보는 쓰지도,
              보내지도 않습니다.
            </small>
          </div>
          <code style={{ fontSize: 13, color: 'var(--lamp)', whiteSpace: 'nowrap' }}>
            {device?.shortCode ?? '…'}
          </code>
        </div>
        <div className="row">
          <span>실행 환경</span>
          <span>{device?.platform ?? '…'}</span>
        </div>
        <div className="row">
          <span>저장 상태</span>
          <span style={{ color: storageWarn ? 'var(--accent)' : partial ? 'var(--warn)' : 'var(--ok)' }}>
            {!health ? '확인 중…' : storageWarn ? '저장 불가' : partial ? '일부만 사용 가능' : '정상'}
          </span>
        </div>

        {storageWarn && (
          <div className="hint-box" style={{ margin: '8px 0 0' }}>
            이 브라우저에서는 저장이 막혀 있습니다(사생활 보호 모드일 수 있습니다). 지금 진행한 내용은
            창을 닫으면 사라집니다. 일반 창에서 열어 주세요.
          </div>
        )}
        {device?.ephemeral && !storageWarn && (
          <div className="hint-box" style={{ margin: '8px 0 0' }}>
            기기 코드를 저장하지 못했습니다. 새로고침하면 새 기기로 인식될 수 있으니 아래에서 백업 코드를
            받아 두세요.
          </div>
        )}
      </div>

      <div className="section">
        <h3>진행도 백업</h3>
        <div style={{ fontSize: 12, color: 'var(--paper-dim)', lineHeight: 1.6, marginBottom: 10 }}>
          지금 진행도: <b style={{ color: 'var(--paper)' }}>{summarize(data)}</b>
          <br />
          백업 코드 하나면 브라우저 데이터를 지웠거나 폰을 바꿔도 그대로 이어서 할 수 있습니다.
          <br />
          <b style={{ color: 'var(--warn)' }}>아이폰 사파리</b>는 홈 화면에 추가하지 않은 사이트의 저장
          데이터를 일정 기간 뒤 지웁니다. 웹으로 오래 즐기실 거면 홈 화면에 추가하거나 백업 코드를 받아
          두세요.
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn primary" style={{ flex: 1, fontSize: 13 }} onClick={onCopy}>
            코드 복사
          </button>
          <button className="btn" style={{ flex: 1, fontSize: 13 }} onClick={onDownload}>
            파일로 저장
          </button>
        </div>
        {showCode && code && (
          <textarea
            readOnly
            value={code}
            onFocus={(e) => e.currentTarget.select()}
            style={{
              width: '100%',
              height: 76,
              marginTop: 8,
              fontSize: 10.5,
              lineHeight: 1.4,
              background: 'rgba(0,0,0,0.45)',
              color: 'var(--paper-dim)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 8,
              padding: 8,
              fontFamily: 'monospace',
              userSelect: 'text',
              WebkitUserSelect: 'text',
            }}
          />
        )}
      </div>

      <div className="section">
        <h3>진행도 복원</h3>
        <div style={{ fontSize: 12, color: 'var(--paper-dim)', lineHeight: 1.6, marginBottom: 8 }}>
          다른 기기에서 받은 백업 코드를 붙여넣으세요. 현재 진행도는 덮어써집니다.
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="HSG1.로 시작하는 백업 코드를 붙여넣으세요"
          style={{
            width: '100%',
            height: 68,
            fontSize: 11,
            background: 'rgba(0,0,0,0.45)',
            color: 'var(--paper)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 8,
            padding: 8,
            fontFamily: 'monospace',
            userSelect: 'text',
            WebkitUserSelect: 'text',
          }}
        />
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button className="btn" style={{ flex: 1, fontSize: 13 }} onClick={onCheck} disabled={!input.trim()}>
            코드 확인
          </button>
          <label className="btn" style={{ flex: 1, fontSize: 13, textAlign: 'center' }}>
            파일 선택
            <input type="file" accept=".txt,text/plain" onChange={onFile} style={{ display: 'none' }} />
          </label>
        </div>

        {pending && (
          <div
            style={{
              marginTop: 10,
              padding: 10,
              borderRadius: 10,
              background: 'rgba(63,138,82,0.15)',
              border: '1px solid rgba(63,138,82,0.5)',
              fontSize: 12,
              lineHeight: 1.6,
            }}
          >
            <b style={{ color: 'var(--ok)' }}>읽을 수 있는 백업입니다.</b>
            <br />
            불러올 내용: {pending.meta.summary}
            <br />
            {pending.meta.createdAt && (
              <span style={{ color: 'var(--paper-dim)' }}>
                만든 날짜: {new Date(pending.meta.createdAt).toLocaleString('ko-KR')}
              </span>
            )}
            <div style={{ marginTop: 8, color: 'var(--warn)' }}>
              지금 진행도({summarize(data)})는 사라집니다.
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <button className="btn primary" style={{ flex: 1, fontSize: 13 }} onClick={onApply}>
                덮어쓰고 복원
              </button>
              <button className="btn ghost" style={{ flex: 1, fontSize: 13 }} onClick={() => setPending(null)}>
                취소
              </button>
            </div>
          </div>
        )}

        {notice && (
          <div
            style={{
              marginTop: 10,
              fontSize: 12,
              lineHeight: 1.5,
              color:
                notice.kind === 'ok'
                  ? 'var(--ok)'
                  : notice.kind === 'warn'
                    ? 'var(--warn)'
                    : 'var(--accent)',
            }}
          >
            {notice.text}
          </div>
        )}
      </div>
    </>
  );
}
