import { InputType, ObjectType } from "type-graphql";
import { SkiperAgentDto } from "../skiper-agent/skiper-agent.dto";
import { countrieDto } from "../countries/countrie.dto";
import { SkiperCatCommerceDto } from "../skiper-cat-commerce/skiper-cat-commerce.dto";
import { citiesDto } from "../cities/cities.dto";
import { SkiperCatProductDto } from "../skiper-cat-product-commerce/skiper-cat-product-commerce.dto";

@InputType()
export class CommerceInput {
    id: number;
    namecommerce: string;
    identification_ruc: string;
    phone: string;
    address: string;
    manager: string;
    state: boolean;
    lat: string;
    lon: string;
    url_art: string;
    url_logo: string;
    skiperAgentID: number;
    catCommerceID: number;
    countryID: number;
    cityID: number;
}

@ObjectType()
export class CommerceDto {
    id: number;
    namecommerce: string;
    identification_ruc: string;
    phone: string;
    address: string;
    manager: string;
    state: boolean;
    lat: string;
    lon: string;
    url_art: string;
    url_logo: string;
    skiperAgent: SkiperAgentDto;
    catCommerce: SkiperCatCommerceDto;
    country: countrieDto;
    city: citiesDto;
    skiperCatProductsCommerce: SkiperCatProductDto
}

@ObjectType()
export class UserWithoutCommerceDto {

    constructor(firstname?, lastname?, skiperAgent?) {
        this.firstname = firstname || "";
        this.lastname = lastname || "";
        this.skiperAgent = skiperAgent || null;
    }

    firstname: string;
    lastname: string;
    skiperAgent: SkiperAgentDto;
}