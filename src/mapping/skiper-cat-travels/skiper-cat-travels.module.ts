import { Module } from '@nestjs/common';
import { SkiperCatTravel } from './skiper-cat-travel.entity';
import { SkiperCatTravelsService } from './skiper-cat-travels.service';
import { SkiperCatTravelsResolver } from './skiper-cat-travels.resolver';
import { IsMobilePhone } from 'class-validator';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([SkiperCatTravel])
  ],
  providers: [SkiperCatTravelsService, SkiperCatTravelsResolver],
  exports:[SkiperCatTravelsService]
})

export class SkiperCatTravelsModule {}
