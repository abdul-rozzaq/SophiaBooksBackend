import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductCategoryDto {
  @IsNumber()
  @IsNotEmpty()
  product_id: number;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;
}
