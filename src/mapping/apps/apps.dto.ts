import { InputType, ObjectType } from "type-graphql";
import { AppCitiesDto } from "../app-cities/app-cities.dto";

@InputType()
export class AppsInput {
    id: number;
    name: string;
    description: string;
}

@ObjectType()
export class AppsDto {
    id: number;
    name: string;
    description: string;
    appCities: AppCitiesDto[];
}