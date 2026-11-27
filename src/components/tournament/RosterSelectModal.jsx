import React, { useState, useEffect } from 'react';

const TEAM_ROSTER = [
  { id: 1, ign: 'DynamicCydric', position: 'Duelist', rank: 'Ascendant II', role: 'Captain' },
  { id: 2, ign: 'KazeVanguard', position: 'Controller', rank: 'Diamond III', role: 'Member' },
  { id: 3, ign: 'MaraiahPlays', position: 'Initiator', rank: 'Ascendant I', role: 'Member' },
  { id: 4, ign: 'RonnelClutch', position: 'Sentinel', rank: 'Diamond II', role: 'Member' },
  { id: 5, ign: 'ZeroPingPH', position: 'Flex', rank: 'Platinum III', role: 'Member' },
  { id: 6, ign: 'LanceSub', position: 'Substitute', rank: 'Diamond I', role: 'Sub' },
];

export default function RosterSelectModal({
  tournament,
  existingRegistration,
  onClose,
  onConfirmRegistration,
  onCancelRegistration,
}) {
  const [selectedIds, setSelectedIds] = useState([1, 2, 3, 4, 5]);
  const [captainNote, setCaptainNote] = useState('');

  useEffect(() => {
    if (existingRegistration?.selectedIds) {
      setSelectedIds(existingRegistration.selectedIds);
      setCaptainNote(existingRegistration.captainNote || '');
    } else {
      setSelectedIds([1, 2, 3, 4, 5]);
      setCaptainNote('');
    }
  }, [tournament, existingRegistration]);

  if (!tournament) return null;

  const togglePlayer = (playerId) => {
    setSelectedIds((prev) =>
      prev.includes(playerId)
        ? prev.filter((id) => id !== playerId)
        : prev.length < 6
        ? [...prev, playerId]
        : prev
    );
  };

  const isValidLineup = selectedIds.length >= 5 && selectedIds.length <= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidLineup) return;
    const selectedPlayers = TEAM_ROSTER.filter((p) => selectedIds.includes(p.id));
    onConfirmRegistration(tournament.id, selectedPlayers, selectedIds, captainNote);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111522] border border-white/15 rounded-xl max-w-lg w-full p-6 space-y-5 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-semibold text-purple-400">
              {tournament.game} · {tournament.format}
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {existingRegistration ? 'Manage Registered Lineup' : 'Register Team Shadow'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{tournament.title}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Team Summary Strip */}
        <div className="bg-[#1a2033] border border-white/5 rounded-lg p-3 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-400">Team:</span>{' '}
            <strong className="text-white">Team Shadow [SHDW]</strong>
          </div>
          <div>
            <span className="text-slate-400">Lineup:</span>{' '}
            <strong className={isValidLineup ? 'text-emerald-400' : 'text-rose-400'}>
              {selectedIds.length} / 5–6 Players
            </strong>
          </div>
        </div>

        {/* Roster Checklist */}
        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
          {TEAM_ROSTER.map((player) => {
            const checked = selectedIds.includes(player.id);
            return (
              <div
                key={player.id}
                onClick={() => togglePlayer(player.id)}
                className={`p-3 rounded-lg border flex items-center justify-between transition cursor-pointer ${
                  checked
                    ? 'bg-purple-500/15 border-purple-500/50 text-white'
                    : 'bg-[#1a2033] border-white/5 text-slate-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {}}
                    className="accent-purple-600 cursor-pointer"
                  />
                  <div>
                    <p className="text-xs font-bold">{player.ign}</p>
                    <p className="text-[11px] text-slate-400">
                      {player.position} · {player.role}
                    </p>
                  </div>
                </div>

                <span className="px-2 py-0.5 text-[11px] rounded bg-[#111522] text-slate-300 border border-white/10">
                  {player.rank}
                </span>
              </div>
            );
          })}
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">
            Captain Contact / Discord Tag (Optional)
          </label>
          <input
            type="text"
            value={captainNote}
            onChange={(e) => setCaptainNote(e.target.value)}
            placeholder="e.g. Discord: DynamicCydric#0001"
            className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10">
          {existingRegistration ? (
            <button
              type="button"
              onClick={() => onCancelRegistration(tournament.id)}
              className="px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-medium rounded-md transition cursor-pointer"
            >
              Withdraw Team
            </button>
          ) : (
            <span className="text-[11px] text-slate-500">Min 5 players required</span>
          )}

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 text-xs font-medium rounded-md transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValidLineup}
              className="px-4 py-2 bg-gradient-to-r from-[#9333ea] to-indigo-600 hover:from-[#7e22ce] hover:to-indigo-500 disabled:opacity-50 text-white text-xs font-semibold rounded-md shadow-[0_0_16px_rgba(147,51,234,0.45)] transition cursor-pointer"
            >
              {existingRegistration ? 'Update Roster' : 'Confirm Registration'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}