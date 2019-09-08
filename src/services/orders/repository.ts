import { CustomersTableName } from '../../database/config'
import { Order } from './model'

class OrderRepository {
  async findById(id: string | number): Promise<Order | null> {
    const order = await Order.query()
      .findById(id)
      .eager(CustomersTableName)
    return order || null
  }
  create(data: Partial<Order>) {
    return Order.query().insert(data)
  }
}

export const orderRepository = new OrderRepository()
