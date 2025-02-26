import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { Partiya } from 'src/partiya/partiya.model';
import { Shop } from 'src/shop/shop.model';
import { ProductCategory } from 'src/product-categories/product-category.model';
import { SaleItem } from 'src/sale-item/sale-item.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productModel.create({ ...createProductDto } as Product);
  }

  async createMany(createProductDto: CreateProductDto[]) {
    return await this.productModel.bulkCreate(createProductDto as unknown as Product[]);
  }

  findAll() {
    return this.productModel.findAll({
      include: [
        { model: Partiya },
        { model: Shop },
        { model: ProductCategory },
        { model: SaleItem },
      ],
    });
  }

  findOne(id: number) {
    return this.productModel.findByPk(id, {
      include: [
        { model: Partiya },
        { model: Shop },
        { model: ProductCategory },
        { model: SaleItem },
      ],
    });
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
