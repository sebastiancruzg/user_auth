import z from 'zod'

export const registerSchema = z.object({
  username: z.string().min(5).max(255),
  age: z.number().positive().optional(),
  password: z.string().min(8)
})
