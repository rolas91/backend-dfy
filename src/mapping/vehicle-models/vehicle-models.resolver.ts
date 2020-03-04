import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { VehihcleModelsService } from './vehihcle-models.service';
import { VehicleModelsInput } from './vehicle-models.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('VehicleModels')
export class VehicleModelsResolver {
    constructor(
        private readonly vehihcleModelsService: VehihcleModelsService
    ){}

    @Query('vehiclemodels')
    async vehiclemodels() {
        return this.vehihcleModelsService.getAll();
    }

    @Query()
    searchVehicleModels(@Args('id', ParseIntPipe) id: number) {
        return this.vehihcleModelsService.getById(id);
    }

    @Mutation()
    async registerVehicleModel(@Args('input') input: VehicleModelsInput){
        try {
            return this.vehihcleModelsService.registerVehicleModel(input);
        }
        catch (error) 
        {
            console.error(error);
        }
    }

    @Mutation()
    async updateVehicleModel(@Args('input') input: VehicleModelsInput) {
        return await this.vehihcleModelsService.update(input);
    }
}
