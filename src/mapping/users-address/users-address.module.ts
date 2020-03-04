import { Module } from '@nestjs/common';
import { UsersAddressService } from './users-address.service';
import { UsersAddressResolver } from './users-address.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersAddress } from './users-address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersAddress])],
  providers: [UsersAddressService, UsersAddressResolver]
})
export class UsersAddressModule { }