import StatBlock from "@/components/ui/statBlock";
import { Example, Figure, Res, RuleLink, RulePage } from "../_components";

const ExhaustionPage = () => (
  <RulePage slug="exhaustion">
    <Figure src="/img/rulebook/exhaustion-and-scars.webp" alt="A weary adventurer" />
    <p>
      When a roll fails and the outcome is bad, you can buy your way out of it.
      Spend points equal to the <RuleLink to="danger-level">Danger Level</RuleLink>{" "}
      from the pool the skill uses, and the failure is averted. Those points
      are <strong>exhausted</strong>, marked with one diagonal strike.
    </p>
    <p>
      If the pool doesn&apos;t have enough left, you can still push on by
      taking a <RuleLink to="scars">Scar</RuleLink>.
    </p>

    <Example title="Exhausting yourself">
      <p>
        Michal tries to flirt with the burgmaster&apos;s daughter. He fails,
        like the disappointment he is, but the party needs her goodwill by
        evening. The Danger Level is 3, so he exhausts 3 <Res r="charisma" />.
      </p>
      <p>
        He turns the failed line into a self-deprecating joke about city bad
        boys. It works. He spends the rest of the afternoon emotionally
        drained.
      </p>
    </Example>
    <div className="flex flex-col gap-2 my-6 p-4 bg-dnd-bg border border-dnd-gold rounded-lg">
      <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60">
        Michal&apos;s Charisma, before and after
      </p>
      <StatBlock resource="charisma" base={5} />
      <StatBlock resource="charisma" base={5} exhausted={3} />
    </div>

    <h2>Getting it back</h2>
    <p>
      Exhaustion heals with rest. How much depends on the rest; see{" "}
      <RuleLink to="healing">Healing</RuleLink>.
    </p>
  </RulePage>
);

export default ExhaustionPage;
