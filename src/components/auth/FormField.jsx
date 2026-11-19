import { useState } from 'react';

function EyeIcon({ off }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      {off && <path d="M4 4l16 16" />}
    </svg>
  );
}

// Labelled text input with inline error + optional show/hide toggle for
// password fields. `labelAction` renders on the right of the label row
// (e.g. "Forgot password?").
export default function FormField({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  hint,
  labelAction,
  disabled,
  ...rest
}) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-gray-300">
          {label}
        </label>
        {labelAction}
      </div>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={isPassword && visible ? 'text' : type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={describedBy}
          className={`w-full rounded-lg border bg-gray-950 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:ring-1 disabled:cursor-not-allowed disabled:opacity-60 ${
            isPassword ? 'pr-12' : ''
          } ${
            error
              ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-800 focus:border-purple-500 focus:ring-purple-500'
          }`}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            disabled={disabled}
            aria-label={visible ? 'Hide password' : 'Show password'}
            aria-pressed={visible}
            className="absolute inset-y-0 right-0 flex w-12 cursor-pointer items-center justify-center text-gray-400 transition hover:text-purple-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <EyeIcon off={visible} />
          </button>
        )}
      </div>

      {/* Fixed-height slot: errors appearing on blur must not shift the layout,
          otherwise the layout jump can swallow a click on the submit button. */}
      <div className="mt-1 min-h-5">
        {error ? (
          <p id={`${id}-error`} className="text-sm leading-5 text-red-400">
            {error}
          </p>
        ) : hint ? (
          <p id={`${id}-hint`} className="text-xs leading-5 text-gray-500">
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  );
}
