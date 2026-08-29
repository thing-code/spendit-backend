import { numeric, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    age: numeric("age").notNull(),
    job: varchar("job", { length: 255 }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at"),
})

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert