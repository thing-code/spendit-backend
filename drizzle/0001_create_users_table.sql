ALTER TABLE "users" RENAME COLUMN "password" TO "password_hash";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "age" SET DATA TYPE integer;