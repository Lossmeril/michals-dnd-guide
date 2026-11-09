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
  const invalid = checkDisplayName(displayName);
  if (invalid) return { error: invalid };

  const supabase = createClient(await cookies());
  const { error } = await supabase
    .from("profiles")
    .update({ display_name: displayName })
    .eq("id", user.id);
  if (error) return { error: error.message };

  // The navbar shows the name on every page
  revalidatePath("/", "layout");
  return { error: null, message: "Saved." };
}

export async function changeEmail(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const user = await requireUser();
  const email = String(formData.get("email") ?? "").trim();
  if (!email.includes("@")) return { error: "That isn't an email address." };
  if (email === user.email) return { error: "That's your current email." };

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
    message: `We sent a confirmation link to ${email}. If a link also arrives at ${user.email}, confirm that one too.`,
  };
}

export async function changePassword(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireUser();
  const password = String(formData.get("password") ?? "");
  const invalid = checkPassword(
    password,
    String(formData.get("confirmPassword") ?? ""),
  );
  if (invalid) return { error: invalid };

  const supabase = createClient(await cookies());
  const { error } = await supabase.auth.updateUser({ password });
  if (error?.code === "same_password")
    return { error: "That's your current password." };
  if (error) return { error: error.message };
  return { error: null, message: "Password changed." };
}
