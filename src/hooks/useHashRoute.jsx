import { useSyncExternalStore } from 'react';

// Minimal hash router (#/login, #/register, #/dashboard). The project has no
// router dependency, and existing anchors such as "#home" / "#Scrims" keep
// working: unknown hashes resolve to the home page.
const parse = () =>
  window.location.hash.replace(/^#\/?/, '').split('?')[0].toLowerCase() || 'home';

const subscribe = (callback) => {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
};

export function navigate(route) {
  window.location.hash = route === 'home' ? '' : `/${route}`;
}

export default function useHashRoute() {
  return useSyncExternalStore(subscribe, parse, () => 'home');
}
