-- Levels are granted by DMs, one row per level, and kept even when the
-- character leaves the campaign or the campaign is deleted.
-- level = start_level + number of grants; only the functions below change it.

create table public.character_level_grants (
  id bigint generated always as identity primary key,
  character_id bigint not null references public.characters(id) on delete cascade,
  -- Null once the campaign is deleted; the level stays
  campaign_id bigint references public.campaigns(id) on delete set null,
  granted_by uuid references public.profiles(id) on delete set null,
  reason text,
  created_at timestamptz not null default now()
);
create index character_level_grants_character_idx on public.character_level_grants (character_id);
create index character_level_grants_campaign_idx on public.character_level_grants (campaign_id);

alter table public.character_level_grants enable row level security;
create policy "Logged-in users can see level grants" on public.character_level_grants
  for select to authenticated using (true);
-- No insert, update or delete policies: grant_level and revoke_level do it

-- Nobody edits level or start_level by hand. New characters start at a
-- starting level; later changes need the flag the grant functions set.
create or replace function public.guard_character_level()
returns trigger
language plpgsql
set search_path to ''
as $$
begin
  if tg_op = 'INSERT' then
    if new.start_level not in (3, 7, 9) then
      raise exception 'A character starts at level 3, 7 or 9';
    end if;
    new.level := new.start_level;
  elsif (new.level is distinct from old.level or new.start_level is distinct from old.start_level)
        and coalesce(current_setting('app.level_grant', true), '') <> 'on' then
    raise exception 'Levels are granted by a DM';
  end if;
  return new;
end $$;

drop trigger if exists guard_character_level on public.characters;
create trigger guard_character_level
  before insert or update on public.characters
  for each row execute function public.guard_character_level();

-- The DM of a campaign the character is put forward in grants a level
create or replace function public.grant_level(p_character_id bigint, p_campaign_id bigint, p_reason text default null)
returns void
language plpgsql
security definer
set search_path to ''
as $$
begin
  if not exists (
    select 1 from public.campaign_players cp
    join public.campaigns c on c.id = cp.campaign_id
    where cp.campaign_id = p_campaign_id
      and cp.character_id = p_character_id
      and c.dm = auth.uid()
  ) then
    raise exception 'Only the DM of a campaign this character plays in can grant a level';
  end if;

  insert into public.character_level_grants (character_id, campaign_id, granted_by, reason)
  values (p_character_id, p_campaign_id, auth.uid(), nullif(trim(p_reason), ''));

  perform set_config('app.level_grant', 'on', true);
  update public.characters set level = level + 1 where id = p_character_id;
  perform set_config('app.level_grant', 'off', true);
end $$;

-- The DM of the campaign a grant came from can undo it, even if the
-- character has moved on; the player then gives back a pick if it was spent
create or replace function public.revoke_level(p_grant_id bigint)
returns void
language plpgsql
security definer
set search_path to ''
as $$
declare
  g public.character_level_grants;
begin
  select * into g from public.character_level_grants where id = p_grant_id;
  if not found then raise exception 'Unknown level grant'; end if;
  if not exists (
    select 1 from public.campaigns c where c.id = g.campaign_id and c.dm = auth.uid()
  ) then
    raise exception 'Only the DM of the campaign that granted this level can undo it';
  end if;

  delete from public.character_level_grants where id = p_grant_id;

  perform set_config('app.level_grant', 'on', true);
  update public.characters set level = level - 1 where id = g.character_id;
  perform set_config('app.level_grant', 'off', true);
end $$;

revoke all on function public.grant_level(bigint, bigint, text) from public, anon;
revoke all on function public.revoke_level(bigint) from public, anon;
grant execute on function public.grant_level(bigint, bigint, text) to authenticated;
grant execute on function public.revoke_level(bigint) to authenticated;

-- The build function no longer writes the level on an update
create or replace function public.save_character_build(p_name text, p_level smallint, p_start_level smallint, p_body smallint, p_soul smallint, p_charisma smallint, p_classes jsonb, p_perks jsonb, p_languages jsonb, p_traits jsonb, p_equipment_picks jsonb, p_items jsonb, p_race_id text DEFAULT NULL::text, p_background_id text DEFAULT NULL::text, p_backstory text DEFAULT NULL::text, p_character_id bigint DEFAULT NULL::bigint, p_fortunes jsonb DEFAULT '{}'::jsonb, p_arms_picks jsonb DEFAULT '[]'::jsonb)
 RETURNS bigint
 LANGUAGE plpgsql
 SET search_path TO ''
AS $function$
declare
  v_id bigint := p_character_id;
  v_old record;
  v_replace_items boolean := true;
begin
  if v_id is null then
    -- The trigger sets level from start_level
    insert into public.characters (owner, name, backstory, race_id, background_id, level, start_level, body, soul, charisma,
                                   equipment_picks, fortunes, arms_picks)
    values ((select auth.uid()), p_name, p_backstory, p_race_id, p_background_id, p_start_level, p_start_level, p_body, p_soul, p_charisma,
            p_equipment_picks, p_fortunes, p_arms_picks)
    returning id into v_id;
  else
    select background_id, equipment_picks, fortunes, arms_picks into v_old
    from public.characters where id = v_id;
    v_replace_items := v_old.background_id is distinct from p_background_id
      or v_old.equipment_picks is distinct from p_equipment_picks
      or v_old.fortunes is distinct from p_fortunes
      or v_old.arms_picks is distinct from p_arms_picks;

    update public.characters
    set name = p_name, backstory = p_backstory, race_id = p_race_id, background_id = p_background_id,
        body = p_body, soul = p_soul, charisma = p_charisma, equipment_picks = p_equipment_picks,
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
