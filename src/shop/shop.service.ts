import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './shop.model';
import { Cashbox } from 'src/cashbox/cashbox.model';
import { User } from 'src/user/user.model';
import { Admin } from 'src/admin/admin.model';
import { Product } from 'src/product/product.model';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop) private shopModel: typeof Shop) {}

  async create(createShopDto: CreateShopDto) {
    return await this.shopModel.create({ ...createShopDto });
  }

  async createMany(createShopDto: CreateShopDto[]) {
    return await this.shopModel.bulkCreate(createShopDto as Partial<Shop>[]);
  }

  async findAll() {
    return await this.shopModel.findAll({
      include: [
        { model: Cashbox },
        { model: User },
        { model: Admin },
        { model: Product },
      ],
    });
  }

  async findOne(id: number) {
    return await this.shopModel.findByPk(id, {
      include: [
        { model: Cashbox },
        { model: User },
        { model: Admin },
        { model: Product },
      ],
    });
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
