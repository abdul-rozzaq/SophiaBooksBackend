import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategoriesController } from './product-categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategory } from './product-category.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductCategory])],
  controllers: [ProductCategoriesController],
  providers: [ProductCategoriesService],
})
export class ProductCategoriesModule {}
