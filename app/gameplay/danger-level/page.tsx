import Text from "@/components/text";

const DangerLevelPage = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Danger Level</h2>
      <p className="mb-3">
        Thing that sound complicated but is actually very easy and a core
        mechanic is a <strong>Danger Level</strong>. Danger Level is a numeric
        value representing the difficulty of the situation your character finds
        themselves. Higher the value, tougher the circumstances. Usually, the
        default value is 3.
      </p>
      <Text>
        Whenever your character wants to avoid bad outcome, it will spend the
        amount of resources equal to current danger level. More on this is
        explained in the
      </Text>
    </div>
  );
};

export default DangerLevelPage;
