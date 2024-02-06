import { relations, sql } from "drizzle-orm";
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
  int,
  mediumtext,
  datetime,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `matt_${name}`);

export const users = mysqlTable("user", {
  id: varchar("id", {
    length: 15, // change this when using custom user ids
  }).primaryKey(),
  // other user attributes
  email: varchar("email", {
    length: 100,
  })
    .notNull()
    .unique(),
  hashedPassword: varchar("hashed_password", {
    length: 255,
  }).notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  session: many(sessions),
  searches: many(searches),
  moodboards: many(moodboards),
}));

export const sessions = mysqlTable("user_session", {
  id: varchar("id", {
    length: 128,
  }).primaryKey(),
  userId: varchar("user_id", {
    length: 15,
  }).notNull(),
  expiresAt: datetime("expires_at").notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const searches = mysqlTable(
  "searches",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
    searchTerm: varchar("query", { length: 255 }).notNull(),
    serviceOneResponseRaw: mediumtext("service_one_raw_response"),
    serviceOneRequestedAt: timestamp("service_one_requested_at"),
    serviceOneResponseStatusCode: int("service_one_response_status_code"),
    createdById: varchar("created_by_id", { length: 15 }).notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.searchTerm),
  }),
);

export const searchesRelations = relations(searches, ({ many, one }) => ({
  results: many(searchResults),
  createdBy: one(users, {
    fields: [searches.createdById],
    references: [users.id],
  }),
  moodboard: one(moodboards, {
    fields: [searches.id],
    references: [moodboards.searchId],
  }),
}));

/* TODO @matthewalbrecht: Search results need to be canonical – meaning the same result might 
show up in different searches – we should not save it twice and the result should be related to both searches */
export const searchResults = mysqlTable(
  "search-results",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
    searchId: bigint("search_id", { mode: "number" }).notNull(),
    src: mediumtext("src"),
    srcset: mediumtext("srcset"),
    linkUrl: mediumtext("link_url"),
    displayName: varchar("display_name", { length: 255 }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.searchId),
  }),
);

export const searchResultsRelations = relations(searchResults, ({ one }) => ({
  search: one(searches, {
    fields: [searchResults.searchId],
    references: [searches.id],
  }),
}));

export const moodboards = mysqlTable(
  "moodboards",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
    name: varchar("name", { length: 255 }).notNull(),
    userId: varchar("user_id", { length: 15 }).notNull(),
    inactiveAt: timestamp("inactive_at"),
    searchId: bigint("search_id", { mode: "number" }).notNull(),
    placeholderImageUrl: varchar("placeholder_image_url", { length: 255 }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const moodboardsRelations = relations(moodboards, ({ many, one }) => ({
  user: one(users, {
    fields: [moodboards.userId],
    references: [users.id],
  }),
  search: one(searches, {
    fields: [moodboards.searchId],
    references: [searches.id],
  }),
  images: many(moodboardImages),
}));

export const moodboardImages = mysqlTable(
  "moodboard_images",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
    moodboardId: bigint("moodboard_id", { mode: "number" }).notNull(),
    searchResultId: bigint("search_result_id", { mode: "number" }).notNull(),
    inactiveAt: timestamp("inactive_at"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.moodboardId),
  }),
);

export const moodboardImagesRelations = relations(
  moodboardImages,
  ({ one }) => ({
    moodboard: one(moodboards, {
      fields: [moodboardImages.moodboardId],
      references: [moodboards.id],
    }),
    searchResult: one(searchResults, {
      fields: [moodboardImages.searchResultId],
      references: [searchResults.id],
    }),
  }),
);
