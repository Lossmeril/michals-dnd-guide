-- Backgrounds, rebuilt around fortune (see docs/ruleset-overview.md, Backgrounds).
-- In three sections (arms and armour, the background, a mount) the player says
-- how fortunate the character has been: poor, commoner or fortunate. The
-- starting level sets which fortunes they get.

create type public.fortune as enum ('poor', 'commoner', 'fortunate');

-- The least fortune that can start with an item: swords and the warhorse need
-- fortunate, the riding horse commoner
alter table public.items add column min_fortune public.fortune not null default 'poor';
update public.items set min_fortune = 'fortunate'
  where id in ('longsword', 'shortsword', 'greatsword', 'rapier', 'scimitar', 'warhorse');
update public.items set min_fortune = 'commoner' where id = 'riding-horse';

-- A background has three variants, one per fortune:
--   { "poor": { "label": "…", "equipment": [groups], "coins_copper": 100, "material": 1 }, … }
-- and jumpstart d8 tables, one entry per line (archetypes: "Name | text | recommended";
-- ideals: "Name | text")
alter table public.backgrounds
  drop column equipment,
  drop column coins_copper,
  drop column material,
  add column variants jsonb not null default '{}',
  add column archetypes text,
  add column quirks text,
  add column ideals text,
  add column bonds text,
  add column flaws text;

-- The character's fortunes ({ "arms": …, "background": …, "mount": … }; the
-- mount follows from its fortune), the weapons, shields and armour taken with
-- the arms fortune, and the clothes, written by hand
alter table public.characters
  add column fortunes jsonb not null default '{}',
  add column arms_picks jsonb not null default '[]',
  add column clothes text;

drop function public.save_character_build(text, smallint, smallint, smallint, smallint, smallint, jsonb, jsonb, jsonb, jsonb, jsonb, jsonb, text, text, text, bigint);

create function public.save_character_build(
  p_name text, p_level smallint, p_start_level smallint, p_body smallint, p_soul smallint, p_charisma smallint,
  p_classes jsonb, p_perks jsonb, p_languages jsonb, p_traits jsonb, p_equipment_picks jsonb, p_items jsonb,
  p_race_id text default null, p_background_id text default null, p_backstory text default null,
  p_character_id bigint default null,
  p_fortunes jsonb default '{}', p_arms_picks jsonb default '[]'
)
returns bigint
language plpgsql
set search_path to ''
as $function$
declare
  v_id bigint := p_character_id;
  v_old record;
  v_replace_items boolean := true;
begin
  if v_id is null then
    insert into public.characters (owner, name, backstory, race_id, background_id, level, start_level, body, soul, charisma,
                                   equipment_picks, fortunes, arms_picks)
    values ((select auth.uid()), p_name, p_backstory, p_race_id, p_background_id, p_level, p_start_level, p_body, p_soul, p_charisma,
            p_equipment_picks, p_fortunes, p_arms_picks)
    returning id into v_id;
  else
    select background_id, equipment_picks, fortunes, arms_picks into v_old
    from public.characters where id = v_id;
    -- Starting gear is replaced only when what it comes from changed
    v_replace_items := v_old.background_id is distinct from p_background_id
      or v_old.equipment_picks is distinct from p_equipment_picks
      or v_old.fortunes is distinct from p_fortunes
      or v_old.arms_picks is distinct from p_arms_picks;

    update public.characters
    set name = p_name, backstory = p_backstory, race_id = p_race_id, background_id = p_background_id,
        level = p_level, body = p_body, soul = p_soul, charisma = p_charisma, equipment_picks = p_equipment_picks,
        fortunes = p_fortunes, arms_picks = p_arms_picks
    where id = v_id;
    if not found then
      raise exception 'Character not found or not yours';
    end if;
    delete from public.character_classes where character_id = v_id;
    delete from public.character_perks where character_id = v_id;
    delete from public.character_languages where character_id = v_id;
    delete from public.character_traits where character_id = v_id;
    if v_replace_items then
      delete from public.character_items where character_id = v_id and from_background;
    end if;
  end if;

  insert into public.character_classes (character_id, class_id, level)
  select v_id, c->>'class_id', (c->>'level')::smallint
  from jsonb_array_elements(p_classes) c;

  insert into public.character_perks (character_id, perk_id, class_id)
  select v_id, p->>'perk_id', p->>'class_id'
  from jsonb_array_elements(p_perks) p;

  insert into public.character_languages (character_id, language_id)
  select v_id, l from jsonb_array_elements_text(p_languages) l;

  insert into public.character_traits (character_id, trait_id)
  select v_id, t::bigint from jsonb_array_elements_text(p_traits) t;

  if v_replace_items then
    insert into public.character_items (character_id, item_id, quantity, note, bundle_id, from_background)
    select v_id, i->>'item_id', (i->>'quantity')::smallint, nullif(i->>'note', ''), nullif(i->>'bundle_id', ''), true
    from jsonb_array_elements(p_items) i;
  end if;

  return v_id;
end;
$function$;
