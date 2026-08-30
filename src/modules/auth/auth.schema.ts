import { t } from "elysia";

export const registerSchema = t.Object({
    email: t.String({
        minLength: 1,
        maxLength: 100,
        format: "email"
    }),
    password: t.String({
        minLength: 8,
    }),
    name: t.String({
        minLength: 1,
        maxLength: 250,
    }),
    job: t.String({
        minLength: 1,
        maxLength: 250,
    }),
    age: t.Numeric({
        minimum: 17
    }),
})

export const loginSchema = t.Object({
    email: t.String({
        minLength: 1,
        maxLength: 100,
        format: "email"
    }),
    password: t.String({
        minLength: 8,
    }),
})