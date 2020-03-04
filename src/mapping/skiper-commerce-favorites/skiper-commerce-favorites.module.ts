import { Module } from '@nestjs/common';
import { SkiperCommerceFavoritesService } from './skiper-commerce-favorites.service';
import { SkiperCommerceFavoritesResolver } from './skiper-commerce-favorites.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkiperCommerceFavorite } from './skiper-commerce-favorites.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SkiperCommerceFavorite])],
  providers: [SkiperCommerceFavoritesService, SkiperCommerceFavoritesResolver],
  exports: [SkiperCommerceFavoritesService]
})
export class SkiperCommerceFavoritesModule { }
