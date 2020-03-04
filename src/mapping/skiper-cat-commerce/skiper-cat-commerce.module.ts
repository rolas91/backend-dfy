import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkiperCatCommerce } from './skiper-cat-commerce.entity';
import { SkiperCatCommerceService } from './skiper-cat-commerce.service';
import { SkiperCatCommerceResolver } from './skiper-cat-commerce.resolver';

@Module({
    imports:[TypeOrmModule.forFeature([SkiperCatCommerce])],
    providers: [SkiperCatCommerceService, SkiperCatCommerceResolver],
    exports:[SkiperCatCommerceService]
})
export class SkiperCatCommerceModule {}
