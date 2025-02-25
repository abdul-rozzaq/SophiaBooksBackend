import { Module } from '@nestjs/common';
import { PartiyaService } from './partiya.service';
import { PartiyaController } from './partiya.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Partiya } from './partiya.model';
import { Product } from 'src/product/product.model';
import { SaleParts } from 'src/sale-parts/sale-parts.model';

@Module({
  imports: [SequelizeModule.forFeature([Partiya]), Product, SaleParts],
  controllers: [PartiyaController],
  providers: [PartiyaService],
})
export class PartiyaModule {}
