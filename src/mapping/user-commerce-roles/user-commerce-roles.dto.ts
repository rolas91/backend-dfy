import { ObjectType, InputType } from "type-graphql";
import { UserDto } from "../users/user.dto";
import { CommerceDto } from "../skiper-commerce/skiper-commerce.dto";
import { CommerceRolDto } from "../commerce-rol/commerce-rol.dto";

@InputType()
export class UserCommerceRolesInput {
    id:number;
    userID:number;
    skiperCommerceID: number;
    rolID: number;
}

@ObjectType()
export class UserCommerceRolesDto {
    
    id:number;
    user:UserDto;
    skiperCommerce: CommerceDto;
    rol: CommerceRolDto;
}