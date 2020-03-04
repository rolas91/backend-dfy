import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { SkiperProductCommerce } from "../skiper-product-commerce/skiper-product-commerce.entity";

@Entity()
export class OptionAddon {

    @PrimaryGeneratedColumn() id:number;

    @Column({nullable:true,length:50}) name:string;

    @Column({nullable:true,length:500}) description:string;

    @Column('double',{nullable:true}) extraPrice:number;

    @ManyToOne(type => SkiperProductCommerce, {nullable: false})
    @JoinColumn({name:'id_skiper_products'}) skiperProducts: SkiperProductCommerce;
}