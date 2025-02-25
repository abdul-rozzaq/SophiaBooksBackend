import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { ConfigService } from 'src/common/config/config.service';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/loginDto';
import * as bcrypt from 'bcrypt';
import { Shop } from 'src/shop/shop.model';
import { Admin } from 'src/admin/admin.model';
import { Sale } from 'src/sale/sale.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt(10);
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

    const user = await this.userModel.create({ ...createUserDto } as User);
    return user;
  }

  createMany(createUserDto: CreateUserDto[]) {
    return this.userModel.bulkCreate({ ...createUserDto } as User[]);
  }

  async login(loginDto: LoginDto) {
    const { phone, password } = loginDto;
    const user = await this.userModel.findOne({ where: { phone } });
    console.log(user)
    if (user == null || user.password != password)
      throw new NotFoundException({ message: 'User not found', status: 404 });

    const accessToken = this.generateAccessToken({ id: user.id });

    return { accessToken, user, status: 200 };
  }

  async findAll() {
    return this.userModel.findAll({
      include: [{ model: Shop }, { model: Admin }, {model: Sale}],
    });
  }

  async getMe(userId: number) {
    const user = await this.userModel.findOne({
      where: { id: userId },
      include: [{ model: Shop }, { model: Admin }, {model: Sale}],
    });
    return user;
  }

  findOne(id: number) {
    return this.userModel.findByPk(id, {
      include: [{ model: Shop }, { model: Admin }, {model: Sale}],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updated = await this.userModel.update(updateUserDto, {
      where: { id },
    });
    if (updated) {
      return this.userModel.findByPk(id);
    }
    return null;
  }

  async remove(id: number) {
    const deleted = await this.userModel.destroy({ where: { id } });
    return deleted === 1;
  }

  private generateAccessToken(data) {
    return jwt.sign({ data }, this.configService.get('JWT_ACCESS_SECRET'), {
      expiresIn: '3h',
    });
  }
}
