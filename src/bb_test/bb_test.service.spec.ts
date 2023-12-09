import { Test, TestingModule } from '@nestjs/testing';
import { BbTestService } from './bb_test.service';

describe('BbTestService', () => {
  let service: BbTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BbTestService],
    }).compile();

    service = module.get<BbTestService>(BbTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
