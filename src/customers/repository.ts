import { Customer } from './customer'

class CustomerRepository {
  findById(id: string | number) {
    return Customer.query().findById(id)
  }
  create(data: Partial<Customer>) {
    return Customer.query().insert(data)
  }
}

export const customerRepository = new CustomerRepository()
