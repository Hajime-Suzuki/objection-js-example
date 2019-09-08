import * as Knex from 'knex'
import { CustomersTableName } from '../src/database/config'

export const up = async (knex: Knex): Promise<any> => {
  if (await knex.schema.hasTable(CustomersTableName)) return
  await knex.schema.createTable(CustomersTableName, table => {
    table.increments('id').primary()
    table.string('first_name', 50).notNullable()
    table.string('last_name', 50).notNullable()
    table.string('address', 50).notNullable()
    table
      .string('email', 50)
      .notNullable()
      .unique()
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now())
    table.timestamp('updated_at').nullable()
  })
}

export const down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable(CustomersTableName)
}
