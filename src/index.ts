import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => {
    return {
      name: "spendit",
      version: "1.0.0"
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
