import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePartiyaDto {
  @IsNumber()
  @IsNotEmpty()
  product_id: number;

  @IsNumber()
  @IsNotEmpty()
  count: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  real_price: number;
}
