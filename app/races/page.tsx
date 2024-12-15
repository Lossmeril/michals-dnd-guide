import Card, { RaceCard } from "@/components/card";
import Text from "@/components/text";
import { playableRaces } from "@/data/races/races";

const RacesPage = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Playable Races</h2>
      <p className="mb-3">
        The creation of a character starts at picking their race. There are five
        basic races: <strong>Humans</strong>, <strong>Elves</strong>,{" "}
        <strong>Dwarves</strong>, <strong>Halflings</strong> (or Hobbits) and{" "}
        <strong>Krolls</strong> (who are an unique race to this D&D system).
      </p>
      <Text>
        The race has no bigger impact on the gameplay besides one racial special
        skill that your character will gain. However, it has big implications
        for your character&apos;s backstory and how other people will react to
        them. But in the end, just have fun with what you want to play.
      </Text>
      <div className="my-8">
        <Card filled>
          <h5 className="mb-4 font-bold">Frequently asked questions:</h5>
          <p className="mb-4">
            <strong>Can I play a fairy?</strong>
            <br />
            Well, no, but actually yes. I will not accept a fairy race as those
            are a domain of high fantasy, while I like to keep things more
            gritty. But why not play a elf druid who comes from an ancient and
            nature-connected family? To-may-to / To-mah-to.
          </p>
          <p className="mb-4">
            <strong>Can I play a vampire?</strong>
            <br />
            No, Gareth.
          </p>
          <p className="mb-4">
            <strong>Can I play a ghost?</strong>
            <br />
            No, Gareth.
          </p>
          <p className="mb-4">
            <strong>Why?</strong>
            <br />
            While technically possible, I am not making a new ruleset just for
            you just so you can get a stake driven through your heart by first
            village boy that comes around.
          </p>
          <p className="mb-4">
            <strong>But I thought I could be anything... :(</strong>
            <br />
            ...
          </p>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {playableRaces.map((race) => (
          <RaceCard key={race.name} race={race} />
        ))}
      </div>
    </div>
  );
};

export default RacesPage;
