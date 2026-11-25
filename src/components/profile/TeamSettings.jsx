import React, { useState } from 'react';

export default function TeamSettings({ team, onUpdateTeam }) {
  const [activeModal, setActiveModal] = useState(null); // 'edit' | 'invite' | 'leave' | 'disband'
  const [teamName, setTeamName] = useState(team.name);
  const [teamTag, setTeamTag] = useState(team.tag);
  const [game, setGame] = useState(team.game);
  const [region, setRegion] = useState(team.region);
  const [openForScrims, setOpenForScrims] = useState(team.openForScrims);
  const [copiedInvite, setCopiedInvite] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    onUpdateTeam({
      name: teamName.trim() || team.name,
      tag: teamTag.trim().toUpperCase() || team.tag,
      game,
      region,
      openForScrims,
    });
    setActiveModal(null);
  };

  const handleCopyInvite = () => {
    navigator.clipboard?.writeText(`https://matchsync.gg/join/${team.inviteCode}`);
    setCopiedInvite(true);
    setTimeout(() => setCopiedInvite(false), 2000);
  };

  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-lg font-bold text-white">Team Settings</h2>
          <span
            className={`px-2 py-0.5 text-[11px] font-medium rounded ${
              team.openForScrims
                ? 'bg-emerald-500/15 text-emerald-400'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {team.openForScrims ? 'Open for Scrims' : 'Closed'}
          </span>
        </div>
        <p className="text-xs text-slate-400 mb-5">
          Manage roster invites, team metadata, and membership
        </p>

        {/* Settings Action List */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={() => setActiveModal('invite')}
            className="w-full flex items-start gap-3 p-3.5 rounded-lg border bg-[#1a2033] border-white/5 hover:border-purple-500/50 text-slate-200 text-left transition cursor-pointer"
          >
            <svg
              className="w-4 h-4 mt-0.5 text-purple-400 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold leading-tight">Invite Players</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Share invite link or campus join code
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveModal('edit')}
            className="w-full flex items-start gap-3 p-3.5 rounded-lg border bg-[#1a2033] border-white/5 hover:border-purple-500/50 text-slate-200 text-left transition cursor-pointer"
          >
            <svg
              className="w-4 h-4 mt-0.5 text-purple-400 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="text-sm font-semibold leading-tight">Modify Team Settings</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Update team name, tag, game &amp; scrim status
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveModal('leave')}
            className="w-full flex items-start gap-3 p-3.5 rounded-lg border bg-rose-500/5 border-rose-500/20 hover:bg-rose-500/10 text-rose-400 text-left transition cursor-pointer"
          >
            <svg
              className="w-4 h-4 mt-0.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold leading-tight">Leave Team</p>
              <p className="text-xs text-slate-400 mt-0.5">Step down from active roster</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveModal('disband')}
            className="w-full flex items-start gap-3 p-3.5 rounded-lg border bg-rose-500/5 border-rose-500/20 hover:bg-rose-500/10 text-rose-400 text-left transition cursor-pointer"
          >
            <svg
              className="w-4 h-4 mt-0.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold leading-tight">Disband Team</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Permanently delete team &amp; match history
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Team Metadata Footer */}
      <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
        <span>
          Tag: <strong className="text-slate-200">[{team.tag}]</strong>
        </span>
        <span>
          Code: <strong className="text-purple-300">{team.inviteCode}</strong>
        </span>
      </div>

      {/* Invite Players Modal */}
      {activeModal === 'invite' && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#111522] border border-white/15 rounded-xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Invite Players to {team.name}</h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Share this invite link or team code with eligible CIT-U teammates to join your roster.
            </p>
            <div className="bg-[#1a2033] border border-white/10 rounded-lg p-3 flex items-center justify-between gap-2">
              <code className="text-xs text-purple-300 truncate">
                https://matchsync.gg/join/{team.inviteCode}
              </code>
              <button
                type="button"
                onClick={handleCopyInvite}
                className="px-3 py-1.5 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded transition cursor-pointer shrink-0"
              >
                {copiedInvite ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modify Team Settings Modal */}
      {activeModal === 'edit' && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveSettings}
            className="bg-[#111522] border border-white/15 rounded-xl max-w-md w-full p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Modify Team Settings</h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-xs text-slate-400 mb-1">Team Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-xs text-slate-400 mb-1">Tag</label>
                <input
                  type="text"
                  maxLength={5}
                  value={teamTag}
                  onChange={(e) => setTeamTag(e.target.value)}
                  className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Primary Game</label>
                <select
                  value={game}
                  onChange={(e) => setGame(e.target.value)}
                  className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="Valorant">Valorant</option>
                  <option value="Mobile Legends">Mobile Legends</option>
                  <option value="League of Legends">League of Legends</option>
                  <option value="Call of Duty Mobile">Call of Duty Mobile</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Server Region</label>
                <input
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={openForScrims}
                onChange={(e) => setOpenForScrims(e.target.checked)}
                className="accent-purple-600"
              />
              List team as Open for Scrims on Dashboard
            </label>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-3.5 py-2 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 text-xs font-medium rounded-md transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
              >
                Save Settings
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Leave / Disband Confirmation Modal */}
      {(activeModal === 'leave' || activeModal === 'disband') && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#111522] border border-rose-500/30 rounded-xl max-w-sm w-full p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">
              {activeModal === 'leave' ? `Leave ${team.name}?` : `Disband ${team.name}?`}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {activeModal === 'leave'
                ? 'You will be removed from the active tournament roster. As Team Captain, transfer leadership before leaving.'
                : 'This action cannot be undone. All roster slots, scrim postings, and match history will be permanently removed.'}
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-3.5 py-2 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 text-xs font-medium rounded-md transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-md transition cursor-pointer"
              >
                {activeModal === 'leave' ? 'Confirm Leave' : 'Confirm Disband'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}