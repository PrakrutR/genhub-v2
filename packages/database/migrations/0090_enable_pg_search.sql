-- Custom SQL migration file, put your code below! --
-- Conditional: only install pg_search when the extension is available on this Postgres instance.
-- Supabase and other managed providers that do not bundle pg_search (AGPL-licensed) will skip this
-- silently. Self-hosters running ParadeDB will have it available and proceed normally.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_available_extensions WHERE name = 'pg_search') THEN
    EXECUTE 'CREATE EXTENSION IF NOT EXISTS pg_search';
  END IF;
END $$;
