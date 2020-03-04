import { InputType, ObjectType } from "type-graphql";

@ObjectType()
export class DriverScheduleDto {
    id: number;
    start_time: Date;
    final_time: Date;
    turn: string;
}

@InputType()
export class DriverScheduleInput {
    id: number;
    start_time: Date;
    final_time: Date;
    turn: string;
}
