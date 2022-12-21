import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested, IsNumber } from 'class-validator';
import { CreateAddressDto } from './CreateAddressDto.dto';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  firstName: string;

  // @IsNotEmpty()
  // @ValidateNested()
  // @Type(() => CreateAddressDto)
  // address: CreateAddressDto;
}
