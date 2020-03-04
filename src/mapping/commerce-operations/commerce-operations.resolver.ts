import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CommerceOperationsService } from './commerce-operations.service';
import { CommerceOperationsInput } from './commerce-operations.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('CommerceOperations')
export class CommerceOperationsResolver {

    constructor(private readonly service: CommerceOperationsService) { }

    @Query()
    getAllCommerceOperation() {
        return this.service.getAll();
    }

    @Query()
    getAllCommerceOperationWithPagination(@Args('page', ParseIntPipe) page: number) {
        return this.service.getAllWithPagination(page);
    }

    @Query()
    getAllCommerceOperationById(@Args('id', ParseIntPipe) id: number) {
        return this.service.getById(id);
    }

    @Mutation()
    registerCommerceOperation(@Args('input') input: CommerceOperationsInput) {
        return this.service.create(input);
    }

    @Mutation()
    updateCommerceOperation(@Args('input') input: CommerceOperationsInput) {
        return this.service.update(input);
    }

    @Mutation()
    deleteCommerceOperation(@Args('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }


}
