import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { SkiperCommerce } from "../skiper-commerce/skiper-commerce.entity";
import { SkiperProductCommerce } from '../skiper-product-commerce/skiper-product-commerce.entity';


@Entity('skiper_cat_products_commerces')
export class SkiperCatProductsCommerce {

    @PrimaryGeneratedColumn() id:number;

    @Column('varchar',{nullable:true,length:50}) name:string;

    @Column('varchar',{nullable:true,length:500})description:string;

    @Column('longtext',{nullable:false}) url_img_product:string;

    @ManyToOne(type => SkiperCommerce, {nullable: false})
    @JoinColumn({name:'idcommerce'}) skiperCommerce: SkiperCommerce;

    @OneToMany(type => SkiperProductCommerce, x => x.skiperProducts)
    skiperProductCommerce: SkiperProductCommerce[];

}
