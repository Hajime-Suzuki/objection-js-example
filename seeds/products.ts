import { ProductsTableName } from '../src/database/config'
import Knex = require('knex')

export const seed = async (knex: Knex): Promise<any> => {
  await knex(ProductsTableName).del()
  await knex(ProductsTableName).insert([
    {
      id: 1,
      price: 10.0,
      stock: 10,
      description: 'product 1'
    },
    {
      id: 2,
      price: 22.0,
      stock: 20,
      description: 'product 2'
    },
    {
      id: 3,
      price: 33.0,
      stock: 30,
      description: 'product 3'
    },
    {
      id: 4,
      price: 44.44,
      stock: 40,
      description: 'product 3'
    }
  ])
}
