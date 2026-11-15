import { redirect } from "next/navigation";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Heading } from "@/components/ui/typography";
import { canRunCampaigns, requireUser } from "@/lib/auth";
import { NewCampaignForm } from "./newCampaignForm";
import { getDict } from "@/lib/i18n/server";

const NewCampaignPage = async () => {
  await requireUser();
  if (!(await canRunCampaigns())) redirect("/campaigns");
  const t = (await getDict()).campaigns;

  return (
    <>
      <Breadcrumbs
        items={[{ label: t.campaigns, href: "/campaigns" }, { label: t.newCrumb }]}
      />
      <Heading level={1}>{t.newCampaign}</Heading>
      <p className="mb-6 text-sm">
        {t.youllDm}
      </p>
      <NewCampaignForm />
    </>
  );
};

export default NewCampaignPage;
