import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ProductCategory } from 'src/product-categories/product-category.model';

@Table({ tableName: 'category' })
export class Category extends Model<Category> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => ProductCategory)
  productCategories: ProductCategory[];
}
