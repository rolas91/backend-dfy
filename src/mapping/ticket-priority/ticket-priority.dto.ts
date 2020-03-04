import { InputType, ObjectType } from "type-graphql";

@InputType()
export class TicketPriorityInput {
    id: number;
    name: string;
}

@ObjectType()
export class TicketPriorityDto {
    id: number;
    name: string;
}