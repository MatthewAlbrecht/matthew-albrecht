import { Role } from "~/lib/types";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { authorizeRoles } from "~/trpc/middleware";

export const boardRouter = createTRPCRouter({
  getRecentBoards: protectedProcedure
    .use(authorizeRoles([Role.Admin]))
    .query(({}) => {
      return { success: true };
    }),
});
