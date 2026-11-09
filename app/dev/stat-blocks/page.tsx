// A preview of every kind of stat block, rendered the way a rulebook page
// renders them. Not linked from anywhere.

import RuleMarkdown from "@/components/rulebook/ruleMarkdown";
import { Heading } from "@/components/ui/typography";
import { getLang } from "@/lib/i18n/server";
import { SAMPLES } from "./samples";

const StatBlocksPreview = async () => {
  const lang = await getLang();
  return (
  <div className="max-w-3xl">
    <Heading level={1}>Stat blocks</Heading>
    {SAMPLES.map(({ title, markdown }) => (
      <section key={title} className="mb-16">
        <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60 mb-3">
          {title}
        </p>
        <RuleMarkdown content={markdown} lang={lang} />
      </section>
    ))}
  </div>
  );
};

export default StatBlocksPreview;
