"use client";

import { useActionState, useState } from "react";
import {
  DisplayNameField,
  EmailField,
  FormMessage,
  type FormState,
  PasswordFields,
  SubmitButton,
  usePasswordPair,
} from "@/components/ui/form";
import { changeEmail, changePassword, updateDisplayName } from "./actions";
import { useDict } from "@/lib/i18n/client";

const initial: FormState = { error: null };
const formClass = "flex flex-col gap-3 max-w-md";

export const DisplayNameForm: React.FC<{ current: string }> = ({ current }) => {
  const [state, action, pending] = useActionState(updateDisplayName, initial);
  const t = useDict().account.profile;

  return (
    <form action={action} className={formClass}>
      <DisplayNameField defaultValue={current} />
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel={t.saving}>
        {t.saveName}
      </SubmitButton>
    </form>
  );
};

export const EmailForm: React.FC<{
  current: string;
  /** An address waiting for confirmation, if a change is under way */
  pending: string | null;
}> = ({ current, pending: pendingEmail }) => {
  const [state, action, pending] = useActionState(changeEmail, initial);
  const t = useDict().account.profile;

  return (
    <form action={action} className={formClass}>
      <p className="text-sm">
        {t.currentEmail} <span className="font-bold">{current}</span>
      </p>
      {pendingEmail && !state.message && (
        <p className="text-sm text-dnd-ink/80">
          {t.waiting[0]}
          <span className="font-bold">{pendingEmail}</span>
          {t.waiting[1]}
        </p>
      )}
      <EmailField
        label={t.newEmail}
        hint={t.newEmailHint}
      />
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel={t.sending}>
        {t.changeEmail}
      </SubmitButton>
    </form>
  );
};

export const PasswordForm = () => {
  const [state, action, pending] = useActionState(changePassword, initial);
  const t = useDict().account.profile;
  const pair = usePasswordPair();
  // Empty the fields once a change goes through (adjusting state during render)
  const [seen, setSeen] = useState(state);
  if (state !== seen) {
    setSeen(state);
    if (state.message) pair.clear();
  }

  return (
    <form action={action} className={formClass}>
      <PasswordFields pair={pair} />
      <FormMessage state={state} />
      <SubmitButton
        pending={pending}
        pendingLabel={t.changing}
        disabled={!!pair.mismatch}
      >
        {t.changePassword}
      </SubmitButton>
    </form>
  );
};
