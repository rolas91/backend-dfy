import { Resolver, Query, Args } from '@nestjs/graphql';
import { CountryPaymentCurrencyService } from './country-payment-currency.service';
import { ParseIntPipe } from '@nestjs/common';


@Resolver('CountryPaymentCurrency')
export class CountryPaymentCurrencyResolver {
    constructor(
        private readonly countrypaymentcurrencyservice: CountryPaymentCurrencyService
    ) { }

    @Query('countrypaymentcurrency')
    async countrypaymentcurrency() {
        return this.countrypaymentcurrencyservice.getAll();
    }

    @Query()
    async searchcountrypaymentcurrency(@Args('id', ParseIntPipe) id: number) {
        return this.countrypaymentcurrencyservice.getById(id);
    }

}
