"use client";

import Link from "next/link";
import { useActionState } from "react";
import Field from "@/components/ui/field";
import { EmailField, FormMessage, SubmitButton } from "@/components/ui/form";
import { ResendConfirmation } from "../signup/resendConfirmation";
import { login } from "./actions";

export const LoginForm = () => {
  const [state, formAction, pending] = useActionState(login, { error: null });

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-md">
      <EmailField defaultValue={state.email} />
      <Field
        label="Password"
        htmlFor="password"
        hint={
          <Link href="/forgot-password" className="link">
            Forgot your password?
          </Link>
        }
      >
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </Field>

      <FormMessage state={state} />
      {state.unconfirmed && state.email && (
        <ResendConfirmation email={state.email} />
      )}

      <SubmitButton pending={pending} pendingLabel="Showing your papers…">
        Log in
      </SubmitButton>
    </form>
  );
};
