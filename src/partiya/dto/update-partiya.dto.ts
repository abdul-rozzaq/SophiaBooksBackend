import { PartialType } from '@nestjs/mapped-types';
import { CreatePartiyaDto } from './create-partiya.dto';

export class UpdatePartiyaDto extends PartialType(CreatePartiyaDto) {}
