import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { SkiperOrderTracing } from "../skiper-order-tracing/skiper-order-tracing.entity";

@Entity('skiper_orders_status')
export class SkiperOrdersStatus {

    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', { nullable: false, length: 50 }) name: string;
    @Column('varchar', { nullable: false, length: 10 }) indicador: string;
    @OneToMany(type => SkiperOrderTracing,  x => x.orderStatus)
    skiperOrderTracing: SkiperOrderTracing[];
}
