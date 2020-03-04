import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CommerceRolService } from './commerce-rol.service';
import { ParseIntPipe } from '@nestjs/common';
import { CommerceRolInput } from './commerce-rol.dto';

@Resolver('CommerceRol')
export class CommerceRolResolver {

    constructor(private readonly service:CommerceRolService){}

    @Query()
    getAllCommerceRoles(){
        return this.service.getAll();
    }

    @Query()
    getAllCommerceRoleById(@Args('id',ParseIntPipe)id:number){
        return this.service.getById(id);
    }

    @Mutation()
    registerCommerceRole(@Args('input')input:CommerceRolInput){
        return this.service.create(input);
    }

    @Mutation()
    updateCommerceRole(@Args('input')input:CommerceRolInput){
        return this.service.update(input);
    }

    @Mutation()
    deleteCommerceRole(@Args('id',ParseIntPipe)id:number){
        return this.service.delete(id);
    }
}
