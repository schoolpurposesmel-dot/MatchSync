import React, { useState } from 'react';
import heroBg from '../../assets/hero_bg.jpg';

export default function ProfileInfo({ user, team, onUpdateProfile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [rank, setRank] = useState(team.rank);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(team.inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile({
      username: username.trim() || user.username,
      bio: bio.trim() || user.bio,
      rank: rank.trim() || team.rank,
    });
    setIsEditing(false);
  };

  return (
    <div className="relative overflow-hidden bg-[#111522] border border-white/10 rounded-xl p-6 md:p-7">
      {/* Background artwork & purple ambient gradient matching HomePage/Dashboard */}
      <img
        src={heroBg}
        alt=""
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07090f]/95 via-purple-950/40 to-[#111522]/90" />

      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Avatar */}
          <div className="relative shrink-0">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-20 h-20 rounded-full object-cover border-2 border-purple-500 bg-[#0b0e17]"
            />
            <span
              className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#111522] rounded-full"
              title="Online"
            />
          </div>

          {/* User & Team Identity */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {user.username}
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {user.role}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded bg-emerald-500/15 text-emerald-400">
                Verified Student
              </span>
            </div>

            <p className="text-sm text-slate-300 mt-1">
              {user.fullName} ·{' '}
              <span className="text-purple-300 font-semibold">
                {team.name} [{team.tag}]
              </span>
            </p>

            <p className="text-xs text-slate-400 mt-1 max-w-xl">{user.bio}</p>

            {/* Game, Rank & Team Details */}
            <div className="flex flex-wrap items-center gap-2 mt-3.5">
              <span className="px-2.5 py-1 rounded bg-[#1a2033] text-xs font-medium text-slate-200 border border-white/10">
                Game: <strong className="text-white">{team.game}</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-500/15 text-xs font-medium text-purple-300 border border-purple-500/25">
                Rank: <strong>{team.rank}</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1a2033] text-xs text-slate-300 border border-white/10">
                {team.campus} · {team.region}
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1a2033] text-xs text-slate-300 border border-white/10">
                Record: <strong className="text-emerald-400">{team.record}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold text-xs rounded-md transition cursor-pointer"
          >
            Edit Profile
          </button>
          <button
            type="button"
            onClick={handleCopyCode}
            className="px-4 py-2 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 font-medium text-xs rounded-md transition cursor-pointer"
          >
            {copied ? '✓ Copied Invite Code' : `Code: ${team.inviteCode}`}
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <form
            onSubmit={handleSave}
            className="bg-[#111522] border border-white/15 rounded-xl max-w-md w-full p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Edit Player &amp; Rank Info</h3>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">In-Game Name (IGN)</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Competitive Rank</label>
                <input
                  type="text"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Player Bio / Role Note</label>
                <input
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-3.5 py-2 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 text-xs font-medium rounded-md transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}