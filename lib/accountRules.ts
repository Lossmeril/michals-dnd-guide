// Limits for account fields, shared by sign-up and the profile page

import { DICTS } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/localize";

export const MIN_PASSWORD = 8;
export const DISPLAY_NAME_LENGTH = { min: 2, max: 32 };

/** An error message, or null when the display name is fine */
export const checkDisplayName = (name: string, lang: Lang = "en") =>
  name.length < DISPLAY_NAME_LENGTH.min || name.length > DISPLAY_NAME_LENGTH.max
    ? DICTS[lang].account.useBetween(DISPLAY_NAME_LENGTH.min, DISPLAY_NAME_LENGTH.max)
    : null;

/** An error message, or null when the new password and its repeat are fine */
export const checkPassword = (password: string, confirm: string, lang: Lang = "en") =>
  password.length < MIN_PASSWORD
    ? DICTS[lang].account.useAtLeast(MIN_PASSWORD)
    : password !== confirm
      ? DICTS[lang].account.mismatch
      : null;
