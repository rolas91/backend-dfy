import { Test, TestingModule } from '@nestjs/testing';
import { CountryPaymentCurrencyService } from './country-payment-currency.service';

describe('CountryPaymentCurrencyService', () => {
  let service: CountryPaymentCurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryPaymentCurrencyService],
    }).compile();

    service = module.get<CountryPaymentCurrencyService>(CountryPaymentCurrencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
