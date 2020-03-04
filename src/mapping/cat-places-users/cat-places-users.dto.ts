import { ObjectType } from "type-graphql";

@ObjectType()
export class CatPlacesUsersDto{
    id: number;
    name: string;
    url_img: string;
}