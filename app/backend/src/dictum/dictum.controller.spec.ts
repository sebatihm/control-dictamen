import { Test, TestingModule } from '@nestjs/testing';
import { DictumController } from './dictum.controller';
import { DictumService } from './dictum.service';

describe('DictumController', () => {
  let controller: DictumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DictumController],
      providers: [DictumService],
    }).compile();

    controller = module.get<DictumController>(DictumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
