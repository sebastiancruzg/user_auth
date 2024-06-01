import { registerSchema } from './register.js'

export const loginSchema = registerSchema.omit({ age: true })

