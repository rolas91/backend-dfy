import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { SkiperCommerceFavoritesService } from './skiper-commerce-favorites.service';
import { CommerceFavoriteInput } from './skiper-commerce-favorites.dto';

@Resolver('SkiperCommerceFavorites')
export class SkiperCommerceFavoritesResolver {

    constructor(private readonly service:SkiperCommerceFavoritesService){}

    @Query()
    getAllCommerceFavoriteByUserId(@Args('id_user') id_user:number){
        return this.service.getAllByUserId(id_user);
    }

    @Mutation()
    registerCommerceFavorite(@Args('input') input:CommerceFavoriteInput){
        return this.service.create(input);
    }

    @Mutation()
    removeCommerceFavorite(@Args('id') id: number){
        return this.service.delete(id);
    }
}
