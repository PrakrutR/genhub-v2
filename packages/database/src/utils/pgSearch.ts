import { sql } from 'drizzle-orm';

import type { LobeChatDatabase } from '../type';

const pgSearchCache = new WeakMap<object, Promise<boolean>>();

export function isPgSearchAvailable(db: LobeChatDatabase): Promise<boolean> {
  if (!pgSearchCache.has(db)) {
    pgSearchCache.set(
      db,
      db
        .execute(sql`SELECT 1 FROM pg_extension WHERE extname = 'pg_search' LIMIT 1`)
        .then((result) => (result.rows?.length ?? 0) > 0)
        .catch(() => false),
    );
  }
  return pgSearchCache.get(db)!;
}
