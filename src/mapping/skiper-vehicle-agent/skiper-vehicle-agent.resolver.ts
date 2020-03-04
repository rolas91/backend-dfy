import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SkiperVehicleAgentService } from './skiper-vehicle-agent.service';
import { ParseIntPipe } from '@nestjs/common';
import { SkiperVehicleAgentInput } from './skiper-vehicle-agent.dto';

@Resolver('SkiperVehicleAgent')
export class SkiperVehicleAgentResolver {

    constructor(private readonly service:SkiperVehicleAgentService){}

    @Query('SkiperVehicleAgent')
    async getAllSkiperVehicle() {
        return await this.service.getAll();
    }

    @Query()
    getSkiperVehicleById(@Args('id', ParseIntPipe) id: number){
        return this.service.getById(id);
    }

    @Query()
    getBySkiperAgentId(@Args('id', ParseIntPipe) id: number){
        return this.service.getBySkiperAgentId(id);
    }

    @Mutation()
    async registerSkiperVehicleAgent(@Args('input') input: SkiperVehicleAgentInput){
        let result = await this.service.registerSkiperVehicleAgent(input);
        return result
    }

    @Mutation()
    async updateSkiperVehicleAgent(@Args('input') input: SkiperVehicleAgentInput){
        let result = await this.service.updateSkiperVehicleAgent(input);
        return result
    }
}
