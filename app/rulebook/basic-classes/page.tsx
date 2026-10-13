import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { RuleLink, RulePage } from "../_components";
import ClassGrid from "../classGrid";

const BasicClassesPage = async () => {
  const rb = await fetchRulebook();
  return (
    <RulePage slug="basic-classes">
      <p>
        The five building blocks. Any character can take any of them at any
        time. Pick one to see its skills and perks, or read{" "}
        <RuleLink to="classes">how classes work</RuleLink> first.
      </p>
      <ClassGrid rb={rb} rank="basic" />
    </RulePage>
  );
};

export default BasicClassesPage;
