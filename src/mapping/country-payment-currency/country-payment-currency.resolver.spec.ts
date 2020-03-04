import { Test, TestingModule } from '@nestjs/testing';
import { CountryPaymentCurrencyResolver } from './country-payment-currency.resolver';

describe('CountryPaymentCurrencyResolver', () => {
  let resolver: CountryPaymentCurrencyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryPaymentCurrencyResolver],
    }).compile();

    resolver = module.get<CountryPaymentCurrencyResolver>(CountryPaymentCurrencyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
