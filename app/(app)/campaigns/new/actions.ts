"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { canRunCampaigns, requireUser } from "@/lib/auth";
import { createCampaign } from "@/lib/endpoints/campaigns";
import { getDict } from "@/lib/i18n/server";

export type NewCampaignState = { error: string | null; name?: string; description?: string };

/** Creates a campaign with the current user as its DM, then opens it */
export async function newCampaign(
  _prev: NewCampaignState,
  formData: FormData,
): Promise<NewCampaignState> {
  const user = await requireUser();
  const t = (await getDict()).campaigns.errors;
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  if (!(await canRunCampaigns())) {
    return { error: t.onlyDms, name, description };
  }
  if (!name) return { error: t.nameIt, name, description };

  let id: number;
  try {
    ({ id } = await createCampaign({
      name,
      description: description || null,
      dm: user.id,
    }));
  } catch (e) {
    return { error: (e as Error).message, name, description };
  }

  revalidatePath("/campaigns");
  redirect(`/campaigns/${id}`);
}
