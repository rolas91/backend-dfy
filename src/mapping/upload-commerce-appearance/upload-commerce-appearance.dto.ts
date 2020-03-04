import { ObjectType } from "type-graphql";
import { CommerceDto } from "../skiper-commerce/skiper-commerce.dto";

@ObjectType()
export class UploadCommerceAppearanceDto {
    url_img_commerceoutside_one:string;
    url_img_commerceoutside_two:string;
    url_img_commerceinside_one:string;
    url_img_commerceinside_two:string;
    url_img_commerceinside_three:string;
    url_img_commerceinside_four:string;
    skiperCommerce: CommerceDto;
}
