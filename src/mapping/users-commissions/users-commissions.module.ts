import { Module } from '@nestjs/common';
import { UsersCommissionsService } from './users-commissions.service';
import { UsersCommissionsResolver } from './users-commissions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersCommissions } from './users-commissions.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UsersCommissions])],
  providers: [UsersCommissionsService, UsersCommissionsResolver],
  exports:[UsersCommissionsService]
})
export class UsersCommissionsModule {}
