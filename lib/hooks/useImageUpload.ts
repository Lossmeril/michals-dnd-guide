"use client";

import { useState } from "react";
import { toast } from "sonner";
import { convertToWebp } from "@/lib/convertToWebp";
import type { Result } from "@/lib/result";

/** The storage buckets' size limit (every bucket, the admin ones too) */
export const MAX_IMAGE_BYTES = 2 * 1024 * 1024;

/**
 * Shrinks a picked image to WebP and checks its size. Shows a toast and
 * returns null when the image can't be used.
 */
export const prepareImage = async (
  original: File,
  { maxDimension = 1600, maxBytes = MAX_IMAGE_BYTES } = {},
) => {
  let file: File;
  try {
    file = await convertToWebp(original, { maxDimension });
  } catch {
    toast.error("Couldn't read that image.");
    return null;
  }
  if (file.size > maxBytes) {
    toast.error(`Image must be smaller than ${maxBytes / 1024 / 1024}MB.`);
    return null;
  }
  return file;
};

/**
 * Prepares a picked image and sends it to a server action as `file` in a
 * FormData. Errors become toasts; the action's data comes back, or null.
 */
export const useImageUpload = <T>(
  action: (formData: FormData) => Promise<Result<T>>,
  options?: Parameters<typeof prepareImage>[1],
) => {
  const [uploading, setUploading] = useState(false);

  const upload = async (original: File): Promise<T | null> => {
    setUploading(true);
    try {
      const file = await prepareImage(original, options);
      if (!file) return null;
      const formData = new FormData();
      formData.append("file", file);
      const { data, error } = await action(formData);
      if (error !== null) {
        toast.error(error);
        return null;
      }
      return data;
    } finally {
      setUploading(false);
    }
  };

  return { uploading, upload };
};
