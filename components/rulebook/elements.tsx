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

/** "300" means 300px; "50%", "20rem" and the like pass through; anything else is ignored */
const cssLength = (raw?: string | number) => {
  const value = raw == null ? "" : String(raw).trim();
  if (/^\d+(\.\d+)?$/.test(value)) return `${value}px`;
  return /^\d+(\.\d+)?(px|%|rem|em|vw|vh)$/.test(value) ? value : undefined;
};

export type ImageLayout = "header" | "side" | "left" | "inline";

const POSITION_WORD = /^(top|bottom|left|right|center)$/;
const PERCENT = /^\d+(\.\d+)?%?$/;
const percent = (v: string) => (v.endsWith("%") ? v : `${v}%`);

/**
 * Which part of a cropped picture shows: "top", "bottom left", "30%" (from
 * the top, since banners crop top and bottom) or "20% 70%" (across, down).
 * Anything else is ignored.
 */
const cropPosition = (raw?: string) => {
  const parts = (raw ?? "").trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (parts.length === 0 || parts.length > 2) return undefined;
  if (parts.every((p) => POSITION_WORD.test(p))) return parts.join(" ");
  if (parts.every((p) => PERCENT.test(p)))
    return parts.length === 1 ? `center ${percent(parts[0])}` : parts.map(percent).join(" ");
  return undefined;
};

/**
 * A picture in the text:
 * - header: a wide banner, cropped; align picks the part that shows
 * - side / left: floats beside the text on wider screens, cropped the same way
 * - inline: the whole picture, full width; or sized by width and/or height
 *   (one keeps the picture's ratio, both crop it to fill), aligned left,
 *   center or right
 */
export const RuleImage: React.FC<{
  src: string;
  alt?: string;
  layout?: ImageLayout;
  caption?: string;
  width?: string | number;
  height?: string | number;
  align?: string;
}> = ({ src, alt = "", layout = "inline", caption, width, height, align }) => {
  const float = layout === "side" || layout === "left";
  const w = layout === "inline" ? cssLength(width) : undefined;
  const h = layout === "inline" ? cssLength(height) : undefined;
  const sized = w !== undefined || h !== undefined;
  // Banners and side pictures are cropped, so align picks what stays in view
  const crop = layout === "header" || float ? cropPosition(align) : undefined;
  const style = {
    ...(sized && { width: w ?? "auto", height: h ?? "auto" }),
    ...(crop && { objectPosition: crop }),
  };
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
        style={sized || crop ? style : undefined}
        className={twMerge(
          "w-full rounded-lg border border-dnd-gold shadow-md",
          layout === "header" && "h-56 object-cover",
          float && "aspect-[3/4] object-cover object-top",
          sized && "max-w-full object-cover",
          sized && (align === "left" ? "mr-auto" : align === "right" ? "ml-auto" : "mx-auto"),
        )}
      />
      {caption && (
        <figcaption
          className={twMerge(
            "mt-2 text-xs italic text-dnd-ink/70 text-center",
            sized && align === "left" && "text-left",
            sized && align === "right" && "text-right",
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * A titled card, e.g. one condition; several sit in a grid. The picture is
 * the card's header, and the text is small so narrow columns still read well.
 */
export const RuleCard: React.FC<{
  title?: string;
  subtitle?: string;
  image?: string;
  id?: string;
  children: React.ReactNode;
}> = ({ title, subtitle, image, id, children }) => (
  <div
    id={id}
    className={twMerge(
      panelClass,
      "flex flex-col h-full p-0 overflow-hidden shadow-sm scroll-mt-8",
    )}
  >
    {image && (
      <Portrait src={image} className="aspect-[4/3] max-h-60 rounded-none border-0 border-b" />
    )}
    <div className="min-w-0 p-4">
      {title && <p className="libre font-bold text-dnd-red text-base">{title}</p>}
      {subtitle && (
        <p className="text-xs font-bold text-dnd-ink/70 mb-1">{subtitle}</p>
      )}
      <div className="text-xs leading-relaxed hyphens-auto flex flex-col gap-2">
        {children}
      </div>
    </div>
  </div>
);
