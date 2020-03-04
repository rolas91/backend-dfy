import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm";
import { Countrie } from '../countries/countrie.entity';
import { PaymentMethods } from '../payment-methods/payment-methods.entity';
import { Currency } from '../currency/currency.entity';


@Entity('country_payment_currency')
export class CountryPaymentCurrency {
    @PrimaryGeneratedColumn() id: number;

    @Column({ nullable: false }) idcountry: number;

    @Column({ nullable: false }) idpayment: number;

    @Column({ nullable: false }) idcurrency: number;

    @ManyToOne(type => Countrie, { nullable: false })
    @JoinColumn({ name: 'idcountry' }) countrie: Countrie;

    @ManyToOne(type => PaymentMethods, { nullable: false })
    @JoinColumn({ name: 'idpayment' }) paymentmethod: PaymentMethods;

    @ManyToOne(type => Currency, { nullable: false })
    @JoinColumn({ name: 'idcurrency' }) currency: Currency;

}