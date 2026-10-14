"use client";

import { toast } from "sonner";
import FileButton from "@/components/ui/fileButton";
import { useImageUpload } from "@/lib/hooks/useImageUpload";
import { uploadAvatar } from "./actions";

export const AvatarUpload = () => {
  const { uploading, upload } = useImageUpload(uploadAvatar, {
    maxDimension: 512,
  });

  return (
    <FileButton
      disabled={uploading}
      className="absolute inset-0 flex items-center justify-center rounded-none bg-transparent hover:bg-transparent text-white"
      onFile={async (file) => {
        if (await upload(file)) toast.success("Avatar updated");
      }}
    >
      {uploading ? "Uploading…" : "Upload picture"}
    </FileButton>
  );
};
