import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Sale } from './sale.model';

@Injectable()
export class SaleService {
  constructor(@InjectModel(Sale) private saleModel: typeof Sale) {}

  async create(createSaleDto: CreateSaleDto) {
    const sale = await this.saleModel.create({ ...createSaleDto } as Sale);
    return sale;
  }

  async createMany(createSaleDto: CreateSaleDto[]) {
    return this.saleModel.bulkCreate({ ...createSaleDto } as Sale[]);
  }

  findAll() {
    return this.saleModel.findAll();
  }

  findOne(id: number) {
    return this.saleModel.findByPk(id);
  }

  async update(id: number, updateSaleDto: UpdateSaleDto) {
    const updated = await this.saleModel.update(updateSaleDto, {
      where: { id },
    });
    if (updated) {
      return this.saleModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.saleModel.destroy({ where: { id } });
  }
}
