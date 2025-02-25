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
import { CashboxService } from './cashbox.service';
import { CreateCashboxDto } from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';

@Controller('cashbox')
export class CashboxController {
  constructor(private readonly cashboxService: CashboxService) {}

  @Post()
  create(@Body() createCashboxDto: CreateCashboxDto) {
    return this.cashboxService.create(createCashboxDto);
  }

  @Post('create-many')
  createMany(@Body() createCashboxDto: CreateCashboxDto[]) {
    return this.cashboxService.createMany(createCashboxDto);
  }

  @Get()
  findAll() {
    return this.cashboxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cashboxService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCashboxDto: UpdateCashboxDto) {
    return this.cashboxService.update(+id, updateCashboxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cashboxService.remove(+id);
  }
}
