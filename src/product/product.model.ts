import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Partiya } from 'src/partiya/partiya.model';
import { ProductCategory } from 'src/product-categories/product-category.model';
import { SaleItem } from 'src/sale-item/sale-item.model';
import { Shop } from 'src/shop/shop.model';

@Table({ tableName: 'product' })
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  retail_price: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  barcode: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '/uploads/default_product.jpg',
  })
  product_image: string;

  @ForeignKey(() => Shop)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  shop_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  low_quantity_alert: number;

  @HasMany(() => Partiya)
  partiya: Partiya[];

  @BelongsTo(() => Shop)
  shop: Shop;

  @HasMany(() => ProductCategory)
  productCategories: ProductCategory[];

  @HasMany(() => SaleItem)
  saleItems: SaleItem[];
}
