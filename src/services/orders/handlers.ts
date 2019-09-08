import { handleRequestAndResponse } from '../../libs/response'

import { OrderService } from './service'

export const getById = handleRequestAndResponse(OrderService.getOrderById)
