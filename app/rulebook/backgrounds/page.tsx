import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { formatCoins } from "@/lib/rules/format";
import { Example, Note, RuleLink, RulePage, RuleTable } from "../_components";

const BackgroundsPage = async () => {
  const rb = await fetchRulebook();

  return (
    <RulePage slug="backgrounds">
      <p>
        A background is what your character did before the adventure. Like in
        5E, but <strong>without skill proficiencies</strong>: those come from
        classes. A background gives:
      </p>
      <ul>
        <li>
          <strong>Starting gear</strong>, <strong>coins</strong> and{" "}
          <strong>Material</strong>.
        </li>
        <li>
          <strong>Extra <RuleLink to="languages">languages</RuleLink></strong>.
        </li>
        <li>
          <strong>Known settings</strong>: places they know their way around
          and people they know how to deal with. Rolls inside them get{" "}
          <strong>+1</strong> on top of the class level. The DM decides whether
          a roll falls inside the setting.
        </li>
      </ul>
      <Example>
        <p>
          Michal, a former Criminal, haggles with a fence over a stolen
          necklace. That&apos;s the criminal underbelly, his known setting: +1
          on top of his Juggler level. The fence still cheats him, just less.
        </p>
      </Example>

      <h2>Backgrounds</h2>
      {rb.backgrounds.length === 0 ? (
        <p>None written yet.</p>
      ) : (
        <RuleTable
          head={["Background", "Gear", "Purse", "Languages", "+1 in"]}
          rows={rb.backgrounds.map((b) => [
            <strong key="n" className="libre text-dnd-red">{b.name}</strong>,
            b.equipment,
            `${formatCoins(b.coins_copper)} · ${b.material} Material`,
            `+${b.extra_languages}`,
            b.known_settings,
          ])}
        />
      )}
      <Note title="Scale">
        <p>1 gold is a lot for a commoner. 1 silver = 10 copper, and 1 Material is worth 1 silver.</p>
      </Note>
    </RulePage>
  );
};

export default BackgroundsPage;
