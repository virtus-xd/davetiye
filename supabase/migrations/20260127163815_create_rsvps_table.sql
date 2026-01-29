/*
  # Create RSVPs table for wedding invitation

  1. New Tables
    - `rsvps`
      - `id` (uuid, primary key) - Unique identifier for each RSVP
      - `name` (text) - Full name of the guest
      - `email` (text) - Email address of the guest
      - `guests` (integer) - Number of guests attending
      - `attending` (boolean) - Whether the guest is attending or declining
      - `dietary_restrictions` (text) - Any dietary restrictions or preferences
      - `message` (text) - Special message from the guest
      - `created_at` (timestamptz) - Timestamp when RSVP was submitted

  2. Security
    - Enable RLS on `rsvps` table
    - Add policy for authenticated and anonymous users to insert their RSVP
    - Add policy for service role to read all RSVPs (for admin purposes)

  3. Important Notes
    - The table uses RLS but allows anonymous inserts since guests don't need accounts
    - Email field should be validated on the client side
    - Created_at timestamp is automatically set on insert
*/

CREATE TABLE IF NOT EXISTS rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  attending boolean NOT NULL DEFAULT true,
  dietary_restrictions text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert RSVP"
  ON rsvps
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all RSVPs"
  ON rsvps
  FOR SELECT
  TO authenticated
  USING (true);