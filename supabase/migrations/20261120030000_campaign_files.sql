-- Files attached to campaign updates (handouts, maps, PDFs, audio).
-- Kept apart from the campaigns bucket, which holds pictures only.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'campaign-files',
  'campaign-files',
  true,
  20971520, -- 20 MB
  array[
    'application/pdf',
    'text/plain', 'text/markdown', 'text/csv',
    'application/zip', 'application/x-zip-compressed',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.oasis.opendocument.text',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.presentation',
    'image/*', 'audio/*', 'video/mp4', 'video/webm'
  ]
)
on conflict (id) do nothing;

-- Paths are <campaign id>/updates/<uuid>/<file name>
create policy "campaign-files: members can read"
on storage.objects for select to authenticated
using (
  bucket_id = 'campaign-files'
  and (storage.foldername(name))[1] ~ '^[0-9]+$'
  and public.is_campaign_member(((storage.foldername(name))[1])::bigint)
);

create policy "campaign-files: members can upload"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'campaign-files'
  and (storage.foldername(name))[2] = 'updates'
  and (storage.foldername(name))[1] ~ '^[0-9]+$'
  and public.is_campaign_member(((storage.foldername(name))[1])::bigint)
);

-- The uploader, or the campaign's DM (also when the campaign is deleted)
create policy "campaign-files: uploader or dm can delete"
on storage.objects for delete to authenticated
using (
  bucket_id = 'campaign-files'
  and (
    owner_id = (select auth.uid())::text
    or exists (
      select 1 from public.campaigns c
      where (c.id)::text = (storage.foldername(name))[1]
        and c.dm = (select auth.uid())
    )
  )
);
