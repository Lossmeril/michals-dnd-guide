import { notFound } from "next/navigation";
import RuleMarkdown from "@/components/rulebook/ruleMarkdown";
import {
  fetchRulebookNav,
  fetchRulebookPage,
} from "@/lib/endpoints/rulebookPages";
import { fetchBestiary } from "@/lib/endpoints/bestiary";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { DICTS } from "@/lib/i18n/dictionaries";
import { getLang } from "@/lib/i18n/server";
import { blockRenderer } from "./_blocks";
import { RulePage } from "./_components";

// Data shortcodes that need the rulebook tables
const NEEDS_RULEBOOK = /^::(races|backgrounds|languages|traits|weapons|classes)\b/m;
const NEEDS_BESTIARY = /^::creature\b/m;

/** A rulebook page written in Markdown by the admins */
const DbPage = async ({ slug }: { slug: string }) => {
  const page = await fetchRulebookPage(slug);
  if (!page) notFound();

  const [nav, rb, bestiary, lang] = await Promise.all([
    fetchRulebookNav(),
    NEEDS_RULEBOOK.test(page.content) ? fetchRulebook() : null,
    NEEDS_BESTIARY.test(page.content) ? fetchBestiary() : null,
    getLang(),
  ]);

  return (
    <RulePage
      slug={slug}
      intro={page.intro}
      editHref={`/admin/rulebook/${page.id}`}
    >
      <RuleMarkdown
        content={page.content}
        lang={lang}
        renderBlock={blockRenderer(rb, nav, DICTS[lang], { bestiary, lang })}
      />
    </RulePage>
  );
};

export default DbPage;
