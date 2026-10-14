"use client";

import { useState } from "react";
import { toast } from "sonner";
import { resendConfirmation } from "./actions";

/** "Send the email again" for accounts still waiting for confirmation */
export const ResendConfirmation: React.FC<{ email: string }> = ({ email }) => {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  if (state === "sent")
    return <p className="text-sm">Sent again. Check your spam folder too.</p>;

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
      {state === "sending" ? "Sending…" : "Send the confirmation email again"}
    </button>
  );
};
