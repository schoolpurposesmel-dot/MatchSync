import React from 'react';

export default function MyTournaments({ tournaments }) {
  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-white">My Tournaments</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Enrolled brackets and tournament standings
          </p>
        </div>
        <button
          type="button"
          className="text-xs font-medium text-purple-400 hover:text-purple-300 transition cursor-pointer"
        >
          Browse All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {tournaments.map((tourney) => (
          <div
            key={tourney.id}
            className="bg-[#1a2033] border border-white/5 hover:border-purple-500/40 rounded-lg p-4 flex flex-col justify-between gap-4 transition"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#111522] text-slate-200 border border-white/10">
                  {tourney.game}
                </span>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-emerald-500/15 text-emerald-400">
                  {tourney.stage}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white mt-2.5">{tourney.title}</h3>
              <p className="text-xs text-slate-400 mt-1">
                {tourney.format} · {tourney.teamsCount} Teams
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-xs text-slate-400">Seed #{tourney.seed}</span>
              <button
                type="button"
                className="px-3 py-1.5 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 font-medium text-xs rounded transition cursor-pointer"
              >
                View Bracket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}