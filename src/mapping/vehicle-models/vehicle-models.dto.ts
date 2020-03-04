import { InputType, ObjectType } from "type-graphql";

@InputType()
export class VehicleModelsInput {
    id: number;
    name: string;
}

@ObjectType()
export class VehicleModelsDto {
    id: number;
    name: string;
}