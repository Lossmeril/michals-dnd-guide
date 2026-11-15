"use client";

import { useActionState } from "react";
import {
  FormMessage,
  PasswordFields,
  SubmitButton,
  usePasswordPair,
} from "@/components/ui/form";
import { resetPassword } from "./actions";
import { useDict } from "@/lib/i18n/client";

export const ResetForm = () => {
  const [state, formAction, pending] = useActionState(resetPassword, {
    error: null,
  });
  const pair = usePasswordPair();
  const t = useDict().account.reset;

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-md">
      <PasswordFields pair={pair} />
      <FormMessage state={state} />
      <SubmitButton
        pending={pending}
        pendingLabel={t.pending}
        disabled={!!pair.mismatch}
      >
        {t.submit}
      </SubmitButton>
    </form>
  );
};
