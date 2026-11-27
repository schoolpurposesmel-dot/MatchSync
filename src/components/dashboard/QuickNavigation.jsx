import React from 'react';

export default function QuickNavigation({ onNavigate }) {
  const navItems = [
    {
      label: 'Browse Tournaments',
      sublabel: 'Register roster & join active cups',
      action: () => onNavigate('tournaments'),
      featured: true,
    },
    {
      label: 'Create Tournament',
      sublabel: 'Configure brackets & schedules',
      action: () => onNavigate('create-tournament'),
      featured: false,
    },
    {
      label: 'Find Scrims',
      sublabel: 'Jump to active scrim lobbies',
      action: () => onNavigate('scrims'),
      featured: false,
    },
    {
      label: 'Team Profile',
      sublabel: 'Manage roster & team settings',
      action: () => onNavigate('profile'),
      featured: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
      {navItems.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={item.action}
          className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between group ${
            item.featured
              ? 'bg-gradient-to-r from-[#9333ea] via-purple-600 to-indigo-600 hover:from-[#7e22ce] hover:to-indigo-500 border-purple-400/40 text-white shadow-[0_0_24px_rgba(147,51,234,0.45)] hover:shadow-[0_0_32px_rgba(147,51,234,0.75)] hover:scale-[1.01]'
              : 'bg-[#111522] hover:bg-[#1a2033] border-white/10 hover:border-purple-500/40 text-slate-100'
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold leading-tight">{item.label}</p>
              {item.featured && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-white/20 text-white">
                  Open
                </span>
              )}
            </div>
            <p
              className={`text-xs mt-1 ${
                item.featured ? 'text-purple-100/90' : 'text-slate-400'
              }`}
            >
              {item.sublabel}
            </p>
          </div>

          <svg
            className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
              item.featured ? 'text-white' : 'text-slate-400 group-hover:text-purple-400'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ))}
    </div>
  );
}