import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PartiyaService } from './partiya.service';
import { CreatePartiyaDto } from './dto/create-partiya.dto';
import { UpdatePartiyaDto } from './dto/update-partiya.dto';

@Controller('partiya')
export class PartiyaController {
  constructor(private readonly partiyaService: PartiyaService) {}

  @Post()
  create(@Body() createPartiyaDto: CreatePartiyaDto) {
    return this.partiyaService.create(createPartiyaDto);
  }

  @Post('create-many')
  createMany(@Body() createPartiyaDto: CreatePartiyaDto[]) {
    return this.partiyaService.createMany(createPartiyaDto);
  }

  @Get()
  findAll() {
    return this.partiyaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partiyaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePartiyaDto: UpdatePartiyaDto) {
    return this.partiyaService.update(+id, updatePartiyaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partiyaService.remove(+id);
  }
}
