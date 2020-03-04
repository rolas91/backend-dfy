import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VehicleModelsInput } from './vehicle-models.dto';
import { VehicleModels } from './vehicle-models.entity';

@Injectable()
export class VehihcleModelsService {
    constructor(
        @InjectRepository(VehicleModels) private readonly repository:Repository<VehicleModels>
    ){}

    async getAll():Promise<VehicleModels[]>{
        try {
            return await this.repository.find();
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id:number):Promise<VehicleModels>{
        return await this.repository.findOne({
            where: {id}
        });
    }

    async update(input: VehicleModelsInput): Promise<VehicleModels>{
        //console.log(input);
        try {
            let vehiclemodelsUpdate = await this.getById(input.id);
            vehiclemodelsUpdate.name = input.name;
            //console.log(appUpdate);
            return await this.repository.save(vehiclemodelsUpdate);
        } catch (error) {
            console.log(error)
        }
    }

    async registerVehicleModel(input:VehicleModelsInput):Promise<VehicleModels>{
        try 
        {
            let vehiclemodels = this.parseVehicleModels(input);
            //console.log(app);
            return this.repository.save(vehiclemodels);
        } catch (error) {
            console.error(error)
        }
        return null;
    }

    private parseVehicleModels(input:VehicleModelsInput):VehicleModels {
        let vehiclemodels:VehicleModels = new VehicleModels();
        vehiclemodels.name = input.name;
        return vehiclemodels;
    }

}
