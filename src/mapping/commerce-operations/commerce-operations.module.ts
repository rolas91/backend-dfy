import { Module } from '@nestjs/common';
import { CommerceOperationsService } from './commerce-operations.service';
import { CommerceOperationsResolver } from './commerce-operations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceOperations } from './commerce-operations.entity';
import { CommerceModulesModule } from '../commerce-modules/commerce-modules.module';

@Module({
  imports: [
    CommerceModulesModule,
    TypeOrmModule.forFeature([CommerceOperations])],
  providers: [CommerceOperationsService, CommerceOperationsResolver],
  exports: [CommerceOperationsService]
})
export class CommerceOperationsModule { }
