import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'sale' })
export class Sale extends Model<Sale> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  admin_id: number;

  @Column({
    type: DataType.ENUM,
    allowNull: false,
  })
  payment_method: 'cash' | 'card';

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cashier_id: number;
}
