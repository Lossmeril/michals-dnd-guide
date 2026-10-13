import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { Example, Note, RulePage, RuleTable } from "../_components";
import ClassGrid from "../classGrid";

const AdvancedClassesPage = async () => {
  const rb = await fetchRulebook();
  return (
    <RulePage slug="advanced-classes">
      <p>
        Advanced classes are closer to classic D&amp;D classes. There are ten,
        one for every pair of basic classes. One opens once{" "}
        <strong>its two parents total 6 levels</strong>, in any split. That is
        the only gate: after that it levels up to 5 like any other class.
      </p>
      <Example>
        <p>
          Fighter 5 / Juggler 1, Fighter 3 / Juggler 3 and Fighter 1 / Juggler
          5 can all take Warrior 1.
        </p>
      </Example>

      <h2>Aspects</h2>
      <p>
        Each advanced class has <strong>three aspects</strong>: the roots of
        its perk tree. An aspect is a perk you get automatically once your
        parent classes reach the right combination.
      </p>
      <ul>
        <li>
          An aspect does nothing on its own. It only opens the perks that
          require it.
        </li>
        <li>
          You must have the advanced class itself: Fighter 4 without Warrior
          doesn&apos;t give you Brute.
        </li>
        <li>
          Aspects stack. The split of your parent classes decides which ones
          you reach <em>first</em>, and you can eventually unlock all three.
        </li>
      </ul>
      <RuleTable
        head={["Warrior aspect", "Requires"]}
        rows={[
          ["Brute", "Fighter 4"],
          ["Knight", "Fighter 3 + Juggler 3"],
          ["Monk", "Juggler 4"],
        ]}
      />
      <Note title="Work in progress">
        <p>The other nine advanced classes&apos; aspects aren&apos;t written yet.</p>
      </Note>

      <h2>The ten</h2>
      <ClassGrid rb={rb} rank="advanced" />
    </RulePage>
  );
};

export default AdvancedClassesPage;
