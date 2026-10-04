"use client";

import { uploadAvatar } from "./actions";
import { toast } from "sonner";
import { convertToWebp } from "@/lib/convertToWebp";

export const AvatarUpload = () => (
  <label className="absolute inset-0 flex items-center justify-center cursor-pointer text-white">
    Upload picture
    <input
      type="file"
      accept="image/*"
      hidden
      onChange={async (e) => {
        const original = e.target.files?.[0];
        if (!original) return;

        let file: File;
        try {
          file = await convertToWebp(original, { maxDimension: 512 });
        } catch {
          toast.error("Couldn't read that image.");
          return;
        }
        if (file.size > 2 * 1024 * 1024) {
          toast.error("Image must be smaller than 2MB.");
          return;
        }

        const fd = new FormData();
        fd.append("file", file);
        const { error } = await uploadAvatar(fd);
        if (error) toast.error(error);
        else toast.success("Avatar updated");
      }}
    />
  </label>
);
