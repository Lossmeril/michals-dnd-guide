import { redirect } from "next/navigation";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Heading } from "@/components/ui/typography";
import { canRunCampaigns, requireUser } from "@/lib/auth";
import { NewCampaignForm } from "./newCampaignForm";

const NewCampaignPage = async () => {
  await requireUser();
  if (!(await canRunCampaigns())) redirect("/campaigns");

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Campaigns", href: "/campaigns" }, { label: "New" }]}
      />
      <Heading level={1}>New campaign</Heading>
      <p className="mb-6 text-sm">
        You&apos;ll be its DM. Add a cover and characters once it exists.
      </p>
      <NewCampaignForm />
    </>
  );
};

export default NewCampaignPage;
