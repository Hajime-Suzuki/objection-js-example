import { ProductsTableName } from '../../database/config'
import { Order } from './model'

class OrderRepository {
  findById(id: string | number) {
    return Order.query()
      .findById(id)
      .eager(ProductsTableName)
  }
  create(data: Partial<Order>) {
    return Order.query().insert(data)
  }
}

export const orderRepository = new OrderRepository()
