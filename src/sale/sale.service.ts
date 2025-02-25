import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Sale } from './sale.model';
import { User } from 'src/user/user.model';
import { Cashbox } from 'src/cashbox/cashbox.model';
import { SaleItem } from 'src/sale-item/sale-item.model';

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
    return this.saleModel.findAll({
      include: [{ model: User }, { model: Cashbox }, { model: SaleItem }],
    });
  }

  findOne(id: number) {
    return this.saleModel.findByPk(id, {
      include: [{ model: User }, { model: Cashbox }, { model: SaleItem }],
    });
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
