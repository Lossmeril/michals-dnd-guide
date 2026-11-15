-- The sign-up hook runs as supabase_auth_admin and checks the password with
-- extensions.crypt; without usage on the schema it failed with
-- "Error running hook URI" whenever a sign-up password was set.
grant usage on schema extensions to supabase_auth_admin;
grant execute on function extensions.crypt(text, text) to supabase_auth_admin;
