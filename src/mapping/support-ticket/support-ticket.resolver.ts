import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { SupportTicketService } from './support-ticket.service';
import { SupportTicketInput } from './suppor.ticket.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('SupportTicket')
export class SupportTicketResolver {
    constructor(private readonly supportTicketService: SupportTicketService) { }

    @Query('supporttickets')
    async supporttickets() {
        return this.supportTicketService.getAll();
    }

    @Query()
    searchSupportTicket(@Args('id', ParseIntPipe) id: number) {
        return this.supportTicketService.getById(id);
    }

    @Mutation('registerSupportTicket')
    async registerSupportTicket(@Args('input') input: SupportTicketInput) {
        try {
            return this.supportTicketService.registerSupportTicket(input);
        } catch(error) {
            console.log(error);
        }
    }

    @Mutation()
    async updateSupportTicket(@Args('input') input: SupportTicketInput) {
        return await this.supportTicketService.update(input);
    }
}
