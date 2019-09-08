import * as Knex from 'knex'
import { ProductOrderTableName } from '../src/database/config'

export const up = async (knex: Knex): Promise<any> => {
  if (await knex.schema.hasTable(ProductOrderTableName)) return
  await knex.schema.createTable(ProductOrderTableName, table => {
    table.integer('order_id')
    table.integer('product_id')
    table.integer('quantity')
  })
}

export const down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable(ProductOrderTableName)
}
