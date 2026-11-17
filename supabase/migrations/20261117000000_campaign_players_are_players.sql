-- A campaign's members are players, not characters. The DM adds a player;
-- the player then puts one of their characters forward (or none yet).
-- The table was empty when this ran.

alter table public.campaign_players
  add column player uuid not null references public.profiles(id) on delete cascade,
  alter column character_id drop not null;

alter table public.campaign_players
  add constraint campaign_players_campaign_player_key unique (campaign_id, player);

-- Members: the DM, or a player added to the campaign (with or without a character)
create or replace function public.is_campaign_member(cid bigint)
returns boolean
language sql
stable security definer
set search_path to ''
as $$
  select exists (
    select 1 from public.campaigns c
    where c.id = cid and c.dm = (select auth.uid())
  ) or exists (
    select 1 from public.campaign_players cp
    where cp.campaign_id = cid and cp.player = (select auth.uid())
  );
$$;

-- The DM adds players, without a character: the player picks it
drop policy if exists "The DM adds characters" on public.campaign_players;
create policy "The DM adds players" on public.campaign_players
  for insert to authenticated
  with check (
    character_id is null
    and merit_points = 0
    and exists (
      select 1 from public.campaigns c
      where c.id = campaign_players.campaign_id
        and c.dm = (select auth.uid())
        and c.dm <> campaign_players.player
    )
  );

drop policy if exists "The DM or the character's owner removes a character" on public.campaign_players;
create policy "The DM removes a player, or the player leaves" on public.campaign_players
  for delete to authenticated
  using (
    player = (select auth.uid())
    or exists (
      select 1 from public.campaigns c
      where c.id = campaign_players.campaign_id and c.dm = (select auth.uid())
    )
  );

-- The player puts forward one of their own characters, or withdraws it (null).
-- No update policy, so merit points can't be changed this way.
create or replace function public.set_campaign_character(p_campaign_id bigint, p_character_id bigint)
returns void
language plpgsql
security definer
set search_path to ''
as $$
begin
  if p_character_id is not null and not exists (
    select 1 from public.characters ch
    where ch.id = p_character_id and ch.owner = auth.uid()
  ) then
    raise exception 'You can only put forward your own character';
  end if;

  update public.campaign_players
     set character_id = p_character_id
   where campaign_id = p_campaign_id and player = auth.uid();
  if not found then raise exception 'You are not a player in this campaign'; end if;
end $$;

revoke all on function public.set_campaign_character(bigint, bigint) from public, anon;
grant execute on function public.set_campaign_character(bigint, bigint) to authenticated;

-- Merit points: the DM awards and spends, the player only spends
create or replace function public.set_merit_points(p_campaign_player_id bigint, p_points smallint)
returns void
language plpgsql
security definer
set search_path to ''
as $$
declare
  cp public.campaign_players;
  is_dm boolean;
begin
  select * into cp from public.campaign_players where id = p_campaign_player_id;
  if not found then raise exception 'Unknown campaign player'; end if;
  if p_points < 0 then raise exception 'Merit points can''t go below 0'; end if;

  select exists (select 1 from public.campaigns c where c.id = cp.campaign_id and c.dm = auth.uid()) into is_dm;

  if not (is_dm or (cp.player = auth.uid() and p_points < cp.merit_points)) then
    raise exception 'Only the DM can award merit points';
  end if;
  update public.campaign_players set merit_points = p_points where id = p_campaign_player_id;
end $$;
