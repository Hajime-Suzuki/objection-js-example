import { GatewayEvent } from '../../libs/types'
import { orderRepository } from './repository'

export class OrderService {
  static async getOrderById(event: GatewayEvent<null, 'id'>) {
    const order = await orderRepository.findById(event.pathParameters.id)
    return { order }
  }
}
