import { ProductsTableName } from '../../database/config'
import { BaseModel } from '../../database/BaseModel'

export class Product extends BaseModel {
  id: number
  price: number
  stock: number
  static get tableName() {
    return ProductsTableName
  }
}
