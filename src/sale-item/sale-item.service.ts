import { Injectable } from '@nestjs/common';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SaleItem } from './sale-item.model';
import { Sale } from 'src/sale/sale.model';
import { Product } from 'src/product/product.model';
import { SaleParts } from 'src/sale-parts/sale-parts.model';

@Injectable()
export class SaleItemService {
  constructor(@InjectModel(SaleItem) private saleItemModel: typeof SaleItem) {}

  async create(createSaleItemDto: CreateSaleItemDto) {
    return await this.saleItemModel.create({
      ...createSaleItemDto,
    } as SaleItem);
  }

  async createMany(createSaleDto: CreateSaleItemDto[]) {
    return this.saleItemModel.bulkCreate({ ...createSaleDto } as SaleItem[]);
  }

  findAll() {
    return this.saleItemModel.findAll({
      include: [{ model: Sale }, { model: Product }, { model: SaleParts }],
    });
  }

  findOne(id: number) {
    return this.saleItemModel.findByPk(id, {
      include: [{ model: Sale }, { model: Product }, { model: SaleParts }],
    });
  }

  async update(id: number, updateSaleItemDto: UpdateSaleItemDto) {
    const updated = await this.saleItemModel.update(updateSaleItemDto, {
      where: { id },
    });

    if (updated) {
      return this.saleItemModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.saleItemModel.destroy({ where: { id } });
  }
}
