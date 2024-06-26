import express from 'express'
import { loginRouter, registerRouter } from './routes/index.js'

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.use('*', async (req, res) => {
  res.status(404).send('what??')
})


app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})
