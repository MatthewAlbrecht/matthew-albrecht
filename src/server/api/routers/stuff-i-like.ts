import { eq } from "drizzle-orm";
import { z } from "zod";
import { stuffILike } from "~/db";
import { Role, createThingSchema } from "~/lib/types";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { authorizeRoles } from "~/trpc/middleware";

export const stuffILikeRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.stuffILike.findMany();
  }),
  protectedGetAll: protectedProcedure
    .use(authorizeRoles([Role.Admin]))
    .query(async ({ ctx }) => {
      return await ctx.db.query.stuffILike.findMany();
    }),
  getById: protectedProcedure
    .use(authorizeRoles([Role.Admin]))
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.stuffILike.findFirst({
        where: eq(stuffILike.id, input.id),
      });
    }),
  createThing: protectedProcedure
    .use(authorizeRoles([Role.Admin]))
    .input(createThingSchema)
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db.insert(stuffILike).values(input);

      return result.insertId;
    }),
  deleteThing: protectedProcedure
    .use(authorizeRoles([Role.Admin]))
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(stuffILike).where(eq(stuffILike.id, input.id));
      return null;
    }),
});
