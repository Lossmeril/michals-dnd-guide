// Renders user-written Markdown (campaign updates and the like). Raw HTML in
// the text is ignored, so a post can't inject scripts or styles.

import { FaPaperclip } from "react-icons/fa6";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { twMerge } from "tailwind-merge";

const MarkdownText: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <div className={twMerge("rich-text", className)}>
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) =>
          // A file attached to a campaign update
          href?.includes("/storage/v1/object/public/campaign-files/") ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-dnd-gold bg-dnd-bg text-dnd-red no-underline hover:bg-dnd-gold/20"
            >
              <FaPaperclip className="shrink-0" />
              {children}
            </a>
          ) : (
            <a href={href} className="link" target="_blank" rel="noopener noreferrer nofollow">
              {children}
            </a>
          ),
        img: ({ src, alt }) =>
          typeof src === "string" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt ?? ""} loading="lazy" />
          ) : null,
      }}
    >
      {text}
    </Markdown>
  </div>
);

export default MarkdownText;
