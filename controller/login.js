import { UserModel } from '../models/index.js'
import bcrypt from 'bcrypt'

export class LoginController {
  static log = async (req, res) => {
    try {
      const { username, password } = req.body
      const validateUser = await UserModel.getAll({ username })
      if (validateUser.rowCount === 0) {
        return res.status(409).send('user not found')
      }

      const storePassword = validateUser.rows[0].password
      const isCorrectPassword = await bcrypt.compare(password, storePassword)
      if (!isCorrectPassword) {
        return res.status(400).send('wrong password')
      }
      res.send('Welcome').status(202)
    } catch (error) {
      res.send('internal server error').status(500)
      throw new Error(error)
    }
  }
}
