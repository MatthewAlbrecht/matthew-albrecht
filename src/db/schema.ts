import { relations, sql } from "drizzle-orm";
import {
  bigint,
  mysqlTableCreator,
  timestamp,
  varchar,
  mediumtext,
  datetime,
  json,
  tinytext,
  boolean,
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
  isAdmin: boolean("is_admin").notNull().default(false),
});

export const userRelations = relations(users, ({ many }) => ({
  session: many(sessions),
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

export const aiQuestions = mysqlTable(
  "ai_questions",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    question: varchar("question", { length: 4000 }).notNull(),
    answer: mediumtext("answer"),
    openAiThreadId: varchar("openai_thread_id", { length: 255 }),
    openAiRunId: varchar("openai_run_id", { length: 255 }),
    openAiMessageId: varchar("openai_message_id", { length: 255 }),
    openAiResponseRaw: json("openai_response_raw"),
  },
  () => ({}),
);

export const stuffILike = mysqlTable(
  "stuff_i_like",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    title: tinytext("question").notNull(),
    subtitle: tinytext("subtitle").notNull(),
    category: tinytext("category").notNull(),
    contentUrl: varchar("content_url", { length: 255 }).notNull(),
    imageUrl: varchar("image_url", { length: 255 }),
  },
  () => ({}),
);
