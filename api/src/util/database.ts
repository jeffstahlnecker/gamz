import pgPromise from 'pg-promise'
import {load} from 'ts-dotenv'
const pgp = pgPromise({})

const env = load({
  DB_PASSWORD: String,
  DB_USER: String,
  DB_NAME: String,
  DB_HOST: String,
  DB_PORT: Number,
})

const config = {
  host: env.DB_HOST,
  user: env.DB_USER,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
}

export const db = pgp(config)
