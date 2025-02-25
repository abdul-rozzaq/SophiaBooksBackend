import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Sale } from 'src/sale/sale.model';
import { Shop } from 'src/shop/shop.model';

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

  @ForeignKey(() => Shop)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  shop_id: number;

  @BelongsTo(() => Shop)
  shop: Shop;

  @HasMany(() => Sale)
  sales: Sale[];
}
