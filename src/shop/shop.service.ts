import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './shop.model';

@Injectable()
export class ShopService {

  constructor(@InjectModel(Shop) private shopModel: typeof Shop) { }

  async create(createShopDto: CreateShopDto) {
    return await this.shopModel.create({ ...createShopDto });
  }

  async findAll() {
    return await this.shopModel.findAll();
  }

  async findOne(id: number) {
    return await this.shopModel.findByPk(id);
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    const shop = await this.findOne(id);

    await shop?.update(updateShopDto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const shop = await this.findOne(id);

    await shop?.destroy();
  }
}
