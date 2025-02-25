import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShopController } from './shop.controller';
import { Shop } from './shop.model';
import { ShopService } from './shop.service';
import { Cashbox } from 'src/cashbox/cashbox.model';
import { User } from 'src/user/user.model';
import { Admin } from 'src/admin/admin.model';
import { Product } from 'src/product/product.model';

@Module({
  imports: [SequelizeModule.forFeature([Shop, Cashbox, User, Admin, Product])],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
