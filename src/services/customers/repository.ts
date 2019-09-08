import { Customer } from './model'
import { OrdersTableName } from '../../database/config'

class CustomerRepository {
  findById(id: string | number) {
    return Customer.query()
      .findById(id)
      .eager(OrdersTableName)
  }
  create(data: Partial<Customer>) {
    return Customer.query().insert(data)
  }
}

export const customerRepository = new CustomerRepository()
