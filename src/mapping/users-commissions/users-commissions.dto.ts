import { CurrencyDto } from "../currency/currency.dto";
import { CategoryLevelDto } from "../category-level/category-level.dto";

import { countrieDto } from "../countries/countrie.dto";
import { UserDto } from "../users/user.dto";
import { ObjectType, InputType } from "type-graphql";

@ObjectType()
export class UsersCommissionsDto {
    id: number;
    amount: number;
    price_btc: number;
    paidout: boolean;
    date_in: Date;
    user_sponsor: UserDto;
    user_referred: UserDto;
    country: countrieDto;
    category_level: CategoryLevelDto;
    currency: CurrencyDto;
}

@InputType()
export class UsersCommissionsInput {
    iduser_sponsor: number;
    iduser_referred: number;
    idcountry_referred: number;
    idcat_level: number;
    idcrypto_currency: number;
    amount: number;
    price_btc: number;
    paidout: boolean;//Opcional
    date_in: Date;
}
