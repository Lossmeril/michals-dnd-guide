import Text, { H2, H3, WikiLink } from "@/components/text";
import { highlightText } from "@/utils/highlightText";

const DangerLevelPage = () => {
  return (
    <div>
      <H2>Danger Level</H2>

      <Text>
        <strong>Danger Level</strong> sounds like something complicated, but
        it’s actually one of the simplest — and most important — rules in the
        game. It is a single number that represents how risky, chaotic, or
        technically difficult the current situation is. The higher the number,
        the worse things can go for your character. In most scenes, the default
        Danger Level is <strong>3</strong>.
      </Text>

      <Text>
        Whenever your character wants to avoid a bad outcome — getting hurt,
        failing a task, losing an item, triggering a trap, or embarrassing
        themselves — they must spend an amount of their resources equal to the
        current Danger Level. This is how the game represents stress, effort,
        and the toll of dangerous situations. You can read more about resources
        on the Exhaustion and Scars page.
      </Text>

      <H3>Changing the Danger Level</H3>

      <Text>
        The DM adjusts the Danger Level based on the fiction of the scene. The
        number rises when the environment becomes hostile, when the situation
        becomes urgent or chaotic, or when the character is in a poor position.
        The players can also lower the Danger Level by taking actions that
        improve their situation, such as finding cover, creating distractions,
        or negotiating with NPCs.
      </Text>

      <H3>What the Numbers Mean</H3>

      <Text>
        Here is a practical scale you can use to imagine what each Danger Level
        feels like:
      </Text>

      {/* 🔥 Scrollable table wrapper */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-max text-sm mb-5 border-collapse">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="py-2 px-3 text-left">Danger Level</th>
              <th className="py-2 px-3 text-left">Difficulty</th>
              <th className="py-2 px-3 text-left">
                {highlightText("Body-s Example")}
              </th>
              <th className="py-2 px-3 text-left">
                {highlightText("Soul-s Example")}
              </th>
              <th className="py-2 px-3 text-left">
                {highlightText("Charisma-s Example")}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-2 px-3 font-bold">1</td>
              <td className="py-2 px-3">Walk-in-a-park</td>
              <td className="py-2 px-3">
                Crossing a calm river outside a ford
              </td>
              <td className="py-2 px-3">Prying open a hayloft latch</td>
              <td className="py-2 px-3">
                Entertaining children with a puppet show
              </td>
            </tr>

            <tr className="border-b border-slate-800 bg-slate-700">
              <td className="py-2 px-3 font-bold">2</td>
              <td className="py-2 px-3">Same shit, different day</td>
              <td className="py-2 px-3">Crossing a wild mountain stream</td>
              <td className="py-2 px-3">Picking a basic prison-cell lock</td>
              <td className="py-2 px-3">
                Entertaining villagers with adventure stories
              </td>
            </tr>

            <tr className="border-b border-slate-800">
              <td className="py-2 px-3 font-bold">3</td>
              <td className="py-2 px-3">Time to file a safety report</td>
              <td className="py-2 px-3">Crossing a swollen river</td>
              <td className="py-2 px-3">
                Opening multiple locks on a merchant’s chest
              </td>
              <td className="py-2 px-3">Trying to impress bored city folk</td>
            </tr>

            <tr className="border-b border-slate-800 bg-slate-700">
              <td className="py-2 px-3 font-bold">4</td>
              <td className="py-2 px-3">The danger is real</td>
              <td className="py-2 px-3">
                Crossing a river with floating debris
              </td>
              <td className="py-2 px-3">
                Disarming a dart trap hidden in a steel lock
              </td>
              <td className="py-2 px-3">
                Performing flawlessly for a critical audience
              </td>
            </tr>

            <tr>
              <td className="py-2 px-3 font-bold">5+</td>
              <td className="py-2 px-3">“The fuck did I stumble into?”</td>
              <td className="py-2 px-3">
                Crossing a debris-filled river during a storm
              </td>
              <td className="py-2 px-3">
                Deciphering coded mechanisms while the ceiling collapses
              </td>
              <td className="py-2 px-3">
                Entertaining a decadent audience with a forbidden performance
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <H3>Why It Matters</H3>

      <Text>
        Danger Level is the pressure of the story made mechanical. At Danger
        Level 3, every risky decision costs 3 resources. At Danger Level 5, it
        costs 5 — and <WikiLink href="/gameplay/exhaustion">Scars</WikiLink>{" "}
        become much more likely. A rising Danger Level pushes players to think
        creatively, retreat, negotiate, or change their approach. Any ability
        that lowers the Danger Level becomes extremely valuable.
      </Text>

      <Text>
        In short: Danger Level is a measure of how screwed you are if things go
        wrong — and how much it will cost you to stay in the fight.
      </Text>

      <H3>Each to their own</H3>

      <Text>
        Even in one situations,{" "}
        <strong>all the characters might face different Danger Levels</strong>.
        For example, a warrior who has just been knocked to the ground Levels.
        For example, a warrior who has just been knocked to the ground might
        face a Danger Level of 5 in the next attack, while their spellcasting
        ally standing safely on the nearby hill them might only face a Danger
        Level of 2 to cast a spell.
      </Text>
    </div>
  );
};

export default DangerLevelPage;
