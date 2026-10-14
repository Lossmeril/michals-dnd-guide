"use client";

import { use } from "react";
import { toast } from "sonner";
import { Heading, SkeletonInlineText } from "@/components/ui/typography";
import {
  createCampaign_Update,
  deleteCampaign_Update,
} from "@/lib/endpoints/campaign_updates";
import { useLoad } from "@/lib/hooks/useLoad";
import { fetchCampaignUpdates } from "@/lib/specialFecthers/campaignUpdates";
import { UpdateComposer } from "./updateComposer";
import { UpdatePost } from "./updatePost";

const CampaignUpdatesPage = ({
  params,
}: PageProps<"/campaigns/[id]/updates">) => {
  const campaignId = Number(use(params).id);

  const {
    data: feed,
    loading,
    reload,
  } = useLoad(() => fetchCampaignUpdates(campaignId), [campaignId]);

  // Database policies decide who may post and delete; errors land here
  const post = async (body: string) => {
    try {
      await createCampaign_Update({ campaign_id: campaignId, body });
      reload();
      return true;
    } catch {
      toast.error("Couldn't post the update.");
      return false;
    }
  };

  const remove = async (id: number) => {
    try {
      await deleteCampaign_Update(id);
      reload();
    } catch {
      toast.error("Couldn't delete the update.");
    }
  };

  return (
    <>
      <Heading level={1}>Campaign updates</Heading>
      <UpdateComposer campaignId={campaignId} onPost={post} />

      {loading ? (
        <SkeletonInlineText width="w-full" height="h-16" />
      ) : !feed || feed.posts.length === 0 ? (
        <p>No updates yet.</p>
      ) : (
        feed.posts.map(({ update, author }) => (
          <UpdatePost
            key={update.id}
            update={update}
            author={author}
            byDm={update.author === feed.dmId}
            onDelete={
              feed.isDm || update.author === feed.userId
                ? () => remove(update.id)
                : undefined
            }
          />
        ))
      )}
    </>
  );
};

export default CampaignUpdatesPage;
