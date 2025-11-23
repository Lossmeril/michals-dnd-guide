"use client";

import { HorizontalCard } from "@/components/card";
import { D20, D6 } from "@/components/dice";
import Text from "@/components/text";

const DiceRollsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* INTRO */}
      <div className="w-full">
        <h2 className="font-bold text-3xl mb-5">Dice rolls</h2>
        <Text>
          In the game, it is the dice rolls that determine the outcome of
          various actions.
        </Text>
        <div className="flex flex-col gap-5">
          <HorizontalCard imageSrc="/img/dice/skill check.webp">
            <h3 className="font-bold text-2xl mb-3">Skill check</h3>
            <div className="flex flex-row items-center justify-start w-fit gap-3 rounded-md bg-slate-700 border border-slate-600 py-3 px-5 my-3">
              <D6 display={"6"} noLabel />
              <p className="text-xl font-bold ">+</p>{" "}
              <D6 display={"6"} noLabel />{" "}
              <p className="text-xl font-bold">
                {" "}
                + <strong>class level</strong> &#8805; 9
              </p>
            </div>
            <Text>
              Skill check is a roll in which it is your character trying to
              overcome an obstacle or achieve a goal without direct opposition
              from another entity.
            </Text>
            <Text>
              In skill check you roll <strong>two D6 dice</strong> and{" "}
              <strong>add the class level</strong> of a class the skill you are
              performing belongs under. If the result is higher the skill you
              are performing belongs under.{" "}
              <strong>
                If the result is higher than or equal to 9, you succeed.
              </strong>
            </Text>
          </HorizontalCard>
          <HorizontalCard imageSrc="/img/dice/challenge.webp">
            <h3 className="font-bold text-2xl mb-3">Challenge</h3>
            <div className="flex flex-row items-center justify-start w-fit gap-3 rounded-md bg-slate-700 border border-slate-600 py-3 px-5 my-3">
              <D20 display={"20"} noLabel />
              <p className="text-xl font-bold">
                {" "}
                + <strong>class level</strong>
              </p>
              <p className="text-xl font-bold"> vs.</p>{" "}
              <D20 display={"20"} noLabel />{" "}
              <p className="text-xl font-bold">
                {" "}
                + <strong>class level</strong>
              </p>
            </div>
            <Text>
              Challenge is a roll in which your character faces a direct
              opposition from another character or entity. For example, all
              fights are challenges, but card match or a debate can be as well.
            </Text>
            <Text>
              In challenge both sides roll a <strong>D20 die</strong> and{" "}
              <strong>add the class level</strong> of a class the skill they are
              performing belongs under. <strong>The higher result wins.</strong>{" "}
              If the results are equal, the defender wins.
            </Text>
          </HorizontalCard>
          <HorizontalCard imageSrc="/img/dice/initiative.jpg">
            <h3 className="font-bold text-2xl mb-3">Initiative</h3>
            <div className="flex flex-row items-center justify-start w-fit gap-3 rounded-md bg-slate-700 border border-slate-600 py-3 px-5 my-3">
              <D20 display={"20"} noLabel />
              <p className="text-xl font-bold"></p>
            </div>
            <Text>
              Initiative is a roll that determines the order of actions in
              combat. At the start of combat, all participants roll initiative
              to see who acts first, second, and so on.
            </Text>
            <Text>
              Initiative roll features one <strong>D20 die</strong>. The higher
              the result, the earlier the character acts in the combat round.
            </Text>
          </HorizontalCard>
        </div>

        <h3 className="font-bold text-2xl mt-12 mb-3">Damage rolls</h3>
        <Text>
          Damage rolls are used to determine the amount of harm inflicted on an
          NPC target when an attack or harmful action is successful. Like in 5E,
          different weapons and abilities deal different types and amounts of
          damage.
        </Text>

        <Text>
          Damage rolls are always calculated using the specific damage dice (for
          example, a sword might use a D8) associated with the weapon or ability
          being used with the respective class level modifier added.
        </Text>

        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-sm mb-5 border-collapse">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="py-2 px-3 text-left">Weapon</th>
                <th className="py-2 px-3 text-left">Damage Dice</th>
                <th className="py-2 px-3 text-left">Damage Type</th>
                <th className="py-2 px-3 text-left">Properties</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Club</td>
                <td className="py-2 px-3">1d4</td>
                <td className="py-2 px-3">Bludgeoning</td>
                <td className="py-2 px-3">Light</td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Dagger</td>
                <td className="py-2 px-3">1d4</td>
                <td className="py-2 px-3">Piercing</td>
                <td className="py-2 px-3">Finesse, Light, Thrown (20/60)</td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Greatclub</td>
                <td className="py-2 px-3">1d8</td>
                <td className="py-2 px-3">Bludgeoning</td>
                <td className="py-2 px-3">Two-Handed</td>
              </tr>

              {/* Row 4 */}
              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Handaxe</td>
                <td className="py-2 px-3">1d6</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Light, Thrown (20/60)</td>
              </tr>

              {/* Row 5 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Javelin</td>
                <td className="py-2 px-3">1d6</td>
                <td className="py-2 px-3">Piercing</td>
                <td className="py-2 px-3">Thrown (30/120)</td>
              </tr>

              {/* Row 6 */}
              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Light Hammer</td>
                <td className="py-2 px-3">1d4</td>
                <td className="py-2 px-3">Bludgeoning</td>
                <td className="py-2 px-3">Light, Thrown (20/60)</td>
              </tr>

              {/* Row 7 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Mace</td>
                <td className="py-2 px-3">1d6</td>
                <td className="py-2 px-3">Bludgeoning</td>
                <td className="py-2 px-3"></td>
              </tr>

              {/* Row 8 */}
              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Quarterstaff</td>
                <td className="py-2 px-3">1d6 (1d8 versatile)</td>
                <td className="py-2 px-3">Bludgeoning</td>
                <td className="py-2 px-3">Versatile (1d8)</td>
              </tr>

              {/* Row 9 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Sickle</td>
                <td className="py-2 px-3">1d4</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Light</td>
              </tr>

              {/* Row 10 */}
              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Spear</td>
                <td className="py-2 px-3">1d6 (1d8 versatile)</td>
                <td className="py-2 px-3">Piercing</td>
                <td className="py-2 px-3">Thrown (20/60), Versatile (1d8)</td>
              </tr>

              {/* ---- Martial Weapons ---- */}

              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Battleaxe</td>
                <td className="py-2 px-3">1d8 (1d10)</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Versatile (1d10)</td>
              </tr>

              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Flail</td>
                <td className="py-2 px-3">1d8</td>
                <td className="py-2 px-3">Bludgeoning</td>
                <td className="py-2 px-3"></td>
              </tr>

              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Glaive</td>
                <td className="py-2 px-3">1d10</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Heavy, Reach, Two-Handed</td>
              </tr>

              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Greataxe</td>
                <td className="py-2 px-3">1d12</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Heavy, Two-Handed</td>
              </tr>

              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Greatsword</td>
                <td className="py-2 px-3">2d6</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Heavy, Two-Handed</td>
              </tr>

              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Halberd</td>
                <td className="py-2 px-3">1d10</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Heavy, Reach, Two-Handed</td>
              </tr>

              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Longsword</td>
                <td className="py-2 px-3">1d8 (1d10)</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Versatile (1d10)</td>
              </tr>

              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Maul</td>
                <td className="py-2 px-3">2d6</td>
                <td className="py-2 px-3">Bludgeoning</td>
                <td className="py-2 px-3">Heavy, Two-Handed</td>
              </tr>

              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Rapier</td>
                <td className="py-2 px-3">1d8</td>
                <td className="py-2 px-3">Piercing</td>
                <td className="py-2 px-3">Finesse</td>
              </tr>

              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Scimitar</td>
                <td className="py-2 px-3">1d6</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Finesse, Light</td>
              </tr>

              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Shortsword</td>
                <td className="py-2 px-3">1d6</td>
                <td className="py-2 px-3">Piercing</td>
                <td className="py-2 px-3">Finesse, Light</td>
              </tr>

              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Trident</td>
                <td className="py-2 px-3">1d6 (1d8)</td>
                <td className="py-2 px-3">Piercing</td>
                <td className="py-2 px-3">Thrown (20/60), Versatile (1d8)</td>
              </tr>

              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Warhammer</td>
                <td className="py-2 px-3">1d8 (1d10)</td>
                <td className="py-2 px-3">Bludgeoning</td>
                <td className="py-2 px-3">Versatile (1d10)</td>
              </tr>

              <tr className="bg-slate-700">
                <td className="py-2 px-3 font-bold">Whip</td>
                <td className="py-2 px-3">1d4</td>
                <td className="py-2 px-3">Slashing</td>
                <td className="py-2 px-3">Finesse, Reach</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DiceRollsPage;
