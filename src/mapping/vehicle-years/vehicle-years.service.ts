import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VehicleYearsInput} from './vehicle-years.dto';
import { VehicleYears } from './vehicle-years.entity';

@Injectable()
export class VehicleYearsService {
    constructor(
        @InjectRepository(VehicleYears) private readonly repository:Repository<VehicleYears>
    ){}

    async getAll():Promise<VehicleYears[]>{
        try {
            return await this.repository.find();
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id:number):Promise<VehicleYears>{
        return await this.repository.findOne({
            where: {id}
        });
    }

    async update(input: VehicleYearsInput): Promise<VehicleYears>{
        //console.log(input);
        try {
            let VehicleYearUpdate = await this.getById(input.id);
            VehicleYearUpdate.year = input.year;
            //console.log(appUpdate);
            return await this.repository.save(VehicleYearUpdate);
        } catch (error) {
            console.log(error)
        }
    }

    async registerVehicleYear(input:VehicleYearsInput):Promise<VehicleYears>{
        try 
        {
            let vehicleyear = this.parseVehicleYear(input);
            //console.log(app);
            return this.repository.save(vehicleyear);
        } catch (error) {
            console.error(error)
        }
        return null;
    }

    private parseVehicleYear(input:VehicleYearsInput):VehicleYears {
        let vehicleyear:VehicleYears = new VehicleYears();
        vehicleyear.year = input.year;
        return vehicleyear;
    }
}
