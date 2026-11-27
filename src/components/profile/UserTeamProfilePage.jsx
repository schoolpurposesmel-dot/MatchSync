import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import RosterManager from './RosterManager';
import TeamSettings from './TeamSettings';

const INITIAL_USER = {
  username: 'DynamicCydric',
  fullName: 'James Sedric Mula',
  role: 'Team Captain',
  bio: 'IGL & Primary Duelist for Team Shadow · CIT-U Information Technology',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cydric',
};

const INITIAL_TEAM = {
  name: 'Team Shadow',
  tag: 'SHDW',
  game: 'Valorant',
  rank: 'Diamond III',
  region: 'Asia-Pacific',
  campus: 'CIT-U Cebu',
  record: '14W - 6L',
  inviteCode: 'MS-SHDW-2026',
  openForScrims: true,
};

const INITIAL_ROSTER = [
  {
    id: 1,
    ign: 'DynamicCydric',
    gameId: '#7420',
    rank: 'Ascendant II',
    position: 'Duelist',
    role: 'Captain',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cydric',
  },
  {
    id: 2,
    ign: 'KazeVanguard',
    gameId: '#1104',
    rank: 'Diamond III',
    position: 'Controller',
    role: 'Member',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kaze',
  },
  {
    id: 3,
    ign: 'MaraiahPlays',
    gameId: '#8821',
    rank: 'Ascendant I',
    position: 'Initiator',
    role: 'Member',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maraiah',
  },
  {
    id: 4,
    ign: 'RonnelClutch',
    gameId: '#3092',
    rank: 'Diamond II',
    position: 'Sentinel',
    role: 'Member',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ronnel',
  },
  {
    id: 5,
    ign: 'ZeroPingPH',
    gameId: '#5519',
    rank: 'Platinum III',
    position: 'Flex / Sub',
    role: 'Member',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZeroPing',
  },
];

export default function UserTeamProfilePage() {
  const [user, setUser] = useState(INITIAL_USER);
  const [team, setTeam] = useState(INITIAL_TEAM);
  const [roster, setRoster] = useState(INITIAL_ROSTER);

  const goToRoute = (hash) => {
    window.location.hash = hash;
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = 'dashboard';
    }
  };

  const handleUpdateProfile = ({ username, bio, rank }) => {
    setUser((prev) => ({ ...prev, username, bio }));
    setTeam((prev) => ({ ...prev, rank }));
    setRoster((prev) =>
      prev.map((member) => (member.id === 1 ? { ...member, ign: username } : member))
    );
  };

  const handleUpdateTeam = (updatedFields) => {
    setTeam((prev) => ({ ...prev, ...updatedFields }));
  };

  const handleAddMember = (newMember) => {
    if (roster.length >= 6) return;
    setRoster((prev) => [...prev, newMember]);
  };

  const handleRemoveMember = (memberId) => {
    setRoster((prev) => prev.filter((m) => m.id !== memberId));
  };

  const handleToggleRole = (memberId) => {
    setRoster((prev) =>
      prev.map((m) =>
        m.id === memberId
          ? { ...m, role: m.role === 'Captain' ? 'Member' : 'Captain' }
          : m
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#07090f] text-slate-100 flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-white/10 bg-[#07090f]/95 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goToRoute('home')}
            className="text-sm font-extrabold tracking-wider text-white uppercase cursor-pointer"
          >
            MATCHSYNC
          </button>

          <div className="flex items-center gap-6 text-xs font-medium">
            <button
              type="button"
              onClick={() => goToRoute('home')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => goToRoute('dashboard')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Dashboard
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-semibold cursor-pointer"
            >
              Profile &amp; Team
            </button>
          </div>

          <button
            type="button"
            onClick={() => goToRoute('dashboard')}
            className="px-3.5 py-1.5 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
          >
            Back to Dashboard
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div>
          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111522]/90 hover:bg-[#1a2033] text-slate-300 hover:text-white text-xs font-medium rounded-lg border border-white/10 hover:border-purple-500/40 transition cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 text-purple-400 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
        </div>

        <ProfileInfo user={user} team={team} onUpdateProfile={handleUpdateProfile} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RosterManager
              roster={roster}
              onAddMember={handleAddMember}
              onRemoveMember={handleRemoveMember}
              onToggleRole={handleToggleRole}
            />
          </div>

          <div className="lg:col-span-1">
            <TeamSettings team={team} onUpdateTeam={handleUpdateTeam} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#07090f] py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span className="font-bold text-slate-300 tracking-wider">MATCHSYNC</span>
          <span>Campus Esports Scrim &amp; Tournament Platform</span>
        </div>
      </footer>
    </div>
  );
}