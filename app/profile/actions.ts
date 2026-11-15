"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { requireUser } from "@/lib/auth";
import { checkDisplayName, checkPassword } from "@/lib/accountRules";
import { confirmUrl } from "@/lib/siteUrl";
import type { FormState } from "@/components/ui/form";
import { fileFrom, toResult } from "@/lib/result";
import { uploadImage } from "@/lib/uploadImage";
import { getLang } from "@/lib/i18n/server";
import { DICTS } from "@/lib/i18n/dictionaries";

export async function uploadAvatar(formData: FormData) {
  const user = await requireUser();
  return toResult(async () => {
    const supabase = createClient(await cookies());
    const { publicUrl } = await uploadImage(
      supabase,
      "profiles",
      fileFrom(formData),
      user.id,
    );
    await supabase
      .from("profiles")
      .update({ avatar_url: publicUrl })
      .eq("id", user.id);
    revalidatePath("/", "layout");
    return publicUrl;
  });
}

export async function updateDisplayName(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const user = await requireUser();
  const displayName = String(formData.get("displayName") ?? "").trim();
  const lang = await getLang();
  const invalid = checkDisplayName(displayName, lang);
  if (invalid) return { error: invalid };

  const supabase = createClient(await cookies());
  const { error } = await supabase
    .from("profiles")
    .update({ display_name: displayName })
    .eq("id", user.id);
  if (error) return { error: error.message };

  // The navbar shows the name on every page
  revalidatePath("/", "layout");
  return { error: null, message: DICTS[lang].account.profile.saved };
}

export async function changeEmail(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const user = await requireUser();
  const email = String(formData.get("email") ?? "").trim();
  const t = DICTS[await getLang()].account;
  if (!email.includes("@")) return { error: t.notEmail };
  if (email === user.email) return { error: t.profile.sameEmail };

  const supabase = createClient(await cookies());
  // Nothing changes until the link in the email is clicked
  const { error } = await supabase.auth.updateUser(
    { email },
    { emailRedirectTo: await confirmUrl("/profile?email=confirmed") },
  );
  if (error) return { error: error.message };

  revalidatePath("/profile");
  return {
    error: null,
    message: t.profile.emailSent(email, user.email ?? ""),
  };
}

export async function changePassword(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireUser();
  const password = String(formData.get("password") ?? "");
  const lang = await getLang();
  const invalid = checkPassword(
    password,
    String(formData.get("confirmPassword") ?? ""),
    lang,
  );
  if (invalid) return { error: invalid };

  const supabase = createClient(await cookies());
  const { error } = await supabase.auth.updateUser({ password });
  if (error?.code === "same_password")
    return { error: DICTS[lang].account.profile.samePassword };
  if (error) return { error: error.message };
  return { error: null, message: DICTS[lang].account.profile.passwordChanged };
}
