-- Roles can only be changed by an admin, through set_user_role. Before this, any
-- player could update their own profile's role to 'admin'.

create or replace function public.guard_profile_role()
returns trigger
language plpgsql
set search_path to ''
as $$
begin
  -- No signed-in user: the sign-up trigger or the service role
  if auth.uid() is null then
    return new;
  end if;
  if tg_op = 'INSERT' then
    if new.role is distinct from 'player' and public.my_role() is distinct from 'admin' then
      raise exception 'Only an admin can give a role.';
    end if;
  elsif new.role is distinct from old.role and public.my_role() is distinct from 'admin' then
    raise exception 'Only an admin can change a role.';
  end if;
  return new;
end;
$$;

drop trigger if exists guard_profile_role on public.profiles;
create trigger guard_profile_role
before insert or update of role on public.profiles
for each row execute function public.guard_profile_role();

/** Admins set anyone's role; the last admin can't step down */
create or replace function public.set_user_role(p_user uuid, p_role public.user_role)
returns void
language plpgsql
security definer
set search_path to ''
as $$
begin
  if public.my_role() is distinct from 'admin' then
    raise exception 'Only an admin can change a role.';
  end if;
  if p_role <> 'admin'
     and (select role from public.profiles where id = p_user) = 'admin'
     and (select count(*) from public.profiles where role = 'admin') <= 1 then
    raise exception 'There has to be at least one admin.';
  end if;
  update public.profiles set role = p_role where id = p_user;
  if not found then
    raise exception 'No such user.';
  end if;
end;
$$;

/** Everyone with an account, with their email, for the admin's users page */
create or replace function public.list_users()
returns table (id uuid, display_name text, avatar_url text, email text, role public.user_role, created_at timestamptz)
language plpgsql
stable
security definer
set search_path to ''
as $$
begin
  if public.my_role() is distinct from 'admin' then
    raise exception 'Only an admin can list users.';
  end if;
  return query
    select p.id, p.display_name, p.avatar_url, u.email::text, p.role, u.created_at
    from public.profiles p
    join auth.users u on u.id = p.id
    order by u.created_at;
end;
$$;

revoke execute on function public.set_user_role(uuid, public.user_role) from public, anon;
revoke execute on function public.list_users() from public, anon;
grant execute on function public.set_user_role(uuid, public.user_role) to authenticated;
grant execute on function public.list_users() to authenticated;
