import { z } from "zod"

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const registerUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.string().default("USER"),
})
