import { Injectable } from '@nestjs/common';
import { CountryPaymentCurrency } from './country-payment-currency.entity';
import { Repository } from 'typeorm';
import { CountryPaymentCurrencyInput } from './country-payment-currency.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CountryPaymentCurrencyService {
    constructor(
        @InjectRepository(CountryPaymentCurrency)
        private readonly repository: Repository<CountryPaymentCurrency>) { }

    async getAll(): Promise<CountryPaymentCurrency[]> {
        return await this.repository.find();
    }
    async getById(id: number): Promise<CountryPaymentCurrency> {
        return await this.repository.findOneOrFail({
            relations: ["countrie", "paymentmethod", "currency"],
            where: { id: id }
        });
    }

    private parseCountryPaymentCurrency(input: CountryPaymentCurrencyInput): CountryPaymentCurrency {
        let countrypaymentcurrency: CountryPaymentCurrency = new CountryPaymentCurrency();
        countrypaymentcurrency.idcountry = input.idcountry;
        countrypaymentcurrency.idcurrency = input.idcountry;
        countrypaymentcurrency.idpayment = input.idpayment;
        return countrypaymentcurrency;
    }
}
