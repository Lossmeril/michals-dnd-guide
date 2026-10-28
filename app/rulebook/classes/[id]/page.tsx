import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/ui/eyebrow";
import MagicBadge from "@/components/game/magicBadge";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { emptyBuild, findClass, parentsOf, UNLOCK_LEVELS } from "@/lib/rules/character";
import { getDict } from "@/lib/i18n/server";
import PerkTree from "@/components/game/perkTree";
import { SimpleTable } from "@/components/ui/dataTable";
import MediaObject from "@/components/ui/mediaObject";
import { RulePage } from "../../_components";

const RANK_HREFS = {
  basic: "/rulebook/basic-classes",
  advanced: "/rulebook/advanced-classes",
  mighty: "/rulebook/mighty-classes",
};

const ClassPage = async ({ params }: PageProps<"/rulebook/classes/[id]">) => {
  const { id } = await params;
  const [rb, t] = await Promise.all([fetchRulebook(), getDict()]);
  const c = t.classPage;
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
      parent={{ label: c.rankPages[cls.rank], href: RANK_HREFS[cls.rank] }}
      editHref={`/admin/classes/${cls.id}`}
    >
      <div className="rules">
        <MediaObject
          image={cls.image_url}
          imageClassName="sm:w-52 shadow-md"
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-3">
            <Eyebrow text={c.ranks[cls.rank]} />
            <MagicBadge magic={cls.magic} />
          </div>
          {parents.length > 0 && (
            <p className="text-sm mb-3">
              <strong>{c.unlocksWhen}</strong>{" "}
              {parents.map((p, i) => (
                <span key={p.id}>
                  {i > 0 && " + "}
                  <Link href={`/rulebook/classes/${p.id}`} className="link">
                    {p.name}
                  </Link>
                </span>
              ))}{" "}
              {c.total(UNLOCK_LEVELS)}
            </p>
          )}
          {cls.description && <p className="whitespace-pre-line">{cls.description}</p>}
          {children.length > 0 && (
            <p className="text-sm mt-3">
              <strong>{c.leadsTo}</strong>{" "}
              {children.map((child, i) => (
                <span key={child.id}>
                  {i > 0 && ", "}
                  <Link href={`/rulebook/classes/${child.id}`} className="link">
                    {child.name}
                  </Link>
                </span>
              ))}
              .
            </p>
          )}
        </MediaObject>

        <h2>{c.skills}</h2>
        {skills.length === 0 ? (
          <p>{t.blocks.noneYet}</p>
        ) : (
          <SimpleTable
            head={c.skillHead}
            rows={skills.map((s) => [
              <div key="n">
                <strong className="libre text-dnd-red">{s.name}</strong>
                {s.description && <p className="text-xs mt-1">{s.description}</p>}
              </div>,
              t.resources[s.resource],
              s.is_unique ? <Eyebrow key="u" text={c.unique} color="red" /> : "",
            ])}
          />
        )}

        <h2>{c.perks}</h2>
        <PerkTree rb={rb} build={emptyBuild()} classId={id} plain />
      </div>
    </RulePage>
  );
};

export default ClassPage;
