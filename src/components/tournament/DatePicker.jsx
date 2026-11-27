import React from 'react';

const CHECKIN_WINDOWS = ['15 mins before', '30 mins before', '45 mins before', '1 hour before'];

export default function DatePicker({ schedule, onChangeSchedule }) {
  const updateField = (field, value) => {
    onChangeSchedule({ ...schedule, [field]: value });
  };

  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-white">Date &amp; Match Schedule</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Set registration cutoff, tournament kickoff date, and check-in window
          </p>
        </div>
        <span className="px-2.5 py-1 text-[11px] font-medium rounded bg-purple-500/15 text-purple-300 border border-purple-500/25">
          {schedule.timezone}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Registration Deadline *
          </label>
          <input
            type="date"
            required
            value={schedule.registrationDeadline}
            onChange={(e) => updateField('registrationDeadline', e.target.value)}
            className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 [color-scheme:dark]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Tournament Start Date *
          </label>
          <input
            type="date"
            required
            value={schedule.startDate}
            onChange={(e) => updateField('startDate', e.target.value)}
            className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 [color-scheme:dark]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Kickoff Time *
          </label>
          <input
            type="time"
            required
            value={schedule.startTime}
            onChange={(e) => updateField('startTime', e.target.value)}
            className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 [color-scheme:dark]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Lobby Check-In Window
          </label>
          <select
            value={schedule.checkInWindow}
            onChange={(e) => updateField('checkInWindow', e.target.value)}
            className="w-full bg-[#1a2033] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
          >
            {CHECKIN_WINDOWS.map((win) => (
              <option key={win} value={win}>
                {win}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}