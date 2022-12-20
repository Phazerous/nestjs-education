import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findUser() {
    return {
      id: 1,
      nickname: 'Phazerous',
      firstName: 'Nikita',
      age: 18,
    };
  }
}
