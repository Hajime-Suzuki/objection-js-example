import * as Knex from 'knex'
import { CustomersTableName, OrdersTableName } from '../src/database/config'

export const up = async (knex: Knex): Promise<any> => {
  if (await knex.schema.hasTable(OrdersTableName)) return
  await knex.schema.createTable(OrdersTableName, table => {
    table.increments('id').primary()
    table.integer('customer_id', 50).notNullable()
    table.string('status', 50).defaultTo('payment_pending')
    table.timestamp('completed_at').nullable()
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now())
    table.timestamp('updated_at').nullable()
    table
      .foreign('customer_id')
      .references(`${CustomersTableName}.id`)
      .onDelete('cascade')
  })
}

export const down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable(OrdersTableName)
}
