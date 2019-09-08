import { handleRequestAndResponse } from '../libs/response'
import { CustomerService } from './customer-service'

export const get = handleRequestAndResponse(CustomerService.getCustomer)
export const create = handleRequestAndResponse(CustomerService.createCustomer)
