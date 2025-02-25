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
import { SaleItemService } from './sale-item.service';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';

@Controller('sale-item')
export class SaleItemController {
  constructor(private readonly saleItemService: SaleItemService) {}

  @Post()
  create(@Body() createSaleItemDto: CreateSaleItemDto) {
    return this.saleItemService.create(createSaleItemDto);
  }

  @Post('create-many')
  createMany(@Body() createSaleItemDto: CreateSaleItemDto[]) {
    return this.saleItemService.createMany(createSaleItemDto);
  }

  @Get()
  findAll() {
    return this.saleItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleItemService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleItemDto: UpdateSaleItemDto,
  ) {
    return this.saleItemService.update(+id, updateSaleItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleItemService.remove(+id);
  }
}
