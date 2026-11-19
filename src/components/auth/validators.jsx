const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERNAME_RE = /^[a-zA-Z0-9_]+$/;

export function validateLogin({ identifier, password }) {
  const errors = {};
  const id = identifier.trim();

  if (!id) errors.identifier = 'Enter your email or username.';
  else if (id.includes('@') && !EMAIL_RE.test(id)) errors.identifier = 'Enter a valid email address.';

  if (!password) errors.password = 'Enter your password.';

  return errors;
}

export function validateRegister({ fullName, username, email, password, confirmPassword }) {
  const errors = {};

  if (!fullName.trim()) errors.fullName = 'Enter your full name.';
  else if (fullName.trim().length < 2) errors.fullName = 'Full name must be at least 2 characters.';

  const user = username.trim();
  if (!user) errors.username = 'Choose a username.';
  else if (user.length < 3 || user.length > 20) errors.username = 'Username must be 3–20 characters.';
  else if (!USERNAME_RE.test(user)) errors.username = 'Use letters, numbers, and underscores only.';

  if (!email.trim()) errors.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Enter a valid email address.';

  if (!password) errors.password = 'Create a password.';
  else if (password.length < 8) errors.password = 'Password must be at least 8 characters.';
  else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password))
    errors.password = 'Password must include at least one letter and one number.';

  if (!confirmPassword) errors.confirmPassword = 'Confirm your password.';
  else if (confirmPassword !== password) errors.confirmPassword = 'Passwords do not match.';

  return errors;
}
