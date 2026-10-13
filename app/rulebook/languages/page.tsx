import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { RuleLink, RulePage, RuleTable } from "../_components";

const LanguagesPage = async () => {
  const rb = await fetchRulebook();

  return (
    <RulePage slug="languages">
      <ul>
        <li>Everyone speaks the <strong>Common tongue</strong>.</li>
        <li>
          <RuleLink to="races">Races</RuleLink> with their own language speak
          it too. The others pick <strong>one extra language</strong> of their
          choice.
        </li>
        <li>
          A <RuleLink to="backgrounds">background</RuleLink> adds the extra
          languages it lists.
        </li>
      </ul>
      <RuleTable
        head={["Language", "Spoken by", "Racial language of"]}
        rows={rb.languages.map((l) => [
          <strong key="n" className="libre text-dnd-red">{l.name}</strong>,
          l.description,
          rb.races.filter((r) => r.language_id === l.id).map((r) => r.name).join(", ") || "—",
        ])}
      />
    </RulePage>
  );
};

export default LanguagesPage;
