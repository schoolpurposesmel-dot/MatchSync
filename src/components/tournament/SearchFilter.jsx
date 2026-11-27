import React from 'react';

const GAME_TABS = [
  'All Games',
  'Valorant',
  'Mobile Legends',
  'League of Legends',
  'Call of Duty Mobile',
];

const FORMATS = ['All Formats', 'Single Elimination', 'Round Robin'];
const STATUSES = ['All Status', 'Open', 'Closing Soon', 'Full', 'Registered'];

export default function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedGame,
  onGameChange,
  selectedFormat,
  onFormatChange,
  selectedStatus,
  onStatusChange,
  onResetFilters,
  resultCount,
}) {
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedGame !== 'All Games' ||
    selectedFormat !== 'All Formats' ||
    selectedStatus !== 'All Status';

  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-5 space-y-4">
      {/* Top Row: Game Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-1.5">
          {GAME_TABS.map((game) => {
            const active = selectedGame === game;
            return (
              <button
                key={game}
                type="button"
                onClick={() => onGameChange(game)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  active
                    ? 'bg-[#9333ea] text-white shadow-[0_0_16px_rgba(147,51,234,0.4)]'
                    : 'bg-[#1a2033] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {game}
              </button>
            );
          })}
        </div>

        <span className="text-xs text-slate-400">
          Showing <strong className="text-white">{resultCount}</strong> tournament(s)
        </span>
      </div>

      {/* Bottom Row: Search Input + Dropdown Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        <div className="sm:col-span-6 relative">
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by tournament title, organizer, or prize..."
            className="w-full bg-[#1a2033] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="sm:col-span-2">
          <select
            value={selectedFormat}
            onChange={(e) => onFormatChange(e.target.value)}
            className="w-full bg-[#1a2033] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
          >
            {FORMATS.map((fmt) => (
              <option key={fmt} value={fmt}>
                {fmt}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full bg-[#1a2033] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
          >
            {STATUSES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2 flex justify-end">
          <button
            type="button"
            disabled={!hasActiveFilters}
            onClick={onResetFilters}
            className="w-full py-2 px-3 bg-[#23293a] hover:bg-[#2d354b] disabled:opacity-40 text-slate-200 text-xs font-medium rounded-lg transition cursor-pointer disabled:cursor-not-allowed"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}