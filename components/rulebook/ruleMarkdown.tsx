// Renders a rulebook page's Markdown. Works on the server (the rulebook) and
// in the browser (the admin editor's preview).

import Link from "next/link";
import Markdown, { type Components } from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { DiceNotation, parseRoll, RolledDice } from "@/components/ui/dice";
import { twMerge } from "tailwind-merge";
import ExampleCard from "@/components/ui/exampleCard";
import { ResourceName, type ResourceKey } from "@/components/game/resources";
import StatBlock from "@/components/game/statBlock";
import StatBlockCard from "@/components/game/statBlocks";
import { isStatBlockKind, parseStatBlock } from "@/lib/rules/statBlocks";
import { tableClasses } from "@/components/ui/dataTable";
import { panelClass } from "@/components/ui/panel";
import { Overline } from "@/components/ui/typography";
import { hrefOf, slugify } from "@/lib/rulebookNav";
import {
  Formula,
  type ImageLayout,
  Note,
  RuleCard,
  RuleImage,
} from "./elements";
import remarkRulebook from "./remarkRulebook";

/** Fills a data shortcode like ::races; the page decides what goes there */
export type RenderBlock = (
  name: string,
  props: Record<string, string>,
) => React.ReactNode;

type P = Record<string, string | undefined> & { children?: React.ReactNode };

const num = (v: string | undefined) => (v ? Number(v) || 0 : 0);

/** A placeholder for data blocks the preview can't load */
const BlockPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <div className="clear-both my-6 p-4 border-2 border-dashed border-dnd-gold rounded-lg text-center text-sm text-dnd-ink/70">
    <strong>::{name}</strong> is filled in on the real page.
  </div>
);

