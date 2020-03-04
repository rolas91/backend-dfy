import { InputType, ObjectType } from "type-graphql";

@InputType()
export class TransactionTypeInput {
    id: number;
    name: string;
    sign: number;
}

@ObjectType()
export class TransactionTypeDto {
    id: number;
    name: string;
    sign: number;
}