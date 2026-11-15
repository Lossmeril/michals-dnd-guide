-- When the user closed the alpha-test notice; null shows it on their next visit.
alter table public.profiles add column if not exists alpha_notice_seen_at timestamptz;
