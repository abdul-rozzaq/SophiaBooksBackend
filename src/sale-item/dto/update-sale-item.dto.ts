import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleItemDto } from './create-sale-item.dto';

export class UpdateSaleItemDto extends PartialType(CreateSaleItemDto) {}
