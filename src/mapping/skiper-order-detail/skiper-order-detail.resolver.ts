import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { SkiperOrderDetailService } from './skiper-order-detail.service';
import { SkiperOrderDetailInput } from './skiper-order-detail.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('SkiperOrderDetail')
export class SkiperOrderDetailResolver {
    constructor ( 
        private readonly skiperOrderDetailService: SkiperOrderDetailService 
    ) { }

    @Query()
    async skiperorderdetail() {
        return this.skiperOrderDetailService.getAll();
    }
    
    @Query()
    searchSkiperOrderDetail(@Args('id', ParseIntPipe) id: number) {
        return this.skiperOrderDetailService.getById(id);
    }

    @Mutation()
    async registerSkiperOrderDetail(@Args('input') input: SkiperOrderDetailInput) {
        return this.skiperOrderDetailService.registerSkiperOrderDetail(input);
    }

    @Mutation()
    async updateSkiperOrderDetail(@Args('input') input: SkiperOrderDetailInput) {
        return await this.skiperOrderDetailService.update(input);
    }
}