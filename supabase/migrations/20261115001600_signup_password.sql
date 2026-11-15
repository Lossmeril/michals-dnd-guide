-- Sign-ups need a shared password, checked by Supabase's "before user created"
-- auth hook, so calling the sign-up API directly can't skip it. The password
-- is kept hashed in a schema the public API doesn't expose. While none is set,
-- anyone can sign up.

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create table if not exists private.signup_password (
  id boolean primary key default true check (id),
  hash text not null,
  updated_at timestamptz not null default now()
);
revoke all on private.signup_password from public, anon, authenticated;

/** Refuses a new account unless its user metadata carries the right password */
create or replace function public.hook_before_user_created(event jsonb)
returns jsonb
language plpgsql
stable
set search_path to ''
as $$
declare
  v_hash text;
  v_given text := event->'user'->'user_metadata'->>'signup_password';
begin
  select hash into v_hash from private.signup_password;
  if v_hash is null then
    return '{}'::jsonb;
  end if;
  if v_given is null or extensions.crypt(v_given, v_hash) <> v_hash then
    return jsonb_build_object('error', jsonb_build_object(
      'http_code', 403,
      'message', 'Wrong sign-up password.'
    ));
  end if;
  return '{}'::jsonb;
end;
$$;

-- Only Supabase Auth may call the hook
grant usage on schema private to supabase_auth_admin;
grant select on private.signup_password to supabase_auth_admin;
grant execute on function public.hook_before_user_created(jsonb) to supabase_auth_admin;
revoke execute on function public.hook_before_user_created(jsonb) from public, anon, authenticated;

/** The password was only needed to get in; don't keep it in the user's metadata */
create or replace function private.strip_signup_password()
returns trigger
language plpgsql
set search_path to ''
as $$
begin
  new.raw_user_meta_data := coalesce(new.raw_user_meta_data, '{}'::jsonb) - 'signup_password';
  return new;
end;
$$;
grant execute on function private.strip_signup_password() to supabase_auth_admin;

drop trigger if exists strip_signup_password on auth.users;
create trigger strip_signup_password
before insert or update of raw_user_meta_data on auth.users
for each row execute function private.strip_signup_password();

/** Admins set the sign-up password; an empty one lets anyone sign up */
create or replace function public.set_signup_password(p_password text)
returns void
language plpgsql
security definer
set search_path to ''
as $$
begin
  if public.my_role() is distinct from 'admin' then
    raise exception 'Only an admin can change the sign-up password.';
  end if;
  if coalesce(trim(p_password), '') = '' then
    delete from private.signup_password where true;
  else
    insert into private.signup_password (id, hash, updated_at)
    values (true, extensions.crypt(p_password, extensions.gen_salt('bf')), now())
    on conflict (id) do update set hash = excluded.hash, updated_at = excluded.updated_at;
  end if;
end;
$$;

/** When the sign-up password was last set; null while sign-ups are open */
create or replace function public.signup_password_set_at()
returns timestamptz
language plpgsql
stable
security definer
set search_path to ''
as $$
begin
  if public.my_role() is distinct from 'admin' then
    raise exception 'Only an admin can see that.';
  end if;
  return (select updated_at from private.signup_password);
end;
$$;

revoke execute on function public.set_signup_password(text) from public, anon;
revoke execute on function public.signup_password_set_at() from public, anon;
grant execute on function public.set_signup_password(text) to authenticated;
grant execute on function public.signup_password_set_at() to authenticated;
