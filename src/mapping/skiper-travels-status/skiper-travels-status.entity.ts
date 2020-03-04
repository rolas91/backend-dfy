import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('skiper_travels_status')
export class SkiperTravelsStatus {
    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', { nullable: false, length: 50 }) name: string;
    @Column('varchar', { nullable: true, length: 20 }) indicator: string;
    @Column('int', { nullable: false }) prevstatus: number;
    @Column('varchar', { nullable: true, length: 20 }) errorstatusprev: string;
    @Column('varchar', { nullable: false, length: 100 }) codigo: string;
    @Column('tinyint', { nullable: false }) bgenerafactura: boolean;
}
