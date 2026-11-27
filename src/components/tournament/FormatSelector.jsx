import React from 'react';

const FORMAT_OPTIONS = [
  {
    id: 'Single Elimination',
    title: 'Single Elimination',
    badge: 'Knockout Bracket',
    description:
      'Instant-elimination bracket where winners advance each round until a champion is crowned. Best for fast campus weekend cups.',
  },
  {
    id: 'Round Robin',
    title: 'Round Robin',
    badge: 'Group Standings',
    description:
      'Every registered team plays against all other teams in their group, ranked by match wins and point differential.',
  },
];

const TEAM_CAPACITIES = [4, 8, 16, 32];
const SERIES_FORMATS = ['Best of 1 (Bo1)', 'Best of 3 (Bo3)', 'Bo3 · Bo5 Finals'];

export default function FormatSelector({
  format,
  onSelectFormat,
  maxTeams,
  onSelectMaxTeams,
  seriesFormat,
  onSelectSeriesFormat,
}) {
  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6 space-y-5">
      <div>
        <h2 className="text-lg font-bold text-white">Tournament Format</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Choose bracket structure, team capacity, and match series rules
        </p>
      </div>

      {/* Format Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {FORMAT_OPTIONS.map((option) => {
          const isSelected = format === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectFormat(option.id)}
              className={`p-4 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-purple-500/15 border-purple-500 text-white'
                  : 'bg-[#1a2033] border-white/5 hover:border-purple-500/40 text-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold">{option.title}</span>
                  <span
                    className={`px-2 py-0.5 text-[11px] font-medium rounded ${
                      isSelected
                        ? 'bg-[#9333ea] text-white'
                        : 'bg-[#111522] text-slate-400 border border-white/10'
                    }`}
                  >
                    {option.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {option.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span
                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-purple-400' : 'border-slate-500'
                  }`}
                >
                  {isSelected && <span className="w-2 h-2 rounded-full bg-purple-400" />}
                </span>
                <span className={isSelected ? 'text-purple-300' : 'text-slate-400'}>
                  {isSelected ? 'Selected Format' : 'Select Format'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Team Capacity & Series Length */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Maximum Teams
          </label>
          <div className="grid grid-cols-4 gap-2">
            {TEAM_CAPACITIES.map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => onSelectMaxTeams(count)}
                className={`py-2 rounded-md text-xs font-semibold border transition cursor-pointer ${
                  maxTeams === count
                    ? 'bg-[#9333ea] border-purple-400/40 text-white'
                    : 'bg-[#1a2033] border-white/5 text-slate-300 hover:border-purple-500/40'
                }`}
              >
                {count} Teams
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Match Series Format
          </label>
          <select
            value={seriesFormat}
            onChange={(e) => onSelectSeriesFormat(e.target.value)}
            className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
          >
            {SERIES_FORMATS.map((sf) => (
              <option key={sf} value={sf}>
                {sf}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}