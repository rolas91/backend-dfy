import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TicketPriorityService } from './ticket-priority.service';
import { TicketPriorityInput } from './ticket-priority.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('TicketPriority')
export class TicketPriorityResolver {
    constructor(
        private readonly ticketPriorityService: TicketPriorityService
    ){}

    @Query('ticketpriorities')
    async ticketpriorities() {
        return this.ticketPriorityService.getAll();
    }

    @Query()
    searchTicketPriority(@Args('id', ParseIntPipe) id: number) {
        return this.ticketPriorityService.getById(id);
    }

    @Mutation('registerTicketPriority')
    async registerTicketPriority(@Args('input') input: TicketPriorityInput){
        try {
            return this.ticketPriorityService.registerTicketPriority(input);
        } catch(error) {
            console.log(error);
        }
    }

    @Mutation()
    async updateTicketPriority(@Args('input') input: TicketPriorityInput) {
        return await this.ticketPriorityService.update(input);
    }
}
