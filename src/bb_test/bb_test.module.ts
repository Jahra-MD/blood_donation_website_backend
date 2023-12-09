import { Module } from '@nestjs/common';
import { BbTestController } from './bb_test.controller';
import { BbTestService } from './bb_test.service';

@Module({
  controllers: [BbTestController],
  providers: [BbTestService]
})
export class BbTestModule {}
