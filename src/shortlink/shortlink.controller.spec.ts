import { Test, TestingModule } from '@nestjs/testing';
import { ShortlinkController } from './shortlink.controller';
import { ShortlinkService } from './shortlink.service';

describe('ShortlinkController', () => {
  let controller: ShortlinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortlinkController],
      providers: [ShortlinkService],
    }).compile();

    controller = module.get<ShortlinkController>(ShortlinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
