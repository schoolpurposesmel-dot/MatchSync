import { useState } from 'react';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import AuthAlert from './AuthAlert';
import useAuthForm from './useAuthForm.jsx';
import { validateLogin } from './validators.jsx';
import { login } from '../../services/authService.jsx';
import { navigate } from '../../hooks/useHashRoute.jsx';

export default function LoginForm() {
  const [notice, setNotice] = useState('');

  const { values, errors, submitting, formError, handleChange, handleBlur, handleSubmit } =
    useAuthForm({
      initialValues: { identifier: '', password: '', remember: false },
      validate: validateLogin,
      onSubmit: async (v) => {
        await login({ identifier: v.identifier.trim(), password: v.password, remember: v.remember });
        navigate('dashboard');
      },
    });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-2">
      {formError && <AuthAlert variant="error">{formError}</AuthAlert>}
      {notice && <AuthAlert variant="info">{notice}</AuthAlert>}

      <FormField
        id="login-identifier"
        name="identifier"
        label="Email or username"
        value={values.identifier}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.identifier}
        disabled={submitting}
        placeholder="you@school.edu"
        autoComplete="username"
        autoFocus
      />

      <FormField
        id="login-password"
        name="password"
        type="password"
        label="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        disabled={submitting}
        placeholder="Enter your password"
        autoComplete="current-password"
        labelAction={
          <button
            type="button"
            onClick={() => setNotice('Password reset is coming soon.')}
            className="cursor-pointer text-sm text-purple-400 transition hover:text-purple-300"
          >
            Forgot password?
          </button>
        }
      />

      <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-400">
        <input
          type="checkbox"
          name="remember"
          checked={values.remember}
          onChange={handleChange}
          disabled={submitting}
          className="h-4 w-4 cursor-pointer rounded border-gray-700 bg-gray-950 accent-purple-600"
        />
        Remember me
      </label>

      <SubmitButton loading={submitting} loadingText="Logging in...">
        Log In
      </SubmitButton>
    </form>
  );
}
