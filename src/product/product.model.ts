import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'product' })
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  retail_price: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  barcode: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  product_image: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  shop_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  low_quantity_alert: number;
}
