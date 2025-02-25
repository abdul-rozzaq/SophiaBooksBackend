import { Module } from '@nestjs/common';
import { CashboxService } from './cashbox.service';
import { CashboxController } from './cashbox.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cashbox } from './cashbox.model';
import { Shop } from 'src/shop/shop.model';
import { Sale } from 'src/sale/sale.model';

@Module({
  imports: [SequelizeModule.forFeature([Cashbox, Shop]), Sale],
  controllers: [CashboxController],
  providers: [CashboxService],
})
export class CashboxModule {}
