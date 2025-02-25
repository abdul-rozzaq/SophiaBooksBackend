import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'cashbox' })
export class Cashbox extends Model<Cashbox> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  shop_id: number;
}
