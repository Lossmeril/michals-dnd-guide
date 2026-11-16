-- Videos uploaded into rulebook pages: public to read, admins upload them
-- straight from the browser (too big for a server action)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('videos', 'videos', true, 52428800, array['video/mp4', 'video/webm', 'video/quicktime'])
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

create policy "videos: admins can upload" on storage.objects for insert to authenticated
  with check (bucket_id = 'videos' and (select public.is_admin()));
create policy "videos: admins can update" on storage.objects for update to authenticated
  using (bucket_id = 'videos' and (select public.is_admin()))
  with check (bucket_id = 'videos' and (select public.is_admin()));
create policy "videos: admins can delete" on storage.objects for delete to authenticated
  using (bucket_id = 'videos' and (select public.is_admin()));
