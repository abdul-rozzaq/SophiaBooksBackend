import { Module } from '@nestjs/common';
import { SaleItemService } from './sale-item.service';
import { SaleItemController } from './sale-item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SaleItem } from './sale-item.model';

@Module({
  imports: [SequelizeModule.forFeature([SaleItem])],
  controllers: [SaleItemController],
  providers: [SaleItemService],
})
export class SaleItemModule {}
