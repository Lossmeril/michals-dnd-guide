"use client";

import { toast } from "sonner";
import { DICTS } from "@/lib/i18n/dictionaries";
import { createClient } from "@/utils/supabase/client";

/** The campaign-files bucket's limit */
export const MAX_FILE_BYTES = 20 * 1024 * 1024;

/**
 * Uploads a file for a campaign update straight from the browser: files can
 * be bigger than a server action takes. Storage policies let only the
 * campaign's DM and players write there; the bucket refuses odd file types.
 * Returns the public URL, or null after showing a toast.
 */
export const uploadUpdateFile = async (campaignId: number, file: File) => {
  const t = DICTS[document.documentElement.lang === "cs" ? "cs" : "en"].upload;
  if (file.size > MAX_FILE_BYTES) {
    toast.error(t.fileTooBig(MAX_FILE_BYTES / 1024 / 1024));
    return null;
  }
  // Keep the name readable for downloads, but safe as a storage key
  const name =
    file.name.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^\w.-]+/g, "_") ||
    "file";
  const path = `${campaignId}/updates/${crypto.randomUUID()}/${name}`;
  const supabase = createClient();
  const { error } = await supabase.storage.from("campaign-files").upload(path, file, {
    contentType: file.type || "application/octet-stream",
    cacheControl: "86400",
  });
  if (error) {
    toast.error(t.fileFailed(error.message));
    return null;
  }
  return supabase.storage.from("campaign-files").getPublicUrl(path).data.publicUrl;
};
