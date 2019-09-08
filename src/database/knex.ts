import * as Knex from 'knex'
import { knexSnakeCaseMappers, Model } from 'objection'

export const knex = Knex({
  client: 'pg',
  useNullAsDefault: true,
  connection:
    process.env.CONNECTION_STRING ||
    'postgres://postgres:secret@localhost:5432/postgres',
  ...knexSnakeCaseMappers()
})

Model.knex(knex)

export class BaseModel extends Model {
  createdAt: Date
  updatedAt?: Date | null
}
