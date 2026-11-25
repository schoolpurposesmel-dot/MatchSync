import React, { useState } from 'react';

export default function RosterManager({ roster, onAddMember, onRemoveMember, onToggleRole }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [ign, setIgn] = useState('');
  const [gameId, setGameId] = useState('');
  const [rank, setRank] = useState('Diamond II');
  const [position, setPosition] = useState('Duelist');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ign.trim()) return;

    onAddMember({
      id: Date.now(),
      ign: ign.trim(),
      gameId: gameId.trim() || '#0001',
      rank,
      position,
      role: 'Member',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(ign.trim())}`,
    });

    setIgn('');
    setGameId('');
    setShowAddForm(false);
  };

  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <div>
          <h2 className="text-lg font-bold text-white">Team Roster</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Active competitive lineup ({roster.length}/6 registered players)
          </p>
        </div>

        <button
          type="button"
          disabled={roster.length >= 6 && !showAddForm}
          onClick={() => setShowAddForm((prev) => !prev)}
          className="px-3.5 py-2 bg-[#9333ea] hover:bg-[#7e22ce] disabled:opacity-50 text-white font-medium text-xs rounded-md transition cursor-pointer"
        >
          {showAddForm ? 'Cancel' : '+ Add Member'}
        </button>
      </div>

      {/* Add Member Inline Form */}
      {showAddForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-5 bg-[#1a2033] border border-purple-500/30 rounded-lg p-4 space-y-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Player IGN *</label>
              <input
                type="text"
                required
                value={ign}
                onChange={(e) => setIgn(e.target.value)}
                placeholder="e.g. LanceClutch"
                className="w-full bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Riot / Game ID</label>
              <input
                type="text"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                placeholder="e.g. #4821"
                className="w-full bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Rank</label>
              <input
                type="text"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="w-full bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">In-Game Position</label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
              >
                <option value="Duelist">Duelist</option>
                <option value="Controller">Controller</option>
                <option value="Initiator">Initiator</option>
                <option value="Sentinel">Sentinel</option>
                <option value="Flex / Sub">Flex / Sub</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
            >
              Add to Roster
            </button>
          </div>
        </form>
      )}

      {/* Column Headers */}
      <div className="grid grid-cols-12 text-xs font-medium text-slate-400 pb-3 border-b border-white/10 px-2">
        <div className="col-span-5">Player &amp; Position</div>
        <div className="col-span-3">Rank</div>
        <div className="col-span-4 text-right">Role &amp; Actions</div>
      </div>

      {/* Member Rows */}
      <div className="divide-y divide-white/5">
        {roster.map((member) => (
          <div
            key={member.id}
            className="grid grid-cols-12 items-center py-3.5 px-2 hover:bg-white/[0.03] rounded-lg transition gap-2"
          >
            {/* Avatar + IGN + Position */}
            <div className="col-span-5 flex items-center gap-3 min-w-0">
              <img
                src={member.avatar}
                alt={member.ign}
                className="w-9 h-9 rounded-full object-cover border border-white/15 bg-[#0b0e17] shrink-0"
              />
              <div className="truncate">
                <p className="text-sm font-semibold text-white truncate">{member.ign}</p>
                <p className="text-xs text-slate-400 truncate">
                  {member.gameId} · {member.position}
                </p>
              </div>
            </div>

            {/* Rank */}
            <div className="col-span-3">
              <span className="inline-block text-xs font-medium text-slate-200 bg-[#1a2033] px-2.5 py-1 rounded border border-white/5">
                {member.rank}
              </span>
            </div>

            {/* Role Toggle & Remove */}
            <div className="col-span-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => onToggleRole(member.id)}
                title="Click to toggle Captain / Member"
                className={`px-2.5 py-1 text-xs font-medium rounded transition cursor-pointer ${
                  member.role === 'Captain'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'bg-[#1a2033] text-slate-300 border border-white/10 hover:border-purple-500/40'
                }`}
              >
                {member.role}
              </button>

              {member.role !== 'Captain' && (
                <button
                  type="button"
                  onClick={() => onRemoveMember(member.id)}
                  title={`Remove ${member.ign}`}
                  className="px-2 py-1 bg-[#23293a] hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 text-xs rounded transition cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}