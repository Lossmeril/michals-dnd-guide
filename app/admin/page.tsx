import Breadcrumbs from "@/components/ui/breadcrumbs";
import Card from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { fetchRulebookNav } from "@/lib/endpoints/rulebookPages";

const AdminDashboard = async () => {
  const [rb, nav] = await Promise.all([fetchRulebook(), fetchRulebookNav()]);
  const pageCount = nav.reduce((n, c) => n + c.pages.length, 0);
  const count = (n: number, one: string, many = `${one}s`) =>
    `${n} ${n === 1 ? one : many}`;
  const kinds = (kind: string) => rb.perks.filter((p) => p.kind === kind).length;
  const awaiting = rb.traits.filter((t) => t.is_custom && !t.approved_by).length;

  const cards = [
    {
      title: "Rulebook pages",
      href: "/admin/rulebook",
      image: "/img/rulebook/classes.webp",
      text: "The rules text: chapters, pages, examples, pictures and dice.",
      stat: `${count(nav.length, "chapter")} · ${count(pageCount, "page")}`,
    },
    {
      title: "Races",
      href: "/admin/races",
      image: "/img/races/dwarf.webp",
      text: "Descriptions, pictures, racial languages and their perks.",
      stat: count(rb.races.length, "race"),
    },
    {
      title: "Classes",
      href: "/admin/classes",
      image: "/img/classes/warrior.webp",
      text: "Skills, parent classes, core spells and which perks belong where.",
      stat: count(rb.classes.length, "class", "classes"),
    },
    {
      title: "Perks and spells",
      href: "/admin/perks",
      image: "/img/classes/mage.webp",
      text: "Descriptions, activation prices, spell details and requirements.",
      stat: `${count(kinds("perk"), "perk")} · ${count(kinds("spell"), "spell")} · ${kinds("racial")} racial`,
    },
    {
      title: "Aspects",
      href: "/admin/perks?kind=aspect",
      image: "/img/classes/witcher.webp",
      text: "The roots of each advanced class's perk tree, and what unlocks them.",
      stat: count(kinds("aspect"), "aspect"),
    },
    {
      title: "Backgrounds",
      href: "/admin/backgrounds",
      image: "/img/classes/scout.webp",
      text: "Starting gear, coins, Material, languages and known settings.",
      stat: count(rb.backgrounds.length, "background"),
    },
    {
      title: "Languages",
      href: "/admin/languages",
      image: "/img/classes/incantor.webp",
      text: "Who speaks what.",
      stat: count(rb.languages.length, "language"),
    },
    {
      title: "Traits",
      href: "/admin/traits",
      image: "/img/races/kroll.webp",
      text: "Premade traits, and players' custom ones waiting for approval.",
      stat: `${count(rb.traits.length, "trait")}${awaiting ? ` · ${awaiting} awaiting approval` : ""}`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Admin" }]} />
      <Heading level={1}>Rulebook admin</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            imageUrl={c.image}
            imageClassName="object-top"
            link={c.href}
          >
            <p className="text-sm mb-2">{c.text}</p>
            <p className="text-xs font-bold text-dnd-ink/60">{c.stat}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;
