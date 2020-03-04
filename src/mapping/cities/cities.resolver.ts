import { Resolver, Query, Args } from '@nestjs/graphql';
import { citiesDto } from './cities.dto';
import { CitiesService } from './cities.service';

@Resolver('Cities')
export class CitiesResolver {

    constructor(private citiesService: CitiesService){}

    @Query(() => [citiesDto])
    async cities(){
        return await this.citiesService.getAll();
    }

    @Query(() => citiesDto)
    async searchCity(@Args('id') id: number){
        return await this.citiesService.getById(id);
    }

    @Query()
    async searchCityByCountryId(@Args('id') id: number){
        return await this.citiesService.getCitiesByCountryId(id);
    }


}
