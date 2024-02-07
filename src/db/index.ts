import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

import * as schema from "./schema";
import { Lucia } from "lucia";
import { PlanetScaleAdapter } from "@lucia-auth/adapter-mysql";
import { env } from "~/env";

export const connection = connect({
  url: env.DATABASE_URL,
});

export const db = drizzle(connection, { schema });

export const { users, aiQuestions, stuffILike } = schema;

export const lucia = new Lucia(
  new PlanetScaleAdapter(connection, {
    user: "matt_user",
    session: "matt_user_session",
  }),
  {
    sessionCookie: {
      // this sets cookies with super long expiration
      // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
      expires: false,
      attributes: {
        // set to `true` when using HTTPS
        secure: process.env.NODE_ENV === "production",
      },
    },
    getUserAttributes: (attributes) => {
      console.log("getUserAttributes", attributes);
      return {
        // attributes has the type of DatabaseUserAttributes
        email: attributes.email,
        // NOTE: I HAVE NO IDEA WHY THIS IS A NUMBER
        isAdmin: attributes.is_admin === 1,
      };
    },
  },
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  email: string;
  // NOTE: I HAVE NO IDEA WHY THIS IS A NUMBER
  is_admin: number;
}
