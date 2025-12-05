import { Magic, AdvancedClass, ClassRank, Resource } from "@/types/classes";
import { basicClasses, basicClassesEnum } from "./basic";
import { perks } from "../perks/perks";

const defaultAdvancedClass = { classRank: ClassRank.advanced };

export const advancedClasses: AdvancedClass[] = [
  {
    ...defaultAdvancedClass,
    name: "Warrior",
    desc: "A battlefield veteran who has mastered the art of controlled violence. Warriors combine the discipline of a trained soldier with the agility and cunning of a duelist, allowing them to strike with overwhelming precision. Whether leading a cavalry charge, breaking enemy lines, or dueling in narrow corridors, Warriors excel at reading the flow of combat and turning every opening into a decisive advantage.",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.juggler],
    ],
    isMagic: Magic.false,
    skills: [
      {
        name: "Mounted Combat against Humans and Beasts",
        desc: "Fighting on a mount against humans and beasts, armed or unarmed. Includes knowledge of how to handle and control the mount in combat situations and strategy of mounted combat.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Ironworks",
        desc: "Smithing, repairing and maintaining metal armor and weapons, including knowledge of different types of metals, forging techniques, maintenance practices, caring for weapons and tools, horseshoe maintenance.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Warrior Knowledge",
        desc: "Strategy, tactics and history of warfare, planning battles, finding the ideal terrain for battle, understanding formations and maneuvers, estimating enemy capabilities and weaknesses, etiquette and customs of military life, heraldry, laws and traditions of war.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "High Society Influence",
        desc: "Gaining connections in noble and royal circles, understanding court etiquette, networking with influential figures, leveraging social status for favors or information, navigating political landscapes, keeping a good reputation, persuading using connections, undesrtanding court intrigues and connections, gathering intelligence using side channels.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Combat Leadership",
        desc: "Recruting and leading troops in battle, inspiring and motivating soldiers, training and disciplining troops, making strategic decisions under pressure, strengthening morale, coordinating unit movements, managing logistics and supplies during campaigns, commanding, battle tactics, orientation in battle",
        ability: Resource.charisma,
        unique: false,
      },
    ],
    perks: [
      perks.MountainThatRides,
      perks.Rider,
      perks.Jockey,
      perks.Bastion,
      perks.Parry,
      perks.DoubleTrouble,
      perks.DefenderOfPeople,
      perks.WarDancer,
      perks.WellKnown,
      perks.LegendaryWarrior,
      perks.MonasticSchool,
      perks.Herold,
    ],
  },

  {
    ...defaultAdvancedClass,
    name: "Ranger",
    desc: "A lone sentinel of the borderlands, the Ranger blends martial training with unmatched wilderness skill. They can track foes across impossible terrain, navigate forests and mountains without leaving a trace, and deliver deadly ranged attacks with calm accuracy. Whether stalking monsters or scouting ahead of an army, Rangers excel where civilization ends and danger begins.",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.hunter],
    ],
    isMagic: Magic.false,
    skills: [
      {
        name: "Close and Ranged Foot Combat Against Monsters",
        desc: "Both armed and unarmed combat techniques against monsters, maintaining calm when facing terrifying creatures. Ranged combat against monsters, including knowledge of monster weaknesses and tactics to exploit them.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Trophies",
        desc: "Taking trophies from defeated monsters, understanding their significance, preparing and preserving them, understanding their medicinal and alchemical purposes, estimating their values.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Woodworking",
        desc: "Crafting and shaping wood for primitive tools and weapons, construction of simple wooden structures. Construction of simple boats and rafts, basic furniture making, repairing wooden items, knowledge of different types of wood and their properties.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Ranger Knowledge",
        desc: "Understanding of monsters, their habits, habitats, strengths and weaknesses, estimating their health and level. Also includes intimidation tactics against monsters.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Monster Taming",
        desc: "Taming and controlling simple monsters, understanding their behavior and needs, basic training techniques and commands, using monsters for tasks and as mounts.",
        ability: Resource.charisma,
        unique: true,
      },
      {
        name: "Leading in the Wild",
        desc: "Advanced knowledge of leading groups through wilderness areas, including navigation, foraging, setting up camps, ensuring safety from natural hazards and predators, maintaining group morale and cohesion in challenging environments, hiding group movements and tracks, avoiding detection.",
        ability: Resource.charisma,
        unique: false,
      },
    ],
    perks: [
      perks.MakeHaste,
      perks.HunterInstinct,
      perks.Berserk,
      perks.ToughOfBody,
      perks.SoonMayTheWellermanCome,
      perks.TrophyHunter,
      perks.FriendOfAllMonsters,
      perks.Carpenter,
      perks.PackLeader,
      perks.AnimalDoctor,
      perks.NaturalAdvantage,
    ],
  },

  {
    ...defaultAdvancedClass,
    name: "Witcher",
    desc: "In order to hunt monsters, you have to become one. Witchers are supernatural warriors designed to track down and kill creatures not from this world. In their fight, they rely on a twisted version of their own magic - signs, through which they can cause burning pain to every ghost, demon or vampire.",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.medic],
    ],
    isMagic: Magic.semi,
    skills: [
      {
        name: "Close combat against Monsters, Fiends and Undead",
        desc: "In-depth knowledge of monster anatomy, physiology and weaknesses, understanding how to exploit these weaknesses in combat, knowledge of monster life cycles, habitats and behaviors, ability to identify different monster species and their characteristics.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Trophy Taking from Monsters, Fiends and Undead",
        desc: "Taking trophies from defeated monsters, fiends and undead, understanding their significance, preparing and preserving them, understanding their medicinal and alchemical purposes, estimating their values.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Witcher Signs",
        desc: "Creation of substances needed to cast witcher signs, casting witcher signs.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Witcher Knowledge",
        desc: "Knowledge of monsters, fiends and undead, their habits, habitats, strengths and weaknesses, estimating their health and level. Also includes intimidation tactics against monsters, fiends and undead and estimating their limits.",
        ability: Resource.soul,
        unique: true,
      },
    ],
    coreSpells: [perks.IsaSign],
    perks: [
      perks.IsaSign,
      perks.WitcherSenses,
      perks.TiwazSign,
      perks.BerkanoSign,
      perks.RaidhoSign,
      perks.OthalaSign,
      perks.MutatedBody,
    ],
  },

  {
    ...defaultAdvancedClass,
    name: "Scout",
    desc: "Quick, observant, and impossible to corner, the Scout excels at infiltration, reconnaissance, and lightning-fast reactions. They move through forests, ruins, and battlefields with ease, slipping past guards and spotting threats long before others notice. In tense moments, Scouts rely on agility and cunning to act first—and ensure their allies have the upper hand before a fight even begins.",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.juggler],
    ],
    isMagic: Magic.false,
    skills: [
      {
        name: "Ranged Mounted Combat against Humans and Beasts",
        desc: "Using ranged weapons while mounted against humans and beasts, both shooting and throwing weapons. Includes knowledge of how to handle and control the mount while using ranged weapons in combat situations.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Hiding Information",
        desc: "Ciphering and decoding messages, using secret codes and ciphers, creating and recognizing invisible inks, steganography techniques, knowledge of slangs and secret languages, disguising written and spoken communication, communicating without words, ventriloquism.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Underground Influence",
        desc: "Gaining connections in criminal and underground circles, understanding the etiquette of the underworld, networking with smugglers, thieves, and other illicit figures, leveraging for favors or information, gatherting intelligence using side channels, detecting lies and deceptions, detecting and destroying covert operations, selling and buying illegal goods, navigating black markets, kidnaqpping, ransom and blackmail tactics.",
        ability: Resource.charisma,
        unique: true,
      },
      {
        name: "Leading People Outside of Combat",
        desc: "Hiring, recruting and incentivizing groups of people, inspiring and motivating them, managing group dynamics, group training and discipline, leading, coordinating and commanding group activities.",
        ability: Resource.charisma,
        unique: false,
      },
      {
        name: "Healing Human Charisma",
        desc: "Uncovering intrigues, lies and deceptions, identifying reputation damage and other sources of loss of influence, restoring lost reputation and influence, breaking gossip and slanders, creating a positive public image, negotiating and mediating conflicts, standing up for public forgivness.",
        ability: Resource.charisma,
        unique: false,
      },
    ],
    perks: [perks.OakleafBearer, perks.MrWorldwide],
  },

  {
    ...defaultAdvancedClass,
    name: "Shaman",
    desc: "Treading the boundary between the physical and the spiritual, the Shaman communes with ancestral spirits and the essence of living creatures. They read omens in wind and flame, call upon totems for protection, and channel primal magic through trance and ritual. Whether guiding a tribe or wandering in search of visions, a Shaman is a bridge between the mortal world and the unseen.",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.medic],
    ],
    isMagic: Magic.semi,
    skills: [
      {
        name: "Narcotic substances",
        desc: "Creating and serving narcotic substances (affecting the Soul resource), knowledge of dosing, preparation of antidotes.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Foresight",
        desc: "Ability to summon spirits from the spirit world, enquiring about past and present events, opening gateways to the spirit world, uncovering knowledge about people, places or objects in the spirit world, even though they may be protected.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Animal Healing",
        desc: "Healing the bodies and souls of animals, understanding their anatomy and physiology, treating injuries and illnesses, using herbal remedies and traditional healing techniques, calming and soothing distressed animals.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Animal Magic",
        desc: "Knowledge of animal limits and capabilities, using magic to enhance animal emotions, communicating with animals, reading their minds, warging into animals, breaking animal magic spells and charms.",
        ability: Resource.charisma,
        unique: true,
      },
    ],
    perks: [perks.Skinchanger, perks.InvisibleRider, perks.AnimalControl],
  },

  {
    ...defaultAdvancedClass,
    name: "Druid",
    desc: "Guardians of ancient groves and forgotten paths, Druids channel the quiet but immense power of nature. Their magic shapes vines, storms, and stone; their knowledge of the natural world is unmatched. Whether healing allies, hindering foes with living roots, or invoking elemental fury, Druids stand as protectors of the cycle of life—patient, wise, and utterly relentless when the balance is threatened.",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: Magic.true,
    skills: [
      {
        name: "Stone magic",
        desc: "Controlling and shaping stone, earth and metal using magic acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Water magic",
        desc: "Controlling and shaping water, ice and steam using magic acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Plant magic",
        desc: "Controlling and shaping plants and vegetation using magic acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
    ],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Rogue",
    desc: "A master of urban shadows and subtle hands, the Rogue thrives in alleys, markets, and the underbelly of cities. They are experts in locks, traps, disguises, and misdirection, turning every obstacle into an opportunity. Whether infiltrating a manor, preparing deadly ambushes, or slipping unseen through crowds, a Rogue’s true weapon is their ability to stay one step ahead of everyone else.",

    classes: [
      basicClasses[basicClassesEnum.juggler],
      basicClasses[basicClassesEnum.medic],
    ],
    isMagic: Magic.false,
    skills: [
      {
        name: "Aerial acrobatics",
        desc: "Scaling smooth surfaces and ceilings, long-term hanging from ropes, ledges or ceilings, jumping long distances, off-balance landings, long-term hanging upside-down, ability to use other activities while hanging or climbing.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Mechanisms",
        desc: "Understanding, creating, and manipulating mechanical devices, locks, traps, and other intricate systems, estimating their strength and weaknesses, creating and breaking locks, camouflaging manipulation, disarming mechanical traps.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Forgery",
        desc: "Estimating the authenticity and value of documents, creating convincing forgeries, understanding different types of inks, papers, and seals, replicating handwriting and signatures, aging documents to appear authentic.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Contact poisons",
        desc: "Creating poisons that take effect upon contact with blood or other bodily fluids, knowledge of dosing, preparation of antidotes, masking the presence of poisons on weapons or objects.",
        ability: Resource.soul,
        unique: true,
      },
    ],
    perks: [perks.YourLipsAreVenomousPoison],
  },

  {
    ...defaultAdvancedClass,
    name: "Alchemist",
    desc: "A master of transformative science and volatile wonder. Alchemists craft potent elixirs, corrosive substances, enchanted oils, and complex mechanical traps. Their mixtures can mend flesh, melt steel, or reshape reality for a brief but critical moment. Whether brewing in a workshop or improvising explosive solutions on the battlefield, Alchemists solve problems through ingenuity—and very loud reactions.",

    classes: [
      basicClasses[basicClassesEnum.medic],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: Magic.true,
    skills: [
      {
        name: "Alchemy knowledge",
        desc: "Understanding magical and non-magical substances, their properties, interactions, and effects, estimating the potency and stability of mixtures, identifying ingredients and components, knowledge of alchemical processes and techniques. Sourcing rare and exotic materials for alchemical use.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Explosives, corrosives and gases",
        desc: "Creating volatile mixtures that produce explosive, corrosive, or gaseous effects, knowledge of safe handling and storage, understanding triggering mechanisms and delivery methods, estimating blast radius and damage potential, preparation of antidotes and countermeasures.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Elixirs",
        desc: "Creating potions that produce enhancing and/or magical effects when consumed, knowledge of dosing, preparation of antidotes, understanding side effects and interactions with other substances.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Artificial Life",
        desc: "Creating and controlling artificial beings, ability to breathe life into non-living materials, breaking and controlling artificial life forms created by others.",
        ability: Resource.charisma,
        unique: true,
      },
      {
        name: "Transmutation magic",
        desc: "Controlling and shaping the material and energy acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
    ],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Warlock",
    desc: "Bound to forbidden lore or eldritch forces, the Warlock channels power mortals were never meant to wield. Their magic is sharp, aggressive, and intoxicating—fueled by pacts, rituals, or the whispering of unseen patrons. Whether feared prophet or relentless destroyer, a Warlock walks a dangerous line between mastery and corruption.",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: Magic.true,
    skills: [
      {
        name: "Fire magic",
        desc: "Controlling and shaping fire, smoke and lightning acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Wind magic",
        desc: "Controlling and shaping wind acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Evocation magic",
        desc: "Controlling and shaping the raw magical energy acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Abjuration magic",
        desc: "Creating protective wards and barriers acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
    ],
    coreSpells: [perks.FireBending, perks.AirBending],
    perks: [perks.Fireball, perks.FireShield, perks.SalamanderSigil],
  },

  {
    ...defaultAdvancedClass,
    name: "Mage",
    desc: "An academic of the arcane whose knowledge is as dangerous as their talent. Mages study illusions, enchantments, runes, and the subtle threads between worlds. Their magic is versatile, refined, and precise: conjuring protective wards, bending senses, rewriting emotions, or weaving complex rituals. Where Warlocks dominate, Mages manipulate—bending reality with careful, deliberate mastery.",

    classes: [
      basicClasses[basicClassesEnum.juggler],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: Magic.true,
    skills: [
      {
        name: "Illusion magic",
        desc: "Creating and dispelling illusions acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Enchantment magic",
        desc: "Affecting minds and emotions acccording to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Conjuration magic",
        desc: "Summoning and banishing creatures, manipulating objects according to acquired spells.",
        ability: Resource.soul,
        unique: true,
      },
    ],
    perks: [perks.PiedPiper, perks.BlindingLights],
  },
];

export enum advancedClassesEnum {
  "warrior" = 0,
  "ranger" = 1,
  "witcher" = 2,
  "scout" = 3,
  "shaman" = 4,
  "druid" = 5,
  "rogue" = 6,
  "alchemist" = 7,
  "warlock" = 8,
  "mage" = 9,
}
