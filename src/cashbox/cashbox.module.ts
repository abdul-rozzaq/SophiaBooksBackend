import { Module } from '@nestjs/common';
import { CashboxService } from './cashbox.service';
import { CashboxController } from './cashbox.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cashbox } from './cashbox.model';

@Module({
  imports: [SequelizeModule.forFeature([Cashbox])],
  controllers: [CashboxController],
  providers: [CashboxService],
})
export class CashboxModule {}
