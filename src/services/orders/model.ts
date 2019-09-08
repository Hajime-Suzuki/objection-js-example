import { BaseModel } from '../../database/knex'
import { OrdersTableName, CustomersTableName } from '../../database/config'

type OrderStatus =
  | 'payment_pending'
  | 'payment_completed'
  | 'payment_cancelled'
  | 'delivery_pending'
  | 'delivery_shipped'
  | 'delivery_completed'

export class Order extends BaseModel {
  id: number
  customerId: number
  status: OrderStatus
  completedAt: Date | null

  static get tableName() {
    return OrdersTableName
  }

  static get relationMappings() {
    const { Customer } = require('../customers/model')
    return {
      [CustomersTableName]: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Customer,
        join: {
          from: `${OrdersTableName}.customerId`,
          to: `${CustomersTableName}.id`
        }
      }
    }
  }
}
