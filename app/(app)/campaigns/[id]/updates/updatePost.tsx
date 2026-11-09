import { Avatar } from "@/components/ui/avatar";
import Eyebrow from "@/components/ui/eyebrow";
import MarkdownText from "@/components/ui/markdownText";
import type { Campaign_Update } from "@/lib/types/campaign_update";
import type { Profile } from "@/lib/types/profile";

interface UpdatePostProps {
  update: Campaign_Update;
  author: Profile | null;
  byDm: boolean;
  onDelete?: () => void;
}

export const UpdatePost: React.FC<UpdatePostProps> = ({
  update,
  author,
  byDm,
  onDelete,
}) => {
  const name = author?.display_name || "Unknown";

  return (
    <article className="flex gap-4 py-6 border-b border-dnd-gold/50">
      <Avatar name={name} imgSrc={author?.avatar_url || undefined} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-dnd-red">{name}</span>
          {byDm && <Eyebrow text="DM" color="red" />}
          <time className="text-xs text-dnd-ink/50">
            {new Date(update.created_at).toLocaleString()}
          </time>
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="ml-auto bg-transparent text-xs text-dnd-ink/50 hover:bg-transparent hover:text-dnd-red px-0 py-0"
            >
              Delete
            </button>
          )}
        </div>
        <MarkdownText text={update.body} />
      </div>
    </article>
  );
};
