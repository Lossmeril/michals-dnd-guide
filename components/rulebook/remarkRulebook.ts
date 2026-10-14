// Turns the rulebook's Markdown shortcodes into elements the renderer maps to
// components (see RuleMarkdown, and the admin editor's cheat sheet for the syntax)

import type { Nodes, Parent, PhrasingContent, Root, Text } from "mdast";
import type {
  ContainerDirective,
  LeafDirective,
  TextDirective,
} from "mdast-util-directive";

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
    "classes",
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

const transform = (node: Nodes) => {
  if (!("children" in node)) return;
  const parent = node as Parent;
  const out: Nodes[] = [];

  for (const child of parent.children as Nodes[]) {
    if (child.type === "text") {
      out.push(...splitDice(child));
      continue;
    }
    if (!isDirective(child)) {
      transform(child);
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

    child.data = { hName: `rb-${child.name}`, hProperties: props };
    transform(child);
    out.push(child);
  }

  parent.children = out as Parent["children"];
};

/** The remark plugin */
const remarkRulebook = () => (tree: Root) => {
  transform(tree);
};

export default remarkRulebook;
