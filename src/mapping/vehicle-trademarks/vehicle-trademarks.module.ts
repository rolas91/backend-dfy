import { Module } from '@nestjs/common';
import { VehicleTrademark } from './vehicle-trademark.entity';
import { VehicleTrademarksService } from './vehicle-trademarks.service';
import { VehicleTrademarksResolver } from './vehicle-trademarks.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([VehicleTrademark])
  ],
  providers: [
    VehicleTrademarksService, 
    VehicleTrademarksResolver
  ],
  exports:[
    VehicleTrademarksService
  ]
})

export class VehicleTrademarksModule {}
