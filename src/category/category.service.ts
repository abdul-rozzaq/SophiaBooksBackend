import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ProductCategory } from 'src/product-categories/product-category.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryModel.create({
      ...createCategoryDto,
    } as Category);
  }

  async createMany(createCategoryDto: CreateCategoryDto[]) {
    return this.categoryModel.bulkCreate(createCategoryDto as unknown as Category[]);
  }

  findAll() {
    return this.categoryModel.findAll({ include: { model: ProductCategory } });
  }

  findOne(id: number) {
    return this.categoryModel.findByPk(id, {
      include: { model: ProductCategory },
    });
  }

  async update(id: number, updateSaleDto: UpdateCategoryDto) {
    const updated = await this.categoryModel.update(updateSaleDto, {
      where: { id },
    });
    if (updated) {
      return this.categoryModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.categoryModel.destroy({ where: { id } });
  }
}
