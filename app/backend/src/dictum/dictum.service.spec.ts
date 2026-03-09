import { Test, TestingModule } from '@nestjs/testing';
import { DictumService } from './dictum.service';

describe('DictumService', () => {
  let service: DictumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DictumService],
    }).compile();

    service = module.get<DictumService>(DictumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
