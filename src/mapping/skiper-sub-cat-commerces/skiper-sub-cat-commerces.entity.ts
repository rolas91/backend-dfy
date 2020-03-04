import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SkiperCatCommerce } from '../skiper-cat-commerce/skiper-cat-commerce.entity';

@Entity('skiper_sub_cat_commerces')
export class SkiperSubCatCommerces {
    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', {nullable: false, length: 50}) name: string;
    @Column('int', {nullable: false}) id_cat_commerce: number;
    @Column('longtext', {nullable: true}) url_img: string;

    @ManyToOne(type => SkiperCatCommerce, {nullable: false})
    @JoinColumn({name: 'id_cat_commerce'}) catcommerce: SkiperCatCommerce;
}
