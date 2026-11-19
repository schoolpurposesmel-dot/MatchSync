import { useState } from 'react';

// Shared form state: errors appear after a field is blurred or after the first
// submit attempt, and re-validate live as the user types.
export default function useAuthForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const allErrors = validate(values);
  const errors = {};
  Object.keys(allErrors).forEach((name) => {
    if (submitted || touched[name]) errors[name] = allErrors[name];
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setFormError('');
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitted(true);

    const found = validate(values);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      e.currentTarget.elements[firstInvalid]?.focus();
      return;
    }

    setSubmitting(true);
    setFormError('');
    try {
      await onSubmit(values);
    } catch (err) {
      setFormError(err?.message || 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return { values, errors, submitting, formError, handleChange, handleBlur, handleSubmit };
}
