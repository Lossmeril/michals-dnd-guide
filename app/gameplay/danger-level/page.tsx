import Text from "@/components/text";
import Image from "next/image";

const DangerLevelPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row flex-nowrap gap-10">
      <div className="w-full md:w-1/2 lg:w-3/4">
        <h2 className="font-bold text-3xl mb-5">Danger Level</h2>
        <p className="mb-3">
          Thing that sound complicated but is actually very easy and a core
          mechanic is a <strong>Danger Level</strong>. Danger Level is a numeric
          value representing the difficulty of the situation your character
          finds themselves. Higher the value, tougher the circumstances.
          Usually, the default value is 3.
        </p>
        <Text>
          Whenever your character wants to avoid bad outcome, it will spend the
          amount of resources equal to current danger level. More on this is
          explained in the
        </Text>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="relative w-full h-[60vh] overflow-hidden rounded-lg border border-slate-600">
          <Image
            src={"/img/vítek.jpg"}
            alt={"Vítek"}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DangerLevelPage;
