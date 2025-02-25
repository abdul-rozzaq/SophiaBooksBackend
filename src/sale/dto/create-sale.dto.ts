import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsNumber()
  @IsNotEmpty()
  admin_id: number;

  @IsEnum(['card', 'cash'])
  @IsNotEmpty()
  payment_method: 'card' | 'cash';

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  cashier_id: number;
}
