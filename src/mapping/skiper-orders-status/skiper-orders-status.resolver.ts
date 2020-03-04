import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { SkiperOrdersStatusService } from './skiper-orders-status.service';
import { SkiperOrdersStatusInput } from './skiper-orders-status.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('SkiperOrdersStatus')
export class SkiperOrdersStatusResolver {
    constructor(
        private readonly skiperOrdersStatusService: SkiperOrdersStatusService
    ){}

    @Query('skiperordersstatus')
    async skiperordersstatus() {
        return this.skiperOrdersStatusService.getAll();
    }

    @Query()
    searchSkiperOrdersStatusDto(@Args('id', ParseIntPipe) id: number) {
        return this.skiperOrdersStatusService.getById(id);
    }

    @Mutation()
    async registerSkiperOrdersStatus(@Args('input') input: SkiperOrdersStatusInput){
        try {
            return this.skiperOrdersStatusService.registerSkiperOrdersStatus(input);
        }
        catch (error) 
        {
            console.error(error);
        }
    }

    @Mutation()
    async updateSkiperOrdersStatus(@Args('input') input: SkiperOrdersStatusInput) {
        return await this.skiperOrdersStatusService.update(input);
    }
}
