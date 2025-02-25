import { Module } from '@nestjs/common';
import { SalePartsService } from './sale-parts.service';
import { SalePartsController } from './sale-parts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SaleParts } from './sale-parts.model';
import { Partiya } from 'src/partiya/partiya.model';
import { SaleItem } from 'src/sale-item/sale-item.model';

@Module({
  imports: [SequelizeModule.forFeature([SaleParts]), Partiya, SaleItem],
  controllers: [SalePartsController],
  providers: [SalePartsService],
})
export class SalePartsModule {}
