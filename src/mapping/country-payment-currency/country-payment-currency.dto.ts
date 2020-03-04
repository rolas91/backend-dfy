import { InputType, ObjectType } from "type-graphql";
import { countrieDto } from '../countries/countrie.dto';
import { PaymentMethodDto } from '../payment-methods/payment-methods.dto';
import { CurrencyDto } from '../currency/currency.dto';

@InputType()
export class CountryPaymentCurrencyInput {
    id: number;
    idcountry: number;
    idpayment: number;
    idcurrency: number;
}

@ObjectType()
export class CountryPaymentCurrencyDto {
    id: number;
    countrie: countrieDto;
    paymentmethod: PaymentMethodDto;
    currency: CurrencyDto;
}