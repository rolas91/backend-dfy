import { InputType, ObjectType } from "type-graphql";

@InputType()
export class KindTicketInput {
    id: number;
    name: string;
}

@ObjectType()
export class KindTicketDto {
    id: number;
    name: string;
}