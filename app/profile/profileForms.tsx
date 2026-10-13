"use client";

import { useActionState, useState } from "react";
import Field from "@/components/ui/field";
import { DISPLAY_NAME_LENGTH, MIN_PASSWORD } from "@/lib/accountRules";
import {
  changeEmail,
  changePassword,
  type FormState,
  updateDisplayName,
} from "./actions";

const initial: FormState = { error: null };

/** The form's result under the button */
const Outcome: React.FC<{ state: FormState }> = ({ state }) =>
  state.error ? (
    <p role="alert" className="text-sm text-dnd-red">
      {state.error}
    </p>
  ) : state.message ? (
    <p role="status" className="text-sm text-dnd-ink/80">
      {state.message}
    </p>
  ) : null;

export const DisplayNameForm: React.FC<{ current: string }> = ({ current }) => {
  const [state, action, pending] = useActionState(updateDisplayName, initial);

  return (
    <form action={action} className="flex flex-col gap-3 max-w-md">
      <Field
        label="Display name"
        htmlFor="displayName"
        hint="What other players and your DM see."
      >
        <input
          id="displayName"
          name="displayName"
          autoComplete="nickname"
          minLength={DISPLAY_NAME_LENGTH.min}
          maxLength={DISPLAY_NAME_LENGTH.max}
          defaultValue={current}
          required
        />
      </Field>
      <Outcome state={state} />
      <button type="submit" disabled={pending} className="self-start">
        {pending ? "Saving…" : "Save name"}
      </button>
    </form>
  );
};

export const EmailForm: React.FC<{
  current: string;
  /** An address waiting for confirmation, if a change is under way */
  pending: string | null;
}> = ({ current, pending: pendingEmail }) => {
  const [state, action, pending] = useActionState(changeEmail, initial);

  return (
    <form action={action} className="flex flex-col gap-3 max-w-md">
      <p className="text-sm">
        Current email: <span className="font-bold">{current}</span>
      </p>
      {pendingEmail && !state.message && (
        <p className="text-sm text-dnd-ink/80">
          Waiting for you to confirm{" "}
          <span className="font-bold">{pendingEmail}</span>. Check that inbox
          for the link.
        </p>
      )}
      <Field
        label="New email"
        htmlFor="email"
        hint="Your email stays the same until you click the link we send."
      >
        <input id="email" name="email" type="email" autoComplete="email" required />
      </Field>
      <Outcome state={state} />
      <button type="submit" disabled={pending} className="self-start">
        {pending ? "Sending…" : "Change email"}
      </button>
    </form>
  );
};

export const PasswordForm = () => {
  const [state, action, pending] = useActionState(changePassword, initial);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Empty the fields once a change goes through (adjusting state during render)
  const [seen, setSeen] = useState(state);
  if (state !== seen) {
    setSeen(state);
    if (state.message) {
      setPassword("");
      setConfirmPassword("");
    }
  }
  const mismatch =
    confirmPassword && password !== confirmPassword
      ? "The passwords don't match."
      : undefined;

  return (
    <form action={action} className="flex flex-col gap-3 max-w-md">
      <Field
        label="New password"
        htmlFor="password"
        hint={`At least ${MIN_PASSWORD} characters.`}
      >
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={MIN_PASSWORD}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Field>
      <Field label="Confirm new password" htmlFor="confirmPassword" error={mismatch}>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </Field>
      <Outcome state={state} />
      <button
        type="submit"
        disabled={pending || !!mismatch}
        className="self-start disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Changing…" : "Change password"}
      </button>
    </form>
  );
};
