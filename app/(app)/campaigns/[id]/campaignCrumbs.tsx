"use client";

import { usePathname } from "next/navigation";
import Breadcrumbs from "@/components/ui/breadcrumbs";

/** Home › Campaigns › Name, plus › Updates on the updates page */
const CampaignCrumbs: React.FC<{ id: string; name: string }> = ({
  id,
  name,
}) => {
  const base = `/campaigns/${id}`;
  const onUpdates = usePathname() === `${base}/updates`;

  return (
    <Breadcrumbs
      items={[
        { label: "Campaigns", href: "/campaigns" },
        { label: name, href: base },
        ...(onUpdates ? [{ label: "Updates" }] : []),
      ]}
    />
  );
};

export default CampaignCrumbs;
