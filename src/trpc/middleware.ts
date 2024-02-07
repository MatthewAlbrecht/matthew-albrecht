import { type Role } from "~/lib/types";
import { type ProtectedProcedureUseCallback } from "~/server/api/trpc";

export function authorizeRoles(roles: Role[]) {
  const use: ProtectedProcedureUseCallback = ({ ctx, next }) => {
    console.log("authorizeRoles middleware", ctx.user, roles);
    const isAuthorized = roles.some((r) => ctx.user[r]);
    if (!isAuthorized) {
      throw new Error("Forbidden");
    }
    return next();
  };
  return use;
}
