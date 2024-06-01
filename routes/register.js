import express from 'express'
import { validationMiddleware } from '../middlewares/validation.js'
import { registerSchema } from '../schema/index.js'

export const registerRouter = express()

registerRouter.use(validationMiddleware(registerSchema))

registerRouter.route('/')
  .get(async (req, res) => {
    res.send('Hello register')
  })
  .post(async (req, res) => {
    res.send('Hello register')
  })
