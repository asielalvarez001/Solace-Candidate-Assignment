import db from '../../../db';
import { advocates } from '../../../db/schema';
import { count } from 'drizzle-orm';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const pageSize = parseInt(url.searchParams.get('pageSize') || '10', 10);

  const safePage = page > 0 ? page : 1;
  const safePageSize = pageSize > 0 ? pageSize : 10;
  const offset = (safePage - 1) * safePageSize;

  const data = await db
    .select()
    .from(advocates)
    .orderBy(advocates.id)
    .limit(safePageSize)
    .offset(offset);

  const [totalAdvocates] = await db.select({ count: count() }).from(advocates);

  const totalCount = totalAdvocates.count ?? 0;

  const totalPages = Math.max(1, Math.ceil(totalCount / safePageSize));

  return new Response(
    JSON.stringify({
      data,
      pagination: {
        page: safePage,
        pageSize: safePageSize,
        total: totalCount,
        totalPages: totalPages,
      },
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
