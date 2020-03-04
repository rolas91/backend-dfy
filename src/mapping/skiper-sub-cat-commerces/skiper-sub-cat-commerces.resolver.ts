import { Resolver, Query, Args } from '@nestjs/graphql';
import {SkiperSubCatCommercesService} from './skiper-sub-cat-commerces.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('SkiperSubCatCommerces')
export class SkiperSubCatCommercesResolver {
    constructor(
        private readonly service: SkiperSubCatCommercesService,
        ) {}

    @Query()
    async getAllSkiperSubCatCommerce() {
        return await this.service.getAll();
    }

   /* @Query()
    async getCommerceByIdSubCategoryCommerce(@Args('id', ParseIntPipe) id: number) {
        return this.service.getByIdSubCategoryCommerce(id);    
    }*/

}
