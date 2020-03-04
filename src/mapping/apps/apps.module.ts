import { Module } from '@nestjs/common';
import { Apps } from './apps.entity';
import { AppsService } from './apps.service';
import { AppsResolver } from './apps.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Apps])
  ],
  providers: [AppsService, AppsResolver],
  exports:[AppsService]
})

export class AppsModule {}
