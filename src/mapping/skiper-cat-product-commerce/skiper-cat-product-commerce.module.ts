import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkiperCatProductsCommerce } from './skiper-cat-products-commerce.entity';
import { SkiperCatProductCommerceService } from './skiper-cat-product-commerce.service';
import { SkiperCatProductCommerceResolver } from './skiper-cat-product-commerce.resolver';
import { SkiperCommerceModule } from '../skiper-commerce/skiper-commerce.module';

@Module({
    imports:[
        SkiperCommerceModule,
        TypeOrmModule.forFeature([SkiperCatProductsCommerce])],
    providers: [SkiperCatProductCommerceService, SkiperCatProductCommerceResolver],
    exports:[SkiperCatProductCommerceService]
})
export class SkiperCatProductCommerceModule {}
