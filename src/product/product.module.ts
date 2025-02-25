import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';
import { Partiya } from 'src/partiya/partiya.model';
import { Shop } from 'src/shop/shop.model';
import { ProductCategory } from 'src/product-categories/product-category.model';
import { SaleItem } from 'src/sale-item/sale-item.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Product]),
    Partiya,
    Shop,
    ProductCategory,
    SaleItem,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
