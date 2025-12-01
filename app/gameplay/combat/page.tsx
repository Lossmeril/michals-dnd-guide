"use client";

import Text, { H2, H3, H4, WikiLink } from "@/components/text";

const CombatPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* INTRO */}
      <div className="w-full">
        <H2>Combat</H2>
        <Text>
          Combat is a way to resolve situations where more than two characters
          are in direct conflict, and where the outcome is uncertain.
        </Text>
        <Text>
          Combat is structured into <strong>rounds</strong>, where each
          character gets to act in a specific order determined by their{" "}
          <strong>Initiative roll</strong>. During their turn, a character can
          perform actions such as attacking, moving, or using abilities.
        </Text>
        <Text>
          A character may perform <strong>one action</strong> and{" "}
          <strong>one movement</strong> per turn, unless otherwise specified by
          their abilities or circumstances. Some abilities may grant the
          character a bonus action or reaction.
        </Text>

        <H3>Movement</H3>
        <Text>
          During their turn, a character can move up to their movement speed.
          Movement can be broken up before and after an action.
        </Text>

        <H3>Actions</H3>
        <Text>
          Actions are the main activities a character can perform. Common
          actions include attacking with a weapon, casting a spell, or using an
          item. Some actions may require a roll to determine success.
        </Text>

        <H4>Types of actions</H4>

        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-sm mb-5 border-collapse">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="py-2 px-3 text-left">Action</th>
                <th className="py-2 px-3 text-left">Description</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-slate-800">
                <td className="py-2 px-3 font-bold">Attack</td>
                <td className="py-2 px-3">
                  During your turn you may attack a target within your reach
                  with any weapon you are wielding. You may target only one
                  target unless a{" "}
                  <WikiLink href={"/gameplay/manoeuvres"}>
                    widespread manoeuvre
                  </WikiLink>{" "}
                  is utilised.
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-slate-800 bg-slate-700">
                <td className="py-2 px-3 font-bold">Casting a spell</td>
                <td className="py-2 px-3">
                  You may cast a spell as per your character&apos;s abilities
                  and the rules governing spellcasting.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CombatPage;
