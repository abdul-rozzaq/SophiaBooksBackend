import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/category/category.model';
import { Product } from 'src/product/product.model';

@Table({ tableName: 'product-category' })
export class ProductCategory extends Model<ProductCategory> {
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  category_id: number;

  @BelongsTo(() => Product)
  product: Product;

  @BelongsTo(() => Category)
  category: Category;
}
