import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Admin } from 'src/admin/admin.model';
import { Sale } from 'src/sale/sale.model';
import { Shop } from 'src/shop/shop.model';

@Table({ tableName: 'user' })
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  second_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '/uploads/default_image.png',
  })
  profile_image: string;

  @HasMany(() => Shop)
  shops: Shop[];

  @HasMany(() => Admin)
  admins: Admin[];

  @HasMany(() => Sale)
  sales: Sale[];
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'user',
  })
  role: string;
}
