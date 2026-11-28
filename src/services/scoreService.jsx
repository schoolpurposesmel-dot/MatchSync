const STORAGE_KEY = 'matchsync.scoreSubmissions';
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MATCHES = [
  {
    reference: 'MS-VAL-8841',
    game: 'Valorant',
    type: 'Tournament · Quarterfinals',
    event: 'CIT-U Campus Valorant Clash 2026',
    schedule: 'Nov 28, 2026 · 8:00 PM',
    teamA: 'Team Shadow',
    teamB: 'CIT-U Apex',
    bestOf: 3,
    mode: '5v5 Standard',
    region: 'Asia-Pacific',
  },
  {
    reference: 'MS-MLBB-3092',
    game: 'Mobile Legends',
    type: 'Scrim Match',
    event: 'Open Scrim Lobby',
    schedule: 'Nov 29, 2026 · 7:30 PM',
    teamA: 'Team Shadow',
    teamB: 'Team Nexplay',
    bestOf: 3,
    mode: '5v5 Draft Pick',
    region: 'Asia-Pacific',
  },
  {
    reference: 'MS-CODM-5127',
    game: 'Call of Duty Mobile',
    type: 'Scrim Match',
    event: 'Weekend Practice Series',
    schedule: 'Nov 27, 2026 · 8:00 PM',
    teamA: 'Team Shadow',
    teamB: 'South Cebu Strikers',
    bestOf: 3,
    mode: '5v5 Multiplayer',
    region: 'Asia-Pacific',
  },
  {
    reference: 'MS-VAL-7720',
    game: 'Valorant',
    type: 'Tournament · Round of 16',
    event: 'CIT-U Campus Valorant Clash 2026',
    schedule: 'Nov 21, 2026 · 6:00 PM',
    teamA: 'Team Shadow',
    teamB: 'Cebu Titans',
    bestOf: 3,
    mode: '5v5 Standard',
    region: 'Asia-Pacific',
  },
  {
    reference: 'MS-MLBB-2981',
    game: 'Mobile Legends',
    type: 'Tournament · Group Stage',
    event: 'CCS Inter-Department MLBB Cup',
    schedule: 'Nov 20, 2026 · 7:00 PM',
    teamA: 'Team Shadow',
    teamB: 'Talisay Titans',
    bestOf: 1,
    mode: '5v5 Draft Pick',
    region: 'Asia-Pacific',
  },
];

// Sample history so the status panel shows every state on first visit.
const SEED_SUBMISSIONS = [
  {
    id: 'SUB-1002',
    reference: 'MS-VAL-7720',
    status: 'Verified',
    seriesScore: { a: 2, b: 0 },
    games: [
      { a: 13, b: 8, winner: 'A' },
      { a: 13, b: 11, winner: 'A' },
    ],
    evidence: [
      { name: 'map1-scoreboard.png', size: 412000 },
      { name: 'map2-scoreboard.png', size: 398000 },
    ],
    mvp: 'DynamicCydric',
    notes: '',
    submittedAt: '2026-11-21T20:15:00+08:00',
    reviewNote: 'Both captains and the organizer confirmed this result.',
  },
  {
    id: 'SUB-1001',
    reference: 'MS-MLBB-2981',
    status: 'Disputed',
    seriesScore: { a: 1, b: 0 },
    games: [{ a: 21, b: 14, winner: 'A' }],
    evidence: [{ name: 'postgame.jpg', size: 256000 }],
    mvp: '',
    notes: '',
    submittedAt: '2026-11-20T20:02:00+08:00',
    reviewNote: 'Screenshot is cropped. Upload the full post-game scoreboard.',
  },
];

// Used when storage is unavailable (private mode), so the page keeps working.
let memoryStore = null;

export function getSubmissions() {
  if (memoryStore) return memoryStore;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(parsed)) return parsed;
  } catch {
    /* unreadable storage falls back to the sample history */
  }
  return SEED_SUBMISSIONS;
}

function saveSubmissions(submissions) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
    memoryStore = null;
  } catch {
    memoryStore = submissions;
  }
}

export function findMatch(reference) {
  const code = String(reference ?? '').trim().toUpperCase();
  return MATCHES.find((match) => match.reference === code) ?? null;
}

// A match accepts a new result if it has none yet, or its last one was disputed.
export function getOpenMatches(submissions) {
  return MATCHES.filter(
    (match) =>
      !submissions.some((s) => s.reference === match.reference && s.status !== 'Disputed')
  );
}

export async function submitScore(result) {
  await wait(1000);
  const current = getSubmissions();
  const existing = current.find((s) => s.reference === result.reference);
  if (existing && existing.status !== 'Disputed') {
    throw new Error('A result for this match has already been submitted.');
  }
  const submission = {
    ...result,
    id: `SUB-${Date.now().toString().slice(-6)}`,
    status: 'Pending Review',
    submittedAt: new Date().toISOString(),
    reviewNote: '',
  };
  saveSubmissions([submission, ...current.filter((s) => s.reference !== result.reference)]);
  return submission;
}

export function withdrawSubmission(id) {
  saveSubmissions(
    getSubmissions().filter((s) => !(s.id === id && s.status === 'Pending Review'))
  );
  return getSubmissions();
}