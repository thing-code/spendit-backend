import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema/schema"

const dbUrl = process.env.DATABASE_URL

if (!dbUrl) {
    throw new Error("DATABASE_URL not set. Fill the DATABASE_URL in .env")
}

const queryClient = postgres(dbUrl)

export const db = drizzle(queryClient, { schema })