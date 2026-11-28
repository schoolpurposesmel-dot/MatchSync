
import React from 'react';

export default function ReferenceLookup({
  query,
  onQueryChange,
  onLookup,
  error,
  match,
  openMatches,
  disabled,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLookup(query);
  };

  const details = match
    ? [
        ['Event', match.event],
        ['Schedule', match.schedule],
        ['Series', `Best of ${match.bestOf}`],
        ['Server / Mode', `${match.region} · ${match.mode}`],
      ]
    : [];

  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6 space-y-4">
      <div>
        <h2 className="text-lg font-bold text-white">Reference Lookup</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Enter the match lobby code to load match details before reporting the score
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="match-reference" className="block text-xs font-medium text-slate-300 mb-1.5">
          Match Reference Code *
        </label>
        <div className="flex gap-2">
          <input
            id="match-reference"
            type="text"
            value={query}
            disabled={disabled}
            onChange={(e) => onQueryChange(e.target.value.toUpperCase())}
            placeholder="e.g. MS-VAL-8841"
            autoComplete="off"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'match-reference-error' : undefined}
            className={`flex-1 min-w-0 bg-[#1a2033] border rounded-md px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 ${
              error ? 'border-rose-500/60' : 'border-white/10'
            }`}
          />
          <button
            type="submit"
            disabled={disabled}
            className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-md transition cursor-pointer shrink-0"
          >
            Find Match
          </button>
        </div>
        {error && (
          <p id="match-reference-error" role="alert" className="text-[11px] text-rose-300 mt-1.5">
            {error}
          </p>
        )}
      </form>

      {openMatches.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-slate-500">Awaiting your report:</span>
          {openMatches.map((m) => (
            <button
              key={m.reference}
              type="button"
              disabled={disabled}
              onClick={() => onLookup(m.reference)}
              title={`${m.teamA} vs ${m.teamB}`}
              className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                match?.reference === m.reference
                  ? 'bg-[#9333ea] text-white'
                  : 'bg-[#1a2033] text-slate-400 hover:text-white'
              }`}
            >
              {m.reference}
            </button>
          ))}
        </div>
      )}

      {match && (
        <div className="bg-[#1a2033] border border-purple-500/30 rounded-lg p-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#111522] text-slate-200 border border-white/10">
              {match.game}
            </span>
            <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-emerald-500/15 text-emerald-400">
              {match.type}
            </span>
            <span className="text-xs font-mono text-purple-300">{match.reference}</span>
          </div>

          <p className="text-base font-bold text-white">
            {match.teamA} <span className="text-purple-400 font-semibold mx-1.5">VS</span>{' '}
            {match.teamB}
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs border-t border-white/5 pt-3">
            {details.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-3">
                <dt className="text-slate-400 shrink-0">{label}</dt>
                <dd className="text-slate-200 font-medium text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}