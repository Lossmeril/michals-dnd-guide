-- The background system and starting equipment are being redesigned. For now,
-- delete every background and every item except weapons, armour, shields,
-- ammunition and the mantlets the cover rules name.
-- The deleted rows are copied into the `backup` schema first (not exposed to
-- the API); drop it once the new system is settled:
--   drop schema backup cascade;

create schema if not exists backup;
revoke all on schema backup from anon, authenticated;

create table backup.backgrounds_20261116 as select * from public.backgrounds;
create table backup.items_20261116 as
  select * from public.items
  where kind not in ('weapon', 'armour', 'shield')
    and id not in ('arrows', 'bolts', 'sling-bullets', 'quiver', 'mantlet', 'siege-mantlet');

delete from public.backgrounds;
delete from public.items where id in (select id from backup.items_20261116);
