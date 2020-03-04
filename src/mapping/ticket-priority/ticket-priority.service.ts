import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TicketPriorityInput } from './ticket-priority.dto';
import { TicketPriority } from './ticket-priority.entity';

@Injectable()
export class TicketPriorityService {
    constructor(
        @InjectRepository(TicketPriority) private readonly repository: Repository<TicketPriority>
    ){}

    async getAll(): Promise<TicketPriority[]>{
        try {
            return await this.repository.find();
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id: number): Promise<TicketPriority>{
        return await this.repository.findOne({
            where: {id}
        });
    }

    async update(input: TicketPriorityInput): Promise<TicketPriority>{
        //console.log(input);
        try {
            let ticketpriorityUpdate = await this.getById(input.id);
            ticketpriorityUpdate.name = input.name;
            //console.log(appUpdate);
            return await this.repository.save(ticketpriorityUpdate);
        } catch (error) {
            console.log(error)
        }
    }

    async registerTicketPriority(input: TicketPriorityInput): Promise<TicketPriority>{
        try
        {
            let ticketpriority = this.parseTicketPriority(input);
            console.log(ticketpriority);
            return this.repository.save(ticketpriority);
        } catch (error) {
            console.error(error)
        }
        return null;
    }

    private parseTicketPriority(input: TicketPriorityInput): TicketPriority {
        let ticketpriority: TicketPriority = new TicketPriority();
        ticketpriority.name = input.name;
        return ticketpriority;
    }
}
