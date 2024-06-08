import { pool } from '../postgress/db_connection.js'

export class UserModel {
  static async getAll ({ id, username }) {
    const client = await pool.connect()
    try {
      const params = []

      let query = `
      SELECT * FROM users
      WHERE true
      `
      if (id) {
        params.push(id)
        query += ` AND id = $${params.length}`
      }
      if (username) {
        params.push(username)
        query += ` AND username = $${params.length}`
      }

      return await client.query(query, params)
    } catch (error) {
      throw new Error(error)
    } finally {
      client.release()
    }
  }
}
