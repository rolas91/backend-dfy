import { ObjectType } from "type-graphql";

@ObjectType()
export class VehicleCatalogDto {
    id: number;
    name: string;
    url_img_vehicle: string;
}
