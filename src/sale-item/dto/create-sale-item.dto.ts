import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSaleItemDto {
  @IsNumber()
  @IsNotEmpty()
  sale_id: number;

  @IsNumber()
  @IsNotEmpty()
  product_id: number;
}
