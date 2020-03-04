import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AppsService } from './apps.service';
import { AppsInput } from './apps.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Apps')
export class AppsResolver {
    constructor(
        private readonly appsService: AppsService
    ){}

    @Query('apps')
    async apps() {
        return this.appsService.getAll();
    }

    @Query()
    searchApp(@Args('id', ParseIntPipe) id: number) {
        return this.appsService.getById(id);
    }

    @Mutation()
    async registerApp(@Args('input') input: AppsInput){
        try {
            return this.appsService.registerApp(input);
        }
        catch (error) 
        {
            console.error(error);
        }
    }

    @Mutation()
    async updateApp(@Args('input') input: AppsInput) {
        return await this.appsService.update(input);
    }
}
