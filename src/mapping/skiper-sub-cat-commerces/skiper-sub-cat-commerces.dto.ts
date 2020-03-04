import { InputType, ObjectType } from 'type-graphql';
import {SkiperCatCommerceDto} from '../skiper-cat-commerce/skiper-cat-commerce.dto';

@InputType()
export class SkiperSubCatCommerceInput {
    id: number;
    name: string;
    id_cat_commerce: number;
    url_img: string;
}

@ObjectType()
export class SkiperSubCatCommerceDto{
    id: number;
    name: string;
    cat_commerce: SkiperCatCommerceDto;
    url_img: string;
}