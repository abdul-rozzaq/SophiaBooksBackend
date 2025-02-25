import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'sale-item' })
export class SaleItem extends Model<SaleItem> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sale_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;
}

