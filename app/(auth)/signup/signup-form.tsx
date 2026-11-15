"use client";

import { useActionState } from "react";
import Field from "@/components/ui/field";
import {
  DisplayNameField,
  EmailField,
  FormMessage,
  PasswordFields,
  SubmitButton,
  usePasswordPair,
} from "@/components/ui/form";
import StoryBox from "@/components/ui/storyBox";
import { signup } from "./actions";
import { ResendConfirmation } from "./resendConfirmation";
import { useDict } from "@/lib/i18n/client";

export const SignupForm = () => {
  const [state, formAction, pending] = useActionState(signup, { error: null });
  const pair = usePasswordPair();
  const account = useDict().account;
  const t = account.signup;

  if (state.sentTo) {
    return (
      <>
        <StoryBox className="mt-2">
          <p>
            {t.sentStory[0]}
            <span className="not-italic font-bold">{state.sentTo}</span>
            {t.sentStory[1]}
          </p>
        </StoryBox>
        <p className="mb-4">{t.openLink}</p>
        <ResendConfirmation email={state.sentTo} />
      </>
    );
  }

  return (
    <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field
        label={t.signupPassword}
        htmlFor="signupPassword"
        hint={t.signupPasswordHint}
        error={state.fieldErrors?.signupPassword}
        className="md:col-span-2"
      >
        <input
          id="signupPassword"
          name="signupPassword"
          type="password"
          autoComplete="off"
          required
        />
      </Field>
      <DisplayNameField
        hint={t.nameHint}
        error={state.fieldErrors?.displayName}
        defaultValue={state.values?.displayName}
        className="md:col-span-2"
      />
      <EmailField
        hint={t.emailHint}
        error={state.fieldErrors?.email}
        defaultValue={state.values?.email}
        className="md:col-span-2"
      />
      <PasswordFields
        pair={pair}
        labels={[account.password, t.confirmPassword]}
        errors={{
          password: state.fieldErrors?.password,
          confirm: state.fieldErrors?.confirmPassword,
        }}
      />

      <FormMessage state={state} className="md:col-span-2" />

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
