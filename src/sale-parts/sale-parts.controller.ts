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
import { SalePartsService } from './sale-parts.service';
import { CreateSalePartDto } from './dto/create-sale-part.dto';
import { UpdateSalePartDto } from './dto/update-sale-part.dto';

@Controller('sale-parts')
export class SalePartsController {
  constructor(private readonly salePartsService: SalePartsService) {}

  @Post()
  create(@Body() createSalePartDto: CreateSalePartDto) {
    return this.salePartsService.create(createSalePartDto);
  }

  @Post('create-many')
  createMany(@Body() createSalePartDto: CreateSalePartDto[]) {
    return this.salePartsService.createMany(createSalePartDto);
  }

  @Get()
  findAll() {
    return this.salePartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salePartsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSalePartDto: UpdateSalePartDto,
  ) {
    return this.salePartsService.update(+id, updateSalePartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salePartsService.remove(+id);
  }
}
