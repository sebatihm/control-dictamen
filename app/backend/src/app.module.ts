import { Module } from '@nestjs/common';
import { DictumModule } from './dictum/dictum.module';

@Module({
  imports: [DictumModule],
})
export class AppModule {}
