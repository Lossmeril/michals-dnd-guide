import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/ui/eyebrow";
import MagicBadge from "@/components/ui/magicBadge";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { emptyBuild, findClass, parentsOf, UNLOCK_LEVELS } from "@/lib/rules/character";
import { RESOURCE_NAMES } from "@/lib/rules/format";
import PerkTree from "@/app/(app)/characters/_character/perkTree";
import { RuleTable } from "@/components/rulebook/elements";
import { RulePage } from "../../_components";

const RANK_PAGES = {
  basic: { label: "Basic classes", href: "/rulebook/basic-classes" },
  advanced: { label: "Advanced classes", href: "/rulebook/advanced-classes" },
  mighty: { label: "Mighty classes", href: "/rulebook/mighty-classes" },
};

const ClassPage = async ({ params }: PageProps<"/rulebook/classes/[id]">) => {
  const { id } = await params;
  const rb = await fetchRulebook();
  const cls = findClass(rb, id);
  if (!cls) notFound();

  const parents = parentsOf(rb, id).map((p) => findClass(rb, p)!);
  const children = rb.classParents
    .filter((cp) => cp.parent_id === id)
    .map((cp) => findClass(rb, cp.class_id)!);
  const skills = rb.skills.filter((s) => s.class_id === id);

  return (
    <RulePage
      slug="classes"
      title={cls.name}
      parent={RANK_PAGES[cls.rank]}
      editHref={`/admin/classes/${cls.id}`}
    >
      <div className="rules">
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          {cls.image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cls.image_url}
              alt=""
              className="w-full sm:w-52 aspect-[3/4] object-cover object-top rounded-lg border border-dnd-gold shadow-md shrink-0"
            />
          )}
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2 mb-3">
              <Eyebrow text={cls.rank} />
              <MagicBadge magic={cls.magic} />
            </div>
            {parents.length > 0 && (
              <p className="text-sm mb-3">
                <strong>Unlocks when</strong>{" "}
                {parents.map((p, i) => (
                  <span key={p.id}>
                    {i > 0 && " + "}
                    <Link href={`/rulebook/classes/${p.id}`} className="link">
                      {p.name}
                    </Link>
                  </span>
                ))}{" "}
                total {UNLOCK_LEVELS} levels.
              </p>
            )}
            {cls.description && <p className="whitespace-pre-line">{cls.description}</p>}
            {children.length > 0 && (
              <p className="text-sm mt-3">
                <strong>Leads to</strong>{" "}
                {children.map((c, i) => (
                  <span key={c.id}>
                    {i > 0 && ", "}
                    <Link href={`/rulebook/classes/${c.id}`} className="link">
                      {c.name}
                    </Link>
                  </span>
                ))}
                .
              </p>
            )}
          </div>
        </div>

        <h2>Skills</h2>
        {skills.length === 0 ? (
          <p>None written yet.</p>
        ) : (
          <RuleTable
            head={["Skill", "Resource", ""]}
            rows={skills.map((s) => [
              <div key="n">
                <strong className="libre text-dnd-red">{s.name}</strong>
                {s.description && <p className="text-xs mt-1">{s.description}</p>}
              </div>,
              RESOURCE_NAMES[s.resource],
              s.is_unique ? <Eyebrow key="u" text="unique" color="red" /> : "",
            ])}
          />
        )}

        <h2>Perks</h2>
        <PerkTree rb={rb} build={emptyBuild()} classId={id} plain />
      </div>
    </RulePage>
  );
};

export default ClassPage;
