import React, { useState } from 'react';
import heroBg from '../../assets/hero_bg.jpg';
import ReferenceLookup from './ReferenceLookup';
import ScoreInputForm from './ScoreInputForm';
import SubmissionStatus from './SubmissionStatus';
import {
  findMatch,
  getOpenMatches,
  getSubmissions,
  submitScore,
  withdrawSubmission,
} from '../../services/scoreService';

const NAV_LINKS = [
  { label: 'Home', route: 'home' },
  { label: 'Dashboard', route: 'dashboard' },
  { label: 'Tournaments', route: 'tournaments' },
  { label: 'Submit Score', route: 'submit-score' },
  { label: 'Profile', route: 'profile' },
];

// Supports deep links such as #/submit-score?ref=MS-VAL-8841
const referenceFromUrl = () =>
  new URLSearchParams(window.location.hash.split('?')[1]).get('ref')?.toUpperCase() ?? '';

// Returns the match to report on, or the reason it can't be reported.
function lookupMatch(reference, submissions) {
  if (!reference.trim()) return { match: null, error: 'Enter a match reference code.' };

  const match = findMatch(reference);
  if (!match) {
    return { match: null, error: 'No match found. Check the lobby code and try again.' };
  }

  const existing = submissions.find((s) => s.reference === match.reference);
  if (existing && existing.status !== 'Disputed') {
    return {
      match: null,
      error: `A result for ${match.reference} is already ${existing.status.toLowerCase()}. See Submission Status.`,
    };
  }
  return { match, error: '' };
}

export default function ScoreSubmissionPage() {
  const [submissions, setSubmissions] = useState(getSubmissions);
  const [query, setQuery] = useState(referenceFromUrl);
  const [lookup, setLookup] = useState(() => {
    const reference = referenceFromUrl();
    return reference ? lookupMatch(reference, getSubmissions()) : { match: null, error: '' };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [toast, setToast] = useState(null);

  const { match } = lookup;
  const openMatches = getOpenMatches(submissions);
  const countByStatus = (status) => submissions.filter((s) => s.status === status).length;

  const goToRoute = (hash) => {
    window.location.hash = hash;
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = 'dashboard';
    }
  };

  const handleLookup = (reference) => {
    setQuery(reference.trim().toUpperCase());
    setLookup(lookupMatch(reference, submissions));
    setSubmitError('');
    setToast(null);
  };

  const handleQueryChange = (value) => {
    setQuery(value);
    setLookup((prev) => ({ ...prev, error: '' }));
  };

  const handleSubmitScore = async (result) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const submission = await submitScore(result);
      setSubmissions(getSubmissions());
      setLookup({ match: null, error: '' });
      setQuery('');
      setToast({
        title: `Result submitted: ${submission.reference}`,
        detail: `${submission.id} is now pending review. Track it under Submission Status.`,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWithdraw = (submission) => {
    if (!window.confirm(`Withdraw the result for ${submission.reference}?`)) return;
    setSubmissions(withdrawSubmission(submission.id));
    setLookup((prev) => ({ ...prev, error: '' }));
    setToast({
      title: `Result withdrawn: ${submission.reference}`,
      detail: 'You can submit a corrected result for this match.',
    });
  };

  const handleResubmit = (reference) => {
    handleLookup(reference);
    document.getElementById('lookup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090f] text-slate-100 flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-white/10 bg-[#07090f]/95 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => goToRoute('home')}
            className="text-sm font-extrabold tracking-wider text-white uppercase cursor-pointer"
          >
            MATCHSYNC
          </button>

          <div className="flex items-center gap-6 text-xs font-medium overflow-x-auto whitespace-nowrap">
            {NAV_LINKS.map((link) =>
              link.route === 'submit-score' ? (
                <button
                  key={link.route}
                  type="button"
                  aria-current="page"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white font-semibold cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.route}
                  type="button"
                  onClick={() => goToRoute(link.route)}
                  className="text-slate-400 hover:text-white transition cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => goToRoute('profile')}
            className="hidden sm:block px-3.5 py-1.5 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-semibold rounded-md transition cursor-pointer shrink-0"
          >
            Team Shadow
          </button>
        </div>
      </nav>

      {/* Hero Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#0b0e17]">
        <img
          src={heroBg}
          alt=""
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07090f] via-purple-950/50 to-[#07090f]/90" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
          <div>
            <button
              type="button"
              onClick={handleGoBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111522]/90 hover:bg-[#1a2033] text-slate-300 hover:text-white text-xs font-medium rounded-lg border border-white/10 hover:border-purple-500/40 transition cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-purple-400 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-2">
                Match Center · Score Verification
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">
                Score Submission
              </h1>
              <p className="text-sm text-slate-300/80 mt-1 max-w-xl">
                Look up your match, report the results, attach screenshot proof, and track
                verification status.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0">
              {[
                ['To Report', openMatches.length, 'text-white'],
                ['Pending', countByStatus('Pending Review'), 'text-amber-300'],
                ['Verified', countByStatus('Verified'), 'text-emerald-400'],
              ].map(([label, value, color]) => (
                <div
                  key={label}
                  className="bg-[#111522]/90 border border-white/10 rounded-lg px-4 py-2.5 text-center"
                >
                  <p className={`text-lg font-bold ${color}`}>{value}</p>
                  <p className="text-[11px] text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {toast && (
          <div
            role="status"
            className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-sm font-bold text-emerald-300">✓ {toast.title}</p>
              <p className="text-xs text-slate-300 mt-0.5">{toast.detail}</p>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="text-xs text-slate-400 hover:text-white cursor-pointer shrink-0"
            >
              Dismiss ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left 2 Columns: lookup + score form */}
          <div id="lookup-section" className="lg:col-span-2 space-y-6 min-w-0 scroll-mt-22">
            <ReferenceLookup
              query={query}
              onQueryChange={handleQueryChange}
              onLookup={handleLookup}
              error={lookup.error}
              match={match}
              openMatches={openMatches}
              disabled={isSubmitting}
            />

            {match ? (
              // The key clears the form when a different match is loaded.
              <ScoreInputForm
                key={match.reference}
                match={match}
                isSubmitting={isSubmitting}
                submitError={submitError}
                onSubmit={handleSubmitScore}
              />
            ) : (
              <div className="bg-[#111522] border border-white/10 rounded-xl p-12 text-center space-y-2">
                <p className="text-base font-bold text-white">No match selected</p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Find a match by its reference code to open the score form and upload screenshot
                  evidence.
                </p>
              </div>
            )}
          </div>

          {/* Right 1 Column: status tracker */}
          <div className="lg:col-span-1 space-y-6 min-w-0">
            <SubmissionStatus
              submissions={submissions}
              onWithdraw={handleWithdraw}
              onResubmit={handleResubmit}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#07090f] py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span className="font-bold text-slate-300 tracking-wider">MATCHSYNC</span>
          <span>Campus Esports Scrim &amp; Tournament Platform</span>
        </div>
      </footer>
    </div>
  );
}