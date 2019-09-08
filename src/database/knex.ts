import * as Knex from 'knex'
import { knexSnakeCaseMappers } from 'objection'

export const knex = Knex({
  client: 'pg',
  useNullAsDefault: true,
  connection:
    process.env.CONNECTION_STRING ||
    'postgres://postgres:secret@localhost:5432/postgres',
  ...knexSnakeCaseMappers()
})
