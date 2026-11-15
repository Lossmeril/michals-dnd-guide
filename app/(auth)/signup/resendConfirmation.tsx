"use client";

import { useState } from "react";
import { toast } from "sonner";
import { resendConfirmation } from "./actions";
import { useDict } from "@/lib/i18n/client";

/** "Send the email again" for accounts still waiting for confirmation */
export const ResendConfirmation: React.FC<{ email: string }> = ({ email }) => {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const t = useDict().account.signup;

  if (state === "sent")
    return <p className="text-sm">{t.sentAgain}</p>;

  return (
    <button
      type="button"
      disabled={state === "sending"}
      onClick={async () => {
        setState("sending");
        const { error } = await resendConfirmation(email);
        if (error) {
          toast.error(error);
          setState("idle");
        } else setState("sent");
      }}
      className="button-secondary self-start text-sm py-1"
    >
      {state === "sending" ? t.sending : t.resend}
    </button>
  );
};
