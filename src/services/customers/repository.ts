import { OrdersTableName } from '../../database/config'
import { Customer } from './model'

class CustomerRepository {
  async findById(id: string | number): Promise<Customer | null> {
    const customer = await Customer.query()
      .findById(id)
      .eager(OrdersTableName)
    return customer || null
  }
  create(data: Partial<Customer>) {
    return Customer.query().insert(data)
  }
}

export const customerRepository = new CustomerRepository()
