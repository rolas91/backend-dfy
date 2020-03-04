import { InputType, ObjectType } from "type-graphql";

@InputType()
export class TicketCategoryInput {
    id: number;
    name: string;
}

@ObjectType()
export class TicketCategoryDto {
    id: number;
    name: string;
}