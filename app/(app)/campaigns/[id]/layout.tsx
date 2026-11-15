import SidebarNav from "@/components/layout/sidebarNav";
import { fetchCampaign } from "@/lib/endpoints/campaigns";
import CampaignCrumbs from "./campaignCrumbs";
import { getDict } from "@/lib/i18n/server";

const CampaignLayout = async ({
  children,
  params,
}: LayoutProps<"/campaigns/[id]">) => {
  const { id } = await params;
  const [campaign, dict] = await Promise.all([fetchCampaign(Number(id)), getDict()]);
  const t = dict.campaigns;

  return (
    <>
      <CampaignCrumbs id={id} name={campaign?.name || t.unnamed} />
      <div className="flex gap-10">
        <SidebarNav
          items={[
            { label: t.overview, href: `/campaigns/${id}` },
            { label: t.updates, href: `/campaigns/${id}/updates` },
          ]}
        />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </>
  );
};

export default CampaignLayout;
