"use client";

import { usePathname } from "next/navigation";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { useDict } from "@/lib/i18n/client";

/** Home › Campaigns › Name, plus › Updates on the updates page */
const CampaignCrumbs: React.FC<{ id: string; name: string }> = ({
  id,
  name,
}) => {
  const t = useDict().campaigns;
  const base = `/campaigns/${id}`;
  const onUpdates = usePathname() === `${base}/updates`;

  return (
    <Breadcrumbs
      items={[
        { label: t.campaigns, href: "/campaigns" },
        { label: name, href: base },
        ...(onUpdates ? [{ label: t.updates }] : []),
      ]}
    />
  );
};

export default CampaignCrumbs;
