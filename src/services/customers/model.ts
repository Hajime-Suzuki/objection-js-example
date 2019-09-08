import { BaseModel } from '../../database/knex'
import { CustomersTableName, OrdersTableName } from '../../database/config'
import { Order } from '../orders/model'

export class Customer extends BaseModel {
  id: number
  firstName: string
  lastName: string
  email: string
  address: string

  static get tableName() {
    return CustomersTableName
  }

  static relationMappings = {
    [OrdersTableName]: {
      relation: BaseModel.HasManyRelation,
      modelClass: Order,
      join: {
        from: `${CustomersTableName}.id`,
        to: `${OrdersTableName}.customerId`
      }
    }
  }
}
