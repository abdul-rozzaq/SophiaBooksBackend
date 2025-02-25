import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsNumber()
  @IsNotEmpty()
  admin_id: number;

  @IsString()
  @IsNotEmpty()
  payment_method: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  cashier_id: number;
}
