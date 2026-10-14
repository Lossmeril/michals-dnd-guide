// Building blocks of rulebook pages, shared by the Markdown renderer and the
// pages still written in code (a class's page)

import { twMerge } from "tailwind-merge";

export const RESOURCES = {
  body: { name: "Body", color: "text-body" },
  soul: { name: "Soul", color: "text-soul" },
  charisma: { name: "Charisma", color: "text-charisma" },
  coins: { name: "Coins", color: "text-[#9a7d1a]" },
  material: { name: "Material", color: "text-dnd-ink" },
};

export type ResourceKey = keyof typeof RESOURCES;

/** A resource's name in its colour, e.g. <Res r="body" /> */
export const Res: React.FC<{ r: ResourceKey; children?: React.ReactNode }> = ({
  r,
  children,
}) => (
  <strong className={RESOURCES[r].color}>{children ?? RESOURCES[r].name}</strong>
);

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

export const tableClasses = {
  wrap: "my-6 overflow-x-auto",
  table: "w-full text-sm bg-dnd-bg border border-dnd-gold rounded-lg",
  headRow: "text-left border-b-2 border-dnd-gold",
  th: "px-3 py-2 libre font-bold text-dnd-red-dark",
  row: "border-b border-dnd-gold/40 last:border-b-0 align-top",
  td: "px-3 py-2",
};

export const RuleTable: React.FC<{
  head: React.ReactNode[];
  rows: React.ReactNode[][];
  className?: string;
}> = ({ head, rows, className }) => (
  <div className={twMerge(tableClasses.wrap, className)}>
    <table className={tableClasses.table}>
      <thead>
        <tr className={tableClasses.headRow}>
          {head.map((h, i) => (
            <th key={i} className={tableClasses.th}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={tableClasses.row}>
            {row.map((cell, j) => (
              <td key={j} className={tableClasses.td}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
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
  children: React.ReactNode;
}> = ({ title, subtitle, image, id, children }) => (
  <div
    id={id}
    className="flex flex-col sm:flex-row gap-4 p-4 bg-dnd-bg border border-dnd-gold rounded-lg shadow-sm scroll-mt-8"
  >
    {image && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt=""
        className="w-full sm:w-32 aspect-[3/4] object-cover object-top rounded border border-dnd-gold shrink-0"
      />
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
