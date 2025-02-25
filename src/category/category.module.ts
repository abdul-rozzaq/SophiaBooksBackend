import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category.model';
import { ProductCategory } from 'src/product-categories/product-category.model';

@Module({
  imports: [SequelizeModule.forFeature([Category]), ProductCategory],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
