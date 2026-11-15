-- Bundles (2026-11-15): kits as in 5E. A bundle is an item with `contents`;
-- backgrounds offer the bundle as one line, and the inventory gets its pieces,
-- each tagged with `bundle_id` so the sheet can group them.

alter table public.items
  add column contents jsonb not null default '[]'::jsonb
  check (jsonb_typeof(contents) = 'array');

comment on column public.items.contents is
  'A bundle''s pieces: [{"item": id, "quantity": n}]. Empty for ordinary items.';

alter table public.character_items
  add column bundle_id text references public.items(id) on delete set null;

-- ----- The bundles -----

insert into public.items (id, name, kind, category, description, contents, sort) values
('thieves-tools', 'Thieves'' tools |cs| Zlodějské náčiní', 'tool', 'kit', 'Everything for a lock that doesn''t want to open. |cs| Všechno na zámek, který se nechce otevřít.',
 '[{"item":"file","quantity":1},{"item":"lockpicks","quantity":1},{"item":"small-mirror","quantity":1},{"item":"scissors","quantity":1},{"item":"pliers","quantity":1}]', 300),
('herbalism-kit', 'Herbalism kit |cs| Bylinkářská brašna', 'tool', 'kit', 'For gathering, drying and grinding herbs. |cs| Na sběr, sušení a drcení bylin.',
 '[{"item":"leather-gloves","quantity":1},{"item":"clippers","quantity":1},{"item":"mortar-and-pestle","quantity":1},{"item":"glass-jar","quantity":3},{"item":"pouch","quantity":2}]', 301),
('disguise-kit', 'Disguise kit |cs| Maskovací souprava', 'tool', 'kit', 'A new face in a small box. |cs| Nová tvář v malé krabičce.',
 '[{"item":"cosmetics","quantity":1},{"item":"hair-dye","quantity":1},{"item":"false-beard","quantity":1},{"item":"small-mirror","quantity":1}]', 302),
('forgery-kit', 'Forgery kit |cs| Padělatelská souprava', 'tool', 'kit', 'Seals, wax and a steady hand not included. |cs| Pečetě a vosk; pevná ruka není součástí.',
 '[{"item":"blank-seals","quantity":1},{"item":"wax-tools","quantity":1},{"item":"sealing-wax","quantity":1},{"item":"quill","quantity":1},{"item":"ink","quantity":1},{"item":"parchment","quantity":5}]', 303),
('calligraphers-supplies', 'Calligrapher''s supplies |cs| Písařské potřeby', 'tool', 'kit', 'Quill, ink and something to write on. |cs| Brk, inkoust a něco, na co psát.',
 '[{"item":"quill","quantity":1},{"item":"ink","quantity":1},{"item":"parchment","quantity":5}]', 304),
('cartographers-tools', 'Cartographer''s tools |cs| Kartografické náčiní', 'tool', 'kit', 'For drawing the road you came by. |cs| Na zakreslení cesty, kterou jsi přišel.',
 '[{"item":"drawing-compasses","quantity":1},{"item":"ruler","quantity":1},{"item":"quill","quantity":1},{"item":"ink","quantity":1},{"item":"parchment","quantity":5}]', 305),
('navigators-tools', 'Navigator''s tools |cs| Navigační náčiní', 'tool', 'kit', 'For finding the way where there are no roads. |cs| Na hledání cesty tam, kde žádné cesty nejsou.',
 '[{"item":"mariners-compass","quantity":1},{"item":"sounding-line","quantity":1},{"item":"ruler","quantity":1}]', 306),
('healers-kit', 'Healer''s kit |cs| Ranhojičská brašna', 'tool', 'kit', 'Splints and thread; bandages and salves are Material. |cs| Dlahy a nit; obvazy a masti jsou suroviny.',
 '[{"item":"splints","quantity":1},{"item":"needle-and-thread","quantity":1}]', 307),
('merchants-kit', 'Merchant''s kit |cs| Kupecké potřeby', 'tool', 'kit', 'For counting other people''s money. |cs| Na počítání cizích peněz.',
 '[{"item":"scales","quantity":1},{"item":"counting-cloth","quantity":1},{"item":"ledger","quantity":1}]', 308),
('smiths-tools', 'Smith''s tools |cs| Kovářské náčiní', 'tool', 'kit', null,
 '[{"item":"smiths-hammer","quantity":1},{"item":"tongs","quantity":1},{"item":"file","quantity":1}]', 310),
('carpenters-tools', 'Carpenter''s tools |cs| Tesařské náčiní', 'tool', 'kit', null,
 '[{"item":"saw","quantity":1},{"item":"plane","quantity":1},{"item":"chisels","quantity":1},{"item":"auger","quantity":1},{"item":"claw-hammer","quantity":1}]', 311),
('leatherworkers-tools', 'Leatherworker''s tools |cs| Brašnářské náčiní', 'tool', 'kit', null,
 '[{"item":"leather-knife","quantity":1},{"item":"awl","quantity":1},{"item":"needle-and-thread","quantity":1},{"item":"last","quantity":1}]', 312),
('weavers-tools', 'Weaver''s tools |cs| Tkalcovské náčiní', 'tool', 'kit', null,
 '[{"item":"carding-combs","quantity":1},{"item":"drop-spindle","quantity":1},{"item":"hand-loom","quantity":1}]', 313),
('brewers-supplies', 'Brewer''s supplies |cs| Sládkovské potřeby', 'tool', 'kit', null,
 '[{"item":"brewing-kettle","quantity":1},{"item":"mash-paddle","quantity":1},{"item":"sieve","quantity":1},{"item":"ladle","quantity":1}]', 314),
