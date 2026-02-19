// =============================================================================
// Storage Image Utilities
// -----------------------------------------------------------------------------
// Centralized helpers for handling image uploads to Supabase Storage.
// - Defines allowed storage buckets
// - Normalizes image file extensions
// - Uploads images using a canonical entity-based path
//
// =============================================================================

import { toast } from "@/components/ui/toast";
import type { SupabaseClient } from "@supabase/supabase-js";

// -------------------------------------
// Bucket Definitions
// -------------------------------------

export const SUPABASE_BUCKETS = [
  "characters",
  "rulebook/classes",
  "rulebook/races",
  "avatars",
] as const;

export type SupabaseBucket = (typeof SUPABASE_BUCKETS)[number];

// -------------------------------------
// File Extension Normalization
// -------------------------------------

// 1. Prefer MIME type (more reliable than file name).
// 2. Fallback to sanitized filename extension.
// 3. Default to "png" if nothing valid is detected.

function safeImageExt(file: File): string {
  const mime = file.type.toLowerCase();

  if (mime === "image/png") return "png";
  if (mime === "image/jpeg") return "jpg";
  if (mime === "image/webp") return "webp";
  if (mime === "image/gif") return "gif";

  const parts = file.name.split(".");
  const ext = parts.length > 1 ? parts.pop()?.toLowerCase() : undefined;

  return ext && ext.length <= 5 ? ext : "png";
}

// -------------------------------------
// Image Upload (Canonical Path Strategy)
// -------------------------------------

// Uploads an image to a bucket using a canonical per-entity path.
//
// Path Strategy:
//   `${entityId}/image.<ext>`
//
// This guarantees:
// - One image per entity per bucket
// - Predictable path structure
// - Future extensibility (additional files can live under entityId/)
//
// Returns both:
// - `path` → should be stored in the database
// - `publicUrl` → can be used immediately for preview rendering
//

export async function uploadImagePath(
  supabase: SupabaseClient,
  bucket: SupabaseBucket,
  file: File,
  entityId: string,
): Promise<{ path: string; publicUrl: string }> {
  const ext = safeImageExt(file);
  const path = `${entityId}/image.${ext}`;

  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    upsert: true, // Overwrites existing image for this entity
    contentType: file.type || undefined,
  });

  if (error) {
    toast({
      title: "Image Upload Failed",
      description:
        error.message ?? "An unknown error occurred during image upload.",
      mode: "error",
    });
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);

  return {
    path,
    publicUrl: data.publicUrl,
  };
}

// lib/storage/images.ts

const CANONICAL_IMAGE_EXTS = ["png", "jpg", "webp", "gif"] as const;

export async function deleteImagePath(
  supabase: SupabaseClient,
  bucket: SupabaseBucket,
  entityId: string,
): Promise<void> {
  const paths = CANONICAL_IMAGE_EXTS.map((ext) => `${entityId}/image.${ext}`);

  const { error } = await supabase.storage.from(bucket).remove(paths);
  if (error) throw error;
}
