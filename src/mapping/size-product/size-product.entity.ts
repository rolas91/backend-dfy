import { PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, Entity } from "typeorm";
import { SkiperProductCommerce } from "../skiper-product-commerce/skiper-product-commerce.entity";

@Entity()
export class SizeProduct {

    @PrimaryGeneratedColumn() id:number;

    @Column({nullable:true,length:50}) description:string;

    @Column('double',{nullable:true}) extraPrice:number;

    @ManyToOne(type => SkiperProductCommerce, {nullable: false})
    @JoinColumn({name:'id_skiper_products'}) skiperProducts: SkiperProductCommerce;
}
