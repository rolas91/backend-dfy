import { Resolver, Query } from '@nestjs/graphql';
import { SkiperDriverScheduleService } from './skiper-driver-schedule.service';

@Resolver('SkiperDriverSchedule')
export class SkiperDriverScheduleResolver {

    constructor(private readonly service: SkiperDriverScheduleService) { }

    @Query()
    getAllSkiperDriverSchedule() {
        console.log('En el resolver')
        return this.service.getAll();
    }
}
