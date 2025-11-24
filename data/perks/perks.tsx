import { Perk } from "@/types/perks";
import { Resource } from "@/types/resources";

export const perks: { [key: string]: Perk } = {
  // -- RACIAL PERKS
  // HUMAN
  ForTheKing: {
    name: "For the king",
    desc: "When facing a skill check or a challenge regarding a superior or an organisation you pledge you aliegance to, every scar gives you one extra resource to work with.",
  },
  SticksAndStones: {
    name: "Sticks and stones",
    desc: "Words do not faze you. Every charisma scar grants you a +1 resource to spend.",
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
      ability: Resource.charisma,
    },
  },

  // ELF
  BehindBlueEyes: {
    name: "Behind blue eyes",
    desc: "The wisdom of the ages guides you. Every soul scar grants you a +1 resource to spend.",
  },
  EternalNobility: {
    name: "Eternal nobility",
    desc: "The elven charisma quickly overshadows gossip. Healing a charisma scar costs only 4 resources.",
  },
  VeilOfNight: {
    name: "Veil of night",
    desc: "When you stand motionless in darkness or dim light, you become nearly invisible to others. You are considered hidden from creatures that rely on sight to detect you until you move, the light level changes, or you are approached within 5 feet range.",
  },

  // DWARF
  NightEyes: {
    name: "Night eyes",
    desc: "Your days underground have paid off. You can see in the dark as if it were foggy daylight.",
  },
  SkinMadeOfIronSteelInYourBones: {
    name: "Skin made of iron, steel in your bones",
    desc: "You are a peak dwarwen specimen in terms of toughness. Healing a body scar costs only 4 resources.",
  },
  IronLiver: {
    name: "Iron liver",
    desc: "You have an advantage at resisting alcohol.",
  },
  BloodBond: {
    name: "Blood bond",
    desc: "You can determine that a dwarven character belongs to your clan or family, that you both share a common ancestor, or that the character is in debt to your kin.",
    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
  },

  // HOBBIT
  SixthSense: {
    name: "Sixth sense",
    desc: "You have an uncanny ability to sense danger, even though you don't have any clues. This perk has a 50% chance to activate, with the DM performing a hidden roll.",
  },
  SilentFeet: {
    name: "Silent feet",
    desc: "You gain an advantage in sneaking and moving silently whenever walking barefoot.",
  },
  Connosieur: {
    name: "Connosieur",
    desc: "You can determine that your character has a snack on them, be it a flask of ale, a bag of raisins, a fistful of exotic tobacco or a small piece of cheese.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  // KROLL
  Echolocation: {
    name: "Echolocation",
    desc: "You can hear even the slightest sounds. You can navigate in total darkness and determine the layout of an unfamiliar area as long as there are sounds present.",
  },
  Fury: {
    name: "Fury",
    desc: "Every Body scar you have grants you a +1 resource to spend.",
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
    desc: "You can throw a non-throwing weapon and use its proper damage dice instead of treating it as an improvised weapon.",
  },
  KnowThyEnemy: {
    name: "Know thy enemy",
    desc: "You can read people's figthing styles. When fighting a human opponent, you can determine they have a weakness or a favourite tactic they will use.",
    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
  },

  // -- HUNTER PERKS

  // -- JUGGLER PERKS
  Quickchange: {
    name: "Quickchange",
    desc: "You are the master of improvisation. You can disguise yourself as someone else (e.g., old man, beggar) even though you did not have enough time to prepare. However, you cannot impersonate anyone specific.",
    activationPrice: {
      cost: 1,
      ability: Resource.body,
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
      ability: Resource.soul,
    },
  },
  // -- MEDIC PERKS

  OmniPotion: {
    name: "Omni potion",
    desc: "You can create a healing substance that can heal any type of wound and is universal.",
    activationPrice: {
      cost: 1,
      ability: Resource.material,
      priceUnit: "unit",
    },
  },

  // -- INCANTOR PERKS

  // -- WARRIOR PERKS

  MountainThatRides: {
    name: "Mountain that rides",
    desc: "Your sheer strength allows you to wield two-handed weapons with one hand, allowing you to use a shield or another weapon in your off-hand.",
  },

  // -- RANGER PERKS

  // -- WITCHER PERKS

  WitcherSenses: {
    name: "Witcher senses",
    desc: "You posses the ability to sense a presence of monsters and supernatural beings.",
  },
  TiwazSign: {
    name: "Tiwaz sign",
    desc: "A witcher sign that acts as a temporary shield. When activated, you may use a Defense manoeuvre indefinitely until the end of the conflict. You may only use this perk once per conflict.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  // -- SCOUT PERKS
  OakleafBearer: {
    name: "Oakleaf bearer",
    desc: "Your archery reflexes are god-like. Every time a conflict starts, you can skip everyone else's initiative roll and shoot a first arrow. You can only shoot one arrow.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },
  MrWorldwide: {
    name: "Mr Worldwide",
    desc: "If person is speaking a language you don't understand, you can make an educated guess on what they are saying. You can also communicate with them in a simple matter.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  // -- SHAMAN PERKS

  Skinchanger: {
    name: "Skinchanger",
    desc: "If you own a thing that once belonged to an animal, you can skinchange into said animal. While retain your stats, and gain proficiencies and special abilities of said animal, your actions are limited by the abilities of your new body (e.g., you cannot pick locks while in wolf's body)",
    activationPrice: {
      cost: 2,
      ability: Resource.body,
    },
  },
  InvisibleRider: {
    name: "Invisible rider",
    desc: "You can warg into an animal that is friendly to you. While warged you sense the world through the animal's body and can feel its emotions. While you can give directions to said animal, you cannot directly control it. While warged, you lose control of your body and are unaware of its state.",
    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
  },
  AnimalControl: {
    name: "Animal control",
    desc: "You can warg into and can completely control an animal that is within your sight. However, to fully maintain a control, you lose the connection to your body. You can control the animal even if it struggles against you, however, you need to succeed each turn in keeping the connectionn unsevered.",
    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
  },
  PiedPiper: {
    name: "Pied Piper",
    desc: "When playing an instrument, you are able to control animals similarly to Shaman's Animal Control. However, you are only able to give it general commands (e.g. ‘follow me’ or ‘attack on sight’). The spell is broken the moment you stop playing. Activation price is per animal and widespread does not apply.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },
};

export const perksArray = Object.keys(perks).map((key) => {
  return {
    id: key,
    perkValues: perks[key],
  };
});
