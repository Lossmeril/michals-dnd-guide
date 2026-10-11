"use client";

import { useState } from "react";

interface UpdateComposerProps {
  onPost: (body: string) => Promise<boolean>;
}

export const UpdateComposer: React.FC<UpdateComposerProps> = ({ onPost }) => {
  const [body, setBody] = useState("");
  const [posting, setPosting] = useState(false);

  const post = async () => {
    setPosting(true);
    if (await onPost(body.trim())) setBody("");
    setPosting(false);
  };

  return (
    <div className="flex flex-col items-end gap-2 mb-10">
      <textarea
        rows={3}
        value={body}
        placeholder="Share an update with the party…"
        disabled={posting}
        onChange={(e) => setBody(e.target.value)}
        className="w-full"
      />
      <button
        type="button"
        onClick={post}
        disabled={posting || !body.trim()}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {posting ? "Posting…" : "Post update"}
      </button>
    </div>
  );
};
