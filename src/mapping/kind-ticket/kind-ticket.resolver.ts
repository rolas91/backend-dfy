import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { KindTicketService } from './kind-ticket.service';
import { KindTicketInput } from './kind-ticket.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('KindTicket')
export class KindTicketResolver {
    constructor(
        private readonly kindTicketService: KindTicketService
    ){}

    @Query('kindtickets')
    async kindtickets() {
        return this.kindTicketService.getAll();
    }

    @Query()
    searchKindTickets(@Args('id', ParseIntPipe) id: number) {
        return this.kindTicketService.getById(id);
    }

    @Mutation('registerKindTicket')
    async registerKindTicket(@Args('input') input: KindTicketInput){
        try {
            return this.kindTicketService.registerKindTicket(input);
        } catch (error) {
            console.error(error);
        }
    }

    @Mutation()
    async updateKindTicket(@Args('input') input: KindTicketInput) {
        return await this.kindTicketService.update(input);
    }
}
