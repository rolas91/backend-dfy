import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { SkiperOrder } from "../skiper-order/skiper-order.entity";
import { SkiperProductCommerce } from "../skiper-product-commerce/skiper-product-commerce.entity";

@Entity()
export class SkiperOrderDetail {

    @PrimaryColumn("int")
    idorder: number;
    @PrimaryColumn("int")
    iditem: number;
    @Column({ nullable: true}) quantity: number;
    @Column({ nullable: true}) price: number;
    @Column({ nullable: true }) discount: number;
    @Column({ nullable: true, length: 50 }) size: string;
    @Column({ nullable: true, length: 4000 }) addon: string;
    @Column({ nullable: true }) extraPrice: number;

    @ManyToOne( type => SkiperOrder, { nullable: false })
    @JoinColumn({ name: 'idorder'}) skiperOrder: SkiperOrder;

    @ManyToOne( type => SkiperProductCommerce,{ nullable: false })
    @JoinColumn({ name: 'iditem' }) skiperProductCommerce: SkiperProductCommerce;

}
