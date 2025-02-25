import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Admin } from 'src/admin/admin.model';
import { Cashbox } from 'src/cashbox/cashbox.model';
import { Product } from 'src/product/product.model';
import { User } from 'src/user/user.model';

@Table({
  tableName: 'shop',
  timestamps: true,
})
export class Shop extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  owner_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  balance: number;

  @HasMany(() => Cashbox)
  cashboxes: Cashbox[];

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Admin)
  admins: Admin[];

  @HasMany(() => Product)
  products: Product[];
}
