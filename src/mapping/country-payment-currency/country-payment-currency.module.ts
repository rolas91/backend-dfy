import { Module } from '@nestjs/common';
import { CountryPaymentCurrencyService } from './country-payment-currency.service';
import { CountryPaymentCurrencyResolver } from './country-payment-currency.resolver';

@Module({
  providers: [CountryPaymentCurrencyService, CountryPaymentCurrencyResolver]
})
export class CountryPaymentCurrencyModule {}
