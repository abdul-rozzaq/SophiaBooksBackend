import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  retail_price: number;

  @IsString()
  @IsNotEmpty()
  barcode: string;

  product_image: string;

  @IsNumber()
  @IsNotEmpty()
  shop_id: number;

  @IsString()
  @IsNotEmpty()
  low_quantity_alert: number;
}
