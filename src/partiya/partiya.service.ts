import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/product/product.model';
import { SaleParts } from 'src/sale-parts/sale-parts.model';
import { CreatePartiyaDto } from './dto/create-partiya.dto';
import { UpdatePartiyaDto } from './dto/update-partiya.dto';
import { Partiya } from './partiya.model';

@Injectable()
export class PartiyaService {
  constructor(@InjectModel(Partiya) private partiyaModel: typeof Partiya) { }

  async create(createPartiyaDto: CreatePartiyaDto) {
    return await this.partiyaModel.create({ ...createPartiyaDto } as Partiya);
  }

  async createMany(createPartiyaDto: CreatePartiyaDto[]) {
    return this.partiyaModel.bulkCreate(createPartiyaDto as unknown as Partiya[]);
  }

  findAll() {
    return this.partiyaModel.findAll({
      include: [{ model: Product }, { model: SaleParts }],
    });
  }

  findOne(id: number) {
    return this.partiyaModel.findByPk(id, {
      include: [{ model: Product }, { model: SaleParts }],
    });
  }

  async update(id: number, updatePartiyaDto: UpdatePartiyaDto) {
    const updated = await this.partiyaModel.update(updatePartiyaDto, {
      where: { id },
    });
    if (updated) {
      return this.partiyaModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.partiyaModel.destroy({ where: { id } });
  }
}
