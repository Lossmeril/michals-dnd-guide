"use client";

import { useActionState } from "react";
import Field from "@/components/ui/field";
import { FormMessage, SubmitButton } from "@/components/ui/form";
import Panel from "@/components/ui/panel";
import { newCampaign } from "./actions";
import { useDict } from "@/lib/i18n/client";

export const NewCampaignForm = () => {
  const t = useDict().campaigns;
  const [state, formAction, pending] = useActionState(newCampaign, {
    error: null,
  });

  return (
    <Panel as="form" action={formAction} className="flex flex-col gap-4 max-w-xl">
      <Field label={t.name} htmlFor="name">
        <input id="name" name="name" defaultValue={state.name} required />
      </Field>
      <Field
        label={t.description}
        htmlFor="description"
        hint={t.descriptionHint}
      >
        <textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={state.description}
        />
      </Field>
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel={t.gathering}>
        {t.create}
      </SubmitButton>
    </Panel>
  );
};
