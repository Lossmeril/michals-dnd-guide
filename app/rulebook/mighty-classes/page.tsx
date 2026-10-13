import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { Example, Note, RulePage } from "../_components";
import ClassGrid from "../classGrid";

const MightyClassesPage = async () => {
  const rb = await fetchRulebook();
  return (
    <RulePage slug="mighty-classes">
      <p>
        The stuff of legends. Each mighty class grows from three or four
        advanced classes and unlocks once{" "}
        <strong>those advanced classes total 6 levels</strong>, spread any way
        you like. A single class can&apos;t do it alone, since classes stop at
        5.
      </p>
      <Example>
        <p>
          For Warlord, Warrior 5 / Rogue 1, Warrior 3 / Rogue 3 and Warrior 2 /
          Ranger 2 / Scout 1 / Rogue 1 all qualify.
        </p>
      </Example>
      <Note title="Work in progress">
        <p>Mighty classes don&apos;t have skills or perks yet.</p>
      </Note>
      <ClassGrid rb={rb} rank="mighty" />
    </RulePage>
  );
};

export default MightyClassesPage;
