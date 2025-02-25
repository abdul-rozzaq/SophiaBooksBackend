import { Module } from '@nestjs/common';
import { SalePartsService } from './sale-parts.service';
import { SalePartsController } from './sale-parts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SaleParts } from './sale-parts.model';

@Module({
  imports: [SequelizeModule.forFeature([SaleParts])],
  controllers: [SalePartsController],
  providers: [SalePartsService],
})
export class SalePartsModule {}
