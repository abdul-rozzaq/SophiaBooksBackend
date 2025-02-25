import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductCategory } from './product-category.model';
import { Product } from 'src/product/product.model';
import { Category } from 'src/category/category.model';

@Injectable()
export class ProductCategoriesService {
  constructor(
    @InjectModel(ProductCategory)
    private productCategoryModel: typeof ProductCategory,
  ) {}

  async create(createProductCategoryDto: CreateProductCategoryDto) {
    return this.create({
      ...createProductCategoryDto,
    } as ProductCategory);
  }

  async createMany(createProductCategoryDto: CreateProductCategoryDto[]) {
    return this.productCategoryModel.bulkCreate({
      ...createProductCategoryDto,
    } as ProductCategory[]);
  }

  findAll() {
    return this.productCategoryModel.findAll({
      include: [{ model: Product }, { model: Category }],
    });
  }

  findOne(id: number) {
    return this.productCategoryModel.findByPk(id, {
      include: [{ model: Product }, { model: Category }],
    });
  }

  async update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    const updated = await this.productCategoryModel.update(
      updateProductCategoryDto,
      { where: { id } },
    );
    if (updated) {
      return this.productCategoryModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.productCategoryModel.destroy({ where: { id } });
  }
}
