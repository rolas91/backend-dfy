import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Column } from "typeorm";
import { Countrie } from "../countries/countrie.entity";
import { User } from "../users/user.entity";
import { CategoryLevel } from "../category-level/category-level.entity";
import { Currency } from "../currency/currency.entity";
import { IsNotEmpty, IsNumber, IsOptional, IsDate } from "class-validator";

@Entity()
export class UsersCommissions {

    @PrimaryGeneratedColumn() id: number;
    // -- Foraneas para guardarlas sin la inyeccion de dependencias
    @IsNotEmpty() @IsNumber()
    @Column('int') iduser_sponsor: number;

    @IsNotEmpty() @IsNumber()
    @Column('int') iduser_referred: number;

    @IsNotEmpty() @IsNumber()
    @Column('int') idcountry_referred: number;

    @IsNotEmpty() @IsNumber()
    @Column('int') idcat_level: number;

    @IsNotEmpty() @IsNumber()
    @Column('int') idcrypto_currency: number;

    // -- Datos propios de la tabla
    @IsNotEmpty() @IsNumber()
    @Column('decimal', { nullable: false }) amount: number;

    @IsNotEmpty() @IsNumber()
    @Column('decimal', { nullable: false }) price_btc: number;

    @IsOptional() @IsNumber()
    @Column('tinyint', { nullable: true }) paidout: boolean;

    @IsNotEmpty() @IsDate()
    @Column('date', { nullable: false }) date_in: Date;

    // --Objetos para las relaciones uwu
    @ManyToOne(type => User, { nullable: false })
    @JoinColumn({ name: 'iduser_sponsor' }) user_sponsor: User;

    @ManyToOne(type => User, { nullable: false })
    @JoinColumn({ name: 'iduser_referred' }) user_referred: User;

    @ManyToOne(type => Countrie, { nullable: false })
    @JoinColumn({ name: 'idcountry_referred' }) country: Countrie;

    @ManyToOne(type => CategoryLevel, { nullable: false })
    @JoinColumn({ name: 'idcat_level' }) category_level: CategoryLevel;

    @ManyToOne(type => Currency, { nullable: false })
    @JoinColumn({ name: 'idcrypto_currency' }) currency: Currency;
}