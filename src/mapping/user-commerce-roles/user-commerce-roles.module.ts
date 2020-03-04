import { Module } from '@nestjs/common';
import { UserCommerceRolesService } from './user-commerce-roles.service';
import { UserCommerceRolesResolver } from './user-commerce-roles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCommerceRoles } from './user-commerce-roles.entity';
import { UsersModule } from '../users/users.module';
import { CommerceRolModule } from '../commerce-rol/commerce-rol.module';
import { SkiperCommerceModule } from '../skiper-commerce/skiper-commerce.module';

@Module({
  imports:[
    UsersModule,
    SkiperCommerceModule,
    CommerceRolModule,
    TypeOrmModule.forFeature([UserCommerceRoles])
  ],
  providers: [UserCommerceRolesService, UserCommerceRolesResolver]
})
export class UserCommerceRolesModule {}
