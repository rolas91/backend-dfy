import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkiperDriverSchedule } from './skiper-driver-schedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkiperDriverScheduleService {

    constructor(
        @InjectRepository(SkiperDriverSchedule) private readonly repository: Repository<SkiperDriverSchedule> 
    ){}

    async getAll(){
        return await this.repository.find();
    }

    async getById(id:number){
        return await this.repository.findOneOrFail(id);
    }

    // async create(input:DriverScheduleInput){
        
    // }
}
