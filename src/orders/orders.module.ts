import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [UsersModule, ProductsModule, LoggerModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
