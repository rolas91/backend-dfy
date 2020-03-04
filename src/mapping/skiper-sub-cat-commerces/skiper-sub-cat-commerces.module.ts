import { Module } from '@nestjs/common';
import { SkiperSubCatCommercesResolver } from './skiper-sub-cat-commerces.resolver';
import { SkiperSubCatCommercesService } from './skiper-sub-cat-commerces.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {SkiperSubCatCommerces} from './skiper-sub-cat-commerces.entity';
import {SkiperCatCommerceModule} from '../skiper-cat-commerce/skiper-cat-commerce.module';
import { SkiperCommerceModule } from '../skiper-commerce/skiper-commerce.module';

@Module({
  imports: [
    SkiperCatCommerceModule,
    TypeOrmModule.forFeature([SkiperSubCatCommerces])
  ],
  providers: [SkiperSubCatCommercesResolver, SkiperSubCatCommercesService],
  exports: [SkiperSubCatCommercesService],
})
export class SkiperSubCatCommercesModule {}