('masons-tools', 'Mason''s tools |cs| Kamenické náčiní', 'tool', 'kit', null,
 '[{"item":"masons-hammer","quantity":1},{"item":"chisels","quantity":1},{"item":"trowel","quantity":1},{"item":"masons-square","quantity":1}]', 315),
('potters-tools', 'Potter''s tools |cs| Hrnčířské náčiní', 'tool', 'kit', null,
 '[{"item":"potters-ribs","quantity":1},{"item":"potters-wire","quantity":1}]', 316),
('jewellers-tools', 'Jeweller''s tools |cs| Zlatnické náčiní', 'tool', 'kit', null,
 '[{"item":"jewellers-files","quantity":1},{"item":"jewellers-saw","quantity":1},{"item":"tweezers","quantity":1},{"item":"touchstone","quantity":1}]', 317),
('cooks-utensils', 'Cook''s utensils |cs| Kuchařské náčiní', 'tool', 'kit', null,
 '[{"item":"kitchen-knives","quantity":1},{"item":"iron-pot","quantity":1},{"item":"ladle","quantity":1},{"item":"spice-box","quantity":1}]', 318);

-- A bundle costs what its pieces cost
update public.items b set price_copper = (
  select coalesce(sum(i.price_copper * (c->>'quantity')::int), 0)
  from jsonb_array_elements(b.contents) c join public.items i on i.id = c->>'item'
)
where jsonb_array_length(b.contents) > 0;

-- ----- Backgrounds: fold the pieces back into their bundles -----

create function pg_temp.fold_option(p_entries jsonb) returns jsonb language plpgsql as $$
declare
  v_entries jsonb := p_entries;
  v_bundle record;
  v_piece jsonb;
  v_ok boolean;
  v_first int;
  v_idx int;
  v_out jsonb;
  v_e jsonb;
  v_need int;
begin
  -- Biggest bundles first, so a cartographer's quill isn't taken for a calligrapher's
  for v_bundle in
    select id, contents from public.items
    where jsonb_array_length(contents) > 0
    order by jsonb_array_length(contents) desc, id
  loop
    v_ok := true;
    for v_piece in select * from jsonb_array_elements(v_bundle.contents) loop
      if not exists (
        select 1 from jsonb_array_elements(v_entries) e
        where e->'items' = jsonb_build_array(v_piece->>'item') and e->>'note' is null
          and (e->>'quantity')::int >= (v_piece->>'quantity')::int
      ) then v_ok := false; exit; end if;
    end loop;
    continue when not v_ok;

    -- Take the pieces out; the bundle goes where its first piece was
    v_first := null;
    v_out := '[]'::jsonb;
    v_idx := 0;
    for v_e in select * from jsonb_array_elements(v_entries) loop
      select (p->>'quantity')::int into v_need from jsonb_array_elements(v_bundle.contents) p
      where v_e->'items' = jsonb_build_array(p->>'item') and v_e->>'note' is null;
      if v_need is not null then
        if v_first is null then
          v_first := v_idx;
          v_out := v_out || jsonb_build_array(jsonb_build_object('items', jsonb_build_array(v_bundle.id), 'quantity', 1));
          v_idx := v_idx + 1;
        end if;
        if (v_e->>'quantity')::int > v_need then
          v_out := v_out || jsonb_build_array(jsonb_set(v_e, '{quantity}', to_jsonb((v_e->>'quantity')::int - v_need)));
          v_idx := v_idx + 1;
        end if;
      else
        v_out := v_out || jsonb_build_array(v_e);
        v_idx := v_idx + 1;
      end if;
    end loop;
    v_entries := v_out;
  end loop;
  return v_entries;
end $$;

-- A group whose options are all one bundle each becomes one choice: "Smith's tools or Carpenter's tools or …"
create function pg_temp.fold_group(p_group jsonb) returns jsonb language plpgsql as $$
declare
  v_options jsonb;
begin
  select jsonb_agg(jsonb_build_object('entries', pg_temp.fold_option(o->'entries')) order by n)
  into v_options
  from jsonb_array_elements(p_group->'options') with ordinality as x(o, n);

  if jsonb_array_length(v_options) > 1 and not exists (
    select 1 from jsonb_array_elements(v_options) o
    where jsonb_array_length(o->'entries') <> 1
       or jsonb_array_length(o->'entries'->0->'items') <> 1
       or (o->'entries'->0->>'quantity')::int <> 1
       or o->'entries'->0 ? 'note'
       or not exists (select 1 from public.items i where i.id = o->'entries'->0->'items'->>0 and jsonb_array_length(i.contents) > 0)
  ) then
    return jsonb_build_object('options', jsonb_build_array(jsonb_build_object('entries', jsonb_build_array(
      jsonb_build_object('items', (select jsonb_agg(o->'entries'->0->'items'->0 order by n) from jsonb_array_elements(v_options) with ordinality as y(o, n)), 'quantity', 1)
    ))));
  end if;
  return jsonb_build_object('options', v_options);
end $$;

update public.backgrounds b
set equipment = (
  select jsonb_agg(pg_temp.fold_group(g) order by n)
  from jsonb_array_elements(b.equipment) with ordinality as x(g, n)
)
where jsonb_array_length(b.equipment) > 0;

-- ----- Saving a build: pieces keep their bundle -----

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
    insert into public.character_items (character_id, item_id, quantity, note, bundle_id, from_background)
    select v_id, i->>'item_id', (i->>'quantity')::smallint, nullif(i->>'note', ''), nullif(i->>'bundle_id', ''), true
    from jsonb_array_elements(p_items) i;
  end if;

  return v_id;
end;
$function$;
