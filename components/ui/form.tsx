"use client";

// Pieces of forms that post to a server action with useActionState

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { DISPLAY_NAME_LENGTH, MIN_PASSWORD } from "@/lib/accountRules";
import Field from "./field";

/** The state most form actions return: an error, or a note that it worked */
export type FormState = { error: string | null; message?: string };

/** The action's result, shown above the submit button */
export const FormMessage: React.FC<{
  state: Partial<FormState>;
  className?: string;
}> = ({ state, className }) =>
  state.error ? (
    <p role="alert" className={twMerge("text-sm text-dnd-red", className)}>
      {state.error}
    </p>
  ) : state.message ? (
    <p role="status" className={twMerge("text-sm text-dnd-ink/80", className)}>
      {state.message}
    </p>
  ) : null;

/** The form's main button; its label changes while the action runs */
export const SubmitButton: React.FC<{
  pending: boolean;
  /** e.g. "Showing your papers…" */
  pendingLabel: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ pending, pendingLabel, disabled, className, children }) => (
  <button
    type="submit"
    disabled={pending || disabled}
    className={twMerge("self-start justify-self-start", className)}
  >
    {pending ? pendingLabel : children}
  </button>
);

/**
 * A new password typed twice. Controlled, so a mismatch shows while typing;
 * `mismatch` is also there to disable the submit button.
 */
export const usePasswordPair = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const mismatch =
    confirm && password !== confirm ? "The passwords don't match." : undefined;
  return {
    password,
    setPassword,
    confirm,
    setConfirm,
    mismatch,
    clear: () => {
      setPassword("");
      setConfirm("");
    },
  };
};

/** The two password fields; pass the pair from usePasswordPair */
export const PasswordFields: React.FC<{
  pair: ReturnType<typeof usePasswordPair>;
  labels?: [string, string];
  /** Errors the server sent back */
  errors?: { password?: string; confirm?: string };
}> = ({
  pair,
  labels = ["New password", "Confirm new password"],
  errors = {},
}) => (
  <>
    <Field
      label={labels[0]}
      htmlFor="password"
      hint={`At least ${MIN_PASSWORD} characters.`}
      error={errors.password}
    >
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
        minLength={MIN_PASSWORD}
        value={pair.password}
        onChange={(e) => pair.setPassword(e.target.value)}
        required
      />
    </Field>
    <Field
      label={labels[1]}
      htmlFor="confirmPassword"
      error={pair.mismatch ?? errors.confirm}
    >
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        value={pair.confirm}
        onChange={(e) => pair.setConfirm(e.target.value)}
        required
      />
    </Field>
  </>
);

/** An email input with its label */
export const EmailField: React.FC<{
  label?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  defaultValue?: string;
  className?: string;
}> = ({ label = "Email", hint, error, defaultValue, className }) => (
  <Field label={label} htmlFor="email" hint={hint} error={error} className={className}>
    <input
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      defaultValue={defaultValue}
      required
    />
  </Field>
);

/** The name other players and the DM see */
export const DisplayNameField: React.FC<{
  hint?: React.ReactNode;
  error?: React.ReactNode;
  defaultValue?: string;
  className?: string;
}> = ({
  hint = "What other players and your DM see.",
  error,
  defaultValue,
  className,
}) => (
  <Field
    label="Display name"
    htmlFor="displayName"
    hint={hint}
    error={error}
    className={className}
  >
    <input
      id="displayName"
      name="displayName"
      autoComplete="nickname"
      minLength={DISPLAY_NAME_LENGTH.min}
      maxLength={DISPLAY_NAME_LENGTH.max}
      defaultValue={defaultValue}
      required
    />
  </Field>
);
