import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Req, UsePipes } from '@nestjs/common/decorators';
import { request } from 'http';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { CreateCustomerDto } from '../dto/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get('')
  getAllCustomers() {
    const customers = this.customerService.getAllCustomers();
    return customers;
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const user = this.customerService.searchCustomerById(id);

    if (user) return user;

    throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    if (!this.customerService.createCustomer(createCustomerDto)) return 'Error';
    return 'Created';
  }
}
