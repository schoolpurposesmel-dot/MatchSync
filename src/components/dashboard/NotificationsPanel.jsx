import React from 'react';

export default function NotificationsPanel({ notifications }) {
  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-white">Notifications & Updates</h2>
          <p className="text-xs text-slate-400 mt-0.5">Recent team & match activity</p>
        </div>
        <span className="w-2 h-2 rounded-full bg-purple-500" />
      </div>

      <div className="space-y-3">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a2033] border border-white/5 rounded-lg p-3.5 space-y-1.5"
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                  item.category === 'Scrim Invite'
                    ? 'bg-purple-500/20 text-purple-300'
                    : item.category === 'Tournament'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-[#111522] text-slate-300'
                }`}
              >
                {item.category}
              </span>
              <span className="text-[11px] text-slate-500">{item.time}</span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}