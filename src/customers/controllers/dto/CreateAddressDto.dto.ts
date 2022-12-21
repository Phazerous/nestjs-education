import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  apartament: number;

  @IsNotEmpty()
  zipCode: number;
}
