import { Module } from '@nestjs/common';
import { PartiyaService } from './partiya.service';
import { PartiyaController } from './partiya.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Partiya } from './partiya.model';

@Module({
  imports: [SequelizeModule.forFeature([Partiya])],
  controllers: [PartiyaController],
  providers: [PartiyaService],
})
export class PartiyaModule {}
