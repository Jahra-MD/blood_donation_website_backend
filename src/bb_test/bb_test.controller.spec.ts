import { Test, TestingModule } from '@nestjs/testing';
import { BbTestController } from './bb_test.controller';

describe('BbTestController', () => {
  let controller: BbTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BbTestController],
    }).compile();

    controller = module.get<BbTestController>(BbTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
