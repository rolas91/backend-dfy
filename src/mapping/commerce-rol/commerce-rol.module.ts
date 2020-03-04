import { Module } from '@nestjs/common';
import { CommerceRolService } from './commerce-rol.service';
import { CommerceRolResolver } from './commerce-rol.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceRol } from './commerce-rol.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([CommerceRol])],
  providers: [CommerceRolService, CommerceRolResolver],
  exports:[CommerceRolService]
})
export class CommerceRolModule {}
