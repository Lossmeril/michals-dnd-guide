"use client";

import { toast } from "sonner";
import FileButton from "@/components/ui/fileButton";
import { useImageUpload } from "@/lib/hooks/useImageUpload";
import type { Campaign } from "@/lib/types/campaign";
import { uploadCampaignCover } from "./actions";
import { useDict } from "@/lib/i18n/client";

interface CoverUploadProps {
  campaignId: number;
  onUploaded: (campaign: Campaign) => void;
}

export const CoverUpload: React.FC<CoverUploadProps> = ({
  campaignId,
  onUploaded,
}) => {
  const t = useDict().campaigns;
  const { uploading, upload } = useImageUpload((fd) =>
    uploadCampaignCover(campaignId, fd),
  );

  return (
    <FileButton
      disabled={uploading}
      className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
      onFile={async (file) => {
        const campaign = await upload(file);
        if (campaign) {
          onUploaded(campaign);
          toast.success(t.coverUpdated);
        }
      }}
    >
      {uploading ? t.uploading : t.editCover}
    </FileButton>
  );
};
