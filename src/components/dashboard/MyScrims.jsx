import React from 'react';

export default function MyScrims({ scrims }) {
  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-white">My Scrims</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Active scrim postings and accepted challenges
          </p>
        </div>
        <button
          type="button"
          className="px-3 py-1.5 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 font-medium text-xs rounded-md transition cursor-pointer"
        >
          + Post Scrim
        </button>
      </div>

      <div className="space-y-3">
        {scrims.map((scrim) => (
          <div
            key={scrim.id}
            className="bg-[#1a2033] border border-white/5 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-base font-bold text-white">{scrim.opponent}</h3>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#111522] text-slate-300 border border-white/10">
                  {scrim.game}
                </span>
                <span
                  className={`px-2 py-0.5 text-[11px] font-medium rounded ${
                    scrim.status === 'Open'
                      ? 'bg-emerald-500/15 text-emerald-400'
                      : 'bg-purple-500/20 text-purple-300'
                  }`}
                >
                  {scrim.status}
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-1">{scrim.note}</p>
              <p className="text-xs text-slate-400 mt-1">
                Rank: <span className="text-slate-300">{scrim.rank}</span> · Region:{' '}
                <span className="text-slate-300">{scrim.region}</span> · Mode:{' '}
                <span className="text-slate-300">{scrim.mode}</span>
              </p>
            </div>

            <button
              type="button"
              className="px-3.5 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white font-medium text-xs rounded-md transition cursor-pointer shrink-0"
            >
              View Scrim
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}