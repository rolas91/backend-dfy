import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCommerceRoles } from './user-commerce-roles.entity';
import { Repository } from 'typeorm';
import { UserService } from '../users/user.service';
import { SkiperCommerceService } from '../skiper-commerce/skiper-commerce.service';
import { CommerceRolService } from '../commerce-rol/commerce-rol.service';
import { UserCommerceRolesInput } from './user-commerce-roles.dto';

@Injectable()
export class UserCommerceRolesService {

    constructor(
        @InjectRepository(UserCommerceRoles) private readonly repository: Repository<UserCommerceRoles>,
        private readonly userService: UserService,
        private readonly commerceService: SkiperCommerceService,
        private readonly rolesService: CommerceRolService
    ) { }

    async getAll(): Promise<UserCommerceRoles[]> {
        return await this.repository.find({ relations: ["user", "skiperCommerce", "rol"] });
    }

    async registerUserCommerceRol(input: UserCommerceRolesInput): Promise<UserCommerceRoles> {
        try {
            let user = await this.userService.findById(input.userID);
            let commerce = await this.commerceService.getById(input.skiperCommerceID);
            let rol = await this.rolesService.getById(input.rolID);
            if (user !== undefined && commerce !== undefined && rol !== undefined) {
                let userCommerceRol = this.parseUserCommerceRol(user, commerce, rol);
                return await this.repository.save(userCommerceRol);
            }
        } catch (error) {
            console.log(error)
        }
    }

    private parseUserCommerceRol(user, commerce, rol): UserCommerceRoles {
        let result: UserCommerceRoles = new UserCommerceRoles();
        result.user = user;
        result.skiperCommerce = commerce;
        result.rol = rol;
        return result;
    }
}