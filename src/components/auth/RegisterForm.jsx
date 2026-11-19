import FormField from './FormField';
import SubmitButton from './SubmitButton';
import AuthAlert from './AuthAlert';
import useAuthForm from './useAuthForm.jsx';
import { validateRegister } from './validators.jsx';
import { register } from '../../services/authService.jsx';
import { navigate } from '../../hooks/useHashRoute.jsx';

export default function RegisterForm() {
  const { values, errors, submitting, formError, handleChange, handleBlur, handleSubmit } =
    useAuthForm({
      initialValues: { fullName: '', username: '', email: '', password: '', confirmPassword: '' },
      validate: validateRegister,
      onSubmit: async (v) => {
        await register({
          fullName: v.fullName.trim(),
          username: v.username.trim(),
          email: v.email.trim(),
          password: v.password,
        });
        navigate('dashboard');
      },
    });

  const common = { onChange: handleChange, onBlur: handleBlur, disabled: submitting };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-2">
      {formError && <AuthAlert variant="error">{formError}</AuthAlert>}

      <div className="grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
        <FormField
          id="register-fullName"
          name="fullName"
          label="Full name"
          value={values.fullName}
          error={errors.fullName}
          placeholder="Juan Dela Cruz"
          autoComplete="name"
          autoFocus
          {...common}
        />
        <FormField
          id="register-username"
          name="username"
          label="Username"
          value={values.username}
          error={errors.username}
          placeholder="shadow_ace"
          autoComplete="username"
          {...common}
        />
      </div>

      <FormField
        id="register-email"
        name="email"
        type="email"
        label="Email"
        value={values.email}
        error={errors.email}
        placeholder="you@school.edu"
        autoComplete="email"
        {...common}
      />

      <FormField
        id="register-password"
        name="password"
        type="password"
        label="Password"
        value={values.password}
        error={errors.password}
        hint="At least 8 characters, with a letter and a number."
        placeholder="Create a password"
        autoComplete="new-password"
        {...common}
      />

      <FormField
        id="register-confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirm password"
        value={values.confirmPassword}
        error={errors.confirmPassword}
        placeholder="Re-enter your password"
        autoComplete="new-password"
        {...common}
      />

      <SubmitButton loading={submitting} loadingText="Creating account...">
        Create Account
      </SubmitButton>
    </form>
  );
}
