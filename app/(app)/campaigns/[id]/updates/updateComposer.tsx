"use client";

import { useState } from "react";
import RichTextEditor from "@/components/ui/richTextEditor";
import { useImageUpload } from "@/lib/hooks/useImageUpload";
import { uploadUpdateImage } from "./actions";

interface UpdateComposerProps {
  campaignId: number;
  /** Gets the post as Markdown; true once it's saved */
  onPost: (body: string) => Promise<boolean>;
}

export const UpdateComposer: React.FC<UpdateComposerProps> = ({
  campaignId,
  onPost,
}) => {
  const [body, setBody] = useState("");
  const [posting, setPosting] = useState(false);
  // Bumped after posting, so the editor starts empty again
  const [editorKey, setEditorKey] = useState(0);
  const { upload } = useImageUpload((fd) => uploadUpdateImage(campaignId, fd));

  const post = async () => {
    setPosting(true);
    if (await onPost(body.trim())) {
      setBody("");
      setEditorKey((k) => k + 1);
    }
    setPosting(false);
  };

  return (
    <div className="flex flex-col items-end gap-2 mb-10">
      <RichTextEditor
        key={editorKey}
        onChange={setBody}
        placeholder="Share an update with the party…"
        disabled={posting}
        onUploadImage={upload}
        className="w-full"
      />
      <button type="button" onClick={post} disabled={posting || !body.trim()}>
        {posting ? "Posting…" : "Post update"}
      </button>
    </div>
  );
};
