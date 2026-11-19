// Form-level message. "error" uses red (matching inline field errors);
// "info" uses the purple tint the app uses for tags/badges.
export default function AuthAlert({ variant = 'error', children }) {
  const styles =
    variant === 'error'
      ? 'border-red-500/40 bg-red-500/10 text-red-300'
      : 'border-purple-500/40 bg-purple-500/10 text-purple-300';

  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      className={`rounded-lg border px-4 py-3 text-sm ${styles}`}
    >
      {children}
    </div>
  );
}
