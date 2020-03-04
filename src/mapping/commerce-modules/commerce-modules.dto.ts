import { ObjectType, InputType } from "type-graphql";

@ObjectType()
export class CommerceModulesDto {
    id: number;
    name: string;
}

@InputType()
export class CommerceModulesInput {
    id: number;
    name: string;
}
