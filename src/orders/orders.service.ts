import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OrdersService {
  private orders: any[] = [];
    constructor(
        private readonly usersService: UsersService,
        private readonly productsService: ProductsService,
        private readonly loggerService: LoggerService
    ) { }

  createOrder(userId: number, productId: number) {
    const user = this.usersService.findOne(userId);
    const product = this.productsService.findOne(productId);

    const order = {
      id: this.orders.length + 1,
      user,
      product,
    };

    this.orders.push(order);

    this.loggerService.log('Order created');

    return {
      message: 'Order created successfully',
      order,
    };
  }

  findAll() {
    return this.orders;
  }
}
