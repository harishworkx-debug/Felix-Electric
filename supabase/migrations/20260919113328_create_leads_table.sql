/*
# Create leads table for contact form submissions

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer's full name
  - `phone` (text, not null) — customer's phone number
  - `email` (text, nullable) — customer's email address
  - `service` (text, nullable) — which service they're interested in
  - `message` (text, nullable) — their message/details
  - `page_source` (text, nullable) — which page the lead came from
  - `status` (text, default 'new') — lead status for tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- Allow anon + authenticated INSERT only (public contact form, no sign-in).
- No SELECT/UPDATE/DELETE for anon — only the service role can read leads.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text,
  message text,
  page_source text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);
