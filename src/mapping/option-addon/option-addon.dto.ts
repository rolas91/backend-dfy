import { ObjectType, InputType } from "type-graphql";
import { SkiperProductCommerceDto } from "../skiper-product-commerce/skiper-product-commerce.dto";

@InputType()
export class OptionAddonInput {
    id:number;
    name:string;
    description:string;
    extraPrice:number;
    skiperProductsID: number;
}

@ObjectType()
export class OptionAddonDto {
    id:number;
    name:string;
    description:string;
    extraPrice:number;
    skiperProducts: SkiperProductCommerceDto;
}