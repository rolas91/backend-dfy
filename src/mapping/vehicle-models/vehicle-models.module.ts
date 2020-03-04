import { Module } from '@nestjs/common';
import { VehicleModels } from './vehicle-models.entity';
import { VehihcleModelsService } from './vehihcle-models.service';
import { VehicleModelsResolver } from './vehicle-models.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([VehicleModels])
  ],
  providers: [VehihcleModelsService, VehicleModelsResolver],
  exports:[VehihcleModelsService]
})

export class VehicleModelsModule {}
