"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { checkDisplayName, MIN_PASSWORD } from "@/lib/accountRules";
import { confirmUrl } from "@/lib/siteUrl";
import { createClient } from "@/utils/supabase/server";
import { getLang } from "@/lib/i18n/server";
import { DICTS } from "@/lib/i18n/dictionaries";

type SignupField =
  | "displayName"
  | "email"
  | "password"
  | "confirmPassword"
  | "signupPassword";

export type SignupState = {
  error: string | null;
  fieldErrors?: Partial<Record<SignupField, string>>;
  /** Kept so the form doesn't empty itself after a failed attempt */
  values?: { displayName: string; email: string };
  /** Set once the confirmation email is on its way */
  sentTo?: string;
};

export async function signup(
  _prev: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const displayName = String(formData.get("displayName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");
  const signupPassword = String(formData.get("signupPassword") ?? "");
  const values = { displayName, email };
  const lang = await getLang();
  const t = DICTS[lang].account;

  const fieldErrors: SignupState["fieldErrors"] = {};
  const nameError = checkDisplayName(displayName, lang);
  if (nameError) fieldErrors.displayName = nameError;
  if (!email.includes("@")) fieldErrors.email = t.notEmail;
  if (password.length < MIN_PASSWORD) {
    fieldErrors.password = t.useAtLeast(MIN_PASSWORD);
  }
  if (password !== confirmPassword) {
    fieldErrors.confirmPassword = t.mismatch;
  }
  if (Object.keys(fieldErrors).length) {
    return { error: null, fieldErrors, values };
  }

  const supabase = createClient(await cookies());
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // display_name fills in the profile (handle_new_user); signup_password is
      // checked by the before-user-created hook, then stripped from the metadata
      data: { display_name: displayName, signup_password: signupPassword },
      emailRedirectTo: await confirmUrl("/"),
    },
  });
  if (error?.code === "weak_password") {
    return {
      error: null,
      fieldErrors: { password: error.message },
      values,
    };
  }
  if (error?.message.includes("Wrong sign-up password")) {
    return {
      error: null,
      fieldErrors: { signupPassword: t.signup.wrongSignupPassword },
      values,
    };
  }
  if (error) return { error: error.message, values };

  // Email confirmation is on: no session until the link in the email is clicked
  if (!data.session) return { error: null, sentTo: email };

  revalidatePath("/", "layout");
  redirect("/");
}

export async function resendConfirmation(
  email: string,
): Promise<{ error: string | null }> {
  const supabase = createClient(await cookies());
  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
    options: { emailRedirectTo: await confirmUrl("/") },
  });
  return { error: error?.message ?? null };
}
