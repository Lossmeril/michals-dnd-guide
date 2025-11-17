export type PagePreview = {
  slug: string; // e.g. "danger-level"
  title: string;
  excerpt: string;
  imageSrc?: string;
};

export const PREVIEWS: PagePreview[] = [
  {
    slug: "classes",
    title: "Classes",
    excerpt:
      "Classes are bundles of skills and abilities that define what is your character good at. Each character has multiple classes that shape their capabilities. There are 5 basic, 10 advanced classes and 5 mighty classes.",
    imageSrc: "/img/illustrative/classes.jpg",
  },
  {
    slug: "danger-level",
    title: "Danger Level",
    excerpt:
      "Danger Level represents how risky or chaotic the current situation is. The higher it is, the more resources you must spend to avoid harm.",
    imageSrc: "/img/illustrative/danger-level.jpg",
  },
  {
    slug: "resources",
    title: "Resources",
    excerpt:
      "Body, Soul, and Charisma are pools of effort your character spends to stay effective and avoid bad outcomes.",
  },
  {
    slug: "exhaustion",
    title: "Exhaustion & Scars",
    excerpt:
      "When you run out of resources, you can exhaust yourself — or suffer permanent Scars to push beyond your limits.",
    imageSrc: "/img/illustrative/exhaustion-and-scars.jpg",
  },
];
