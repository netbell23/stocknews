/* =========================================================================
   두마음 산악회 — 통합 서버 (선택 사항)
   - 정적 파일(index.html 등) 서빙: http://<내IP>:8787
   - 단톡 실시간 중계: 같은 주소의 WebSocket (포트 8787)
   실행:  node server.js
   의존성 없음 (Node 내장 모듈만 사용, Node 18+ 권장)
   ========================================================================= */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 8787;
const ROOT = __dirname;
const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8',
  '.svg':'image/svg+xml', '.png':'image/png', '.ico':'image/x-icon' };

/* ---------- 정적 파일 서버 ---------- */
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const file = path.join(ROOT, path.normalize(p).replace(/^(\.\.[/\\])+/, ''));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
});

/* ---------- 최소 WebSocket 구현 (RFC 6455, 라이브러리 없이) ---------- */
const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const clients = new Set();

server.on('upgrade', (req, socket) => {
  const key = req.headers['sec-websocket-key'];
  if (!key) { socket.destroy(); return; }
  const accept = crypto.createHash('sha1').update(key + GUID).digest('base64');
  socket.write(
    'HTTP/1.1 101 Switching Protocols\r\n' +
    'Upgrade: websocket\r\nConnection: Upgrade\r\n' +
    `Sec-WebSocket-Accept: ${accept}\r\n\r\n`
  );
  clients.add(socket);
  socket.on('data', buf => {
    const msg = decodeFrame(buf);
    if (msg == null) return;
    // 받은 메시지를 다른 모든 클라이언트에 그대로 중계
    for (const c of clients) if (c !== socket && !c.destroyed) c.write(encodeFrame(msg));
  });
  const cleanup = () => clients.delete(socket);
  socket.on('close', cleanup);
  socket.on('error', cleanup);
});

function decodeFrame(buf) {
  try {
    const opcode = buf[0] & 0x0f;
    if (opcode === 0x8) return null; // close
    let len = buf[1] & 0x7f, off = 2;
    if (len === 126) { len = buf.readUInt16BE(2); off = 4; }
    else if (len === 127) { len = Number(buf.readBigUInt64BE(2)); off = 10; }
    const masked = (buf[1] & 0x80) !== 0;
    let payload;
    if (masked) {
      const mask = buf.slice(off, off + 4); off += 4;
      payload = Buffer.alloc(len);
      for (let i = 0; i < len; i++) payload[i] = buf[off + i] ^ mask[i & 3];
    } else payload = buf.slice(off, off + len);
    return payload.toString('utf8');
  } catch { return null; }
}
function encodeFrame(str) {
  const data = Buffer.from(str, 'utf8'), len = data.length;
  let header;
  if (len < 126) header = Buffer.from([0x81, len]);
  else if (len < 65536) { header = Buffer.alloc(4); header[0] = 0x81; header[1] = 126; header.writeUInt16BE(len, 2); }
  else { header = Buffer.alloc(10); header[0] = 0x81; header[1] = 127; header.writeBigUInt64BE(BigInt(len), 2); }
  return Buffer.concat([header, data]);
}

server.listen(PORT, () => {
  const nets = require('os').networkInterfaces();
  const ips = [];
  for (const name of Object.keys(nets))
    for (const ni of nets[name]) if (ni.family === 'IPv4' && !ni.internal) ips.push(ni.address);
  console.log('🥾 두마음 산악회 서버 실행 중!');
  console.log(`   - 이 기기:     http://localhost:${PORT}`);
  ips.forEach(ip => console.log(`   - 같은 와이파이: http://${ip}:${PORT}  ← 휴대폰에서 이 주소로 접속`));
  console.log('   (단톡 실시간 중계 포함. 종료: Ctrl+C)');
});
