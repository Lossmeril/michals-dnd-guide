import { DamageType, Perk, SpellComponent, SpellDuration } from "@/types/perks";
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
  MagicalTies: {
    name: "Magical ties",
    desc: "When storing resources into the Incantor's ritual item, you can store one extra resource.",
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
  Scrappy: {
    name: "Scrappy",
    desc: "Once a day, you can scavenge material resources from the environment even when there seems to be nothing useful around. You can gather one material resources this way.",
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

  // -- FIGHTER PERKS - 8
  CrowdChampion: {
    name: "Fight Club",
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
  UWotM8: {
    name: "U wot m8?",
    desc: "You gain advantage in self-praise, shaming and taunting others and intimidation.",
  },
  Bodyguard: {
    name: "Bodyguard",
    desc: "You can use the defense manoeuvre to protect an ally within your reach. You can also exhaust your resources to avert failures targeting your ally.",
  },
  FlyingWeapon: {
    name: "Flying weapon",
    desc: "You can throw a non-throwing weapon and use its proper damage dice instead of treating it as an improvised weapon.",
  },
  GetSpeared: {
    name: "Get speared",
    desc: "You can use your Fighter class as a basis for a throwing weapon attack with a weapon that is designed to be thrown and weided at the same time (axe, spear, javelin).",
  },
  RockFist: {
    name: "Rock fist",
    desc: "Your punches hit like a hammer blow. When fighting unarmed, you can use a d6 for damage instead of d4.",
  },
  TheBestDefense: {
    name: "The best defense",
    desc: "If using a shield in a combat, you may use a bonus action to make a shield bash attack that deals 1d4 damage and has 1/2 chance to leave prone, but only after an attack action.",
  },
  LongReach: {
    name: "Long reach",
    desc: "After attacking with a polearm or a staff, you can use a bonus action either to i) make an unarmed strike with the weapon's shaft, dealing 1d4 damage or and has 1/2 chance to leave prone or; ii) to step back 1 metre and disengage.",
  },
  GotYou: {
    name: "Got you",
    desc: "When attacking an opponent with a weapon that has a mean to do so, you may use a free cunning manoueuvre to grapple the opponent if the attack hits.",
  },
  KnowThyEnemy: {
    name: "Know thy enemy",
    desc: "You can read people's figthing styles. When fighting a human opponent, you can determine they have a weakness or a favourite tactic they will use.",
    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
  },

  // -- HUNTER PERKS - 6
  OneEyeOpen: {
    name: "One eye open",
    desc: "Even when resting, you remain partially alert. After activating this perk, you wake up soon enough to react to danger and may roll initiative, where normally you would skip a turn. This perk does not work if you are unconscious, or put to sleep by magic or a poison.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },
  Aliens: {
    name: "Aliens",
    desc: "You have an uncanny ability to sense creatures that don't belong in the area. You are able to determine where such entities are located within 1 hour of walking distance.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },
  MacGyver: {
    name: "MacGyver",
    desc: "You can create a simple trap or a snare using improvised materials found in the environment (e.g. material you gather on the spot). The trap's strength is equal up to your maximum soul limit. You need at least 10 minutes to set up the trap.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },
  Sniper: {
    name: "Sniper",
    desc: "You gain advantage when making ranged attacks at humans or beasts from a hidden position or at long range.",
  },
  WildThing: {
    name: "Wild thing",
    desc: "You may use advantage on tracking, wilderness survival, hunting, fishing, foraging, setting up traps and campsites, and navigating in the wild.",
  },
  JustKeepSwimming: {
    name: "Just Keep Swimming",
    desc: "You may use advantage on swimming, sailing, rowing, and other water-related activities.",
  },
  BeastMaster: {
    name: "Beast Master",
    desc: "You may use advantage on taming, training, and handling animals.",
  },
  SharpSenses: {
    name: "Sharp senses",
    desc: "You may use advantage on perception challenges that rely on sight, hearing, or smell and unless obstructed, you are able to scout the distant view even under adverse conditions. You can also hold your breath for two turns rather than one.",
  },
  DoubleShot: {
    name: "Double shot",
    desc: "When attacking with a ranged weapon, you can use a bonus action to make an additional attack with the same weapon. The condition is that you have a clear shot and easily reachable ammunition.",
  },
  WeatherBoy: {
    name: "Weather boy",
    desc: "You can predict the weather for the next day with reasonable accuracy.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },
  Restless: {
    name: "Restless",
    desc: "Poor rest heals 5 resources instead of the usual 3.",
  },

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
  TwoBirds: {
    name: "Two Birds",
    desc: "When attacking with a throwing weapon, you can use a widespread manoeuvre to throw two projectiles at once, targeting two targets. Condition is that you have the ammunition easily reachable.",
  },
  RandomBullshitGo: {
    name: "Random bullshit, go",
    desc: "You gain advantage in throwing attacks targeting humans and animals.",
  },
  MissionPossible: {
    name: "Mission possible",
    desc: "You gain advantage in stealth, climbing, scaling walls annd acrobacy.",
  },
  SteadyHands: {
    name: "Steady hands",
    desc: "You gain advantage in lockpicking, pickpocketing, sleight of hand and getting out of restraints.",
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
  GardenOfEden: {
    name: "Garden of Eden",
    desc: "Once a day you may gather herbs and plants from the wild to be used as Material resources. The harvest takes you at least 30 minutes of foraging. You gather 1d4-1 Material resources this way.",
  },
  WalkingBathhouse: {
    name: "Walking Bathhouse",
    desc: "You can deterine that there is a rumour or a gossip about a non-playable character, be it good or bad.",

    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
  },
  GoodSamaritan: {
    name: "Good Samaritan",
    desc: "When healing someone else's scars, you may use your own resources to pay for their healing cost, be it partially or fully.",
  },
  Negotiator: {
    name: "Negotiator",
    desc: "You gain advantage in haggling, bartering, persuading and convincing others.",
  },
  GoodAdvice: {
    name: "Good advice",
    desc: "When an ally is facing a challenge in negotiation, bargaining or persuasion, you can use your Charisma resources to help them avert their failure.",
  },
  FieldMedic: {
    name: "Field medic",
    desc: "You may also use an action in conflict to heal an ally for 1 Body resource during combat. You may also use a bonus action to stabilise a dying ally, if there is one.",
    activationPrice: {
      cost: 1,
      ability: Resource.material,
    },
  },
  ItsNotASacrifice: {
    name: "It's not a sacrifice",
    desc: "When taking care of someone for a reasonable time (at least one hour), you may give the player any amount of your Body resources to heal their Body resources.",
  },
  Medicineman: {
    name: "Medicineman",
    desc: "You gain advantage in healing human body wounds, treating diseases and applying medicine.",
  },
  Poisoner: {
    name: "Poisoner",
    desc: "You gain advantage in creating, identifying, serving poisons and masking their usage.",
  },
  UnusualPoison: {
    name: "Unusual Poison",
    desc: "The effect of this perk is threefold: i) you can create poisons that take effect immediatelly; ii) you can create a poison that stays inactive until activated by something (e.g. alcohol); iii) you can create poisons that are undetectable by normal means (e.g., taste, smell, appearance).",
    activationPrice: {
      cost: 1,
      ability: Resource.material,
      priceUnit: "per effect per unit of strength",
    },
  },

  // -- INCANTOR PERKS

  BlessingsAndCurses: {
    name: "Blessings and curses",
    desc: "You may create a simple spell that either helps or hinders a target. The curse cannot deal direct damage, but can affect all target's attributes. It will usually have a form like 'may your aim be true' or 'may your tongue be tied'. The result may be an advantage or disadvantage on a specific type of challenge, or grant the target a bonus d4.",

    components: [SpellComponent.verbal, SpellComponent.somatic],
    range: "One target",
  },

  EyeSigil: {
    name: "Eye sigil",
    desc: "You may create a sigil through which you may cast any Incantor spell. You can affect only entities present within the sigil.",

    activationPrice: {
      cost: 1,
      ability: Resource.material,
      priceUnit: "sigil strength",
    },
    components: [SpellComponent.material],
    range: "The area within the sigil",
    duration: SpellDuration.short,
  },

  SigilGuardian: {
    name: "Sigil guardian",
    desc: "You may create a sigil that features a guardian entity that wakes up the sigil only when a certain condition is met (e.g. someone specific touches the symbol, someone says a password).",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  MightyAmulets: {
    name: "Mighty amulets",
    desc: "You don't have to use any Material resources to charge your magical amulet.",
  },

  DetectMagic: {
    name: "Detect magic",
    desc: "You can sense the presence of magic within 10 metres of you. If you have confirmed the presence of magic, you may use an action to see a faint aura around the magical effects and identify its school of magic, if any. The spell is blocked by walls and other solid obstructions.",

    components: [SpellComponent.somatic],
    range: "10 metres",
    duration: SpellDuration.concentration,
  },

  Charm: {
    name: "Charm",
    desc: "You can attempt to charm a humanoid you can see within range. It must make a saving throw to resist the effect (with advantage if you are in direct conflict). If it fails the saving throw, it is charmed by you until the spell ends or you or your allies do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },

    components: [SpellComponent.somatic],
    range: "10 metres",
    duration: SpellDuration.short,
  },

  // -- WARRIOR PERKS

  MountainThatRides: {
    name: "Mountain that rides",
    desc: "Your sheer strength allows you to wield two-handed weapons with one hand, allowing you to use a shield or another weapon in your off-hand.",
  },

  Rider: {
    name: "Rider",
    desc: "When fighting mounted, you gain the option to use bonus action to use your mount to either i) knock all targets within 1 metre prone or ii) to trample a target, dealing 1d6 damage and pushing them 1 metre back. You also gain the widespread manoeuvre for free for intimidation when mounted.",
  },

  Jockey: {
    name: "Jockey",
    desc: "You gain advantage on mount riding, controlling and calming your mount, as well as fighting from a mount.",
  },

  Bastion: {
    name: "Bastion",
    desc: "With this perk, you are able to use your Warrior level as a bonus when constructing simple wooden structures such as barricades, palisades, watchtowers or moats (similar to Ranger's woodworking skill).",
  },

  Parry: {
    name: "Parry",
    desc: "When using a defense manoeuvre to defend yourself against a melee attack, you may roll your weapon's damage dice to deal a counterattack on a successful parry. You may only use this perk once per conflict.",
  },

  DoubleTrouble: {
    name: "Double trouble",
    desc: "If wielding two melee weapons, you can use a bonus action to make an additional attack with your off-hand weapon. You may only use this perk once per turn.",
  },

  Herold: {
    name: "Herold",
    desc: "You gain advantage on dealing with noble or high-standing people.",
  },

  DefenderOfPeople: {
    name: "Defender of people",
    desc: "You can use your Charisma resources to avert other people's failures when defending them against intimidation or other psychological attacks.",
  },

  WarDancer: {
    name: "War dancer",
    desc: "When facing more than one opponent in close combat, you can use a defense manoeuvre for free throughout the conflict, until you are no longer outnumbered.",
  },

  WellKnown: {
    name: "Well known",
    desc: "You can state a fact about yourself that makes others more willing to help you. This may be a heroic deed, a noble birth or a famous ancestry. You must describe the fact to the DM beforehand.",
    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
  },

  LegendaryWarrior: {
    name: "Legendary warrior",
    desc: "You choose a primary weapon type (sword, axe, spear, mace, hammer, polearm, staff). When fighting with your chosen weapon type, you may use the mighty manoeuvre for free (dealing an extra damage die).",
  },

  MonasticSchool: {
    name: "Monastic school",
    desc: "When fighting unarmed, you may use the number of d6 dice equal to your Warrior level.",
  },

  // -- RANGER PERKS

  MakeHaste: {
    name: "Make haste",
    desc: "When leading your party, the group can travel at higher speed rate (slow to normal, normal to fast) while keeping the same stats as for the lower.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
      priceUnit: "group member",
    },
  },

  HunterInstinct: {
    name: "Hunter instinct",
    desc: "This perk has two effects: i) you can sense the presence of monsters when nearby, even without any giveaways; ii) you can fight against monsters and animals even when unasisted by normal senses (e.g., in total darkness or dense fog).",
  },

  Berserk: {
    name: "Berserk",
    desc: "Once a day, you can enter a berserk state as a free action. While berserk, you gain advantage on all attack rolls and can add your Ranger level to damage rolls. You also gain resistance to bludgeoning, slashing and piercing damage. The berserk state lasts for 5 turns or until you fall unconscious.",
    activationPrice: {
      cost: 2,
      ability: Resource.soul,
    },
  },

  ToughOfBody: {
    name: "Tough of body",
    desc: "One scar of body can avert your entire failure no matter the danger level (normally, a scar gives you only 2 resource points to spend).",
  },

  SoonMayTheWellermanCome: {
    name: "Soon May The Wellerman Come",
    desc: "You may use advantage sailing, rowing, boat construction and other ship-related activities. You are also able to construct simple rafts from improvised materials found in the environment.",
  },

  TrophyHunter: {
    name: "Trophy hunter",
    desc: "When entering a conflict against a monster you have previously defeated, you gain two Advantage dice to use in the conflict (depending on your Ranger level: 1-d4, 2-d6, 3-d8, 4-d10, 5-d12).",
  },

  FriendOfAllMonsters: {
    name: "Friend of all monsters",
    desc: "You may use advantage on taming, training, handling and dealing with monsters.",
  },

  Carpenter: {
    name: "Carpenter",
    desc: "You gain advantage on woodworking, gathering wood and constructing simple wooden structures.",
  },

  PackLeader: {
    name: "Pack leader",
    desc: "You can use the widespread manoeuvre for free when interacting with animals that outnumber you.",
  },

  AnimalDoctor: {
    name: "Animal doctor",
    desc: "You can use your Ranger level as a bonus when healing animals and beasts, even though you are not a Shaman.",
  },

  NaturalAdvantage: {
    name: "Natural advantage",
    desc: "Once a conflict you can determine that you have manoeuvred the enemy into a terrain that disadvantages them. You use this perk as your bonus action.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  BordersWalker: {
    name: "Borders walker",
    desc: "Your encumbrance cost (if any) is reduced by 1 resource while traversing wilderness.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  // -- WITCHER PERKS

  IsaSign: {
    name: "Isa sign",
    desc: "Through channeling of raw magical energy, you are able to cause pain to the bodies of monsters and supernatural beings.",

    damage: "1d6",
    components: [SpellComponent.somatic],
    range: "One target",
    duration: SpellDuration.instantaneous,
    damageType: DamageType.radiant,
  },

  WitcherSenses: {
    name: "Witcher senses",
    desc: "You posses the ability to sense a presence of monsters and supernatural beings. Greater supernatural entities are impossible to sense.",
  },

  TiwazSign: {
    name: "Tiwaz sign",
    desc: "A witcher sign that acts as a temporary shield. When activated, you may use a Defense manoeuvre indefinitely until the end of the conflict. This sign does not protect you from damage taken, but allows you to avert attacks without spending resources.",
    activationPrice: {
      cost: 2,
      ability: Resource.soul,
    },

    components: [SpellComponent.somatic],
    range: "Self",
    duration: SpellDuration.combat,
  },

  BerkanoSign: {
    name: "Berkano sign",
    desc: "A witcher sign that counters magical effects. When activated, you break one spell or magical effect targeting you. This will not work for the consequences of magic (e.g., burning ground). You cannot shield an ally. You may use the sign as a part of a defense manoeuvre.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
    components: [SpellComponent.somatic],
    range: "Self",
    duration: SpellDuration.instantaneous,
  },

  RaidhoSign: {
    name: "Raidho sign",
    desc: "A witcher sign that allows you to calm down and focus minds of allies that face a monster or supernatural being. When activated, the target's danger level is reduced by one. This will not work on yourself. You may use the sign to break your ally out of fear or charm conditions; in that case, the target's danger level stays unchanged.",

    components: [SpellComponent.somatic],
    range: "Self",
    duration: SpellDuration.instantaneous,
  },

  OthalaSign: {
    name: "Othala sign",
    desc: "A witcher sign that allows you to perform a quick scan of the surrounding area. When activated, you may sense the presence of magic, monsters and supernatural beings within 20 metres. You may also determine their exact location and approximate number. You will also detect the positions of hidden or invisible entities.",

    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
    components: [SpellComponent.somatic],
    range: "20 metres",
    duration: SpellDuration.instantaneous,
  },

  MutatedBody: {
    name: "Mutated body",
    desc: "Your body has undergone mutations that leave mundane poisons in the dust. Every time you face a poison-related challenge, paralysis or petrification attempt, you don't have to use your action to resist it. Furthermore, you gain advantage on such challenges.",
  },

  SowiloSign: {
    name: "Sowilo sign",
    desc: "A witcher sign that allows you to create a burst of bright light that blinds all entities within a 5-metre radius. Affected entities must make a saving throw or be blinded for two turns.",

    components: [SpellComponent.somatic],
    range: "5 metres",
    duration: SpellDuration.instantaneous,
  },

  KenazSign: {
    name: "Kenaz rune",
    desc: "With this sign, you can create a burst of flame that deals fire and radiant damage to all entities within a 5-metre radius. Every entity within the area may make a saving throw to halve the damage.",

    components: [SpellComponent.somatic],
    range: "5 metres",
    duration: SpellDuration.instantaneous,
    damageType: [DamageType.fire, DamageType.radiant],
    damage: "Witcher Level × d6",
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

    components: [SpellComponent.somatic],
    range: "Self",
    duration: SpellDuration.will,
  },

  InvisibleRider: {
    name: "Invisible rider",
    desc: "You can warg into an animal that is friendly to you. While warged you sense the world through the animal's body and can feel its emotions. While you can give directions to said animal, you cannot directly control it. While warged, you lose control of your body and are unaware of its state.",
    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },

    components: [SpellComponent.somatic],
    range: "A friendly animal",
    duration: SpellDuration.will,
  },

  AnimalControl: {
    name: "Animal control",
    desc: "You can warg into and can completely control an animal that is within your sight. However, to fully maintain a control, you lose the connection to your body. You can control the animal even if it struggles against you, however, you need to succeed each turn in keeping the connectionn unsevered.",
    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },

    components: [SpellComponent.somatic],
    range: "A nearby animal",
    duration: SpellDuration.concentration,
  },

  DreamEater: {
    name: "Dream eater",
    desc: "You can enter the dreams of a sleeping target and manipulate them. You can plant suggestions, extract information or simply torment the target. The target may make a saving throw to resist your intrusion each round. They will wake up if you cause them any harm in the dream and will remember the dream vividly upon waking up, including your face if you show it to them.",
    activationPrice: {
      cost: 2,
      ability: Resource.soul,
    },

    components: [SpellComponent.verbal, SpellComponent.somatic],
    range: "One sleeping target",
    duration: SpellDuration.concentration,
  },

  // -- DRUID PERKS

  ManipulatePlants: {
    name: "Manipulate plants",
    desc: "You can control plants in a limited manner and natural shape. You can cause plants to grow, move, or change shape. You can also create simple plant-based constructs such as barriers or weapons and change features of a plant (make thorns grow on a tulip). You can feel the presence of plants, even specific species. You cannot create plants from nothing nor cause any direct damage.",
  },

  WaterBending: {
    name: "Water Bending",
    desc: "You may control water in a limited manner, in all of its natural form. You can create waves, manipulate existing water currents, pull water from earth, change the water's state and/or make the water levitate or shoot it at people. You can feel the presence of water. You cannot create water from nothing and this manipulation does not cause any direct damage.",
  },

  EarthBending: {
    name: "Earth Bending",
    desc: "You may control earth in a limited manner. You can create tremors,  create minor earth-based effects (e.g. raising small walls of earth or creating pits), make earth levitate, find minerals, make rock formation split and/or insert things in stone or earth as if it were water. All of the earth must be in its natural form. You cannot create earth from nothing and this manipulation does not cause any direct damage.",
  },

  MarchingForest: {
    name: "Marching forest",
    desc: "For all of your plant manipulation spells, you may use the widespread manoeuvre for free.",
  },

  RockAndStone: {
    name: "Rock and Stone",
    desc: "For all of your earth bending spells, you may use the widespread manoeuvre for free.",
  },

  Tsunami: {
    name: "Tsunami",
    desc: "For all of your water bending spells, you may use the widespread manoeuvre for free.",
  },

  MemoryOfWood: {
    name: "Memory of Wood",
    desc: "You can now use plant manipulation even on objects that are modified by human hands, such as wooden furniture or buildings made of wood.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  HeartOfStone: {
    name: "Heart of Stone",
    desc: "You can now use earth bending even on objects that are modified by human hands, such as stone buildings, clay pottery or metal weapons.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  SoulOfWater: {
    name: "Soul of Water",
    desc: "You can now use water bending even on objects that are modified by human hands or are coming from humans, such as wine in a bottle, a soup in a bowl or a pool of blood. However, you cannot bend water that is contained in living beings.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },
  },

  CommuneWithNature: {
    name: "Commune with Nature",
    desc: "You are able to communicate with plants, earth and water. This allows you to do one of the following: i) immediately gain the knowledge about the surrounding area (e.g., if there are any dangers, water sources, useful plants); ii) ask a question about anything in the target's past. However, the target's knowledge is limited to what it has experienced directly (e.g. plants can sense pressure, light level and temperature; rocks can sense pressure, temperature and vibrarions).",

    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },

    range: "Self",
    duration: SpellDuration.instantaneous,
    components: [SpellComponent.somatic, SpellComponent.verbal],
  },

  SeismicSense: {
    name: "Seismic sense",
    desc: "After casting, you can sense vibrations in the ground, allowing you to detect the presence of creatures and objects within 30 metres. You can determine the location and movement of these entities, even if they are hidden or invisible. However, you can only identify generic details about them (e.g., number and approximate size). You may also sense the layout of the surrounding terrain, including any obstacles or structures and use it to navigate in complete darkness.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },

    range: "30 metres",
    duration: SpellDuration.concentration,
    components: [SpellComponent.somatic],
  },

  NaturalRecovery: {
    name: "Natural recovery",
    desc: "After meditating in a natural environment for at least an hour, you can recover additional resources equal to your Druid level. You may use this perk once per day.",
  },

  CreateOrDestroyWater: {
    name: "Create or destroy water",
    desc: "You can create up to 10 litres of clean water within an area of 1 cubic metre, or destroy the same amount of water in an area of the same size. The water created is clean and safe to drink. The water may fall at once or as a rain over a period of 10 minutes. Alternatively, you can use destroy water to remove fog or dampness in an area.",

    activationPrice: {
      cost: 2,
      ability: Resource.soul,
    },

    range: "10 metres",
    duration: SpellDuration.instantaneous,
    components: [
      SpellComponent.somatic,
      SpellComponent.material,
      "a drop of water",
    ],
  },

  Sprout: {
    name: "Sprout",
    desc: "You can cause a seed or a small plant to grow into a full-sized plant or tree within minutes. The plant grows in an area of 1 cubic metre and can be of any species you are familiar with. The plant is healthy and can be used for various purposes, such as providing shade, food, or shelter. Alternatively, you can use this spell to heal, wither and destroy a plant or tree within the same size limit.",

    activationPrice: {
      cost: 2,
      ability: Resource.soul,
    },

    range: "10 metres",
    duration: SpellDuration.instantaneous,
    components: [
      SpellComponent.somatic,
      SpellComponent.material,
      "a seed or a small plant",
    ],
  },

  Earthquake: {
    name: "Earthquake",
    desc: "You can create a localized earthquake that affects a 30-metre radius area centered on a point within range. The ground shakes violently, causing structures to collapse and creatures to lose their footing. All creatures in the area must make a saving throw or be knocked prone and take bludgeoning damage. Structures in the area may also be damaged or destroyed, depending on their size and construction. If the spell lasts more than one turn, fisures start to open in the ground.",

    activationPrice: {
      cost: 3,
      ability: Resource.soul,
    },

    range: "30 metres",
    duration: SpellDuration.concentration,
    components: [SpellComponent.somatic, SpellComponent.material],
  },

  // -- ROGUE PERKS
  YourLipsAreVenomousPoison: {
    name: "Your lips are venomous poison",
    desc: "You can create a contact poison starts to take effect even if only coming in contact with the skin. For an additional 1 Material resource per unit of strength, you can make the poison not affect you and therefore can be spread through touch or kissing.",
    activationPrice: {
      cost: 3,
      ability: Resource.material,
      priceUnit: "per unit of strength / 4 per unit of strength)",
    },
  },
  InflitrationExpertise: {
    name: "Inflitration expertise",
    desc: "You can unfailingly craft a false identity for yourself, complete with documentation, appearance and backstory. The prerequisite is that you have at least one day to prepare the identity and spend 25 coins. After adopting the identity, all creatures believe you to be who you say you are, unless they have an obvious reason to doubt you. You cannot impersonate a specific individual with this perk.",

    activationPrice: {
      cost: 25,
      ability: Resource.coin,
    },
  },

  CityGuide: {
    name: "City guide",
    desc: "You may determine that there is any location within a city or a feature typical for that environment (e.g., a dead end, cemetary, a tavern, a statue, serwers or a market) within your vicinity in the city.",
  },

  UrbanShadows: {
    name: "Urban Shadows",
    desc: "You gain the ability to hide in urban environments even in places with little to no cover and shake off pursures that are in close proximity to you.",

    activationPrice: {
      cost: 1,
      ability: Resource.charisma,
    },
  },

<<<<<<< HEAD
  ViperBite: {
    name: "Viper bite",
=======
  ViberBite: {
    name: "Viber bite",
>>>>>>> origin/master
    desc: "In a combat, if you are attacked by an enemy, you don't exhaust yourself to defend yourself and the enemy misses, you may use your reaction to make a melee attack against them with a free mighty manoeuvre.",
  },

  // -- MAGE PERKS
  PiedPiper: {
    name: "Pied Piper",
    desc: "When playing an instrument, you are able to control animals similarly to Shaman's Animal Control. However, you are only able to give it general commands (e.g. ‘follow me’ or ‘attack on sight’). The spell is broken the moment you stop playing. Activation price is per animal and widespread does not apply.",
    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },

    components: [SpellComponent.somatic],
    range: "A nearby animal",
    duration: SpellDuration.concentration,
  },

  BlindingLights: {
    name: "Blinding lights",
    desc: "You can create a burst of bright light that blinds all entities within a 5-metre radius. Affected entities must make a saving throw or be blinded for two turns.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },

    components: [SpellComponent.verbal, SpellComponent.somatic],
    range: "10 metres",
    duration: SpellDuration.instantaneous,
  },

  // -- WARLOCK PERKS
  FireBending: {
    name: "Fire Bending",
    desc: "You may control fire in a limited manner. You can ignite flammable objects, extinguish small fires, and shape existing flames. You can also manipulate existing smoke. You can also create a small magical fires. All of these fires stem from your body and cannot be created from nothing. If these fires come in contact with an entity, they deal small fire damage. The fire effect is comparable to a torch flame.",

    components: [SpellComponent.somatic],
    range: "Self/Touch",
    duration: SpellDuration.instantaneous,
    damageType: DamageType.fire,
    damage: "1d6",
  },

  AirBending: {
    name: "Air Bending",
    desc: "You may control air in a limited manner. You can create small gusts of wind, manipulate existing air currents, and create minor air-based effects such as lifting light objects with a wind or creating a breeze. You can also create a small magical blast of air that can push entities back.",

    components: [SpellComponent.somatic],
    range: "Self/2 metres",
    duration: SpellDuration.instantaneous,
  },

  Fireball: {
    name: "Fireball",
    desc: "You can hurl a ball of fire that explodes upon impact, dealing fire damage to all entities within the blast radius. Every entity within the area may make a saving throw to halve the damage.",

    components: [
      SpellComponent.verbal,
      SpellComponent.somatic,
      SpellComponent.material,
    ],
    activationPrice: {
      cost: 2,
      ability: Resource.material,
    },
    range: "30 metres",
    duration: SpellDuration.instantaneous,
    damageType: DamageType.fire,
    damage: "(3+Warlock Level)d6",
  },

  FireShield: {
    name: "Fire Shield",
    desc: "You create a magical shield of thin flames that wreath your body, providing resistance to cold damage and melee attacks. When the shield is attacked, it breaks, dealing fire damage to the attacker. You may choose to create a cold fire shield instead, which provides resistance to fire damage and deals cold damage to attackers.",

    activationPrice: {
      cost: 1,
      ability: Resource.material,
    },

    components: [SpellComponent.somatic, SpellComponent.material],
    range: "Self",
    duration: SpellDuration.combat,
    damageType: DamageType.fire,
    damage: "2d8",
  },

  SalamanderSigil: {
    name: "Salamander Sigil",
    desc: "You may create a sigil, same as Incantor's Eye Sigil, that allows you to cast Fire Bending and Fireball through it.",

    activationPrice: {
      cost: 1,
      ability: Resource.material,
      priceUnit: "sigil strength",
    },
    components: [SpellComponent.material],
    range: "The area within the sigil",
  },

  DeafeningRoar: {
    name: "Deafening Roar",
    desc: "You rip the electric charge around a target, causing a loud thunderous roar that can deafen and disorient them. The target must make a saving throw or be deafened for a two turns.",

    activationPrice: {
      cost: 1,
      ability: Resource.soul,
    },

    components: [SpellComponent.verbal, SpellComponent.somatic],
    range: "One target",
    duration: SpellDuration.instantaneous,
  },

  Fly: {
    name: "Fly",
    desc: "You touch a willing creature, granting them the ability to fly for the duration of the spell. The target can fly at a speed of 10 metres per turn and can ascend or descend at will. The spell ends if the target is incapacitated or if you lose concentration.",

    activationPrice: {
      cost: 2,
      ability: Resource.soul,
    },

    components: [
      SpellComponent.somatic,
      SpellComponent.material,
      "a feather of any bird",
    ],
    range: "Touch",
    duration: SpellDuration.concentration,
  },

  BurningHands: {
    name: "Burning Hands",
    desc: "You create a cone of fire that erupts from your hands, dealing fire damage to all entities within the area. Every entity within the area may make a saving throw to halve the damage. This spell ignites flammable objects in the area that aren't being worn or carried.",

    components: [SpellComponent.verbal, SpellComponent.somatic],
    range: "Self (5-metre cone)",
    duration: SpellDuration.instantaneous,
    damageType: DamageType.fire,
    damage: "2d6",
  },
};

export const perksArray = Object.keys(perks).map((key) => {
  return {
    id: key,
    perkValues: perks[key],
  };
});
