import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserCommerceRolesService } from './user-commerce-roles.service';
import { UserCommerceRolesInput } from './user-commerce-roles.dto';

@Resolver('UserCommerceRoles')
export class UserCommerceRolesResolver {

    constructor(private readonly service: UserCommerceRolesService) { }

    @Query()
    allUserCommerceRoles() {
        return this.service.getAll()
    }

    @Mutation()
    registerUserCommerceRol(@Args('input') input: UserCommerceRolesInput) {
        return this.registerUserCommerceRol(input);
    }
}
