import React, { useState } from 'react';
import heroBg from '../../assets/hero_bg.jpg';
import valorantImg from '../../assets/valorant.jpg';
import SearchFilter from './SearchFilter';
import TournamentTable from './TournamentTable';
import RosterSelectModal from './RosterSelectModal';

const INITIAL_TOURNAMENTS = [
  {
    id: 1,
    title: 'CIT-U Campus Valorant Clash 2026',
    game: 'Valorant',
    organizer: 'CIT-U CCS Esports Council',
    format: 'Single Elimination',
    status: 'Closing Soon',
    startDate: 'Dec 07, 2026 · 6:00 PM',
    registeredTeams: 14,
    maxTeams: 16,
    prizePool: '₱5,000 + Trophy',
  },
  {
    id: 2,
    title: 'CCS Inter-Department MLBB Cup',
    game: 'Mobile Legends',
    organizer: 'CIT-U Student Council',
    format: 'Round Robin',
    status: 'Open',
    startDate: 'Dec 10, 2026 · 7:00 PM',
    registeredTeams: 8,
    maxTeams: 12,
    prizePool: '₱3,500 + Diamonds',
  },
  {
    id: 3,
    title: 'Cebu Collegiate League of Legends Open',
    game: 'League of Legends',
    organizer: 'Cebu Varsity Gaming',
    format: 'Single Elimination',
    status: 'Open',
    startDate: 'Dec 14, 2026 · 2:00 PM',
    registeredTeams: 5,
    maxTeams: 8,
    prizePool: '₱4,000',
  },
  {
    id: 4,
    title: 'Talisay City CODM Weekend Showdown',
    game: 'Call of Duty Mobile',
    organizer: 'South Cebu Esports',
    format: 'Single Elimination',
    status: 'Full',
    startDate: 'Dec 05, 2026 · 8:00 PM',
    registeredTeams: 16,
    maxTeams: 16,
    prizePool: '₱2,500',
  },
];

