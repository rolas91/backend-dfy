import { Module } from '@nestjs/common';
import { SkiperOrderDetail } from './skiper-order-detail.entity';
import { SkiperOrderDetailService } from './skiper-order-detail.service';
import { SkiperOrderDetailResolver } from './skiper-order-detail.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([SkiperOrderDetail])
  ],
  providers: [
    SkiperOrderDetailService,
    SkiperOrderDetailResolver
  ],
  exports: [
    SkiperOrderDetailService
  ]
})
export class SkiperOrderDetailModule {}
