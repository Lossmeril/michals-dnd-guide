"use client";

import { useActionState } from "react";
import Field from "@/components/ui/field";
import { requestPasswordReset } from "./actions";

export const ForgotForm = () => {
  const [state, formAction, pending] = useActionState(requestPasswordReset, {
    error: null,
  });

  if (state.sentTo) {
    return (
      <div role="status" className="flex flex-col gap-2 max-w-md text-sm">
        <p>
          If an account uses <strong>{state.sentTo}</strong>, a link to set a
          new password is on its way. Open it in this browser.
        </p>
        <p className="text-dnd-ink/70">
          Nothing after a few minutes? Check the spam folder, or try again.
        </p>
      </div>
    );
  }

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
      {state.error && (
        <p role="alert" className="text-sm text-dnd-red">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="self-start disabled:opacity-50"
      >
        {pending ? "Sending a rider…" : "Send me a link"}
      </button>
    </form>
  );
};
