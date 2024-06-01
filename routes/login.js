import express from 'express'
import { LoginController } from '../controller/index.js'
import { validationMiddleware } from '../middlewares/validation.js'
import { loginSchema } from '../schema/login.js'

export const loginRouter = express()

loginRouter.use(validationMiddleware(loginSchema))

loginRouter.route('/')
  .post(LoginController.log)
  .get(async (req, res) => res.send('hello login'))
