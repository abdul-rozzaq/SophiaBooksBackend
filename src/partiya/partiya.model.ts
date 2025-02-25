import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/product/product.model';
import { SaleParts } from 'src/sale-parts/sale-parts.model';

@Table({ tableName: 'partiya' })
export class Partiya extends Model<Partiya> {
  @ForeignKey(() => Product)
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

  @BelongsTo(() => Product)
  product: Product;

  @HasMany(() => SaleParts)
  saleParts: SaleParts[]
}
