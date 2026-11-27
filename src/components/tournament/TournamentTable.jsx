import React from 'react';
import valorantImg from '../../assets/valorant.jpg';
import mlImg from '../../assets/Ml.jpg';
import codImg from '../../assets/COD.jpg';
import lolImg from '../../assets/LOL.jpg';

const GAME_BANNERS = {
  Valorant: valorantImg,
  'Mobile Legends': mlImg,
  'Call of Duty Mobile': codImg,
  'League of Legends': lolImg,
};

export default function TournamentTable({
  tournaments,
  registrations,
  onOpenRegister,
  onViewBracket,
  onResetFilters,
}) {
  if (tournaments.length === 0) {
    return (
      <div className="bg-[#111522] border border-white/10 rounded-xl p-12 text-center space-y-3">
        <p className="text-base font-bold text-white">No tournaments match your current filters</p>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Reset your search keywords or game/status filters to view all active campus tournaments.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="px-4 py-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-lg transition cursor-pointer"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl overflow-hidden">
      {/* Desktop Table Header */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-6 py-3.5 bg-[#0b0e17] border-b border-white/10 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        <div className="col-span-4">Tournament &amp; Game</div>
        <div className="col-span-2">Format &amp; Schedule</div>
        <div className="col-span-2">Team Slots</div>
        <div className="col-span-2">Registration Status</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-white/5">
        {tournaments.map((tourney) => {
          const registration = registrations[tourney.id];
          const isFull = tourney.registeredTeams >= tourney.maxTeams && !registration;
          const fillPercent = Math.min(
            100,
            Math.round((tourney.registeredTeams / tourney.maxTeams) * 100)
          );

          return (
            <div
              key={tourney.id}
              className="p-5 lg:px-6 lg:py-4 hover:bg-white/[0.02] transition grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              {/* Col 1: Artwork + Title + Prize */}
              <div className="lg:col-span-4 flex items-center gap-3.5 min-w-0">
                <img
                  src={GAME_BANNERS[tourney.game] || valorantImg}
                  alt={tourney.game}
                  className="w-16 h-16 rounded-lg object-cover border border-white/10 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-[#1a2033] text-slate-200 border border-white/10">
                      {tourney.game}
                    </span>
                    <span className="text-[11px] text-purple-300 font-medium truncate">
                      {tourney.prizePool}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white truncate mt-1">
                    {tourney.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    Host: {tourney.organizer}
                  </p>
                </div>
              </div>

              {/* Col 2: Format & Start Date */}
              <div className="lg:col-span-2 space-y-1 text-xs">
                <span className="inline-block px-2 py-0.5 text-[11px] font-medium rounded bg-purple-500/15 text-purple-300 border border-purple-500/20">
                  {tourney.format}
                </span>
                <p className="text-slate-300 text-[11px]">{tourney.startDate}</p>
              </div>

              {/* Col 3: Capacity Progress Bar */}
              <div className="lg:col-span-2 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-200 font-semibold">
                    {tourney.registeredTeams}/{tourney.maxTeams}
                  </span>
                  <span className="text-[11px] text-slate-400">{fillPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#1a2033] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      fillPercent >= 100
                        ? 'bg-rose-500'
                        : fillPercent >= 80
                        ? 'bg-amber-400'
                        : 'bg-[#9333ea]'
                    }`}
                    style={{ width: `${fillPercent}%` }}
                  />
                </div>
              </div>

              {/* Col 4: Status Badge */}
              <div className="lg:col-span-2">
                {registration ? (
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      ✓ Team Registered
                    </span>
                    <p className="text-[11px] text-slate-400">
                      {registration.rosterCount} Players Locked
                    </p>
                  </div>
                ) : (
                  <span
                    className={`inline-block px-2.5 py-1 text-[11px] font-semibold rounded-md ${
                      tourney.status === 'Open'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25'
                        : tourney.status === 'Closing Soon'
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/25'
                        : 'bg-rose-500/15 text-rose-300 border border-rose-500/25'
                    }`}
                  >
                    {tourney.status}
                  </span>
                )}
              </div>

              {/* Col 5: Action Buttons */}
              <div className="lg:col-span-2 flex items-center lg:justify-end gap-2">
                <button
                  type="button"
                  onClick={() => onViewBracket(tourney)}
                  className="px-3 py-1.5 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 font-medium text-xs rounded-md transition cursor-pointer"
                >
                  Bracket
                </button>

                {registration ? (
                  <button
                    type="button"
                    onClick={() => onOpenRegister(tourney)}
                    className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs rounded-md transition cursor-pointer"
                  >
                    Roster
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={isFull}
                    onClick={() => onOpenRegister(tourney)}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-[#9333ea] to-indigo-600 hover:from-[#7e22ce] hover:to-indigo-500 disabled:opacity-40 text-white font-semibold text-xs rounded-md shadow-[0_0_14px_rgba(147,51,234,0.4)] transition cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isFull ? 'Full' : 'Register'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}