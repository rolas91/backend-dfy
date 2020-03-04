import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TicketStatusService } from './ticket-status.service';
import { TicketStatusInput } from './ticket-status.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('TicketStatus')
export class TicketStatusResolver {
    constructor(
        private readonly ticketStatusService: TicketStatusService
    ){}

    @Query('ticketstatus')
    async ticketstatus() {
        return await this.ticketStatusService.getAll();
    }

    @Query()
    searchTicketStatus(@Args('id', ParseIntPipe) id: number) {
        return this.ticketStatusService.getById(id);
    }

    @Mutation('registerTicketStatus')
    async registerTicketStatus(@Args('input') input: TicketStatusInput){

        try {
            return await this.ticketStatusService.registerTicketStatus(input);
        } catch(error) {
            console.error(error);
        }
    }

    @Mutation('updateTicketStatus')
    async updateTicketStatus(@Args('input') input: TicketStatusInput) {
        try {
            return await this.ticketStatusService.update(input);
        } catch (error) {
            console.error(error);
        }
    }
}
