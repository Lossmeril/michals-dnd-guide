"use client";

import { useActionState, useState } from "react";
import Field from "@/components/ui/field";
import StoryBox from "@/components/ui/storyBox";
import { DISPLAY_NAME_LENGTH, MIN_PASSWORD } from "@/lib/accountRules";
import { signup } from "./actions";
import { ResendConfirmation } from "./resendConfirmation";

export const SignupForm = () => {
  const [state, formAction, pending] = useActionState(signup, { error: null });
  // Controlled so the mismatch shows while typing, not only after submitting
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (state.sentTo) {
    return (
      <>
        <StoryBox className="mt-2">
          <p>
            The guard writes it all down, slowly, tongue between teeth.
            &ldquo;Right. A runner will bring a letter to{" "}
            <span className="not-italic font-bold">{state.sentTo}</span>.
            Bring me the seal inside and the gate is yours.&rdquo;
          </p>
        </StoryBox>
        <p className="mb-4">
          Open the link in the email to confirm your account. It logs you in
          straight away.
        </p>
        <ResendConfirmation email={state.sentTo} />
      </>
    );
  }

  const mismatch =
    confirmPassword && password !== confirmPassword
      ? "The passwords don't match."
      : undefined;

  return (
    <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field
        label="Display name"
        htmlFor="displayName"
        hint="What other players and your DM see. You can change it later."
        error={state.fieldErrors?.displayName}
        className="md:col-span-2"
      >
        <input
          id="displayName"
          name="displayName"
          autoComplete="nickname"
          minLength={DISPLAY_NAME_LENGTH.min}
          maxLength={DISPLAY_NAME_LENGTH.max}
          defaultValue={state.values?.displayName}
          required
        />
      </Field>
      <Field
        label="Email"
        htmlFor="email"
        hint="We send a confirmation link here."
        error={state.fieldErrors?.email}
        className="md:col-span-2"
      >
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={state.values?.email}
          required
        />
      </Field>
      <Field
        label="Password"
        htmlFor="password"
        hint={`At least ${MIN_PASSWORD} characters.`}
        error={state.fieldErrors?.password}
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
      <Field
        label="Confirm password"
        htmlFor="confirmPassword"
        error={mismatch ?? state.fieldErrors?.confirmPassword}
      >
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

      {state.error && (
        <p role="alert" className="md:col-span-2 text-sm text-dnd-red">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending || !!mismatch}
        className="justify-self-start disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Signing the ledger…" : "Create account"}
      </button>
    </form>
  );
};
