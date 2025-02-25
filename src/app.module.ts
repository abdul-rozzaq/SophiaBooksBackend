import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { getDatabaseConfig } from './database.config';
import { ShopModule } from './shop/shop.module';
import { UserModule } from './user/user.module';
import { SharingModule } from './common/sharing.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SaleModule } from './sale/sale.module';
import { SaleItemModule } from './sale-item/sale-item.module';
import { SalePartsModule } from './sale-parts/sale-parts.module';
import { PartiyaModule } from './partiya/partiya.module';
import { ProductModule } from './product/product.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';

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
    SaleModule,
    SaleItemModule,
    SalePartsModule,
    PartiyaModule,
    ProductModule,
    ProductCategoriesModule,
  ],
})
export class AppModule {}
