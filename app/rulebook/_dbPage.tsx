import { notFound } from "next/navigation";
import RuleMarkdown from "@/components/rulebook/ruleMarkdown";
import {
  fetchRulebookNav,
  fetchRulebookPage,
} from "@/lib/endpoints/rulebookPages";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { blockRenderer } from "./_blocks";
import { RulePage } from "./_components";

// Data shortcodes that need the rulebook tables
const NEEDS_RULEBOOK = /^::(races|backgrounds|languages|traits|classes)\b/m;

/** A rulebook page written in Markdown by the admins */
const DbPage = async ({ slug }: { slug: string }) => {
  const page = await fetchRulebookPage(slug);
  if (!page) notFound();

  const [nav, rb] = await Promise.all([
    fetchRulebookNav(),
    NEEDS_RULEBOOK.test(page.content) ? fetchRulebook() : null,
  ]);

  return (
    <RulePage
      slug={slug}
      intro={page.intro}
      editHref={`/admin/rulebook/${page.id}`}
    >
      <RuleMarkdown
        content={page.content}
        renderBlock={blockRenderer(rb, nav)}
      />
    </RulePage>
  );
};

export default DbPage;