/** Rulebook links are written as just the slug: [Scars](scars) */
const href = (to = "") => {
  if (/^([a-z]+:|\/|#)/i.test(to)) return to;
  const [slug, hash] = to.split("#");
  return hrefOf(slug) + (hash ? `#${hash}` : "");
};

type HastNode = { type: string; value?: string; children?: HastNode[] };
const hastText = (n?: HastNode): string =>
  n ? (n.value ?? (n.children ?? []).map(hastText).join("")) : "";

const resource = (r: ResourceKey) =>
  function Resource({ children }: P) {
    return <ResourceName r={r}>{children || undefined}</ResourceName>;
  };

const PLUGINS = [remarkGfm, remarkDirective, remarkRulebook];

const buildComponents = (renderBlock?: RenderBlock): Components => {
  const block = (name: string) =>
    function DataBlock(all: P & { node?: unknown }) {
      // The rest are the shortcode's attributes, e.g. rank="basic"
      const props = Object.fromEntries(
        Object.entries(all).filter(
          (e): e is [string, string] =>
            e[0] !== "children" && e[0] !== "node" && typeof e[1] === "string",
        ),
      );
      return (
        renderBlock?.(name, props) ?? (
          <BlockPlaceholder name={name} />
        )
      );
    };

  const custom: Record<string, React.FC<P>> = {
    "rb-body": resource("body"),
    "rb-soul": resource("soul"),
    "rb-charisma": resource("charisma"),
    "rb-coins": resource("coin"),
    "rb-material": resource("material"),
    "rb-dice": ({ notation }) => <DiceNotation text={notation ?? ""} />,
    "rb-roll": ({ roll }) => {
      const rolls = parseRoll(roll ?? "");
      return rolls ? (
        <RolledDice rolls={rolls} />
      ) : (
        <span className="text-dnd-red">:roll[{roll}]?</span>
      );
    },
    "rb-image": ({ src, alt, layout, caption }) =>
      src ? (
        <RuleImage
          src={src}
          alt={alt}
          layout={layout as ImageLayout}
          caption={caption}
        />
      ) : null,
    "rb-formula": ({ children }) => <Formula>{children}</Formula>,
    "rb-stat": ({ r, base, bonus, exhausted, scarred }) =>
      r === "body" || r === "soul" || r === "charisma" ? (
        <StatBlock
          resource={r}
          base={num(base)}
          bonus={num(bonus)}
          exhausted={num(exhausted)}
          scarred={num(scarred)}
        />
      ) : null,
    "rb-stats": ({ title, children }) => (
      <div
        className={`${panelClass} clear-both flex flex-col gap-2 my-6 p-4 shadow-none`}
      >
        {title && <Overline className="mb-0">{title}</Overline>}
        {children}
      </div>
    ),
    "rb-example": ({ title, image, side, eyebrow, stacked, children }) => (
      <ExampleCard
        title={title}
        image={image}
        imageSide={stacked ? "top" : side === "right" ? "right" : "left"}
        eyebrow={eyebrow}
        className={stacked ? "my-0" : undefined}
      >
        {children}
      </ExampleCard>
    ),
    "rb-note": ({ title, children }) => <Note title={title}>{children}</Note>,
    "rb-cards": ({ children, cols }) => (
      <div
        className={twMerge(
          "clear-both grid grid-cols-1 gap-4 my-6 items-start",
          cols === "2" && "md:grid-cols-2",
          cols === "3" && "md:grid-cols-2 xl:grid-cols-3",
        )}
      >
        {children}
      </div>
    ),
    "rb-card": ({ title, subtitle, image, id, stacked, children }) => (
      <RuleCard
        title={title}
        subtitle={subtitle}
        image={image}
        id={id}
        stacked={!!stacked}
      >
        {children}
      </RuleCard>
    ),
    "rb-statblock": ({ kind, source, wide }) => {
      if (!isStatBlockKind(kind)) return null;
      // Field values and sections are Markdown with the same shortcodes
      const md = (text: string, inline?: boolean) => (
        <Markdown
          remarkPlugins={PLUGINS}
          components={
            inline
              ? { ...components, p: ({ children }) => <>{children}</> }
              : components
          }
        >
          {text}
        </Markdown>
      );
      return (
        <StatBlockCard
          data={parseStatBlock(kind, source ?? "")}
          md={md}
          wide={!!wide}
        />
      );
    },
    "rb-unknown": ({ name }) => (
      <p className="text-sm text-dnd-red">Unknown shortcode ::{name}</p>
    ),
    ...Object.fromEntries(
      [
        "races",
        "backgrounds",
        "languages",
        "traits",
        "weapons",
        "classes",
        "chapters",
        "travel-calculator",
      ].map((name) => [`rb-${name}`, block(name)]),
    ),
  };

  const components: Components = {
    // Headings get ids, so [Initiative](dice#initiative) can link to them
    h2: ({ node, children }) => (
      <h2 id={slugify(hastText(node))} className="scroll-mt-8">
        {children}
      </h2>
    ),
    h3: ({ node, children }) => (
      <h3 id={slugify(hastText(node))} className="scroll-mt-8">
        {children}
      </h3>
    ),
    a: ({ href: to, children }) => (
      <Link href={href(to)} className="link">
        {children}
      </Link>
    ),
    table: ({ children }) => (
      <div className={`${tableClasses.wrap} my-6 shadow-none`}>
        <table className={tableClasses.table}>{children}</table>
      </div>
    ),
    tr: ({ children }) => <tr className={tableClasses.row}>{children}</tr>,
    th: ({ children, style }) => (
      <th className={tableClasses.th} style={style}>
        {children}
      </th>
    ),
    td: ({ children, style }) => (
      <td className={tableClasses.td} style={style}>
        {children}
      </td>
    ),
    // Plain Markdown images sit inside a paragraph, so no <figure> here
    img: ({ src, alt }) =>
      typeof src === "string" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          className="block w-full my-6 rounded-lg border border-dnd-gold shadow-md"
        />
      ) : null,
    // react-markdown types only know HTML tags; the shortcodes are custom tags
    ...(custom as unknown as Components),
  };
  return components;
};

const RuleMarkdown: React.FC<{
  content: string;
  renderBlock?: RenderBlock;
}> = ({ content, renderBlock }) => (
  <div className="rules flow-root">
    <Markdown
      remarkPlugins={PLUGINS}
      components={buildComponents(renderBlock)}
    >
      {content}
    </Markdown>
  </div>
);

export default RuleMarkdown;
