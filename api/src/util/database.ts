import pgPromise from 'pg-promise'
import dotenv from 'dotenv'
const pgp = pgPromise({})

dotenv.config()

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
}

// @ts-ignore
export const db = pgp(config)
