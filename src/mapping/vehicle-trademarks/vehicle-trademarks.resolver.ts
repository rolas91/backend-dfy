import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { VehicleTrademarksService } from './vehicle-trademarks.service';
import { VehicleTrademarInput } from './vehicle-trademark.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('VehicleTrademarks')
export class VehicleTrademarksResolver {

    constructor(private readonly service:VehicleTrademarksService) {}

    @Query()
    getAllVehicleTrademark(){
        return this.service.getAll();
    }

    @Query()
    getVehicleTrademarkById(@Args('id',ParseIntPipe) id:number) {
        return this.service.getById(id);
    }

    @Mutation()
    async registerVehicleTrademark(@Args('input') input: VehicleTrademarInput){
        try {
            return this.service.registerVehicleTrademark(input);
        }
        catch (error) 
        {
            console.error(error);
        }
    }

    @Mutation()
    async updateVehicleTrademark(@Args('input') input: VehicleTrademarInput) {
        return await this.service.update(input);
    }
}
