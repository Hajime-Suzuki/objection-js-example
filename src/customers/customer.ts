import { BaseModel } from '../database/knex'
import { CustomerTableName } from '../database/config'

export class Customer extends BaseModel {
  id: number
  firstName: string
  lastName: string
  email: string
  address: string
  createdAt: Date
  updatedAt?: Date | null

  static get tableName() {
    return CustomerTableName
  }
}
