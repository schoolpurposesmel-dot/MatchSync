import React, { useState } from 'react';
import heroBg from '../../assets/hero_bg.jpg';
import QuickNavigation from './QuickNavigation';
import UpcomingMatches from './UpcomingMatches';
import MyScrims from './MyScrims';
import MyTournaments from './MyTournaments';
import NotificationsPanel from './NotificationsPanel';

const INITIAL_MATCHES = [
  {
    id: 1,
    game: 'Valorant',
    type: 'Tournament · Quarterfinals',
    schedule: 'Today, 8:00 PM',
    teamA: 'Team Shadow',
    teamB: 'CIT-U Apex',
    mode: '5v5 Standard',
    region: 'Asia-Pacific',
    lobbyCode: 'MS-VAL-8841',
    isReady: false,
  },
  {
    id: 2,
    game: 'Mobile Legends',
    type: 'Scrim Match',
    schedule: 'Tomorrow, 7:30 PM',
    teamA: 'Team Shadow',
    teamB: 'Team Nexplay',
    mode: '5v5 Draft Pick',
    region: 'Asia-Pacific',
    lobbyCode: 'MS-MLBB-3092',
    isReady: true,
  },
];

const INITIAL_SCRIMS = [
  {
    id: 1,
    opponent: 'Team Shadow (Your Lobby)',
    game: 'Valorant',
    status: 'Open',
    note: 'Looking for a competitive opponent.',
    rank: 'Diamond',
    region: 'Asia-Pacific',
    mode: '5v5',
  },
  {
    id: 2,
    opponent: 'Team Alter Ego',
    game: 'Call of Duty Mobile',
    status: 'Confirmed',
    note: 'Scheduled Best-of-3 practice match.',
    rank: 'Legendary',
    region: 'Asia-Pacific',
    mode: '5v5',
  },
];

const INITIAL_TOURNAMENTS = [
  {
    id: 1,
    title: 'CIT-U Campus Valorant Clash 2026',
    game: 'Valorant',
    stage: 'Quarterfinals',
    format: 'Single Elimination',
    teamsCount: 16,
    seed: 2,
    nextOpponent: '#7 CIT-U Apex',
  },
  {
    id: 2,
    title: 'CCS Inter-Department MLBB Cup',
    game: 'Mobile Legends',
    stage: 'Group Stage',
    format: 'Round Robin',
    teamsCount: 12,
    seed: 4,
    nextOpponent: '#5 Cebu Titans',
  },
];

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    category: 'Scrim Invite',
    time: '12m ago',
    message: 'Team Alter Ego accepted your 5v5 scrim request for tomorrow at 7:30 PM.',
  },
  {
    id: 2,
    category: 'Tournament',
    time: '1h ago',
    message: 'Quarterfinal bracket seeded for CIT-U Campus Valorant Clash 2026.',
  },
  {
    id: 3,
    category: 'Roster',
    time: '3h ago',
    message: 'MaraiahPlays confirmed availability for tonight’s match lobby.',
  },
];

export default function DashboardPage() {
  const [matches, setMatches] = useState(INITIAL_MATCHES);
  const [scrims, setScrims] = useState(INITIAL_SCRIMS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const goToRoute = (hash) => {
    window.location.hash = hash;
  };

  const handleToggleReady = (matchId) => {
    setMatches((prev) =>
      prev.map((m) => (m.id === matchId ? { ...m, isReady: !m.isReady } : m))
    );
  };

  const handleAddScrim = (newScrim) => {
    setScrims((prev) => [newScrim, ...prev]);
    setNotifications((prev) => [
      {
        id: Date.now(),
        category: 'Scrim Invite',
        time: 'Just now',
        message: `Published new ${newScrim.game} scrim lobby (${newScrim.rank}).`,
      },
      ...prev,
    ]);
  };

  const handleRemoveScrim = (scrimId) => {
    setScrims((prev) => prev.filter((s) => s.id !== scrimId));
  };

  const handleDismissNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const scrollToSection = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
              onClick={() => scrollToSection('scrims-section')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Scrims
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('tournaments-section')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Tournaments
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-semibold cursor-pointer"
            >
              Dashboard
            </button>
          </div>

          <button
            type="button"
            onClick={() => goToRoute('login')}
            className="px-3.5 py-1.5 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
          >
            Team Shadow
          </button>
        </div>
      </nav>

      {/* Hero Banner using existing hero_bg.jpg + Team Stat Strip */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#0b0e17]">
        <img
          src={heroBg}
          alt=""
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07090f] via-purple-950/50 to-[#07090f]/90" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-2">
              CIT-U Esports Division · Active Roster
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">
              Team Dashboard
            </h1>
            <p className="text-sm text-slate-300/80 mt-1 max-w-xl">
              Track your upcoming matches, active scrims, tournament brackets, and team updates.
            </p>
          </div>

          {/* Quick Team Stats to fill right-side header space */}
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="bg-[#111522]/90 border border-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-lg font-bold text-white">14–6</p>
              <p className="text-[11px] text-slate-400">Scrim W/L</p>
            </div>
            <div className="bg-[#111522]/90 border border-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-lg font-bold text-emerald-400">70%</p>
              <p className="text-[11px] text-slate-400">Win Rate</p>
            </div>
            <div className="bg-[#111522]/90 border border-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-lg font-bold text-purple-400">#2</p>
              <p className="text-[11px] text-slate-400">Campus Seed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <QuickNavigation onNavigate={goToRoute} onScrollTo={scrollToSection} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Columns */}
          <div className="lg:col-span-2 space-y-6">
            <UpcomingMatches matches={matches} onToggleReady={handleToggleReady} />
            <MyScrims
              scrims={scrims}
              onAddScrim={handleAddScrim}
              onRemoveScrim={handleRemoveScrim}
            />
            <MyTournaments tournaments={INITIAL_TOURNAMENTS} />
          </div>

          {/* Right 1 Column: Team Overview + Notifications */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#111522] border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-base font-bold text-white">Team Shadow</h2>
                  <p className="text-xs text-slate-400">Valorant · Asia-Pacific</p>
                </div>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-emerald-500/15 text-emerald-400">
                  5/6 Ready
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Team Captain</span>
                  <span className="text-slate-200 font-medium">DynamicCydric</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Average Rank</span>
                  <span className="text-purple-300 font-medium">Diamond III</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Next Check-In</span>
                  <span className="text-slate-200 font-medium">Today, 7:45 PM</span>
                </div>
              </div>
            </div>

            <NotificationsPanel
              notifications={notifications}
              onDismiss={handleDismissNotification}
              onClearAll={handleClearNotifications}
            />
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