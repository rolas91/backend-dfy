import { Module } from '@nestjs/common';
import { SkiperOrdersStatus } from './skiper-orders-status.entity';
import { SkiperOrdersStatusService } from './skiper-orders-status.service';
import { SkiperOrdersStatusResolver } from './skiper-orders-status.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([SkiperOrdersStatus])
  ],
  providers: [
    SkiperOrdersStatusService,
    SkiperOrdersStatusResolver],
    exports:[SkiperOrdersStatusService]
})
export class SkiperOrdersStatusModule {}
