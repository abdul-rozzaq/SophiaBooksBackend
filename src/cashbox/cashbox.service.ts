import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cashbox } from './cashbox.model';
import { CreateCashboxDto } from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';
import { Shop } from 'src/shop/shop.model';
import { Sale } from 'src/sale/sale.model';

@Injectable()
export class CashboxService {
  constructor(@InjectModel(Cashbox) private cashboxModel: typeof Cashbox) {}

  async create(createCashboxDto: CreateCashboxDto) {
    return await this.cashboxModel.create({ ...createCashboxDto } as Cashbox);
  }

  async createMany(createCashboxDto: CreateCashboxDto[]) {
    return await this.cashboxModel.bulkCreate(createCashboxDto as Cashbox[]);
  }

  async findAll() {
    return await this.cashboxModel.findAll({
      include: [{ model: Shop }, { model: Sale }],
    });
  }

  async findOne(id: number) {
    return await this.cashboxModel.findByPk(id, {
      include: [{ model: Shop }, { model: Sale }],
    });
  }

  async update(id: number, updateCashboxDto: UpdateCashboxDto) {
    const updated = await this.cashboxModel.update(updateCashboxDto, {
      where: { id },
    });

    if (updated[0]) {
      return await this.cashboxModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.cashboxModel.destroy({ where: { id } });
  }
}
