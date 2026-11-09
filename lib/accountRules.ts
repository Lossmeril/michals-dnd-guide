// Limits for account fields, shared by sign-up and the profile page

export const MIN_PASSWORD = 8;
export const DISPLAY_NAME_LENGTH = { min: 2, max: 32 };

/** An error message, or null when the display name is fine */
export const checkDisplayName = (name: string) =>
  name.length < DISPLAY_NAME_LENGTH.min || name.length > DISPLAY_NAME_LENGTH.max
    ? `Use ${DISPLAY_NAME_LENGTH.min}–${DISPLAY_NAME_LENGTH.max} characters.`
    : null;

/** An error message, or null when the new password and its repeat are fine */
export const checkPassword = (password: string, confirm: string) =>
  password.length < MIN_PASSWORD
    ? `Use at least ${MIN_PASSWORD} characters.`
    : password !== confirm
      ? "The passwords don't match."
      : null;
