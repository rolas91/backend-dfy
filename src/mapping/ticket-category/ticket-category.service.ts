import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TicketCategoryInput } from './ticket-category.dto';
import { TicketCategory } from './ticket-category.entity';

@Injectable()
export class TicketCategoryService {
    constructor(
        @InjectRepository(TicketCategory) private readonly repository: Repository<TicketCategory>
    ){}

    async getAll(): Promise<TicketCategory[]>{
        try {
            return await this.repository.find();
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id: number): Promise<TicketCategory>{
        return await this.repository.findOne({
            where: {id}
        });
    }

    async update(input: TicketCategoryInput): Promise<TicketCategory>{
        //console.log(input);
        try {
            let ticketcategoryUpdate = await this.getById(input.id);
            ticketcategoryUpdate.name = input.name;
            //console.log(appUpdate);
            return await this.repository.save(ticketcategoryUpdate);
        } catch (error) {
            console.log(error)
        }
    }

    async registerTicketCategory(input: TicketCategoryInput): Promise<TicketCategory>{
        try
        {
            let ticketcategory = this.parseTicketCategory(input);
            console.log(ticketcategory);
            return this.repository.save(ticketcategory);
        } catch (error) {
            console.error(error)
        }
        return null;
    }

    private parseTicketCategory(input: TicketCategoryInput): TicketCategory {
        let ticketcategory: TicketCategory = new TicketCategory();
        ticketcategory.name = input.name;
        return ticketcategory;
    }
}
