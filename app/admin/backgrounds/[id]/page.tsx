import { notFound } from "next/navigation";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import BackgroundEditor from "./backgroundEditor";

const AdminBackgroundPage = async ({
  params,
}: PageProps<"/admin/backgrounds/[id]">) => {
  const { id } = await params;
  const rb = await fetchRulebook();
  const background = rb.backgrounds.find((b) => b.id === id);
  if (id !== "new" && !background) notFound();

  return (
    <BackgroundEditor
      background={background ?? null}
      nextSort={rb.backgrounds.length}
    />
  );
};

export default AdminBackgroundPage;
