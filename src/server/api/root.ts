import { searchRouter } from "./routers/search";
import { createTRPCRouter } from "~/server/api/trpc";
import { boardRouter } from "./routers/boards";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  search: searchRouter,
  boards: boardRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
