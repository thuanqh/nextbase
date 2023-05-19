import { z } from "zod"

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const registerUserSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Full name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  role: z.string().default("USER"),
})
