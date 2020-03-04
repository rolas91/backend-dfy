import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CommerceModulesService } from './commerce-modules.service';
import { ParseIntPipe } from '@nestjs/common';
import { CommerceModulesInput } from './commerce-modules.dto';

@Resolver('CommerceModules')
export class CommerceModulesResolver {

    constructor(private readonly service: CommerceModulesService) { }

    @Query()
    getAllCommerceModules() {
        return this.service.getAll();
    }

    @Query()
    getCommerceModuleById(@Args('id', ParseIntPipe) id: number) {
        return this.service.getById(id);
    }

    @Query()
    getCommerceModulesWithPages(@Args('page', ParseIntPipe) page: number) {
        return this.service.getAllWithPagination(page);
    }

    @Mutation()
    registerCommerceModule(@Args('input') input: CommerceModulesInput) {
        return this.service.create(input);
    }

    @Mutation()
    updateCommerceModule(@Args('input') input: CommerceModulesInput) {
        return this.service.update(input);
    }

    @Mutation()
    deleteCommerceModule(@Args('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}
