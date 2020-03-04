import { InputType, ObjectType} from "type-graphql";

import { SkiperOrderDto } from "../skiper-order/skiper-order.dto";
import { SkiperProductCommerceDto } from "../skiper-product-commerce/skiper-product-commerce.dto";

@InputType()
export class SkiperOrderDetailInput {
    quantity: number;
    price: number;
    discount: number;
    size: string;
    addon: string;
    extraPrice: number;
    orderID: number;
    itemID: number;
}

@ObjectType()
export class SkiperOrderDetailDto {
    idorder: number;
    iditem: number;
    quantity: number;
    price: number;
    discount: number;
    size: string;
    addon: string;
    extraPrice: number;
    skiperOrder: SkiperOrderDto;
    skiperProductCommerce: SkiperProductCommerceDto;
}