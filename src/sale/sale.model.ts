import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'sale' })
export class Sale extends Model<Sale> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  admin_id: number;

  @Column({
    type: DataType.ENUM('cash', 'card'),
    allowNull: false,
  })
  payment_method: string;

  @Column({
    type: DataType.ENUM('completed', 'canceled'),
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cashier_id: number;
}
