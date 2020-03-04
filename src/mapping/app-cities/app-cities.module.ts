import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppCities } from './app-cities.entity';
import { AppCitiesService } from './app-cities.service';
import { AppCitiesResolver } from './app-cities.resolver';

@Module({
    imports:[TypeOrmModule.forFeature([AppCities])],
    providers:[AppCitiesService, AppCitiesResolver],
    exports:[AppCitiesService]
})
export class AppCitiesModule {}
