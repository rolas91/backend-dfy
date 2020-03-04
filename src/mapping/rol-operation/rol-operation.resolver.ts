import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommerceRolService } from '../commerce-rol/commerce-rol.service';
import { RolOperationService } from './rol-operation.service';
import { ParseIntPipe } from '@nestjs/common';
import { RolOperationInput } from './rol-operation.dto';

@Resolver('RolOperation')
export class RolOperationResolver {

    constructor(private readonly service: RolOperationService) { }

    @Query()
    getAllRolOperation() {
        return this.service.getAll();
    }

    @Query()
    getAllRolOperationWithPagination(@Args('page', ParseIntPipe) page: number) {
        return this.service.getAllWithPagination(page);
    }

    @Query()
    getAllRolOperationById(@Args('id', ParseIntPipe) id: number) {
        return this.service.getById(id);
    }

    @Mutation()
    registerRolOperation(@Args('input') input: RolOperationInput) {
        return this.service.create(input);
    }
}
