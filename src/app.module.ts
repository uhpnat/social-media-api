import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { DataSource } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { AccountsEntity } from './entities/accounts.entity';
import { ProductEntity } from './entities/product.entity';

@Module({
  // imports: [ProductsModule, TypeOrmModule.forRoot(dataSourceOptions)],
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 8080,
      username: 'root',
      // password: 'root',
      database: 'nestjs-api',
      autoLoadEntities: true,
      // entities: [AccountsEntity, CategoryEntity, ProductEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
