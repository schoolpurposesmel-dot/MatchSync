import React, { useState } from 'react';

export default function MyTournaments({ tournaments }) {
  const [selectedTourney, setSelectedTourney] = useState(null);
  const [filterGame, setFilterGame] = useState('All');

  const visibleTournaments =
    filterGame === 'All'
      ? tournaments
      : tournaments.filter((t) => t.game === filterGame);

  return (
    <div id="tournaments-section" className="bg-[#111522] border border-white/10 rounded-xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <div>
          <h2 className="text-lg font-bold text-white">My Tournaments</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Enrolled brackets and tournament standings
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {['All', 'Valorant', 'Mobile Legends'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilterGame(tab)}
              className={`px-2.5 py-1 text-xs font-medium rounded transition cursor-pointer ${
                filterGame === tab
                  ? 'bg-[#9333ea] text-white'
                  : 'bg-[#1a2033] text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {visibleTournaments.map((tourney) => (
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
                onClick={() => setSelectedTourney(tourney)}
                className="px-3 py-1.5 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 font-medium text-xs rounded transition cursor-pointer"
              >
                View Bracket
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bracket Preview Modal */}
      {selectedTourney && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#111522] border border-white/15 rounded-xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-purple-400">
                  {selectedTourney.game} · {selectedTourney.format}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedTourney.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTourney(null)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="bg-[#1a2033] border border-white/5 rounded-lg p-4 space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Current Stage:</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-medium">
                  {selectedTourney.stage}
                </span>
              </div>
              <div className="border-t border-white/5 pt-3">
                <p className="text-slate-400 mb-2">Current Matchup:</p>
                <div className="bg-[#111522] rounded p-3 flex items-center justify-between font-semibold text-white">
                  <span>#{selectedTourney.seed} Team Shadow</span>
                  <span className="text-purple-400">VS</span>
                  <span>{selectedTourney.nextOpponent}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedTourney(null)}
                className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
              >
                Close Bracket
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}