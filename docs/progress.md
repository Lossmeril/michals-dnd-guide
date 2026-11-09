# Progress and to-do

Where the project stands, so work can pick up again later.
Last updated 2026-10-12. The rules themselves live in [ruleset-overview.md](ruleset-overview.md).

## Where things are

- **Branch:** all of this work is on `speed-build`, not merged into `master`. No PR yet: the plan is to reach a workable stage first.
- **Database:** every schema change was applied straight to the live Supabase project (`dvlzrygeoygyrtihwbzh`). There are no migration files in the repo yet (see To-do).
- **Agreed build order:** character editor → rulebook → campaign management.

## Done

### Campaigns

- **Campaign page** (`/campaigns/[id]`):
  - cover image banner, name and description, both editable with `EditableText`;
  - "DMed by" line, and the characters in the campaign as cards.
- **DM-only actions:** edit the name and description, upload a cover, and add a character from a dropdown. Players see the page read-only. The server actions check that the user is the DM.
- **Updates feed** (`/campaigns/[id]/updates`): forum-style posts. Only the DM and players with a character in the campaign can read or post (enforced by RLS). Authors and the DM can delete posts.
- **Sidebar navigation** (`components/layout/sidebarNav.tsx`): reusable, highlights the active link, supports nested items. Used by campaigns and the character sheet.
- Campaign cards on `/campaigns` link to the campaign page.

### Rulebook data (in Supabase)

- **Imported from the old site** (git commit `60a40a6`):
  - 5 races, each with a racial language and racial perks;
  - 21 classes with their parent links and 66 skills;
  - 137 perks and spells, 8 of them core spells;
  - all class, race and perk images.
- **Aspects:** the Warrior has Brute (Fighter 4), Knight (Fighter 3 + Juggler 3) and Monk (Juggler 4).
- **Drafts to review:** 8 languages, 10 backgrounds and 8 premade traits.
- **Access:** anyone can read the rulebook; only admins can change it.

### Rules engine (`lib/rules/character.ts`)

- **Unlocks:** advanced and mighty classes unlock when their parents total 6 levels, up to class level 5. Aspects unlock inside a class the character has.
- **Perks:** requirements are checked (class level, all/sum of class levels, has perk, has aspect). Core spells come free. Extra perks are only allowed at class level 5.
- **Languages:** Common and the racial language are free. Humans and Halflings pick 1 extra; backgrounds add more.
- **Level formula:** chosen class perks + (Body + Soul + Charisma − 15). Racial perks, core spells, aspects and perk bonuses don't count.
- **Validation:** one function used by both the editor and the server. Tests are in a scratch script for now (see To-do).

### Characters

- **Editor** (`/characters/new` and `/characters/[id]/editor`).
  - Steps: Start (Rags to Riches 3 / Seasoned 7 / Veteran 9) → Race and racial perk → Background and languages → Classes → Perks → Resources → Traits → Details (name, portrait, backstory).
  - A sticky bar shows the level and points left. Locked classes and perks say what they need.
  - Saving goes through one transactional database function (`save_character_build`), and the server re-validates the build.
- **Character sheet** (`/characters/[id]`, with a sidebar):
  - **Overview:** portrait, level and race, stat blocks, background, languages, traits and backstory.
  - **Race:** race banner and the racial perk card.
  - **Classes:** class cards, with a subpage per class showing the banner, skills, core spells, aspects and perks.
- **Characters list:** cards with portrait, level, race and classes.
- **Components:**
  - `StatBlock`: resource icon and one box per point, with neutral borders for base points, stat-coloured borders for perk bonuses, and crosses for exhaustion and scars.
  - `PerkCard`: framed image with a spell ribbon.
  - `MagicBadge`: magic or pseudo-magic icon and label.
  - Also `NumberStepper` and `CoverImage`.
- **Test characters:**
  - Lyn: Elf Hermit, Hunter 3 / Incantor 3 / Druid 1.
  - Maddeline: Human Soldier, Fighter 3 / Juggler 3 / Warrior 1 (Knight).
  - Both are level 7.

## To-do

### Character editor (current focus)

- [ ] Agree on the other editor UI changes. Class images were the first one.
- [ ] Inventory: items, coins and Material. Backgrounds set the starting amounts, and the inventory is shared across a character's ghosts. The sheet shows the background's starting gear read-only for now.
- [ ] Perk bonuses to stats (e.g. +1 Body). Not stored yet; `StatBlock` already supports a `bonus`.
- [ ] Move the rules tests from a scratch script into the repo, with a test runner.

### Rulebook (next)

