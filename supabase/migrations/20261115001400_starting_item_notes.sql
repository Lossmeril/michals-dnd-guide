-- Starting items keep their note (e.g. the Monster hunter's "Silvered" weapon), and the Bard's kit is finished.

update backgrounds set equipment = jsonb_set(equipment, '{2}', $j${"options": [{"entries": [{"items": ["costume"], "quantity": 2}, {"items": ["mirror"], "quantity": 1}, {"items": ["perfume"], "quantity": 1}, {"items": ["admirers-favour"], "quantity": 1}, {"items": ["pouch"], "quantity": 1}, {"items": ["travellers-clothes"], "quantity": 1}]}]}$j$::jsonb)
where id = 'bard';

create or replace function public.save_character_build(p_name text, p_level smallint, p_start_level smallint, p_body smallint, p_soul smallint, p_charisma smallint, p_classes jsonb, p_perks jsonb, p_languages jsonb, p_traits jsonb, p_equipment_picks jsonb, p_items jsonb, p_race_id text DEFAULT NULL::text, p_background_id text DEFAULT NULL::text, p_backstory text DEFAULT NULL::text, p_character_id bigint DEFAULT NULL::bigint)
 returns bigint
 language plpgsql
 set search_path to ''
as $function$
declare
  v_id bigint := p_character_id;
  v_old_background text;
  v_old_picks jsonb;
  v_replace_items boolean := true;
begin
  if v_id is null then
    insert into public.characters (owner, name, backstory, race_id, background_id, level, start_level, body, soul, charisma, equipment_picks)
    values ((select auth.uid()), p_name, p_backstory, p_race_id, p_background_id, p_level, p_start_level, p_body, p_soul, p_charisma, p_equipment_picks)
    returning id into v_id;
  else
    select background_id, equipment_picks into v_old_background, v_old_picks
    from public.characters where id = v_id;
    v_replace_items := v_old_background is distinct from p_background_id or v_old_picks is distinct from p_equipment_picks;

    -- start_level is fixed once the character exists
    update public.characters
    set name = p_name, backstory = p_backstory, race_id = p_race_id, background_id = p_background_id,
        level = p_level, body = p_body, soul = p_soul, charisma = p_charisma, equipment_picks = p_equipment_picks
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
    insert into public.character_items (character_id, item_id, quantity, note, from_background)
    select v_id, i->>'item_id', (i->>'quantity')::smallint, nullif(i->>'note', ''), true
    from jsonb_array_elements(p_items) i;
  end if;

  return v_id;
end;
$function$;
