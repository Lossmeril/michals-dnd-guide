// Renders a rulebook page's Markdown. Works on the server (the rulebook) and
// in the browser (the admin editor's preview).

import Link from "next/link";
import Markdown, { type Components } from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { DiceNotation, parseRoll, RolledDice } from "@/components/ui/dice";
import ExampleCard from "@/components/ui/exampleCard";
import StatBlock from "@/components/ui/statBlock";
import { hrefOf, slugify } from "@/lib/rulebookNav";
import {
  Formula,
  type ImageLayout,
  Note,
  Res,
  type ResourceKey,
  RuleCard,
  RuleImage,
  tableClasses,
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
    return <Res r={r}>{children || undefined}</Res>;
  };

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
    "rb-coins": resource("coins"),
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
      <div className="clear-both flex flex-col gap-2 my-6 p-4 bg-dnd-bg border border-dnd-gold rounded-lg">
        {title && (
          <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60">
            {title}
          </p>
        )}
        {children}
      </div>
    ),
    "rb-example": ({ title, image, side, eyebrow, children }) => (
      <ExampleCard
        title={title}
        image={image}
        imageSide={side === "right" ? "right" : "left"}
        eyebrow={eyebrow}
      >
        {children}
      </ExampleCard>
    ),
    "rb-note": ({ title, children }) => <Note title={title}>{children}</Note>,
    "rb-cards": ({ children, cols }) => (
      <div
        className={`clear-both grid grid-cols-1 gap-4 my-6 ${cols === "2" ? "md:grid-cols-2" : ""}`}
      >
        {children}
      </div>
    ),
    "rb-card": ({ title, subtitle, image, id, children }) => (
      <RuleCard title={title} subtitle={subtitle} image={image} id={id}>
        {children}
      </RuleCard>
    ),
    "rb-unknown": ({ name }) => (
      <p className="text-sm text-dnd-red">Unknown shortcode ::{name}</p>
    ),
    ...Object.fromEntries(
      [
        "races",
        "backgrounds",
        "languages",
        "traits",
        "classes",
        "chapters",
        "travel-calculator",
      ].map((name) => [`rb-${name}`, block(name)]),
    ),
  };

  return {
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
      <div className={tableClasses.wrap}>
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
};

const RuleMarkdown: React.FC<{
  content: string;
  renderBlock?: RenderBlock;
}> = ({ content, renderBlock }) => (
  <div className="rules flow-root">
    <Markdown
      remarkPlugins={[remarkGfm, remarkDirective, remarkRulebook]}
      components={buildComponents(renderBlock)}
    >
      {content}
    </Markdown>
  </div>
);

export default RuleMarkdown;
