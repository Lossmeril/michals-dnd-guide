"use server";

import { cookies } from "next/headers";
import { confirmUrl } from "@/lib/siteUrl";
import { createClient } from "@/utils/supabase/server";

export type ForgotState = { error: string | null; sentTo?: string; email?: string };

/** Emails a link that logs the user in and opens /reset-password */
export async function requestPasswordReset(
  _prev: ForgotState,
  formData: FormData,
): Promise<ForgotState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!email.includes("@")) {
    return { error: "That isn't an email address.", email };
  }

  const supabase = createClient(await cookies());
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: await confirmUrl("/reset-password"),
  });
  if (error?.code === "over_email_send_rate_limit") {
    return { error: "Too many emails just now. Try again in a minute.", email };
  }
  if (error) return { error: error.message, email };

  // Same answer whether or not the account exists, so nobody can probe emails
  return { error: null, sentTo: email };
}
