// Turns the rulebook's Markdown shortcodes into elements the renderer maps to
// components (see RuleMarkdown, and the admin editor's cheat sheet for the syntax)

import type { Nodes, Parent, PhrasingContent, Root, Text } from "mdast";
import type {
  ContainerDirective,
  LeafDirective,
  TextDirective,
} from "mdast-util-directive";
import { DEFAULT_LANG, isLang, type Lang } from "@/lib/i18n/localize";
import { isStatBlockKind } from "@/lib/rules/statBlocks";

type Directive = ContainerDirective | LeafDirective | TextDirective;

/** Shortcodes by kind; anything else is shown back as written */
export const KNOWN = {
  textDirective: ["body", "soul", "charisma", "coins", "material", "roll"],
  leafDirective: [
    "image",
    "formula",
    "stat",
    // Filled from the database or code by the page
    "races",
    "backgrounds",
    "languages",
    "traits",
    "weapons",
    "classes",
    "creature",
    "chapters",
    "travel-calculator",
  ],
  containerDirective: ["example", "note", "stats", "cards", "card"],
} as const;

const isDirective = (node: Nodes): node is Directive =>
  node.type === "containerDirective" ||
  node.type === "leafDirective" ||
  node.type === "textDirective";

const textOf = (node: Nodes): string =>
  "value" in node
    ? node.value
    : "children" in node
      ? (node.children as Nodes[]).map(textOf).join("")
      : "";

// "2d6", "d20", "1d8": not inside words like "and6"
const DICE = /(?<![\w/])(\d*d(?:4|6|8|10|12|20))(?!\w)/gi;

/** Splits "roll 2d6 + 1" into text and dice nodes */
const splitDice = (node: Text): PhrasingContent[] => {
  const parts = node.value.split(DICE);
  if (parts.length === 1) return [node];
  return parts
    .map((value, i): PhrasingContent | null =>
      !value
        ? null
        : i % 2
          ? {
              type: "textDirective",
              name: "dice",
              attributes: {},
              children: [],
              data: { hName: "rb-dice", hProperties: { notation: value } },
            }
          : { type: "text", value },
    )
    .filter((n): n is PhrasingContent => n !== null);
};

const transform = (node: Nodes, lang: Lang) => {
  if (!("children" in node)) return;
  const parent = node as Parent;
  const out: Nodes[] = [];

  for (const child of parent.children as Nodes[]) {
    // :::en … ::: and :::cs … ::: hold text for one language only
    if (child.type === "containerDirective" && isLang(child.name)) {
      if (child.name === lang) {
        transform(child, lang);
        out.push(...(child.children as Nodes[]));
      }
      continue;
    }
    if (child.type === "text") {
      out.push(...splitDice(child));
      continue;
    }
    // "## Heading {#id}" sets the heading's id, so a translated heading keeps
    // the anchor other pages link to
    if (child.type === "heading") {
      const last = child.children.at(-1);
      const m = last?.type === "text" ? last.value.match(/\s*\{#([\w-]+)\}\s*$/) : null;
      if (last?.type === "text" && m) {
        last.value = last.value.slice(0, m.index);
        child.data = { ...child.data, hProperties: { ...child.data?.hProperties, id: m[1] } };
      }
    }
    // ```npc … ``` and the other kinds become stat blocks
    if (child.type === "code" && isStatBlockKind(child.lang)) {
      out.push({
        type: "leafDirective",
        name: "statblock",
        attributes: {},
        children: [],
        data: {
          hName: "rb-statblock",
          hProperties: {
            kind: child.lang,
            source: child.value,
            lang,
            wide: /\bwide\b/.test(child.meta ?? "") ? "true" : "",
          },
        },
      });
      continue;
    }
    if (!isDirective(child)) {
      transform(child, lang);
      out.push(child);
      continue;
    }

    const known = (KNOWN[child.type] as readonly string[]).includes(child.name);
    if (!known) {
      if (child.type === "textDirective") {
        // e.g. "10:30" or a typo: show what was written
        const label = child.children.length ? `[${textOf(child)}]` : "";
        out.push({ type: "text", value: `:${child.name}${label}` });
      } else {
        child.data = {
          hName: "rb-unknown",
          hProperties: { name: child.name, kind: child.type },
        };
        child.children = [];
        out.push(child);
      }
      continue;
    }

    const props: Record<string, string> = {};
    for (const [k, v] of Object.entries(child.attributes ?? {})) {
      if (v != null) props[k] = v;
    }
    // A container's [label] becomes its title
    if (child.type === "containerDirective") {
      const first = child.children[0];
      if (first?.type === "paragraph" && first.data?.directiveLabel) {
        props.title = textOf(first);
        child.children = child.children.slice(1);
      }
    }
    // A roll's label is its dice, not text to show
    if (child.name === "roll") {
      props.roll = textOf(child);
      child.children = [];
    }
    if (child.name === "image" || child.name === "stat") {
      child.children = [];
    }

    // Cards in a row of three are narrow: their pictures go on top
    if (child.name === "cards" && props.cols === "3") {
      for (const card of child.children) {
        if (isDirective(card)) card.attributes = { ...card.attributes, stacked: "true" };
      }
    }

    child.data = { hName: `rb-${child.name}`, hProperties: props };
    transform(child, lang);
    out.push(child);
  }

  parent.children = out as Parent["children"];
};

/** The remark plugin; `lang` picks which :::en / :::cs blocks stay */
const remarkRulebook =
  ({ lang = DEFAULT_LANG }: { lang?: Lang } = {}) =>
  (tree: Root) => {
    transform(tree, lang);
  };

export default remarkRulebook;
