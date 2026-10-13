import StatBlock from "@/components/ui/statBlock";
import { Example, Formula, Note, Res, RuleLink, RulePage, RuleTable } from "../_components";

const ScarsPage = () => (
  <RulePage slug="scars">
    <p>
      A Scar is lasting harm: a wound, a fear, a ruined name. There are two
      ways to get one: you take one to push past your limit, or the DM gives
      you one because you couldn&apos;t avoid a bad outcome.
    </p>

    <h2>Taking a Scar to push on</h2>
    <p>
      When a pool is too low to pay the Danger Level, you can take a Scar. It
      gives <strong>2 temporary points</strong> that must be spent right away;
      whatever is left over is lost. The scarred point is crossed out, and
      sleep doesn&apos;t bring it back.
    </p>
    <Example title="Gaining a Scar">
      <p>
        Michal tries the burgmaster&apos;s daughter again. He fails again. The
        party begs him not to screw it up. Danger Level 3, and he has only 1{" "}
        <Res r="charisma" /> left, so he takes a Scar: 1 + 2 = 3, failure
        averted.
      </p>
      <p>
        He succeeds, and the burgmaster&apos;s men see the two of them a little
        too close. Rumours spread. Michal now carries a <Res r="charisma" />{" "}
        Scar: a ruined reputation, and a town guard that would like a word.
      </p>
    </Example>
    <div className="flex flex-col gap-2 my-6 p-4 bg-dnd-bg border border-dnd-gold rounded-lg">
      <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60">
        Michal&apos;s Charisma, before and after
      </p>
      <StatBlock resource="charisma" base={5} exhausted={4} />
      <StatBlock resource="charisma" base={5} exhausted={4} scarred={1} />
    </div>

    <h2>Scars from the DM</h2>
    <p>
      If a character doesn&apos;t or can&apos;t avert a bad outcome, say they
      fall into a trap, the DM gives them a Scar of the DM&apos;s choosing,
      with a <strong>level</strong>. A level-N Scar blocks N points of its pool
      until it&apos;s healed.
    </p>
    <RuleTable
      head={["Example", "Pool", "Level"]}
      rows={[
        ["Slashed arm", <Res key="1" r="body" />, "2"],
        ["Broken leg", <Res key="2" r="body" />, "6"],
        ["Haunted by what you saw in the crypt", <Res key="3" r="soul" />, "3"],
        ["Banished from town", <Res key="4" r="charisma" />, "5"],
      ]}
    />
    <p>For hits in combat, the level comes from the damage roll:</p>
    <Formula>scar level = damage roll − armour rating</Formula>
    <p>
      See <RuleLink to="armour">Damage and armour</RuleLink>. If the Scar is
      bigger than the pool, the character starts{" "}
      <RuleLink to="dying">dying</RuleLink>.
    </p>

    <h2>What Scars look like</h2>
    <RuleTable
      head={["Pool", "Examples"]}
      rows={[
        [<Res key="b" r="body" />, "Bleeding wound, illness, sprained ankle, bruising, trembling hands, lost hearing"],
        [<Res key="s" r="soul" />, "Insomnia, anxiety, guilt, nightmares, shaken confidence"],
        [<Res key="c" r="charisma" />, "Mockery, ruined reputation, distrust, being outlawed"],
      ]}
    />
    <Note title="Scars are story">
      <p>
        A Scar isn&apos;t just a crossed-out box. It&apos;s something the
        character lives with, and the DM and the player should both lean on it
        until it&apos;s dealt with.
      </p>
    </Note>
  </RulePage>
);

export default ScarsPage;
