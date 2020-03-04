import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { SizeProductService } from './size-product.service';
import { ParseIntPipe } from '@nestjs/common';
import { SizeProductInput } from './size-product.dto';

@Resolver('SizeProduct')
export class SizeProductResolver {

    constructor(private readonly service: SizeProductService) { }

    @Query()
    getAllSizeProduct() {
        return this.service.getAll();
    }

    @Query()
    getSizeProductById(@Args('id', ParseIntPipe) id: number) {
        return this.service.getById(id);
    }

    @Mutation()
    registerSizeProduct(@Args('input') input:SizeProductInput){
        return this.service.registerSizeProduct(input);
    }

    @Mutation()
    updateSizeProduct(@Args('input') input:SizeProductInput){
        return this.service.updateSizeProduct(input);
    }
}
