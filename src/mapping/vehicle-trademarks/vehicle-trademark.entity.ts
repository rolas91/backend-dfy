import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('vehicle_trademarks')
export class VehicleTrademark {
    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', { nullable: true, length: 50 }) name: string;
}
