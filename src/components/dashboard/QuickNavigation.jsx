import React from 'react';

export default function QuickNavigation({ onNavigate, onScrollTo }) {
  const navItems = [
    {
      label: 'Find Scrims',
      sublabel: 'Browse active scrim lobbies',
      action: () => onNavigate('scrims'),
      primary: true,
    },
    {
      label: 'Create Tournament',
      sublabel: 'Configure brackets & schedules',
      action: () => onNavigate('create-tournament'),
      primary: false,
    },
    {
      label: 'Featured Games',
      sublabel: 'Explore supported titles',
      action: () => onNavigate('home'),
      primary: false,
    },
    {
      label: 'Team Profile',
      sublabel: 'Manage roster & team settings',
      action: () => onNavigate('profile'),
      primary: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
      {navItems.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={item.action}
          className={`p-4 rounded-xl border text-left transition cursor-pointer flex items-center justify-between group ${
            item.primary
              ? 'bg-[#9333ea] hover:bg-[#7e22ce] border-purple-400/30 text-white'
              : 'bg-[#111522] hover:bg-[#1a2033] border-white/10 hover:border-purple-500/40 text-slate-100'
          }`}
        >
          <div>
            <p className="text-sm font-bold leading-tight">{item.label}</p>
            <p
              className={`text-xs mt-1 ${
                item.primary ? 'text-purple-100/80' : 'text-slate-400'
              }`}
            >
              {item.sublabel}
            </p>
          </div>

          <svg
            className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
              item.primary ? 'text-white' : 'text-slate-400 group-hover:text-purple-400'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ))}
    </div>
  );
}