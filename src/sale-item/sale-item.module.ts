import { Module } from '@nestjs/common';
import { SaleItemService } from './sale-item.service';
import { SaleItemController } from './sale-item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SaleItem } from './sale-item.model';
import { Sale } from 'src/sale/sale.model';
import { Product } from 'src/product/product.model';
import { SaleParts } from 'src/sale-parts/sale-parts.model';

@Module({
  imports: [SequelizeModule.forFeature([SaleItem]), Sale, Product, SaleParts],
  controllers: [SaleItemController],
  providers: [SaleItemService],
})
export class SaleItemModule {}
