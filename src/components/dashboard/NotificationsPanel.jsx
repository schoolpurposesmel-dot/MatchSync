import React from 'react';

export default function NotificationsPanel({ notifications, onDismiss, onClearAll }) {
  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-white">Notifications &amp; Updates</h2>
          <p className="text-xs text-slate-400 mt-0.5">Recent team &amp; match activity</p>
        </div>

        {notifications.length > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs font-medium text-purple-400 hover:text-purple-300 transition cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-3">
        {notifications.length === 0 ? (
          <p className="text-xs text-slate-400 py-6 text-center">
            You&apos;re all caught up! No new notifications.
          </p>
        ) : (
          notifications.map((item) => (
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

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500">{item.time}</span>
                  <button
                    type="button"
                    onClick={() => onDismiss(item.id)}
                    className="text-slate-500 hover:text-slate-200 text-xs cursor-pointer"
                    title="Dismiss"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed">{item.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}