import { Module } from '@nestjs/common';
import { VehicleYears } from './vehicle-years.entity';
import { VehicleYearsService } from './vehicle-years.service';
import { VehicleYearsResolver } from './vehicle-years.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([VehicleYears])
  ],
  providers: [VehicleYearsService, VehicleYearsResolver],
  exports:[VehicleYearsService]
})

export class VehicleYearsModule {}
