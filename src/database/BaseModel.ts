import { Model } from 'objection'
import { knex } from './knex'

Model.knex(knex)

export class BaseModel extends Model {
  createdAt: Date
  updatedAt?: Date | null
}