export default function TournamentListPage() {
  const [tournaments, setTournaments] = useState(INITIAL_TOURNAMENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState('All Games');
  const [selectedFormat, setSelectedFormat] = useState('All Formats');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [activeRegisterTourney, setActiveRegisterTourney] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [registrations, setRegistrations] = useState({
    1: {
      status: 'Confirmed',
      rosterCount: 5,
      selectedIds: [1, 2, 3, 4, 5],
      lineup: ['DynamicCydric', 'KazeVanguard', 'MaraiahPlays', 'RonnelClutch', 'ZeroPingPH'],
      captainNote: 'Discord: DynamicCydric#0001',
    },
  });

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

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGame('All Games');
    setSelectedFormat('All Formats');
    setSelectedStatus('All Status');
  };

  const handleConfirmRegistration = (tourneyId, selectedPlayers, selectedIds, captainNote) => {
    const wasAlreadyRegistered = Boolean(registrations[tourneyId]);
    const targetTourney = tournaments.find((t) => t.id === tourneyId);

    setRegistrations((prev) => ({
      ...prev,
      [tourneyId]: {
        status: 'Confirmed',
        rosterCount: selectedPlayers.length,
        selectedIds,
        lineup: selectedPlayers.map((p) => p.ign),
        captainNote,
      },
    }));

    if (!wasAlreadyRegistered) {
      setTournaments((prev) =>
        prev.map((t) =>
          t.id === tourneyId
            ? {
                ...t,
                registeredTeams: Math.min(t.maxTeams, t.registeredTeams + 1),
                status: t.registeredTeams + 1 >= t.maxTeams ? 'Full' : t.status,
              }
            : t
        )
      );
    }

    setActiveRegisterTourney(null);
    setToastMessage(
      `${wasAlreadyRegistered ? 'Updated lineup' : 'Registered Team Shadow'} for ${
        targetTourney?.title
      } (${selectedPlayers.length} players).`
    );
  };

  const handleCancelRegistration = (tourneyId) => {
    const targetTourney = tournaments.find((t) => t.id === tourneyId);
    setRegistrations((prev) => {
      const updated = { ...prev };
      delete updated[tourneyId];
      return updated;
    });

    setTournaments((prev) =>
      prev.map((t) =>
        t.id === tourneyId
          ? {
              ...t,
              registeredTeams: Math.max(0, t.registeredTeams - 1),
              status: t.status === 'Full' ? 'Open' : t.status,
            }
          : t
      )
    );

    setActiveRegisterTourney(null);
    setToastMessage(`Withdrew Team Shadow from ${targetTourney?.title}.`);
  };

  const filteredTournaments = tournaments.filter((t) => {
    const isRegistered = Boolean(registrations[t.id]);
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.prizePool.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = selectedGame === 'All Games' || t.game === selectedGame;
    const matchesFormat = selectedFormat === 'All Formats' || t.format === selectedFormat;
    const matchesStatus =
      selectedStatus === 'All Status'
        ? true
        : selectedStatus === 'Registered'
        ? isRegistered
        : t.status === selectedStatus;

    return matchesSearch && matchesGame && matchesFormat && matchesStatus;
  });

  const featuredOpenTournament =
    tournaments.find((t) => !registrations[t.id] && t.status !== 'Full') || tournaments[0];

  return (
    <div className="min-h-screen bg-[#07090f] text-slate-100 flex flex-col">
      {/* Top Navbar */}
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
              Tournaments
            </button>
            <button
              type="button"
              onClick={() => goToRoute('profile')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Profile
            </button>
          </div>

          <button
            type="button"
            onClick={() => goToRoute('create-tournament')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#9333ea] to-indigo-600 hover:from-[#7e22ce] hover:to-indigo-500 text-white text-xs font-semibold rounded-md border border-purple-400/30 shadow-[0_0_16px_rgba(147,51,234,0.45)] transition cursor-pointer"
          >
            <span>+</span>
            Create Tournament
          </button>
        </div>
      </nav>

      {/* Hero Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#0b0e17]">
        <img
          src={heroBg}
          alt=""
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07090f] via-purple-950/50 to-[#07090f]/90" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
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

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-2">
                Tournament Hub · Roster Registration
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">
                Tournaments &amp; Registration
              </h1>
              <p className="text-sm text-slate-300/80 mt-1">
                Browse verified campus brackets, lock in your 5–6 player roster, and track registration status.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-[#111522]/90 border border-white/10 rounded-lg px-4 py-2.5 text-center">
                <p className="text-lg font-bold text-emerald-400">
                  {Object.keys(registrations).length}
                </p>
                <p className="text-[11px] text-slate-400">Enrolled</p>
              </div>
              <div className="bg-[#111522]/90 border border-white/10 rounded-lg px-4 py-2.5 text-center">
                <p className="text-lg font-bold text-white">{tournaments.length}</p>
                <p className="text-[11px] text-slate-400">Total Cups</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Status Toast Feedback */}
        {toastMessage && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold text-emerald-300">✓ {toastMessage}</p>
            <button
              type="button"
              onClick={() => setToastMessage(null)}
              className="text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              Dismiss ✕
            </button>
          </div>
        )}

        {/* Featured Spotlight Card (Gives Page 09 a fresh hub feel) */}
        {featuredOpenTournament && (
          <div className="bg-gradient-to-r from-purple-950/40 via-[#111522] to-[#111522] border border-purple-500/30 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <img
                src={valorantImg}
                alt={featuredOpenTournament.game}
                className="w-20 h-20 rounded-xl object-cover border border-purple-500/30 hidden sm:block shrink-0"
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-[#9333ea] text-white">
                    Featured Open Cup
                  </span>
                  <span className="text-xs text-purple-300 font-medium">
                    {featuredOpenTournament.game} · {featuredOpenTournament.format}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white mt-1">
                  {featuredOpenTournament.title}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Starts {featuredOpenTournament.startDate} · Prize:{' '}
                  <span className="text-slate-200 font-medium">
                    {featuredOpenTournament.prizePool}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setActiveRegisterTourney(featuredOpenTournament)}
                className="px-4 py-2.5 bg-gradient-to-r from-[#9333ea] to-indigo-600 hover:from-[#7e22ce] hover:to-indigo-500 text-white text-xs font-bold rounded-lg shadow-[0_0_20px_rgba(147,51,234,0.45)] transition cursor-pointer"
              >
                {registrations[featuredOpenTournament.id]
                  ? 'Manage Roster'
                  : 'Quick Register Team'}
              </button>
            </div>
          </div>
        )}

        {/* SearchFilter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedGame={selectedGame}
          onGameChange={setSelectedGame}
          selectedFormat={selectedFormat}
          onFormatChange={setSelectedFormat}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          onResetFilters={handleResetFilters}
          resultCount={filteredTournaments.length}
        />

        {/* TournamentTable */}
        <TournamentTable
          tournaments={filteredTournaments}
          registrations={registrations}
          onOpenRegister={(tourney) => setActiveRegisterTourney(tourney)}
          onViewBracket={() => goToRoute('bracket')}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* RosterSelectModal */}
      <RosterSelectModal
        tournament={activeRegisterTourney}
        existingRegistration={
          activeRegisterTourney ? registrations[activeRegisterTourney.id] : null
        }
        onClose={() => setActiveRegisterTourney(null)}
        onConfirmRegistration={handleConfirmRegistration}
        onCancelRegistration={handleCancelRegistration}
      />

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