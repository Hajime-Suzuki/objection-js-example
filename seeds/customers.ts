import * as Knex from 'knex'
import { CustomersTableName } from '../src/database/config'

export const seed = async (knex: Knex): Promise<any> => {
  await knex(CustomersTableName).del()
  await knex(CustomersTableName).insert([
    {
      id: 1,
      first_name: 'first name',
      last_name: 'last name',
      email: '1234@test.com',
      address: 'city1'
    },
    {
      id: 2,
      first_name: 'name2',
      last_name: 'last name2',
      email: 'customer2@test.com',
      address: 'city2'
    }
  ])
}
