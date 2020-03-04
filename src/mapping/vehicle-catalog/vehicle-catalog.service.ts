import { Injectable } from '@nestjs/common';
import { VehicleCatalog } from './vehicle-catalog.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VehicleCatalogService {

    constructor(@InjectRepository(VehicleCatalog) private readonly repository:Repository<VehicleCatalog>){}

    async getAll(){
        return await this.repository.find();
    }

    async getById(id:number){
        return await this.repository.findOneOrFail({id});
    }
}
