// Placeholder auth service. MatchSync has no backend yet, so these functions
// simulate network latency and keep only a non-sensitive session record
// (never the password). Replace the bodies with real API calls later; the
// forms only depend on the resolve/reject contract (reject with an Error whose
// message is safe to show to the user).

const SESSION_KEY = 'matchsync.session';
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function saveSession(session, remember) {
  try {
    // "Remember me" persists across browser restarts; otherwise tab-only.
    const store = remember ? window.localStorage : window.sessionStorage;
    const other = remember ? window.sessionStorage : window.localStorage;
    other.removeItem(SESSION_KEY);
    store.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    /* storage can be unavailable (private mode); the session is just not kept */
  }
}

export function getSession() {
  try {
    const raw =
      window.localStorage.getItem(SESSION_KEY) ?? window.sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function login(credentials) {
  const { identifier, remember } = credentials;
  await wait(900);
  const isEmail = identifier.includes('@');
  const session = {
    username: isEmail ? identifier.split('@')[0] : identifier,
    email: isEmail ? identifier : null,
  };
  saveSession(session, remember);
  return session;
}

export async function register(details) {
  const { fullName, username, email } = details;
  await wait(1100);
  const session = { fullName, username, email };
  saveSession(session, true);
  return session;
}
