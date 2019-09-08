import { GatewayEvent } from '../libs/types'
import { Customer } from './customer'
import { customerRepository } from './repository'

type CreateCustomerEventBody = Pick<
  Customer,
  'firstName' | 'lastName' | 'address' | 'email'
>

export class CustomerService {
  static async getCustomer(event: GatewayEvent<null, 'id'>) {
    const user = await customerRepository.findById(event.pathParameters.id)
    return { user }
  }
  static async createCustomer(event: GatewayEvent<CreateCustomerEventBody>) {
    const newUser = await customerRepository.create(event.body)
    return newUser
  }
}
