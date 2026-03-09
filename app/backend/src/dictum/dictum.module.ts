import { Module } from '@nestjs/common';
import { DictumService } from './dictum.service';
import { DictumController } from './dictum.controller';

@Module({
  controllers: [DictumController],
  providers: [DictumService],
})
export class DictumModule {}
