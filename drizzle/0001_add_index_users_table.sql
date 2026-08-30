CREATE INDEX "name_idx" ON "users" USING btree ("name");--> statement-breakpoint
CREATE INDEX "job_idx" ON "users" USING btree ("job");--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "users" USING btree ("email");