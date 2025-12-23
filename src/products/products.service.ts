import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class ProductsService {

constructor(private readonly loggerService: LoggerService) {}

    private productList :any = [];

  create(data: any) {
    const newItem = {
      id: this.productList.length + 1,
      ...data
    }
    this.productList.push(newItem);
    this.loggerService.log('Product logger created');
    return newItem;
  }

  findAll() {
    return this.productList;
  }

  findOne(id: number) {
    return this.productList.find(item => item.id == id);
  }
}
