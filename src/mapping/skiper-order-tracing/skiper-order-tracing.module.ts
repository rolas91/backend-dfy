import { Module, forwardRef } from '@nestjs/common';
import { SkiperOrderTracingService } from './skiper-order-tracing.service';
import { SkiperOrderTracingResolver } from './skiper-order-tracing.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkiperOrderTracing } from './skiper-order-tracing.entity';
import { SkiperOrderModule } from '../skiper-order/skiper-order.module';

@Module({
  imports:[
    forwardRef(() => SkiperOrderModule),
    TypeOrmModule.forFeature([SkiperOrderTracing])],
    providers: [SkiperOrderTracingService, SkiperOrderTracingResolver],
    exports: [SkiperOrderTracingService, SkiperOrderTracingResolver]
})
export class SkiperOrderTracingModule {}
