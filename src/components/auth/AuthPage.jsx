import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const COPY = {
  login: {
    title: 'Welcome Back',
    subtitle: 'Log in to manage your scrims, tournaments, and team.',
    switchText: "Don't have an account?",
    switchLabel: 'Sign Up',
    switchHref: '#/register',
  },
  register: {
    title: 'Create Your Account',
    subtitle: 'Join MatchSync and find your next rival.',
    switchText: 'Already have an account?',
    switchLabel: 'Log In',
    switchHref: '#/login',
  },
};

export default function AuthPage({ mode }) {
  const copy = COPY[mode];

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      {/* Same header pattern as the homepage Navbar */}
      <header className="flex items-center justify-between px-8 py-5">
        <a href="#/" className="text-2xl font-bold">
          MATCH<span className="text-purple-500">SYNC</span>
        </a>
        <a href="#/" className="text-gray-300 transition hover:text-white">
          Back to Home
        </a>
      </header>

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-10 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-900/30 via-indigo-950/20 to-purple-900/20" />

        <div className="relative w-full max-w-md rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <h1 className="text-3xl font-bold">{copy.title}</h1>
          <p className="mt-2 mb-8 text-gray-400">{copy.subtitle}</p>

          {mode === 'login' ? <LoginForm /> : <RegisterForm />}

          <p className="mt-6 text-center text-sm text-gray-400">
            {copy.switchText}{' '}
            <a
              href={copy.switchHref}
              className="font-semibold text-purple-400 transition hover:text-purple-300"
            >
              {copy.switchLabel}
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
