import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/controllers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      nickname: 'Phazerous',
      firstName: 'Nikita',
    },
    {
      id: 2,
      nickname: 'FnisBUF',
      firstName: 'Vlad',
    },
    {
      id: 3,
      nickname: 'MrTylSet',
      firstName: 'Danil',
    },
  ];

  searchCustomerById(id: number) {
    return this.customers.find((cust) => cust.id === id);
  }

  getAllCustomers() {
    return this.customers;
  }

  createCustomer(customer: Customer): boolean {
    this.customers.push(customer);
    return true;
  }
}
