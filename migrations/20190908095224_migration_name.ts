import * as Knex from 'knex'
import { CustomerTableName } from '../src/database/config'

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(CustomerTableName, table => {
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

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(CustomerTableName)
}
