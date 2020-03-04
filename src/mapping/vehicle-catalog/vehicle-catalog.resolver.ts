import { Resolver, Query, Args } from '@nestjs/graphql';
import { VehicleCatalogService } from './vehicle-catalog.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('VehicleCatalog')
export class VehicleCatalogResolver {

    constructor(private readonly service:VehicleCatalogService) {}

    @Query()
    getAllVehicleCatalog(){
        return this.service.getAll();
    }

    @Query()
    getVehicleCatalogById(@Args('id',ParseIntPipe) id:number) {
        return this.service.getById(id);
    }
}
