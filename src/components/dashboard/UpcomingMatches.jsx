import React, { useState } from 'react';

export default function UpcomingMatches({ matches, onToggleReady }) {
  const [selectedMatchId, setSelectedMatchId] = useState(null);
  const selectedMatch = matches.find((m) => m.id === selectedMatchId);

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
                {match.isReady && (
                  <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-purple-500/20 text-purple-300">
                    Checked In
                  </span>
                )}
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
              onClick={() => setSelectedMatchId(match.id)}
              className="px-3.5 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white font-medium text-xs rounded-md transition cursor-pointer shrink-0"
            >
              Match Lobby
            </button>
          </div>
        ))}
      </div>

      {/* Interactive Match Lobby Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#111522] border border-white/15 rounded-xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-purple-400">
                  {selectedMatch.game} · {selectedMatch.type}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedMatch.teamA} vs {selectedMatch.teamB}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMatchId(null)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="bg-[#1a2033] border border-white/5 rounded-lg p-4 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Schedule:</span>
                <span className="text-slate-200 font-medium">{selectedMatch.schedule}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Lobby Code:</span>
                <span className="text-purple-300 font-mono font-semibold">
                  {selectedMatch.lobbyCode}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Server / Mode:</span>
                <span className="text-slate-200">
                  {selectedMatch.region} · {selectedMatch.mode}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setSelectedMatchId(null)}
                className="px-3.5 py-2 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 text-xs font-medium rounded-md transition cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.hash = `/submit-score?ref=${selectedMatch.lobbyCode}`;
                }}
                className="px-3.5 py-2 bg-[#23293a] hover:bg-[#2d354b] text-purple-300 text-xs font-medium rounded-md transition cursor-pointer"
              >
                Submit Score
              </button>
              <button
                type="button"
                onClick={() => onToggleReady(selectedMatch.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition cursor-pointer ${
                  selectedMatch.isReady
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-[#9333ea] hover:bg-[#7e22ce] text-white'
                }`}
              >
                {selectedMatch.isReady ? '✓ Team Checked In' : 'Check In Team'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}