import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShopController } from './shop.controller';
import { Shop } from './shop.model';
import { ShopService } from './shop.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Shop])
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule { }
