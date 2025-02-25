import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'product-category' })
export class ProductCategory extends Model<ProductCategory> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  category_id: number;
}
