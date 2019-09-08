import * as Knex from 'knex'
import { OrdersTableName } from '../src/database/config'

export const seed = async (knex: Knex): Promise<any> => {
  await knex(OrdersTableName).del()
  await knex(OrdersTableName).insert([
    {
      id: 1,
      customer_id: 1,
      status: 'delivery_shipped',
      completed_at: null
    },
    {
      id: 2,
      customer_id: 1,
      status: 'completed',
      completed_at: '2019-09-08 12:12:12'
    }
  ])
}
