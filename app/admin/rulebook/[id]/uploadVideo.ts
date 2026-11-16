"use client";

import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";

/** The videos bucket's limit, and what it accepts */
export const MAX_VIDEO_BYTES = 50 * 1024 * 1024;
const TYPES = ["video/mp4", "video/webm", "video/quicktime"];

/**
 * Uploads a video for a rulebook page straight from the browser: videos are
 * too big for a server action. Storage policies let only admins write to the
 * bucket. Returns the public URL, or null after showing a toast.
 */
export const uploadVideo = async (file: File) => {
  if (!TYPES.includes(file.type)) {
    toast.error("Upload an MP4, WebM or MOV video.");
    return null;
  }
  if (file.size > MAX_VIDEO_BYTES) {
    toast.error(`The video is over ${MAX_VIDEO_BYTES / 1024 / 1024} MB. Shorten or compress it, or put it on YouTube.`);
    return null;
  }
  const supabase = createClient();
  const ext = file.name.split(".").pop()?.toLowerCase() || "mp4";
  const path = `rulebook/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("videos").upload(path, file, {
    contentType: file.type,
    cacheControl: "86400",
  });
  if (error) {
    toast.error(`Upload failed: ${error.message}`);
    return null;
  }
  return supabase.storage.from("videos").getPublicUrl(path).data.publicUrl;
};
