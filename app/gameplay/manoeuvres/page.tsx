"use client";

import Card from "@/components/card";
import Text from "@/components/text";

const ManoeuvresPage = () => {
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

      {/* GRID OF MANOEUVRES */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {/* PRECISELY */}
        <Card filled>
          <h3 className="font-bold text-xl mb-2">Precise</h3>
        </Card>

        {/* POWERFULLY */}
        <Card filled>
          <h3 className="font-bold text-xl mb-2">Powerfully</h3>
        </Card>

        {/* CUNNINGLY */}
        <Card filled>
          <h3 className="font-bold text-xl mb-2">Cunningly</h3>
        </Card>

        {/* QUICKLY */}
        <Card filled>
          <h3 className="font-bold text-xl mb-2">Quickly</h3>
        </Card>

        {/* DEFENSIVELY */}
        <Card filled>
          <h3 className="font-bold text-xl mb-2">Defense</h3>
          <Text>
            In combat, you have only one action per turn. It may happen that you
            need to defend yourself after already spending your action, or want
            to keep your action to attack instead.
          </Text>
          <Text>
            In that case, using the <strong>Defense</strong> manoeuvre allows
            you to defend yourself without spending your action.
          </Text>
        </Card>

        {/* WIDELY */}
        <Card filled imageSrc="/img/vítek.jpg">
          <h3 className="font-bold text-xl mb-2">Widespread</h3>
          <Text>
            By default, each of your actions can target only one creature or
            element of the scene. Utilisation of the widespread manoeuvre allows
            you to extend the effect of your action to multiple targets within
            the scene.
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default ManoeuvresPage;
