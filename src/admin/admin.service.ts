import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { User } from 'src/user/user.model';
import { Shop } from 'src/shop/shop.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}

  async create(createAdminDto: CreateAdminDto) {
    return await this.adminModel.create({ ...createAdminDto } as Admin);
  }

  async createMany(createAdminDto: CreateAdminDto[]) {
    return await this.adminModel.bulkCreate(createAdminDto as Admin[]);
  }

  async findAll() {
    return await this.adminModel.findAll({
      include: [{ model: User }, { model: Shop }],
    });
  }

  async findOne(id: number) {
    return await this.adminModel.findByPk(id, {
      include: [{ model: User }, { model: Shop }],
    });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const updated = await this.adminModel.update(updateAdminDto, {
      where: { id },
    });

    if (updated[0]) {
      return await this.adminModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    return await this.adminModel.destroy({ where: { id } });
  }
}
