import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { KindTicketInput } from './kind-ticket.dto';
import { KindTicket } from './kind-ticket.entity';

@Injectable()
export class KindTicketService {
    constructor(
        @InjectRepository(KindTicket) private readonly repository: Repository<KindTicket>
    ){}

    async getAll(): Promise<KindTicket[]>{
        try {
            return await this.repository.find();
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id: number): Promise<KindTicket>{
        return await this.repository.findOne({
            where: {id}
        });
    }

    async update(input: KindTicketInput): Promise<KindTicket>{
        //console.log(input);
        try {
            let kindTicketUpdate = await this.getById(input.id);
            kindTicketUpdate.name = input.name;
            //console.log(kindTicketUpdate);
            return await this.repository.save(kindTicketUpdate);
        } catch (error) {
            console.log(error)
        }
    }

    async registerKindTicket(input: KindTicketInput): Promise<KindTicket>{
        try
        {
            let kindticket = this.parseKindTicket(input);
            console.log(kindticket);
            return this.repository.save(kindticket);
        } catch (error) {
            console.error(error)
        }
        return null;
    }

    private parseKindTicket(input: KindTicketInput): KindTicket {
        let app: KindTicket = new KindTicket();
        app.name = input.name;
        return app;
    }

}
