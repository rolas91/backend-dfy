import { Resolver, Query } from '@nestjs/graphql';
import { SkiperTravelsStatusService } from './skiper-travels-status.service';

@Resolver('SkiperTravelsStatus')
export class SkiperTravelsStatusResolver {
    constructor(private readonly service: SkiperTravelsStatusService) {}

    @Query()
    async getAllSkiperTravelStatus() {
        return await this.service.getAll();
    }

}
