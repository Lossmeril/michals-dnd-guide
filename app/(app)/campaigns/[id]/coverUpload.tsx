"use client";

import { useState } from "react";
import { toast } from "sonner";
import { convertToWebp } from "@/lib/convertToWebp";
import type { Campaign } from "@/lib/types/campaign";
import { uploadCampaignCover } from "./actions";

interface CoverUploadProps {
  campaignId: number;
  onUploaded: (campaign: Campaign) => void;
}

export const CoverUpload: React.FC<CoverUploadProps> = ({
  campaignId,
  onUploaded,
}) => {
  const [uploading, setUploading] = useState(false);

  return (
    <label className="button bg-black/50 hover:bg-black/70 backdrop-blur-sm">
      {uploading ? "Uploading…" : "Edit cover"}
      <input
        type="file"
        accept="image/*"
        hidden
        disabled={uploading}
        onChange={async (e) => {
          const original = e.target.files?.[0];
          if (!original) return;

          let file: File;
          try {
            file = await convertToWebp(original, { maxDimension: 1600 });
          } catch {
            toast.error("Couldn't read that image.");
            return;
          }
          if (file.size > 2 * 1024 * 1024) {
            toast.error("Image must be smaller than 2MB.");
            return;
          }

          setUploading(true);
          const fd = new FormData();
          fd.append("file", file);
          const { data, error } = await uploadCampaignCover(campaignId, fd);
          setUploading(false);

          if (error !== null) toast.error(error);
          else {
            onUploaded(data);
            toast.success("Cover updated");
          }
        }}
      />
    </label>
  );
};
