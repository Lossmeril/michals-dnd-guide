import { Ability } from "@/types/classes";
import { Perk } from "@/types/perks";

export const perks: { [key: string]: Perk } = {
  // -- RACIAL PERKS
  ForTheKing: {
    name: "For the king",
    desc: "When facing a skill check or a challenge regarding a superior or an organisation you pledge you aliegance to, every scar gives you one extra resource to work with.",
  },
  MaidenFair: {
    name: "Maiden fair",
    desc: "When dealing with a person of the opposite gender that would be attracted to you, they will have a disadvantage in every challenge.",
  },
  IKnowAGuy: {
    name: "I know a guy",
    desc: "You can determine that a stranger owes you a favour from the past, or that you both have a common acquaintance which is on good terms with both of you.",
    activationPrice: {
      cost: 1,
      ability: Ability.charisma,
    },
  },
  IronLiver: {
    name: "Iron liver",
    desc: "You have an advantage at resisting alcohol.",
  },
  BisonSkin: {
    name: "Bison skin",
    desc: "Even when not wearing any armour, you still get a +1 resistance bonus on exhaustion.",
  },

  // -- FIGHTER PERKS
  CrowdChampion: {
    name: "Crowd Champion",
    desc: "You gain advantage in a close combat against humans and animals.",
  },
  Gladiator: {
    name: "Gladiator",
    desc: "You gain advantage in a close combat with improvised weapons against humans and animals.",
  },
  BrawnsOverBrains: {
    name: "Brawns over brains",
    desc: "You gain advantage in activities requiring a raw strength.",
  },
  FlyingWeapon: {
    name: "Flying weapon",
    desc: "You can throw your primary weapon at a single target and still use your Fighter level as a proficiency bonus.",
  },
  KnowThyEnemy: {
    name: "Know thy enemy",
    desc: "You can read people's figthing styles. When fighting a human opponent, you can determine they have a weakness or a favourite tactic they will use.",
    activationPrice: {
      cost: 1,
      ability: Ability.charisma,
    },
  },

  // -- HUNTER PERKS

  // -- JUGGLER PERKS
  Quickchange: {
    name: "Quickchange",
    desc: "You are the master of improvisation. You can disguise yourself as someone else (e.g., old man, beggar) even though you did not have enough time to prepare. However, you cannot impersonate anyone specific.",
    activationPrice: {
      cost: 1,
      ability: Ability.body,
    },
  },
  Androgynous: {
    name: "Androgynous",
    desc: "You can disguise yourself a another gender and switch between gendered-disguises on a quick basis. This perk does not apply when you have a gender-distinguishing feature such as beard.",
  },
  StartingABand: {
    name: "Starting a band",
    desc: "When performing as a group, you can use defense manoeuvre to counter actions against other performancers. Others can use your charisma-s points to avert their own failures. You can also use the widespread manoeuvre for free.",
  },
  DonJuan: {
    name: "Don Juan",
    desc: "You gain advantage in flirting, seducing and extracting information from targets that would be attracted to you.",
  },
  HiddenPocket: {
    name: "Hidden pocket",
    desc: "Even after being searched, you can determine your character still has on them an item up to the size of a closed fist.",
    activationPrice: {
      cost: 1,
      ability: Ability.soul,
    },
  },
  // -- MEDIC PERKS

  // -- INCANTOR PERKS

  // -- WARRIOR PERKS

  // -- RANGER PERKS

  // -- WITCHER PERKS

  WitcherSenses: {
    name: "Witcher senses",
    desc: "You posses the ability to sense a presence of monsters and supernatural beings.",
  },

  // -- SCOUT PERKS
  OakleafBearer: {
    name: "Oakleaf bearer",
    desc: "Your archery reflexes are god-like. Every time a conflict starts, you can skip everyone else's initiative roll and shoot a first arrow. You can only shoot one arrow.",
    activationPrice: {
      cost: 1,
      ability: Ability.soul,
    },
  },
  MrWorldwide: {
    name: "Mr Worldwide",
    desc: "If person is speaking a language you don't understand, you can make an educated guess on what they are saying. You can also communicate with them in a simple matter.",
    activationPrice: {
      cost: 1,
      ability: Ability.soul,
    },
  },

  // -- SHAMAN PERKS

  Skinchanger: {
    name: "Skinchanger",
    desc: "If you own a thing that once belonged to an animal, you can skinchange into said animal. While retain your stats, and gain proficiencies and special abilities of said animal, your actions are limited by the abilities of your new body (e.g., you cannot pick locks while in wolf's body)",
    activationPrice: {
      cost: 2,
      ability: Ability.body,
    },
  },
  InvisibleRider: {
    name: "Invisible rider",
    desc: "You can warg into an animal that is friendly to you. While warged you sense the world through the animal's body and can feel its emotions. While you can give directions to said animal, you cannot directly control it. While warged, you lose control of your body and are unaware of its state.",
    activationPrice: {
      cost: 1,
      ability: Ability.charisma,
    },
  },
  AnimalControl: {
    name: "Animal control",
    desc: "You can warg into and can completely control an animal that is within your sight. However, to fully maintain a control, you lose the connection to your body. You can control the animal even if it struggles against you, however, you need to succeed each turn in keeping the connectionn unsevered.",
    activationPrice: {
      cost: 1,
      ability: Ability.charisma,
    },
  },
  PiedPiper: {
    name: "Pied Piper",
    desc: "When playing an instrument, you are able to control animals similarly to Shaman's Animal Control. However, you are only able to give it general commands (e.g. ‘follow me’ or ‘attack on sight’). The spell is broken the moment you stop playing. Activation price is per animal and widespread does not apply.",
    activationPrice: {
      cost: 1,
      ability: Ability.soul,
    },
  },
};

export const perksArray = Object.keys(perks).map((key) => {
  return {
    id: key,
    perkValues: perks[key],
  };
});
