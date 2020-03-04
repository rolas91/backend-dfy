import { Module } from '@nestjs/common';
import { UploadVehicleLegalDocService } from './upload-vehicle-legal-doc.service';
import { UploadVehicleLegalDocResolver } from './upload-vehicle-legal-doc.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadVehicleLegalDoc } from './upload-vehicle-legal-doc.entity';
import { SkiperVehicleModule } from '../skiper-vehicle/skiper-vehicle.module';

@Module({
  imports: [
    SkiperVehicleModule,
    TypeOrmModule.forFeature([UploadVehicleLegalDoc])],
  providers: [UploadVehicleLegalDocService, UploadVehicleLegalDocResolver],
  exports: [UploadVehicleLegalDocService]
})
export class UploadVehicleLegalDocModule { }
