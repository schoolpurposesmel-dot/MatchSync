import React from 'react';
import FormatSelector from './FormatSelector';
import DatePicker from './DatePicker';

const GAMES = ['Valorant', 'Mobile Legends', 'League of Legends', 'Call of Duty Mobile'];
const RANK_CAPS = ['Open to All Ranks', 'Platinum & Below', 'Diamond & Below', 'Ascendant / Mythic+'];

export default function TournamentForm({ formData, onChangeField, onSubmit, onReset }) {
  const toggleSetting = (key) => {
    onChangeField('settings', {
      ...formData.settings,
      [key]: !formData.settings[key],
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Section 1: Basic Tournament Information */}
      <div className="bg-[#111522] border border-white/10 rounded-xl p-6 space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white">Tournament Details</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Define tournament title, game title, eligibility rank, and prize pool
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Tournament Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => onChangeField('title', e.target.value)}
              placeholder="e.g. CIT-U CCS Inter-Department Valorant Cup 2026"
              className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Game Title *
            </label>
            <select
              value={formData.game}
              onChange={(e) => onChangeField('game', e.target.value)}
              className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            >
              {GAMES.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Rank Eligibility
            </label>
            <select
              value={formData.rankEligibility}
              onChange={(e) => onChangeField('rankEligibility', e.target.value)}
              className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            >
              {RANK_CAPS.map((rc) => (
                <option key={rc} value={rc}>
                  {rc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Server Region
            </label>
            <input
              type="text"
              value={formData.region}
              onChange={(e) => onChangeField('region', e.target.value)}
              className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Prize Pool / Reward
            </label>
            <input
              type="text"
              value={formData.prizePool}
              onChange={(e) => onChangeField('prizePool', e.target.value)}
              placeholder="e.g. ₱5,000 + Campus Trophy"
              className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Rules &amp; Tournament Overview
          </label>
          <textarea
            rows="3"
            value={formData.description}
            onChange={(e) => onChangeField('description', e.target.value)}
            placeholder="Specify map veto rules, lobby host responsibilities, and punctuality guidelines..."
            className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 resize-none"
          />
        </div>
      </div>

      {/* Section 2: FormatSelector */}
      <FormatSelector
        format={formData.format}
        onSelectFormat={(val) => onChangeField('format', val)}
        maxTeams={formData.maxTeams}
        onSelectMaxTeams={(val) => onChangeField('maxTeams', val)}
        seriesFormat={formData.seriesFormat}
        onSelectSeriesFormat={(val) => onChangeField('seriesFormat', val)}
      />

      {/* Section 3: DatePicker */}
      <DatePicker
        schedule={formData.schedule}
        onChangeSchedule={(val) => onChangeField('schedule', val)}
      />

      {/* Section 4: Tournament Configuration Settings */}
      <div className="bg-[#111522] border border-white/10 rounded-xl p-6 space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white">Tournament Settings</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Configure bracket automation, roster rules, and match verification
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              key: 'autoSeedBracket',
              title: 'Automated Bracket Seeding',
              desc: 'Generate Single Elimination or Round Robin matchups automatically once registration closes.',
            },
            {
              key: 'campusVerifiedOnly',
              title: 'Campus Student Verification',
              desc: 'Require verified university student rosters before approving team registration.',
            },
            {
              key: 'allowSubstitutes',
              title: 'Allow 6th-Man Substitute',
              desc: 'Permit teams to register 1 reserve player on their active roster.',
            },
            {
              key: 'requireScoreProof',
              title: 'Mandatory Match Screenshot Proof',
              desc: 'Require post-game scoreboard uploads for score verification and dispute resolution.',
            },
          ].map((item) => {
            const enabled = formData.settings[item.key];
            return (
              <div
                key={item.key}
                onClick={() => toggleSetting(item.key)}
                className={`p-3.5 rounded-lg border transition cursor-pointer flex items-start justify-between gap-3 ${
                  enabled
                    ? 'bg-[#1a2033] border-purple-500/40'
                    : 'bg-[#1a2033]/60 border-white/5 hover:border-white/15'
                }`}
              >
                <div>
                  <p className="text-xs font-semibold text-white">{item.title}</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>

                <button
                  type="button"
                  aria-pressed={enabled}
                  className={`w-9 h-5 rounded-full p-0.5 transition shrink-0 mt-0.5 cursor-pointer ${
                    enabled ? 'bg-[#9333ea]' : 'bg-slate-700'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                      enabled ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Submit & Reset Bar */}
      <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onReset}
          className="px-4 py-2.5 bg-[#23293a] hover:bg-[#2d354b] text-slate-200 text-xs font-medium rounded-md transition cursor-pointer"
        >
          Reset Form
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer"
        >
          Publish Tournament
        </button>
      </div>
    </form>
  );
}