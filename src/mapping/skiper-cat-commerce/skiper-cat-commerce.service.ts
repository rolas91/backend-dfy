import { Injectable } from '@nestjs/common';
import { SkiperCatCommerce } from './skiper-cat-commerce.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatCommerceInput } from './skiper-cat-commerce.dto';

@Injectable()
export class SkiperCatCommerceService {

    constructor(
        @InjectRepository(SkiperCatCommerce) private readonly repository:Repository<SkiperCatCommerce>
    ){}

    async getAll():Promise<SkiperCatCommerce[]>{
        return await this.repository.find();
    }

    async getById(id:number):Promise<SkiperCatCommerce>{
        return await this.repository.findOne({id});
    }

    async create(input: CatCommerceInput): Promise<SkiperCatCommerce>{
        return await this.repository.save(input);
    }
}
