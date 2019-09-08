import {
  OrdersTableName,
  CustomersTableName,
  ProductsTableName,
  ProductOrderTableName
} from '../../database/config'
import { BaseModel } from '../../database/BaseModel'
import { Product } from '../products/model'
import { RelationMappings } from 'objection'

type OrderStatus =
  | 'payment_pending'
  | 'payment_completed'
  | 'payment_cancelled'
  | 'delivery_pending'
  | 'delivery_shipped'
  | 'delivery_completed'

export const OrderRelations = {
  customer: 'customer',
  products: 'products'
}

export class Order extends BaseModel {
  id: number
  customerId: number
  status: OrderStatus
  completedAt: Date | null

  static get tableName() {
    return OrdersTableName
  }

  static get relationMappings(): RelationMappings {
    const { Customer } = require('../customers/model')
    return {
      [OrderRelations.customer]: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Customer,
        join: {
          from: `${OrdersTableName}.customerId`,
          to: `${CustomersTableName}.id`
        }
      },
      [OrderRelations.products]: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: `${OrdersTableName}.id`,
          through: {
            from: `${ProductOrderTableName}.orderId`,
            to: `${ProductOrderTableName}.productId`
          },
          to: `${ProductsTableName}.id`
        }
      }
    }
  }
}
