import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { SkiperCatProductCommerceService } from './skiper-cat-product-commerce.service';
import { SkiperCatProductInput } from './skiper-cat-product-commerce.dto';

@Resolver('SkiperCatProductCommerce')
export class SkiperCatProductCommerceResolver {

    constructor(
        private readonly service:SkiperCatProductCommerceService
    ){}

    @Query()
    async categoriesProduct(){
        return this.service.getAll();
    }

    @Query()
    async CategoryProductByCommerceId(@Args('idcommerce') idcommerce: number){
        return this.service.getByCommerceId(idcommerce);
    }

    @Query()
    async categoryProductById(@Args('id') id: number){
        return this.service.getById(id);
    }

    @Query()
    async searchCategoryProduct(@Args('id') id: number){
        return this.service.getByIdComerce(id);
    }

    @Query()
    async categoryProductsWithPagination(@Args('pages') page: number){
        return this.service.getWithPagination(page);
    }

    @Mutation()
    async registerCatProductCommerce(@Args('input') input: SkiperCatProductInput){
        return this.service.create(input);
    }
}
