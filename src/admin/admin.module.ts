import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin.model';
import { User } from 'src/user/user.model';
import { Shop } from 'src/shop/shop.model';

@Module({
  imports: [SequelizeModule.forFeature([Admin]), User, Shop],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
