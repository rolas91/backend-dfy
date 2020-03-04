import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersCommissionsService } from './users-commissions.service';

@Resolver('UsersCommissions')
export class UsersCommissionsResolver {

    constructor(private readonly service: UsersCommissionsService) { }

    @Query()
    getAllUsersComissionsByUserId(@Args('id_user') id_user: number) {
        return this.service.getAllById(id_user);
    }
}
