import { InputType, ObjectType } from "type-graphql";
import { UserDto } from "../users/user.dto";
import { CatPlacesUsersDto } from "../cat-places-users/cat-places-users.dto";

@InputType()
export class UsersAddressInput {

    id: number;
    iduser: number;
    placeid: string;
    id_cat_place_user: number;
    lat: number;
    lng: number;
    address: string;
    apt_house_number: string;
    point_references: string;
}

@ObjectType()
export class UsersAddressDto {

    id: number;
    placeid: string;
    lat: number;
    lng: number;
    address: string;
    apt_house_number: string;
    point_references: string;
    catplaceuser: CatPlacesUsersDto;
    user: UserDto;
}