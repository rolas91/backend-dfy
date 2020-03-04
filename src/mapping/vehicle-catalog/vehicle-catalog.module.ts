import { Module } from '@nestjs/common';
import { VehicleCatalogService } from './vehicle-catalog.service';
import { VehicleCatalogResolver } from './vehicle-catalog.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleCatalog } from './vehicle-catalog.entity';

@Module({
  imports:[TypeOrmModule.forFeature([VehicleCatalog])],
  providers: [VehicleCatalogService, VehicleCatalogResolver],
  exports:[VehicleCatalogService]
})
export class VehicleCatalogModule {}
