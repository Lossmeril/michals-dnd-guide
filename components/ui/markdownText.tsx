// Renders user-written Markdown (campaign updates and the like). Raw HTML in
// the text is ignored, so a post can't inject scripts or styles.

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
        a: ({ href, children }) => (
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
