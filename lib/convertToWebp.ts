// Browser-only: re-encodes an image as WebP, scaling it down so neither
// side exceeds maxDimension. Call from client components before uploading.

/** How much transparent padding to cut away before encoding */
export type Trim = false | "tight" | "square";

type Box = { x: number; y: number; width: number; height: number };

/** Pixels at or below this alpha count as empty (faint halos, stray specks) */
const EMPTY_ALPHA = 8;

/**
 * The smallest box holding every visible pixel, or null when the whole
 * image is empty. "square" grows the box's short side round the content.
 */
const contentBox = (bitmap: ImageBitmap, trim: "tight" | "square"): Box | null => {
  const { width, height } = bitmap;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(bitmap, 0, 0);
  const { data } = ctx.getImageData(0, 0, width, height);

  let top = height, left = width, right = -1, bottom = -1;
  for (let y = 0; y < height; y++) {
    const row = y * width * 4;
    for (let x = 0; x < width; x++) {
      if (data[row + x * 4 + 3] <= EMPTY_ALPHA) continue;
      if (x < left) left = x;
      if (x > right) right = x;
      if (y < top) top = y;
      if (y > bottom) bottom = y;
    }
  }
  if (right < 0) return null;

  const box = { x: left, y: top, width: right - left + 1, height: bottom - top + 1 };
  if (trim === "tight") return box;

  // Centre the content in a square; the box may reach past the image's
  // edges, and that part stays transparent.
  const side = Math.max(box.width, box.height);
  return {
    x: box.x - Math.floor((side - box.width) / 2),
    y: box.y - Math.floor((side - box.height) / 2),
    width: side,
    height: side,
  };
};

export const convertToWebp = async (
  file: File,
  {
    maxDimension = 1024,
    quality = 0.85,
    trim = false as Trim,
  } = {},
): Promise<File> => {
  // A canvas keeps only the first frame, so a GIF would stop moving.
  // Upload it as it is; the size check still applies.
  if (file.type === "image/gif") return file;

  const bitmap = await createImageBitmap(file);
  const source: Box = (trim && contentBox(bitmap, trim)) || {
    x: 0,
    y: 0,
    width: bitmap.width,
    height: bitmap.height,
  };
  const scale = Math.min(1, maxDimension / Math.max(source.width, source.height));
  const width = Math.round(source.width * scale);
  const height = Math.round(source.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  // Draw the whole bitmap shifted, so a square box past the edges works too
  canvas
    .getContext("2d")!
    .drawImage(bitmap, -source.x * scale, -source.y * scale, bitmap.width * scale, bitmap.height * scale);
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
