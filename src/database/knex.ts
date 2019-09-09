import * as Knex from 'knex'
import { knexSnakeCaseMappers } from 'objection'

export const knex = Knex({
  client: 'pg',
  useNullAsDefault: true,
  pool: { min: 0, max: 15 },
  connection:
    process.env.CONNECTION_STRING ||
    'postgres://postgres:secret@localhost:5432/postgres',
  ...knexSnakeCaseMappers()
})
