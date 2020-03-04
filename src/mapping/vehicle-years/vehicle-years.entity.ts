import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('vehicle_years')
export class VehicleYears {
    @PrimaryGeneratedColumn() id: number;
    @Column('date', { nullable: true }) year: Date;
}