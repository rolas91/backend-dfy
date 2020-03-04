import { InputType, ObjectType } from "type-graphql";

@InputType()
export class VehicleYearsInput {
    id: number;
    year: Date;
}

@ObjectType()
export class VehicleYearsDto {
    id: number;
    year: Date;
}