import { Resolver, Query } from '@nestjs/graphql';
import { SkiperCatCommerceService } from './skiper-cat-commerce.service';

@Resolver('SkiperCatCommerce')
export class SkiperCatCommerceResolver {

    constructor(
        private readonly service:SkiperCatCommerceService
    ){}

    @Query()
    async categoriesCommerce(){
        return this.service.getAll();
    }
}
