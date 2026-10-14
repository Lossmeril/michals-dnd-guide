import { IMG_DEFAULTS } from "@/data/constants";
import type { Tables } from "@/lib/types/database.types";

/** A campaign's cover, or the default picture greyed out when it has none */
export const campaignCover = (campaign: Pick<Tables<"campaigns">, "image_url">) => {
  const hasCover = !!campaign.image_url?.trim();
  return {
    src: hasCover ? campaign.image_url! : IMG_DEFAULTS.campaign_image,
    className: hasCover ? "" : "grayscale opacity-50",
  };
};
