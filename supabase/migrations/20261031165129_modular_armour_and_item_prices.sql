-- Modular armour (pieces with Protection and Burden) and hidden item prices.
-- See docs/ruleset-overview.md: Armour, and Economy and prices.

create type armour_slot as enum ('under', 'body', 'head', 'arms', 'legs');

alter table items
  add column price_copper integer not null default 0 check (price_copper >= 0),
  add column slots armour_slot[],
  add column protection smallint check (protection >= 0),
  add column burden smallint check (burden >= 0),
  add column harness boolean not null default false;

comment on column items.price_copper is 'List price in copper. Not shown to players yet; for the DM price tables.';
comment on column items.slots is 'Armour pieces: the body slots the piece takes (one piece per slot)';
comment on column items.protection is 'Armour pieces: added to Protection, which sets the armour rating';
comment on column items.burden is 'Armour pieces: added to Burden, which sets the encumbrance';
comment on column items.harness is 'Armour pieces: part of a plate harness; a full fitted harness lowers Burden by 3';
