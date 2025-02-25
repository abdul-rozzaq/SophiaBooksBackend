import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Shop } from 'src/shop/shop.model';
import { User } from 'src/user/user.model';

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Shop)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  shop_id: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Shop)
  shop: Shop;
}
