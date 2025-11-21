"use client";

import Text from "@/components/text";

const DiceRollsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* INTRO */}
      <div className="w-full lg:w-3/4">
        <h2 className="font-bold text-3xl mb-5">Manoeuvres</h2>

        <Text>
          Manoeuvres are buffs or special techniques that characters can use to
          sway the scales in their favour during actions.
        </Text>
      </div>
    </div>
  );
};

export default DiceRollsPage;
