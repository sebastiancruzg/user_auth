import { pool } from '../postgress/db_connection.js'

export class AuthModel {
  static async createUser (newUser) {
    const client = await pool.connect()
    try {
      const columns = Object.keys(newUser).join(',')
      const values = Object.values(newUser)
      const placeholders = values.map((_, index) => `$${index + 1}`).join(',')
      const insertQuery = `INSERT INTO users
        (${columns})
        VALUES(${placeholders})
        RETURNING username
        `
      const insertedUsername = await client.query(insertQuery, values)
      return insertedUsername.rows[0].username
    } catch (error) {
      throw new Error(error)
    } finally {
      client.release()
    }
  }
}
