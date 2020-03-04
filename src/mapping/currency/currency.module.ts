import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from './currency.entity';
import { CurrencyService } from './currency.service';
import { CurrencyResolver } from './currency.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Currency])],
  providers: [CurrencyService, CurrencyResolver],
  exports: [CurrencyService]
})
export class CurrencyModule { }
