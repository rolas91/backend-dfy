import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SkiperOrdersStatusInput} from './skiper-orders-status.dto';
import { SkiperOrdersStatus } from './skiper-orders-status.entity';

@Injectable()
export class SkiperOrdersStatusService {

    constructor(
        @InjectRepository(SkiperOrdersStatus) private readonly repository: Repository<SkiperOrdersStatus>
        ) { }

    async getAll():Promise<SkiperOrdersStatus[]> {
        try {
            return await this.repository.find();
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id: number):Promise<SkiperOrdersStatus> {
        return await this.repository.findOneOrFail({ 
            where: {id}
         });
    }

    async update(input: SkiperOrdersStatusInput): Promise<SkiperOrdersStatus>{
        //console.log(input);
        try {
            let skiperorderstatusUpdate = await this.getById(input.id);
            skiperorderstatusUpdate.name = input.name;
            skiperorderstatusUpdate.indicador = input.indicador;
            //console.log(appUpdate);
            return await this.repository.save(skiperorderstatusUpdate);
        } catch (error) {
            console.log(error)
        }
    }

    async registerSkiperOrdersStatus(input:SkiperOrdersStatusInput):Promise<SkiperOrdersStatus>{
        try 
        {
            let skiperorderstatus = this.parseSkiperOrdersStatus(input);
            console.log(skiperorderstatus);
            return this.repository.save(skiperorderstatus);
        } catch (error) {
            console.error(error)
        }
        return null;
    }

    private parseSkiperOrdersStatus(input:SkiperOrdersStatusInput):SkiperOrdersStatus {
        let skiperorderstatus:SkiperOrdersStatus = new SkiperOrdersStatus();
        skiperorderstatus.name = input.name;
        skiperorderstatus.indicador = input.indicador;
        return skiperorderstatus;
    }
}
