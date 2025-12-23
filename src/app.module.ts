import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { LoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [ProductsModule, UsersModule, OrdersModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
