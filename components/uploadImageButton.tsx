import React from "react";

import { supabaseBrowser } from "@/lib/supabase/browser";
import type { SupabaseBucket } from "@/lib/storage/images";
import { deleteImagePath, uploadImagePath } from "@/lib/storage/images";
import { BsTrash3Fill } from "react-icons/bs";
import Button, {
  buttonBasicStyles,
  buttonInteractionStyles,
  buttonModeStyles,
} from "./ui/button";
import { throwErrorToast } from "./ui/toast";

interface UploadImageButtonProps {
  id: string;
  bucket?: SupabaseBucket;
  image: string | null;
  onChange: (patch: { image: string | null }) => void;

  // Optional error state to visually indicate upload issues
  setIsError?: (isError: boolean) => void;
}

export const UploadImageButton: React.FC<UploadImageButtonProps> = ({
  id,
  bucket = "characters",
  image,
  onChange,

  setIsError,
}) => {
  const inputId = `imgUpload-${bucket}-${id}`;

  return (
    <div className="flex flex-row items-center gap-2">
      <label
        htmlFor={inputId}
        className={[
          buttonBasicStyles,
          buttonInteractionStyles,
          buttonModeStyles.default,
        ].join(" ")}
      >
        {image ? "Change Image" : "Upload Image"}
      </label>

      <input
        id={inputId}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const input = e.currentTarget;
          const file = input.files?.[0];
          if (!file) return;

          if (!file.type.startsWith("image/")) {
            setIsError?.(true);
            throwErrorToast(
              new Error("Selected file is not an image."),
              "Invalid File Type",
            );
            input.value = "";
            return;
          }

          // Check file size (limit to 2MB)
          if (file.size > 2 * 1024 * 1024) {
            setIsError?.(true);
            throwErrorToast(
              new Error("File size exceeds 2MB limit."),
              "File Too Large",
            );
            input.value = "";
            return;
          }

          try {
            setIsError?.(false);

            const { publicUrl } = await uploadImagePath(
              supabaseBrowser(),
              bucket,
              file,
              id,
            );

            // Bust cache for immediate UI refresh after upsert
            const bustedUrl = `${publicUrl}?v=${Date.now()}`;
            onChange({ image: bustedUrl });
          } catch (err) {
            console.error(err);
            setIsError?.(true);
            throwErrorToast(
              err instanceof Error ? err : "An unknown error occurred.",
              "Image Upload Failed",
            );
          } finally {
            // Always reset so the same file can be selected again
            input.value = "";
          }
        }}
      />

      <Button
        label={
          <span className="inline-flex items-center gap-2">
            <BsTrash3Fill className="text-base" /> Remove Image
          </span>
        }
        mode="inverted"
        onClick={async () => {
          await deleteImagePath(supabaseBrowser(), bucket, id);
          onChange({ image: null });
        }}
      />
    </div>
  );
};
