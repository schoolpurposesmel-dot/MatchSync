import React, { useState } from 'react';

export default function MyScrims({ scrims, onAddScrim, onRemoveScrim }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedScrim, setSelectedScrim] = useState(null);
  const [game, setGame] = useState('Valorant');
  const [rank, setRank] = useState('Diamond');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddScrim({
      id: Date.now(),
      opponent: 'Team Shadow (Your Lobby)',
      game,
      status: 'Open',
      note: note.trim() || 'Looking for a competitive campus opponent.',
      rank,
      region: 'Asia-Pacific',
      mode: '5v5',
    });
    setNote('');
    setShowForm(false);
  };

  return (
    <div id="scrims-section" className="bg-[#111522] border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-white">My Scrims</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Active scrim postings and accepted challenges
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowForm((prev) => !prev)}
          className="px-3 py-1.5 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 font-medium text-xs rounded-md transition cursor-pointer"
        >
          {showForm ? 'Cancel' : '+ Post Scrim'}
        </button>
      </div>

      {/* Interactive Post Scrim Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-4 bg-[#1a2033] border border-purple-500/30 rounded-lg p-4 space-y-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Game</label>
              <select
                value={game}
                onChange={(e) => setGame(e.target.value)}
                className="w-full bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
              >
                <option value="Valorant">Valorant</option>
                <option value="Mobile Legends">Mobile Legends</option>
                <option value="League of Legends">League of Legends</option>
                <option value="Call of Duty Mobile">Call of Duty Mobile</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Target Rank</label>
              <input
                type="text"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                placeholder="e.g. Diamond / Mythic"
                className="w-full bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Scrim Note</label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Looking for a Best-of-3 practice match..."
              className="w-full bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
            >
              Publish Scrim Lobby
            </button>
          </div>
        </form>
      )}

      {/* Scrim List */}
      <div className="space-y-3">
        {scrims.length === 0 ? (
          <p className="text-xs text-slate-400 py-4 text-center">
            No active scrims posted. Click &ldquo;+ Post Scrim&rdquo; to create one.
          </p>
        ) : (
          scrims.map((scrim) => (
            <div
              key={scrim.id}
              className="bg-[#1a2033] border border-white/5 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
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

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedScrim(scrim)}
                  className="px-3.5 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white font-medium text-xs rounded-md transition cursor-pointer"
                >
                  View Scrim
                </button>
                <button
                  type="button"
                  onClick={() => onRemoveScrim(scrim.id)}
                  className="px-2.5 py-2 bg-[#23293a] hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 text-xs rounded-md transition cursor-pointer"
                  title="Remove Scrim"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Scrim Details Modal */}
      {selectedScrim && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#111522] border border-white/15 rounded-xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-emerald-400">
                  {selectedScrim.game} · {selectedScrim.status}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedScrim.opponent}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScrim(null)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{selectedScrim.note}</p>

            <div className="bg-[#1a2033] border border-white/5 rounded-lg p-3.5 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Rank Requirement:</span>
                <span className="text-white font-medium">{selectedScrim.rank}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Region &amp; Mode:</span>
                <span className="text-white font-medium">
                  {selectedScrim.region} ({selectedScrim.mode})
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedScrim(null)}
                className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}