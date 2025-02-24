import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { getDatabaseConfig } from './database.config';
import { ShopModule } from './shop/shop.module';
import { UserModule } from './user/user.module';
import { SharingModule } from './common/sharing.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    SequelizeModule.forRoot(getDatabaseConfig()),
    ShopModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    UserModule,
    SharingModule,
  ],
})
export class AppModule {}
