import React from 'react';

export default function UpcomingMatches({ matches }) {
  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-white">Upcoming Matches</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Scheduled scrims and tournament fixtures
          </p>
        </div>
        <span className="px-2.5 py-1 text-xs font-medium rounded bg-purple-500/15 text-purple-300 border border-purple-500/25">
          {matches.length} Scheduled
        </span>
      </div>

      <div className="space-y-3">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-[#1a2033] border border-white/5 hover:border-purple-500/40 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition"
          >
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#111522] text-slate-200 border border-white/10">
                  {match.game}
                </span>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-emerald-500/15 text-emerald-400">
                  {match.type}
                </span>
                <span className="text-xs text-slate-400">· {match.schedule}</span>
              </div>

              <p className="text-base font-bold text-white">
                {match.teamA}{' '}
                <span className="text-purple-400 font-semibold mx-1.5">VS</span>{' '}
                {match.teamB}
              </p>

              <p className="text-xs text-slate-400">
                Mode: {match.mode} · Region: {match.region}
              </p>
            </div>

            <button
              type="button"
              className="px-3.5 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white font-medium text-xs rounded-md transition cursor-pointer shrink-0"
            >
              Match Lobby
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}