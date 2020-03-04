import { Module } from '@nestjs/common';
import { SkiperProductCommerceService } from './skiper-product-commerce.service';
import { SkiperProductCommerceResolver } from './skiper-product-commerce.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkiperProductCommerce } from './skiper-product-commerce.entity';
import { SkiperCommerceModule } from '../skiper-commerce/skiper-commerce.module';
import { SkiperCatProductCommerceModule } from '../skiper-cat-product-commerce/skiper-cat-product-commerce.module';

@Module({
  imports:[
    SkiperCommerceModule,
    SkiperCatProductCommerceModule,
    TypeOrmModule.forFeature([SkiperProductCommerce])
  ],
  providers: [SkiperProductCommerceService, SkiperProductCommerceResolver],
  exports:[SkiperProductCommerceService]
})
export class SkiperProductCommerceModule { }
