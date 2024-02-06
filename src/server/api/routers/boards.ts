import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const boardRouter = createTRPCRouter({
  getRecentBoards: protectedProcedure.query(({ ctx }) => {
    return { success: true };
  }),
});
