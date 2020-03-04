import { InputType, ObjectType } from "type-graphql";

@InputType()
export class VehicleTrademarInput {
    id: number;
    name: string;
}

@ObjectType()
export class VehicleTrademarkDto {
    id: number;
    name: string;
}
