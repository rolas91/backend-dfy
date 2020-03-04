import { InputType, ObjectType } from "type-graphql";

@ObjectType()
export class CommerceRolDto {
    id:number;
    name:string;
}
@InputType()
export class CommerceRolInput {
    id:number;
    name:string;
}