- [ ] Rulebook pages, using the structure and writing guidelines in [ruleset-overview.md](ruleset-overview.md#rulebook-pages): short single-topic pages, story examples, plain language, no standalone perk list.
- [ ] Admin editors for classes, perks, races, aspects, backgrounds, traits and languages.
- [ ] Restore `warrior-monk.webp` (commit `60a40a6`) for the Zara the Recluse example.

### Rules content (Michal)

- [ ] Aspects for the other 9 advanced classes, and any for mighty classes.
- [ ] Skills and perks for the mighty classes, and a description for Black Priest.
- [ ] More perks for Scout (2), Mage (2) and Alchemist (1). Their extra levels leave empty perk slots for now, which is allowed temporarily.
- [ ] Decide which old perks and spells stay, get cut or get reworked.
- [ ] Assign the 8 unassigned perks to classes: Burning Hands, Double Shot, Get Speared, Got You, Just Keep Swimming, Long Reach, Magical Ties and The Best Defense.
- [ ] Reword old 5E leftovers in perk and condition texts:
  - "saving throw" → defense roll;
  - feet → metres;
  - "Advantage dice" → bonus die;
  - Strength/Dexterity saves → reword or drop.
- [ ] Review the drafts: the 10 backgrounds (kits, coins), 8 languages and 8 premade traits.
- [ ] Druid's three bending core spells are tagged as perks rather than spells.

### Campaign management (later)

- [ ] DM screen: set each character's Danger Level, apply Scars and exhaustion, grant levels.
- [ ] Approval of custom traits. Decide which DM approves when a ghost character is in several campaigns.
- [ ] Per-campaign character state (Scars, exhaustion), shown with `StatBlock`.
- [ ] Remove characters from a campaign.
- [ ] Updates feed: realtime, replies, editing, pagination.
- [ ] Ideas: session notes, shared loot list, NPC and location notes, shared dice roller.
- [ ] Decide who can view a character sheet: anyone logged in (now), or only the owner, their DMs and campaign mates.

### Cleanup: security (do first)

- [ ] `campaigns` and `campaign_players` allow any logged-in user to change anything. The browser-callable endpoints in `lib/endpoints` bypass the DM check. Make them DM-only, and let only `dm` users create campaigns.
- [ ] Owners can change their character's `level` directly. It should be granted by the DM only.
- [ ] `profiles` UPDATE policy targets `public` instead of `authenticated`, and the SELECT policy name doesn't match what it does.
- [ ] Revoke public EXECUTE on the SECURITY DEFINER functions (`handle_new_user`, `is_admin`, `my_role`, `protect_profile_role`, `rls_auto_enable`). Set a search_path on `set_updated_at`. Turn on leaked-password protection.
- [ ] Email confirmation is on, but there's no `app/auth/confirm` route. Check that confirmation links actually log people in.

### Cleanup: data and tooling

- [ ] Put the database schema in the repo (`supabase db pull`) so migrations are versioned.
- [ ] `yarn gen:types` hangs and empties `lib/types/database.types.ts`. Try `npx supabase login`. The types were regenerated through the Supabase MCP in the meantime.
- [ ] Special fetchers load whole tables and filter in JS. Move them to filtered queries.
- [ ] Bug: `fetchCharactersPlayerSees` "other" includes characters from every campaign.
- [ ] Remove the debug `console.log`s in `fetchPlayersInCampaign`.
- [ ] Add missing FK indexes: `campaign_players.campaign_id` and `.character_id`, `campaign_updates.author`, `campaigns.dm`.
- [ ] Server action errors are redacted in production, so pages fall back to generic toasts.
- [ ] Replaced images (covers, avatars, portraits) are never deleted from storage.
- [ ] Image size limits disagree: `lib/uploadImage.ts` says 5 MB, the buckets 2 MB.

### Cleanup: UI and code hygiene

- [ ] The global `button` style hits every `<button>`. Consider an opt-in `.button` class.
- [ ] `card.tsx`: the "No Image" placeholder only shows for `"empty"`, not for undefined.
- [ ] `avatar.tsx`: the status-dot colour uses the whole class object.
- [ ] `modal.tsx`: `bg-opacity-50` is Tailwind v3 syntax. Use `bg-black/50`.
- [ ] Placeholder eyebrows "Novinka"/"New" on campaign cards.
- [ ] Root `metadata` title and description are empty.
- [ ] Typos: `lib/specialFecthers`, `campaingsPlayerIsPartOf`.
- [ ] Every endpoint file repeats the `db()` helper.
- [ ] Add Prettier as a dev dependency with a config, so formatting matches across editors.
