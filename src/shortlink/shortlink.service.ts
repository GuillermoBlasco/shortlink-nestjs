import { Injectable } from '@nestjs/common';
import { CreateShortlinkDto } from './dto/create-shortlink.dto';
import { UpdateShortlinkDto } from './dto/update-shortlink.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shortlink } from './entities/shortlink.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShortlinkService {
  constructor(@InjectRepository(Shortlink) private readonly  shortlinkRepo: Repository<Shortlink>) {
  }

  redirect(urlSlug: string) {

  }

  async create(createShortlinkDto: CreateShortlinkDto): Promise<Shortlink> {
    const newShortlink = new Shortlink();
    newShortlink.originalLink = createShortlinkDto.originalLink;
    newShortlink.shortLink = createShortlinkDto.shortLink;
    return await this.shortlinkRepo.save(newShortlink);

  }

  findAll() {
    return `This action returns all shortlink`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortlink`;
  }

  update(id: number, updateShortlinkDto: UpdateShortlinkDto) {
    return `This action updates a #${id} shortlink`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortlink`;
  }
}
