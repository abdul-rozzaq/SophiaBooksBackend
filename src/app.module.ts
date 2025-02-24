import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { getDatabaseConfig } from './database.config';
import { UserModule } from './user/user.module';
import { SharingModule } from './common/sharing.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    SequelizeModule.forRoot(getDatabaseConfig()),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    UserModule,
    SharingModule,
  ],
})
export class AppModule {}
