import { PartialType } from '@nestjs/mapped-types';
import { CreateSalePartDto } from './create-sale-part.dto';

export class UpdateSalePartDto extends PartialType(CreateSalePartDto) {}
