import { delay, http, HttpResponse } from 'msw';

const randomDuration = (base: number, jitter: number) => {
  const delta = Math.random() * jitter * 2 - jitter;
  return Math.max(50, base + delta);
};

export const handlers = [
  http.get('/api/health', () => {
    return HttpResponse.json({ status: 'ok', message: 'Mock API is running' });
  }),

  http.get('/api/stalk/sessions', async ({ request }) => {
    const url = new URL(request.url);
    const scenario = url.searchParams.get('scenario') ?? 'normal';

    if (scenario === 'error') {
      await delay(200);
      return HttpResponse.json({ message: 'Session service unavailable' }, { status: 503 });
    }

    const baseDelay = scenario === 'slow' ? 1200 : 180;
    await delay(randomDuration(baseDelay, 120));

    const quality = () => ({
      bitrateKbps: Math.round(1800 + Math.random() * 600),
      rttMs: Math.round(40 + Math.random() * 20),
      packetLoss: parseFloat((Math.random() * 1.2).toFixed(2)),
    });

    return HttpResponse.json({
      status: 'ok',
      sessions: [
        { id: 'S-1024', expert: '김애널', user: '사용자A', topic: '단기 채권·배당주', state: 'connected', quality: quality() },
        { id: 'S-1025', expert: '박투자', user: '사용자B', topic: 'ETF 포트폴리오', state: 'waiting', quality: quality() },
        { id: 'S-1026', expert: '이리서치', user: '사용자C', topic: '성장주 차트 리뷰', state: 'waiting', quality: quality() },
      ],
      scenario,
    });
  }),

  http.get('/api/heoby/events', async ({ request }) => {
    const url = new URL(request.url);
    const scenario = url.searchParams.get('scenario') ?? 'normal';

    if (scenario === 'error') {
      await delay(200);
      return HttpResponse.json({ message: 'Event pipeline timeout' }, { status: 504 });
    }

    const baseDelay = scenario === 'slow' ? 1500 : 220;
    await delay(randomDuration(baseDelay, 160));

    return HttpResponse.json({
      status: 'ok',
      scenario,
      events: [
        { id: 'E-3101', type: 'fall-detected', camera: 'CAM-3', severity: 'high', ts: '2025-11-24T09:35:00Z' },
        { id: 'E-3102', type: 'restricted-zone', camera: 'CAM-1', severity: 'medium', ts: '2025-11-24T09:37:10Z' },
      ],
      metrics: {
        lastLatencyMs: randomDuration(baseDelay, 50),
        queueLag: scenario === 'slow' ? 12 : 2,
      },
    });
  }),

  http.post('/api/lookey/scan', async () => {
    await delay(randomDuration(420, 160));
    return HttpResponse.json({
      status: 'ok',
      product: {
        name: '하리보 골드베렌 100g',
        price: 1800,
        discount: '2+1 진행 중',
        confidence: 0.93,
        aisle: '과자 2번 진열대',
      },
      tts: '하리보 골드베렌 100그램, 가격 천팔백원, 현재 이 플러스 원 행사가 진행 중입니다.',
    });
  }),

  http.get('/api/lookey/history', async () => {
    await delay(120);
    return HttpResponse.json({
      items: [
        { id: 'LK-01', name: '콘소메맛 팝콘', price: 1500, time: '09:12', confidence: 0.91 },
        { id: 'LK-02', name: '바나나 우유', price: 1400, time: '09:05', confidence: 0.95 },
        { id: 'LK-03', name: '불닭볶음면 컵', price: 1700, time: '08:53', confidence: 0.9 },
      ],
    });
  }),

  http.get('/api/linbook/ledger', async () => {
    await delay(180);
    return HttpResponse.json({
      entries: [
        { id: 'L-101', type: 'expense', amount: 48000, category: '스터디룸', memo: '주말 모임 대관', date: '2025-11-21' },
        { id: 'L-102', type: 'income', amount: 120000, category: '회비', memo: '11월 회비 입금', date: '2025-11-18' },
        { id: 'L-103', type: 'expense', amount: 28000, category: '식비', memo: '세미나 간식', date: '2025-11-17' },
        { id: 'L-104', type: 'expense', amount: 35000, category: '운영비', memo: '도메인/호스팅', date: '2025-11-15' },
      ],
      balance: 180000,
    });
  }),

  http.post('/api/linbook/report', async () => {
    await delay(randomDuration(420, 120));
    return HttpResponse.json({
      status: 'generated',
      period: '2025-11',
      income: 120000,
      expense: 111000,
      surplus: 9000,
      recommendations: ['회비 납부 자동화로 회계 누락 방지', '세미나 간식 예산 상한 설정'],
    });
  }),
];
