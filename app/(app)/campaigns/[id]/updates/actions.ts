"use server";

import { cookies } from "next/headers";
import { requireUser } from "@/lib/auth";
import { fileFrom, toResult } from "@/lib/result";
import { uploadImage } from "@/lib/uploadImage";
import { createClient } from "@/utils/supabase/server";

/**
 * A picture for a campaign update, stored under <campaign id>/updates/.
 * Storage policies let only the campaign's DM and players upload there.
 */
export async function uploadUpdateImage(campaignId: number, formData: FormData) {
  await requireUser();
  return toResult(async () => {
    const supabase = createClient(await cookies());
    const { publicUrl } = await uploadImage(
      supabase,
      "campaigns",
      fileFrom(formData),
      `${campaignId}/updates`,
    );
    return publicUrl;
  });
}
