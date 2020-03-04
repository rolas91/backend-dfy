import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeProduct } from './size-product.entity';
import { SizeProductService } from './size-product.service';
import { SizeProductResolver } from './size-product.resolver';
import { SkiperProductCommerceModule } from '../skiper-product-commerce/skiper-product-commerce.module';

@Module({
    imports:[
        SkiperProductCommerceModule,
        TypeOrmModule.forFeature([SizeProduct])],
    providers: [SizeProductService, SizeProductResolver]
})
export class SizeProductModule {}
