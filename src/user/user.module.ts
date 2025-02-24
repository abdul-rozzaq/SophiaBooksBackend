import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { SharingModule } from 'src/common/sharing.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), SharingModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
