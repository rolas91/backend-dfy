import { Module } from '@nestjs/common';
import { RolOperationService } from './rol-operation.service';
import { RolOperationResolver } from './rol-operation.resolver';
import { CommerceOperationsModule } from '../commerce-operations/commerce-operations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolOperation } from './rol-operation.entity';
import { CommerceRolModule } from '../commerce-rol/commerce-rol.module';

@Module({
  imports:[
    CommerceOperationsModule,
    CommerceRolModule,
    TypeOrmModule.forFeature([RolOperation])
  ],
  providers: [RolOperationService, RolOperationResolver]
})
export class RolOperationModule {}
