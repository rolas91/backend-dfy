import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsersAddressService } from './users-address.service';
import { UsersAddressInput } from './users-address.dto';

@Resolver('UsersAddress')
export class UsersAddressResolver {

    constructor(private readonly service: UsersAddressService) { }

    @Query()
    getAllUsersAddress() {
        return this.service.getAll();
    }

    @Query()
    getUsersAddressById(@Args('id') id: number) {
        return this.service.getById(id);
    }

    @Query()
    getUsersAddressByUser(@Args('iduser') iduser: number) {
        return this.service.getByIdUser(iduser);
    }

    @Mutation()
    registerUsersAddress(@Args('input') input: UsersAddressInput) {
        return this.service.create(input);
    }
}
