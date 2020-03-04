import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { SkiperCommerce } from "../skiper-commerce/skiper-commerce.entity";

@Entity()
export class UploadCommerceAppearance {

    @PrimaryGeneratedColumn() id: number;

    @Column('longtext',{nullable:false}) url_img_commerceoutside_one:string;
    @Column('longtext',{nullable:false}) url_img_commerceoutside_two:string;
    @Column('longtext',{nullable:false}) url_img_commerceinside_one:string;
    @Column('longtext',{nullable:false}) url_img_commerceinside_two:string;
    @Column('longtext',{nullable:false}) url_img_commerceinside_three:string;
    @Column('longtext',{nullable:false}) url_img_commerceinside_four:string;

    @ManyToOne(type => SkiperCommerce, {nullable: false})
    @JoinColumn({name:'idcommerce'}) skiperCommerce: SkiperCommerce;
}
