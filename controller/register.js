import bcrypt from 'bcrypt'
import { UserModel, AuthModel } from '../models/index.js'

export class RegisterController {
  static async register (req, res) {
    try {
      const getUser = await UserModel.getAll({ username: req.body.username })

      if (getUser.rowCount > 0) {
        return res.status(409).send('User already registered')
      }

      const { password, ...user } = req.body
      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = {
        id: Date.now().toString(),
        password: hashedPassword,
        ...user
      }

      const insertedUsername = await AuthModel.createUser(newUser)

      return res.status(201).send(`User ${insertedUsername} created successfully`)
    } catch (error) {
      console.error('Error creating the user:', error)
      return res.status(500).send('Internal server error')
    }
  }
}
