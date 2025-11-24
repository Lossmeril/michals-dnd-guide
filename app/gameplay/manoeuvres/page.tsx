"use client";

import Card, { HorizontalCard } from "@/components/card";
import Text, { RuleLink, Stat } from "@/components/text";
import resources from "@/data/resources/resources";

const ManoeuvresPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* INTRO */}
      <div className="w-full">
        <h2 className="font-bold text-3xl mb-5">Manoeuvres</h2>

        <Text>
          Manoeuvres are buffs or special techniques that characters can use to
          sway the scales in their favour during actions.{" "}
          <strong>
            Every manoeuvre costs 1 resource of a governing resource type
          </strong>{" "}
          to use (although some abilities may grant a free use of a manoeuvre).
        </Text>

        <HorizontalCard filled>
          <h3 className="font-bold text-xl mb-2">
            Having an <em>advantage</em>
          </h3>
          <Text>
            Some abilities, or status conditions may grant you{" "}
            <strong>an advantage</strong>. What this means is that you may use
            the <RuleLink href="#precise">Precise</RuleLink> manoeuvre for free.
            Having <strong>an initiative advantage</strong> also allows you to
            use the <RuleLink href="#quick">Quick</RuleLink> manoeuvre for free.
          </Text>
        </HorizontalCard>

        {/* GRID OF MANOEUVRES */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          {/* PRECISE */}
          <Card
            filled
            imageSrc="/img/manoeuvres/precise.jpeg"
            anchorLink="precise"
          >
            <h3 className="font-bold text-xl mb-2">Precise</h3>
            <Text>
              Precise manoeuvre means your character takes extra care to ensure
              their action is executed with accuracy.
            </Text>
            <Text>
              <strong>
                You may roll an advantaged roll when performing an action.
              </strong>
            </Text>
          </Card>

          {/* MIGHTY */}
          <Card filled imageSrc="/img/dice/challenge.webp" anchorLink="mighty">
            <h3 className="font-bold text-xl mb-2">Mighty</h3>
            <Text>
              Mighty manoeuvre means your character exerts great strength and
              power in their attack action.
            </Text>
            <Text>
              <strong>
                The attack under the mighty manoeuvre deals an additional die of
                damage.
              </strong>
            </Text>
            <Text>
              If the target is not using health points, but rather an
              exhaustion,{" "}
              <strong>the attack adds +1 to the Exhaustion cost.</strong>
            </Text>
          </Card>
          {/* CUNNING */}
          <Card
            filled
            imageSrc="/img/manoeuvres/cunning.webp"
            anchorLink="cunning"
          >
            <h3 className="font-bold text-xl mb-2">Cunning</h3>
            <Text>
              Your character&apos;s attack action is executed with cleverness
              that hides their true intent.
            </Text>
            <Text>
              <strong>
                After the attack, the target can be either knocked prone,
                grappled or can be pushed in any direction.
              </strong>
            </Text>
          </Card>
          {/* QUICKLY */}
          <Card filled imageSrc="/img/manoeuvres/quick.jpg" anchorLink="quick">
            <h3 className="font-bold text-xl mb-2">Quick</h3>
            <Text>
              Your character is prepared and alert, allowing them to act with
              swiftness and efficiency.
            </Text>
            <Text>
              <strong>
                You may roll an advantaged roll when determining initiative.
              </strong>
            </Text>
          </Card>
          {/* DEFENSE */}
          <Card
            filled
            imageSrc="/img/manoeuvres/defense.jpeg"
            anchorLink="defense"
          >
            <h3 className="font-bold text-xl mb-2">Defense</h3>
            <Text>
              In combat, you have only one action per turn. It may happen that
              you need to defend yourself after already spending your action, or
              want to keep your action to attack instead.
            </Text>
            <Text>
              In that case, using the <strong>Defense</strong> manoeuvre allows
              you to defend yourself without spending your action.
            </Text>
          </Card>

          {/* WIDESPREAD */}
          <Card
            filled
            imageSrc="/img/manoeuvres/widespread.webp"
            anchorLink="widespread"
          >
            <h3 className="font-bold text-xl mb-2">Widespread</h3>
            <Text>
              By default, each of your actions can target only one creature or
              element of the scene. Utilisation of the widespread manoeuvre
              allows you to extend the effect of your action to multiple targets
              within the scene.
            </Text>
          </Card>
        </div>
      </div>

      {/* CONDITIONS SECTION */}
      <div>
        <h2 className="font-bold text-3xl mb-5">Conditions</h2>
        <Text>
          Conditions are various physical or mental states that impact a
          character&apos;s abilities and actions. Conditions can be results of
          scars, failed combat actions or other gameplay elements.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4">
          <Card
            filled
            anchorLink="blinded"
            imageSrc="/img/manoeuvres/blinded.jpg"
          >
            <h3 className="font-bold text-xl mb-2">Blinded</h3>
            <Text>
              A blinded target can&apos;t see and automatically fails any
              ability check that requires sight.
            </Text>
            <Text>
              Attack rolls against the target have advantage, and the
              target&apos;s attack rolls have disadvantage. The target has an
              initiative disadvantage.
            </Text>
          </Card>

          <Card filled imageSrc="/img/manoeuvres/charmed.jpg">
            <h3 className="font-bold text-xl mb-2">Charmed</h3>
            <Text>
              A charmed target can&apos;t attack the charmer or target the
              charmer with harmful abilities or magical effects.
            </Text>
            <Text>
              The charmer has advantage on any ability check to interact
              socially with the target.
            </Text>
          </Card>

          <Card
            filled
            imageSrc="/img/manoeuvres/deafened.jpg"
            anchorLink="deafened"
          >
            <h3 className="font-bold text-xl mb-2">Deafened</h3>
            <Text>
              A deafened target can&apos;t hear and automatically fails any
              ability check that requires hearing.
            </Text>
            <Text>
              A deafened target also has disadvantage on attack rolls and
              initiative.
            </Text>
          </Card>

          <Card
            filled
            imageSrc="/img/manoeuvres/frightened.avif"
            anchorLink="frightened"
          >
            <h3 className="font-bold text-xl mb-2">Frightened</h3>
            <Text>
              A frightened target has disadvantage on ability checks, attack
              rolls and initiative while the source of its fear is within line
              of sight.
            </Text>
            <Text>
              The target can&apos;t willingly move closer to the source of its
              fear.
            </Text>
          </Card>

          <Card
            filled
            imageSrc="/img/manoeuvres/grappled.png"
            anchorLink="grappled"
          >
            <h3 className="font-bold text-xl mb-2">Grappled</h3>
            <Text>
              A grappled target&apos;s speed becomes 0, and it can&apos;t
              benefit from any bonus to its speed. However, the target still can
              move in place and use actions that do not involve movement.
            </Text>
            <Text>
              The condition ends if the grappler is incapacitated or willingly
              ends it. The condition also ends if an effect removes the grappled
              target from the reach of the grappler or grappling effect.
            </Text>
          </Card>

          <Card
            filled
            imageSrc="/img/manoeuvres/incapacitated.gif"
            containImage
            anchorLink="incapacitated"
          >
            <h3 className="font-bold text-xl mb-2">Incapacitated</h3>
            <Text>
              An incapacitated target can&apos;t take actions or reactions.
              It&apos;s that simple. This is more of a helper condition, rarely
              occurring on its own.
            </Text>
          </Card>

          <Card
            filled
            imageSrc="/img/manoeuvres/invisible.webp"
            anchorLink="invisible"
          >
            <h3 className="font-bold text-xl mb-2">Invisible</h3>
            <Text>
              An invisible target is impossible to see without the aid of magic
              or a special sense. The target&apos;s location can be detected by
              any noise it makes or any tracks it leaves.
            </Text>
            <Text>
              Rolls against the target have disadvantage, and the target&apos;s
              rolls have advantage.
            </Text>
            <Text>
              <strong>
                Invisible should not be confused with hidden. A hidden target is
                a perception status, while an invisible target is a magically
                obscured entity.
              </strong>
            </Text>
          </Card>

          <Card filled>
            <h3 className="font-bold text-xl mb-2">Paralyzed</h3>
            <Text>
              A paralyzed creature is{" "}
              <RuleLink href="#incapacitated">incapacitated</RuleLink> and
              can&apos;t move or speak.
            </Text>
            <Text>
              The target automatically fails any saving throws with{" "}
              <Stat type={resources[0].name} /> as their target resource. Attack
              rolls against the target have advantage. Any attack that hits the
              target counts as a critical hit if the attacker is within 5 feet
              of the target.
            </Text>
          </Card>

          <Card
            filled
            imageSrc="/img/manoeuvres/petrified.avif"
            anchorLink="petrified"
          >
            <h3 className="font-bold text-xl mb-2">Petrified</h3>
            <Text>
              A petrified target is transformed, along with any nonmagical
              object it is wearing or carrying, into a solid inanimate substance
              (usually stone). Its weight increases by a factor of ten, and it
              ceases aging.
            </Text>
            <Text>
              The target is{" "}
              <RuleLink href="#incapacitated">incapacitated</RuleLink>,
              can&apos;t move or speak, and is unaware of its surroundings.
              Attack rolls against the target have advantage. The target
              automatically fails any saving throws with{" "}
              <Stat type={resources[0].name} /> as their target resource. The
              target has <RuleLink href="#resistance">resistance</RuleLink> to
              all damage. The target is{" "}
              <RuleLink href="#immunity">immune</RuleLink> to poison and
              disease, although a poison or disease already in its system is
              suspended, not neutralized.
            </Text>
          </Card>

          <Card filled anchorLink="prone">
            <h3 className="font-bold text-xl mb-2">Prone</h3>
            <Text>
              A prone creature&apos;s only movement option is to crawl, unless
              it stands up and thereby ends the condition.
            </Text>
            <Text>
              The creature has disadvantage on attack rolls. An attack roll
              against the creature has advantage if the attacker is within 5
              feet of the creature. Otherwise, the attack roll has disadvantage.
            </Text>
          </Card>

          <Card filled>
            <h3 className="font-bold text-xl mb-2">Restrained</h3>
            <Text>
              A restrained creature&apos;s speed becomes 0, and it can&apos;t
              benefit from any bonus to its speed.
            </Text>
            <Text>
              Attack rolls against the creature have advantage, and the
              creature&apos;s attack rolls have disadvantage. The creature has
              disadvantage on Dexterity saving throws.
            </Text>
          </Card>

          <Card filled>
            <h3 className="font-bold text-xl mb-2">Stunned</h3>
            <Text>
              A stunned target is{" "}
              <RuleLink href="#incapacitated">incapacitated</RuleLink>,{""}
              can&apos;t move, and can speak only falteringly.
            </Text>
            <Text>
              The target automatically fails any saving throws with{" "}
              <Stat type={resources[0].name} /> as their target resource. Attack
              rolls against the target have advantage, the target has
              disadvantage on attack and initiative.
            </Text>
          </Card>

          <Card
            filled
            imageSrc="/img/manoeuvres/unconscious.jpg"
            anchorLink="unconscious"
          >
            <h3 className="font-bold text-xl mb-2">Unconscious</h3>
            <Text>
              An unconscious target is{" "}
              <RuleLink href="#incapacitated">incapacitated</RuleLink>,{""}
              can&apos;t move or speak, and is unaware of their surroundings.
            </Text>
            <Text>
              The target drops whatever it&apos;s holding and falls{" "}
              <RuleLink href="#prone">prone</RuleLink>. The target automatically
              fails Strength and Dexterity saving throws. Attack rolls against
              the target have advantage. Any attack that hits the creature is a
              critical hit if the attacker is within 5 feet of the creature.
            </Text>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-3xl mb-5">Resistances and weaknesses</h2>
        <Text>
          Some abilities or effects may grant a character resistance or weakness
          to certain types of damage. Resistance means the character takes half
          damage from that type, while weakness means they take double damage.
        </Text>

        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-sm mb-5 border-collapse">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="py-2 px-3 text-left">Type of damage modifier</th>
                <th className="py-2 px-3 text-left">Effect on damage</th>
                <th className="py-2 px-3 text-left">
                  Effect on{" "}
                  <RuleLink href="/gameplay/exhaustion">Exhaustion</RuleLink>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Weakness</td>
                <td className="py-2 px-3">The damage is doubled</td>
                <td className="py-2 px-3">The exhaustion cost is doubled</td>
              </tr>

              {/* Row 1 */}
              <tr className="border-b border-slate-800  bg-slate-700">
                <td className="py-2 px-3 font-bold">Weakness Bonus</td>
                <td className="py-2 px-3">N/A</td>
                <td className="py-2 px-3">
                  The exhaustion cost is increased by the weakness bonus
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Resistance</td>
                <td className="py-2 px-3">The damage is halved</td>
                <td className="py-2 px-3">The exhaustion cost is halved</td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b border-slate-800  bg-slate-700">
                <td className="py-2 px-3 font-bold">Resistance Bonus</td>
                <td className="py-2 px-3">N/A</td>
                <td className="py-2 px-3">
                  The exhaustion cost is reduced by the resistance bonus
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Immunity</td>
                <td className="py-2 px-3">The damage is negated</td>
                <td className="py-2 px-3">There is no exhustion cost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManoeuvresPage;
