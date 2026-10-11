"use client";

import { use, useEffect, useState } from "react";
import { toast } from "sonner";
import { Heading, SkeletonInlineText } from "@/components/ui/typography";
import {
  createCampaign_Update,
  deleteCampaign_Update,
} from "@/lib/endpoints/campaign_updates";
import {
  CampaignUpdates,
  fetchCampaignUpdates,
} from "@/lib/specialFecthers/campaignUpdates";
import { UpdateComposer } from "./updateComposer";
import { UpdatePost } from "./updatePost";

const CampaignUpdatesPage = ({
  params,
}: PageProps<"/campaigns/[id]/updates">) => {
  const campaignId = Number(use(params).id);

  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState<CampaignUpdates | null>(null);
  // Bumped to refetch after posting or deleting
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const loadUpdates = async () => {
      try {
        setFeed(await fetchCampaignUpdates(campaignId));
      } catch (error) {
        console.error("Error fetching updates:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUpdates();
  }, [campaignId, version]);

  // Database policies decide who may post and delete; errors land here
  const post = async (body: string) => {
    try {
      await createCampaign_Update({ campaign_id: campaignId, body });
      setVersion((v) => v + 1);
      return true;
    } catch {
      toast.error("Couldn't post the update.");
      return false;
    }
  };

  const remove = async (id: number) => {
    try {
      await deleteCampaign_Update(id);
      setVersion((v) => v + 1);
    } catch {
      toast.error("Couldn't delete the update.");
    }
  };

  return (
    <>
      <Heading level={1}>Campaign updates</Heading>
      <UpdateComposer onPost={post} />

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
