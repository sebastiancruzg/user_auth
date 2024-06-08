import z from 'zod'

export const registerSchema = z.object({
  username: z.string().min(5).max(255).trim(),
  age: z.number().positive().optional(),
  password: z.string().min(8).trim()
})
