import { notFound } from "next/navigation";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { localizeDeep } from "@/lib/i18n/localize";
import { getLang } from "@/lib/i18n/server";
import BackgroundEditor from "./backgroundEditor";

const AdminBackgroundPage = async ({
  params,
}: PageProps<"/admin/backgrounds/[id]">) => {
  const { id } = await params;
  const rb = await fetchRulebook(true);
  const background = rb.backgrounds.find((b) => b.id === id);
  if (id !== "new" && !background) notFound();

  return (
    <BackgroundEditor
      background={background ?? null}
      // Only shown here, so in the admin's language
      items={localizeDeep(rb.items, await getLang())}
      nextSort={rb.backgrounds.length}
    />
  );
};

export default AdminBackgroundPage;
