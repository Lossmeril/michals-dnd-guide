"use client";

import Link from "next/link";
import { useActionState } from "react";
import Field from "@/components/ui/field";
import { EmailField, FormMessage, SubmitButton } from "@/components/ui/form";
import { ResendConfirmation } from "../signup/resendConfirmation";
import { login } from "./actions";
import { useDict } from "@/lib/i18n/client";

export const LoginForm = () => {
  const [state, formAction, pending] = useActionState(login, { error: null });
  const t = useDict().account;

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-md">
      <EmailField defaultValue={state.email} />
      <Field
        label={t.password}
        htmlFor="password"
        hint={
          <Link href="/forgot-password" className="link">
            {t.login.forgot}
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

      <SubmitButton pending={pending} pendingLabel={t.login.pending}>
        {t.login.submit}
      </SubmitButton>
    </form>
  );
};
