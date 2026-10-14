"use client";

import Link from "next/link";
import { useActionState } from "react";
import Field from "@/components/ui/field";
import { ResendConfirmation } from "../signup/resendConfirmation";
import { login } from "./actions";

export const LoginForm = () => {
  const [state, formAction, pending] = useActionState(login, { error: null });

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-md">
      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={state.email}
          required
        />
      </Field>
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

      {state.error && (
        <p role="alert" className="text-sm text-dnd-red">
          {state.error}
        </p>
      )}
      {state.unconfirmed && state.email && (
        <ResendConfirmation email={state.email} />
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start disabled:opacity-50"
      >
        {pending ? "Showing your papers…" : "Log in"}
      </button>
    </form>
  );
};
