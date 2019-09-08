import { CustomersTableName, OrdersTableName } from '../../database/config'
import { Order } from '../orders/model'
import { BaseModel } from '../../database/BaseModel'

export const CustomerRelations = {
  orders: 'orders'
}

export class Customer extends BaseModel {
  id: number
  firstName: string
  lastName: string
  email: string
  address: string

  static get tableName() {
    return CustomersTableName
  }

  static get relationMappings() {
    return {
      [CustomerRelations.orders]: {
        relation: BaseModel.HasManyRelation,
        modelClass: Order,
        join: {
          from: `${CustomersTableName}.id`,
          to: `${OrdersTableName}.customerId`
        }
      }
    }
  }
}
