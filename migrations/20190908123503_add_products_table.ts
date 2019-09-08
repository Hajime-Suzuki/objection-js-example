import * as Knex from 'knex'
import { ProductsTableName } from '../src/database/config'

export const up = async (knex: Knex): Promise<any> => {
  if (await knex.schema.hasTable(ProductsTableName)) return
  await knex.schema.createTable(ProductsTableName, table => {
    table.increments('id').primary()
    table.decimal('price').notNullable()
    table.integer('stock').defaultTo(20)
    table.text('description').notNullable()
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now())
    table.timestamp('updated_at').nullable()
  })
}

export const down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable(ProductsTableName)
}
