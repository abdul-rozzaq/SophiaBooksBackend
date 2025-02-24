import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { getDatabaseConfig } from './database.config';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    SequelizeModule.forRoot(getDatabaseConfig()),
    ShopModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
