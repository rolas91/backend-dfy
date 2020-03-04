import { ObjectType } from "type-graphql";
import { AppsDto } from "../apps/apps.dto";
import { citiesDto } from "../cities/cities.dto";


@ObjectType()
export class AppCitiesDto {
    idapp: number;
    idcities: string;
    apps: AppsDto;
    cities: citiesDto;
}
