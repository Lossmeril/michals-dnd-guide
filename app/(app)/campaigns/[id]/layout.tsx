import SidebarNav from "@/components/layout/sidebarNav";

const CampaignLayout = async ({
  children,
  params,
}: LayoutProps<"/campaigns/[id]">) => {
  const { id } = await params;

  return (
    <div className="flex gap-10">
      <SidebarNav
        items={[
          { label: "Overview", href: `/campaigns/${id}` },
          { label: "Updates", href: `/campaigns/${id}/updates` },
        ]}
      />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
};

export default CampaignLayout;
