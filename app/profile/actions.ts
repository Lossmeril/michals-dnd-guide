"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { requireUser } from "@/lib/auth";
import { uploadImage } from "@/lib/uploadImage";

export async function uploadAvatar(formData: FormData) {
  const user = await requireUser();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) return { error: "No file" };

  const supabase = createClient(await cookies());
  try {
    const { publicUrl } = await uploadImage(
      supabase,
      "profiles",
      file,
      user.id,
    );
    await supabase
      .from("profiles")
      .update({ avatar_url: publicUrl })
      .eq("id", user.id);
    revalidatePath("/profile");
    return { error: null };
  } catch (e) {
    return { error: (e as Error).message };
  }
}
