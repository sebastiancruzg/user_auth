import express from 'express'

export const registerRouter = express()

registerRouter.route('/')
  .get(async (req, res) => {
    res.send('Hello register')
  })
