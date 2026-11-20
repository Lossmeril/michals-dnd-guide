// Building blocks of rulebook pages, shared by the Markdown renderer and the
// pages still written in code (a class's page)

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { classIdOf } from "@/lib/rules/classNames";
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

/** The video id of a YouTube link (watch, youtu.be, shorts, embed), or null */
export const youtubeId = (src: string) => {
  const m =
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/.exec(src);
  return m ? m[1] : null;
};

/** Seconds from a link's t= or start= ("90", "1m30s") */
const startOf = (src: string) => {
  const m = /[?&](?:t|start)=(?:(\d+)h)?(?:(\d+)m)?(\d+)?s?/.exec(src);
  if (!m) return 0;
  return (+(m[1] ?? 0)) * 3600 + (+(m[2] ?? 0)) * 60 + +(m[3] ?? 0);
};

/**
 * A video in a rulebook page: a YouTube link becomes an embedded player
 * (youtube-nocookie, so nothing is tracked until it plays); any other link is
 * played as a file, e.g. one uploaded to the videos bucket.
 */
export const RuleVideo: React.FC<{
  src: string;
  title?: string;
  caption?: string;
  width?: string | number;
  poster?: string;
}> = ({ src, title = "", caption, width, poster }) => {
  const id = youtubeId(src);
  const start = startOf(src);
  const w = cssLength(width);
  const frame = "w-full aspect-video rounded-lg border border-dnd-gold shadow-md bg-black";
  return (
    <figure className="my-6 clear-both mx-auto" style={w !== undefined ? { maxWidth: w } : undefined}>
      {id ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}${start ? `?start=${start}` : ""}`}
          title={title || caption || "YouTube"}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={frame}
        />
      ) : (
        <video src={src} poster={poster} controls preload="metadata" playsInline className={frame}>
          {title}
        </video>
      )}
      {caption && (
        <figcaption className="mt-2 text-xs italic text-dnd-ink/70 text-center">{caption}</figcaption>
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

/** Famous characters, three to a row on wide screens */
export const FamousGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="clear-both grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 my-6 items-stretch">
    {children}
  </div>
);

const initialsOf = (name = "") =>
  name
    .split(/\s+/)
    .filter((w) => /^\p{Lu}/u.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

/**
 * A famous character in a few lines: a small portrait (their initials until
 * a picture is uploaded), where they're from, and tags for the classes they
 * would be, each linking to its class page.
 */
export const FamousCharacter: React.FC<{
  name?: string;
  image?: string;
  from?: string;
  /** Class names, comma-separated: "Ranger, Shaman" */
  classes?: string;
  align?: string;
  children?: React.ReactNode;
}> = ({ name, image, from, classes, align, children }) => {
  // Commas inside brackets belong to the tag: "Scout (Ghost, Outrider)"
  const tags = (classes ?? "").split(/,(?![^(]*\))/).map((c) => c.trim()).filter(Boolean);
  return (
    <div className={twMerge(panelClass, "flex gap-3 p-3 shadow-sm")}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={name ?? ""}
          loading="lazy"
          className="w-16 sm:w-20 aspect-[3/4] self-start object-cover rounded-md border border-dnd-gold shrink-0"
          style={{ objectPosition: cropPosition(align) ?? "top" }}
        />
      ) : (
        <div
          aria-hidden
          className="w-16 sm:w-20 aspect-[3/4] self-start flex items-center justify-center rounded-md border border-dashed border-dnd-gold bg-dnd-accent-yellow/60 libre text-xl text-dnd-red-dark/70 shrink-0"
        >
          {initialsOf(name)}
        </div>
      )}
      <div className="min-w-0 flex flex-col gap-1">
        {name && <p className="libre font-bold text-dnd-red text-sm leading-tight">{name}</p>}
        {from && <p className="text-[0.7rem] italic text-dnd-ink/70 leading-tight">{from}</p>}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-0.5">
            {tags.map((tag) => {
              const id = classIdOf(tag);
              const cls =
                "px-2 py-px rounded-full border border-dnd-red/60 text-[0.7rem] font-bold text-dnd-red bg-dnd-bg";
              return id ? (
                <Link key={tag} href={`/rulebook/classes/${id}`} className={twMerge(cls, "hover:bg-dnd-red hover:text-white")}>
                  {tag}
                </Link>
              ) : (
                <span key={tag} className={cls}>
                  {tag}
                </span>
              );
            })}
          </div>
        )}
        {children && (
          <div className="text-xs leading-relaxed hyphens-auto flex flex-col gap-1 mt-1">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
