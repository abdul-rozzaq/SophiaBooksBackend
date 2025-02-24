import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { getDatabaseConfig } from './database.config';

@Module({
  imports: [
    SequelizeModule.forRoot(getDatabaseConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
