import { InputType, ObjectType } from "type-graphql";

@InputType()
export class TicketStatusInput {
    id: number;
    name: string;
}

@ObjectType()
export class TicketStatusDto {
    id: number;
    name: string;
}