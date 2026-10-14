"use client";

import { useActionState, useState } from "react";
import Field from "@/components/ui/field";
import { MIN_PASSWORD } from "@/lib/accountRules";
import { resetPassword } from "./actions";

export const ResetForm = () => {
  const [state, formAction, pending] = useActionState(resetPassword, {
    error: null,
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const mismatch =
    confirmPassword && password !== confirmPassword
      ? "The passwords don't match."
      : undefined;

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-md">
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
      {state.error && (
        <p role="alert" className="text-sm text-dnd-red">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending || !!mismatch}
        className="self-start disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Stamping new papers…" : "Set new password"}
      </button>
    </form>
  );
};
