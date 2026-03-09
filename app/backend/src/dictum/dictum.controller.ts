import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DictumService } from './dictum.service';
import { CreateDictumDto } from './dto/create-dictum.dto';
import { UpdateDictumDto } from './dto/update-dictum.dto';

@Controller('dictum')
export class DictumController {
  constructor(private readonly dictumService: DictumService) {}

  @Post()
  create(@Body() createDictumDto: CreateDictumDto) {
    return this.dictumService.create(createDictumDto);
  }

  @Get()
  findAll() {
    return this.dictumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dictumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDictumDto: UpdateDictumDto) {
    return this.dictumService.update(+id, updateDictumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dictumService.remove(+id);
  }
}
