import React from 'react';
import { findMatch } from '../../services/scoreService';

const STATUS_STYLES = {
  'Pending Review': 'bg-amber-500/15 text-amber-300 border-amber-500/25',
  Verified: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  Disputed: 'bg-rose-500/15 text-rose-300 border-rose-500/25',
};

const STEPS = ['Submitted', 'Review', 'Verified'];

function ProgressSteps({ status }) {
  const reached = status === 'Verified' ? 3 : 2;
  const currentColor = status === 'Disputed' ? 'bg-rose-500' : 'bg-amber-400';

  return (
    <ol className="grid grid-cols-3 gap-1.5">
      {STEPS.map((step, index) => {
        const isCurrent = status !== 'Verified' && index === 1;
        const color = isCurrent
          ? currentColor
          : index < reached && status === 'Verified'
          ? 'bg-emerald-500'
          : index === 0
          ? 'bg-[#9333ea]'
          : 'bg-slate-700';
        return (
          <li key={step}>
            <div className={`h-1.5 rounded-full ${color}`} />
            <p className="text-[10px] text-slate-400 mt-1">{step}</p>
          </li>
        );
      })}
    </ol>
  );
}

const formatDate = (iso) =>
  new Date(iso).toLocaleString('en-PH', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

export default function SubmissionStatus({ submissions, onWithdraw, onResubmit, disabled }) {
  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-white">Submission Status</h2>
        <span className="text-[11px] text-slate-400">{submissions.length} Total</span>
      </div>

      {submissions.length === 0 ? (
        <p className="text-xs text-slate-400 text-center py-6">
          No results submitted yet. Your reports will be tracked here.
        </p>
      ) : (
        <ul className="space-y-2.5">
          {submissions.map((submission) => {
            const match = findMatch(submission.reference);
            return (
              <li
                key={submission.id}
                className="bg-[#1a2033] border border-white/5 rounded-lg p-3.5 space-y-2.5 text-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`px-2 py-0.5 text-[11px] font-semibold rounded border ${
                      STATUS_STYLES[submission.status]
                    }`}
                  >
                    {submission.status}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {formatDate(submission.submittedAt)}
                  </span>
                </div>

                <div>
                  <p className="font-bold text-white">
                    {match?.teamA} {submission.seriesScore.a} – {submission.seriesScore.b}{' '}
                    {match?.teamB}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    <span className="font-mono text-purple-300">{submission.reference}</span> ·{' '}
                    {match?.game}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {submission.games.map((g) => `${g.a}–${g.b}`).join(', ')} ·{' '}
                    {submission.evidence.length} screenshot
                    {submission.evidence.length === 1 ? '' : 's'}
                  </p>
                </div>

                <ProgressSteps status={submission.status} />

                {submission.reviewNote && (
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {submission.reviewNote}
                  </p>
                )}

                {submission.status === 'Pending Review' && (
                  <button
                    type="button"
                    disabled={disabled}
                    onClick={() => onWithdraw(submission)}
                    className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-medium rounded-md transition cursor-pointer disabled:opacity-50"
                  >
                    Withdraw
                  </button>
                )}
                {submission.status === 'Disputed' && (
                  <button
                    type="button"
                    disabled={disabled}
                    onClick={() => onResubmit(submission.reference)}
                    className="px-3 py-1.5 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-[11px] font-semibold rounded-md transition cursor-pointer disabled:opacity-50"
                  >
                    Resubmit Result
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}