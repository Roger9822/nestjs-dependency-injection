import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class UsersService {
  constructor(private readonly loggerService: LoggerService) {}
    private userList: any[] = [];

  create(data: any) {
    const newUser = {
      id: this.userList.length + 1,
      ...data,
    };

    this.userList.push(newUser);
    this.loggerService.log('User Logger created');
    return newUser;
  }

  findAll() {
    return this.userList;
  }

  findOne(id: number) {
    return this.userList.find(user => user.id === id);
  }
}
