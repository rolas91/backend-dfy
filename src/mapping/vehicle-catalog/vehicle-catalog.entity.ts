import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('vehicle_catalog')
export class VehicleCatalog {

    @PrimaryGeneratedColumn() id: number;

    @Column({ nullable: false, length: 80 }) name: string;

    @Column('longtext', { nullable: false }) url_img_vehicle: string;
}
