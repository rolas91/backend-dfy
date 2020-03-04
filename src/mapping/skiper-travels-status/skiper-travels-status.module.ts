import { Module } from '@nestjs/common';
import { SkiperTravelsStatusResolver } from './skiper-travels-status.resolver';
import { SkiperTravelsStatusService } from './skiper-travels-status.service';
import { SkiperTravelsStatus } from './skiper-travels-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[

    TypeOrmModule.forFeature([SkiperTravelsStatus]),
  ],
  providers: [SkiperTravelsStatusResolver, SkiperTravelsStatusService],
  exports: [SkiperTravelsStatusService],
})
export class SkiperTravelsStatusModule {}
