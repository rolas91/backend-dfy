import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, BeforeInsert } from "typeorm";
import { SkiperOrdersStatus } from "../skiper-orders-status/skiper-orders-status.entity";
import { SkiperOrder } from "../skiper-order/skiper-order.entity";

@Entity()
export class SkiperOrderTracing {

    @PrimaryGeneratedColumn() id:number;
    @BeforeInsert()
    private defaultDate(){
        this.datetracing = new Date();
    }
    @Column('datetime', { nullable: true }) datetracing: Date;
    @Column('int', { nullable: false }) idorderstatus: number;
    @Column('int', { nullable: false }) idorder: number;
    @ManyToOne(type => SkiperOrdersStatus, { nullable: false })
    @JoinColumn({ name: 'idorderstatus' }) orderStatus: SkiperOrdersStatus;
    @ManyToOne(type => SkiperOrder, { nullable: false })
    @JoinColumn({ name: 'idorder' }) order: SkiperOrder;
}