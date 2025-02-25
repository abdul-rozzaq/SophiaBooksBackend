import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sale } from './sale.model';
import { User } from 'src/user/user.model';
import { Cashbox } from 'src/cashbox/cashbox.model';
import { SaleItem } from 'src/sale-item/sale-item.model';

@Module({
  imports: [SequelizeModule.forFeature([Sale]), User, Cashbox, SaleItem],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
