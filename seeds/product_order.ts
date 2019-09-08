import { ProductsTable, ProductOrderTableName } from '../src/database/config'
import Knex = require('knex')

export const seed = async (knex: Knex): Promise<any> => {
  await knex(ProductOrderTableName).del()
  await knex(ProductOrderTableName).insert([
    {
      order_id: 1,
      product_id: 1,
      quantity: 1
    },
    {
      order_id: 1,
      product_id: 2,
      quantity: 1
    },
    {
      order_id: 1,
      product_id: 3,
      quantity: 3
    },
    {
      order_id: 2,
      product_id: 1,
      quantity: 1
    },
    {
      order_id: 2,
      product_id: 2,
      quantity: 2
    },
    {
      order_id: 2,
      product_id: 3,
      quantity: 5
    },
    {
      order_id: 2,
      product_id: 4,
      quantity: 8
    }
  ])
}
