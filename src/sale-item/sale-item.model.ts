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
import { Sale } from 'src/sale/sale.model';

@Table({ tableName: 'sale-item' })
export class SaleItem extends Model<SaleItem> {
  @ForeignKey(() => Sale)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sale_id: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

  @BelongsTo(() => Sale)
  sale: Sale;

  @BelongsTo(() => Product)
  product: Product;

  @HasMany(() => SaleParts)
  saleParts: SaleParts[];
}
