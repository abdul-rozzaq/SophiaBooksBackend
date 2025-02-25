import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'partiya' })
export class Partiya extends Model<Partiya> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  count: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  real_price: number;
}
