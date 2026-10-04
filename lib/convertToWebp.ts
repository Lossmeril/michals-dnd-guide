// Browser-only: re-encodes an image as WebP, scaling it down so neither
// side exceeds maxDimension. Call from client components before uploading.
export const convertToWebp = async (
  file: File,
  { maxDimension = 1024, quality = 0.85 } = {},
): Promise<File> => {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/webp", quality),
  );

  // Browsers that can't encode WebP silently fall back to PNG,
  // which is usually bigger than the original — keep the original then.
  if (!blob || blob.type !== "image/webp") return file;

  const name = file.name.replace(/\.[^.]+$/, "") + ".webp";
  return new File([blob], name, { type: "image/webp" });
};
