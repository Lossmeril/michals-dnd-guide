// Building blocks of rulebook pages, shared by the Markdown renderer and the
// pages still written in code (a class's page)

import { twMerge } from "tailwind-merge";
import { Portrait } from "@/components/ui/mediaObject";
import { panelClass } from "@/components/ui/panel";

/** A rule clarification or an edge case */
export const Note: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <aside className="flow-root my-6 p-4 border-l-4 border-dnd-gold bg-dnd-accent-yellow/70 rounded-r-lg">
    {title && <p className="font-bold libre text-dnd-red-dark mb-1">{title}</p>}
    <div className="text-sm flex flex-col gap-2">{children}</div>
  </aside>
);

/** A formula or a roll, set apart */
export const Formula: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="flow-root my-4 px-4 py-3 bg-dnd-bg border border-dnd-gold rounded-lg libre font-bold text-center text-dnd-red-dark">
    {children}
  </p>
);

export type ImageLayout = "header" | "side" | "left" | "inline";

/**
 * A picture in the text:
 * - header: a wide banner, cropped
 * - side / left: floats beside the text on wider screens
 * - inline: the whole picture, full width
 */
export const RuleImage: React.FC<{
  src: string;
  alt?: string;
  layout?: ImageLayout;
  caption?: string;
}> = ({ src, alt = "", layout = "inline", caption }) => {
  const float = layout === "side" || layout === "left";
  return (
    <figure
      className={twMerge(
        "my-6",
        layout === "side" && "sm:float-right sm:w-1/3 sm:ml-6 sm:mt-1",
        layout === "left" && "sm:float-left sm:w-1/3 sm:mr-6 sm:mt-1",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={twMerge(
          "w-full rounded-lg border border-dnd-gold shadow-md",
          layout === "header" && "h-56 object-cover",
          float && "aspect-[3/4] object-cover object-top",
        )}
      />
      {caption && (
        <figcaption className="mt-2 text-xs italic text-dnd-ink/70 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/** A titled card, e.g. one condition; several sit in a grid */
export const RuleCard: React.FC<{
  title?: string;
  subtitle?: string;
  image?: string;
  id?: string;
  /** Picture on top instead of beside the text, for narrow columns */
  stacked?: boolean;
  children: React.ReactNode;
}> = ({ title, subtitle, image, id, stacked, children }) => (
  <div
    id={id}
    className={twMerge(
      panelClass,
      "flex flex-col gap-4 p-4 shadow-sm scroll-mt-8",
      !stacked && "sm:flex-row",
    )}
  >
    {image && (
      <Portrait src={image} className={stacked ? "aspect-[4/3] rounded" : "sm:w-32 rounded"} />
    )}
    <div className="min-w-0">
      {title && <p className="libre font-bold text-dnd-red text-lg">{title}</p>}
      {subtitle && (
        <p className="text-xs font-bold text-dnd-ink/70 mb-1">{subtitle}</p>
      )}
      <div className="text-sm flex flex-col gap-2">{children}</div>
    </div>
  </div>
);
