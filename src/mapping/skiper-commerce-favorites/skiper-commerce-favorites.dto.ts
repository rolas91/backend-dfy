import { UserDto } from "../users/user.dto";
import { CommerceDto } from "../skiper-commerce/skiper-commerce.dto";
import { ObjectType, InputType } from "type-graphql";

@ObjectType()
export class CommerceFavoritesDto {

    id: number;
    // user:UserDto;
    skiperCommerce: CommerceDto;
}

@ObjectType()
export class OkDto {
    ok: boolean
}

@InputType()
export class CommerceFavoriteInput {
    id: number;
    user_id: number;
    commerce_id: number;
}
