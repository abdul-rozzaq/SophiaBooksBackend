import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSalePartDto {
  @IsNumber()
  @IsNotEmpty()
  partiya_id: number;

  @IsNumber()
  @IsNotEmpty()
  saleItem_id: number;

  @IsNumber()
  @IsNotEmpty()
  count: number;
}
