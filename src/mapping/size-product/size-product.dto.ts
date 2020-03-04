import { ObjectType, InputType } from "type-graphql";
import { SkiperProductCommerceDto } from "../skiper-product-commerce/skiper-product-commerce.dto";

@ObjectType()
export class SizeProductDto {
    id:number;
    description:string;
    extraPrice:number;
    skiperProducts: SkiperProductCommerceDto;
}

@InputType()
export class SizeProductInput {
    id:number;
    description:string;
    extraPrice:number;
    skiperProductsID: number;
}
