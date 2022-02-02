import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortlinkService } from './shortlink.service';
import { CreateShortlinkDto } from './dto/create-shortlink.dto';
import { UpdateShortlinkDto } from './dto/update-shortlink.dto';

@Controller('shortlink')
export class ShortlinkController {
  constructor(private readonly shortlinkService: ShortlinkService) {}

  @Post()
  create(@Body() createShortlinkDto: CreateShortlinkDto) {
    return this.shortlinkService.create(createShortlinkDto);
  }

  @Get()
  findAll() {
    return this.shortlinkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortlinkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortlinkDto: UpdateShortlinkDto) {
    return this.shortlinkService.update(+id, updateShortlinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortlinkService.remove(+id);
  }
}
