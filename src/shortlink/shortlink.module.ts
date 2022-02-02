import { Module } from '@nestjs/common';
import { ShortlinkService } from './shortlink.service';
import { ShortlinkController } from './shortlink.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shortlink } from './entities/shortlink.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Shortlink
    ])
  ],
  controllers: [ShortlinkController],
  providers: [ShortlinkService]
})
export class ShortlinkModule {}
