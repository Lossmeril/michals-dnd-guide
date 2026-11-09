import SidebarNav from "@/components/layout/sidebarNav";
import { fetchCampaign } from "@/lib/endpoints/campaigns";
import CampaignCrumbs from "./campaignCrumbs";

const CampaignLayout = async ({
  children,
  params,
}: LayoutProps<"/campaigns/[id]">) => {
  const { id } = await params;
  const campaign = await fetchCampaign(Number(id));

  return (
    <>
      <CampaignCrumbs id={id} name={campaign?.name || "Unnamed campaign"} />
      <div className="flex gap-10">
        <SidebarNav
          items={[
            { label: "Overview", href: `/campaigns/${id}` },
            { label: "Updates", href: `/campaigns/${id}/updates` },
          ]}
        />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </>
  );
};

export default CampaignLayout;
