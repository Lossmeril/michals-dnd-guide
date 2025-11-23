import React from "react";

type HighlightDict = {
  [key: string]:
    | { type: "strong"; color?: string }
    | { type: "link"; url: string };
};

const highlights: HighlightDict = {
  fighter: { type: "link", url: "/classes/basic/fighter" },
  shaman: { type: "link", url: "/classes/advanced/shaman" },

  advantage: { type: "link", url: "/gameplay/manoeuvres#precise" },
};

export function highlightText(text: string): JSX.Element {
  const sortedKeys = Object.keys(highlights).sort(
    (a, b) => b.length - a.length
  ); // Sort by length to match longer phrases first
  const regex = new RegExp(
    `(${sortedKeys.map((key) => escapeRegExp(key)).join("|")})`,
    "gi"
  );

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const match = highlights[part.toLowerCase()];
        if (match) {
          if (match.type === "strong") {
            return (
              <strong
                key={index}
                style={{
                  color: match.color ? "var(--" + match.color + ")" : "",
                }}
              >
                {part.split("-s")[0]}
              </strong>
            );
          } else if (match.type === "link") {
            return (
              <a
                key={index}
                href={match.url}
                rel="noopener noreferrer"
                className="text-blue-200 underline decoration-dotted"
              >
                {part}
              </a>
            );
          }
        }
        return <span key={index}>{part}</span>; // Unmatched text
      })}
    </>
  );
}

// Utility to escape special regex characters in a string
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
