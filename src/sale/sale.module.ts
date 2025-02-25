import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sale } from './sale.model';

@Module({
  imports: [SequelizeModule.forFeature([Sale])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
