import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OrdersService {

    constructor(
        private readonly usersService: UsersService,
        private readonly productsService: ProductsService,
        private readonly loggerService: LoggerService
    ) { }

    createOrder(userId: number, productId: number) {
        const user = this.usersService.findOne(userId);
        const product = this.productsService.findOne(productId);
        this.loggerService.log('Order Logger created');
        return {
            message: 'Order created',
            user,
            product,
        };
    }
}
