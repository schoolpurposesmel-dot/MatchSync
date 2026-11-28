export const GAME_RULES = {
  Valorant: { gameLabel: 'Map', unit: 'Rounds', autoWinner: true },
  'Call of Duty Mobile': { gameLabel: 'Map', unit: 'Points', autoWinner: true },
  'Mobile Legends': { gameLabel: 'Game', unit: 'Kills', autoWinner: false },
  'League of Legends': { gameLabel: 'Game', unit: 'Kills', autoWinner: false },
};

export const emptyGames = (bestOf) =>
  Array.from({ length: bestOf }, () => ({ a: '', b: '', winner: '' }));

function checkGame(gameName, a, b, winner) {
  const high = Math.max(a, b);
  const low = Math.min(a, b);

  if (GAME_RULES[gameName].autoWinner && a === b) return 'A map cannot end in a tie.';

  if (gameName === 'Valorant') {
    const regulation = high === 13 && low <= 11;
    const overtime = high > 13 && high - low === 2;
    if (!regulation && !overtime) {
      return 'Valorant maps end at 13 rounds, or by a 2-round lead in overtime.';
    }
  }

  if (!GAME_RULES[gameName].autoWinner && !winner) return 'Select the winning team.';

  return '';
}

// Walks the series in order. Each row is 'active' (can be filled), 'waiting'
// (an earlier game is unfinished) or 'skipped' (the series is already decided).
export function evaluateSeries(match, games) {
  const needed = Math.floor(match.bestOf / 2) + 1;
  let winsA = 0;
  let winsB = 0;
  let blocked = false;

  const rows = games.map((game) => {
    if (winsA === needed || winsB === needed) return { state: 'skipped' };
    if (blocked) return { state: 'waiting' };

    const filled = game.a !== '' && game.b !== '';
    const error = filled
      ? checkGame(match.game, Number(game.a), Number(game.b), game.winner)
      : 'Enter both scores.';

    if (error) {
      blocked = true;
      return { state: 'active', filled, error };
    }

    const winner = GAME_RULES[match.game].autoWinner
      ? Number(game.a) > Number(game.b)
        ? 'A'
        : 'B'
      : game.winner;
    if (winner === 'A') winsA += 1;
    else winsB += 1;
    return { state: 'active', filled, error: '', winner };
  });

  const seriesWinner = winsA === needed ? 'A' : winsB === needed ? 'B' : null;
  return { rows, winsA, winsB, needed, seriesWinner };
}

export function formatFileSize(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}