import { Resolver, Query } from '@nestjs/graphql';
import { UserCivilStatusService } from './user-civil-status.service';

@Resolver('UserCivilState')
export class UserCivilStateResolver {

    constructor(private readonly service: UserCivilStatusService){}

    @Query()
    getCivilStatus(){
        return this.service.getAll()
    }
}
