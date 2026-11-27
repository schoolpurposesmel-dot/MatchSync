import React, { useState } from 'react';
import heroBg from '../../assets/hero_bg.jpg';
import valorantImg from '../../assets/valorant.jpg';
import mlImg from '../../assets/Ml.jpg';
import codImg from '../../assets/COD.jpg';
import lolImg from '../../assets/LOL.jpg';
import TournamentForm from './TournamentForm';

const GAME_BANNERS = {
  Valorant: valorantImg,
  'Mobile Legends': mlImg,
  'Call of Duty Mobile': codImg,
  'League of Legends': lolImg,
};

const DEFAULT_FORM = {
  title: 'CIT-U Campus Valorant Clash 2026',
  game: 'Valorant',
  rankEligibility: 'Open to All Ranks',
  region: 'Asia-Pacific (Manila)',
  prizePool: '₱5,000 + Champion Medal',
  description:
    'Official CIT-U inter-department 5v5 tournament. Teams must check in 30 minutes prior to kickoff. Standard tournament map veto rules apply.',
  format: 'Single Elimination',
  maxTeams: 16,
  seriesFormat: 'Best of 3 (Bo3)',
  schedule: {
    registrationDeadline: '2026-12-05',
    startDate: '2026-12-07',
    startTime: '18:00',
    checkInWindow: '30 mins before',
    timezone: 'Asia/Manila (GMT+8)',
  },
  settings: {
    autoSeedBracket: true,
    campusVerifiedOnly: true,
    allowSubstitutes: true,
    requireScoreProof: true,
  },
};

export default function CreateTournamentPage() {
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [createdTournaments, setCreatedTournaments] = useState([]);
  const [publishedBanner, setPublishedBanner] = useState(null);

  const goToRoute = (hash) => {
    window.location.hash = hash;
  };

  const handleChangeField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFormData(DEFAULT_FORM);
    setPublishedBanner(null);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    const newTournament = {
      id: Date.now(),
      ...formData,
      bracketSeedCount:
        formData.format === 'Single Elimination'
          ? `${Math.log2(formData.maxTeams)} Rounds`
          : `${formData.maxTeams - 1} Group Matches/Team`,
    };
    setCreatedTournaments((prev) => [newTournament, ...prev]);
    setPublishedBanner(newTournament);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-semibold cursor-pointer"
            >
              Create Tournament
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
              onClick={() => goToRoute('profile')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Profile
            </button>
          </div>

          <button
            type="button"
            onClick={() => goToRoute('profile')}
            className="px-3.5 py-1.5 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
          >
            Team Shadow
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-2">
            Organizer Console · Bracket Engine
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">
            Create &amp; Configure Tournament
          </h1>
          <p className="text-sm text-slate-300/80 mt-1 max-w-2xl">
            Set up Single Elimination or Round Robin brackets, configure match schedules, and publish registration lobbies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Confirmation Toast Banner after Publishing */}
        {publishedBanner && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-emerald-300">
                ✓ Tournament Published: {publishedBanner.title}
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                {publishedBanner.game} · {publishedBanner.format} ({publishedBanner.maxTeams} Teams ·{' '}
                {publishedBanner.bracketSeedCount}) starting {publishedBanner.schedule.startDate} at{' '}
                {publishedBanner.schedule.startTime}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPublishedBanner(null)}
              className="text-xs text-slate-400 hover:text-white self-end sm:self-center cursor-pointer"
            >
              Dismiss ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left 2 Columns: TournamentForm */}
          <div className="lg:col-span-2">
            <TournamentForm
              formData={formData}
              onChangeField={handleChangeField}
              onSubmit={handlePublish}
              onReset={handleReset}
            />
          </div>

          {/* Right 1 Column: Live Preview & Published Tournaments */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-22">
            <div className="bg-[#111522] border border-white/10 rounded-xl overflow-hidden">
              <div className="relative h-36">
                <img
                  src={GAME_BANNERS[formData.game] || valorantImg}
                  alt={formData.game}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111522] via-[#111522]/40 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-semibold rounded bg-[#07090f]/85 text-purple-300 border border-purple-500/30">
                  Live Preview
                </span>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#1a2033] text-slate-200 border border-white/10">
                      {formData.game}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-emerald-500/15 text-emerald-400">
                      {formData.format}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-2">
                    {formData.title || 'Untitled Tournament'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {formData.description || 'Tournament description will appear here.'}
                  </p>
                </div>

                <div className="space-y-2 text-xs border-t border-white/10 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Capacity &amp; Series</span>
                    <span className="text-slate-200 font-medium">
                      {formData.maxTeams} Teams · {formData.seriesFormat}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Kickoff Date</span>
                    <span className="text-slate-200 font-medium">
                      {formData.schedule.startDate || 'TBD'} · {formData.schedule.startTime || 'TBD'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Reg. Cutoff</span>
                    <span className="text-slate-200 font-medium">
                      {formData.schedule.registrationDeadline || 'TBD'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Prize Pool</span>
                    <span className="text-purple-300 font-semibold">
                      {formData.prizePool || 'Bragging Rights'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {createdTournaments.length > 0 && (
              <div className="bg-[#111522] border border-white/10 rounded-xl p-5 space-y-3">
                <h3 className="text-sm font-bold text-white">
                  Created This Session ({createdTournaments.length})
                </h3>
                <div className="space-y-2.5">
                  {createdTournaments.map((t) => (
                    <div
                      key={t.id}
                      className="bg-[#1a2033] border border-white/5 rounded-lg p-3 text-xs space-y-1"
                    >
                      <p className="font-bold text-white">{t.title}</p>
                      <p className="text-slate-400">
                        {t.game} · {t.format} · {t.maxTeams} Teams
                      </p>
                      <p className="text-purple-300">
                        Starts {t.schedule.startDate} ({t.schedule.startTime})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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