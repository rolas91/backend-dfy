import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppCities } from './app-cities.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppCitiesService {

    constructor(@InjectRepository(AppCities) private readonly repository: Repository<AppCities>) { }

    async getAll(){
        return await this.repository.find();
    }
}
