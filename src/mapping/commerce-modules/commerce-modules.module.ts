import { Module } from '@nestjs/common';
import { CommerceModulesService } from './commerce-modules.service';
import { CommerceModulesResolver } from './commerce-modules.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceModules } from './commerce-modules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommerceModules])],
  providers: [CommerceModulesService, CommerceModulesResolver],
  exports: [CommerceModulesService]
})
export class CommerceModulesModule { }
