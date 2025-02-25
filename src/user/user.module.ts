import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { SharingModule } from 'src/common/sharing.module';
import { Shop } from 'src/shop/shop.model';
import { Admin } from 'src/admin/admin.model';
import { Sale } from 'src/sale/sale.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    SharingModule,
    Shop,
    Admin,
    Sale,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
