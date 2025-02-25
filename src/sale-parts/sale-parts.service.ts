import { Injectable } from '@nestjs/common';
import { CreateSalePartDto } from './dto/create-sale-part.dto';
import { UpdateSalePartDto } from './dto/update-sale-part.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SaleParts } from './sale-parts.model';
import { Partiya } from 'src/partiya/partiya.model';
import { SaleItem } from 'src/sale-item/sale-item.model';

@Injectable()
export class SalePartsService {
  constructor(
    @InjectModel(SaleParts) private salePartModel: typeof SaleParts,
  ) {}

  async create(createSalePartDto: CreateSalePartDto) {
    return await this.salePartModel.create({
      ...createSalePartDto,
    } as SaleParts);
  }

  async createMany(createSalePartDto: CreateSalePartDto[]) {
    return this.salePartModel.bulkCreate([...createSalePartDto] as SaleParts[]);
  }

  findAll() {
    return this.salePartModel.findAll({
      include: [{ model: Partiya }, { model: SaleItem }],
    });
  }

  findOne(id: number) {
    return this.salePartModel.findByPk(id, {
      include: [{ model: Partiya }, { model: SaleItem }],
    });
  }

  async update(id: number, updateSalePartDto: UpdateSalePartDto) {
    const updated = await this.salePartModel.update(updateSalePartDto, {
      where: { id },
    });
    if (updated) {
      return this.salePartModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.salePartModel.destroy({ where: { id } });
  }
}
