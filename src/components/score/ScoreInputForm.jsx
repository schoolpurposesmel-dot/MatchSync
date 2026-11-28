import React, { useState } from 'react';
import FileUploader from './FileUploader';
import { GAME_RULES, emptyGames, evaluateSeries } from './scoreRules';

const INPUT_CLASS =
  'bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500';

export default function ScoreInputForm({ match, isSubmitting, submitError, onSubmit }) {
  const [games, setGames] = useState(() => emptyGames(match.bestOf));
  const [files, setFiles] = useState([]);
  const [mvp, setMvp] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const rules = GAME_RULES[match.game];
  const series = evaluateSeries(match, games);
  const winnerName =
    series.seriesWinner === 'A' ? match.teamA : series.seriesWinner === 'B' ? match.teamB : null;

  const errors = {
    series: winnerName ? '' : `Complete the series: a team needs ${series.needed} win(s).`,
    files: files.length > 0 ? '' : 'Attach at least one scoreboard screenshot.',
    confirmed: confirmed ? '' : 'Confirm that the result is accurate.',
  };

  const updateGame = (index, field, value) => {
    setGames((prev) => prev.map((g, i) => (i === index ? { ...g, [field]: value } : g)));
  };

  const handleReset = () => {
    setGames(emptyGames(match.bestOf));
    setFiles([]);
    setMvp('');
    setNotes('');
    setConfirmed(false);
    setAttempted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (isSubmitting || Object.values(errors).some(Boolean)) return;

    const playedGames = series.rows.flatMap((row, i) =>
      row.state === 'active' && row.winner
        ? [{ a: Number(games[i].a), b: Number(games[i].b), winner: row.winner }]
        : []
    );

    onSubmit({
      reference: match.reference,
      seriesScore: { a: series.winsA, b: series.winsB },
      games: playedGames,
      evidence: files.map((f) => ({ name: f.name, size: f.size })),
      mvp: mvp.trim(),
      notes: notes.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Section 1: Per-game scores */}
      <div className="bg-[#111522] border border-white/10 rounded-xl p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-white">Match Results</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Enter {rules.unit.toLowerCase()} for each {rules.gameLabel.toLowerCase()} in order
            </p>
          </div>
          <span className="px-2.5 py-1 text-[11px] font-medium rounded bg-purple-500/15 text-purple-300 border border-purple-500/25">
            Best of {match.bestOf}
          </span>
        </div>

        {/* Live series scoreboard */}
        <div
          aria-live="polite"
          className="bg-[#0b0e17] border border-white/10 rounded-lg p-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4"
        >
          <p className="text-sm font-bold text-white text-right break-words">{match.teamA}</p>
          <p className="text-2xl font-bold text-purple-400 tabular-nums">
            {series.winsA} – {series.winsB}
          </p>
          <p className="text-sm font-bold text-white break-words">{match.teamB}</p>
          <p
            className={`col-span-3 text-center text-[11px] font-medium ${
              winnerName ? 'text-emerald-400' : 'text-slate-500'
            }`}
          >
            {winnerName ? `✓ ${winnerName} wins the series` : 'Series not yet decided'}
          </p>
        </div>

        <div className="space-y-3">
          {series.rows.map((row, index) => {
            const game = games[index];
            const label = `${rules.gameLabel} ${index + 1}`;
            const inactive = row.state !== 'active';
            const showError = row.error && (row.filled || attempted);

            return (
              <fieldset
                key={index}
                disabled={inactive || isSubmitting}
                className={`bg-[#1a2033] border rounded-lg p-4 space-y-3 transition ${
                  showError
                    ? 'border-rose-500/50'
                    : row.winner
                    ? 'border-emerald-500/30'
                    : 'border-white/5'
                } ${inactive ? 'opacity-45' : ''}`}
              >
                <legend className="sr-only">{label} score</legend>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-white">{label}</span>
                  <span className="text-[11px] text-slate-400">
                    {row.state === 'skipped' && 'Not needed'}
                    {row.state === 'waiting' && 'Complete the previous one first'}
                    {row.winner && (
                      <span className="text-emerald-400 font-medium">
                        {row.winner === 'A' ? match.teamA : match.teamB} won
                      </span>
                    )}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {['a', 'b'].map((side) => {
                    const teamName = side === 'a' ? match.teamA : match.teamB;
                    return (
                      <label key={side} className="block min-w-0">
                        <span className="block text-[11px] text-slate-400 mb-1 truncate">
                          {teamName} · {rules.unit}
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={3}
                          placeholder="0"
                          value={inactive ? '' : game[side]}
                          onChange={(e) =>
                            updateGame(index, side, e.target.value.replace(/\D/g, ''))
                          }
                          className="w-full bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-sm font-bold text-center text-white focus:outline-none focus:border-purple-500 disabled:cursor-not-allowed"
                        />
                      </label>
                    );
                  })}
                </div>

                {!rules.autoWinner && !inactive && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] text-slate-400">Winner:</span>
                    {['A', 'B'].map((side) => (
                      <button
                        key={side}
                        type="button"
                        aria-pressed={game.winner === side}
                        onClick={() => updateGame(index, 'winner', side)}
                        className={`px-2.5 py-1 text-xs font-medium rounded transition cursor-pointer ${
                          game.winner === side
                            ? 'bg-[#9333ea] text-white'
                            : 'bg-[#111522] text-slate-400 hover:text-white'
                        }`}
                      >
                        {side === 'A' ? match.teamA : match.teamB}
                      </button>
                    ))}
                  </div>
                )}

                {showError && <p className="text-[11px] text-rose-300">{row.error}</p>}
              </fieldset>
            );
          })}
        </div>

        {attempted && errors.series && (
          <p role="alert" className="text-[11px] text-rose-300">
            {errors.series}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="block">
            <span className="block text-xs font-medium text-slate-300 mb-1.5">
              Match MVP (Optional)
            </span>
            <input
              type="text"
              maxLength={40}
              value={mvp}
              disabled={isSubmitting}
              onChange={(e) => setMvp(e.target.value)}
              placeholder="e.g. DynamicCydric"
              className={`w-full ${INPUT_CLASS}`}
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-medium text-slate-300 mb-1.5">
              Notes for Organizer (Optional)
            </span>
            <textarea
              rows="2"
              maxLength={300}
              value={notes}
              disabled={isSubmitting}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Disconnects, remakes, substitutions..."
              className={`w-full resize-none ${INPUT_CLASS}`}
            />
          </label>
        </div>
      </div>

      {/* Section 2: FileUploader */}
      <FileUploader
        files={files}
        onChange={setFiles}
        error={attempted ? errors.files : ''}
        disabled={isSubmitting}
      />

      {/* Primary CTA Bar */}
      <div className="bg-gradient-to-r from-purple-950/50 via-[#111522] to-[#111522] border border-purple-500/40 rounded-xl p-5 space-y-4 shadow-[0_0_30px_rgba(147,51,234,0.15)]">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={confirmed}
            disabled={isSubmitting}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="accent-purple-600 mt-0.5 cursor-pointer"
          />
          <span className="text-xs text-slate-300">
            I confirm that these scores and screenshots are accurate. False reports may be disputed
            by the opposing team or organizer.
          </span>
        </label>

        {attempted && Object.values(errors).some(Boolean) && (
          <ul role="alert" className="text-[11px] text-rose-300 space-y-1">
            {Object.values(errors)
              .filter(Boolean)
              .map((message) => (
                <li key={message}>• {message}</li>
              ))}
          </ul>
        )}
        {submitError && (
          <p role="alert" className="text-xs text-rose-300">
            {submitError}
          </p>
        )}

        <div className="flex items-center gap-3 justify-end">
          <button
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
            className="px-4 py-2.5 bg-[#23293a] hover:bg-[#2d354b] disabled:opacity-50 text-slate-300 text-xs font-medium rounded-lg transition cursor-pointer"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-gradient-to-r from-[#9333ea] via-purple-600 to-indigo-600 hover:from-[#7e22ce] hover:to-indigo-500 disabled:opacity-60 disabled:cursor-wait text-white text-sm font-bold tracking-wide rounded-lg border border-purple-400/40 shadow-[0_0_24px_rgba(147,51,234,0.55)] hover:shadow-[0_0_32px_rgba(147,51,234,0.8)] transition-all cursor-pointer"
          >
            {isSubmitting ? 'Submitting…' : 'Submit Match Result'}
          </button>
        </div>
      </div>
    </form>
  );
}