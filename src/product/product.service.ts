import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productModel.create({ ...createProductDto } as Product);
  }

  async createMany(createProductDto: CreateProductDto[]) {
    return await this.productModel.bulkCreate({
      ...createProductDto,
    } as Product[]);
  }

  findAll() {
    return this.productModel.findAll();
  }

  findOne(id: number) {
    return this.productModel.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updated = await this.productModel.update(updateProductDto, {
      where: { id },
    });
    if (updated) {
      return this.productModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.productModel.destroy({ where: { id } });
  }
}
