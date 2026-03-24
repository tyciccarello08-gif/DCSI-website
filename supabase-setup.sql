-- Run this in your Supabase SQL Editor (dashboard.supabase.com > SQL Editor)

create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  email text not null,
  service text,
  message text
);

-- Enable Row Level Security
alter table contact_submissions enable row level security;

-- Allow the anon key to INSERT (form submissions from the browser)
create policy "Allow public insert"
  on contact_submissions
  for insert
  to anon
  with check (true);

-- Restrict SELECT to authenticated users only (you log into Supabase dashboard)
create policy "Allow authenticated read"
  on contact_submissions
  for select
  to authenticated
  using (true);
