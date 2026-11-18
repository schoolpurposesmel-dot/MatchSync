import React from 'react';

export default function QuickNavigation() {
  const navItems = [
    {
      label: 'Find Scrims',
      sublabel: 'Browse open campus lobbies',
      primary: true,
    },
    {
      label: 'Browse Tournaments',
      sublabel: 'View brackets & registrations',
      primary: false,
    },
    {
      label: 'Featured Games',
      sublabel: 'Explore supported titles',
      primary: false,
    },
    {
      label: 'Home Overview',
      sublabel: 'Return to MatchSync landing',
      primary: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
      {navItems.map((item) => (
        <div
          key={item.label}
          className={`p-4 rounded-xl border flex items-center justify-between ${
            item.primary
              ? 'bg-[#9333ea] border-purple-400/30 text-white'
              : 'bg-[#111522] border-white/10 text-slate-100'
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
            className={`w-4 h-4 shrink-0 ${
              item.primary ? 'text-white' : 'text-slate-400'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      ))}
    </div>
  );
}