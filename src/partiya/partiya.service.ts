import { Injectable } from '@nestjs/common';
import { CreatePartiyaDto } from './dto/create-partiya.dto';
import { UpdatePartiyaDto } from './dto/update-partiya.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Partiya } from './partiya.model';

@Injectable()
export class PartiyaService {
  constructor(@InjectModel(Partiya) private partiyaModel: typeof Partiya) {}

  async create(createPartiyaDto: CreatePartiyaDto) {
    return await this.partiyaModel.create({ ...createPartiyaDto } as Partiya);
  }

  async createMany(createPartiyaDto: CreatePartiyaDto[]) {
    return this.partiyaModel.bulkCreate({ ...createPartiyaDto } as Partiya[]);
  }

  findAll() {
    return this.partiyaModel.findAll();
  }

  findOne(id: number) {
    return this.partiyaModel.findByPk(id);
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
