import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cashbox } from 'src/cashbox/cashbox.model';
import { SaleItem } from 'src/sale-item/sale-item.model';
import { User } from 'src/user/user.model';

@Table({ tableName: 'sale' })
export class Sale extends Model<Sale> {
  @ForeignKey(() => User)
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

  @ForeignKey(() => Cashbox)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cashbox_id: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Cashbox)
  cashbox: Cashbox;

  @HasMany(() => SaleItem)
  saleItems: SaleItem[];
}
