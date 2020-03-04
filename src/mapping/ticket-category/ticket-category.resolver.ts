import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TicketCategoryService } from './ticket-category.service';
import { TicketCategoryInput } from './ticket-category.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('TicketCategory')
export class TicketCategoryResolver {
    constructor(
        private readonly ticketCategoryService: TicketCategoryService
    ){}

    @Query('ticketcategories')
    async ticketcategories() {
        return this.ticketCategoryService.getAll();
    }

    @Query()
    searchTicketCategory(@Args('id', ParseIntPipe) id: number) {
        return this.ticketCategoryService.getById(id);
    }

    @Mutation('registerTicketCategory')
    async registerTicketCategory(@Args('input') input: TicketCategoryInput){
        try {
            return this.ticketCategoryService.registerTicketCategory(input);
        } catch(error) {
            console.log(error);
        }
    }

    @Mutation()
    async updateTicketCategory(@Args('input') input: TicketCategoryInput) {
        return await this.ticketCategoryService.update(input);
    }
}
