import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategoriesController } from './product-categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategory } from './product-category.model';
import { Product } from 'src/product/product.model';
import { Category } from 'src/category/category.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductCategory]), Product, Category],
  controllers: [ProductCategoriesController],
  providers: [ProductCategoriesService],
})
export class ProductCategoriesModule {}
