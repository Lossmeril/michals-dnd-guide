"use client";

import { useActionState } from "react";
import { EmailField, FormMessage, SubmitButton } from "@/components/ui/form";
import { requestPasswordReset } from "./actions";
import { useDict } from "@/lib/i18n/client";

export const ForgotForm = () => {
  const [state, formAction, pending] = useActionState(requestPasswordReset, {
    error: null,
  });
  const t = useDict().account.forgot;

  if (state.sentTo) {
    return (
      <div role="status" className="flex flex-col gap-2 max-w-md text-sm">
        <p>
          {t.sent[0]}
          <strong>{state.sentTo}</strong>
          {t.sent[1]}
        </p>
        <p className="text-dnd-ink/70">{t.nothing}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-md">
      <EmailField defaultValue={state.email} />
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel={t.pending}>
        {t.submit}
      </SubmitButton>
    </form>
  );
};
