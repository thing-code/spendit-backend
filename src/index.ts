import { Elysia } from "elysia";
import { transactionModule } from "./modules";

const app = new Elysia({ prefix: '/api/v1' })
  .get("/", () => {
    return {
      name: "spendit",
      version: "1.0.0"
    }
  })
  .use(transactionModule)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
